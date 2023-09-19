import { useLoaderData } from "react-router-dom";
import { StoreItem, doesItemHavePrice } from "../store";
import "./ProductDetail.scss";
import { ProductAsset } from "../components/ProductAsset";
import classNames from "classnames";

export function ProductDetail() {
  const { item } = useLoaderData() as { item: StoreItem };
  const { name, description, sourceUrl, originalPrice, maxPrice } = item;

  const subtotal = doesItemHavePrice(item)
    ? item.price
    : originalPrice * (1 - item.discount);

  const finalPrice = Math.min(
    Math.max(Math.round(subtotal), 1),
    maxPrice || Infinity
  );
  const discountPercent = doesItemHavePrice(item)
    ? finalPrice / originalPrice
    : item.discount * 100;

  return (
    <div className="itemDetail">
      <div className="itemDetailAssets">
        <ProductAsset
          {...item}
          className={classNames(item.className, "itemDetailImg")}
        />
      </div>
      <div className="itemDetailText">
        <h1 className="itemDetailTitle">{name}</h1>
        <p className="itemDetailDescription">{description}</p>

        {/* dimensions */}
        {/* for inquiries */}
        {sourceUrl && (
          <p>
            sourced from <a href={sourceUrl}>the internet</a>.
          </p>
        )}

        <div className="itemDetailCtas">
          <h3 className="itemDetailPrice">
            ${finalPrice} <s>${originalPrice}</s> {discountPercent}% off
          </h3>
          <button className="itemDetailCta">buy</button>
        </div>
      </div>
    </div>
  );
}
