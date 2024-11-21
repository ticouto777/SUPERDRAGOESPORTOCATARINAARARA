// Declaração das variáveis no escopo global
var intervaloMudancaCor;
var intervaloFotos;

// Função para mostrar a nuvem
function mostrarNuvem(id) {
  var nuvem = document.getElementById(id);
  nuvem.style.display = "block";
  setTimeout(function () {
    nuvem.classList.add("visible");
  }, 10);
}

// Função para redefinir as cores para o estado original
function redefinirCores() {
  // Redefine a cor de fundo do body
  document.body.style.backgroundColor = "#f4f4f4";
  // Redefine a cor das frases (incluindo h1 e h2)
  var frases = document.querySelectorAll("h1, h2, p");
  frases.forEach(function (frase) {
    frase.style.color = "#333";
  });
  // Redefine a cor de fundo da barra de navegação
  var barraNavegacao = document.querySelector("header nav ul");
  barraNavegacao.style.backgroundColor = "#0056b3";
}

// Função para fechar a nuvem
function fecharNuvem(id) {
  var nuvem = document.getElementById(id);

  // Pausa o áudio correspondente à nuvem, se existir
  var audioId = id === "nuvem1" ? "audio1" : "audio2";
  var audio = document.getElementById(audioId);
  if (audio) {
    audio.pause();
    audio.currentTime = 0; // Redefine o tempo para o início
  }

  // Para os efeitos visuais
  clearInterval(intervaloMudancaCor);
  clearInterval(intervaloFotos);

  // Redefine as cores para o estado original
  redefinirCores();

  // Remove as fotos
  var fotosMalucas = document.getElementById("fotos-malucas");
  fotosMalucas.innerHTML = "";

  // Mostra a segunda nuvem APENAS se a primeira nuvem foi fechada
  if (id === "nuvem1") {
    mostrarNuvem("nuvem2");
  }

  // Animação de fechar a nuvem
  nuvem.classList.remove("visible");
  nuvem.classList.add("closing");

  setTimeout(function () {
    nuvem.style.display = "none";
    nuvem.classList.remove("closing");
  }, 1000);
}

// Função para tocar o áudio, mostrar a nuvem e iniciar os efeitos visuais
function tocarAudio(audioId, nuvemId) {
  // Obtém referências para o áudio e a nuvem
  var audio = document.getElementById(audioId);
  var nuvem = document.getElementById(nuvemId);

  // Mostra a nuvem correspondente ao botão clicado
  mostrarNuvem(nuvemId);

  // Reproduz o áudio
  audio.play();

  // Elementos e lógica para mostrar fotos aleatórias
  var fotosMalucas = document.getElementById("fotos-malucas");
  var nomesFotos = ["foto1.jpg", "foto2.jpg", "foto3.jpg", "foto4.jpg"];

  // Inicia o intervalo para mostrar fotos aleatórias a cada 500ms
  intervaloFotos = setInterval(function () {
    var fotoAleatoria = nomesFotos[Math.floor(Math.random() * nomesFotos.length)];
    fotosMalucas.innerHTML =
      '<img src="imagens/' +
      fotoAleatoria +
      '" alt="Foto maluca" style="position: absolute; top: ' +
      Math.random() * window.innerHeight +
      "px; left: " +
      Math.random() * window.innerWidth +
      "px; z-index: 1000;>";
  }, 500);

  // Função para mudar a cor de fundo do body, frases e barra de navegação
  function mudarCorFundo() {
    // Gera uma cor hexadecimal aleatória
    var letras = "0123456789ABCDEF";
    var cor = "#";
    for (var i = 0; i < 6; i++) {
      cor += letras[Math.floor(Math.random() * 16)];
    }

    // Muda a cor de fundo do body
    document.body.style.backgroundColor = cor;

    // Muda a cor das frases (incluindo h1 e h2)
    var frases = document.querySelectorAll("h1, h2, p");
    frases.forEach(function (frase) {
      frase.style.color = cor;
    });

    // Muda a cor de fundo da barra de navegação
    var barraNavegacao = document.querySelector("header nav ul");
    barraNavegacao.style.backgroundColor = cor;
  }

  // Inicia o intervalo para mudar a cor de fundo a cada 1000ms
  intervaloMudancaCor = setInterval(mudarCorFundo, 1000);

  // Adiciona evento para quando o áudio terminar
  audio.onended = function () {
    // Fecha a nuvem atual
    fecharNuvem(nuvemId);

    // Para de mostrar as fotos
    clearInterval(intervaloFotos);
    // Remove as fotos
    fotosMalucas.innerHTML = "";
    // Para a animação de girar (se houver)
    document.body.style.animation = "";
    // Para a mudança de cores
    clearInterval(intervaloMudancaCor);
    // Redefine as cores para o estado original
    redefinirCores();
  };
}

// Adiciona evento de clique aos botões de fechar das nuvens
var fecharNuvemButtons = document.querySelectorAll(".fechar-nuvem");
fecharNuvemButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    var nuvemId = button.parentElement.id;
    // Fecha a nuvem
    fecharNuvem(nuvemId);
  });
});

// Função para mostrar a nuvem após um atraso
function mostrarNuvemComAtraso(id, atraso) {
  setTimeout(function () {
    mostrarNuvem(id);
  }, atraso);
}

// Mostra a primeira nuvem após 10 segundos (10000 milissegundos)
mostrarNuvemComAtraso("nuvem1", 10000);
  
  // Inicializa as animações de escrita com Typed.js
  new Typed("#typed-text", {
    strings: ["SONIC TI COUTO REI DAS RUAS"],
    typeSpeed: 50,
    backSpeed: 30,
    loop: false,
    cursorChar: "|",
    onComplete: function (self) {
      self.cursor.remove();
    },
  });
  
  new Typed("#typed-text-1", {
    strings: ["SOBRE O SONIC DAS RUAS"],
    typeSpeed: 50,
    backSpeed: 30,
    loop: false,
    onComplete: function (self) {
      self.cursor.remove();
    },
  });
  
  new Typed("#typed-text-2", {
    strings: ["TAS A QUERER SABER DEMAIS JA OH FILHO."],
    typeSpeed: 50,
    backSpeed: 30,
    loop: false,
    onComplete: function (self) {
      self.cursor.remove();
    },
  });
  
  new Typed("#typed-text-3", {
    strings: ["BAIRRO DO SONIC"],
    typeSpeed: 50,
    backSpeed: 30,
    loop: false,
    onComplete: function (self) {
      self.cursor.remove();
    },
  });
  
  new Typed("#typed-text-4", {
    strings: ["DIRETAMENTE DA PASTELEIRA, já falei bue ya."],
    typeSpeed: 50,
    backSpeed: 30,
    loop: false,
    onComplete: function (self) {
      self.cursor.remove();
    },
  });
  
  new Typed("#typed-text-5", {
    strings: ["CARACTERÍSTICAS"],
    typeSpeed: 50,
    backSpeed: 30,
    loop: false,
    onComplete: function (self) {
      self.cursor.remove();
    },
  });
  
  new Typed("#typed-text-6", {
    strings: ["RECEPÇÃO E LEGADO"],
    typeSpeed: 50,
    backSpeed: 30,
    loop: false,
    onComplete: function (self) {
      self.cursor.remove();
    },
  });
  
  new Typed("#typed-text-7", {
    strings: ["240kg de branca vendida."],
    typeSpeed: 50,
    backSpeed: 30,
    loop: false,
    onComplete: function (self) {
      self.cursor.remove();
    },
  });
  
  new Typed("#typed-text-8", {
    strings: ["3 facadas na Infante, só naquela oh filho."],
    typeSpeed: 50,
    backSpeed: 30,
    loop: false,
    onComplete: function (self) {
      self.cursor.remove();
    },
  });