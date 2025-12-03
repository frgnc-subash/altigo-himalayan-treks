import Contact from "./components/pages/contact/Contact";
import HeroSection from "./components/pages/heroSection/HeroSection";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PlanTrip from "./components/pages/plan-trip/PlanTrip";
import Packages from "./components/pages/packages/Packages";
import TourAndActivities from "./components/pages/toursAndActivities/TourAndActivities";
import PageNotFound from "./components/pages/pageNotFound/PageNotFound";
import { useState } from "react";
import LoadingScreen from "./components/layouts/loadingScreen/LoadingScreen";

const App = () => {
    const [ScreenLoader, setScreenLoader] = useState(false);
    const router = createBrowserRouter([
        { path: "/", element: <HeroSection /> },
        { path: "/plan-trips", element: <PlanTrip /> },
        { path: "/packages", element: <Packages /> },
        { path: "/tour&activities", element: <TourAndActivities /> },
        { path: "/contact", element: <Contact /> },
        { path: "*", element: <PageNotFound /> },
    ]);
    return (
        <>
            {!ScreenLoader ? (
                <LoadingScreen onComplete={() => setScreenLoader(true)} />
            ) : (
                <RouterProvider router={router} />
            )}
        </>
    );
};

export default App;
