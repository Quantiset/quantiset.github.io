document.addEventListener('DOMContentLoaded', () => {
    const table = document.getElementById('projectTable');
    const saveProjectsBtn = document.getElementById('saveProjectsBtn');
    const addRowBtn = document.getElementById('addRowBtn');


    table.addEventListener('change', (e) => {
        if (e.target.classList.contains('project-select')) {
            const row = e.target.closest('tr');
            const selectedProject = e.target.value;
            const projectsCell = row.querySelector('.projects');

            if (selectedProject && !projectsCell.innerText.includes(selectedProject)) {
                projectsCell.innerText += projectsCell.innerText ? `, ${selectedProject}` : selectedProject;
            }
        }
        else if (e.target.classList.contains('project-remove')) {
            const removeProject = e.target.value;
            const row = e.target.closest('tr');
            const projectsCell = row.querySelector('.projects');
            if (removeProject && projectsCell.innerText.includes(removeProject)) {
                const projectsArray = projectsCell.innerText.split(', ').filter(Boolean);
                const updatedProjectsArray = projectsArray.filter(project => project !== removeProject);
                projectsCell.innerText = updatedProjectsArray.join(', ');
            }
        }
    });


    addRowBtn.addEventListener('click', function() {
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
        <td><input type="text" id="name-input" placeholder="Enter name"></td>
        <td><input type="email" id="email-input" placeholder="Enter email"></td>
        <td id="projects" class="projects"></td>
        <td>
                <select class="project-select" id="project-select">
                    <option value="">Select a project</option>
                    <option value="Project 1">Project 1</option>
                    <option value="Project 2">Project 2</option>
                    <option value="Project 3">Project 3</option>
                    <option value="Project 4">Project 4</option>
                    <option value="Project 5">Project 5</option>
                    <option value="Project 6">Project 6</option>
                </select>
            </td>
            <td>
                <select class="project-remove" id="project-remove">
                    <option value="">Select a project</option>
                    <option value="Project 1">Project 1</option>
                    <option value="Project 2">Project 2</option>
                    <option value="Project 3">Project 3</option>
                    <option value="Project 4">Project 4</option>
                    <option value="Project 5">Project 5</option>
                    <option value="Project 6">Project 6</option>
                </select>
            </td>
        `;
        projectTable.querySelector('tbody').appendChild(newRow);

        console.log(newRow)
        newRow.querySelector('#name-input').value = '';
        newRow.querySelector('#email-input').value = '';
    });


    saveProjectsBtn.addEventListener('click', async () => {
        const rows = table.querySelectorAll('tbody tr');
        const data = Array.from(rows).map(row => {
            // console.log(document.getElementById('name-input').value);
            // const name = row.cells[0].innerText;
            // const email = row.cells[1].innerText;
            // const projects = row.cells[2].innerText;
            // const projects = row.cells[2].innerText.split(',').filter(Boolean);
        
            const name = row.querySelector('#name-input').value;
            console.log(name);
            const email = row.querySelector('#email-input').value;
            //console.log(row.querySelectorAll('#project-select'));
            const projects = row.querySelector('#projects').innerHTML;//.map(select => select.value);
            return { name, email, projects };
        });

        try {
            const response = await fetch('https://p497lzzlxf.execute-api.us-east-2.amazonaws.com/Phase1/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data) 
            });

            console.log(response);
            console.log(JSON.stringify(data));
            console.log(response.ok);

            if (response.ok) {
                alert('Projects saved successfully!');
            } else {
                alert('Failed to save projects.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred while saving projects.');
        }
    });
});



