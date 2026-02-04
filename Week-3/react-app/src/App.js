import Navbar from "./components/Navbar";
import BlogList from "./components/BlogList";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="container">
        <BlogList />
      </main>
      <Footer />
    </div>
  );
}

export default App;
