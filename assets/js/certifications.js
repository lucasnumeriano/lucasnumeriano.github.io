function creatCourse(linkCourse, logoCourse, courseName, school, verificationDate,validationCode) {
    return `
        <a href="https://${linkCourse}" target="_blank" class="slide-content">
            <div class="card">
                <div class="course">
                    <img src="assets/images/${logoCourse}.svg" class="image-course">
                    <div class="specifications">
                        <h5 class="title-course">${courseName}.</h5>
                        <p class="school">${school}</p>
                        <p class="course-specifications date">Verificação emitida em: ${verificationDate}</p>
                        <p class="course-specifications code">Código credencial ${validationCode}</p>
                    </div>
                </div>
            </div>
        </a>
    `
}
document.querySelector(".course-area").innerHTML =
    creatCourse("cursos.alura.com.br/certificate/afdeac5c-095b-46e9-a747-46ba5a593ef4", "aluralogo", "JavaScript e HTML: Desenvolva um jogo e pratique lógica de programação", "Alura", "mai de 2023", "afdeac5c-095b-46e9-a747-46ba5a593ef4") +
 
    creatCourse("cursos.alura.com.br/certificate/fd99eb32-47ee-4693-86a8-0b4caa2e8fb7", "aluralogo", "JavaScript para Web: Crie páginas dinâmicas", "Alura", "mai de 2023", "fd99eb32-47ee-4693-86a8-0b4caa2e8fb7") +

    creatCourse("cursos.alura.com.br/certificate/4a8b584d-26a1-4af9-a2df-52e11905418a", "aluralogo", "SASS: CSS sintaticamente espetacular", "Alura", "mai de 2023","4a8b584d-26a1-4af9-a2df-52e11905418a") +

    creatCourse("cursos.alura.com.br/certificate/4a8b584d-26a1-4af9-a2df-52e11905418a", "aluralogo", "SASS: CSS sintaticamente espetacular", "Alura", "mai de 2023","4a8b584d-26a1-4af9-a2df-52e11905418a") +

    creatCourse("cursos.alura.com.br/certificate/4a8b584d-26a1-4af9-a2df-52e11905418a", "aluralogo", "SASS: CSS sintaticamente espetacular", "Alura", "mai de 2023","4a8b584d-26a1-4af9-a2df-52e11905418a") +

    creatCourse("cursos.alura.com.br/certificate/4a8b584d-26a1-4af9-a2df-52e11905418a", "aluralogo", "SASS: CSS sintaticamente espetacular", "Alura", "mai de 2023","4a8b584d-26a1-4af9-a2df-52e11905418a") +

    creatCourse("cursos.alura.com.br/certificate/4a8b584d-26a1-4af9-a2df-52e11905418a", "aluralogo", "SASS: CSS sintaticamente espetacular", "Alura", "mai de 2023","4a8b584d-26a1-4af9-a2df-52e11905418a")