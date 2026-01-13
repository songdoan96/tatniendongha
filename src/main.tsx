import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import Spin from "./Spin.tsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  { path: "/spin/:award", element: <Spin /> },
  // <Route path="/spin/:award" element={<Spin />} />
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
