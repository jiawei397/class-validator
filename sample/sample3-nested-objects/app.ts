import { Validator } from "../../src/validation/Validator.ts";
import { Post } from "./Post.ts";
import { Tag } from "./Tag.ts";

let validator = new Validator();

let tag1 = new Tag();
tag1.name = "ja";

let tag2 = new Tag();
tag2.name = "node.js";

let post1 = new Post();
post1.title = "Hello world";
post1.tags = [tag1, tag2];

validator.validate(post1).then((result) => {
  console.log("1. should not pass: ", result);
});
