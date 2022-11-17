import { DefaultOptionType, FieldNames, InternalFieldNames } from '../Cascade';

export function filterFieldNames(fieldNames?: FieldNames): InternalFieldNames {
  const { label, value, children } = fieldNames || {};
  const val = value || 'value';
  return {
    label: label || 'label',
    value: val,
    key: val,
    children: children || 'children',
  };
}
export function isLeaf(option: DefaultOptionType, fieldName: FieldNames) {
  return !option[fieldName.children]?.length;
}
