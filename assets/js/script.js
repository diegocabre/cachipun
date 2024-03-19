document.addEventListener("DOMContentLoaded", function () {
  var vecesAJugar = 0;
  var jugadas = ["piedra", "papel", "tijera"];

  document
    .getElementById("preguntarVeces")
    .addEventListener("change", function () {
      vecesAJugar = parseInt(this.value);
    });

  document.querySelectorAll("button").forEach(function (button) {
    button.addEventListener("click", function () {
      var jugadaUsuario = this.id;
      var jugadaMaquina = jugadas[Math.floor(Math.random() * jugadas.length)];
      document.getElementById("jugadaUsuario").textContent =
        "Tu elegiste: " + jugadaUsuario;
      document.getElementById("jugadaMaquina").textContent =
        "La máquina eligió: " + jugadaMaquina;

      if (jugadaUsuario === jugadaMaquina) {
        document.getElementById("resultado").textContent = "¡Empate!";
      } else if (
        (jugadaUsuario === "piedra" && jugadaMaquina === "tijera") ||
        (jugadaUsuario === "papel" && jugadaMaquina === "piedra") ||
        (jugadaUsuario === "tijera" && jugadaMaquina === "papel")
      ) {
        document.getElementById("resultado").textContent = "¡Ganaste!";
      } else {
        document.getElementById("resultado").textContent = "¡Perdiste!";
      }

      vecesAJugar--;
      if (vecesAJugar === 0) {
        document.getElementById("pregunta").textContent =
          "¡Se acabaron las veces de jugar!";
        document.querySelectorAll("button").forEach(function (button) {
          button.disabled = true;
        });
      }
    });
  });
});
