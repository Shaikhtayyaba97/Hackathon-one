var button = document.getElementById("Skill");
var skill = document.getElementById("our-skill");
button.addEventListener("click", function () {
    if (skill.style.display === "none") {
        skill.style.display = "block";
    }
    else {
        skill.style.display = "none";
    }
});
