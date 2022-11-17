import { DefaultOptionType, SingleValueType, FieldNames } from '../Cascade';

export function toPathOptions(
  valueCells: SingleValueType,
  options: DefaultOptionType[],
  fieldNames: FieldNames,
) {
  let currentList = options;
  const valueOptions: {
    value: SingleValueType[number];
    index: number;
    option: DefaultOptionType;
  }[] = [];

  for (let i = 0; i < valueCells.length; i += 1) {
    const valueCell = valueCells[i];
    const foundIndex = currentList?.findIndex((option) => {
      const val = option[fieldNames.value];
      return val === valueCell;
    });
    const foundOption = foundIndex !== -1 ? currentList?.[foundIndex] : null;

    valueOptions.push({
      value: foundOption?.[fieldNames.value] ?? valueCell,
      index: foundIndex,
      option: foundOption,
    });

    currentList = foundOption?.[fieldNames.children];
  }

  return valueOptions;
}
