import {
  Equals,
  IsNotEmpty,
  IsOptional,
  ValidateIf,
} from "../../src/decorator/decorators.ts";
import { Validator } from "../../src/validation/Validator.ts";

import { assert, assertEquals } from "https://deno.land/std@0.100.0/testing/asserts.ts";


const validator = new Validator();

Deno.test("shouldn't validate a property when the condition is false", () => {
  class MyClass {
    @ValidateIf((o) => false)
    @IsNotEmpty()
    title!: string;
  }

  const model = new MyClass();
  return validator.validate(model).then((errors) => {
    assertEquals(errors.length, 0);
  });


});

Deno.test("should validate a property when the condition is true", () => {
  class MyClass {
    @ValidateIf((o) => true)
    @IsNotEmpty()
    title: string = "";
  }

  const model = new MyClass();
  return validator.validate(model).then((errors) => {
    assertEquals(errors.length, 1);
    assertEquals(errors[0].target, model);
    assertEquals(errors[0].property, "title");
    assertEquals(errors[0].constraints, {
      isNotEmpty: "title should not be empty",
    });
    assertEquals(errors[0].value, "");
  });
});


Deno.test("should pass the object being validated to the condition function", () => {
  class MyClass {
    @ValidateIf((o) => {
      assert(o instanceof MyClass);
      assertEquals(o.title, 'title');
      return true;
    })
    @IsNotEmpty()
    title: string = "title";
  }

  const model = new MyClass();
  return validator.validate(model).then((errors) => {
    assertEquals(errors.length, 0);
  });


});

Deno.test("should validate a property when value is empty", () => {

  class MyClass {
    @IsOptional()
    @Equals("test")
    title: string = "";
  }

  const model = new MyClass();
  return validator.validate(model).then((errors) => {
    assertEquals(errors.length, 1);
    assertEquals(errors[0].target, model);
    assertEquals(errors[0].property, "title");
    assertEquals(errors[0].constraints, {
      equals: "title must be equal to test",
    });
    assertEquals(errors[0].value, "");
  });
});

Deno.test("should validate a property when value is supplied", () => {
  class MyClass {
    @IsOptional()
    @Equals("test")
    title: string = "bad_value";
  }

  const model = new MyClass();
  return validator.validate(model).then((errors) => {
    assertEquals(errors.length, 1);
    assertEquals(errors[0].target, model);
    assertEquals(errors[0].property, "title");
    assertEquals(errors[0].constraints, {
      equals: "title must be equal to test",
    });
    assertEquals(errors[0].value, "bad_value");
  });
});