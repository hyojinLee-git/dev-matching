export const cardDiv = (idx) => {
    const _cardDiv = document.createElement("div");
    _cardDiv.setAttribute("idx", idx);
    _cardDiv.setAttribute("class", "card");

    let cardStorage = JSON.parse(localStorage.getItem("cardStatus"));
    if (cardStorage.includes(idx)) {
        _cardDiv.classList.add("is-flipped");
    }

    _cardDiv.addEventListener("click", () => {
        _cardDiv.classList.toggle("is-flipped");
        let cardStorage = JSON.parse(localStorage.getItem("cardStatus"));
        if (cardStorage.includes(idx)) {
            const _idx = cardStorage.findIndex((v) => v === idx);
            cardStorage.splice(_idx, 1);
            localStorage.setItem("cardStatus", JSON.stringify(cardStorage));
        } else {
            cardStorage.push(idx);
            localStorage.setItem("cardStatus", JSON.stringify(cardStorage));
        }
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
