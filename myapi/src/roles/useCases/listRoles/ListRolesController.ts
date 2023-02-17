import { container } from "tsyringe";
import { Request, Response } from "express";
import { ListRolesUseCase } from "./ListRolesUseCase";

export class ListUsersController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listRolesUseCase = container.resolve(ListRolesUseCase);
    const page =
      request.query.page && Number(request.query.page) > 0
        ? Number(request.query.page)
        : 1;
    const limit =
      request.query.limit && Number(request.query.limit) > 0
        ? Number(request.query.limit)
        : 15;
    const roles = await listRolesUseCase.execute({ page, limit });
    return response.json(roles);
  }
}
