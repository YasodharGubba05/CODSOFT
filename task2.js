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
    document.getElementById('section1').scrollIntoView({ behavior: 'smooth' });
  });

  const projects=document.querySelector('#projects');
  projects.addEventListener('click', function() {
      document.getElementById('section2').scrollIntoView({ behavior: 'smooth' });
    });
  
