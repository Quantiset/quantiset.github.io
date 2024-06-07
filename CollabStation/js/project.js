// let form = document.getElementById('lobby__form')

// let displayName = sessionStorage.getItem('display_name')
// if(displayName){
//     form.name.value = displayName
// }

// form.addEventListener('submit', (e) => {
//     e.preventDefault()

//     sessionStorage.setItem('display_name', e.target.name.value)

//     let inviteCode = e.target.room.value
//     if(!inviteCode){
//         inviteCode = String(Math.floor(Math.random() * 10000))
//     }
//     window.location = `room.html?room=${inviteCode}`
// })

const queryString = window.location.search
console.log(queryString);
const urlParams = new URLSearchParams(queryString)
console.log(urlParams);
let roomId = urlParams.get('email')
const targetEmail = roomId;

let roomList = [];

async function load() {
    console.log(`https://p497lzzlxf.execute-api.us-east-2.amazonaws.com/Phase1/register?email=${targetEmail}`)
    try {
        const response = await fetch(`https://p497lzzlxf.execute-api.us-east-2.amazonaws.com/Phase1/register?email=${targetEmail}`);
        console.log(response);
        console.log(response.ok);
        const data = await response.json();
        roomList = data.projects.split(", ");
        console.log("data", roomList);
    } catch (error) {
        console.error('Error checking email:', error);
    }
    displayTiles()
}
load()

// Function to create and display tiles based on the room list
function displayTiles() {
    console.log("og", roomList)
    const tileContainer = document.getElementById('tileContainer');
    roomList.forEach(room => {
        const tile = document.createElement('div');
        tile.className = 'tile';
        tile.textContent = room.replace(/([A-Z])/g, ' $1').trim(); // Format room name
        tile.onclick = () => openProject(room);
        tileContainer.appendChild(tile);
    });
}



function openProject(projectName) {
    // alert('Opening ' + projectName);
    // window.location=`room.html?projectName=${projectName}`;
    window.location.href=`room.html?projectName=${projectName}`;
    // Here you can add the code to redirect to a different page or load project details
    // For example: window.location.href = 'project1.html';
}