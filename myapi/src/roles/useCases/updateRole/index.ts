import { RolesRepository } from "@roles/repositories/RolesRepository";
import { UpdateRoleUseCase } from "./UpadateRoleUseCase";
import { UpadateRoleController } from "./UpdateRoleController";

const rolesRepository = RolesRepository.getInstance();
const updateRoleUseCase = new UpdateRoleUseCase(rolesRepository);
export const upadateRolesController = new UpadateRoleController(
  updateRoleUseCase,
);
