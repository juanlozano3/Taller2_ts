import { Serie } from './Serie.js';
import { series } from './data.js';

let seriesTable: HTMLTableElement = document.getElementById("series") as HTMLTableElement;
let promedioElemento: HTMLElement = document.getElementById("promedio")!;
const card = document.getElementById("cardS") as HTMLDivElement;

mostrarSeries(series);
mostrarPromedio(series);

function mostrarSeries(series: Serie[]): void {
    let seriesTbody: HTMLTableSectionElement = seriesTable.getElementsByTagName('tbody')[0] || seriesTable.createTBody();
    seriesTbody.innerHTML = ''; // Limpiar el cuerpo de la tabla antes de agregar nuevas filas

    series.forEach((serie) => {
        let trElement: HTMLTableRowElement = seriesTbody.insertRow();
        trElement.innerHTML = `
            <td>${serie.id}</td>
            <td><a href="#" class="titulo-pelicula" data-more="${serie.url}" data-imagen="${serie.img}" data-descripcion="${serie.descripcion}">${serie.titulo}</a></td>
            <td>${serie.plataforma}</td>
            <td>${serie.temporadas}</td>`;
    });

    seriesTbody.addEventListener('click', (event) => {
        const target = event.target as HTMLAnchorElement;
        if (target && target.classList.contains('titulo-pelicula')) {
            mostrarDetalles(target);
        }
    });
}

function promedio(series: Serie[]): number {
    return series.reduce((sum, serie) => sum + serie.temporadas, 0) / series.length;
}

function mostrarPromedio(series: Serie[]): void {
    let prom: number = promedio(series);
    promedioElemento.textContent = `Promedio por temporada: ${prom.toFixed(2)}`;
}

function mostrarDetalles(titulo: HTMLAnchorElement): void {
    const imagen = titulo.getAttribute("data-imagen")!;
    const descripcion = titulo.getAttribute("data-descripcion")!;
    const url = titulo.getAttribute("data-more")!;

    const cardImg = card.querySelector(".card-img-top") as HTMLImageElement;
    const cardTitle = card.querySelector(".card-title") as HTMLHeadingElement;
    const cardText = card.querySelector(".card-text") as HTMLParagraphElement;
    const cardMore = card.querySelector(".more") as HTMLAnchorElement;

    cardImg.src = imagen;
    cardTitle.textContent = titulo.textContent!;
    cardText.textContent = descripcion;
    cardMore.href = url;

    card.style.display = "block";
}
