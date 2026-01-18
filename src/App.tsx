import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/layouts/Layout";
import Login from "./components/layouts/authInterfaces/Login";
import Signup from "./components/layouts/authInterfaces/Signup";
import HeroSection from "./pages/heroSection/HeroSection";
import PlanTrip from "./pages/plan-trip/PlanTrip";
import Packages from "./pages/packages/Packages";

import PageNotFound from "./pages/pageNotFound/PageNotFound";
import Contact from "./pages/contact/Contact";

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
          path: "plan-trips",
          element: <PlanTrip />,
        },
        {
          path: "packages",
          element: <Packages />,
        },

        {
          path: "contact",
          element: <Contact />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
    {
      path: "*",
      element: <PageNotFound />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
