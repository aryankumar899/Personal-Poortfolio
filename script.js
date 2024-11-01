const skills = [
    {
      name: "HTML",
      logo: "https://cdn-icons-png.flaticon.com/512/919/919827.png",
    },
    {
      name: "CSS",
      logo: "https://cdn-icons-png.flaticon.com/512/919/919826.png",
    },
    {
      name: "JavaScript",
      logo: "https://cdn-icons-png.flaticon.com/512/919/919828.png",
    },
    {
      name: "Node.js",
      logo: "https://cdn-icons-png.flaticon.com/512/919/919825.png",
    },
    {
      name: "Express",
      logo: "https://cdn-icons-png.flaticon.com/512/919/919832.png",
    },
    {
        name: "C++",
        logo: "https://tse2.mm.bing.net/th?id=OIP.c9BbPNmGFrhbXYTdOTG6FAHaFj&pid=Api&P=0&h=180"
    },
  ];
  
  const skillsGrid = document.getElementById("skills-grid");
  
  skills.forEach(skill => {
    const skillDiv = document.createElement("div");
    skillDiv.classList.add("skill");
  
    const skillLogo = document.createElement("img");
    skillLogo.src = skill.logo;
    skillLogo.alt = `${skill.name} logo`;
  
    const skillName = document.createElement("p");
    skillName.classList.add("skill-name");
    skillName.textContent = skill.name;
  
    skillDiv.appendChild(skillLogo);
    skillDiv.appendChild(skillName);
  
    skillsGrid.appendChild(skillDiv);
  });
  