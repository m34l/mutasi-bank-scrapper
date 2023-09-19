const { ScrapBCA } = require(".");

const user = '';    //ISI USERNAME BANK
const pass = '';    //ISI PASSWORD
const norek = '';   //ISI NOREK

const scraper = new ScrapBCA(user, pass, norek, {
    headless: false, // true if needed
    args: [
        '--log-level=3',
        '--no-default-browser-check',
        '--disable-infobars',
        '--disable-web-security',
        '--disable-site-isolation-trials',
    ],
    // executablePath: 'google-chrome', path google chrome(uncomment line ini jika tidak diperlukan)  tapi direkomendasikan menggunakan google chrome
});
const tglawal = "15 "; // tanggal 1
const blnawal = "9"; // bulan 4
const tglakhir = "18"; //ke tanggal 30
const blnakhir = "9 "; // bulan 4

var result = scraper.getStatement(tglawal, blnawal, tglakhir, blnakhir);
console.log(result);