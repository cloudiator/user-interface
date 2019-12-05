/**
 * Model Describing Columns of the abstracted Resource Overview Component.
 */
export interface TableColumns {
  [key: string]: {
    value: string;
    selectionFn?: (any) => string;
  };
}
