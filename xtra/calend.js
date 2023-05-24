window.onload = function () {

	const aData = [
	];

	const aYear = new Date().getFullYear();
	const calend = document.querySelector('#calend');
	const headMonBtns = document.querySelectorAll('.btn-mon');

	headMonBtns.forEach(b => b.addEventListener('click', function () {
		calend.innerHTML = '';
		CalendRebuild(this.id.substr(3));
	}));

	CalendRebuild(new Date().getMonth());

	function CalendRebuild(MONTH) {
		const monFirstDay = new Date(aYear, MONTH, 1);
		const monLastDay = new Date(aYear, parseInt(MONTH) + 1, 0).getDate();
		const weekDay = monFirstDay.getDay() - 1;
		let aToday = new Date(2023, MONTH, 1);
		let daysCounter = 1;
		let isNextMonth = false;
		let isRealMonth = true;
		let monCurrDay = 1;

		if (parseInt(MONTH) === new Date().getMonth()) {
			aToday = new Date();
			monCurrDay = aToday.getDate()
		} else {
			isRealMonth = false;
		}

		headMonBtns.forEach(function (b) {
			b.classList.remove('btn-primary');
			b.classList.add('btn-light');
		});
		let monBtnCurrent = document.querySelector('#mon' + MONTH);
		monBtnCurrent.classList.remove('btn-light');
		monBtnCurrent.classList.add('btn-primary');

		for (let r = 0; r < 6; r++) {
			let row = document.createElement('div');
			row.classList.add('row');
			row.classList.add('calendar-week');
			calend.append(row);
			for (let col = 0; col < 7; col++) {
				let cell = document.createElement('div');
				cell.classList.add('col-xs-1');
				cell.classList.add('grid-cell');
				let colSub = document.createElement('div');
				let colSub2 = document.createElement('div');
				let colSub3t = document.createElement('span');
				let colSub3d = document.createElement('span');

				if (daysCounter > monLastDay) {
					isNextMonth = true;
					daysCounter = 1;
				}

				if (isRealMonth && !isNextMonth && daysCounter == monCurrDay) { cell.classList.add('today'); }

				if (col > 4) { cell.classList.add('holyday') }

				if (r === 0 && col < weekDay) {
					cell.classList.add('prev-month');
				}
				else {
					let monHumanNumber = isNextMonth ? parseInt(MONTH) + 2 : parseInt(MONTH) + 1;
					// TODO:
					// Add importance marks for Celebrations...
					let notes = '<ul>';
					aData.filter(x =>
						(x.d === daysCounter && x.m === 0) ||
						(x.d === daysCounter && x.m === monHumanNumber)).forEach(element => {
							notes +=
								'<li' + (element.n.endsWith('BD.') ? ' class="BDay" ' : '') + '>' +
								element.n + '</li>';
						});
					notes += '</ul>';
					colSub3t.classList.add('dateText');
					colSub3d.classList.add('calDate');
					colSub3t.innerHTML = notes;
					colSub3d.textContent = daysCounter;
					daysCounter += 1;
					if (isNextMonth)
						cell.classList.add('next-month');
				}
				colSub2.append(colSub3d);
				colSub2.append(colSub3t);
				colSub.append(colSub2);
				cell.append(colSub);
				row.append(cell);
			}
		}
	};
}