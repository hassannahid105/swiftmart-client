import { useLoaderData } from "react-router-dom";
import Craousel from "../../components/Craousel/Craousel";
import TabCategories from "../../components/Tabs/TabCategories";

const Home = () => {
  const jobs = useLoaderData();
  return (
    <div>
      <Craousel></Craousel>
      <TabCategories></TabCategories>
    </div>
  );
};

export default Home;
