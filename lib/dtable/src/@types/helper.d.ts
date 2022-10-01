type UnionToIntersection<U> =
  (U extends any ? (k: U)=>void : never) extends ((k: infer I)=>void) ? I : never;

type MergeIntersectionTypes<T> = {
    [key in keyof T]: T[key]
};

type MergeUnionTypes<U> = MergeIntersectionTypes<UnionToIntersection<U>>;
