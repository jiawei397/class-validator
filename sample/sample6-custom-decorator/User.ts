import { IsUserAlreadyExist } from "./IsUserAlreadyExist.ts";
import { IsLongerThan } from "./IsLongerThan.ts";

export class User {
  @IsUserAlreadyExist({
    message: "User with name $value already exists",
  })
  firstName!: string;

  @IsLongerThan("firstName", {
    message: "User's last name must be longer than firstName",
  })
  lastName!: string;
}
