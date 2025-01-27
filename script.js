const users = [
    { username: "Matheus", password: "88177142Sp@" },
    { username: "Ary", password: "ary1884" },
    { username: "Roberto", password: "roberto@2025" },
    { username: "Whalison", password: "whalison@2025" },
    { username: "Comercial", password: "comercialeva2025" }
];

const form = document.getElementById("login-form");
const errorMessage = document.getElementById("error-message");

form.addEventListener("submit", (event) => {
    event.preventDefault(); 

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        localStorage.setItem("isLoggedIn", true); 
        localStorage.setItem("loginTime", Date.now()); 
        window.location.href = "https://matheusfonsecabjj.github.io/home/"; 
    } else {
        errorMessage.style.display = "block"; 
    }
});

function checkLogout() {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    const loginTime = localStorage.getItem("loginTime");

    if (isLoggedIn && loginTime) {
        const currentTime = Date.now();
        const elapsedTime = currentTime - parseInt(loginTime, 10);

        if (elapsedTime >= 1800000) {
            localStorage.clear(); 
            alert("Sua sessão expirou. Você será redirecionado para a página de login.");
            window.location.href = "https://matheusfonsecabjj.github.io/login/"; 
        }
    }
}

setInterval(checkLogout, 60000);

window.onload = () => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    if (!isLoggedIn) {
        if (window.location.pathname !== "/login/") {
            window.location.href = "https://matheusfonsecabjj.github.io/login/";
        }
    }
};
