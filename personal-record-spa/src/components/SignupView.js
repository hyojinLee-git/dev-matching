import { button, input, select } from "./Form.js";

class SignupView {
    constructor($main) {
        this.$main = $main;
    }

    render() {
        const containerDiv = document.createElement("div");
        containerDiv.setAttribute("id", "form_container");
        this.$main.appendChild(containerDiv);

        const form = document.createElement("form");
        form.setAttribute("id", "grepp_form");
        containerDiv.appendChild(form);

        input("text", "name", "이름");
        input("email", "email", "이메일");
        input("text", "nickname", "닉네임");

        const roleValList = [
            "직군을 선택해주세요",
            "프론트엔드",
            "백엔드",
            "풀스택",
        ];
        const roleTxtList = [
            "직군을 선택해주세요",
            "프론트엔드",
            "백엔드",
            "풀스택",
        ];
        const mbtiValList = [
            "MBTI를 선택해주세요",
            "ENFJ",
            "ENTJ",
            "ENFP",
            "ENTP",
            "ESFJ",
            "ESTJ",
            "ESFP",
            "ESTP",
            "INFJ",
            "INTJ",
            "INFP",
            "INTP",
            "ISFJ",
            "ISTJ",
            "ISFP",
            "ISTP",
        ];
        const mbtiTxtList = [
            "MBTI를 선택해주세요",
            "ENFJ",
            "ENTJ",
            "ENFP",
            "ENTP",
            "ESFJ",
            "ESTJ",
            "ESFP",
            "ESTP",
            "INFJ",
            "INTJ",
            "INFP",
            "INTP",
            "ISFJ",
            "ISTJ",
            "ISFP",
            "ISTP",
        ];

        select("role", roleValList, roleTxtList, "직군");
        select("mbti", mbtiValList, mbtiTxtList, "MBTI");

        button("submit", "등록");
    }
}

export default SignupView;
