import { test, expect } from "bun:test";
import { styleText } from ".";

test("should return a styled string with a single color", () => {
  expect(styleText("red", "Hello")).toEqual("\u001B[31mHello\u001B[39m");
});

test("should return a styled string with multiple colors and styles", () => {
  expect(styleText(["red", "bold"], "Hello")).toEqual(
    "\u001B[1m\u001B[31mHello\u001B[39m\u001B[22m",
  );
});
