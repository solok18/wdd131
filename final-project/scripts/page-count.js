function countVisits() {
    const pageCount = document.getElementById('pageCount');
    let visits = localStorage.getItem('visits');

    visits = visits ? parseInt(visits) + 1 : 1;

    pageCount.textContent = `you have visited the page ${visits} time${visits !==1 ? 's' : ''}.`;

    localStorage.setItem('visits', visits);
}

document.addEventListener('DOMContentLoaded', countVisits);