// deno test test/utils.spec.ts
import { convertToArray } from "../src/utils/index.ts";

import { assert, assertEquals, assertArrayIncludes } from "https://deno.land/std@0.100.0/testing/asserts.ts";

Deno.test("convert Set into array", () => {
  const setExample = new Set<string>();
  setExample.add("hello");
  setExample.add("world");
  const newArr = convertToArray(setExample);
  assert(Array.isArray(newArr));
  assertEquals(newArr.length, 2);
  assertArrayIncludes(newArr, ["hello"]);
  assertArrayIncludes(newArr, ["world"]);
});

//   it("convert Map into array of values", () => {
Deno.test("convert Map into array of values", () => {
  const map = new Map<string, string>();
  map.set("key1", "hello");
  map.set("key2", "world");
  const newArr = convertToArray(map);

  assert(Array.isArray(newArr));
  assertEquals(newArr.length, 2);
  assertArrayIncludes(newArr, ["hello"]);
  assertArrayIncludes(newArr, ["world"]);
});

Deno.test("convert Set into array", () => {
  const setExample = new Set<string>();
  setExample.add("hello");
  setExample.add("world");
  const newArr = convertToArray(setExample);
  assert(Array.isArray(newArr));
  assertEquals(newArr.length, 2);
  assertArrayIncludes(newArr, ["hello"]);
  assertArrayIncludes(newArr, ["world"]);
});
