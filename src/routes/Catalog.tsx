import { Store } from "../store";
import { ProductPreview } from "../components/ProductPreview";
import { HeaderBanner } from "../components/HeaderBanner";

export function Catalog() {
  return (
    <>
      <HeaderBanner />
      <div className="itemGrid">
        {Object.values(Store).map((item) => (
          <ProductPreview {...item} />
        ))}
      </div>
    </>
  );
}
