import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Content from "./components/Content";
import Collage from "./components/Collage";
import Donate from "./components/Donate";
import Team from "./components/Team";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Content />
      <Collage />
      <Donate />
      <Team />
    </div>
  );
}

export default App;
