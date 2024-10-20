import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Login from "../pages/Authentication/Login";
import Registration from "../pages/Authentication/Register";
import Home from "../pages/Home/Home";
import JobDetails from "../pages/JobDetails/JobDetails";
import ErrorPage from "../pages/ErrorPages/ErrorPages";
import AddJob from "../pages/AddJob/AddJob";
import MyPostedJobs from "../pages/MyPostedJob/MyPostedJob";

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
        element: <JobDetails></JobDetails>,
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_lOCALHOST}/job/${params.id}`),
      },
      {
        path: "add-job",
        element: <AddJob></AddJob>,
      },
      {
        path: "my-posted-jobs",
        element: <MyPostedJobs></MyPostedJobs>,
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
