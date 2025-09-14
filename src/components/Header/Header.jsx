import React from "react";
import "./Header.css";
import logo from "../../assets/logo-cookfy.svg";
import searchIcon from "../../assets/lupa.svg";
import useUser from "../../context/useUser";

function Header() {
  const { user, loading } = useUser();

  const displayName = loading
    ? "Carregando..."
    : user
    ? user.fullName
    : "Visitante";
  const avatarSrc = user?.avatar || "";

  const handleAvatarClick = () => {
    window.dispatchEvent(new Event("toggleSidebar"));
  };

  return (
    <header className="header">
      <div className="header__left">
        <img src={logo} alt="CookFy" className="header__logo" />
      </div>

      <div className="header__center">
        <div className="header__search-wrapper">
          <input
            type="search"
            className="header__search-input"
            placeholder="Pesquise alguma receita"
            aria-label="Buscar receitas"
          />
          <img src={searchIcon} alt="" className="header__search-icon" />
        </div>
      </div>

      <div
        className="header__right"
        role="button"
        tabIndex={0}
        onClick={handleAvatarClick}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") handleAvatarClick();
        }}
        aria-label="Abrir menu do usuário"
      >
        <span className="header__user-name">{displayName}</span>

        {avatarSrc && (
          <div className="header__avatar-wrapper">
            <img
              src={avatarSrc}
              alt="Ícone do usuário"
              className="header__avatar"
            />
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
