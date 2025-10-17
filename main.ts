import { Apprentice, EducationalLevel } from "./apprentice.js";
import { Course } from './course.js'

let courses = [
    new Course("Prácticas Esenciales para el Agilismo", 20, 90, true, 2019),
    new Course("Ingeniería de Software para la Web", 15, 99, true, 2018),
    new Course("Pruebas Automatizadas", 25, 50, false, 2020),
    new Course("Principios de Diseño y Arquitectura", 30, 75, true, 2020)
]

export const ap = new Apprentice(
    "Hector Gustavo",
    "Serrano Gutierrez",
    "avatar.png",
    30,
    EducationalLevel.MASTERDEGREE,
    courses);

console.log(ap.courses)
showApprenticeData(ap);
showStatistics(ap);
showCoursesApprentice(ap);

function showApprenticeData(apprentice: Apprentice): void {
    let apprenticeTable: HTMLElement = document.getElementById("apprentice")!;

    let tbodyApprentice = document.createElement("tbody");

    tbodyApprentice.innerHTML = `
    <tr>
        <td colspan=2>
            <img src="./${apprentice.avatar}" height="100">
        </td>
    </tr>
    <tr>
        <td>Names:</td>
        <td>${apprentice.firstNames}</td>
    </tr>
    <tr>
        <td>Last Name:</td>
        <td>${apprentice.lastNames}</td>
    </tr>
    <tr>
        <td>Educational Level:</td>
        <td>${apprentice.educationalLevel}</td>
    </tr>
    <tr>
        <td>Age:</td>
        <td>${apprentice.age}</td>
    </tr>
    `;

    apprenticeTable.appendChild(tbodyApprentice);
}

function showStatistics(apprentice: Apprentice): void {
    let statisticsTable: HTMLElement = document.getElementById("statistics")!;

    let numberCertificates: number = apprentice.getCertificesCourses();

    let trElement: HTMLElement = document.createElement("tr");
    trElement.innerHTML = `
        <td>
            <b>
                Courses Accomplished
            </b>
        </td>
        <td>
            ${numberCertificates}
        </td>
    `;

    statisticsTable.appendChild(trElement);
}

function showCoursesApprentice(apprentice: Apprentice): void {
    let coursesTable: HTMLElement = document.getElementById("courses")!;

    let coursesTBody: HTMLElement = document.createElement("tbody");

    for (let course of apprentice.courses) {
        let trElement: HTMLElement = document.createElement("tr");
        trElement.innerHTML = `
            <td>${course.name}</td>
            <td>${course.hours}</td>
            <td>${course.grade}</td>
            <td>${course.certificate}</td>
            <td>${course.year}</td>
        `;

        coursesTBody.appendChild(trElement);
    }

    coursesTable.appendChild(coursesTBody);
}