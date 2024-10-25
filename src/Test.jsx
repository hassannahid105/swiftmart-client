import React, { useEffect, useState } from "react";
import axios from "axios";
import useAxiosSecurity from "./hooks/useAxionsSecurity";

const Test = () => {
  const [jobs, setJobs] = useState([]);
  const axiosSecure = useAxiosSecurity();
  const getData = async () => {
    const { data } = await axiosSecure("/jobs");
    setJobs(data);
  };
  useEffect(() => {
    getData();
  }, []);
  console.log(jobs);
  return (
    <div className="mx-auto max-w-7xl text-center mb-40 mt-96">
      <div>test for anything in my project</div>
      <div>
        <button
          onClick={() => {
            console.log("Anonymous function clicked!"); // This is the anonymous function
          }}
          className="btn btn-primary"
        >
          click for console a number
        </button>
      </div>
    </div>
  );
};

export default Test;
