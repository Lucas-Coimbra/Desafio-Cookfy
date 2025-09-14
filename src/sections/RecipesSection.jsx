import React, { useState } from "react";
import "./RecipesSection.css";
import Lightbox from "../components/Lightbox/Lightbox";

import arrowLeft from "../assets/seta-esquerda.svg";
import arrowRight from "../assets/seta-direita.svg";
import starIcon from "../assets/estrela.svg";
import sampleFood from "../../public/images/patrick-kalkman.jpg";
import yogurtImg from "../../public/images/karly-gomez.jpg";

export default function RecipesSection() {
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const recipes = [
    {
      id: 1,
      title: "Sanduíche de tomate com salada de ovos",
      added: "Adicionado ontem",
      difficulty: 2,
      difficultyLabel: "Fácil",
      image: sampleFood,
      description:
        "Receita saborosa de sanduíche com tomate e salada de ovos — perfeita para um lanche rápido.",
    },
    {
      id: 2,
      title: "Iogurte de fruta crocante",
      added: "Adicionado a 2 dias",
      difficulty: 4,
      difficultyLabel: "Difícil",
      image: yogurtImg,
      description:
        "Iogurte com frutas frescas e granola crocante — uma sobremesa saudável e deliciosa.",
    },
  ];

  const currentRecipe = recipes[currentIndex];

  const navigate = (direction) => {
    setCurrentIndex((prev) =>
      direction === "prev"
        ? prev === 0
          ? recipes.length - 1
          : prev - 1
        : prev === recipes.length - 1
        ? 0
        : prev + 1
    );
  };

  return (
    <section className="recipes">
      <h2 className="recipes__title">
        Experimente alguma <br /> das últimas receitas
      </h2>

      <div className="recipes__content">
        <div className="recipes__card">
          <div className="recipes__image-column">
            <div className="recipes__image-wrapper">
              <img
                src={currentRecipe.image}
                alt={currentRecipe.title}
                className="recipes__image"
              />
              <button
                className="recipes__overlay-btn"
                onClick={() => setSelectedRecipe(currentRecipe)}
                aria-label={`Ver receita ${currentRecipe.title}`}
              >
                <img
                  src={arrowRight}
                  alt=""
                  className="recipes__overlay-icon"
                />
                <span className="recipes__overlay-text">Ver receita</span>
              </button>
            </div>
          </div>

          <div className="recipes__info-column">
            <p className="recipes__added">{currentRecipe.added}</p>
            <h3 className="recipes__name">{currentRecipe.title}</h3>

            <div className="recipes__difficulty">
              <span className="recipes__difficulty-label">
                {currentRecipe.difficultyLabel}
              </span>
              <div className="recipes__stars" aria-hidden>
                {Array.from({ length: 5 }).map((_, i) => (
                  <img
                    key={i}
                    src={starIcon}
                    alt=""
                    className={`recipes__star ${
                      i < currentRecipe.difficulty ? "active" : ""
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="recipes__nav">
              <button
                aria-label="Anterior"
                className="nav-btn"
                onClick={() => navigate("prev")}
              >
                <img src={arrowLeft} alt="Anterior" />
              </button>
              <button
                aria-label="Próxima"
                className="nav-btn"
                onClick={() => navigate("next")}
              >
                <img src={arrowRight} alt="Próxima" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <Lightbox
        recipe={selectedRecipe}
        onClose={() => setSelectedRecipe(null)}
      />
    </section>
  );
}
