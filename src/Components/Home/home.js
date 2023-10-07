import "./home.css";
import bnrIcon from "../../assets/banner.jpeg";
const Home = (props) => {

  return (
    <div className="banner">
      <img src={bnrIcon} alt="banner"/>
      <div className="bnr-cnt">
        <h1>Shop in Style</h1>
        <p>With this shop hompeage template</p>
      </div>
    </div>
  );
};

export default Home;
