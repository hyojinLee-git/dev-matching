import CardView from "../components/CardView.js";
import ContentTitle from "../components/ContentTitle.js";

class HomePage {
    constructor($main) {
        this.$main = $main;
    }

    render() {
        const $title = new ContentTitle(this.$main, "CardView");
        const $cardView = new CardView(this.$main);
        $title.render();
        $cardView.render();
    }
}

export default HomePage;
