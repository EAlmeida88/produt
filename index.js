
function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username == "tm41" && password == "41tm") {
        location.href = "./home.html";
        return false;
    } else {
        alert("Nome de usuário ou senha inválidos!");
        return false;
    }
}
