export type UnionToIntersection<U> =
  (U extends any ? (k: U)=>void : never) extends ((k: infer I)=>void) ? I : never;

export type MergeIntersectionTypes<T> = {
    [key in keyof T]: T[key]
};

export type MergeUnionTypes<U> = MergeIntersectionTypes<UnionToIntersection<U>>;

export type PickPropType<T, P> = P extends keyof T ? T[P] : {};
