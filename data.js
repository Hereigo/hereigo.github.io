const aData = [
	// ----- yearly --------------------------
	{ m: 01, d: 06, c: "a", n: "Vodohrescha" },
	{ m: 01, d: 07, c: "a", n: "Programmer's Day" },
	{ m: 01, d: 22, c: "a", n: "SobornostiDay" },
	{ m: 01, d: 24, c: "a", n: "Svyatny" },
	{ m: 01, d: 25, c: "a", n: "Tatyana's Day" },
	{ m: 01, d: 30, c: "a", n: "Kostromin" },
	{ m: 02, d: 14, c: "b", n: "Valentine`s day." },
	{ m: 03, d: 01, c: "a", n: "Chg-HLT 2 MailOnly" },
	{ m: 03, d: 01, c: "a", n: "ML-13.03" },
	{ m: 03, d: 07, c: "b", n: "Kris" },
	{ m: 03, d: 08, c: "b", n: "Girls Day." },
	{ m: 03, d: 11, c: "b", n: "Den4i" },
	{ m: 03, d: 20, c: "b", n: "ECP (02.04)" },
	{ m: 03, d: 25, c: "b", n: "Vlad's" },
	{ m: 05, d: 01, c: "b", n: "LX SomeHol." },
	{ m: 05, d: 06, c: "b", n: "LX SomeHol." },
	{ m: 05, d: 08, c: "b", n: "LX SomeHol." },
	{ m: 05, d: 15, c: "a", n: "Subota" },
	{ m: 05, d: 18, c: "b", n: "Irin Day" },
	{ m: 05, d: 25, c: "a", n: "Danyluk Jash" },
	{ m: 06, d: 04, c: "a", n: "Miroshnik" },
	{ m: 06, d: 09, c: "a", n: "oxSon memory..." },
	{ m: 06, d: 13, c: "b", n: "2Geza-99" },
	{ m: 06, d: 24, c: "b", n: "Koo" },
	{ m: 06, d: 24, c: "b", n: "LX SomeHol." },
	{ m: 07, d: 13, c: "a", n: "Barnoff" },
	{ m: 07, d: 14, c: "b", n: "Panchen" },
	{ m: 07, d: 15, c: "b", n: "LX SomeHol." },
	{ m: 07, d: 15, c: "b", n: "Lazareva" },
	{ m: 07, d: 25, c: "b", n: "Tax Declar" },
	{ m: 07, d: 26, c: "a", n: "SysAdm Day (Last Frid)" },
	{ m: 07, d: 30, c: "b", n: "* ARISHA Wed *" },
	{ m: 08, d: 03, c: "a", n: "Petrovska LX" },
	{ m: 08, d: 13, c: "b", n: "* ARISHA *" },
	{ m: 08, d: 17, c: "b", n: "Mom's" },
	{ m: 08, d: 26, c: "b", n: "LX SomeHol." },
	{ m: 09, d: 07, c: "b", n: "Alla" },
	{ m: 09, d: 16, c: "a", n: "LX - !!! - (2019)" },
	{ m: 09, d: 28, c: "b", n: "Dzuban" },
	{ m: 10, d: 04, c: "b", n: "Koval-x2" },
	{ m: 10, d: 14, c: "a", n: "Draganchuk" },
	{ m: 10, d: 30, c: "a", n: "Kelvich" },
	{ m: 11, d: 10, c: "b", n: "Cherednich" },
	{ m: 11, d: 16, c: "a", n: "JMerilo" },
	{ m: 11, d: 17, c: "a", n: "KovalVM" },
	{ m: 11, d: 30, c: "a", n: "Davyd" },
	{ m: 12, d: 06, c: "b", n: "St.Mykola" },
	{ m: 12, d: 10, c: "b", n: "Ula's" },
	{ m: 12, d: 16, c: "a", n: "Vynnyk" },
	{ m: 12, d: 24, c: "a", n: "Sviat Vechir" },
	{ m: 12, d: 25, c: "b", n: "✴ Rizdvo ❄" },
	{ m: 12, d: 28, c: "b", n: "[0525] Filters??" },
	// ----- monthly ---------------------------
	{ m: 00, d: 01, c: "a", n: "MONY." },
	{ m: 00, d: 12, c: "a", n: "170 Voda" },
	{ m: 00, d: 12, c: "a", n: "300 Laner" },
	{ m: 00, d: 13, c: "a", n: "Flat Bills." },
	{ m: 00, d: 14, c: "a", n: "200 KS" },
	{ m: 00, d: 23, c: "a", n: "300 Dominiq" },
	{ m: 00, d: 28, c: "a", n: "160 iLanos" },
	{ m: 00, d: 28, c: "a", n: "Counters (Den.Kris)" },
	// -------------------------------------------
	// ----- VARIABLES ---------------------------
	// -------------------------------------------
	// ----- Last Month Friday -------------------
	{ m: 03, d: 22, c: "b", n: "11:00 LX Nata sync" },
	{ m: 04, d: 19, c: "b", n: "11:00 LX Nata sync" },
	// ----- 4weekly -----------------------------
	{ m: 03, d: 04, c: "a", n: "225 (-70) (4w) Chck 4G GB" },
	{ m: 03, d: 06, c: "a", n: "150 (4w) U-KS" },
	{ m: 03, d: 11, c: "a", n: "190 (4w) Life-M" },
	// ----- only once ---------------------------
	{ m: 02, d: 13, c: "b", n: "PERF.REVIEW" },
	{ m: 10, d: 25, c: "a", n: "17:00 AI Beetroot" },
	{ m: 10, d: 26, c: "a", n: "18:00 Yo Brain Beetroot" },
	{ m: 10, d: 31, c: "a", n: "16:00 CyberSec Base" },
];