import About from "./Components/About";
import AboutText from "./Components/AboutText";
import Available from "./Components/Available";
import Avatar from "./Components/Avatar";
import Banner from "./Components/Banner";
import Buy from "./Components/Buy";
import Community from "./Components/Community";
import { Eggs } from "./Components/Eggs";
import Faq from "./Components/Faq";
import Footer from "./Components/Footer";
import FooterImg from "./Components/FooterImg";
import Navbar from "./Components/Navbar";
import { Partners } from "./Components/Partners";
import Tokenomics from "./Components/Tokenomics";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Banner />
        {/* <Eggs /> */}
        <Partners />
        <About />
        {/* <AboutText /> */}
        <Available />
        <Tokenomics />
        <Buy />
        <Community />
        <Avatar />
        <Faq />
        <FooterImg />
        <Footer />
      </div>
    </>
  );
}

export default App;
