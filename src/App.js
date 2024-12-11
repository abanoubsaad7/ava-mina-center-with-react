import MainNav from "./components/main_and_side_Bar/mainNav";
import MainContent from "./components/mainContent";
import CategoryWithoutPhoto from "./components/produts/categoryWithoutPhoto";
import FeaturedProducts from "./components/produts/featuredProducts";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <div className="firstContent">
        <MainNav />
        <MainContent />
        <FeaturedProducts />
        <CategoryWithoutPhoto />
        <Footer />
      </div>
    </>
  );
}

export default App;
