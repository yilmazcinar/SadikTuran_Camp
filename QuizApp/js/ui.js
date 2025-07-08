/**
 * UI constructor fonksiyonu - DOM elementlerini seçer ve icon'ları tanımlar
 */
function UI() {
  // DOM elementlerini seç
  this.quiz_box = document.querySelector("#quiz-box");
  this.body = document.querySelector("#quiz-box #body");
  this.correctIcon = '<i class = "bi bi-check-circle"></i>';
  this.inCorrectIcon = '<i class = "bi bi-x-circle"></i>';
  this.btnNext = document.querySelector(".btn-next");
  this.btnReplay = document.querySelector(".btn-replay");
  this.btnQuit = document.querySelector(".btn-quit");
  this.btnStart = document.querySelector(".btn-start");
  this.buttonBox = document.querySelector("#button-box");
  this.scoreBox = document.querySelector("#score-box");
  this.timeText = document.querySelector(".time-text");
  this.timeSecond = document.querySelector(".time-second");
  this.timeLine = document.querySelector(".time-line");
}

/**
 * Soruyu ekranda gösterir
 * @param {Object} soru - Gösterilecek soru objesi
 */
UI.prototype.soruGoster = function (soru) {
  // Önceki soruyu temizle
  this.body.innerHTML = "";

  // Ana container oluştur
  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");

  // Soru başlığını oluştur
  const title = document.createElement("h5");
  title.classList.add("question-title");
  title.textContent = soru.soruMetni;

  // Seçenekler listesini oluştur
  const optionList = document.createElement("div");
  optionList.classList.add("option-list");

  // Her seçenek için element oluştur
  for (let [key, value] of Object.entries(soru.cevapSecenekleri)) {
    const option = document.createElement("div");
    option.classList.add("option");
    option.addEventListener("click", optionSelected);

    const span = document.createElement("span");
    span.textContent = key + ".) " + value;

    option.appendChild(span);
    optionList.appendChild(option);
  }

  // Elementleri DOM'a ekle
  cardBody.appendChild(title);
  cardBody.appendChild(optionList);
  this.body.appendChild(cardBody);
};

/**
 * Tüm seçenekleri devre dışı bırakır
 */
UI.prototype.disableAllOption = function () {
  const options = document.querySelectorAll(".option");
  for (let option of options) {
    option.classList.add("disable");
  }
};

/**
 * Soru numarasını gösterir
 * @param {number} soruSirasi - Mevcut soru sırası
 * @param {number} toplamSoru - Toplam soru sayısı
 */
UI.prototype.soruSayisinGoster = function (soruSirasi, toplamSoru) {
  const etiket = `<span class="badge text-bg-danger">${soruSirasi} / ${toplamSoru}<span/>  `;
  document.querySelector(".question-index").innerHTML = etiket;
};

/**
 * Quiz sonunda skoru gösterir
 * @param {number} dogruCevap - Doğru cevap sayısı
 * @param {number} toplamSoru - Toplam soru sayısı
 */
UI.prototype.skoruGoster = function (dogruCevap, toplamSoru) {
  const etiket = `Toplamda ${toplamSoru} sorudan ${dogruCevap} doğru cevap verdiniz`;
  document.querySelector(".score-text").innerHTML = etiket;
};
