import {
  ArrayMaxSize,
  ArrayMinSize,
  ArrayNotEmpty,
  Contains,
  IsDate,
  IsEmail,
  IsEnum,
  IsFQDN,
  IsInt,
  MaxLength,
  MinLength,
} from "../../src/decorator/decorators.ts";

export enum PostType {
  Public,
  Private,
}

export class Post {
  @MinLength(10)
  @MaxLength(20)
  title!: string;

  @Contains("hello")
  text!: string;

  @IsInt()
  rating!: number;

  @IsEmail()
  email!: string;

  @IsFQDN()
  site!: string;

  @IsDate()
  createDate!: Date;

  @ArrayNotEmpty()
  @ArrayMinSize(2)
  @ArrayMaxSize(5)
  @MinLength(3, {
    each: true,
    message: "Tag is too short. Minimal length is $value characters",
  })
  @MaxLength(50, {
    each: true,
    message: "Tag is too long. Maximal length is $value characters",
  })
  tags!: string[] | null;

  @IsEnum(PostType)
  type!: PostType;
}
