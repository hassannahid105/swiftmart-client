import { useLoaderData } from "react-router-dom";
import Craousel from "../../components/Craousel/Craousel";
import TabCategories from "../../components/Tabs/TabCategories";
// import Test from "../../Test";

const Home = () => {
  return (
    <div>
      <Craousel></Craousel>
      <TabCategories></TabCategories>
      {/* <Test></Test> */}
    </div>
  );
};

export default Home;
