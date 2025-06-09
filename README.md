# 🌌 Rick and Morty Karakter Atlası 🚀

Bu proje, popüler Rick and Morty API'sini kullanarak karakter verilerini listeleyen, filtreleyen, sıralayan ve detaylarını gösteren etkileşimli bir web uygulamasıdır. Frontend becerilerimi sergilemek amacıyla React ile geliştirilmiştir.

---

## ✨ Projenin Amacı

Bu uygulamanın temel hedefleri şunlardır:

*   **Kullanıcı Dostu Arayüz:** Sezgisel ve kolay kullanılabilen bir web arayüzü sunmak.
*   **API Entegrasyonu:** Dış bir API'den (Rick and Morty API) veri çekme ve işleme yeteneğini göstermek.
*   **Veri Yönetimi:** Büyük veri setlerini (250+ karakter) etkin bir şekilde işlemek, filtrelemek, sıralamak ve sayfalandırmak.
*   **Modüler ve Temiz Kod:** Okunabilir, bakımı kolay ve bileşen tabanlı bir kod yapısı oluşturmak.
*   **Hata Yönetimi:** API isteklerindeki hataları ve veri bulunamadığı durumları kullanıcıya bildirmek.

---

## 🛠️ Kullanılan Teknolojiler

Proje geliştirme sürecinde aşağıdaki teknolojiler ve kütüphaneler kullanılmıştır:

*   **React:** Kullanıcı arayüzünü oluşturmak için tercih edilen JavaScript kütüphanesi.
*   **JavaScript (ES6+):** Uygulamanın temel programlama dili.
*   **HTML5 & CSS3:** Web sayfasının yapısı ve stilize edilmesi için.
*   **Vite:** Hızlı geliştirme ortamı ve performanslı build süreçleri için tercih edilen modern build aracı.
*   **Rick and Morty API:** Karakter verilerini sağlayan açık kaynaklı API.

---

## 🚀 Canlı Demoyu İnceleyin!

Uygulamanın çalışan halini görmek için lütfen aşağıdaki linki ziyaret edin:

👉 [https://my-rick-and-morty-app-tau.vercel.app/) 👈

ilk seferde yüklenmemesi durumunda web sitesini birkaç kez yeniden yükleyin

---

## 📦 Kurulum ve Çalıştırma

Projeyi yerel ortamınızda çalıştırmak için aşağıdaki adımları izleyebilirsiniz:

1.  **Depoyu Klonlayın:**
    ```bash
    git clone https://github.com/Ramykaz/My-Rick-and-Morty-App.git
    cd your-repo-name
    ```

2.  **Bağımlılıkları Yükleyin:**
    ```bash
    npm install
    # veya
    yarn
    ```

3.  **Uygulamayı Başlatın:**
    ```bash
    npm run dev
    # veya
    yarn dev
    ```

    Uygulama `http://localhost:5173` (veya benzer bir port) adresinde çalışmaya başlayacaktır.

---

## 💡 Özellikler

Uygulama, aşağıdaki temel özellikleri sunmaktadır:

*   **Karakter Listeleme:** Rick and Morty dünyasından yüzlerce karakteri tablo formatında görüntüler.
*   **Çoklu Filtreleme:** Karakterleri **isme**, **duruma (status)**, **türe (species)** ve **cinsiyete (gender)** göre filtreleyebilirsiniz.
*   **Sıralama:** Karakterleri **isme** veya **ID'ye** göre artan ya da azalan sırada sıralayabilirsiniz.
*   **Sayfalama:** Geniş karakter listesi içinde kolayca gezinmek için sayfalar arasında geçiş yapabilirsiniz.
*   **Detay Görüntüleme:** Tablodaki herhangi bir karaktere tıklayarak, o karakterin detaylı bilgilerini (resmi, kökeni, son konumu vb.) açılan bir pencerede görebilirsiniz.
*   **Duyarlı Tasarım:** Uygulama, farklı ekran boyutlarına uyum sağlayacak şekilde tasarlanmıştır (temel düzeyde).
*   **Hata Mesajları:** API'den veri alınamadığında veya arama sonuç vermediğinde kullanıcıya bilgilendirici mesajlar sunulur.

---

## 📂 Proje Yapısı

Projenin ana dizin yapısı aşağıdaki gibidir:

```text
my-rick-morty-app/
├── public/                     # Statik dosyalar (örn. index.html)
├── src/                        # Uygulamanın kaynak kodları
│   ├── components/             # Yeniden kullanılabilir React bileşenleri
│   │   ├── CharacterDetail.jsx # Karakter detay kartı
│   │   ├── CharacterTable.jsx  # Karakter listeleme tablosu
│   │   ├── FilterControls.jsx  # Karakterleri filtreleme kontrolleri
│   │   ├── Pagination.jsx      # Sayfalama kontrolleri
│   │   └── SortControls.jsx    # Karakterleri sıralama kontrolleri
│   ├── App.jsx                 # Ana uygulama bileşeni ve global state yönetimi
│   ├── index.css               # Uygulamanın genel stil tanımlamaları
│   └── main.jsx                # React uygulamasının başlangıç dosyası (DOM render noktası)
├── .eslintrc.cjs               # ESLint yapılandırma dosyası (kod kalitesi için)
├── .gitignore                  # Git'in izlemeyeceği dosyalar ve klasörler
├── index.html                  # Uygulamanın ana HTML sayfası
├── package.json                # Proje bağımlılıkları, betikleri ve meta bilgileri
├── README.md                   # Proje hakkında bilgiler içeren dosya
└── vite.config.js              # Vite derleme aracı için yapılandırma dosyası
```

---

## 💭 Düşünceler ve Geliştirme Yaklaşımı

*   **API Kullanımı:** Rick and Morty API'sinin doğrudan sıralama ve sayfa başına öğe sayısı gibi gelişmiş filtreleme seçenekleri sunmaması nedeniyle, bu işlemlerin bir kısmı **frontend'de** (veri çekildikten sonra) gerçekleştirilmiştir. Bu durum, uygulamanın dinamik veri yönetimi ve performans optimizasyonu konusundaki yaklaşımlarımı test etme fırsatı sunmuştur.
*   **Modülerlik:** Uygulama, her bir işlevselliği kendi bileşeninde barındıracak şekilde tasarlanmıştır (`FilterControls`, `SortControls`, `Pagination` vb.). Bu yaklaşım, kodun daha temiz, bakımı kolay ve yeniden kullanılabilir olmasını sağlar.
*   **Hata Yakalama:** `try-catch` blokları kullanılarak API isteklerindeki olası hatalar yakalanmış ve kullanıcıya anlaşılır mesajlar sunulmuştur. Özellikle, API'nin karakter bulunamadığında döndürdüğü 404 hatası özel olarak ele alınmıştır.

---

## 📬 İletişim

Herhangi bir sorunuz, geri bildiriminiz veya iş birliği öneriniz olursa, lütfen çekinmeyin!

*   **Adınız Soyadınız:** \[Ramadan Shemsu Hussen]
*   **E-posta:** \[ramadanshemsuhussen341@gmail.com]
*   **LinkedIn:** [https://www.linkedin.com/in/ramadan-shemsu-hussen-0b995a191/]

---


