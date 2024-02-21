import React from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import "./index.css";
import Advisor from "./pages/About/Advisor";
import Comingsoon from "./components/Comingsoon";
import National from "./pages/About/National";
import State from "./pages/About/State";
import Award from "./pages/Event/Award";
import Meet from "./pages/Event/Meet";
import Movie from "./pages/Event/Movie";
import OtherEvent from "./pages/Event/OtherEvent";
import Seminar from "./pages/Event/Seminar";
import Root from "./Root";
import ErrorPage from "./components/ErrorPage";
import Home from './pages/Home/home'
import Board from "./pages/Join/Board";
import Internship from "./pages/Join/Internship";
import Affiliation from "./pages/Join/Affiliation";
import Career from "./pages/Join/Career";
import News from "./pages/Gallery/News";
import Photo from "./pages/Gallery/Photo";
import Video from "./pages/Gallery/Video";
import AcadEducator from "./pages/Academic/Educator";
import Mou from "./pages/Academic/Mou";
import Association from "./pages/International/Association";
import Fees from "./pages/Form/Fees";
import Contact from "./pages/Contact/Contact";
import MembershipOnline from "./pages/Form/MembershipOnline";
import MembershipOffline from "./pages/Form/MembershipOffline";
import OrganisationOnline from "./pages/Form/OrganisationOnline";
import OrganisationOffline from "./pages/Form/OrganisationOffline";
import AboutUs from "./pages/About/AboutUs";
import Books from "./pages/Publication/Books";
import StateActivity from "./pages/Gallery/StateActivity";
import CSR from "./pages/Csr/Csr";
import Souvenir from "./pages/Publication/Souvenir";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/advisor",
        element: <Advisor />,
      },
      {
        path: "/aboutus",
        element: <AboutUs />,
      },
      {
        path: "/member",
        element: <Comingsoon />,
      },
      {
        path: "/national",
        element: <National />,
      },
      {
        path: "/state",
        element: <State />,
      },
      {
        path: "/award",
        element: <Award />,
      },
      {
        path: "/meet",
        element: <Meet />,
      },
      {
        path: "/movie",
        element: <Movie />,
      },
      {
        path: "/otherevent",
        element: <OtherEvent />,
      },
      {
        path: "/seminar",
        element: <Seminar />,
      },
      {
        path: "/career",
        element: <Career />,
      },
      {
        path: "/board",
        element: <Board />,
      },
      {
        path: "/internship",
        element: <Internship />,
      },
      {
        path: "/affiliation",
        element: <Affiliation />,
      },
      {
        path: "/award-photo",
        element: <Photo />,
      },
      {
        path: "/news",
        element: <News />,
      },
      {
        path: "/video",
        element: <Video />,
      },
      {
        path: "/membershiponline",
        element: <MembershipOnline />,
      },
      {
        path: "/membershipoffline",
        element: <MembershipOffline />,
      },
      {
        path: "/organizationonline",
        element: <OrganisationOnline />,
      },
      {
        path: "/organizationoffline",
        element: <OrganisationOffline />,
      },
      {
        path: "/fee",
        element: <Fees />,
      },
      {
        path: "/acad-educator",
        element: <AcadEducator />,
      },
      {
        path: "/mou",
        element: <Mou />,
      },
      {
        path: "/books",
        element: <Books />,
      },
      {
        path: "/souvenir",
        element: <Souvenir />,
      },
      {
        path: "/journalist",
        element: <Comingsoon />,
      },
      {
        path: "/int-educator",
        element: <Comingsoon />,
      },
      {
        path: "/association",
        element: <Association />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/csr",
        element: <CSR />,
      },
      {
        path: "/state-activity",
        element: <StateActivity />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
