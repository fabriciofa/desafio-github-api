import ProfileField from "./components/ProfileField";
import "./styles.css";

const ShowProfile = () => {
  return (
    <div className="show-profile-container">
      <div className="show-profile-img-container">
        <img
          src="https://avatars.githubusercontent.com/u/12145230?v=4"
          alt="UserPic"
        />
      </div>
      <div className="show-profile-infos">
        <h6 className="text-primary">Informações</h6>
        <ProfileField field="Perfil:" value="https://github.com/fabriciofa" hasLink={true} />
        <ProfileField field="Seguidores:" value="0" />
        <ProfileField field="Localidade:" value="São Luis, Maranhão" />
        <ProfileField field="Nome:" value="Fabricio Araújo" />
      </div>
    </div>
  );
};

export default ShowProfile;
