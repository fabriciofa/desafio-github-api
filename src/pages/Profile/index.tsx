import Button from "components/Button";
import Navbar from "components/Navbar";

import "./styles.css";

const Profile = () => {
  return (
    <>
      <Navbar />
      <div className="profile-main-container">
        <div className="profile-card">
          <form className="profile-form">
            <h1>Encontre um perfil Github</h1>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Usuário Github"
            />
            <Button title="Encontrar" />
          </form>
        </div>
      </div>
    </>
  );
};

export default Profile;
