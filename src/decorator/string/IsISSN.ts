import { ValidationOptions } from "../ValidationOptions.ts";
import { buildMessage, ValidateBy } from "../common/ValidateBy.ts";
import {isISSN as isISSNValidator} from "../../deps.ts";
import ValidatorJS from "validator/types.ts";

export const IS_ISSN = "isISSN";

/**
 * Checks if the string is a ISSN.
 * If given value is not a string, then it returns false.
 */
export function isISSN(
  value: unknown,
  options?: ValidatorJS.IsISSNOptions,
): boolean {
  return typeof value === "string" && isISSNValidator(value, options);
}

/**
 * Checks if the string is a ISSN.
 * If given value is not a string, then it returns false.
 */
export function IsISSN(
  options?: ValidatorJS.IsISSNOptions,
  validationOptions?: ValidationOptions,
): PropertyDecorator {
  return ValidateBy(
    {
      name: IS_ISSN,
      constraints: [options],
      validator: {
        validate: (value, args): boolean => isISSN(value, args!.constraints[0]),
        defaultMessage: buildMessage(
          (eachPrefix) => eachPrefix + "$property must be a ISSN",
          validationOptions,
        ),
      },
    },
    validationOptions,
  );
}
