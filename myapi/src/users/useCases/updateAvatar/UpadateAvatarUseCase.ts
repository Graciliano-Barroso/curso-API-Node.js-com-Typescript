import { inject, injectable } from "tsyringe";
import path from "node:path";
import fs from "node:fs";
import { AppError } from "@shared/errors/AppError";
import { User } from "@users/entities/User";
import { IUsersRepository } from "@users/repositories/IUsersRepository";
import uploadConfig from "@config/upload";

type UpdateAvatarDTO = {
  userId: string;
  avatarFilename: string;
};

@injectable()
export class UpdateAvatarUseCase {
  constructor(
    @inject("UsersRepository") private usersRespository: IUsersRepository,
  ) {}

  async execute({ avatarFilename, userId }: UpdateAvatarDTO): Promise<User> {
    const user = await this.usersRespository.findById(userId);
    if (!user) {
      throw new AppError("Only authenticated users can change avatar, 401");
    }
    if (user.avatar) {
      const userAvatarfilePath = path.join(uploadConfig.directory, user.avatar);
      const userAvatarFileExists = await fs.promises.stat(userAvatarfilePath);
      if (userAvatarFileExists) {
        await fs.promises.unlink(userAvatarfilePath);
      }
    }
    user.avatar = avatarFilename;
    return this.usersRespository.save(user);
  }
}
