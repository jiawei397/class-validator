import { Validate } from "../../src/decorator/decorators.ts";
import { CustomTextLength } from "./CustomTextLength.ts";

export class Post {
  @Validate(CustomTextLength, {
    message: "Wrong post title",
  })
  title!: string;
}
