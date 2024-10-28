export type FlattenT<T extends Iterable<any>> = T extends Iterable<infer E>
  ? E
  : never;
