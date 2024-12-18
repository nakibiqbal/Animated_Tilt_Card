import { useState } from "react";
import "./Card.css";
import useCardHook from "./CardHook/useCardHook";
import { CardData } from "./CardData/CardData";

const Card = () => {

    const [cardData] = useState(CardData)
    const { shadowPos,
        hoveredCardId,
        handleMouseMove,
        handleMouseLeave } = useCardHook()

    return (
        <section id="cardSection">

            <div className="cardContainer">

                {cardData.map((card) => (

                    <div
                        key={card.id}
                        className="creative-tilt-card"
                        onMouseMove={(e) => handleMouseMove(e, card.id)}
                        onMouseLeave={handleMouseLeave}
                        style={{
                            transition: "transform 0.5s ease-out",
                        }}
                    >
                        {/* Shadow attached to the cursor */}
                        {hoveredCardId === card.id && (
                            <span
                                style={{
                                    width: "9rem",
                                    height: "9rem",
                                    background: "white",
                                    position: "absolute",
                                    left: `${shadowPos.x}px`,
                                    top: `${shadowPos.y}px`,
                                    transform: "translate(-50%, -50%)",
                                    borderRadius: "50%",
                                    filter: "blur(7rem)",
                                    pointerEvents: "none",
                                    opacity: 1,
                                }}
                                className="shadow"
                            />
                        )}
                        <div className="card-content">
                            <h2>{card.skill}</h2>
                            {card.desc && <p>{card.desc}</p>}
                        </div>
                    </div>

                ))}

            </div>

        </section>
    );
};

export default Card;