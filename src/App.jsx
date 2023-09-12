import Navbar from "./components/navbar/Navbar";
import Intro from "./components/intro/intro";
import Skills from "./components/skills/Skills";
import Works from "./components/works/Works";
import Contact from "./components/contact/Contact";


function App() {

  return (
    <div className="App">
      {/* <Navbar /> */}
      <Intro />
      <Skills />
      <Works />
      <Contact />
    </div>
  )
}

export default App
