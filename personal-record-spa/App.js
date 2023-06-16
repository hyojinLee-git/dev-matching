import Header from "./src/components/Header.js";
import HomePage from "./src/page/HomePage.js";
import SignupPage from "./src/page/SignupPage.js";

class App {
    // 생성자 함수
    constructor($body) {
        this.$body = $body;
        this.render();
    }

    // 렌더링 함수
    render() {
        const $header = new Header(this.$body);
        $header.render();

        const $main = document.createElement("main");
        $main.setAttribute("id", "page_content");
        this.$body.appendChild($main);

        const $homePage = new HomePage($main);
        const $signupPage = new SignupPage($main);

        document.addEventListener("urlchange", (e) => {
            let pathname = e.detail.href;

            switch (pathname) {
                case "/web/":
                    $homePage.render();
                    break;
                case "/web/signup":
                    $signupPage.render();
                    break;
            }
        });
    }
}

export default App;
