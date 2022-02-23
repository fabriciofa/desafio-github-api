import Button from "components/Button";
import Navbar from "components/Navbar";
import { useEffect, useState } from "react";
import { GithubData } from "types/githubdata";
import ShowProfile from "./ShowProfile";
import axios from "axios";

import "./styles.css";

type FormData = {
  username: "";
};

const Profile = () => {
  const [formData, setFormData] = useState<FormData>({
    username: "",
  });

  const [githubData, setGithubData] = useState<GithubData>();
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    axios
      .get(`https://api.github.com/users/${formData.username}`)
      .then((response) => {
        setGithubData(response.data);
      })
      .catch((errors) => {
        setGithubData(undefined);
        console.log(errors);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <>
      <Navbar />
      <div className="profile-main-container">
        <div className="profile-card">
          <form className="profile-form" onSubmit={handleSubmit}>
            <h1>Encontre um perfil Github</h1>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Usuário Github"
              value={formData.username}
              onChange={handleChange}
            />
            <Button title="Encontrar" />
          </form>
        </div>
        {githubData && <ShowProfile github={githubData} />}
      </div>
    </>
  );
};

export default Profile;
