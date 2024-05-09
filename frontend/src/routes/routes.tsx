import Home from "./home";
import OurStory from "./our_story";
import Predictions from "./predictions";
import Technologies from "./technologies";

type TRoute = {
  path: string;
  display: string;
  element?: JSX.Element;
  active?: boolean;
};

const routes: TRoute[] = [
  {
    path: "/",
    display: "Home",
    element: <Home />,
  },
  {
    path: "/predictions",
    display: "Predictions",
    element: <Predictions />,
  },
  {
    path: "/technologies",
    display: "Technologies",
    element: <Technologies />,
  },
  {
    path: "/our_story",
    display: "Our Story",
    element: <OurStory />,
  },
];

const pathnames = routes.map((route) => route.path);

export { pathnames };
export default routes;
