import "./settings.css";
import Sidebar from "../../components/sidebar/Sidebar";

export default function Settings() {
    return (
        <div className="settings">
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">Mettre à jour votre compte</span>
                    <span className="settingsDeleteTitle">Supprimer votre compte</span>
                </div>
                <form className="settingsForm">
                    <label>Photo de profil</label>
                    <div className="settingsPhotoProfile">
                        <img
                            src="./profile.jpg"
                            alt="Profile"
                        />

                        <label htmlFor="fileInput">
                            <i className="settingsProfilePictureIcon far fa-user-circle"></i>
                        </label>
                        <input
                            className="settingsPhotoProfileInput"
                            type="file"
                            id="fileInput"
                            style={{ display: "none" }}
                        />
                    </div>

                    <label>
                        Pseudo
                    </label>

                    <input
                        type="text"
                        placeholder="ex.:John Doe"
                        name="name"
                    />

                    <label>Email</label>
                    <input type="email" placeholder="ex.:john.doe@gmail.com" name="email" />
                    <label>Mot de passe</label>
                    <input type="password" placeholder="Mot de passe" name="password" />
                    <button className="settingsSubmitButton" type="submit">
                        Mettre à jour
                    </button>
                </form>
            </div>
            <Sidebar />
        </div>
    )
}
