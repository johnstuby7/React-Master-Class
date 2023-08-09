import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  { path: "" },
]);

function App() {
  return <div></div>;
}

export default App;
