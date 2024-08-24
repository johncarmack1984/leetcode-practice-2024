import { expect, test } from "bun:test";
import { predictPartyVictory } from "./649-dota2-senate";

test("predictPartyVictory", () => {
  expect(predictPartyVictory("RD")).toBe("Radiant");
});

test("predictPartyVictory", () => {
  expect(predictPartyVictory("RDD")).toBe("Dire");
});
