import { instanceToInstance } from "class-transformer";
import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateAvatarUseCase } from "./UpadateAvatarUseCase";

export class UpdateAvatarController {
  async handle(request: Request, response: Response): Promise<Response> {
    const upadateAvatarUseCase = container.resolve(UpdateAvatarUseCase);
    const user = await upadateAvatarUseCase.execute({
      userId: request.user.id,
      avatarFilename: request.file.filename,
    });
    return response.json(instanceToInstance(user));
  }
}
