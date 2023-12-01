var positions = [
    { id: "admin", female: "Apprentie administratrice cloud"}
];

//Cursor
// var cursor = document.getElementById("cursor");
// document.body.addEventListener("mousemove", function(e) {
//   cursor.style.left = e.clientX + "px",
//     cursor.style.top = e.clientY + "px";
// });


function init(){
    // Remplacez les valeurs suivantes par les données spécifiques à la personne
    var user = {
        name: { first: "Samantha", last: "Morata" },
        picture: { large: "https://media.licdn.com/dms/image/C4E03AQHzQuBzf1xP2w/profile-displayphoto-shrink_800_800/0/1655208276384?e=1704931200&v=beta&t=XPbNYBrE4dk2nvIn_X5T7ZldfgjK-GKIn2Hf2gYVdxI" },
        gender: "female", 
        position: positions.find(pos => pos.id === "admin"),  
        company: "Icap",  
        location: { city: "Toulouse", country: "France" },  
        speciality: "l'informatique",  
        email: "sam@icap.fr"  
    };

    renderFromUser(user);
}

function renderFromUser(user) {
    document.querySelector("#person-picture").src = user.picture.large; 
    document.querySelector("#person-fullname").innerHTML = user.name.first + " " + user.name.last;
    document.querySelector("#person-firstname").innerHTML = user.name.first;
    document.querySelector("#person-job").innerHTML = user.position[user.gender];
    document.querySelector("#person-position").innerHTML = user.position[user.gender];
    document.querySelector("#person-company").innerHTML = user.company ? " chez " + user.company : "en poste";
    document.querySelector("#person-city").innerHTML = user.location.city + ", " + user.location.country;
    document.querySelector("#person-speciality").innerHTML = user.speciality;
    document.querySelector("#person-speciality").innerHTML = user.speciality;
    document.querySelector("#person-email").href = "mailto:"+user.email;
}

init();