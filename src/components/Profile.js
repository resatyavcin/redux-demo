import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../store/index";

const buttonStyle = {
  padding: "10px 15px",
  color: "white",
  border: "none",
  cursor: "pointer",
  fontWeight: "bold",
  margin: 10,
};

function Profile() {
  const isAuth = useSelector((state) => state.auth.isAuthenticate);

  const dispatch = useDispatch();

  const logout = (event) => {
    event.preventDefault();
    dispatch(authActions.logout());
  };

  return (
    <div>
      {isAuth && (
        <form onSubmit={logout}>
          <h3>Profil Sayfasındasınız!!!</h3>
          <button
            type="submit"
            style={{ ...buttonStyle, backgroundColor: "orange" }}
          >
            Çıkış Yap
          </button>
        </form>
      )}
    </div>
  );
}

export default Profile;
