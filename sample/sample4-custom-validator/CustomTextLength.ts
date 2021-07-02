import { ValidatorConstraintInterface } from "../../src/validation/ValidatorConstraintInterface.ts";
import { ValidatorConstraint } from "../../src/decorator/decorators.ts";

@ValidatorConstraint()
export class CustomTextLength implements ValidatorConstraintInterface {
  validate(text: string) {
    return text.length > 1 && text.length < 10;
  }
}
