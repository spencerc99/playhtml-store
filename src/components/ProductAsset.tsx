import { StoreItem } from "../store";

export function ProductAsset({ component, ...restOfItem }: StoreItem) {
  return component({ ...restOfItem });
}
