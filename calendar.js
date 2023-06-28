const _YEAR = new Date().getFullYear();
const _MONTH = new Date().getMonth();
const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

document.addEventListener("DOMContentLoaded", (event) => {

    reBuildCalendar(_MONTH, _YEAR);

    let prevMon = _MONTH - 1;
    let nextMon = _MONTH + 1;

    const toNextMon = document.querySelector('#toNextMon');
    const toPrevMon = document.querySelector('#toPrevMon');
    const toCurrMon = document.querySelector('#toCurrMon');

    toPrevMon.textContent = '0' + (prevMon + 1) + ' <';
    toNextMon.textContent = '0' + (nextMon + 1) + ' >';
    toCurrMon.textContent = '0' + (_MONTH + 1) + ' # ';

    toPrevMon.addEventListener('click', function () {
        reBuildCalendar(prevMon, _YEAR);
    });
    toNextMon.addEventListener('click', function () {
        reBuildCalendar(nextMon, _YEAR);
    });
    toCurrMon.addEventListener('click', function () {
        reBuildCalendar(_MONTH, _YEAR);
    });
});


// TODO:
// 1. Prevent Duplications!
// 2. Sort by Time inside a Day.


function reBuildCalendar(MONTH, YEAR) {

    let aToday = new Date().getDate();
    let monFirstDay = new Date(YEAR, MONTH, 1);
    let monLastDay = new Date(YEAR, parseInt(MONTH) + 1, 0).getDate();
    let monStartWeekDay = monFirstDay.getDay();

    let ci = 0;
    let hi = 0;
    let monthDay = 1;
    let nextMonth = false;
    let calHeadCells = document.querySelectorAll('table thead th');
    let cells = document.querySelectorAll('table tr td');

    calHeadCells.forEach(function (c) {
        hi++
        if (hi == new Date().getDay()) {
            c.classList.add('aToday');
        } else {
            c.classList.remove('aToday');
        }
    });

    cells.forEach(function (cell) {
        cell.innerHTML = '';
        ci++;

        if (ci >= monStartWeekDay) {

            if (monthDay == aToday && _MONTH == MONTH) {
                cell.classList.add('aToday');
            } else {
                cell.classList.remove('aToday');
            }

            if (!nextMonth && monthDay > monLastDay) {
                nextMonth = true;
                monthDay = 1;
            }

            if (nextMonth) {
                cell.classList.add('nextMon');
            } else {
                cell.classList.remove('nextMon');
            }

            let list = '';
            let monHumanNumber = nextMonth ? parseInt(MONTH) + 2 : parseInt(MONTH) + 1;

            aData.filter(x =>
                (x.d === monthDay && x.m === 0) ||
                (x.d === monthDay && x.m === monHumanNumber)).forEach(element => {
                    list +=
                        '<li' + (element.n.endsWith(' BD') ? ' class="BDay" ' : '') + '>' +
                        element.n + '</li>';
                });

            cell.innerHTML = '<div class="number">' + monthDay + '</div>' +
                '<div class="event">' + '<ul>' + list + '</ul>' + '</div>';

            monthDay++;
        }
        else {
            cell.classList.add('nextMon');
        }
    });
}