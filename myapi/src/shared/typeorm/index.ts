import { CreateRolesTable1675090192981 } from "./migrations/1675090192981-CreateRolesTable";
import { DataSource } from "typeorm";
import { Role } from "@roles/entities/Role";

export const dataSource = new DataSource({
  type: "sqlite",
  database: "./db.sqlite",
  entities: [Role],
  migrations: [CreateRolesTable1675090192981],
});
