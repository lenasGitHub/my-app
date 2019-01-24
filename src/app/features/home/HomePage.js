import React from "react";

const HomePage = ({ history }) => {
  return (
    <div className="full-height">
      <div className="unlaunched-page">
        <div className="inner">
          <h1>lena</h1>
          <h2 className="launching-soon">Launching Soon</h2>

          <div className="bottom-wrapper">
            <a
              onClick={() => history.push("/events")}
              className="btn btn-sm btn-primary btn-admin"
            >
              Get Started
            </a>
            <br />
            <br />
            <br />
            <br />
            <a
              href="https://teachable.com/?src=unlaunched_page"
              className="powered-by-wrapper"
            >
              This school will be powered by
              <img
                src="https://d3tw2n86njn6hp.cloudfront.net/assets/footer/teachable-logo-white-efd32576079839534d5b6e87bf4424e99b12624f854b2c500a4d3f0b6e2af46b.svg"
                className="powered-by-logo"
                alt="logo"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
// https://sso.teachable.com/secure/300174/users/sign_in
