import { inject, injectable } from "tsyringe";
import { Role } from "@roles/entities/Role";
import { AppError } from "@shared/errors/AppError";
import { IRolesRepository } from "@roles/repositories/IRolesRepository";

type ShowRoleParams = {
  id: string;
};

@injectable()
export class ShowRoleUseCase {
  constructor(
    @inject("RolesRepository")
    private rolesRepository: IRolesRepository,
  ) {}

  async execute({ id }: ShowRoleParams): Promise<Role> {
    const role = await this.rolesRepository.findById(id);
    if (!role) {
      throw new AppError("Role not found", 404);
    }
    return role;
  }
}
