import Nav from "./Components/Nav";
import Banner from "./Components/Banner";
import Footer from "./Components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import TechnologyGrid from "./Components/TechnologyGrid";




function App() {
  return (
    <>
      <Nav />

      <Banner />

     
        <TechnologyGrid />
      
<ToastContainer/>
      <Footer />
    </>
  );
}

export default App;