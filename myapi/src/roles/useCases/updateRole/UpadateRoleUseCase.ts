import { inject, injectable } from "tsyringe";
import { Role } from "@roles/entities/Role";
import { AppError } from "@shared/errors/AppError";
import { IRolesRepository } from "@roles/repositories/IRolesRepository";

type UpdateRoleParams = {
  id: string;
  name: string;
};

@injectable()
export class UpdateRoleUseCase {
  constructor(
    @inject("RolesRepository")
    private rolesRepository: IRolesRepository,
  ) {}

  async execute({ id, name }: UpdateRoleParams): Promise<Role> {
    const role = await this.rolesRepository.findById(id);
    if (!role) {
      throw new AppError("Role not found", 404);
    }
    const roleWithSameName = await this.rolesRepository.findByName(name);
    if (roleWithSameName && role.name !== roleWithSameName.name) {
      throw new AppError("Role name not informed or already in use");
    }
    role.name = name;
    return this.rolesRepository.save(role);
  }
}
