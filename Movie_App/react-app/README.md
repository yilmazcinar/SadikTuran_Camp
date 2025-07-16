# 🎬 Movie App

React tabanlı modern bir film keşif uygulaması. TMDB (The Movie Database) API'sini kullanarak popüler filmleri arayabilir, detaylarını görüntüleyebilir ve izleme listenizi oluşturabilirsiniz.

## 🚀 Özellikler

- **🔍 Film Arama**: Gerçek zamanlı film arama özelliği
- **🎭 Film Detayları**: Backdrop görseli ile sinematik detay sayfası
- **👥 Oyuncu Bilgileri**: Oyuncu fotoğrafları ve karakterleri
- **📝 İzleme Listesi**: Filmleri favori listenize ekleme/çıkarma
- **📱 Responsive Tasarım**: Mobil ve masaüstü uyumlu
- **🎨 Modern UI**: Bootstrap 5 ile şık arayüz

## 🛠️ Kullanılan Teknolojiler

- **React 19** - Frontend framework
- **Bootstrap 5** - UI framework
- **Bootstrap Icons** - İkon kütüphanesi
- **Vite** - Build tool
- **TMDB API** - Film veritabanı

## 🌐 API Servisi

Bu proje **The Movie Database (TMDB) API**'sini kullanmaktadır:

- **API Sağlayıcı**: [TMDB (The Movie Database)](https://www.themoviedb.org/)
- **API Dökümantasyon**: [TMDB API Docs](https://developers.themoviedb.org/3)
- **Kullanılan Endpoint'ler**:
  - Film Arama: `/search/movie`
  - Film Detayları: `/movie/{id}`
  - Oyuncu Bilgileri: `/movie/{id}/credits`

## 📦 Kurulum

1. **Projeyi klonlayın**

   ```bash
   git clone [proje-url]
   cd movie-app/react-app
   ```

2. **Bağımlılıkları yükleyin**

   ```bash
   npm install
   ```

3. **API anahtarını ayarlayın**

   - TMDB'den ücretsiz API anahtarı alın
   - `src/App.jsx` dosyasında `api_key` değişkenini güncelleyin

4. **Uygulamayı başlatın**
   ```bash
   npm run dev
   ```

## 🎯 Kullanım

1. **Film Arama**: Üst kısımdaki arama çubuğuna film adı yazın
2. **Film Detayları**: Herhangi bir film posterine tıklayarak detayları görüntüleyin
3. **İzleme Listesi**: Film kartındaki "+" butonuna tıklayarak listenize ekleyin
4. **İzleme Listesi Görüntüleme**: Sağ üst köşedeki izleme listesi butonuna tıklayın

## 📱 Ekran Görüntüleri
<img width="881" height="902" alt="Ekran görüntüsü 2025-07-16 233609" src="https://github.com/user-attachments/assets/503cfb3c-00bc-44b4-b6e2-63a29f03d831" />
<img width="818" height="891" alt="Ekran görüntüsü 2025-07-16 233547" src="https://github.com/user-attachments/assets/d695017d-95f6-43ba-89a0-ea0ed6ba5fa2" />



## 🏗️ Proje Yapısı

```
src/
├── components/
│   ├── Header.jsx          # Üst menü bileşeni
│   ├── Footer.jsx          # Alt menü bileşeni
│   ├── Main.jsx            # Ana içerik alanı
│   ├── Logo.jsx            # Logo bileşeni
│   ├── SearchForm.jsx      # Arama formu
│   ├── MovieList.jsx       # Film listesi
│   ├── Movie.jsx           # Film kartı
│   ├── MovieDetails.jsx    # Film detay modal'ı
│   ├── WatchList.jsx       # İzleme listesi
│   ├── WatchListButton.jsx # İzleme listesi butonu
│   ├── WatchListMovie.jsx  # İzleme listesi film öğesi
│   └── Loading.jsx         # Yükleniyor animasyonu
├── App.jsx                 # Ana uygulama bileşeni
├── main.jsx               # React DOM render
├── index.css              # Global stiller
└── data.js                # Örnek veri (kullanılmıyor)
```

## 🎨 Özellik Detayları

### Film Arama

- Gerçek zamanlı arama (her harf değişikliğinde)
- TMDB API ile canlı sonuçlar
- Türkçe dil desteği

### Film Detayları Modal'ı

- **Backdrop Görseli**: Film'in arka plan resmi
- **Film Bilgileri**: Başlık, çıkış tarihi, IMDB puanı
- **Özet**: Film konusu
- **Teknik Bilgiler**: Süre, türler, tagline
- **Oyuncu Kadrosu**: Fotoğraflar ve karakter isimleri

### İzleme Listesi

- Filmleri favorilere ekleme/çıkarma
- Lokal state yönetimi
- Anlık güncelleme

## 🔧 Geliştirme

### Mevcut Scriptler

```bash
npm run dev      # Geliştirme sunucusu
npm run build    # Production build
npm run preview  # Build önizleme
npm run lint     # ESLint kontrolü
```

### Önemli Dosyalar

- `App.jsx`: Ana state yönetimi ve API çağrıları
- `MovieDetails.jsx`: Film detay modal'ı ve TMDB API entegrasyonu
- `index.css`: Özel CSS stilleri

## 🤝 Katkıda Bulunma

1. Bu repoyu fork edin
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Değişikliklerinizi commit edin (`git commit -m 'Add amazing feature'`)
4. Branch'inizi push edin (`git push origin feature/amazing-feature`)
5. Pull Request oluşturun

## 📄 Lisans

Bu proje MIT lisansı altında lisanslanmıştır.

## 🙏 Teşekkürler

- [TMDB](https://www.themoviedb.org/) - Film veritabanı API'si
- [React](https://reactjs.org/) - UI kütüphanesi
- [Bootstrap](https://getbootstrap.com/) - CSS framework
- [Vite](https://vitejs.dev/) - Build tool

---

⭐ Bu projeyi beğendiyseniz yıldız vermeyi unutmayın!
