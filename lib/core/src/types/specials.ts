export type NullValue = null | undefined;

export type EmptyValue = null | undefined | '';

export type FalsyValue = null | undefined | '' | false | 0 | -0 | typeof NaN | 0n;

export type NullableString = string | null | undefined;
