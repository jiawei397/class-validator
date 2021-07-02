import {
  Contains,
  IsInt,
  MaxLength,
  MinLength,
} from "../../src/decorator/decorators.ts";
import { BaseContent } from "./BaseContent.ts";

export class Post extends BaseContent {
  @MinLength(10)
  @MaxLength(20)
  title!: string;

  @Contains("hello")
  text!: string;

  @IsInt()
  rating!: number;
}
