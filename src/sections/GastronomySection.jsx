import { useState } from "react";
import "./GastronomySection.css";

import cozinhaImg from "../../public/images/istockphoto.jpg";
import patisserieImg from "../../public/images/sebastian-coman.jpg";
import drinksImg from "../../public/images/Topo-TEN.jpg";

import CozinhaIcon from "../assets/cozinha.svg?react";
import PatisserieIcon from "../assets/patisserie.svg?react";
import DrinksIcon from "../assets/drinks.svg?react";
import decoLeft from "../assets/elemtno-4.svg";
import decoRight from "../assets/elemento-6.svg";

export default function GastronomySection() {
  const [active, setActive] = useState("patisserie");

  const images = {
    cozinha: cozinhaImg,
    patisserie: patisserieImg,
    drinks: drinksImg,
  };

  const options = [
    { id: "cozinha", label: "Cozinha", Icon: CozinhaIcon },
    { id: "patisserie", label: "Patisserie", Icon: PatisserieIcon },
    { id: "drinks", label: "Drinks", Icon: DrinksIcon },
  ];

  return (
    <section className="gastronomy">
      <img src={decoLeft} alt="" className="gastronomy__deco deco-left" />
      <h2 className="gastronomy__title">Entre no mundo gastronômico</h2>

      <div className="gastronomy__content">
        <div
          className="gastronomy__options"
          role="tablist"
          aria-label="Categorias"
        >
          {options.map((opt) => {
            const isActive = active === opt.id;
            const IconComponent = opt.Icon;
            return (
              <button
                key={opt.id}
                type="button"
                className={`gastronomy__option ${isActive ? "active" : ""}`}
                onClick={() => setActive(opt.id)}
              >
                <IconComponent className="gastronomy__icon" />
                <span className="gastronomy__label">{opt.label}</span>
              </button>
            );
          })}
        </div>

        <div className="gastronomy__image-wrapper" aria-hidden={false}>
          <img
            src={images[active]}
            alt={active}
            className="gastronomy__image"
          />
          <img src={decoRight} alt="" className="gastronomy__deco deco-right" />
        </div>
      </div>
    </section>
  );
}
