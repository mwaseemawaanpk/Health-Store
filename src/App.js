import Header from "./components/Header";
import Banner from "./components/Banner";
import FeaturedSale from "./components/FeaturedSale";
import TopDeals from "./components/TopDeals";
import Category from "./components/Category";
import CategoryData from "./components/CategoryApi";

function App() {
  return (
    <div className="grid grid-cols-1">
      <Header />
      <Banner />
      <FeaturedSale />
      <TopDeals />
      <Category categoryData={CategoryData} />
    </div>
  );
}

export default App;
