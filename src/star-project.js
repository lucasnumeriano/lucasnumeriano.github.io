function addStarProject(linkName, iconName, name, iconTechnology) {
    return `
        <a href="https://github.com/Elasukou/${linkName}" target="_blank">
            <div class="star-project">
                <div class="zoom">
                    <img src="assets/images/${iconName}.svg" loading="lazy" alt="Preview do projeto" class="image-star-project">
                </div>
                <div class="title-and-technology-project">
                    <h3 class="title-star-project">${name}</h3>
                    ${iconTechnology}
                </div>
            </div>
        </a>
    `
}
function addTechnologies(technology) {
    return `
        <img src="assets/images/${technology}.svg" loading="lazy" alt="logo do ${technology}" class="iconTechnologyProject">
    `
}
document.querySelector("#small-base-1").innerHTML = 
    addStarProject("pricing-table", "prewie-pricing-table", "Desafio da tabela de preços rocketseat.", addTechnologies("html5") + addTechnologies("css3") + addTechnologies("bootstrap"))
