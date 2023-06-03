import Navbar from "./components/Navbar.jsx";
import Carousel from "./components/Carousel.jsx";
import Card from "./components/Card.jsx"
import Featurette from "./components/Featurette.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <div>
			<Navbar />
			<Carousel />
      <div className="container text-center">
        <div className="row">
          <Card />
          <Card />
          <Card />
        </div>
        <hr className="featurette-divider"></hr>
        <Featurette />
        <hr className="featurette-divider"></hr>
        <Featurette />
        <hr className="featurette-divider"></hr>
        <Featurette />
        <hr className="featurette-divider"></hr>
      </div>
      <Footer />
		</div>
  );
}

export default App;
