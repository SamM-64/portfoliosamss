var positions = [
    { id: "admin",male: "Apprenti administrateur cloud", female: "Apprentie administratrice cloud"}
];

//Cursor
var cursor = document.getElementById("cursor");
document.body.addEventListener("mousemove", function(e) {
  cursor.style.left = e.clientX + "px",
    cursor.style.top = e.clientY + "px";
});


function init(){
    // Remplacez les valeurs suivantes par les données spécifiques à la personne
    var user = {
        name: { first: "Samantha", last: "Morata" },
        picture: { large: "./assets/images/me.jpg" },
        gender: "female",  // ou "female" selon le cas
        position: positions.find(pos => pos.id === "admin"),  // Remplacez "front" par l'id de la position souhaitée
        company: "Icap",  // Remplacez par le nom de l'entreprise si nécessaire
        location: { city: "Toulouse", country: "France" },  // Remplacez par la ville et le pays souhaités
        speciality: "l'informatique",  // Remplacez par la spécialité souhaitée
        email: "smorata@icap.fr"  // Remplacez par l'e-mail souhaité
    };

    renderFromUser(user);
}

function renderFromUser(user) {
    document.querySelector("#person-picture").src = user.picture.large; 
    document.querySelector("#person-fullname").innerHTML = user.name.first + " " + user.name.last;
    document.querySelector("#person-firstname").innerHTML = user.name.first;
    document.querySelector("#person-job").innerHTML = user.position[user.gender];
    document.querySelector("#person-position").innerHTML = user.position[user.gender];
    document.querySelector("#person-company").innerHTML = user.company ? " chez " + user.company : "en recherche d'emploi";
    document.querySelector("#person-city").innerHTML = user.location.city + ", " + user.location.country;
    document.querySelector("#person-speciality").innerHTML = user.speciality;
    document.querySelector("#person-speciality").innerHTML = user.speciality;
    document.querySelector("#person-email").href = "mailto:"+user.email;
}

init();