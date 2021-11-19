import React from "react";
import Typical from "react-typical";
import "./Profile.css"

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="cols">
            <div className="colz-icon">
              <a href="#">
                <i className="fab fa-facebook-square"></i>
              </a>
              <a href="#">
                <i className="fab fa-google-plus-square"></i>
              </a>
              <a href="#">
                <i className="fab fa-instagram-square"></i>
              </a>
              <a href="#">
                <i className="fab fa-youtube-square"></i>
              </a>
              <a href="#">
                <i className="fab fa-twitter-square"></i>
              </a>
            </div>
          </div>

          <div className="profile-detail-name">
            <span className="primary-text">Hello, I'm Gagan.</span>
          </div>

          <div className="profile-detail-role">
            <span className="primary-text"></span>
            {""}
            <h1>
              <Typical
                loop={Infinity}
                steps={[
                  "Web Developer",
                  1000,
                  "Computer Science Student",
                  1000,
                  "React Developer",
                  1000,
                  "MERN Developer",
                  1000,
                ]}
              />
            </h1>
          </div>

          <div className="profile-options">
            <button className="btn primary-btn">
              {""}
              Hire Me{" "}
            </button>

            <a href="Resume-Gagan.pdf" download="Gagan-Resume.pdf">
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
