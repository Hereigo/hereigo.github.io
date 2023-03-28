window.onload = function () {

	const aData = [
		{ m: 00, d: 01, b: 000, c: "x", n: "MONY." },
		{ m: 00, d: 01, b: 000, c: "x", n: "Fastiv Mon+Count." },
		{ m: 00, d: 10, b: 000, c: "x", n: "Counters." },
		{ m: 00, d: 10, b: 200, c: "x", n: "200 KS" },
		{ m: 00, d: 12, b: 160, c: "x", n: "160 (28) Life-M" },
		{ m: 00, d: 13, b: 170, c: "x", n: "170 Voda" },
		{ m: 00, d: 14, b: 299, c: "x", n: "299 Laner" },
		{ m: 00, d: 15, b: 999, c: "x", n: "Flat Bills." },
		{ m: 00, d: 18, b: 888, c: "x", n: "8k-Mon-Delon" },
		{ m: 00, d: 20, b: 155, c: "x", n: "155 KSU +28" },
		{ m: 00, d: 23, b: 280, c: "x", n: "280 Dominiq." },
		{ m: 00, d: 23, b: 300, c: "x", n: "300 Troylana" },
		{ m: 00, d: 28, b: 165, c: "x", n: "160 iLanos" },
		{ m: 00, d: 30, b: 000, c: "x", n: "Ask Mo 4 Counts" },
		{ m: 01, d: 24, b: 000, c: "b", n: "Svyatna" },
		{ m: 01, d: 30, b: 000, c: "b", n: "Kostromin" },
		{ m: 02, d: 14, b: 000, c: "x", n: "Valentine`s day." },
		{ m: 03, d: 01, b: 000, c: "x", n: "Chg-HLT-2-MailOnly" },
		{ m: 03, d: 01, b: 303, c: "x", n: "ML-13.03" },
		{ m: 03, d: 07, b: 000, c: "b", n: "Kris BD." },
		{ m: 03, d: 08, b: 000, c: "x", n: "Girls Day." },
		{ m: 03, d: 11, b: 000, c: "b", n: "Den4i BD." },
		{ m: 03, d: 25, b: 000, c: "b", n: "Vlad's BD." },
		{ m: 04, d: 01, b: 000, c: "b", n: "PY Tomorrow End!" },
		{ m: 05, d: 15, b: 000, c: "b", n: "Subota" },
		{ m: 05, d: 25, b: 000, c: "b", n: "Danyluk" },
		{ m: 06, d: 04, b: 000, c: "b", n: "Myroshnyk" },
		{ m: 06, d: 24, b: 000, c: "b", n: "Koo" },
		{ m: 07, d: 13, b: 000, c: "b", n: "Barno" },
		{ m: 07, d: 14, b: 000, c: "b", n: "Panchen" },
		{ m: 07, d: 15, b: 000, c: "b", n: "Lazareva BD." },
		{ m: 08, d: 13, b: 000, c: "b", n: "Ira's BD." },
		{ m: 08, d: 17, b: 000, c: "b", n: "Mom's BD." },
		{ m: 09, d: 07, b: 000, c: "b", n: "Alla BD." },
		{ m: 10, d: 04, b: 000, c: "b", n: "Koval-x2 BD." },
		{ m: 10, d: 14, b: 000, c: "b", n: "Draganchuk" },
		{ m: 10, d: 28, b: 000, c: "b", n: "Dzuba" },
		{ m: 10, d: 30, b: 000, c: "b", n: "Kelvich" },
		{ m: 11, d: 30, b: 000, c: "b", n: "Davyd BD." },
		{ m: 12, d: 10, b: 000, c: "b", n: "Ula's BD." },
		{ m: 04, d: 11, b: 000, c: "b", n: "ECP_!!! BD." },
		{ m: 04, d: 03, b: 000, c: "b", n: "11 !!! ECP BD." },
		{ m: 04, d: 01, b: 000, c: "b", n: "11 !!! ECP BD." },
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