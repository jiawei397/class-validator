import {
  Contains,
  IsDate,
  IsEmail,
  IsFQDN,
  IsInt,
  Length,
  ValidateNested,
} from "../../src/decorator/decorators.ts";
import { Tag } from "./Tag.ts";

export class Post {
  @Length(10, 20, {
    message: "Incorrect length!",
  })
  title!: string;

  @ValidateNested()
  tags!: Set<Tag>;
}
