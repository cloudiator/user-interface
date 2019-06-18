interface TableColumns {
  [key: string]: {
    value: string;
    selectionFn?: (any) => string;
  };
}
