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
        value: "#rgb(0, 59, 127)" 
      },
      shape: {
        type: "star"
      },
      opacity: {
        value: 0.2
      }

    }
})
}