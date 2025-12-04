// ==========================================
// GOOGLE SHEETS ENTEGRASYONU
// ==========================================
// Bu URL'yi kendi Google Apps Script Web App URL'niz ile değiştirin
// Nasıl alınır: README.md dosyasındaki "Google Sheets Entegrasyonu" bölümüne bakın
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbw-a59SuK_QsRu852-HBWO02JyNiGmffRFmvKEY_4ydMSg0FWIXD7Q7HooC3thWAUQ4HQ/exec";

// Google Sheets'e veri gönderme fonksiyonu
async function saveToGoogleSheets(impact) {
    // URL ayarlanmamışsa fonksiyonu atla
    if (!GOOGLE_SCRIPT_URL || GOOGLE_SCRIPT_URL === "YOUR_GOOGLE_SCRIPT_URL_HERE") {
        console.log("Google Sheets URL ayarlanmamış. Veri kaydedilmedi.");
        return;
    }

    // Seçilen kıyafetlerin özetini oluştur
    const outfitSummary = Object.entries(gameState.selectedItems)
        .map(([category, item]) => {
            if (!item) return '';
            return `${item.name} (${item.brand})`;
        })
        .filter(Boolean)
        .join(' | ');

    // Gönderilecek veri
    const dataToSend = {
        score: impact.totalImpact,
        ecoRating: impact.ecoRating,
        water: impact.waterUsed,
        co2: impact.co2Emitted,
        energy: impact.energyUsed,
        outfitSummary: outfitSummary,
        language: currentLanguage,
        budget: budgetState.total,
        spent: calculateCurrentSpend()
    };

    try {
        await fetch(GOOGLE_SCRIPT_URL, {
            method: "POST",
            mode: "no-cors", // Google Apps Script CORS kısıtlaması için gerekli
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(dataToSend)
        });
        console.log("✅ Veri Google Sheets'e gönderildi!");
    } catch (error) {
        console.error("❌ Google Sheets'e veri gönderilemedi:", error);
    }
}

// ==========================================
// TRANSLATIONS (Çeviriler)
// ==========================================

// Translations
const translations = {
    en: {
        welcomeTitle: "Welcome to Dress Up Game",
        welcomeText: "Dress your character!",
        startGame: "Start Game",
        categoryAccessories: "Accessories",
        categoryOuterwear: "Outerwear",
        categoryBottoms: "Bottoms",
        categoryShoes: "Shoes",
        select: "Select",
        selected: "Selected ✓",
        yourOutfit: "Your Outfit",
        none: "None",
        finishOutfit: "Finish Outfit",
        score: "SCORE",
        environmentalImpact: "Environmental Impact",
        waterUsed: "Liters of water used",
        co2Emitted: "kg of CO2 emissions",
        energyUsed: "kWh of energy used",
        yourEcoRating: "Your Eco Rating",
        playAgain: "Play Again",
        ecoFriendly: "Eco-Friendly",
        secondhand: "Secondhand",
        brandNew: "Brand New",
        selectAllCategories: "Please select an item from each category before finishing!",
        undo: "Undo",
        resetOutfit: "Reset",
        noHistory: "Nothing to undo!",
        didYouKnow: "💡 Did You Know?",
        recentOutfits: "Recent Outfits",
        exportHistory: "Export History (CSV)",
        emptyHistory: "No saved outfits yet.",
        priceLabel: "Price:",
        conditionLabel: "Condition:",
        materialLabel: "Material:",
        brandLabel: "Brand:",
        currencySymbol: "🪙 ",
        budgetLabel: "Budget",
        budgetSpent: "Spent",
        budgetRemaining: "Remaining",
        budgetExceeded: "This choice would exceed your gold coin budget. Try a different item or remove one from your outfit.",
        conditionOptions: ["Like New", "Pre-Loved", "Vintage", "Limited Edition", "Handmade"],
        materialOptions: [
            "Organic Cotton",
            "Recycled Polyester",
            "Linen",
            "Tencel",
            "Hemp",
            "Wool Blend",
            "Bamboo"
        ],
        brandNames: [
            "MMF",
            "GreenThreads",
            "PlanetStyle",
            "EarthLine",
            "Leaf & Loom",
            "Renew",
            "PureForm",
            "CycleFit"
        ],
        sustainabilityFacts: [
            "The fashion industry produces 10% of global carbon emissions - more than aviation and shipping combined.",
            "It takes 2,700 liters of water to make one cotton t-shirt - enough for one person to drink for 2.5 years.",
            "Buying secondhand clothes reduces CO2 emissions by 82% compared to buying new.",
            "The average person throws away 70 pounds of clothing per year.",
            "Synthetic fabrics release 500,000 tons of microfibers into the ocean annually.",
            "Extending the life of clothing by 9 months reduces carbon, water and waste footprints by 20-30%.",
            "Only 1% of material used to produce clothing is recycled into new clothing.",
            "Sustainable materials like organic cotton use 91% less water than conventional cotton."
        ],
        contextTipLow: "Great choice! This outfit uses only {cups} cups of water, {km} km of car emissions, and {charges} phone charges worth of energy.",
        contextTipMedium: "This outfit uses {cups} cups of water ({minutes} min shower), {km} km worth of car CO2, and energy for {charges} phone charges.",
        contextTipHigh: "This outfit uses {cups} cups of water, CO2 equal to driving {km} km, and energy for {charges} phone charges. Consider eco-friendly alternatives!",
        impactMessageA: "Outstanding! You made the most sustainable choices possible. Your outfit saves the planet while keeping you stylish!",
        impactMessageB: "Excellent work! Your fashion choices significantly reduce environmental impact. Keep up the great sustainable shopping!",
        impactMessageC: "Good job! You made some eco-conscious decisions. Every sustainable choice makes a difference for our planet.",
        impactMessageD: "Not bad! Consider choosing more secondhand or eco-friendly items next time to increase your positive impact.",
        impactMessageF: "There is room for improvement. Try choosing secondhand or eco-friendly items to reduce your environmental footprint!",
        outerwearNames: ['Jacket', 'Coat', 'Hoodie', 'Cardigan', 'Blazer', 'Sweater', 'Vest', 'Windbreaker', 'Parka', 'Poncho'],
        bottomsNames: ['Jeans', 'Pants', 'Shorts', 'Skirt', 'Leggings', 'Trousers', 'Joggers', 'Culottes', 'Chinos', 'Cargo Pants'],
        shoesNames: ['Sneakers', 'Boots', 'Sandals', 'Loafers', 'Flats', 'Heels', 'Oxfords', 'Slippers', 'Mules', 'Espadrilles']
    },
    tr: {
        welcomeTitle: "Dress Up Game oyununa hoş geldiniz",
        welcomeText: "💰 Bütçeyi aşmadan tarzınızı yansıtacak kombinler yapın!\n🛒 Kombinlerinizin gerçek hayattaki giyim deneyiminizi yansıttığından emin olun.\n📝 Oyundan sonra geri bildirim formunu doldurmayı unutmayın.\n🍀 İyi şanslar!",
        startGame: "Oyuna Başla",
        categoryAccessories: "Aksesuarlar",
        categoryOuterwear: "Üst Giyim",
        categoryBottoms: "Alt Giyim",
        categoryShoes: "Ayakkabılar",
        select: "Seç",
        selected: "Seçildi ✓",
        yourOutfit: "Kombinleriniz",
        none: "Yok",
        finishOutfit: "Kombini Bitir",
        score: "SKOR",
        environmentalImpact: "Çevresel Etki",
        waterUsed: "Su Tüketimi (litre)",
        co2Emitted: "CO2 Emisyonu (kg)",
        energyUsed: "Enerji Tüketimi (kWh)",
        yourEcoRating: "Eko Puanınız",
        playAgain: "Tekrar Oyna",
        ecoFriendly: "Sürdürülebilir",
        secondhand: "İkinci El",
        brandNew: "Sıfır",
        selectAllCategories: "Bitirmeden önce lütfen her kategoriden bir ürün seçin!",
        undo: "Geri Al",
        resetOutfit: "Kombini Sıfırla",
        noHistory: "Geri alınacak bir şey yok!",
        didYouKnow: "💡 Biliyor musunuz?",
        recentOutfits: "Son Kombinler",
        exportHistory: "Geçmişi Dışa Aktar (CSV)",
        emptyHistory: "Henüz kayıtlı kombin yok.",
        priceLabel: "Fiyat:",
        conditionLabel: "Durum:",
        materialLabel: "Materyal:",
        brandLabel: "Marka:",
        currencySymbol: "🪙 ",
        budgetLabel: "Bütçe",
        budgetSpent: "Harcanan",
        budgetRemaining: "Kalan",
        budgetExceeded: "Bu seçim altın bütçenizi aşıyor. Farklı bir parça deneyin veya mevcut seçiminizi değiştirin.",
        conditionOptions: ["Yeni", "İkinci El", "Vintage", "Sınırlı Üretim", "El Yapımı"],
        materialOptions: [
            "Organik Pamuk",
            "Geri Dönüştürülmüş Polyester",
            "Keten",
            "Tencel",
            "Kenevir",
            "Yün Karışım",
            "Bambu"
        ],
        brandNames: [
            "EkoModa",
            "YeşilStil",
            "Gezegen",
            "DoğaLoom",
            "Sürdürülebilir",
            "Dönüşüm",
            "SafForm",
            "CycleFit"
        ],
        sustainabilityFacts: [
            "Moda endüstrisi küresel karbon emisyonlarının %10'unu üretiyor - havacılık ve nakliye sektörlerinden daha fazla.",
            "Bir pamuklu tişört üretmek için 2.700 litre su gerekiyor - bir kişinin 2,5 yıl boyunca içebileceği miktar.",
            "İkinci el kıyafet satın almak, yeni kıyafet almaya göre CO2 emisyonlarını %82 oranında azaltıyor.",
            "Ortalama bir kişi yılda 32 kilogram kıyafet çöpe atıyor.",
            "Sentetik kumaşlar her yıl okyanuslara 500.000 ton mikrofiber salıyor.",
            "Kıyafetin ömrünü 9 ay uzatmak, karbon, su ve atık ayak izini %20-30 azaltıyor.",
            "Kıyafet üretiminde kullanılan materyalin sadece %1'i yeni kıyafete dönüştürülüyor.",
            "Organik pamuk gibi sürdürülebilir malzemeler, geleneksel pamuğa göre %91 daha az su kullanıyor."
        ],
        contextTipLow: "Harika seçim! Bu kombin sadece {cups} bardak su, {km} km araba emisyonu ve {charges} telefon şarjı kadar enerji tüketiyor.",
        contextTipMedium: "Bu kombin {cups} bardak su ({minutes} dk duş), {km} km araba CO2'si ve {charges} telefon şarjı kadar enerji tüketiyor.",
        contextTipHigh: "Bu kombin {cups} bardak su, {km} km araba yolculuğu kadar CO2 ve {charges} telefon şarjı kadar enerji tüketiyor. Çevreye duyarlı alternatifler düşünün!",
        impactMessageA: "Mükemmel! En sürdürülebilir seçimleri yaptınız. Kombinleriniz hem şık hem de gezegeni koruyor!",
        impactMessageB: "Harika iş! Moda seçimleriniz çevresel etkiyi önemli ölçüde azaltıyor. Sürdürülebilir alışverişe devam edin!",
        impactMessageC: "Aferin! Çevre bilinçli kararlar aldınız. Her sürdürülebilir seçim gezegenimiz için fark yaratır.",
        impactMessageD: "Fena değil! Bir dahaki sefere daha fazla ikinci el veya sürdürülebilir ürün seçerek olumlu etkilerinizi artırabilirsiniz.",
        impactMessageF: "Gelişme için alan var. Çevresel ayak izinizi azaltmak için ikinci el veya sürdürülebilir ürünler seçmeyi deneyin!",
        outerwearNames: ['Ceket', 'Palto', 'Kapşonlu', 'Hırka', 'Blazer', 'Kazak', 'Yelek', 'Rüzgarlık', 'Parka', 'Ponço'],
        bottomsNames: ['Kot Pantolon', 'Pantolon', 'Şort', 'Etek', 'Tayt', 'Kumaş Pantolon', 'Eşofman', 'Bol Pantolon', 'Chino', 'Kargo'],
        shoesNames: ['Spor Ayakkabı', 'Bot', 'Sandalet', 'Loafer', 'Babet', 'Topuklu', 'Oxford', 'Terlik', 'Mule', 'Espadril']
    }
};

// Game State
let currentLanguage = 'en';

const gameState = {
    currentCategory: 'outerwear',
    currentIndex: 0,
    selectedItems: {
        outerwear: null,
        bottoms: null,
        shoes: null
    },
    history: [] // For undo functionality
};

// Clothing Types
const clothingTypes = {
    ECO_FRIENDLY: { class: 'eco-friendly', waterSaved: 2000, co2Reduced: 5, wasteReduced: 2 },
    SECONDHAND: { class: 'secondhand', waterSaved: 1500, co2Reduced: 3, wasteReduced: 1.5 },
    BRAND_NEW: { class: 'brand-new', waterSaved: 0, co2Reduced: 0, wasteReduced: 0 }
};

const budgetState = {
    total: 0
};

// Get clothing type name based on current language
function getTypeName(type) {
    if (type === clothingTypes.ECO_FRIENDLY) return translations[currentLanguage].ecoFriendly;
    if (type === clothingTypes.SECONDHAND) return translations[currentLanguage].secondhand;
    if (type === clothingTypes.BRAND_NEW) return translations[currentLanguage].brandNew;
    return '';
}

function getCurrentLocale() {
    return currentLanguage === 'tr' ? 'tr-TR' : 'en-US';
}

function formatPrice(value) {
    const symbol = translations[currentLanguage]?.currencySymbol || '';
    const formatted = Number(value || 0).toLocaleString(getCurrentLocale(), {
        minimumFractionDigits: 0
    });
    return `${symbol}${formatted}`;
}

function getRandomFromArray(array) {
    if (!array || array.length === 0) return '';
    return array[Math.floor(Math.random() * array.length)];
}

// Gerçekçi fiyatlandırma fonksiyonu (marka, malzeme ve duruma göre)
function getRealisticPrice(category, brand, material, isSecondhand, isEcoFriendly) {
    // Kategori bazlı temel fiyat aralıkları
    const basePrices = {
        outerwear: { min: 80, max: 550 },
        bottoms: { min: 50, max: 350 },
        shoes: { min: 60, max: 400 }
    };

    const baseRange = basePrices[category] || { min: 100, max: 300 };
    
    // İkinci el ürünler: %30-40 fiyat
    if (isSecondhand) {
        return Math.round((baseRange.min + baseRange.max) / 2 * 0.35);
    }

    // Marka bazlı fiyat belirleme (gerçekçi fiyatlar)
    let price;
    const premiumMaterials = ['kaşmir', 'cashmere', 'ipek', 'silk', 'yün', 'wool', 'deri', 'leather'];
    const materialLower = material.toLowerCase();
    const hasPremiumMaterial = premiumMaterials.some(pm => materialLower.includes(pm));

    switch(brand) {
        // EN PAHALI MARKALAR
        case 'Vokka':
            price = category === 'outerwear' ? (hasPremiumMaterial ? 520 : 450) :
                   category === 'bottoms' ? (hasPremiumMaterial ? 340 : 300) :
                   category === 'shoes' ? (hasPremiumMaterial ? 380 : 320) : 400;
            break;
        case 'Bayman':
            price = category === 'outerwear' ? (hasPremiumMaterial ? 500 : 420) :
                   category === 'bottoms' ? (hasPremiumMaterial ? 320 : 280) :
                   category === 'shoes' ? (hasPremiumMaterial ? 360 : 300) : 380;
            break;
        
        // PAHALI MARKALAR
        case 'MMF':
            price = category === 'outerwear' ? (isEcoFriendly ? 280 : 240) :
                   category === 'bottoms' ? (isEcoFriendly ? 180 : 150) :
                   category === 'shoes' ? (isEcoFriendly ? 200 : 170) : 200;
            break;
        case 'Mengo':
            price = category === 'outerwear' ? (isEcoFriendly ? 300 : 260) :
                   category === 'bottoms' ? (isEcoFriendly ? 190 : 160) :
                   category === 'shoes' ? (isEcoFriendly ? 210 : 180) : 210;
            break;
        case 'Zera':
            price = category === 'outerwear' ? 250 :
                   category === 'bottoms' ? 160 :
                   category === 'shoes' ? 180 : 200;
            break;
        case 'Ertuğrul Kundura':
            price = category === 'shoes' ? (hasPremiumMaterial ? 320 : 280) : 300;
            break;
        case 'NINE EAST':
            price = category === 'shoes' ? (hasPremiumMaterial ? 350 : 300) : 320;
            break;
        
        // AZ PAHALI MARKALAR
        case 'Dididos':
            price = category === 'shoes' ? (isEcoFriendly ? 180 : 160) : 170;
            break;
        
        // ORTA MARKALAR
        case 'Miav':
            price = category === 'outerwear' ? (isEcoFriendly ? 200 : 180) :
                   category === 'bottoms' ? (isEcoFriendly ? 130 : 110) :
                   category === 'shoes' ? (isEcoFriendly ? 150 : 130) : 150;
            break;
        case 'H&W':
            price = category === 'outerwear' ? 180 :
                   category === 'bottoms' ? 110 :
                   category === 'shoes' ? 130 : 140;
            break;
        
        // ORTA ALTI MARKALAR
        case 'Oxxa':
            price = category === 'outerwear' ? 150 :
                   category === 'bottoms' ? 90 :
                   category === 'shoes' ? 110 : 120;
            break;
        case "Jollin's":
            price = category === 'outerwear' ? 140 :
                   category === 'bottoms' ? 85 :
                   category === 'shoes' ? 100 : 110;
            break;
        
        // UYGUN MARKALAR
        case 'TrendModa':
            price = category === 'outerwear' ? 120 :
                   category === 'bottoms' ? 70 :
                   category === 'shoes' ? 85 : 90;
            break;
        
        // EN UCUZ MARKALAR
        case 'TIMU':
            price = category === 'outerwear' ? 100 :
                   category === 'bottoms' ? 60 :
                   category === 'shoes' ? 75 : 80;
            break;
        case 'SHINE':
            price = category === 'outerwear' ? 110 :
                   category === 'bottoms' ? 65 :
                   category === 'shoes' ? 80 : 85;
            break;
        
        default:
            price = (baseRange.min + baseRange.max) / 2;
    }

    // Geri dönüşüm ürünleri için ekstra (%5-8)
    if (isEcoFriendly && !isSecondhand) {
        price = Math.round(price * 1.06);
    }

    return Math.round(price);
}

function initializeBudget() {
    budgetState.total = 1000;
    updateBudgetUI();
}

function calculateCurrentSpend() {
    return Object.values(gameState.selectedItems).reduce((total, item) => {
        return total + (item?.price || 0);
    }, 0);
}

function updateBudgetUI() {
    const budgetElements = {
        total: document.getElementById('budgetTotal'),
        spent: document.getElementById('budgetSpent'),
        remaining: document.getElementById('budgetRemaining')
    };

    if (!budgetElements.total || !budgetElements.spent || !budgetElements.remaining) return;

    const spent = calculateCurrentSpend();
    const remaining = Math.max(budgetState.total - spent, 0);

    budgetElements.total.textContent = formatPrice(budgetState.total);
    budgetElements.spent.textContent = formatPrice(spent);
    budgetElements.remaining.textContent = formatPrice(remaining);

    budgetElements.remaining.parentElement.classList.toggle('over-budget', remaining === 0 && budgetState.total > 0);
}

function getImpactContextTip(impact) {
    // Tüketim bazlı karşılaştırma metrikleri
    const waterCups = Math.round((impact.waterUsed || 0) / 0.25);        // 250ml bardak
    const showerMinutes = Math.round((impact.waterUsed || 0) / 10);      // 10L/dk duş
    const carKm = Math.round(parseFloat(impact.co2Emitted || 0) / 0.12); // 0.12 kg CO2/km
    const phoneCharges = Math.round((impact.energyUsed || 0) / 0.01);    // 0.01 kWh/şarj

    // Eko puanına göre mesaj şablonu seç
    let template;
    const rating = impact.ecoRating || 'C';
    
    if (rating === 'A+' || rating === 'A') {
        template = translations[currentLanguage].contextTipLow || '';
    } else if (rating === 'B' || rating === 'C') {
        template = translations[currentLanguage].contextTipMedium || '';
    } else {
        template = translations[currentLanguage].contextTipHigh || '';
    }

    // Şablondaki değişkenleri değiştir
    return template
        .replace('{cups}', waterCups.toLocaleString(getCurrentLocale()))
        .replace('{minutes}', showerMinutes.toLocaleString(getCurrentLocale()))
        .replace('{km}', carKm.toLocaleString(getCurrentLocale()))
        .replace('{charges}', phoneCharges.toLocaleString(getCurrentLocale()));
}

// Translate UI elements
function translateUI() {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[currentLanguage][key]) {
            element.textContent = translations[currentLanguage][key];
        }
    });
}

// Generate random clothing items
function generateClothingItems() {
    const categories = ['outerwear', 'bottoms', 'shoes'];
    const items = {};

    const namesByCategory = {
        outerwear: translations[currentLanguage].outerwearNames,
        bottoms: translations[currentLanguage].bottomsNames,
        shoes: translations[currentLanguage].shoesNames
    };

    const conditionOptions = translations[currentLanguage].conditionOptions;
    const materialOptions = translations[currentLanguage].materialOptions;
    const brandOptions = translations[currentLanguage].brandNames;

    const emojis = {
        outerwear: ['🧥', '🥼', '🦺', '👔', '🥻', '👕', '👚', '🩱'],
        bottoms: ['👖', '👗', '🩳', '👘', '🩱'],
        shoes: ['👟', '👞', '👠', '👡', '🥾', '🥿', '👢']
    };

    const priceRanges = {
        outerwear: { min: 150, max: 420 },
        bottoms: { min: 80, max: 260 },
        shoes: { min: 100, max: 320 }
    };

    const typeKeys = Object.keys(clothingTypes);

    categories.forEach(category => {
        items[category] = [];
        const names = namesByCategory[category] || [];
        const categoryEmojis = emojis[category] || [];
        const range = priceRanges[category];

        const createRandomItem = (index = 0, overrides = {}) => {
            const randomType = clothingTypes[typeKeys[Math.floor(Math.random() * typeKeys.length)]];
            const baseName = names.length ? names[index % names.length] : `${category} ${index + 1}`;
            const nameVariant = index < names.length
                ? baseName
                : `${baseName} ${Math.floor(index / (names.length || 1)) + 1}`;
            const emoji = categoryEmojis.length ? categoryEmojis[index % categoryEmojis.length] : '👚';
            const price = range
                ? Math.round((Math.random() * (range.max - range.min) + range.min) / 10) * 10
                : Math.round(Math.random() * 100) * 10;
            const baseItem = {
                id: `${category}-${index}`,
                name: nameVariant,
                type: randomType,
                emoji: emoji,
                price: price,
                condition: getRandomFromArray(conditionOptions),
                material: getRandomFromArray(materialOptions),
                brand: getRandomFromArray(brandOptions),
                image: null,
                previewTransform: null
            };
            return { ...baseItem, ...overrides };
        };

        if (category === 'outerwear') {
            const curatedOuterwear = [];
            const localizedTopName = currentLanguage === 'tr' ? 'Top 1' : 'Top 1';
            const localizedTop2Name = currentLanguage === 'tr' ? 'Top 2' : 'Top 2';
            const averageOuterwearPrice = range
                ? Math.round(((range.min + range.max) / 2) / 10) * 10
                : 200;

            // Top 1 = Oxxa Bluz (%50 pamuk, %40 poliamid, %10 alpaka) - Orta altı marka
            const top1Material = currentLanguage === 'tr' ? '%50 Pamuk, %40 Poliamid, %10 Alpaka' : '50% Cotton, 40% Polyamide, 10% Alpaca';
            curatedOuterwear.push(createRandomItem(0, {
                id: 'outerwear-top1',
                name: currentLanguage === 'tr' ? 'Oxxa Bluz' : 'Oxxa Blouse',
                type: clothingTypes.BRAND_NEW,
                emoji: '👚',
                image: 'assets/images/tops/top1.png',
                price: getRealisticPrice('outerwear', 'Oxxa', top1Material, false, false),
                condition: currentLanguage === 'tr' ? 'Sıfır' : 'Brand New',
                material: top1Material,
                brand: 'Oxxa',
                previewTransform: { x: 0, y: 63, width: 200, height: 270 },
                environmentalImpact: { water: 770, co2: 11.5, energy: 18 }
            }));

            // Top 2 = MMF Kazak (%65 pamuk, %35 geri dönüştürülmüş polyester) - Pahalı marka, geri dönüşüm
            const top2Material = currentLanguage === 'tr' ? '%65 Pamuk, %35 Geri Dön. Polyester' : '65% Cotton, 35% Recycled Polyester';
            curatedOuterwear.push(createRandomItem(1, {
                id: 'outerwear-top2',
                name: currentLanguage === 'tr' ? 'MMF Kazak' : 'MMF Sweater',
                type: clothingTypes.ECO_FRIENDLY,
                emoji: '👕',
                image: 'assets/images/tops/top2.png',
                price: getRealisticPrice('outerwear', 'MMF', top2Material, false, true),
                condition: currentLanguage === 'tr' ? 'Sıfır' : 'Brand New',
                material: top2Material,
                brand: 'MMF',
                previewTransform: { x: 0, y: 63, width: 200, height: 270 },
                environmentalImpact: { water: 525, co2: 5.75, energy: 8 }
            }));

            // Top 3 = Zera Gömlek (%100 pamuk) - Pahalı marka
            const top3Material = currentLanguage === 'tr' ? '%100 Pamuk' : '100% Cotton';
            curatedOuterwear.push(createRandomItem(2, {
                id: 'outerwear-top3',
                name: currentLanguage === 'tr' ? 'Zera Gömlek' : 'Zera Shirt',
                type: clothingTypes.BRAND_NEW,
                emoji: '👔',
                image: 'assets/images/tops/top3.png',
                price: getRealisticPrice('outerwear', 'Zera', top3Material, false, false),
                condition: currentLanguage === 'tr' ? 'Sıfır' : 'Brand New',
                material: top3Material,
                brand: 'Zera',
                previewTransform: { x: 0, y: 63, width: 200, height: 270 },
                environmentalImpact: { water: 850, co2: 10, energy: 12 }
            }));

            // Top 3 Blue = Bayman Gömlek (%95 ipek, %5 elastan) - En pahalı marka, premium malzeme (ipek)
            const top3BlueMaterial = currentLanguage === 'tr' ? '%95 İpek, %5 Elastan' : '95% Silk, 5% Elastane';
            curatedOuterwear.push(createRandomItem(3, {
                id: 'outerwear-top3-blue',
                name: currentLanguage === 'tr' ? 'Bayman Gömlek' : 'Bayman Shirt',
                type: clothingTypes.BRAND_NEW,
                emoji: '👔',
                image: 'assets/images/tops/top3blue.png',
                price: getRealisticPrice('outerwear', 'Bayman', top3BlueMaterial, false, false),
                condition: currentLanguage === 'tr' ? 'Sıfır' : 'Brand New',
                material: top3BlueMaterial,
                brand: 'Bayman',
                previewTransform: { x: 0, y: 63, width: 200, height: 270 },
                environmentalImpact: { water: 4150, co2: 15, energy: 18 }
            }));

            // Top 1 Gray = H&W Bluz (%73 akrilik, %25 polyester, %2 elastan) - Orta marka
            const top1GrayMaterial = currentLanguage === 'tr' ? '%73 Akrilik, %25 Polyester, %2 Elastan' : '73% Acrylic, 25% Polyester, 2% Elastane';
            curatedOuterwear.push(createRandomItem(4, {
                id: 'outerwear-top1-gray',
                name: currentLanguage === 'tr' ? 'H&W Bluz' : 'H&W Blouse',
                type: clothingTypes.BRAND_NEW,
                emoji: '👚',
                image: 'assets/images/tops/top1gray.png',
                price: 180, // Sabit fiyat
                condition: currentLanguage === 'tr' ? 'Sıfır' : 'Brand New',
                material: top1GrayMaterial,
                brand: 'H&W',
                previewTransform: { x: 0, y: 63, width: 200, height: 270 },
                environmentalImpact: { water: 100, co2: 14, energy: 23 }
            }));

            // Top 2 Yellow = H&W Kazak (%92 viskoz, %8 elastan) - Orta marka
            const top2YellowMaterial = currentLanguage === 'tr' ? '%92 Viskoz, %8 Elastan' : '92% Viscose, 8% Elastane';
            curatedOuterwear.push(createRandomItem(5, {
                id: 'outerwear-top2-yellow',
                name: currentLanguage === 'tr' ? 'H&W Kazak' : 'H&W Sweater',
                type: clothingTypes.BRAND_NEW,
                emoji: '👕',
                image: 'assets/images/tops/top2yellow.png',
                price: 210, // Sabit fiyat
                condition: currentLanguage === 'tr' ? 'Sıfır' : 'Brand New',
                material: top2YellowMaterial,
                brand: 'H&W',
                previewTransform: { x: 0, y: 63, width: 200, height: 270 },
                environmentalImpact: { water: 750, co2: 8.5, energy: 11 }
            }));

            // Top 1 Black = Mengo Bluz İkinci El (%60 viskoz, %20 polyester, %20 akrilik) - Pahalı marka, ikinci el
            const top1BlackMaterial = currentLanguage === 'tr' ? '%60 Viskoz, %20 Polyester, %20 Akrilik' : '60% Viscose, 20% Polyester, 20% Acrylic';
            curatedOuterwear.push(createRandomItem(6, {
                id: 'outerwear-top1-black',
                name: currentLanguage === 'tr' ? 'Mengo Bluz' : 'Mengo Blouse',
                type: clothingTypes.SECONDHAND,
                emoji: '👕',
                image: 'assets/images/tops/top1black.png',
                price: 100, // Sabit fiyat
                condition: currentLanguage === 'tr' ? 'İkinci El' : 'Good Condition',
                material: top1BlackMaterial,
                brand: 'Mengo',
                previewTransform: { x: 0, y: 63, width: 200, height: 270 },
                environmentalImpact: { water: 0, co2: 0.8, energy: 1 }
            }));

            // Top 1 Green = Miav Bluz Sıfır (%70 modal, %20 akrilik, %10 polyester) - Orta marka
            const top1GreenMaterial = currentLanguage === 'tr' ? '%70 Modal, %20 Akrilik, %10 Polyester' : '70% Modal, 20% Acrylic, 10% Polyester';
            curatedOuterwear.push(createRandomItem(7, {
                id: 'outerwear-top1-green',
                name: currentLanguage === 'tr' ? 'Miav Bluz' : 'Miav Blouse',
                type: clothingTypes.BRAND_NEW,
                emoji: '👕',
                image: 'assets/images/tops/top1green.png',
                price: getRealisticPrice('outerwear', 'Miav', top1GreenMaterial, false, false),
                condition: currentLanguage === 'tr' ? 'Sıfır' : 'Brand New',
                material: top1GreenMaterial,
                brand: 'Miav',
                previewTransform: { x: 0, y: 63, width: 200, height: 270 },
                environmentalImpact: { water: 600, co2: 7, energy: 9 }
            }));

            // Top 1 Maroon = TIMU Bluz Sıfır (%100 polyester) - En ucuz marka
            const top1MaroonMaterial = currentLanguage === 'tr' ? '%100 Polyester' : '100% Polyester';
            curatedOuterwear.push(createRandomItem(8, {
                id: 'outerwear-top1-maroon',
                name: currentLanguage === 'tr' ? 'TIMU Bluz' : 'TIMU Blouse',
                type: clothingTypes.BRAND_NEW,
                emoji: '👕',
                image: 'assets/images/tops/top1maroon.png',
                price: 95, // Sabit fiyat
                condition: currentLanguage === 'tr' ? 'Sıfır' : 'Brand New',
                material: top1MaroonMaterial,
                brand: 'TIMU',
                previewTransform: { x: 0, y: 63, width: 200, height: 270 },
                environmentalImpact: { water: 50, co2: 9, energy: 12 }
            }));

            // Top 1 Purple = Vokka Bluz Sıfır (%100 kaşmir) - En pahalı marka, premium malzeme (kaşmir)
            const top1PurpleMaterial = currentLanguage === 'tr' ? '%100 Kaşmir' : '100% Cashmere';
            curatedOuterwear.push(createRandomItem(9, {
                id: 'outerwear-top1-purple',
                name: currentLanguage === 'tr' ? 'Vokka Bluz' : 'Vokka Blouse',
                type: clothingTypes.BRAND_NEW,
                emoji: '👕',
                image: 'assets/images/tops/top1purple.png',
                price: getRealisticPrice('outerwear', 'Vokka', top1PurpleMaterial, false, false),
                condition: currentLanguage === 'tr' ? 'Sıfır' : 'Brand New',
                material: top1PurpleMaterial,
                brand: 'Vokka',
                previewTransform: { x: 0, y: 63, width: 200, height: 270 },
                environmentalImpact: { water: 12000, co2: 25, energy: 30 }
            }));

            // Top 2 Blue = Bayman Kazak Sıfır (%100 yün) - En pahalı marka, premium malzeme (yün)
            const top2BlueMaterial = currentLanguage === 'tr' ? '%100 Yün' : '100% Wool';
            curatedOuterwear.push(createRandomItem(10, {
                id: 'outerwear-top2-blue',
                name: currentLanguage === 'tr' ? 'Bayman Kazak' : 'Bayman Sweater',
                type: clothingTypes.BRAND_NEW,
                emoji: '👚',
                image: 'assets/images/tops/top2blue.png',
                price: getRealisticPrice('outerwear', 'Bayman', top2BlueMaterial, false, false),
                condition: currentLanguage === 'tr' ? 'Sıfır' : 'Brand New',
                material: top2BlueMaterial,
                brand: 'Bayman',
                previewTransform: { x: 0, y: 63, width: 200, height: 270 },
                environmentalImpact: { water: 5000, co2: 20, energy: 25 }
            }));

            // Top 2 Green = Jollin's Kazak İkinci El (%90 akrilik, %10 yün) - Orta altı marka, ikinci el
            const top2GreenMaterial = currentLanguage === 'tr' ? '%90 Akrilik, %10 Yün' : '90% Acrylic, 10% Wool';
            curatedOuterwear.push(createRandomItem(11, {
                id: 'outerwear-top2-green',
                name: currentLanguage === 'tr' ? "Jollin's Kazak" : "Jollin's Sweater",
                type: clothingTypes.SECONDHAND,
                emoji: '👚',
                image: 'assets/images/tops/top2green.png',
                price: getRealisticPrice('outerwear', "Jollin's", top2GreenMaterial, true, false),
                condition: currentLanguage === 'tr' ? 'İkinci El' : 'Good Condition',
                material: top2GreenMaterial,
                brand: "Jollin's",
                previewTransform: { x: 0, y: 63, width: 200, height: 270 },
                environmentalImpact: { water: 0, co2: 0.7, energy: 1 }
            }));

            // Top 2 Pink = MMF Kazak Sıfır (%60 geri dönüştürülmüş polyester, %40 geri dönüştürülmüş pamuk) - Pahalı marka, geri dönüşüm
            const top2PinkMaterial = currentLanguage === 'tr' ? '%60 Geri Dön. Polyester, %40 Geri Dön. Pamuk' : '60% Recycled Polyester, 40% Recycled Cotton';
            curatedOuterwear.push(createRandomItem(12, {
                id: 'outerwear-top2-pink',
                name: currentLanguage === 'tr' ? 'MMF Kazak' : 'MMF Sweater',
                type: clothingTypes.ECO_FRIENDLY,
                emoji: '👚',
                image: 'assets/images/tops/top2pink.png',
                price: getRealisticPrice('outerwear', 'MMF', top2PinkMaterial, false, true),
                condition: currentLanguage === 'tr' ? 'Sıfır' : 'Brand New',
                material: top2PinkMaterial,
                brand: 'MMF',
                previewTransform: { x: 0, y: 63, width: 200, height: 270 },
                environmentalImpact: { water: 200, co2: 4, energy: 7 }
            }));

            // Top 3 Green = Oxxa Gömlek İkinci El (%100 polyester) - Orta altı marka, ikinci el
            const top3GreenMaterial = currentLanguage === 'tr' ? '%100 Polyester' : '100% Polyester';
            curatedOuterwear.push(createRandomItem(13, {
                id: 'outerwear-top3-green',
                name: currentLanguage === 'tr' ? 'Oxxa Gömlek' : 'Oxxa Shirt',
                type: clothingTypes.SECONDHAND,
                emoji: '👔',
                image: 'assets/images/tops/top3green.png',
                price: 80, // Sabit fiyat
                condition: currentLanguage === 'tr' ? 'İkinci El' : 'Good Condition',
                material: top3GreenMaterial,
                brand: 'Oxxa',
                previewTransform: { x: 0, y: 63, width: 200, height: 270 },
                environmentalImpact: { water: 0, co2: 0.7, energy: 1 }
            }));

            // Top 3 Purple = H&W Gömlek İkinci El (%63 pamuk, %30 polyester, %7 elastan) - Orta marka, ikinci el
            const top3PurpleMaterial = currentLanguage === 'tr' ? '%63 Pamuk, %30 Polyester, %7 Elastan' : '63% Cotton, 30% Polyester, 7% Elastane';
            curatedOuterwear.push(createRandomItem(14, {
                id: 'outerwear-top3-purple',
                name: currentLanguage === 'tr' ? 'H&W Gömlek' : 'H&W Shirt',
                type: clothingTypes.SECONDHAND,
                emoji: '👔',
                image: 'assets/images/tops/top3purple.png',
                price: getRealisticPrice('outerwear', 'H&W', top3PurpleMaterial, true, false),
                condition: currentLanguage === 'tr' ? 'İkinci El' : 'Good Condition',
                material: top3PurpleMaterial,
                brand: 'H&W',
                previewTransform: { x: 0, y: 63, width: 200, height: 270 },
                environmentalImpact: { water: 0, co2: 0.75, energy: 1 }
            }));

            // Top 3 Yellow = Miav Gömlek Sıfır (%71 viskoz, %29 pamuk) - Orta marka
            const top3YellowMaterial = currentLanguage === 'tr' ? '%71 Viskoz, %29 Pamuk' : '71% Viscose, 29% Cotton';
            curatedOuterwear.push(createRandomItem(15, {
                id: 'outerwear-top3-yellow',
                name: currentLanguage === 'tr' ? 'Miav Gömlek' : 'Miav Shirt',
                type: clothingTypes.BRAND_NEW,
                emoji: '👔',
                image: 'assets/images/tops/top3yellow.png',
                price: 205, // Sabit fiyat
                condition: currentLanguage === 'tr' ? 'Sıfır' : 'Brand New',
                material: top3YellowMaterial,
                brand: 'Miav',
                previewTransform: { x: 0, y: 63, width: 200, height: 270 },
                environmentalImpact: { water: 700, co2: 8, energy: 10 }
            }));

            items[category] = curatedOuterwear;
            return;
        }

        if (category === 'bottoms') {
            const curatedBottoms = [];
            const averageBottomsPrice = range
                ? Math.round(((range.min + range.max) / 2) / 10) * 10
                : 160;

            // Bottom 1 = TrendModa Etek (%94 polyester, %6 elastan) - Uygun marka
            const bottom1Material = currentLanguage === 'tr' ? '%94 Polyester, %6 Elastan' : '94% Polyester, 6% Elastane';
            curatedBottoms.push(createRandomItem(0, {
                id: 'bottoms-bottom1',
                name: currentLanguage === 'tr' ? 'TrendModa Etek' : 'TrendModa Skirt',
                type: clothingTypes.BRAND_NEW,
                emoji: '👗',
                image: 'assets/images/bottoms/bottom1.png',
                price: 120, // Sabit fiyat
                condition: currentLanguage === 'tr' ? 'Sıfır' : 'Brand New',
                material: bottom1Material,
                brand: 'TrendModa',
                previewTransform: { x: 0, y: 63, width: 200, height: 270 },
                environmentalImpact: { water: 52, co2: 9, energy: 11 }
            }));

            // Bottom 2 = Miav Jean (%100 geri dönüştürülmüş polyester) - Orta marka, geri dönüşüm
            const bottom2Material = currentLanguage === 'tr' ? '%100 Geri Dön. Polyester' : '100% Recycled Polyester';
            curatedBottoms.push(createRandomItem(1, {
                id: 'bottoms-bottom2',
                name: currentLanguage === 'tr' ? 'Miav Jean' : 'Miav Jeans',
                type: clothingTypes.ECO_FRIENDLY,
                emoji: '👖',
                image: 'assets/images/bottoms/bottom2.png',
                price: 250, // Sabit fiyat
                condition: currentLanguage === 'tr' ? 'Sıfır' : 'Brand New',
                material: bottom2Material,
                brand: 'Miav',
                previewTransform: { x: 0, y: 63, width: 200, height: 270 },
                environmentalImpact: { water: 60, co2: 4.5, energy: 10 }
            }));

            // Bottom 1 Green = TrendModa Etek İkinci El (%94 polyester, %6 elastan) - Uygun marka, ikinci el
            curatedBottoms.push(createRandomItem(2, {
                id: 'bottoms-bottom1-green',
                name: currentLanguage === 'tr' ? 'TrendModa Etek' : 'TrendModa Skirt',
                type: clothingTypes.SECONDHAND,
                emoji: '👗',
                image: 'assets/images/bottoms/bottom1green.png',
                price: getRealisticPrice('bottoms', 'TrendModa', bottom1Material, true, false),
                condition: currentLanguage === 'tr' ? 'İkinci El' : 'Good Condition',
                material: bottom1Material,
                brand: 'TrendModa',
                previewTransform: { x: 0, y: 63, width: 200, height: 270 },
                environmentalImpact: { water: 25, co2: 0.6, energy: 1 }
            }));

            // Bottom 2 Brown = SHINE Jean (%90 pamuk, %6 polyester, %4 viskoz) - En ucuz marka
            const bottom2BrownMaterial = currentLanguage === 'tr' ? '%90 Pamuk, %6 Polyester, %4 Viskoz' : '90% Cotton, 6% Polyester, 4% Viscose';
            curatedBottoms.push(createRandomItem(3, {
                id: 'bottoms-bottom2-brown',
                name: currentLanguage === 'tr' ? 'SHINE Jean' : 'SHINE Jeans',
                type: clothingTypes.BRAND_NEW,
                emoji: '👖',
                image: 'assets/images/bottoms/bottom2brown.png',
                price: 135, // Sabit fiyat
                condition: currentLanguage === 'tr' ? 'Sıfır' : 'Brand New',
                material: bottom2BrownMaterial,
                brand: 'SHINE',
                previewTransform: { x: 0, y: 63, width: 200, height: 270 },
                environmentalImpact: { water: 4000, co2: 18.5, energy: 21 }
            }));

            // Bottom 1 Blue = Mengo Etek Geri Dönüşüm (%80 geri dönüştürülmüş pamuk, %20 elastan) - Pahalı marka, geri dönüşüm
            const bottom1BlueMaterial = currentLanguage === 'tr' ? '%80 Geri Dön. Pamuk, %20 Elastan' : '80% Recycled Cotton, 20% Elastane';
            curatedBottoms.push(createRandomItem(4, {
                id: 'bottoms-bottom1-blue',
                name: currentLanguage === 'tr' ? 'Mengo Etek' : 'Mengo Skirt',
                type: clothingTypes.ECO_FRIENDLY,
                emoji: '👗',
                image: 'assets/images/bottoms/bottom1blue.png',
                price: getRealisticPrice('bottoms', 'Mengo', bottom1BlueMaterial, false, true),
                condition: currentLanguage === 'tr' ? 'Sıfır' : 'Brand New',
                material: bottom1BlueMaterial,
                brand: 'Mengo',
                previewTransform: { x: 0, y: 63, width: 200, height: 270 },
                environmentalImpact: { water: 50, co2: 4, energy: 9 }
            }));

            // Bottom 1 Red = Oxxa Etek İkinci El (%90 pamuk, %10 akrilik) - Orta altı marka, ikinci el
            const bottom1RedMaterial = currentLanguage === 'tr' ? '%90 Pamuk, %10 Akrilik' : '90% Cotton, 10% Acrylic';
            curatedBottoms.push(createRandomItem(5, {
                id: 'bottoms-bottom1-red',
                name: currentLanguage === 'tr' ? 'Oxxa Etek' : 'Oxxa Skirt',
                type: clothingTypes.SECONDHAND,
                emoji: '👗',
                image: 'assets/images/bottoms/bottom1red.png',
                price: 95, // Sabit fiyat
                condition: currentLanguage === 'tr' ? 'İkinci El' : 'Good Condition',
                material: bottom1RedMaterial,
                brand: 'Oxxa',
                previewTransform: { x: 0, y: 63, width: 200, height: 270 },
                environmentalImpact: { water: 0, co2: 0.7, energy: 1 }
            }));

            // Bottom 1 Sarı = Zera Etek Sıfır (%100 pamuk) - Pahalı marka
            const bottom1YellowMaterial = currentLanguage === 'tr' ? '%100 Pamuk' : '100% Cotton';
            curatedBottoms.push(createRandomItem(6, {
                id: 'bottoms-bottom1-yellow',
                name: currentLanguage === 'tr' ? 'Zera Etek' : 'Zera Skirt',
                type: clothingTypes.BRAND_NEW,
                emoji: '👗',
                image: 'assets/images/bottoms/bottom1yellow.png',
                price: 275, // Sabit fiyat
                condition: currentLanguage === 'tr' ? 'Sıfır' : 'Brand New',
                material: bottom1YellowMaterial,
                brand: 'Zera',
                previewTransform: { x: 0, y: 63, width: 200, height: 270 },
                environmentalImpact: { water: 52, co2: 8, energy: 10 }
            }));

            // Bottom 2 Dark = Jollin's Jean İkinci El (%99 pamuk, %1 elastan) - Orta altı marka, ikinci el
            const bottom2DarkMaterial = currentLanguage === 'tr' ? '%99 Pamuk, %1 Elastan' : '99% Cotton, 1% Elastane';
            curatedBottoms.push(createRandomItem(7, {
                id: 'bottoms-bottom2-dark',
                name: currentLanguage === 'tr' ? "Jollin's Jean" : "Jollin's Jeans",
                type: clothingTypes.SECONDHAND,
                emoji: '👖',
                image: 'assets/images/bottoms/bottom2_dark.png',
                price: 80, // Sabit fiyat
                condition: currentLanguage === 'tr' ? 'İkinci El' : 'Good Condition',
                material: bottom2DarkMaterial,
                brand: "Jollin's",
                previewTransform: { x: 0, y: 63, width: 200, height: 270 },
                environmentalImpact: { water: 0, co2: 0.8, energy: 1 }
            }));

            // Bottom 2 Black = TrendModa Jean Sıfır (%100 pamuk) - Uygun marka
            const bottom2BlackMaterial = currentLanguage === 'tr' ? '%100 Pamuk' : '100% Cotton';
            curatedBottoms.push(createRandomItem(8, {
                id: 'bottoms-bottom2-black',
                name: currentLanguage === 'tr' ? 'TrendModa Jean' : 'TrendModa Jeans',
                type: clothingTypes.BRAND_NEW,
                emoji: '👖',
                image: 'assets/images/bottoms/bottom2black.png',
                price: 160, // Sabit fiyat
                condition: currentLanguage === 'tr' ? 'Sıfır' : 'Brand New',
                material: bottom2BlackMaterial,
                brand: 'TrendModa',
                previewTransform: { x: 0, y: 63, width: 200, height: 270 },
                environmentalImpact: { water: 52, co2: 8, energy: 10 }
            }));

            // Bottom 2 Green = Vokka Jean Sıfır (%20 geri dönüştürülmüş pamuk, %70 pamuk, %10 elastan) - En pahalı marka, geri dönüşüm
            const bottom2GreenMaterial = currentLanguage === 'tr' ? '%20 Geri Dön. Pamuk, %70 Pamuk, %10 Elastan' : '20% Recycled Cotton, 70% Cotton, 10% Elastane';
            curatedBottoms.push(createRandomItem(9, {
                id: 'bottoms-bottom2-green',
                name: currentLanguage === 'tr' ? 'Vokka Jean' : 'Vokka Jeans',
                type: clothingTypes.ECO_FRIENDLY,
                emoji: '👖',
                image: 'assets/images/bottoms/bottom2green.png',
                price: 390, // Sabit fiyat
                condition: currentLanguage === 'tr' ? 'Sıfır' : 'Brand New',
                material: bottom2GreenMaterial,
                brand: 'Vokka',
                previewTransform: { x: 0, y: 63, width: 200, height: 270 },
                environmentalImpact: { water: 55, co2: 5, energy: 9 }
            }));

            items[category] = curatedBottoms;
            return;
        }

        if (category === 'shoes') {
            const curatedShoes = [];
            const averageShoesPrice = range
                ? Math.round(((range.min + range.max) / 2) / 10) * 10
                : 140;

            // Shoes 1 = Dididos Ayakkabı (suni deri, kauçuk) - Az pahalı marka
            const shoes1Material = currentLanguage === 'tr' ? 'Suni Deri, Kauçuk' : 'Synthetic Leather, Rubber';
            curatedShoes.push(createRandomItem(0, {
                id: 'shoes-1',
                name: currentLanguage === 'tr' ? 'Dididos Spor Ayakkabı' : 'Dididos Sneakers',
                type: clothingTypes.BRAND_NEW,
                emoji: '👟',
                image: 'assets/images/shoes/shoes1.png',
                price: 275, // Sabit fiyat
                condition: currentLanguage === 'tr' ? 'Sıfır' : 'Brand New',
                material: shoes1Material,
                brand: 'Dididos',
                previewTransform: { x: -102.4, y: 59, width: 405, height: 280 },
                environmentalImpact: { water: 100, co2: 15, energy: 21 }
            }));

            // Shoes 1 Blue = Dididos Ayakkabı Mavi Sıfır (%50 geri dönüştürülmüş kauçuk, %50 suni deri) - Az pahalı marka, geri dönüşüm
            const shoes1BlueMaterial = currentLanguage === 'tr' ? '%50 Geri Dön. Kauçuk, %50 Suni Deri' : '50% Recycled Rubber, 50% Synthetic Leather';
            curatedShoes.push(createRandomItem(1, {
                id: 'shoes-1-blue',
                name: currentLanguage === 'tr' ? 'Dididos Spor Ayakkabı Mavi' : 'Dididos Sneakers Blue',
                type: clothingTypes.BRAND_NEW,
                emoji: '👟',
                image: 'assets/images/shoes/shoes1blue.png',
                price: 300, // Sabit fiyat
                condition: currentLanguage === 'tr' ? 'Sıfır' : 'Brand New',
                material: shoes1BlueMaterial,
                brand: 'Dididos',
                previewTransform: { x: -102.4, y: 59, width: 405, height: 280 },
                environmentalImpact: { water: 0, co2: 0.8, energy: 1 }
            }));

            // Shoes 1 Green = Dididos Ayakkabı Yeşil (suni deri, kauçuk) - Az pahalı marka
            curatedShoes.push(createRandomItem(2, {
                id: 'shoes-1-green',
                name: currentLanguage === 'tr' ? 'Dididos Spor Ayakkabı Yeşil' : 'Dididos Sneakers Green',
                type: clothingTypes.BRAND_NEW,
                emoji: '👟',
                image: 'assets/images/shoes/shoes1green.png',
                price: 320, // Sabit fiyat
                condition: currentLanguage === 'tr' ? 'Sıfır' : 'Brand New',
                material: shoes1Material,
                brand: 'Dididos',
                previewTransform: { x: -102.4, y: 59, width: 405, height: 280 },
                environmentalImpact: { water: 100, co2: 15, energy: 21 }
            }));

            // Shoes 2 Black = NINE EAST Ayakkabı (%100 deri) - Pahalı marka, premium malzeme (deri)
            const shoes2BlackMaterial = currentLanguage === 'tr' ? '%100 Deri' : '100% Leather';
            curatedShoes.push(createRandomItem(3, {
                id: 'shoes-2-black',
                name: currentLanguage === 'tr' ? 'NINE EAST Ayakkabı Siyah' : 'NINE EAST Shoes Black',
                type: clothingTypes.BRAND_NEW,
                emoji: '👞',
                image: 'assets/images/shoes/shoes2black.png',
                price: getRealisticPrice('shoes', 'NINE EAST', shoes2BlackMaterial, false, false),
                condition: currentLanguage === 'tr' ? 'Sıfır' : 'Brand New',
                material: shoes2BlackMaterial,
                brand: 'NINE EAST',
                previewTransform: { x: -102.4, y: 59, width: 405, height: 280 },
                environmentalImpact: { water: 8450, co2: 48, energy: 35 }
            }));

            // Shoes 2 Brown = NINE EAST Ayakkabı Kahverengi (suni deri) - Pahalı marka
            const shoes2BrownMaterial = currentLanguage === 'tr' ? 'Suni Deri' : 'Synthetic Leather';
            curatedShoes.push(createRandomItem(4, {
                id: 'shoes-2-brown',
                name: currentLanguage === 'tr' ? 'NINE EAST Ayakkabı Kahve' : 'NINE EAST Shoes Brown',
                type: clothingTypes.BRAND_NEW,
                emoji: '👞',
                image: 'assets/images/shoes/shoes2brown.png',
                price: 300, // Sabit fiyat
                condition: currentLanguage === 'tr' ? 'Sıfır' : 'Brand New',
                material: shoes2BrownMaterial,
                brand: 'NINE EAST',
                previewTransform: { x: -102.4, y: 59, width: 405, height: 280 },
                environmentalImpact: { water: 8450, co2: 48, energy: 35 }
            }));

            // Shoes 2 Maroon = Ertuğrul Kundura Ayakkabı Sıfır (%100 deri) - Pahalı marka, premium malzeme (deri)
            curatedShoes.push(createRandomItem(5, {
                id: 'shoes-2-maroon',
                name: currentLanguage === 'tr' ? 'Ertuğrul Kundura Ayakkabı' : 'Ertuğrul Kundura Shoes',
                type: clothingTypes.BRAND_NEW,
                emoji: '👞',
                image: 'assets/images/shoes/shoes2maroon.png',
                price: getRealisticPrice('shoes', 'Ertuğrul Kundura', shoes2BlackMaterial, false, false),
                condition: currentLanguage === 'tr' ? 'Sıfır' : 'Brand New',
                material: shoes2BlackMaterial,
                brand: 'Ertuğrul Kundura',
                previewTransform: { x: -102.4, y: 59, width: 405, height: 280 },
                environmentalImpact: { water: 8450, co2: 48, energy: 35 }
            }));

            items[category] = curatedShoes;
            return;
        }
    });

    return items;
}

let clothingData = null;

// DOM Elements
const screens = {
    languageScreen: document.getElementById('languageScreen'),
    homepage: document.getElementById('homepage'),
    gameScreen: document.getElementById('gameScreen'),
    scoreScreen: document.getElementById('scoreScreen')
};

const buttons = {
    start: document.getElementById('startBtn'),
    finish: document.getElementById('finishBtn'),
    playAgain: document.getElementById('playAgainBtn'),
    prev: document.querySelector('.prev-btn'),
    next: document.querySelector('.next-btn'),
    select: document.querySelector('.select-btn')
};

const categoryButtons = document.querySelectorAll('.category-btn');
const scoreSection = document.querySelector('.score-section');
const impactSection = document.querySelector('.impact-section');
const itemDisplay = {
    placeholder: document.querySelector('.item-placeholder'),
    badge: document.querySelector('.item-badge'),
    name: document.querySelector('.item-name'),
    details: {
        price: document.querySelector('[data-detail="price"]'),
        condition: document.querySelector('[data-detail="condition"]'),
        material: document.querySelector('[data-detail="material"]'),
        brand: document.querySelector('[data-detail="brand"]')
    }
};

// Screen Navigation
function showScreen(screenName) {
    Object.values(screens).forEach(screen => {
        if (screen) {
            screen.classList.remove('active');
        }
    });
    
    if (screens[screenName]) {
        screens[screenName].classList.add('active');
    } else {
        console.error(`Screen ${screenName} not found!`);
    }
}

// Badge güncelleme fonksiyonu
function updateItemBadge(item) {
    if (!itemDisplay.badge) return;
    
    if (item.type === clothingTypes.BRAND_NEW) {
        itemDisplay.badge.textContent = '🏷️';
        itemDisplay.badge.style.display = 'flex';
    } else if (item.type === clothingTypes.SECONDHAND) {
        itemDisplay.badge.textContent = '2️⃣';
        itemDisplay.badge.style.display = 'flex';
    } else if (item.type === clothingTypes.ECO_FRIENDLY) {
        itemDisplay.badge.textContent = '♻️';
        itemDisplay.badge.style.display = 'flex';
    } else {
        itemDisplay.badge.style.display = 'none';
    }
}

// Update Clothing Display
function updateClothingDisplay() {
    try {
        // Validate data exists
        if (!clothingData || !clothingData[gameState.currentCategory]) {
            console.error('Clothing data not found for category:', gameState.currentCategory);
            return;
        }
        
        const items = clothingData[gameState.currentCategory];
        if (!items || items.length === 0) {
            console.error('No items found for category:', gameState.currentCategory);
            return;
        }
        
        const currentItem = items[gameState.currentIndex];
        if (!currentItem) {
            console.error('Current item not found at index:', gameState.currentIndex);
            return;
        }

        // Badge'i güncelle
        updateItemBadge(currentItem);

    if (currentItem.image && currentItem.image !== null) {
        // Kategori bazlı class ekleme (top, bottom, shoes için ayrı stiller)
        const categoryClass = `item-image item-image-${gameState.currentCategory}`;
        const existingBadge = itemDisplay.placeholder.querySelector('.item-badge');
        const badgeHTML = existingBadge ? existingBadge.outerHTML : '<span class="item-badge"></span>';
        itemDisplay.placeholder.innerHTML = `<img src="${currentItem.image}" alt="${currentItem.name}" class="${categoryClass}" onerror="console.error('Image load error:', this.src)">${badgeHTML}`;
        itemDisplay.placeholder.classList.add('has-image');
        
        // Badge referansını yeniden al ve güncelle
        itemDisplay.badge = itemDisplay.placeholder.querySelector('.item-badge');
        updateItemBadge(currentItem);
    } else {
        const existingBadge = itemDisplay.placeholder.querySelector('.item-badge');
        const badgeHTML = existingBadge ? existingBadge.outerHTML : '<span class="item-badge"></span>';
        itemDisplay.placeholder.innerHTML = `${badgeHTML}${currentItem.emoji || ''}`;
        itemDisplay.placeholder.classList.remove('has-image');
        
        // Badge referansını yeniden al ve güncelle
        itemDisplay.badge = itemDisplay.placeholder.querySelector('.item-badge');
        updateItemBadge(currentItem);
    }
        // Validate display elements exist
        if (!itemDisplay.placeholder || !itemDisplay.name) {
            console.error('Required display elements not found');
            return;
        }

        itemDisplay.name.textContent = currentItem.name;
        if (itemDisplay.details) {
            if (itemDisplay.details.price) {
                itemDisplay.details.price.textContent = formatPrice(currentItem.price);
            }
            if (itemDisplay.details.condition) {
                itemDisplay.details.condition.textContent = currentItem.condition || '-';
            }
            if (itemDisplay.details.material) {
                itemDisplay.details.material.textContent = currentItem.material || '-';
            }
            if (itemDisplay.details.brand) {
                itemDisplay.details.brand.textContent = currentItem.brand || '-';
            }
        }

        // Update navigation buttons
        if (buttons.prev) buttons.prev.disabled = gameState.currentIndex === 0;
        if (buttons.next) buttons.next.disabled = gameState.currentIndex === items.length - 1;

        // Update select button state
        if (buttons.select) {
            const isSelected = gameState.selectedItems[gameState.currentCategory]?.id === currentItem.id;
            buttons.select.textContent = isSelected ? translations[currentLanguage].selected : translations[currentLanguage].select;
            buttons.select.classList.toggle('selected', isSelected);
        }

        // Update category button to show selection
        updateCategoryButtons();
    } catch (error) {
        console.error('Error in updateClothingDisplay:', error);
        throw error;
    }
}

// Update Category Buttons
function updateCategoryButtons() {
    categoryButtons.forEach(btn => {
        const category = btn.dataset.category;
        const isActive = category === gameState.currentCategory;
        const hasSelection = gameState.selectedItems[category] !== null;

        btn.classList.toggle('active', isActive);
        btn.classList.toggle('selected', hasSelection);
    });
}

// Particle Effect Generator
function createParticles(x, y, color = '#f88cac') {
    for (let i = 0; i < 8; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = x + 'px';
        particle.style.top = y + 'px';
        particle.style.width = '10px';
        particle.style.height = '10px';
        particle.style.background = color;
        particle.style.borderRadius = '50%';

        const angle = (Math.PI * 2 * i) / 8;
        const velocity = 50 + Math.random() * 50;
        const dx = Math.cos(angle) * velocity;
        const dy = Math.sin(angle) * velocity;

        particle.style.setProperty('--dx', dx + 'px');
        particle.style.setProperty('--dy', dy + 'px');

        document.body.appendChild(particle);

        setTimeout(() => particle.remove(), 1500);
    }
}

// Update Character Preview
function updateCharacterPreview() {
    const selectedItemsDisplay = {
        outerwear: document.getElementById('selected-outerwear'),
        bottoms: document.getElementById('selected-bottoms'),
        shoes: document.getElementById('selected-shoes')
    };

    Object.keys(gameState.selectedItems).forEach(category => {
        const item = gameState.selectedItems[category];
        const displayElement = selectedItemsDisplay[category];

        if (item) {
            displayElement.textContent = `${item.emoji} ${item.name}`;
            // Add animation
            displayElement.classList.add('clothing-change-animation');
            setTimeout(() => displayElement.classList.remove('clothing-change-animation'), 400);
        } else {
            displayElement.textContent = translations[currentLanguage].none;
        }
    });

    // Update preview character clothing layers
    updatePreviewCharacterVisuals();
}

// Update Preview Character Visuals
function updatePreviewCharacterVisuals() {
    const previewLayers = {
        outerwear: document.getElementById('preview-outerwear'),
        bottoms: document.getElementById('preview-bottoms'),
        shoes: document.getElementById('preview-shoes')
    };

    // Clear all layers
    Object.values(previewLayers).forEach(layer => {
        layer.innerHTML = '';
    });

    // Add visual indicators for selected items
    if (gameState.selectedItems.outerwear) {
        const item = gameState.selectedItems.outerwear;
        if (item.image) {
            const transform = item.previewTransform || { x: 60, y: 80, width: 80, height: 120 };
            previewLayers.outerwear.innerHTML = `
                <image href="${item.image}"
                    x="${transform.x}"
                    y="${transform.y}"
                    width="${transform.width}"
                    height="${transform.height}"
                    preserveAspectRatio="xMidYMid meet"
                    class="preview-item-image" />
            `;
        } else {
            const color = getColorForType(item.type);
            // Add outerwear on torso
            previewLayers.outerwear.innerHTML = `
                <rect x="70" y="90" width="60" height="80" fill="${color}" opacity="0.7" rx="5"/>
                <text x="100" y="140" text-anchor="middle" font-size="24">${item.emoji}</text>
            `;
        }
    }

    if (gameState.selectedItems.bottoms) {
        const item = gameState.selectedItems.bottoms;
        if (item.image) {
            // Görsel varsa göster
            const transform = item.previewTransform || { x: 30, y: 180, width: 140, height: 180 };
            previewLayers.bottoms.innerHTML = `
                <image href="${item.image}"
                    x="${transform.x}"
                    y="${transform.y}"
                    width="${transform.width}"
                    height="${transform.height}"
                    preserveAspectRatio="xMidYMid meet"
                    class="preview-item-image" />
            `;
        } else {
            // Görsel yoksa emoji göster
        const color = getColorForType(item.type);
        previewLayers.bottoms.innerHTML = `
            <polygon points="70,200 75,280 95,280 100,200" fill="${color}" opacity="0.7"/>
            <polygon points="100,200 105,280 125,280 130,200" fill="${color}" opacity="0.7"/>
            <text x="100" y="240" text-anchor="middle" font-size="24">${item.emoji}</text>
        `;
        }
    }

    if (gameState.selectedItems.shoes) {
        const item = gameState.selectedItems.shoes;
        if (item.image) {
            // Görsel varsa göster
            const transform = item.previewTransform || { x: 55, y: 320, width: 90, height: 60 };
            previewLayers.shoes.innerHTML = `
                <image href="${item.image}"
                    x="${transform.x}"
                    y="${transform.y}"
                    width="${transform.width}"
                    height="${transform.height}"
                    preserveAspectRatio="xMidYMid meet"
                    class="preview-item-image" />
            `;
        } else {
            // Görsel yoksa emoji göster
        const color = getColorForType(item.type);
        previewLayers.shoes.innerHTML = `
            <ellipse cx="75" cy="285" rx="15" ry="8" fill="${color}" opacity="0.8"/>
            <ellipse cx="125" cy="285" rx="15" ry="8" fill="${color}" opacity="0.8"/>
            <text x="100" y="295" text-anchor="middle" font-size="20">${item.emoji}</text>
        `;
        }
    }
}

// Get color based on clothing type
function getColorForType(type) {
    if (type === clothingTypes.ECO_FRIENDLY) return '#f88cac';
    if (type === clothingTypes.SECONDHAND) return '#ff9fd3';
    if (type === clothingTypes.BRAND_NEW) return '#5c93c9';
    return '#8a7da0';
}

// Calculate Environmental Impact
function calculateImpact() {
    let totalWaterUsed = 0;
    let totalCO2Emitted = 0;
    let totalEnergyUsed = 0;

    // Her seçilen kıyafetin çevresel etkisini topla
    Object.values(gameState.selectedItems).forEach(item => {
        if (item && item.environmentalImpact) {
            totalWaterUsed += item.environmentalImpact.water || 0;
            totalCO2Emitted += item.environmentalImpact.co2 || 0;
            totalEnergyUsed += item.environmentalImpact.energy || 0;
        }
    });

    // Toplam çevresel etki hesapla (düşük = iyi)
    // Formül: (su/1000) + (co2*2) + (enerji/2)
    const totalImpact = (totalWaterUsed / 1000) + (totalCO2Emitted * 2) + (totalEnergyUsed / 2);

    // Eko puan hesapla (A+ dan F ye)
    let ecoRating;
    if (totalImpact < 20) ecoRating = 'A+';
    else if (totalImpact < 40) ecoRating = 'A';
    else if (totalImpact < 60) ecoRating = 'B';
    else if (totalImpact < 80) ecoRating = 'C';
    else if (totalImpact < 100) ecoRating = 'D';
    else ecoRating = 'F';

    // Mesaj belirle
    let message;
    if (totalImpact < 20) {
        message = translations[currentLanguage].impactMessageA;
    } else if (totalImpact < 40) {
        message = translations[currentLanguage].impactMessageB;
    } else if (totalImpact < 60) {
        message = translations[currentLanguage].impactMessageC;
    } else if (totalImpact < 80) {
        message = translations[currentLanguage].impactMessageD;
    } else {
        message = translations[currentLanguage].impactMessageF;
    }

    return {
        waterUsed: Math.round(totalWaterUsed),
        co2Emitted: totalCO2Emitted.toFixed(1),
        energyUsed: Math.round(totalEnergyUsed),
        ecoRating: ecoRating,
        message: message,
        totalImpact: totalImpact.toFixed(1)
    };
}

// Display Results
function displayResults() {
    const scoreActions = document.querySelector('.score-actions');
    if (scoreActions) {
        scoreActions.classList.remove('active');
    }
    // Direkt impact screen'e geç
    if (scoreSection) scoreSection.classList.add('hidden');
    if (impactSection) impactSection.classList.remove('hidden');

    const impact = calculateImpact();
    
    // Google Sheets'e kaydet (arka planda çalışır)
    saveToGoogleSheets(impact);

            // Update impact data
    document.getElementById('waterUsed').textContent = impact.waterUsed.toLocaleString();
    document.getElementById('co2Emitted').textContent = impact.co2Emitted;
    document.getElementById('energyUsed').textContent = impact.energyUsed.toLocaleString();
            document.getElementById('ecoRating').textContent = impact.ecoRating;
            document.getElementById('impactText').textContent = impact.message;

            // Show random sustainability fact
            const facts = translations[currentLanguage].sustainabilityFacts;
            const randomFact = facts[Math.floor(Math.random() * facts.length)];
            const contextualTip = getImpactContextTip(impact);
            document.getElementById('sustainabilityFact').textContent = `${contextualTip} ${randomFact}`;

            // Show impact screen
            document.getElementById('impactScreen').classList.add('active');

            if (scoreActions) {
                scoreActions.classList.add('active');
            }
}

// Event Listeners
buttons.start.addEventListener('click', () => {
    try {
        // Fallback if clothingData is missing
        if (!clothingData) {
            console.warn('Clothing data missing on start, regenerating...');
            clothingData = generateClothingItems();
            translateUI();
        }
        
        initializeBudget();
        showScreen('gameScreen');
        updateClothingDisplay();
        updateCharacterPreview();
    } catch (error) {
        console.error('Error starting game:', error);
        alert('Oyun başlatılırken bir hata oluştu. Lütfen sayfayı yenileyin.\nHata: ' + error.message);
    }
});

categoryButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        gameState.currentCategory = btn.dataset.category;
        gameState.currentIndex = 0;
        updateClothingDisplay();
    });
});

buttons.prev.addEventListener('click', () => {
    if (gameState.currentIndex > 0) {
        gameState.currentIndex--;
        updateClothingDisplay();
    }
});

buttons.next.addEventListener('click', () => {
    const items = clothingData[gameState.currentCategory];
    if (gameState.currentIndex < items.length - 1) {
        gameState.currentIndex++;
        updateClothingDisplay();
    }
});

buttons.select.addEventListener('click', () => {
    const items = clothingData[gameState.currentCategory];
    const currentItem = items[gameState.currentIndex];
    const currentSpend = calculateCurrentSpend();
    const previousItem = gameState.selectedItems[gameState.currentCategory];
    const adjustedSpend = currentSpend - (previousItem?.price || 0) + currentItem.price;

    if (budgetState.total && adjustedSpend > budgetState.total) {
        alert(translations[currentLanguage].budgetExceeded);
        return;
    }

    // Save to history for undo
    saveToHistory();

    gameState.selectedItems[gameState.currentCategory] = currentItem;

    // Add particle effect at button location
    const rect = buttons.select.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    const color = getColorForType(currentItem.type);
    createParticles(x, y, color);

    // Add pulse effect to button
    buttons.select.classList.add('pulse-effect');
    setTimeout(() => buttons.select.classList.remove('pulse-effect'), 600);

    updateClothingDisplay();
    updateCharacterPreview();
    updateBudgetUI();
});

buttons.finish.addEventListener('click', () => {
    // Check if all categories have selections
    const allSelected = Object.values(gameState.selectedItems).every(item => item !== null);

    if (!allSelected) {
        alert(translations[currentLanguage].selectAllCategories);
        return;
    }

    const totalSpend = calculateCurrentSpend();
    if (budgetState.total && totalSpend > budgetState.total) {
        alert(translations[currentLanguage].budgetExceeded);
        return;
    }

    showScreen('scoreScreen');
    displayResults();
});

buttons.playAgain.addEventListener('click', () => {
    // Reset game state
    gameState.currentCategory = 'outerwear';
    gameState.currentIndex = 0;
    gameState.selectedItems = {
        outerwear: null,
        bottoms: null,
        shoes: null
    };
    budgetState.total = 1000;

    // Reset score screen
    document.getElementById('impactScreen').classList.remove('active');

    const scoreActions = document.querySelector('.score-actions');
    if (scoreActions) {
        scoreActions.classList.remove('active');
    }
    if (scoreSection) scoreSection.classList.add('hidden');
    if (impactSection) impactSection.classList.remove('hidden');

    // Return to language screen to allow language change
    showScreen('languageScreen');
    updateBudgetUI();
});


// Language Selection
const languageButtons = document.querySelectorAll('.language-btn');
languageButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        currentLanguage = btn.dataset.lang;
        clothingData = generateClothingItems();
        translateUI();
        updateBudgetUI();
        showScreen('homepage');
    });
});

// Save state to history (for undo)
function saveToHistory() {
    const state = JSON.parse(JSON.stringify(gameState.selectedItems));
    gameState.history.push(state);
    // Keep only last 10 states
    if (gameState.history.length > 10) {
        gameState.history.shift();
    }
}

// Undo
const undoBtn = document.getElementById('undoBtn');
if (undoBtn) {
    undoBtn.addEventListener('click', () => {
        if (gameState.history.length === 0) {
            alert(translations[currentLanguage].noHistory);
            return;
        }

        const previousState = gameState.history.pop();
        gameState.selectedItems = previousState;

        updateCharacterPreview();
        updateCategoryButtons();
        updateClothingDisplay();
        updateBudgetUI();
    });
}

// Reset Outfit
const resetOutfitBtn = document.getElementById('resetOutfitBtn');
if (resetOutfitBtn) {
    resetOutfitBtn.addEventListener('click', () => {
        saveToHistory();

        Object.keys(gameState.selectedItems).forEach(category => {
            gameState.selectedItems[category] = null;
        });

        updateCharacterPreview();
        updateCategoryButtons();
        updateClothingDisplay();
        updateBudgetUI();
    });
}

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (screens.gameScreen.classList.contains('active')) {
        if (e.key === 'ArrowLeft' && !buttons.prev.disabled) {
            buttons.prev.click();
        } else if (e.key === 'ArrowRight' && !buttons.next.disabled) {
            buttons.next.click();
        } else if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            buttons.select.click();
        }
    }
});