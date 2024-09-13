import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="banner">
          <div className="left">FOODIOF</div>
          <div className="right">
            <p>Godhra Colony 11-G New Karachi, Karachi</p>
            <p>Open: 05:00 PM - 12:00 AM</p>
          </div>
        </div>
        <div className="banner">
          <div className="left">
            <p>
              Developed By{" "}
              <span
                style={{
                  color: "blue",
                }}
              >
                MUNAWWAR_ISHAQ{" "}
              </span>
            </p>
          </div>
          <div className="right">
            <p>
              All Rights Reserved By{" "}
              <span
                style={{
                  color: "blue",
                }}
              >
                M.H.A Code X
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
