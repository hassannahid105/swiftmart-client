import { Link } from "react-router-dom";

const JobCard = ({ job }) => {
  const {
    _id,
    category,
    job_title,
    description,
    min_price,
    max_price,
    deadline,
  } = job;
  return (
    <Link
      to={`job/${_id}`}
      className="w-full px-4 py-3 bg-white rounded-md shadow-md dark:bg-gray-800"
    >
      <div className="flex items-center justify-between">
        <span className="text-sm font-light text-gray-800 dark:text-gray-400">
          DeadLine: {deadline}
        </span>
        <span className="px-3 py-1 text-xs text-blue-800 uppercase bg-blue-200 rounded-full dark:bg-blue-300 dark:text-blue-900">
          {category}
        </span>
      </div>

      <div>
        <h1 className="mt-2 text-lg font-semibold text-gray-800 dark:text-white">
          {job_title}
        </h1>
        <p
          title={description}
          className="mt-2 text-sm text-gray-600 dark:text-gray-300"
        >
          {description.substring(0, 50)}...
        </p>
        <p className="mt-2 text-sm font-bold text-gray-600">
          Range: ${min_price} - ${max_price}
        </p>
      </div>
    </Link>
  );
};

export default JobCard;
