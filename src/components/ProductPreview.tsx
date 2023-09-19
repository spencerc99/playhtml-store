import { StoreItem } from "../store";
import { Link } from "react-router-dom";
import { ProductAsset } from "./ProductAsset";
import classNames from "classnames";

export function ProductPreview(item: StoreItem) {
  return (
    <div className="itemPreview">
      <ProductAsset
        {...item}
        className={classNames("itemPreviewImg", item.className)}
      />
      <Link to={`/product/${item.id}`}>
        <h3 className="itemPreviewTitle">{item.name}</h3>
      </Link>
    </div>
  );
}
