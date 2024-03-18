import Navbar from "./components/Navbar/navbar";
import Intro from "./components/intro/intro";
import Skills from "./components/Skills/skills";
import Works from "./components/Works/works";
import Contact from "./components/Contact";
import Footer from "./components/Footer/footer";
import backgroundImage from './assets/bg.png';

function App() {
  const backgroundColor = '#291c3a'; 

  const appStyle = {
    position: 'relative', 
    backgroundImage: `url(${backgroundImage})`, // Use background image
    backgroundColor: backgroundColor, // Use background color if no image
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed', // Fixed background
    minHeight: '100vh', // Ensure the container takes up at least the height of the viewport
    // Add other styles as needed
  };

  return (
    <div className="App" style={appStyle}>
      <Navbar />
      <Intro />
      <Skills />
      <Works />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
