import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import V0 from "./V0";
import V1 from "./V1";
import V2 from "./V2";
import V3 from "./V3";
import V4 from "./V4";
import V5 from "./V5";
import V6 from "./V6";
import V7 from "./V7";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route index element={<V0 />} />
      <Route path="v1" element={<V1 />} />
      <Route path="v2" element={<V2 />} />
      <Route path="v3" element={<V3 />} />
      <Route path="v4" element={<V4 />} />
      <Route path="v5" element={<V5 />} />
      <Route path="v6" element={<V6 />} />
      <Route path="v7" element={<V7 />} />
    </Route>
  ),
  {
    basename: "/front-demo",
  }
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
