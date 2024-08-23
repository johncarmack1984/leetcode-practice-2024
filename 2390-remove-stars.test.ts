import { expect, test } from "bun:test";
import { removeStars } from "./2390-remove-stars";

test("removeStars", () => {
  expect(removeStars("leet**cod*e")).toBe("lecoe");
});

test("removeStars", () => {
  expect(removeStars("erase*****")).toBe("");
});
