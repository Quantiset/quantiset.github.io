const queryString = window.location.search
console.log(queryString);
const urlParams = new URLSearchParams(queryString)
console.log(urlParams);
let roomId = urlParams.get('projectName')
console.log(roomId);

let form = document.getElementById('lobby__form')

let displayName = sessionStorage.getItem('display_name')
if(displayName){
    form.name.value = displayName
}

form.addEventListener('submit', (e) => {
    e.preventDefault()

    sessionStorage.setItem('display_name', e.target.name.value)

    // let inviteCode = e.target.room.value
    // if(!inviteCode){
    //     inviteCode = String(Math.floor(Math.random() * 10000))
    // }

    window.location = `room.html?room=${roomId}`
    // window.location = `room.html`
})


