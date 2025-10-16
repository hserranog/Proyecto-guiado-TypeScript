import { Apprentice, EducationalLevel } from "./apprentice.js";

export const ap = new Apprentice(
    "Hector Gustavo",
    "Serrano Gutierrez",
    "avatar.png",
    30,
    EducationalLevel.MASTERDEGREE);

showApprenticeData(ap);

function showApprenticeData(apprentice: Apprentice) {
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
    `

    apprenticeTable.appendChild(tbodyApprentice);
}

