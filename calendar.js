const _YEAR = new Date().getFullYear();
const _MONTH = new Date().getMonth();
let _TODAY = new Date().getDate();
let _WEEKDAY = new Date().getDay();
const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

document.addEventListener("DOMContentLoaded", (event) => {

    reBuildCalendar(_MONTH);

    let monthPrev = _MONTH - 1;
    let monthNext = _MONTH + 1;

    const toCurrMon = document.querySelector('#toCurrMon');
    const toNextMon = document.querySelector('#toNextMon');
    const toPrevMon = document.querySelector('#toPrevMon');

    toCurrMon.textContent = months[_MONTH];
    toNextMon.textContent = months[monthNext];
    toPrevMon.textContent = months[monthPrev];

    toCurrMon.classList.add('monBtnSelected');

    toPrevMon.addEventListener('click', function () {
        reBuildCalendar(monthPrev);
        toCurrMon.classList.remove('monBtnSelected');
        toNextMon.classList.remove('monBtnSelected');
        toPrevMon.classList.add('monBtnSelected');
    });
    toNextMon.addEventListener('click', function () {
        reBuildCalendar(monthNext);
        toCurrMon.classList.remove('monBtnSelected');
        toNextMon.classList.add('monBtnSelected');
        toPrevMon.classList.remove('monBtnSelected');
    });
    toCurrMon.addEventListener('click', function () {
        reBuildCalendar(_MONTH);
        toCurrMon.classList.add('monBtnSelected');
        toNextMon.classList.remove('monBtnSelected');
        toPrevMon.classList.remove('monBtnSelected');
    });
});


// TODO:
// 1. Prevent Duplications!
// 2. Sort by Time inside a Day.


function reBuildCalendar(MonthToCalc) {

    let monFirstDay = new Date(_YEAR, MonthToCalc, 1);
    let monLastDay = new Date(_YEAR, parseInt(MonthToCalc) + 1, 0).getDate();
    let monStartWeekDay = monFirstDay.getDay();
    let ci = 0;
    let hi = 0;
    let monthDay = 1;
    let nextMonth = false;
    let calHeadCells = document.querySelectorAll('table thead th');

    calHeadCells.forEach(function (c) {
        hi++
        if (!nextMonth && hi == _WEEKDAY && MonthToCalc == _MONTH) {
            c.classList.add('aToday');
        } else {
            c.classList.remove('aToday');
        }
    });

    let cells = document.querySelectorAll('table tr td');

    cells.forEach(function (cell) {
        cell.innerHTML = '';
        ci++;

        if (MonthToCalc != _MONTH) {
            cell.classList.remove('aToday');
        }

        if (ci >= monStartWeekDay) {

            if (!nextMonth && monthDay == _TODAY && MonthToCalc == _MONTH) {
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
            let monHumanNumber = nextMonth ? parseInt(MonthToCalc) + 2 : parseInt(MonthToCalc) + 1;

            aData.filter(x =>
                (x.d === monthDay && x.m === 0) ||
                (x.d === monthDay && x.m === monHumanNumber)).forEach(element => {
                    list +=
                        '<li' + (element.c === 'b' ? ' class="bday" ' : '') + '>' +
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