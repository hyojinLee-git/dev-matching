import Header from "./src/components/Header.js";

class App {
    // 생성자 함수
    constructor($body) {
        this.$body = $body;
        this.render();
    }

    // 렌더링 함수
    render() {
        console.log(this.$body);
        const $header = new Header(this.$body);

        $header.render();
    }
}

export default App;
