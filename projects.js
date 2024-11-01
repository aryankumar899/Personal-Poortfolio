document.addEventListener('DOMContentLoaded', () => {
    const projectGrid = document.getElementById('projectGrid');
    
    // Example of how you might dynamically add more projects in the future
    const projects = [
      // {
      //   title: 'Project Title 4',
      //   description: 'Brief description of the project goes here.',
      //   image: 'https://via.placeholder.com/300x200'
      // },
      // {
      //   title: 'Project Title 5',
      //   description: 'Brief description of the project goes here.',
      //   image: 'https://via.placeholder.com/300x200'
      // }
    ];
  
    projects.forEach(project => {
      const projectDiv = document.createElement('div');
      projectDiv.classList.add('project');
      projectDiv.innerHTML = `
        <img src="${project.image}" alt="${project.title}">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
      `;
      projectGrid.appendChild(projectDiv);
    });
  });
  