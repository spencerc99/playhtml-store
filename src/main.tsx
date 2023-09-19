import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./routes/Root.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.scss";
import { Catalog } from "./routes/Catalog.tsx";
import { ProductDetail } from "./routes/ProductDetail.tsx";
import { getProduct } from "./store.ts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Catalog />,
      },
      {
        path: "/product/:id",
        element: <ProductDetail />,
        loader: ({ params }) => ({
          item: getProduct(params.id!),
        }),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
