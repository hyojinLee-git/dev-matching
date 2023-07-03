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

        form.addEventListener("submit", (e) => {
            e.preventDefault();

            const personalInfo = JSON.parse(
                localStorage.getItem("personalInfo")
            );

            // let idx=personalInfo.length;
            let name = e.target.name.value;
            let email = e.target.email.value;
            let nickname = e.target.nickname.value;
            let role = e.target.role.value;
            let mbti = e.target.mbti.value;

            const submitInfo = {
                name,
                email,
                nickname,
                role,
                mbti,
            };

            localStorage.setItem(
                "personalInfo",
                JSON.stringify([...personalInfo, submitInfo])
            );

            alert("등록");
        });

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
