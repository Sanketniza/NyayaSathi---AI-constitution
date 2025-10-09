
import ForgetPassword from "./auth/ForgetPassword";
import OTPVerification from "./auth/OTPVerification";
import ResetPassword from "./auth/ResetPassword";
import LogIn from "./shared/LogIn";
import Register from "./shared/Register";
import WebIntro from "./Web Intro/WebIntro";
import Doc from "./Documentation/app";

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
    {
      path: "/",
      element: <WebIntro />,
    },

    {
        path:"/login",
        element:<LogIn/>
    },

    {
        path:"/register",
        element:<Register/>
    },

    {
        path:"/otpverification",
        element:<OTPVerification/>
    },

    {
        path:"/forgetpassword",
        element:<ForgetPassword/>
    },

    {
        path:"/resetpassword",
        element:<ResetPassword/>
    },

    {
        path:"/doc",
        element:<Doc/>
    }
    
]);


function App() {
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}

export default App;