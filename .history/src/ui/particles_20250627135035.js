export function initParticles(){
   particlesJS('particles-js', {
    particles: {
      number: {
        value: 100,
        density: {
          enable: true,
        }
     },
      color: {
        value: "003166" 
      },
      shape: {
        type: "circle"
      },
      opacity: {
        random: true
      },
      size: {
        random: true
      }

    }
})
}