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
  return <div className="mx-auto w-full text-center mb-40">hello world</div>;
};

export default Test;
