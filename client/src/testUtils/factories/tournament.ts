import { Sync } from "factory.ts";
import { faker } from "@faker-js/faker";

export const tournamentFactory = Sync.makeFactory<Tournament>({
  id: faker.datatype.number(),
  name: faker.datatype.string(),
  course_name: faker.datatype.string(),
  date: faker.date.recent(),
  created_at: faker.date.recent(),
  updated_at: faker.date.recent(),
});
