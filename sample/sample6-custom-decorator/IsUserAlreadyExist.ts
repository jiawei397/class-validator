import { registerDecorator } from "../../src/index.ts";
import { ValidationOptions } from "../../src/decorator/ValidationOptions.ts";
import { ValidationArguments } from "../../src/validation/ValidationArguments.ts";

export function IsUserAlreadyExist(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: "isUserAlreadyExist",
      async: true,
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate(value: any, args: ValidationArguments) {
          return new Promise((ok) => {
            if (value !== "admin" && value !== "user") {
              ok(true);
            } else {
              ok(false);
            }
          });
        },
      },
    });
  };
}
