import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/layouts/Layout";
import HeroSection from "./pages/heroSection/HeroSection";
import Packages from "./pages/packages/Packages";
import Destinations from "./pages/destinations/Destinations";
import Contact from "./pages/contact/Contact";
import PageNotFound from "./pages/pageNotFound/PageNotFound";
import GlobalSettings from "./pages/GlobalSettings";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HeroSection />,
        },
        {
          path: "destinations",
          element: <Destinations />,
        },
        {
          path: "packages",
          element: <Packages />,
        },
        {
          path: "settings",
          element: <GlobalSettings />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
      ],
    },

    {
      path: "*",
      element: <PageNotFound />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
