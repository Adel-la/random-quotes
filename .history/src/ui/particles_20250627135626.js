export function initParticles(){
   particlesJS('particles-js', {
    particles: {
      number: {
        value: 80,
        density: {
          enable: true,
        }
     },
      color: {
        value: "003166" 
      },
      shape: {
        type: "circle",
        polygon{}
      },
      opacity: {
        random: true
      },
      size: {
        value: 7
      },
      move: {
        speed: 1,
        out_mode: 'bounce'
      }

    }
})
}