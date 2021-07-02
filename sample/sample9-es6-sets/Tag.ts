import {
  Contains,
  IsDate,
  IsEmail,
  IsFQDN,
  IsInt,
  Length,
} from "../../src/decorator/decorators";

export class Tag {
  @Length(10, 20, {
    message: "Tag value is too short or long",
  })
  value: string;
}
