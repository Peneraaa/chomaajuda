// Funções da Calculadora
function somar() {
    let n1 = parseFloat(document.getElementById("num1").value);
    let n2 = parseFloat(document.getElementById("num2").value);
    document.getElementById("resultado").textContent = n1 + n2;
  }
  
  function subtrair() {
    let n1 = parseFloat(document.getElementById("num1").value);
    let n2 = parseFloat(document.getElementById("num2").value);
    document.getElementById("resultado").textContent = n1 - n2;
  }
  
  function multiplicar() {
    let n1 = parseFloat(document.getElementById("num1").value);
    let n2 = parseFloat(document.getElementById("num2").value);
    document.getElementById("resultado").textContent = n1 * n2;
  }
  
  function dividir() {
    let n1 = parseFloat(document.getElementById("num1").value);
    let n2 = parseFloat(document.getElementById("num2").value);
    if (n2 === 0) {
      document.getElementById("resultado").textContent = "Erro: divisão por zero";
    } else {
      document.getElementById("resultado").textContent = n1 / n2;
    }
  }
  
  // Funções do Contador
  let contador = 0;
  
  function incrementar() {
    contador++;
    document.getElementById("contador").textContent = contador;
  }
  
  function decrementar() {
    contador--;
    document.getElementById("contador").textContent = contador;
  }
  
  function zerar() {
    contador = 0;
    document.getElementById("contador").textContent = contador;
  }
  