import classes from "./homePage.module.css";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../Section/Footer/Footer";

const HomePage = () => {
  return (
    <>
      <div className={classes.root}>
        <Navbar />
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
