import { registerDecorator } from "../../src/index.ts";
import { ValidationOptions } from "../../src/decorator/ValidationOptions.ts";
import { ValidatorConstraintInterface } from "../../src/validation/ValidatorConstraintInterface.ts";
import { ValidatorConstraint } from "../../src/decorator/decorators.ts";
import { ValidationArguments } from "../../src/validation/ValidationArguments.ts";

export function IsLongerThan(
  property: string,
  validationOptions?: ValidationOptions,
) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [property],
      validator: IsLongerThanConstraint,
    });
  };
}

@ValidatorConstraint({ name: "isLongerThan" })
export class IsLongerThanConstraint implements ValidatorConstraintInterface {
  validate(value: any, args: ValidationArguments) {
    const [relatedPropertyName] = args.constraints;
    const relatedValue = (args.object as any)[relatedPropertyName];
    return typeof value === "string" && typeof relatedValue === "string" &&
      value.length > relatedValue.length;
  }
}
