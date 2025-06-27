export function initParticles(){
   particlesJS('particles-js', {
    particles: {
      number: {
        value: 100,
        density: {
          enable: true,
          value_area: 800
        }
     },
      color: {
        value: "003166" 
      },
      shape: {
        type: "circle",
        polygon: {
          nb_sides: 20
        }
      },
      opacity: {
        random: true,
        value: 1
      },
      size: {
        value: 5
      },
      move: {
        speed: 1,
        out_mode: 'bounce'
      }

    },

    interactivity: {
      events: {
        onhover: {
          enable: true,
          mode: "repulse"
        },
        oneclick: {
          enable: true,
          mode: "bubble"
        }
      },
      modes: {
        repulse: {
          distance: 100
        }
      }
    }
})
}