document.addEventListener("DOMContentLoaded", () => {
    // Toggle experience section
    const toggleExperience = document.getElementById("toggle-edex");
    const experience = document.getElementById("edex");
    const togglepro=document.getElementById("toggle-pro");
    const pro=document.getElementById("pro")

    if (toggleExperience && experience) {
        toggleExperience.addEventListener("click", () => {
            if (experience.style.display === "none") {
                experience.style.display = "block";
                toggleExperience.textContent = "Hide";
            } else {
                experience.style.display = "none";
                toggleExperience.textContent = "Show";
            }
        });
    }

    if(togglepro && pro){
        togglepro.addEventListener("click",() =>{
            if(pro.style.display=="none"){
                pro.style.display="block";
                togglepro.textContent="Hide";
            }
            else{
                pro.style.display="none";
                togglepro.textContent="Show";
            }
        });
    }
});
