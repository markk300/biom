import { Chart } from "../pages/Chart/Chart";
import { Home } from "../pages/HomePage/Home";
import { Scents } from "../pages/Scents/Scents";
import { Shop } from "../pages/Shop/Shop";
import { SignIn } from "../pages/SignIn/SignIn";
import { WhyBiom } from "../pages/WhyBiom/WhyBiom";


const router = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/shop",
    element: <Shop />,
  },
  {
    path: "/why-biom",
    element: <WhyBiom />,
  },
  {
    path: "/scents",
    element: <Scents />,
  },
  {
    path: "/signIn",
    element: <SignIn />,
  },
  {
    path: "/chart",
    element: <Chart />,
  },

];

export default router;