import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import Spin from "./Spin.tsx";
import Winner from "./Winner.tsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  { path: "/spin/:award", element: <Spin /> },
  { path: "/traothuong/:award", element: <Winner /> },
]);
createRoot(document.getElementById("root")!).render(
  <>
    <RouterProvider
      future={{
        v7_startTransition: true,
      }}
      router={router}
    />
  </>
);
