function getValue() {
    var value = document.getElementById("name").value;
    document.getElementById("result").innerHTML = "Olá, seja bem- vindo(a), " + value + "!";
  }

  function removeValue() {
    document.getElementById("name").value = "";
    document.getElementById("result").innerHTML = "";
  }

  function age() {
    var x;
    var idade = prompt("Digite sua idade:");
  
    if (idade >= 18) {
      window.open("Pagina3.html");
    } else {
      alert("Você não tem idade suficiente para participar do Quiz DevMedia!");
    }
  }

 function mensagem(){
    alert("Obrigado por participar do Quiz da nossa plataforma! Aguarde a confirmação por e-mail.")
}