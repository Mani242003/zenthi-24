import React, {
  useState,
  useEffect,
  useRef,
  Suspense,
} from "react";
import "./App.scss";


import Slider from "./Components/Slider/SliderComponent";
import Price from "./Components/Price/Price";
import Contact from "./Components/contact/Contact";
import Footer from "./Components/Footer/Footer";
import Challenges from "./Components/Challenges/Challenges";
import Events from "./Components/Events/Events";
import Technical from "./Components/Events/Technical/Technical";
import NonTechnical from "./Components/Events/NonTechnical/NonTechnical";
import Guest from "./Components/Guest/Guest";
import videobg from "./Images/2024/slider/comv7.mp4";
import logo from "./Images/2024/hdLogo.png";


const Components1 = React.lazy(() => import("./Components/Home/Home"));
const Components2 = React.lazy(() => import("./Components/Navbar/Navbar"));

const App = () => {
  const videoRef = useRef(null);
  // let [loading, setLoading] = useState(true);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.6; // Adjust this value to set the desired playback speed (e.g., 0.5 for half speed)
    }
  }, []);
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    const fakeDataFetch = () => {
      setTimeout(() => {
        setLoader(false);
      }, 2000);
    };

    fakeDataFetch();
  }, [loader]);
  return (
    <>
      <div className="NavHomeContainer">
        <div className="navHomeSep" id="home">
          <Suspense
            fallback={
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background:'black',
                  flexDirection:'column'
                }}
              >
                {/* <BeatLoader  
                   color={color}
                  // cssOverride={override}
                  size={25}
                  aria-label="Loading Spinner"
                  data-testid="loader"
                />  */}
                <img src={logo} alt="" width={150} />
            <span style={{cursor:"pointer"}} className="NavLogoText">ZENITh24"</span>
             
              </div >
            }
          >
            <video ref={videoRef} src={videobg} autoPlay loop muted />
            <Components1 />
            <Components2 />
          </Suspense>
        </div>

        <Challenges />
        <Suspense>
        <Events />

        </Suspense>
       
        <Technical />
        <NonTechnical />

        <Slider />
        {/* <MarketPlan /> */}

        <Price />
        <Guest />

        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default App;
