import React, { useState } from "react";
import Close from "../assets/close.svg";

const PortfolioItem = ({ img, title, details, preview }) => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => setModal(!modal);

  return (
    <div className="portfolio__item">
      {/* Card image opens modal */}
      <img
        src={img}
        alt={title}
        className="portfolio__img cursor-pointer"
        onClick={toggleModal}
      />

      <div className="portfolio__hover" onClick={toggleModal}>
        <h3 className="portfolio__title">{title}</h3>
      </div>

      {modal && (
        <div className="portfolio__modal">
          <div className="portfolio__modal-content">
            {/* Close button */}
            <img
              src={Close}
              alt="close"
              className="modal__close"
              onClick={toggleModal}
            />

            {/* Modal title */}
            <h3 className="modal__title">{title}</h3>

            {/* Project details */}
            <ul className="modal__list grid">
              {details.map(({ icon, title, desc }, index) => (
                <li className="modal__item" key={index}>
                  <span className="item__icon">{icon}</span>
                  <div>
                    <span className="item__title">{title}</span>
                    <span className="item__details">{desc}</span>
                  </div>
                </li>
              ))}
            </ul>

            {/* Clickable modal image */}
            <a href={preview} target="_blank" rel="noopener noreferrer">
              <img
                src={img}
                alt={title}
                className="modal__img cursor-pointer"
              />
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default PortfolioItem;
