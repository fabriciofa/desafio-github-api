import Button from "components/Button";
import Navbar from "components/Navbar";

import "./styles.css";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="home-main-container">
        <div className="home-title">
          <h1>Desafio Github API</h1>
          <p>Bootcamp Spring React - DevSuperior</p>
        </div>
        <Button title="Começar" />
      </div>
    </>
  );
};

export default Home;
