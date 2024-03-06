import Navbar from "./components/Navbar/navbar";
import Intro from "./components/intro/intro";
import Skills from "./components/Skills/skills";
import Works from "./components/Works/works";
import Contact from "./components/Contact";
import Footer from "./components/Footer/footer";
import GlobalStyle from "./components/fonts";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Skills />
      <Works />
      <Contact />
      <Footer />
      <GlobalStyle />
    </div>
  );
}

export default App;
