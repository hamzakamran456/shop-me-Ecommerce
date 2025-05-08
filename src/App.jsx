import "./App.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";

function App() {
  const [orderPopup, setOrderPopup] = useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };
  useEffect(() => {
    Aos.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-out-sine",
      delay: 100,
    });
    Aos.refresh();
  }, []);

  return (
    <>
      <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">Heading</div>
    </>
  );
}

export default App;
