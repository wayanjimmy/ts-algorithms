import { test } from "https://deno.land/std/testing/mod.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { fibonacci } from "./fibonacci.ts";

test({
  name: "[fibonacci] should return `3`",
  fn: () => assertEquals(fibonacci(4), 3)
});

test({
  name: "[fibonacci] should return `34`",
  fn: () => assertEquals(fibonacci(9), 34)
});
