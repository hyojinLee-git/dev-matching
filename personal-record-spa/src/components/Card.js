export const cardDiv = (idx) => {
    const _cardDiv = document.createElement("div");
    _cardDiv.setAttribute("idx", idx);
    _cardDiv.setAttribute("class", "card");

    _cardDiv.addEventListener("click", () => {
        _cardDiv.classList.toggle("is-flipped");
    });

    return _cardDiv;
};

export const cardPlane = (side, data) => {
    const _cardPlane = document.createElement("div");
    _cardPlane.setAttribute("class", `card_plane card_plane--${side}`);
    if (side === "front") _cardPlane.innerHTML = data.name;
    else _cardPlane.innerHTML = data.mbti;

    return _cardPlane;
};
