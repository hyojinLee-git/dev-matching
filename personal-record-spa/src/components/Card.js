export const cardDiv = (idx) => {
    const _cardDiv = document.createElement("div");
    _cardDiv.setAttribute("idx", idx);
    _cardDiv.setAttribute("class", "card");

    return _cardDiv;
};

export const cardPlane = (side, data) => {
    const _cardPlane = document.createElement("div");
    _cardPlane.setAttribute("class", `card_plane card_plane--${side}`);
    _cardPlane.innerHTML = data.name;

    return _cardPlane;
};
