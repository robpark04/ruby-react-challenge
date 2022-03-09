import { Sync } from "factory.ts";
import { faker } from "@faker-js/faker";

export const playerFactory = Sync.makeFactory<Player>({
  id: faker.datatype.number(),
  name: faker.datatype.string(),
  handicap: faker.datatype.number(),
  location: faker.datatype.string(),
  created_at: faker.date.recent(),
  updated_at: faker.date.recent(),
});
