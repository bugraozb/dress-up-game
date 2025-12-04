# 👗 Dress Up Gaame - Sürdürülebilir Moda Oyunu

Çevresel etkiyi öğreten eğlenceli bir giydirme oyunu. Kıyafet seçimlerinizin su tüketimi, CO2 emisyonu ve enerji kullanımı üzerindeki etkisini keşfedin!

## 🎮 Oyun Özellikleri

- **Çift Dil Desteği:** Türkçe ve İngilizce
- **Gerçek Çevresel Veriler:** Her kıyafetin su, CO2 ve enerji tüketimi
- **Eko Puan Sistemi:** A+ ile F arası değerlendirme
- **Bütçe Yönetimi:** 1000 altın coin ile alışveriş
- **Kombin Geçmişi:** Son kombinleri kaydetme ve CSV olarak dışa aktarma
- **Google Sheets Entegrasyonu:** Oyun verilerini buluta kaydetme (opsiyonel)

## 📁 Proje Yapısı

```
dress-up-game/
├── index.html              # Ana HTML dosyası
├── README.md               # Bu dosya
├── assets/
│   └── images/
│       ├── avatar/         # Karakter görseli
│       ├── tops/           # Üst giyim görselleri
│       ├── bottoms/        # Alt giyim görselleri
│       ├── shoes/          # Ayakkabı görselleri
│       └── icons/          # Kategori ikonları
├── src/
│   ├── css/
│   │   └── style.css       # Stil dosyası
│   └── js/
│       └── script.js       # Oyun mantığı
└── docs/
    ├── DEPLOYMENT.md       # Dağıtım rehberi
    ├── QA.md               # Test senaryoları
    └── RELEASE_NOTES.md    # Sürüm notları
```

## 🚀 Kurulum ve Çalıştırma

### Yerel Geliştirme

1. Projeyi klonlayın:
```bash
git clone https://github.com/bugraozb/dress-up-game.git
cd dress-up-game
```

2. Bir web sunucusu başlatın (örn. Live Server, Python):
```bash
# Python ile
python -m http.server 8000

# Node.js ile
npx serve
```

3. Tarayıcıda açın: `http://localhost:8000`

### GitHub Pages ile Yayınlama

1. GitHub'da repo ayarlarına gidin
2. **Pages** > **Source** > `main` branch seçin
3. Site otomatik olarak yayınlanır: `https://kullaniciadi.github.io/dress-up-game`

---

## 📊 Google Sheets Entegrasyonu (Opsiyonel)

Oyun sonuçlarını otomatik olarak bir Google Sheets tablosuna kaydetmek için aşağıdaki adımları izleyin:

### Adım 1: Google E-Tablo Oluşturma

1. [Google Sheets](https://sheets.google.com)'e gidin
2. Yeni bir boş tablo oluşturun
3. İlk satıra (header) şu başlıkları yazın:

| A | B | C | D | E | F | G | H | I |
|---|---|---|---|---|---|---|---|---|
| Tarih | Toplam Puan | Eko Puanı | Su Tüketimi | CO2 Emisyonu | Enerji | Kıyafetler | Dil | Harcanan |

### Adım 2: Google Apps Script Kurulumu

1. Tablonuz açıkken: **Uzantılar** > **Apps Script**
2. Açılan editördeki tüm kodu silin ve aşağıdakini yapıştırın:

```javascript
var SHEET_NAME = "Sayfa1"; // Tablonuzun adı farklıysa değiştirin

function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.tryLock(10000);

  try {
    var doc = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = doc.getSheetByName(SHEET_NAME);
    var nextRow = sheet.getLastRow() + 1;
    var postData = JSON.parse(e.postData.contents);
    
    var newRow = [
      new Date(),                    // Tarih
      postData.score,                // Toplam Puan
      postData.ecoRating,            // Eko Puanı
      postData.water,                // Su Tüketimi
      postData.co2,                  // CO2 Emisyonu
      postData.energy,               // Enerji
      postData.outfitSummary,        // Kıyafetler
      postData.language,             // Dil
      postData.spent                 // Harcanan
    ];

    sheet.getRange(nextRow, 1, 1, newRow.length).setValues([newRow]);

    return ContentService
      .createTextOutput(JSON.stringify({ "result": "success", "row": nextRow }))
      .setMimeType(ContentService.MimeType.JSON);
  }
  catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ "result": "error", "error": error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
  finally {
    lock.releaseLock();
  }
}
```

3. **Kaydet** butonuna basın (Ctrl+S)

### Adım 3: Web Uygulaması Olarak Yayınlama

1. **Dağıt** > **Yeni Dağıtım** butonuna tıklayın
2. Sol taraftaki ⚙️ simgesinden **Web Uygulaması** seçin
3. Ayarları yapın:
   - **Açıklama:** "Dress Up Game Veri Kaydı"
   - **Yürütme kimliği:** `Ben` (kendi hesabınız)
   - **Erişimi olanlar:** `Herkes` ⚠️ **(ÖNEMLİ!)**
4. **Dağıt** butonuna basın
5. Google izin isteyecektir - **İzin Ver**'e tıklayın
6. Verilen **Web App URL**'yi kopyalayın

### Adım 4: Oyuna URL'yi Ekleme

`src/js/script.js` dosyasını açın ve en üstteki satırı güncelleyin:

```javascript
// ÖNCE:
const GOOGLE_SCRIPT_URL = "YOUR_GOOGLE_SCRIPT_URL_HERE";

// SONRA:
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/XXXXX.../exec";
```

### ✅ Test Etme

1. Oyunu oynayın ve kombini bitirin
2. Tarayıcı konsolunu açın (F12 > Console)
3. `✅ Veri Google Sheets'e gönderildi!` mesajını görmelisiniz
4. Google Sheets tablonuzu kontrol edin - yeni satır eklenmiş olmalı

---

## 🏷️ Markalar

Oyundaki marka isimleri telif haklarından kaçınmak için türetilmiştir:

| Oyun İsmi | İlham Kaynağı |
|-----------|---------------|
| MMF | WWF |
| Miav | Mavi |
| SHINE | Shein |
| Bayman | Beymen |
| Zera | Zara |
| H&W | H&M |
| NINE EAST | Nine West |
| Dididos | Adidas |
| Closet | Dolap |
| Oxxa | Oxxo |
| TrendModa | Trendyol |

## 📄 Lisans

Bu proje eğitim amaçlı geliştirilmiştir.

## 👥 Katkıda Bulunanlar

- Buğra Özbilgin
- Nilay Saygın

