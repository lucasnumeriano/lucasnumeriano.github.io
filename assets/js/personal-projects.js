function createProject(nameLink, name, description, namePhoto,) {
    return `
        <div class="secondarys-projects">
            <div class="name-and-description-proj">
                <a href="https://github.com/Elasukou/${nameLink}" target="_blank" class="link-project">${name}.</a>
                
            </div>
            <img src="assets/images/${namePhoto}.svg" alt="${description}" class="project-preview">
        </div>
    `
}
//<p class="project-description">${description}</p>

document.querySelector(".small-base").innerHTML =
    createProject("alura-spa", "Alura SPA", "Landing Page de um SPA desenvolvido com SASS.", "alura-spa-preview") +

    createProject("fruta-e-fruto", "Fruta e Fruto", "Landing page de uma página de receitas feito com bootstrap.", "fruta-e-fruto-preview") + 

    createProject("culturama", "Culturama", "Projeto realizado na alura para praticar layouts grid e flexbox.", "culturama-preview")    