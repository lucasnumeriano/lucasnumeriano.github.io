function addProject(linkName, name, iconTechnology, description, namePhoto,) {
    return `
        <a href="https://github.com/Elasukou/${linkName}" target="blank">
            <div class="secondarys-projects">
                    <div class="name-and-description-proj">
                        <h3 class="title-project">${name}.</h3>
                        <p class="text-project">Veja mais no meu Github</p>
                        <div class="technologyProject">
                            ${iconTechnology}
                        </div>
                    </div>
                    <img src="assets/images/${namePhoto}.svg" loading="lazy" alt="${description}" class="project-preview">
        
            </div>
        </a>
    `
}
function addTechnologies(technology) {
    return `
        <img src="assets/images/${technology}.svg" loading="lazy" alt="${technology}" class="iconTechnologyProject">
    `
}
document.querySelector("#small-base-2").innerHTML =
    addProject("alura-spa", "Alura SPA", addTechnologies("html5") + addTechnologies("css3") + addTechnologies("sass"), "Landing Page de um SPA desenvolvido com SASS.", "alura-spa-preview") +

    addProject("fruta-e-fruto", "Fruta e Fruto", addTechnologies("html5") + addTechnologies("css3") + addTechnologies("bootstrap"),"Landing page de uma página de receitas feito com bootstrap.", "fruta-e-fruto-preview") + 

    addProject("nlw-10-copa", "NLW Copa", addTechnologies("html5") + addTechnologies("css3") + addTechnologies("javascript"), "Projeto feito no evento da nlw copa promovido pela rocktseat. Este site mostra as melhores partidas que a fases de grupo da copa do mundo do Qatar 2022 poderá ter. ", "nlw-preview") +

    addProject("projeto-android", "Projeto Android", addTechnologies("html5") + addTechnologies("css3"), "Projeto feito no modulo 2 do curso de html5 e css3 do Curso em Vídeo. ", "projeto-android-preview")