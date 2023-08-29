import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import NotFound from "./pages/Not Found/NotFound";
import Layout from "./components/Layout/Layout";
import Team from "./pages/Team/Team";
import Events from "./pages/Events/Events";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/events",
        element: <Events />,
      },
      {
        path: "/team",
        element: <Team />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
