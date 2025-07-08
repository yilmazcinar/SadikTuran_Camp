/**
 * Soru constructor fonksiyonu
 * @param {string} soruMetni - Sorunun metni
 * @param {object} cevapSecenekleri - Cevap seçenekleri objesi (a, b, c, d)
 * @param {string} dogruCevap - Doğru cevabın harfi
 */
function Soru(soruMetni, cevapSecenekleri, dogruCevap) {
  this.soruMetni = soruMetni;
  this.cevapSecenekleri = cevapSecenekleri;
  this.dogruCevap = dogruCevap;
}

/**
 * Verilen cevabın doğru olup olmadığını kontrol eder
 * @param {string} cevap - Kullanıcının verdiği cevap
 * @returns {boolean} - Cevap doğruysa true, yanlışsa false
 */
Soru.prototype.cevabiKontrolEt = function (cevap) {
  return cevap === this.dogruCevap;
};
