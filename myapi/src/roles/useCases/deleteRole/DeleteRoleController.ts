import { container } from "tsyringe";
import { DeleteRoleUseCase } from "./DeleteRoleUseCase";
import { Request, Response } from "express";

export class DeleteRoleController {
  async handle(request: Request, response: Response): Promise<Response> {
    const deleteRoleUseCase = container.resolve(DeleteRoleUseCase);
    const { id } = request.params;
    await deleteRoleUseCase.execute({ id });

    return response.status(204).send();
  }
}
