function creatCourse(linkCourse, school, logoCourse, courseName, courseDescription, validationCode) {
    return `
        <a href="https://${linkCourse}" target="_blank">
            <div class="card">
                <h5 class="school">${school}</h5>
                <div class="course">
                    <img src="assets/images/${logoCourse}.svg" class="image-course">
                    <h5 class="title-course">${courseName}</h5>
                    <p class="description-course">${courseDescription}</p>
                    <p class="validation-course">${validationCode}</p>
                </div>
            </div>
        </a>
    `
}

document.querySelector(".course-area").innerHTML =
    creatCourse("cursos.alura.com.br/certificate/afdeac5c-095b-46e9-a747-46ba5a593ef4", "Alura", "aluralogo", "JavaScript e HTML", "Desenvolva um jogo e pratique lógica de programação", "afdeac5c-095b-46e9-a747-46ba5a593ef4") +
 
    creatCourse("cursos.alura.com.br/certificate/afdeac5c-095b-46e9-a747-46ba5a593ef4", "Alura", "aluralogo", "JavaScript e HTML", "Desenvolva um jogo e pratique lógica de programação", "afdeac5c-095b-46e9-a747-46ba5a593ef4") +

    creatCourse("cursos.alura.com.br/certificate/afdeac5c-095b-46e9-a747-46ba5a593ef4", "Alura", "aluralogo", "JavaScript e HTML", "Desenvolva um jogo e pratique lógica de programação", "afdeac5c-095b-46e9-a747-46ba5a593ef4") +

    creatCourse("cursos.alura.com.br/certificate/afdeac5c-095b-46e9-a747-46ba5a593ef4", "Alura", "aluralogo", "JavaScript e HTML", "Desenvolva um jogo e pratique lógica de programação", "afdeac5c-095b-46e9-a747-46ba5a593ef4") +

    creatCourse("cursos.alura.com.br/certificate/afdeac5c-095b-46e9-a747-46ba5a593ef4", "Alura", "aluralogo", "JavaScript e HTML", "Desenvolva um jogo e pratique lógica de programação", "afdeac5c-095b-46e9-a747-46ba5a593ef4") +

    creatCourse("cursos.alura.com.br/certificate/afdeac5c-095b-46e9-a747-46ba5a593ef4", "Alura", "aluralogo", "JavaScript e HTML", "Desenvolva um jogo e pratique lógica de programação", "afdeac5c-095b-46e9-a747-46ba5a593ef4")