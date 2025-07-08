/**
 * Quiz constructor fonksiyonu
 * @param {Array} sorular - Soru objelerinin bulunduğu array
 */
function Quiz(sorular) {
  this.sorular = sorular;
  this.soruIndex = 0; // Şu anki soru indexi
  this.dogruCevapSayisi = 0; // Doğru cevap sayısı
}

/**
 * Mevcut soru indexindeki soruyu getirir
 * @returns {Object} - Soru objesi
 */
Quiz.prototype.soruGetir = function () {
  return this.sorular[this.soruIndex];
};
