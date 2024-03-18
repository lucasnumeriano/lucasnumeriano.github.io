/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/backtop.js":
/*!************************!*\
  !*** ./src/backtop.js ***!
  \************************/
/***/ (() => {

eval("const buttonBackTop = document.querySelector('.button-back-top')\r\n\r\nwindow.addEventListener('scroll', () => {\r\n    if (scrollY > 300) {\r\n        buttonBackTop.classList.add('active')\r\n    } else {\r\n        buttonBackTop.classList.remove('active')\r\n    }\r\n})\n\n//# sourceURL=webpack://portfolio/./src/backtop.js?");

/***/ }),

/***/ "./src/certifications.js":
/*!*******************************!*\
  !*** ./src/certifications.js ***!
  \*******************************/
/***/ (() => {

eval("const buttonSeeAll = document.querySelector('.button-see-all');\r\nconst buttonSeeLess = document.querySelector('.button-see-less');\r\nconst listContainers = document.querySelectorAll('.container');\r\n\r\nconst seeAll = document.querySelector('.see-all')\r\nconst seeLess = document.querySelector('.see-less')\r\n\r\nbuttonSeeAll.addEventListener('click', () => {\r\n    listContainers.forEach(container => {\r\n        if (container.classList.contains('visible') && container.classList.contains('pop-up')) {\r\n            container.classList.add('invisible')\r\n            container.classList.remove('visible');\r\n            seeAll.classList.remove('invisible');\r\n            seeLess.classList.remove('visible');\r\n            \r\n        } else {\r\n            container.classList.remove('invisible');\r\n            container.classList.add('visible');\r\n            seeAll.classList.add('invisible');\r\n            seeLess.classList.add('visible');\r\n        }\r\n    });\r\n});\n\n//# sourceURL=webpack://portfolio/./src/certifications.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ (() => {

eval("//select button menu and mobile menu\r\nconst buttonMn = document.querySelector('.button-menu')\r\nconst mobileMn = document.querySelector('.mobile-menu')\r\nconst body = document.querySelector('#body')\r\n//select navbar for desktop\r\nconst menu = document.querySelector('#navbar')\r\n//function to activate mobile menu\r\nbuttonMn.addEventListener('click', () => {\r\n    if(mobileMn.classList.contains('open') && body.classList.contains('open')){\r\n        mobileMn.classList.remove('open')\r\n        body.classList.remove('open')\r\n    } else {\r\n        mobileMn.classList.add('open')\r\n        body.classList.add('open')\r\n    }\r\n})\r\n//function for close menu with click event\r\nfunction removeClassOpen() {\r\n    mobileMn.classList.remove('open')\r\n    body.classList.remove('open')\r\n}\r\n//function to change the color of the menu in the scrolling event \r\nwindow.addEventListener('scroll', () => {\r\n    if (scrollY > 10) {\r\n        menu.classList.add('active')\r\n    } else {\r\n        menu.classList.remove('active')\r\n    }\r\n})\n\n//# sourceURL=webpack://portfolio/./src/menu.js?");

/***/ }),

/***/ "./src/secondary-projects.js":
/*!***********************************!*\
  !*** ./src/secondary-projects.js ***!
  \***********************************/
/***/ (() => {

eval("function addProject(linkName, name, iconTechnology, description, namePhoto,) {\r\n    return `\r\n        <a href=\"https://github.com/Elasukou/${linkName}\" target=\"blank\">\r\n            <div class=\"secondarys-projects\">\r\n                    <div class=\"name-and-description-proj\">\r\n                        <h3 class=\"title-project\">${name}.</h3>\r\n                        <p class=\"text-project\">Veja mais no meu Github</p>\r\n                        <div class=\"technologyProject\">\r\n                            ${iconTechnology}\r\n                        </div>\r\n                    </div>\r\n                    <img src=\"assets/images/${namePhoto}.svg\" alt=\"${description}\" class=\"project-preview\">\r\n        \r\n            </div>\r\n        </a>\r\n    `\r\n}\r\nfunction addTechnologies(technology) {\r\n    return `\r\n        <img src=\"assets/images/${technology}.svg\" alt=\"${technology}\" class=\"iconTechnologyProject\">\r\n    `\r\n}\r\ndocument.querySelector(\"#small-base-2\").innerHTML =\r\n    addProject(\"alura-spa\", \"Alura SPA\", addTechnologies(\"html5\") + addTechnologies(\"css3\") + addTechnologies(\"sass\"), \"Landing Page de um SPA desenvolvido com SASS.\", \"alura-spa-preview\") +\r\n\r\n    addProject(\"fruta-e-fruto\", \"Fruta e Fruto\", addTechnologies(\"html5\") + addTechnologies(\"css3\") + addTechnologies(\"bootstrap\"),\"Landing page de uma página de receitas feito com bootstrap.\", \"fruta-e-fruto-preview\") + \r\n\r\n    addProject(\"nlw-10-copa\", \"NLW Copa\", addTechnologies(\"html5\") + addTechnologies(\"css3\") + addTechnologies(\"javascript\"), \"Projeto feito no evento da nlw copa promovido pela rocktseat. Este site mostra as melhores partidas que a fases de grupo da copa do mundo do Qatar 2022 poderá ter. \", \"nlw-preview\") +\r\n\r\n    addProject(\"projeto-android\", \"Projeto Android\", addTechnologies(\"html5\") + addTechnologies(\"css3\"), \"Projeto feito no modulo 2 do curso de html5 e css3 do Curso em Vídeo. \", \"projeto-android-preview\")\n\n//# sourceURL=webpack://portfolio/./src/secondary-projects.js?");

/***/ }),

/***/ "./src/star-project.js":
/*!*****************************!*\
  !*** ./src/star-project.js ***!
  \*****************************/
/***/ (() => {

eval("function addStarProject(linkName, iconName, name, iconTechnology) {\r\n    return `\r\n        <a href=\"https://github.com/Elasukou/${linkName}\" target=\"_blank\">\r\n            <div class=\"star-project\">\r\n                <div class=\"zoom\">\r\n                    <img src=\"assets/images/${iconName}.svg\" class=\"image-star-project\">\r\n                </div>\r\n                <div class=\"title-and-technology-project\">\r\n                    <h3 class=\"title-star-project\">${name}</h3>\r\n                    ${iconTechnology}\r\n                </div>\r\n            </div>\r\n        </a>\r\n    `\r\n}\r\nfunction addTechnologies(technology) {\r\n    return `\r\n        <img src=\"assets/images/${technology}.svg\" class=\"iconTechnologyProject\">\r\n    `\r\n}\r\ndocument.querySelector(\"#small-base-1\").innerHTML = \r\n    addStarProject(\"pricing-table\", \"prewie-pricing-table\", \"Desafio da tabela de preços rocketseat.\", addTechnologies(\"html5\") + addTechnologies(\"css3\") + addTechnologies(\"bootstrap\"))\r\n\n\n//# sourceURL=webpack://portfolio/./src/star-project.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_modules__["./src/backtop.js"]();
/******/ 	__webpack_modules__["./src/certifications.js"]();
/******/ 	__webpack_modules__["./src/menu.js"]();
/******/ 	__webpack_modules__["./src/secondary-projects.js"]();
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/star-project.js"]();
/******/ 	
/******/ })()
;