import { createBrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Servicos from "./pages/Serivicos";
import NossoEspaco from "./pages/NossoEspaco";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/sobre",
        element: <Sobre />
    },
    {
        path: "/servicos",
        element: <Servicos />
    },
    {
        path: "/nossoespaco",
        element: <NossoEspaco />
    }
])

export default router;