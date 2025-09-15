
import LogIn from "./shared/LogIn";
import Register from "./shared/Register";
import WebIntro from "./Web Intro/WebIntro";

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
    
])


function App() {
    return (
        <>
            <RouterProvider router={router} />
            
        </>
    );
}

export default App;