// Quiz sorularının listesi
const soruListesi = [
  new Soru(
    "1 - Hangisi javascript paket yönetim uygulamasıdır ",
    {
      a: "Node Js",
      b: "TypeScript",
      c: "Nuget",
      d: "NPM",
    },
    "d"
  ),
  new Soru(
    "2 - Hangisi frontend kapsamınde değerlendirilmez",
    {
      a: "Css",
      b: "html",
      c: "javascript",
      d: "sql",
    },
    "d"
  ),
  new Soru(
    "3 - Hangisi backend kapsamında değerlendirilir?",
    {
      a: "node.js",
      b: "typescript",
      c: "angular",
      d: "react",
    },
    "a"
  ),
  new Soru(
    "4 - Hangisi javascript programlama dilini kullanmaz?",
    {
      a: "react",
      b: "angular",
      c: "vuejs",
      d: "asp.net",
    },
    "d"
  ),
];

// Quiz ve UI objelerini oluştur
const quiz = new Quiz(soruListesi);
const ui = new UI();

/**
 * Start Quiz butonuna tıklandığında çalışan event listener
 * Quiz'i başlatır, timer'ları çalıştırır ve ilk soruyu gösterir
 */
ui.btnStart.addEventListener("click", function () {
  startTimer(10); // 10 saniyelik timer başlat
  startTimerLine(); // Progress line timer başlat
  ui.quiz_box.classList.add("active"); // Quiz kutusunu göster  ui.buttonBox.classList.remove("active"); // Start butonunu gizle
  ui.soruGoster(quiz.soruGetir()); // İlk soruyu göster
  ui.btnNext.classList.remove("show"); // Next butonunu gizle
  ui.soruSayisinGoster(quiz.soruIndex + 1, quiz.sorular.length); // Soru sayısını göster
  quiz.soruIndex += 1; // Soru indexini artır
});

/**
 * Next butonuna tıklandığında çalışan event listener
 * Bir sonraki soruya geçer veya quiz'i bitirir
 */
ui.btnNext.addEventListener("click", function () {
  if (quiz.sorular.length != quiz.soruIndex) {
    // Hala sorular varsa
    startTimer(10); // Timer'ı yeniden başlat
    startTimerLine(); // Progress line'ı yeniden başlat
    ui.soruGoster(quiz.soruGetir()); // Sonraki soruyu göster
    ui.btnNext.classList.remove("show"); // Next butonunu gizle
    ui.soruSayisinGoster(quiz.soruIndex + 1, quiz.sorular.length); // Soru sayısını güncelle
    quiz.soruIndex += 1; // Soru indexini artır
  } else {
    // Quiz bitti
    ui.scoreBox.classList.add("active"); // Skor kutusunu göster
    ui.quiz_box.classList.remove("active"); // Quiz kutusunu gizle
    ui.skoruGoster(quiz.dogruCevapSayisi, quiz.sorular.length); // Skoru göster
  }
});

/**
 * Kullanıcı bir seçeneğe tıkladığında çalışan fonksiyon
 * @param {Event} e - Click event objesi
 */
function optionSelected(e) {
  clearInterval(counter); // Timer'ı durdur
  clearInterval(counterLine); // Progress line timer'ını durdur

  // Tıklanan elementi belirle (span ise parent'ını al)
  let selectedElement = e.target;
  if (selectedElement.nodeName == "SPAN") {
    selectedElement = selectedElement.parentElement;
  }

  const cevap = e.target.textContent[0]; // Seçilen cevabın harfini al
  // Güncel soruyu almak için soruIndex - 1 kullan (çünkü soruIndex önceden artırılmış)
  const currentSoruIndex = quiz.soruIndex - 1;
  const soru = quiz.sorular[currentSoruIndex];

  // Cevabı kontrol et ve görsel feedback ver
  if (soru && soru.cevabiKontrolEt(cevap)) {
    quiz.dogruCevapSayisi += 1; // Doğru cevap sayısını artır
    selectedElement.classList.add("correct"); // Yeşil renk ekle
    selectedElement.insertAdjacentHTML("beforeend", ui.correctIcon); // Doğru ikonu ekle
  } else if (soru) {
    selectedElement.classList.add("incorrect"); // Kırmızı renk ekle
    selectedElement.insertAdjacentHTML("beforeend", ui.inCorrectIcon); // Yanlış ikonu ekle
  }

  ui.disableAllOption(); // Tüm seçenekleri devre dışı bırak
  ui.btnNext.classList.add("show"); // Next butonunu göster
}

/**
 * Quit butonuna tıklandığında sayfayı yeniler
 */
ui.btnQuit.addEventListener("click", function () {
  window.location.reload();
});

/**
 * Replay butonuna tıklandığında quiz'i yeniden başlatır
 */
ui.btnReplay.addEventListener("click", function () {
  quiz.soruIndex = 0; // Soru indexini sıfırla
  quiz.dogruCevapSayisi = 0; // Doğru cevap sayısını sıfırla

  ui.btnStart.click(); // Start butonuna programatik olarak tıkla  ui.scoreBox.classList.remove("active"); // Skor kutusunu gizle
});

// Timer için global değişken
let counter;

/**
 * Sayısal timer'ı başlatır (10, 9, 8, ...)
 * @param {number} time - Başlangıç zamanı (saniye)
 */
function startTimer(time) {
  counter = setInterval(timer, 1000); // Her saniye çalışacak interval

  function timer() {
    ui.timeSecond.textContent = time; // Ekranda zamanı göster
    time--; // Zamanı azalt

    if (time < 0) {
      clearInterval(counter); // Timer'ı durdur
      ui.timeText.textContent = "Süre Bitti"; // Mesaj göster
      ui.disableAllOption(); // Seçenekleri devre dışı bırak
      ui.btnNext.classList.add("show"); // Next butonunu göster
    }
  }
}

// Progress line timer için global değişken
let counterLine;

/**
 * Progress line timer'ını başlatır (yeşil çizgi animasyonu)
 * 10 saniyede 549px genişliğe ulaşır
 */
function startTimerLine() {
  let line_width = 0; // Başlangıç genişliği

  // Element kontrolü
  if (!ui.timeLine) {
    console.error("time-line element bulunamadı!");
    return;
  }

  // Timer line'ı sıfırla ve yeşil renge döndür
  ui.timeLine.style.width = "0px";
  ui.timeLine.style.backgroundColor = "#28a745"; // Yeşil renk

  counterLine = setInterval(timer, 20); // Her 20ms'de çalışacak interval

  function timer() {
    line_width += 1; // Genişliği artır
    ui.timeLine.style.width = line_width + "px";

    // %75'e geldiğinde (549 * 0.75 = 411.75) kırmızıya dönüştür
    if (line_width >= 412) {
      ui.timeLine.style.backgroundColor = "#dc3545"; // Kırmızı renk
    }

    // Maksimum genişliğe ulaştığında timer'ı durdur
    if (line_width > 549) {
      clearInterval(counterLine);
    }
  }
}
