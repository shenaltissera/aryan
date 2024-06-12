import React from "react";
import { Menu, Button, Dropdown, Space, Row, Col } from "antd";
import { Link } from "react-router-dom";
import { Footer } from "antd/es/layout/layout";

function DefaultLayout(props) {
  const user = JSON.parse(localStorage.getItem("user"));
  const items = [
    {
      key: "1",
      label: <a href="/">Home</a>,
    },
    {
      key: "2",
      label: <a href="/userbookings">My Bookings</a>,
    },
    {
      key: "4",
      label: (
        <li
          onClick={() => {
            localStorage.removeItem("user");
            window.location.href = "/login";
          }}
        >
          Logout
        </li>
      ),
    },
  ];

  const adminItems = [
    {
      key: "1",
      label: <a href="/">Home</a>,
    },
    {
      key: "2",
      label: <a href="/allbookings">All Bookings</a>,
    },
    {
      key: "3",
      label: (
        <li
          onClick={() => {
            localStorage.removeItem("user");
            window.location.href = "/login";
          }}
        >
          Logout
        </li>
      ),
    },
  ];
  return (
    <div
      style={{
        overflowX: "hidden",
      }}
    >
      <div className="header bs1">
        <Row gutter={16} justify="center">
          <Col lg={20} sm={24} xs={24}>
            <div className="d-flex justify-content-between">
              <h1>
                <b>
                  <Link
                    to="/"
                    style={{
                      color: "darkslategray",
                      letterSpacing: "1.5px",
                      fontSize: "30px",
                      fontFamily: "serif",
                      fontWeight: "bold",
                      display: "flex",
                      alignItems: "center",
                      marginTop: "5px",
                    }}
                  >
                    <img
                      src="https://scontent.fcmb11-1.fna.fbcdn.net/v/t39.30808-6/387116704_274213878913965_6230411355225359284_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeH0jLcnpDTeCWxcYOqQ14OjBYKdQ-bJ0TUFgp1D5snRNVzHbjDpTwmGcm_Tt29A3tvqBKwYK73YkQ6RHt5znrII&_nc_ohc=LriB8SupkM4Q7kNvgE6ZZwG&_nc_zt=23&_nc_ht=scontent.fcmb11-1.fna&oh=00_AYDfvFVmueM4OdbZnEKKXr2hm9qOEcwBlJu40nK00wMHog&oe=666B095F"
                      alt="logo"
                      style={{
                        width: "60px",
                        height: "100%",
                        marginRight: "10px",
                      }}
                    />
                    ARYAN RENT A CAR AND TOURS
                  </Link>
                </b>
              </h1>

              <Dropdown
                menu={{
                  items: user.role == "Admin" ? adminItems : items,
                }}
                placement="bottom"
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",

                    cursor: "pointer",
                  }}
                >
                  <img
                    src="https://res.cloudinary.com/desnqqj6a/image/upload/v1683887268/User-Profile-PNG-High-Quality-Image_mwetdc.png"
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                      marginRight: "10px",
                    }}
                  />
                  {user.username}
                </div>
              </Dropdown>
            </div>
          </Col>
        </Row>
      </div>
      <div className="content">{props.children}</div>
      <Footer style={{ textAlign: "center" }}>
        ARYAN RENT A CAR AND TOURS ©2024 {" "}
        <span
          style={{
            color: "darkslategray",
            letterSpacing: "1.5px",
            fontSize: "14px",
            fontWeight: "bold",
          }}
        >
           | TriniphiX
        </span>
      </Footer>
    </div>
  );
}

export default DefaultLayout;
