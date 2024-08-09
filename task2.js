const linkedin = document.querySelector('#linkedin');
linkedin.addEventListener("click", function() {
    window.open("https://www.linkedin.com/in/yasodhar-gubba-18aa84209", "_blank");
});

const github = document.querySelector('#github');
github.addEventListener("click", function() {
    window.open("https://github.com/YasodharGubba05", "_blank");
});

const skills=document.querySelector('#skills');
skills.addEventListener('click', function() {
    document.getElementById('section3').scrollIntoView({ behavior: 'smooth' });
  });

const projects=document.querySelector('#projects');
  projects.addEventListener('click', function() {
      document.getElementById('section2').scrollIntoView({ behavior: 'smooth' });
    });

const about=document.querySelector('#blogs');
    about.addEventListener('click', function() {
        document.getElementById('section1').scrollIntoView({ behavior: 'smooth' });
      });

 const details=document.querySelector('#contactme');
      details.addEventListener('click', function() {
          document.getElementById('section4').scrollIntoView({ behavior: 'smooth' });
        });

 const mylinkedin = document.querySelector('#mylinkedin');
        mylinkedin.addEventListener("click", function() {
            window.open("https://www.linkedin.com/in/yasodhar-gubba-18aa84209", "_blank");
        });

        const reachout=document.querySelector('#reachout');
        reachout.addEventListener('click', function() {
            document.getElementById('section4').scrollIntoView({ behavior: 'smooth' });
          });       

