// Содержимое файла js/particles-config.js
particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 100, // Количество частиц
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": ["#ade8f4", "#f72585", "#7209b7", "#ffffff"] // Цвета частиц
    },
    "shape": {
      "type": "circle", // Тип частиц: "circle", "edge", "triangle", "polygon", "star", "image"
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      }
    },
    "opacity": {
      "value": 0.6,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 0.8,
        "opacity_min": 0.2,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 120, // Дистанция для связей
      "color": "#ffffff", // Цвет связей
      "opacity": 0.2,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 1.5, // Скорость движения
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab" // "grab", "bubble", "repulse"
      },
      "onclick": {
        "enable": true,
        "mode": "push" // "push", "remove", "bubble"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 140,
        "line_linked": {
          "opacity": 0.7
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 150,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});