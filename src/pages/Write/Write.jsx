import React from 'react'
import "./write.css";

export default function Write() {
    return (
        <div className="write">
            <img
                className="writeImg"
                src="./write.jpg "
                alt=""
            />
            <form className="writeForm">
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                        <i className="writeIcon fas fa-plus"></i>
                    </label>

                    <input
                        type="file"
                        id="fileInput"
                        style={{ display: "none" }}
                    />

                    <input
                        text="file"
                        placeholder="Titre"
                        className="writeInput"
                        autoFocus={true}
                    />

                </div>
                <div className="writeFormGroup">
                    <textarea
                        placeholder="Écrivez votre histoire"
                        type="text"
                        className="writeInput writeText">
                        autoFocus={true}
                    </textarea>
                </div>
                <button className="button writeSubmit" type="submit">
                    Publiez
                </button>
            </form>
        </div>
    )
}
