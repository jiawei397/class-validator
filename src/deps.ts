export * from 'https://deno.land/x/deno_validator@v0.0.5/mod.ts';
import type ValidatorJS from 'https://deno.land/x/deno_validator@v0.0.5/types.ts';
export type { ValidatorJS };

export * from 'https://esm.sh/libphonenumber-js@1.9.20';

export type CountryCode = any; // TODO libphonenumber-js lost this type, and I has no time to fix it.

export const version = '0.0.2';
