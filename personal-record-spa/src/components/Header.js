class Header {
    constructor($body) {
        this.$body = $body;
    }

    createMenuElement(divClass, spanClass, spanId, menuText) {
        const $div = document.createElement("div");
        $div.setAttribute("class", divClass);

        const $span = document.createElement("span");
        $span.setAttribute("class", spanClass);
        $span.setAttribute("id", spanId);
        $span.appendChild(document.createTextNode(menuText));

        $div.appendChild($span);

        return $div;
    }

    render() {
        const $header = document.createElement("header");
        const homeMenu = this.createMenuElement(
            "header header_left",
            "menu_name",
            "menu_home",
            "HOME"
        );
        const signupMenu = this.createMenuElement(
            "header header_right",
            "menu_name",
            "menu_signup",
            "SIGNUP"
        );

        $header.appendChild(homeMenu);
        $header.appendChild(signupMenu);

        this.$body.appendChild($header);
    }
}

export default Header;
