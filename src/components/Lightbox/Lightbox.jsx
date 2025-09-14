import React, { useEffect } from "react";
import "./Lightbox.css";

import closeIcon from "../../assets/fechar.svg";
import heartIcon from "../../assets/like.svg";
import arrowIcon from "../../assets/seta-direita.svg";

export default function Lightbox({ recipe, onClose }) {
  const isOpen = Boolean(recipe);

  useEffect(() => {
    if (!isOpen) return;

    function handleKey(e) {
      if (e.key === "Escape") onClose?.();
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="lightbox" role="dialog" aria-modal="true">
      <div className="lightbox__overlay" onClick={onClose} />
      <div className="lightbox__panel" onClick={(e) => e.stopPropagation()}>
        <button
          className="lightbox__close"
          onClick={onClose}
          aria-label="Fechar"
        >
          <img src={closeIcon} alt="" />
        </button>

        <div className="lightbox__left">
          <div className="lightbox__image-wrapper">
            <img
              src={recipe.image}
              alt={recipe.title}
              className="lightbox__image"
            />
          </div>
        </div>

        <div className="lightbox__right">
          {recipe.subtitle && (
            <h3 className="lightbox__subtitle">{recipe.subtitle}</h3>
          )}

          <h2 className="lightbox__title">{recipe.title}</h2>

          {recipe.author && (
            <p className="lightbox__author">
              Postado por{" "}
              <span className="lightbox__author-name">{recipe.author}</span>
            </p>
          )}

          <p className="lightbox__description">{recipe.description}</p>

          <div className="lightbox__actions">
            <button className="lightbox__btn lightbox__btn--like">
              <img src={heartIcon} alt="" className="lightbox__btn-icon" />
              Curtir
            </button>

            <button className="lightbox__btn lightbox__btn--view">
              <img src={arrowIcon} alt="" className="lightbox__btn-icon" />
              Ver receita
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
