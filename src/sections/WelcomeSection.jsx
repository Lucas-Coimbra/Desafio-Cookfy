import React, { useState } from "react";
import "./WelcomeSection.css";
import useUser from "../context/useUser";

import dishImg from "../../public/images/louis-hansel.jpg";
import dishBg from "../assets/elemento-1.svg";
import arrowIcon from "../assets/seta-direita.svg";
import Lightbox from "../components/Lightbox/Lightbox";

function WelcomeSection() {
  const { user, loading } = useUser();
  const displayName = loading ? "..." : user ? user.fullName : "Visitante";

  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const recipe = {
    title: "Ceviche de peixe branco",
    author: "Michel Filipe",
    image: dishImg,
    description:
      "O ceviche é um prato de origem peruana feito com cubos de peixe que são cozidos em uma solução ácida, geralmente caldo de limão. Quando o peixe em contato com o limão, um processo químico é iniciado: a proteína do peixe se desnatura e a textura do peixe muda e o peixe fica mais saboroso. O segredo para fazer um bom ceviche é a qualidade do ingrediente principal: o peixe tem que estar bem fresco. Esse prato peruano pode ser feito com salmão, camarões e alguns contam até com manga e abacate, e o tradicional é preparado com peixe branco.",
  };

  return (
    <section className="welcome">
      <div className="welcome-text">
        <h2 className="welcome-greeting">Bem vindo de volta</h2>
        <h1 className="welcome-name">{displayName}</h1>

        <div className="welcome-community">
          <p className="contrib">
            Contribuição da comunidade:
            <br />
            {recipe.title}
          </p>
          <p className="author">
            Por <span className="author-name">{recipe.author}</span>
          </p>
        </div>
      </div>

      <div className="welcome-card">
        <img src={dishBg} alt="" className="dish-bg" />
        <div className="dish-box">
          <img src={dishImg} alt={recipe.title} className="dish" />
          <div
            className="dish-footer"
            onClick={() => setSelectedRecipe(recipe)}
          >
            <img src={arrowIcon} alt="" className="dish-arrow" />
            <span className="dish-footer-text">Ver foto</span>
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

export default WelcomeSection;
