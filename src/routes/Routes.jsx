import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Login from "../pages/Authentication/Login";
import Registration from "../pages/Authentication/Register";
import Home from "../pages/Home/Home";
import JobDetails from "../pages/JobDetails/JobDetails";
import ErrorPage from "../pages/ErrorPages/ErrorPages";
import AddJob from "../pages/AddJob/AddJob";
import MyPostedJobs from "../pages/MyPostedJob/MyPostedJob";
import UpdateJob from "../pages/UpdateJob/UpdateJob";
import PrivateRoutes from "./PrivateRoutes";
import MyBids from "../pages/MyBids/MyBids";
import BidRequest from "../firebase/BidRequest/BidRequest";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/job/:id",
        element: (
          <PrivateRoutes>
            <JobDetails></JobDetails>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_lOCALHOST}/job/${params.id}`),
      },
      {
        path: "add-job",
        element: (
          <PrivateRoutes>
            <AddJob></AddJob>
          </PrivateRoutes>
        ),
      },
      {
        path: "my-posted-jobs",
        element: (
          <PrivateRoutes>
            <MyPostedJobs></MyPostedJobs>
          </PrivateRoutes>
        ),
      },
      {
        path: "/updatejob/:id",
        element: (
          <PrivateRoutes>
            <UpdateJob></UpdateJob>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_lOCALHOST}/job/${params.id}`),
      },
      {
        path: "/my-bids",
        element: (
          <PrivateRoutes>
            <MyBids></MyBids>
          </PrivateRoutes>
        ),
      },
      {
        path: "/bids-request",
        element: (
          <PrivateRoutes>
            <BidRequest></BidRequest>
          </PrivateRoutes>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/registration",
    element: <Registration></Registration>,
  },
]);

export default router;
