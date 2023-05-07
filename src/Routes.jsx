import { lazy, Suspense } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";


const Login = lazy(() => import("../src/Components/Login"))
const Home = lazy(() => import("../src/Components/Home"))
const ContactUs = lazy(() => import("../src/Components/ContactUs"))
const VaccineAvailability = lazy(() => import("../src/Components/HealthServices/VaccineAvailability"))
const OpenTabs = lazy(() => import("../src/Components/Utilities/OpenTabs"))


const RoutesComponent = () => (
    <Router>
        <Suspense fallback={<center style={{ marginTop: 300 }}><h3>Loading...</h3></center>}>
            <Routes>

                <Route path="/login" exact={true} element={<Login></Login>} />

                <Route path="/services" exact={true} element={<Home />} />

                <Route path="/contactus" exact={true} element={<ContactUs />} />

                <Route path="/vaccineavailability" exact={true} element={<VaccineAvailability />} />

                <Route path="/opentabs" exact={true} element={<OpenTabs />} />

            </Routes>
        </Suspense>
    </Router>
);
export default RoutesComponent;