import { Role } from "@roles/entities/Role";
import { RefreshToken } from "@users/entities/RefreshToken";
import { User } from "@users/entities/User";
import { DataSource } from "typeorm";
import { CreateRolesTable1675090192981 } from "./migrations/1675090192981-CreateRolesTable";
import { CreateUsersTable1676299947201 } from "./migrations/1676299947201-CreateUsersTable";
import { AddRoleIdToUsersTable1676302141631 } from "./migrations/1676302141631-AddRoleIdToUsersTable";
import { CreateRefreshTokensTable1677171316584 } from "./migrations/1677171316584-CreateRefreshTokensTable";

export const dataSource = new DataSource({
  type: "sqlite",
  database: "./db.sqlite",
  entities: [Role, User, RefreshToken],
  migrations: [
    CreateRolesTable1675090192981,
    CreateUsersTable1676299947201,
    AddRoleIdToUsersTable1676302141631,
    CreateRefreshTokensTable1677171316584,
  ],
});
