import { AssetData } from '../app/ticker/types';

export function sortAssetDataFunction(
  a: AssetData,
  b: AssetData,
  property: string
) {
  const aValue = a[property].toUpperCase();
  const bValue = b[property].toUpperCase();

  if (aValue > bValue) {
    return 1;
  } else if (aValue < bValue) {
    return -1;
  } else {
    return 0;
  }
}
