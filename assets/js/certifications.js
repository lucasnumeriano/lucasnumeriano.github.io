function addCourse(logoCourse, linkCourse, courseName, courseDescription, validationCode) {
    return `
        <div class="course">
            <img src="assets/images/${logoCourse}.svg" class="image-course">
            <div class="title-and-description-course">
                <a href="https://${linkCourse}" target="_blank" class="title-course">${courseName}</a>
                <p class="description-course">${courseDescription}</p>
                <p class="validation-course">${validationCode}</p>
            </div>
        </div>
    `
}

document.querySelector("#certifications").innerHTML +=
    addCourse("aluralogo", "cursos.alura.com.br/certificate/afdeac5c-095b-46e9-a747-46ba5a593ef4", "JavaScript e HTML", "desenvolva um jogo e pratique lógica de programação", "afdeac5c-095b-46e9-a747-46ba5a593ef4") +
 
    addCourse("aluralogo", "cursos.alura.com.br/certificate/afdeac5c-095b-46e9-a747-46ba5a593ef4", "JavaScript e HTML", "desenvolva um jogo e pratique lógica de programação", "afdeac5c-095b-46e9-a747-46ba5a593ef4") +

    addCourse("aluralogo", "cursos.alura.com.br/certificate/afdeac5c-095b-46e9-a747-46ba5a593ef4", "JavaScript e HTML", "desenvolva um jogo e pratique lógica de programação", "afdeac5c-095b-46e9-a747-46ba5a593ef4") +

    addCourse("aluralogo", "cursos.alura.com.br/certificate/afdeac5c-095b-46e9-a747-46ba5a593ef4", "JavaScript e HTML", "desenvolva um jogo e pratique lógica de programação", "afdeac5c-095b-46e9-a747-46ba5a593ef4") +

    addCourse("aluralogo", "cursos.alura.com.br/certificate/afdeac5c-095b-46e9-a747-46ba5a593ef4", "JavaScript e HTML", "desenvolva um jogo e pratique lógica de programação", "afdeac5c-095b-46e9-a747-46ba5a593ef4") +

    addCourse("aluralogo", "cursos.alura.com.br/certificate/afdeac5c-095b-46e9-a747-46ba5a593ef4", "JavaScript e HTML", "desenvolva um jogo e pratique lógica de programação", "afdeac5c-095b-46e9-a747-46ba5a593ef4") + 

    addCourse("aluralogo", "cursos.alura.com.br/certificate/afdeac5c-095b-46e9-a747-46ba5a593ef4", "JavaScript e HTML", "desenvolva um jogo e pratique lógica de programação", "afdeac5c-095b-46e9-a747-46ba5a593ef4") +

    addCourse("aluralogo", "cursos.alura.com.br/certificate/afdeac5c-095b-46e9-a747-46ba5a593ef4", "JavaScript e HTML", "desenvolva um jogo e pratique lógica de programação", "afdeac5c-095b-46e9-a747-46ba5a593ef4") +

    addCourse("aluralogo", "cursos.alura.com.br/certificate/afdeac5c-095b-46e9-a747-46ba5a593ef4", "JavaScript e HTML", "desenvolva um jogo e pratique lógica de programação", "afdeac5c-095b-46e9-a747-46ba5a593ef4")