import { IsEmail } from "../../src/decorator/decorators.ts";

export class BaseContent {
  @IsEmail()
  email!: string;
}
