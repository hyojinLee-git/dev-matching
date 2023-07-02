import { cardDiv, cardPlane } from "./Card.js";

class CardView {
    constructor($main) {
        this.$main = $main;
    }

    render() {
        const containerDiv = document.createElement("div");
        containerDiv.setAttribute("id", "cards_container");
        this.$main.appendChild(containerDiv);

        let personalInfo = [];
        const data = localStorage.getItem("personalInfo");
        if (data) {
            personalInfo = JSON.parse(data);
        }
        personalInfo.map((v, idx) => {
            const card = cardDiv(idx);
            card.appendChild(cardPlane("front", v));
            card.appendChild(cardPlane("back", v));

            containerDiv.appendChild(card);
        });
    }
}

export default CardView;
