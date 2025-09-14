import React, { useEffect, useState } from "react";
import "./Sidebar.css";
import useUser from "../../context/useUser";

import closeIcon from "../../assets/fechar.svg";
import bugIcon from "../../assets/bug.svg";
import settingsIcon from "../../assets/senha.svg";
import logoutIcon from "../../assets/sair.svg";
import emailIcon from "../../assets/email.svg";
import phoneIcon from "../../assets/telefone.svg";

function Sidebar() {
  const { user, loading } = useUser();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handler = () => setIsOpen((prev) => !prev);
    window.addEventListener("toggleSidebar", handler);
    return () => window.removeEventListener("toggleSidebar", handler);
  }, []);

  if (!isOpen) return null;

  return (
    <>
      <div className="sidebar-overlay" onClick={() => setIsOpen(false)} />

      <aside className="sidebar">
        <button className="sidebar-close" onClick={() => setIsOpen(false)}>
          <img src={closeIcon} alt="Fechar" className="sidebar-close-icon" />
          <strong>Fechar</strong>
        </button>

        <div className="sidebar-user">
          {!loading && user ? (
            <>
              <div className="sidebar-user-header">
                <div className="sidebar-avatar-wrapper">
                  <img
                    src={user.avatar}
                    alt="Avatar"
                    className="sidebar-avatar"
                  />
                </div>
                <h3 className="sidebar-username">
                  {user.firstName} {user.lastName}
                </h3>
              </div>

              <div className="sidebar-contact">
                <p>
                  <img
                    src={emailIcon}
                    alt=""
                    className="sidebar-contact-icon"
                  />
                  <strong>{user.email}</strong>
                </p>
                <p>
                  <img
                    src={phoneIcon}
                    alt=""
                    className="sidebar-contact-icon"
                  />
                  <strong>{user.phone}</strong>
                </p>
              </div>
            </>
          ) : (
            <p>Carregando usuário...</p>
          )}
        </div>

        <div className="sidebar-plan">
          <div className="sidebar-plan-header">
            <h4>Plano mensal</h4>
            <p>16 dias restantes</p>
          </div>
          <div className="progress-bar">
            <div className="progress"></div>
          </div>
          <button className="btn-annual">Assinar plano anual</button>
        </div>

        <ul className="sidebar-options">
          <li>
            <img src={bugIcon} alt="" /> <span>Reportar bug ou abuso</span>
          </li>
          <li>
            <img src={settingsIcon} alt="" /> <span>Alterar senha</span>
          </li>
          <li>
            <img src={logoutIcon} alt="" /> <span>Sair</span>
          </li>
        </ul>
      </aside>
    </>
  );
}

export default Sidebar;
