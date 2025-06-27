export function initParticles(){

  particlesJS('particles-js', {
    particles: {
      number: {
        value: 80, // Количество частиц
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: "#00ffff" // Цвет (неоновый)
      },
      shape: {
        type: "circle",
      },
      opacity: {
        value: 0.5,
        random: false
      },
      size: {
        value: 3,
        random: true
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#00ffff",
        opacity: 0.3,
        width: 1
      },
      move: {
        enable: true,
        speed: 2,
        
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "repulse"
        },
        onclick: {
          enable: true,
          mode: "push"
        },
        resize: true
      },
      modes: {
        repulse: {
          distance: 100
        },
        push: {
          particles_nb: 4
        }
      }
    },
    retina_detect: true
  });

}