import { useState } from "react";

const useCardHook = () => {
    const [hoveredCardId, setHoveredCardId] = useState(null);
    const [shadowPos, setShadowPos] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e, cardId) => {
        const cardElement = e.currentTarget;
        const { left, top, width, height } = cardElement.getBoundingClientRect();

        // Get cursor position relative to the center of the card
        const centerX = width / 2;
        const centerY = height / 2;
        const x = e.clientX - left - centerX;
        const y = e.clientY - top - centerY;

        // Calculate tilt
        const tiltX = (y / centerY) * 30;
        const tiltY = (x / centerX) * -30;

        cardElement.style.transform = `perspective(1000px) rotateY(${tiltY}deg) rotateX(${tiltX}deg)`

        // Calculate cursor position relative to the card's center
        const posX = e.clientX - left;
        const posY = e.clientY - top;

        setShadowPos({ x: posX, y: posY });
        setHoveredCardId(cardId);

    };

    const handleMouseLeave = (e) => {
        const cardElement = e.currentTarget;
        cardElement.style.transform = `perspective(1000px) rotateY(0deg) rotateX(0deg)`
        setHoveredCardId(null);
    };


    return {
        shadowPos,
        hoveredCardId,
        handleMouseMove,
        handleMouseLeave
    }
}

export default useCardHook