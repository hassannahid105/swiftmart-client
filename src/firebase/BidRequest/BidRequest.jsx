import { useEffect } from "react";
import BidRequestTr from "./BidRequestTr";
import useAuth from "../../hooks/useAuth";
import { useMutation, useQuery } from "@tanstack/react-query";
import useAxiosSecurity from "../../hooks/useAxionsSecurity";
import toast from "react-hot-toast";
const BidRequest = () => {
  const { user } = useAuth();
  // const [bids, setBids] = useState([]);
  const axiosSecure = useAxiosSecurity();
  const {
    data: bids = [],
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryFn: () => getData(),
    queryKey: ["bids"],
  });
  // mutation
  const { mutateAsync } = useMutation({
    mutationFn: async ({ id, status }) => {
      const { data } = await axiosSecure.patch(`/bid/${id}`, { status });
    },
    onSuccess: () => {
      // ui refresh
      toast.success("update data successfull and refresh ui");
      refetch();
    },
  });
  const getData = async () => {
    const { data } = await axiosSecure(`/bid-requests/${user?.email}`);
    return data;
  };
  // useEffect(() => {
  //   getData();
  // }, []);
  const handleStatus = async (id, prevStatus, currStatus) => {
    await mutateAsync({ id, status: currStatus });
    getData();
  };
  const handleRejected = async (id, prevStatus, currStatus) => {
    await mutateAsync({ id, status: currStatus });
    refetch;
  };
  if (isLoading) {
    return <p>loading tanstack query.............</p>;
  }
  if (isError) {
    return <p>loading tanstack query....</p>;
  }
  return (
    <section className="container px-4 mx-auto pt-12">
      <div className="flex items-center gap-x-3">
        <h2 className="text-lg font-medium text-gray-800 ">Bid Requests</h2>

        <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full ">
          {bids?.length} Requests
        </span>
      </div>

      <div className="flex flex-col mt-6">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden border border-gray-200  md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500"
                    >
                      <div className="flex items-center gap-x-3">
                        <span>Title</span>
                      </div>
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500"
                    >
                      <div className="flex items-center gap-x-3">
                        <span>Email</span>
                      </div>
                    </th>

                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                    >
                      <span>Deadline</span>
                    </th>

                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                    >
                      <button className="flex items-center gap-x-2">
                        <span>Price</span>
                      </button>
                    </th>

                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                    >
                      Category
                    </th>

                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                    >
                      Status
                    </th>

                    <th className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200 ">
                  {bids.map((bid) => (
                    <BidRequestTr
                      key={bid._id}
                      bid={bid}
                      handleStatus={handleStatus}
                      handleRejected={handleRejected}
                    ></BidRequestTr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BidRequest;
