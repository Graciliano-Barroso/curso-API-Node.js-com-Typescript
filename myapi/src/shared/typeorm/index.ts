import { DataSource } from "typeorm";
import { Role } from "@roles/entities/Role";
import { CreateRolesTable1675090192981 } from "./migrations/1675090192981-CreateRolesTable";
import { CreateUsersTable1676299947201 } from "./migrations/1676299947201-CreateUsersTable";

export const dataSource = new DataSource({
  type: "sqlite",
  database: "./db.sqlite",
  entities: [Role],
  migrations: [CreateRolesTable1675090192981, CreateUsersTable1676299947201],
});
