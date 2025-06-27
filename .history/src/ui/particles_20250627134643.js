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
        type: "star"
      },
      opacity: {
        value: 0.2
      }

    }
})
}