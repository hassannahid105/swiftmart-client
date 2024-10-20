import { useLoaderData } from "react-router-dom";
import Craousel from "../../components/Craousel/Craousel";
import TabCategories from "../../components/Tabs/TabCategories";

const Home = () => {
  return (
    <div>
      <Craousel></Craousel>
      <TabCategories></TabCategories>
    </div>
  );
};

export default Home;
