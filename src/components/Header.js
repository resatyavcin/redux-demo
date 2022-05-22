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

function Header() {
  const isAuth = useSelector((state) => state.auth.isAuthenticate);
  const dispatch = useDispatch();

  const login = (event) => {
    event.preventDefault();
    dispatch(authActions.login());
  };

  return (
    <div>
      {!isAuth && (
        <form onSubmit={login}>
          <h3>Henüz Giriş Yapılmamış</h3>
          <button
            type="submit"
            style={{ ...buttonStyle, backgroundColor: "orange" }}
          >
            Giriş Yap
          </button>
        </form>
      )}
    </div>
  );
}

export default Header;
