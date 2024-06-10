const aData = [
	// ----- yearly --------------------------
	{ m: "01", d: "06", c: "a", n: "Vodohrescha" },
	{ m: "01", d: "07", c: "a", n: "Programmer's Day" },
	{ m: "01", d: "22", c: "a", n: "SobornostiDay" },
	{ m: "01", d: "24", c: "a", n: "Svyatny" },
	{ m: "01", d: "25", c: "a", n: "Tatyana's Day" },
	{ m: "01", d: "30", c: "a", n: "Kostromin" },
	{ m: "02", d: "14", c: "b", n: "Valentine`s day." },
	{ m: "03", d: "01", c: "a", n: "ML-13.03" },
	{ m: "03", d: "06", c: "b", n: "ML-13.03" },
	{ m: "03", d: "07", c: "b", n: "Kris" },
	{ m: "03", d: "08", c: "b", n: "Girls Day." },
	{ m: "03", d: "11", c: "b", n: "Den4i" },
	{ m: "03", d: "12", c: "b", n: "LX Mykolaichuk" },
	{ m: "03", d: "12", c: "b", n: "ML-13.03 !!!" },
	{ m: "03", d: "20", c: "a", n: "ECP (28.03)" },
	{ m: "03", d: "22", c: "a", n: "ECP (28.03) !!!" },
	{ m: "03", d: "24", c: "b", n: "ECP (28.03) !!!" },
	{ m: "03", d: "25", c: "b", n: "Vlad's" },
	{ m: "03", d: "26", c: "b", n: "ECP (28.03) !!!" },
	{ m: "05", d: "15", c: "a", n: "Subota" },
	{ m: "05", d: "18", c: "b", n: "Irin Day" },
	{ m: "05", d: "25", c: "a", n: "Danyluk Jash" },
	{ m: "06", d: "04", c: "a", n: "Miroshnik" },
	{ m: "06", d: "09", c: "a", n: "oxSon memory..." },
	{ m: "06", d: "13", c: "b", n: "2Geza-99" },
	{ m: "06", d: "24", c: "a", n: "LX SomeHol." },
	{ m: "06", d: "24", c: "b", n: "Koo" },
	{ m: "07", d: "13", c: "a", n: "Barnoff" },
	{ m: "07", d: "14", c: "a", n: "Panchen" },
	{ m: "07", d: "15", c: "a", n: "LX SomeHol." },
	{ m: "07", d: "15", c: "a", n: "Lazareva" },
	{ m: "07", d: "25", c: "a", n: "Tax Declar" },
	{ m: "07", d: "26", c: "a", n: "SysAdm Day (Last Frid)" },
	{ m: "07", d: "30", c: "b", n: "* ARISHA Wed *" },
	{ m: "08", d: "03", c: "a", n: "Petrovska LX" },
	{ m: "08", d: "13", c: "b", n: "* ARISHA *" },
	{ m: "08", d: "17", c: "b", n: "Mom's" },
	{ m: "08", d: "26", c: "a", n: "LX SomeHol." },
	{ m: "09", d: "07", c: "b", n: "Alla" },
	{ m: "09", d: "16", c: "a", n: "LX - !!! - (2019)" },
	{ m: "09", d: "28", c: "a", n: "Dzuban" },
	{ m: "10", d: "04", c: "a", n: "Koval-x2" },
	{ m: "10", d: "04", c: "b", n: "[0570] Filters???" },
	{ m: "10", d: "14", c: "a", n: "Draganchuk" },
	{ m: "10", d: "30", c: "a", n: "Kelvich" },
	{ m: "11", d: "10", c: "b", n: "Cherednich" },
	{ m: "11", d: "16", c: "a", n: "JMerilo" },
	{ m: "11", d: "17", c: "a", n: "KovalVM" },
	{ m: "11", d: "30", c: "a", n: "Davyd" },
	{ m: "12", d: "06", c: "b", n: "St.Mykola" },
	{ m: "12", d: "10", c: "b", n: "Ula's" },
	{ m: "12", d: "16", c: "a", n: "Vynnyk" },
	{ m: "12", d: "24", c: "a", n: "Sviat Vechir" },
	{ m: "12", d: "25", c: "a", n: "✴ Rizdvo ❄" },
	// ----- monthly ---------------------------
	{ m: "00", d: "01", c: "a", n: "MONY." },
	{ m: "00", d: "12", c: "a", n: "200 Voda" },
	{ m: "00", d: "13", c: "a", n: "Flat Bills." },
	{ m: "00", d: "14", c: "a", n: "200 KS" },
	{ m: "00", d: "23", c: "a", n: "300 Dominiq" },
	{ m: "00", d: "28", c: "a", n: "Counters (Den.Kris)" },
	{ m: "00", d: "29", c: "a", n: "125 Home Voda" },
	// -------------------------------------------
	// ----- VARIABLES ---------------------------
	// -------------------------------------------
	// ------Second Sunday of May ----------------
	{ m: "05", d: "11", c: "b", n: "Mom's day (2025)" },
	// ----- Last Month Friday -------------------
	{ m: "05", d: "24", c: "a", n: "11:00 LX Nata sync ??" },
	// ----- 4weekly -----------------------------
	{ m: "06", d: "22", c: "a", n: "225 (4w) Chck 4G GB" },
	{ m: "07", d: "04", c: "a", n: "190 (4w) Life-M" },
	{ m: "07", d: "04", c: "a", n: "200 (4w) U-KS" },
	// ----- only once ---------------------------
	{ m: "02", d: "13", c: "a", n: "PERF. REVIEW" },
	{ m: "06", d: "04", c: "a", n: "14:00 ENG" },
	{ m: "06", d: "06", c: "a", n: "14:00 ENG" },
	{ m: "06", d: "06", c: "b", n: "OSMOS inst." },
	{ m: "06", d: "11", c: "a", n: "14:00 ENG" },
	{ m: "06", d: "13", c: "a", n: "14:00 ENG" },
	{ m: "06", d: "18", c: "a", n: "14:00 ENG" },
	{ m: "06", d: "20", c: "a", n: "14:00 ENG" },
	{ m: "06", d: "21", c: "a", n: "14:00 TEST-TEST" },
	{ m: "06", d: "21", c: "a", n: "14:00 bla bla bla bla ..." },
	{ m: "06", d: "21", c: "a", n: "14:00 bla bla bla bla ..." },
	{ m: "06", d: "21", c: "a", n: "14:00 bla bla bla bla ..." },
	{ m: "06", d: "21", c: "a", n: "14:00 bla bla bla bla ..." },
	{ m: "06", d: "25", c: "a", n: "14:00 ENG" },
	{ m: "06", d: "27", c: "a", n: "14:00 ENG" },
	{ m: "08", d: "15", c: "a", n: "36.K" },
	{ m: "09", d: "06", c: "b", n: "OSMOS inst. (3mon)" },
];