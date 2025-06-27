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
        
      },
      size: {
        value: 3
      },
      move: {
        speed: 3,
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