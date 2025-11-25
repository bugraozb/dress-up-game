// Translations
const translations = {
    en: {
        welcomeTitle: "Welcome to Dress Up Gaame",
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
        welcomeTitle: "Dress Up Gaame oyununa hoş geldiniz",
        welcomeText: "Karakterinizi istediğiniz gibi giydirin!",
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

const SESSION_STORAGE_KEY = 'dressUpPilotHistory';
const MAX_HISTORY_ENTRIES = 20;

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

function loadSessionHistory() {
    try {
        const stored = localStorage.getItem(SESSION_STORAGE_KEY);
        return stored ? JSON.parse(stored) : [];
    } catch (error) {
        console.warn('Unable to load session history', error);
        return [];
    }
}

function saveSessionHistory(history) {
    try {
        localStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(history));
    } catch (error) {
        console.warn('Unable to save session history', error);
    }
}

function recordSession(impact) {
    const history = loadSessionHistory();
    const entry = {
        timestamp: new Date().toISOString(),
        language: currentLanguage,
        budget: budgetState.total,
        spend: calculateCurrentSpend(),
        ecoRating: impact.ecoRating,
        waterUsed: impact.waterUsed,
        co2Emitted: impact.co2Emitted,
        energyUsed: impact.energyUsed,
        items: Object.entries(gameState.selectedItems).map(([category, item]) => ({
            category,
            name: item?.name || '',
            price: item?.price || 0,
            emoji: item?.emoji || ''
        }))
    };

    history.push(entry);
    while (history.length > MAX_HISTORY_ENTRIES) {
        history.shift();
    }

    saveSessionHistory(history);
    renderSessionHistory(history);
}

function renderSessionHistory(existingHistory = null) {
    const historyList = historyElements.list;
    if (!historyList) return;

    const history = existingHistory ?? loadSessionHistory();
    historyList.innerHTML = '';

    if (!history || history.length === 0) {
        const emptyItem = document.createElement('li');
        emptyItem.className = 'history-empty';
        emptyItem.textContent = translations[currentLanguage].emptyHistory;
        historyList.appendChild(emptyItem);
        return;
    }

    const latest = history.slice().reverse().slice(0, 3);
    latest.forEach(entry => {
        const listItem = document.createElement('li');
        listItem.className = 'history-item';

        const date = new Date(entry.timestamp).toLocaleString(getCurrentLocale(), {
            dateStyle: 'medium',
            timeStyle: 'short'
        });

        const outfitSummary = entry.items.map(item => `${item.emoji} ${item.name}`).join(' • ');

        listItem.innerHTML = `
            <div class="history-row">
                <span class="history-date">${date}</span>
                <span class="history-eco">ECO ${entry.ecoRating}</span>
            </div>
            <div class="history-outfit">${outfitSummary}</div>
            <div class="history-impact">
                💧 ${entry.waterUsed?.toLocaleString() || 0} L | 🌬️ ${entry.co2Emitted || 0} kg CO2 | ⚡ ${entry.energyUsed || 0} kWh
            </div>
        `;

        historyList.appendChild(listItem);
    });
}

function buildHistoryCSV(history) {
    const headers = [
        'timestamp',
        'language',
        'budget',
        'spend',
        'ecoRating',
        'waterUsed',
        'co2Emitted',
        'energyUsed',
        'items'
    ];

    const rows = history.map(entry => {
        const outfitSummary = entry.items.map(item => `${item.category}:${item.name}(${item.price})`).join(' | ');
        const values = [
            entry.timestamp,
            entry.language,
            entry.budget,
            entry.spend,
            entry.ecoRating,
            entry.waterUsed,
            entry.co2Emitted,
            entry.energyUsed,
            outfitSummary
        ];

        return values
            .map(value => `"${String(value ?? '').replace(/"/g, '""')}"`)
            .join(',');
    });

    return [headers.join(','), ...rows].join('\n');
}

function downloadCSV(content, filename) {
    const blob = new Blob([content], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', filename);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
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

            // Top 1 = Oxxa Kazak (%50 pamuk, %40 poliamid, %10 alpaka)
            curatedOuterwear.push(createRandomItem(0, {
                id: 'outerwear-top1',
                name: currentLanguage === 'tr' ? 'Oxxa Kazak' : 'Oxxa Sweater',
                type: clothingTypes.BRAND_NEW,
                emoji: '👚',
                image: 'assets/images/tops/top1.png',
                price: Math.round(averageOuterwearPrice * 1.2),
                condition: currentLanguage === 'tr' ? 'Sıfır' : 'Brand New',
                material: currentLanguage === 'tr' ? '%50 Pamuk, %40 Poliamid, %10 Alpaka' : '50% Cotton, 40% Polyamide, 10% Alpaca',
                brand: 'Oxxa',
                previewTransform: { x: 0, y: 63, width: 200, height: 270 },
                environmentalImpact: { water: 770, co2: 11.5, energy: 18 }
            }));

            // Top 2 = MMF Bluz (%65 pamuk, %35 geri dönüştürülmüş polyester)
            curatedOuterwear.push(createRandomItem(1, {
                id: 'outerwear-top2',
                name: currentLanguage === 'tr' ? 'MMF Bluz' : 'MMF Blouse',
                type: clothingTypes.ECO_FRIENDLY,
                emoji: '👕',
                image: 'assets/images/tops/top2.png',
                price: Math.round(averageOuterwearPrice * 0.9),
                condition: currentLanguage === 'tr' ? 'Sıfır' : 'Brand New',
                material: currentLanguage === 'tr' ? '%65 Pamuk, %35 Geri Dön. Polyester' : '65% Cotton, 35% Recycled Polyester',
                brand: 'MMF',
                previewTransform: { x: 0, y: 63, width: 200, height: 270 },
                environmentalImpact: { water: 525, co2: 5.75, energy: 8 }
            }));

            // Top 3 = Zera Gömlek (%100 pamuk)
            curatedOuterwear.push(createRandomItem(2, {
                id: 'outerwear-top3',
                name: currentLanguage === 'tr' ? 'Zera Gömlek' : 'Zera Shirt',
                type: clothingTypes.BRAND_NEW,
                emoji: '👔',
                image: 'assets/images/tops/top3.png',
                price: Math.round(averageOuterwearPrice * 1.1),
                condition: currentLanguage === 'tr' ? 'Sıfır' : 'Brand New',
                material: currentLanguage === 'tr' ? '%100 Pamuk' : '100% Cotton',
                brand: 'Zera',
                previewTransform: { x: 0, y: 63, width: 200, height: 270 },
                environmentalImpact: { water: 850, co2: 10, energy: 12 }
            }));

            // Top 3 Blue = Bayman Gömlek (%95 ipek, %5 elastan)
            curatedOuterwear.push(createRandomItem(3, {
                id: 'outerwear-top3-blue',
                name: currentLanguage === 'tr' ? 'Bayman Gömlek' : 'Bayman Shirt',
                type: clothingTypes.BRAND_NEW,
                emoji: '👔',
                image: 'assets/images/tops/top3blue.png',
                price: Math.round(averageOuterwearPrice * 1.8),
                condition: currentLanguage === 'tr' ? 'Sıfır' : 'Brand New',
                material: currentLanguage === 'tr' ? '%95 İpek, %5 Elastan' : '95% Silk, 5% Elastane',
                brand: 'Bayman',
                previewTransform: { x: 0, y: 63, width: 200, height: 270 },
                environmentalImpact: { water: 4150, co2: 15, energy: 18 }
            }));

            // Top 1 Gray = H&W Kazak (%73 akrilik, %25 polyester, %2 elastan)
            curatedOuterwear.push(createRandomItem(4, {
                id: 'outerwear-top1-gray',
                name: currentLanguage === 'tr' ? 'H&W Kazak' : 'H&W Sweater',
                type: clothingTypes.BRAND_NEW,
                emoji: '👚',
                image: 'assets/images/tops/top1gray.png',
                price: Math.round(averageOuterwearPrice * 0.7),
                condition: currentLanguage === 'tr' ? 'Sıfır' : 'Brand New',
                material: currentLanguage === 'tr' ? '%73 Akrilik, %25 Polyester, %2 Elastan' : '73% Acrylic, 25% Polyester, 2% Elastane',
                brand: 'H&W',
                previewTransform: { x: 0, y: 63, width: 200, height: 270 },
                environmentalImpact: { water: 100, co2: 14, energy: 23 }
            }));

            // Top 2 Yellow = H&W Bluz (%92 viskoz, %8 elastan)
            curatedOuterwear.push(createRandomItem(5, {
                id: 'outerwear-top2-yellow',
                name: currentLanguage === 'tr' ? 'H&W Bluz' : 'H&W Blouse',
                type: clothingTypes.BRAND_NEW,
                emoji: '👕',
                image: 'assets/images/tops/top2yellow.png',
                price: Math.round(averageOuterwearPrice * 0.8),
                condition: currentLanguage === 'tr' ? 'Sıfır' : 'Brand New',
                material: currentLanguage === 'tr' ? '%92 Viskoz, %8 Elastan' : '92% Viscose, 8% Elastane',
                brand: 'H&W',
                previewTransform: { x: 0, y: 63, width: 200, height: 270 },
                environmentalImpact: { water: 750, co2: 8.5, energy: 11 }
            }));

            // Top 2 Yellow 2.El = H&W Bluz İkinci El (%92 viskoz, %8 elastan)
            curatedOuterwear.push(createRandomItem(6, {
                id: 'outerwear-top2-yellow-2el',
                name: currentLanguage === 'tr' ? 'H&W Bluz 2.El' : 'H&W Blouse 2nd Hand',
                type: clothingTypes.SECONDHAND,
                emoji: '👕',
                image: 'assets/images/tops/top2yellow_2el.png',
                price: Math.round(averageOuterwearPrice * 0.4),
                condition: currentLanguage === 'tr' ? 'İyi Durumda' : 'Good Condition',
                material: currentLanguage === 'tr' ? '%92 Viskoz, %8 Elastan' : '92% Viscose, 8% Elastane',
                brand: 'H&W',
                previewTransform: { x: 0, y: 63, width: 200, height: 270 },
                environmentalImpact: { water: 0, co2: 0.75, energy: 1 }
            }));

            items[category] = curatedOuterwear;
            return;
        }

        if (category === 'bottoms') {
            const curatedBottoms = [];
            const averageBottomsPrice = range
                ? Math.round(((range.min + range.max) / 2) / 10) * 10
                : 160;

            // Bottom 1 = TrendModa Etek (%94 polyester, %6 elastan)
            curatedBottoms.push(createRandomItem(0, {
                id: 'bottoms-bottom1',
                name: currentLanguage === 'tr' ? 'TrendModa Etek' : 'TrendModa Skirt',
                type: clothingTypes.BRAND_NEW,
                emoji: '👗',
                image: 'assets/images/bottoms/bottom1.png',
                price: Math.round(averageBottomsPrice * 0.7),
                condition: currentLanguage === 'tr' ? 'Sıfır' : 'Brand New',
                material: currentLanguage === 'tr' ? '%94 Polyester, %6 Elastan' : '94% Polyester, 6% Elastane',
                brand: 'TrendModa',
                previewTransform: { x: 0, y: 63, width: 200, height: 270 },
                environmentalImpact: { water: 52, co2: 9, energy: 11 }
            }));

            // Bottom 2 = Miav Jean (%100 geri dönüştürülmüş polyester)
            curatedBottoms.push(createRandomItem(1, {
                id: 'bottoms-bottom2',
                name: currentLanguage === 'tr' ? 'Miav Jean' : 'Miav Jeans',
                type: clothingTypes.ECO_FRIENDLY,
                emoji: '👖',
                image: 'assets/images/bottoms/bottom2.png',
                price: Math.round(averageBottomsPrice * 1.1),
                condition: currentLanguage === 'tr' ? 'Sıfır' : 'Brand New',
                material: currentLanguage === 'tr' ? '%100 Geri Dön. Polyester' : '100% Recycled Polyester',
                brand: 'Miav',
                previewTransform: { x: 0, y: 63, width: 200, height: 270 },
                environmentalImpact: { water: 60, co2: 4.5, energy: 10 }
            }));

            // Bottom 1 Green = Closet Etek İkinci El (%94 polyester, %6 elastan)
            curatedBottoms.push(createRandomItem(2, {
                id: 'bottoms-bottom1-green',
                name: currentLanguage === 'tr' ? 'Closet Etek 2.El' : 'Closet Skirt 2nd Hand',
                type: clothingTypes.SECONDHAND,
                emoji: '👗',
                image: 'assets/images/bottoms/bottom1green.png',
                price: Math.round(averageBottomsPrice * 0.35),
                condition: currentLanguage === 'tr' ? 'İyi Durumda' : 'Good Condition',
                material: currentLanguage === 'tr' ? '%94 Polyester, %6 Elastan' : '94% Polyester, 6% Elastane',
                brand: 'Closet',
                previewTransform: { x: 0, y: 63, width: 200, height: 270 },
                environmentalImpact: { water: 25, co2: 0.6, energy: 1 }
            }));

            // Bottom 2 Brown = SHINE Jean (%90 pamuk, %6 polyester, %4 viskoz)
            curatedBottoms.push(createRandomItem(3, {
                id: 'bottoms-bottom2-brown',
                name: currentLanguage === 'tr' ? 'SHINE Jean' : 'SHINE Jeans',
                type: clothingTypes.BRAND_NEW,
                emoji: '👖',
                image: 'assets/images/bottoms/bottom2brown.png',
                price: Math.round(averageBottomsPrice * 0.5),
                condition: currentLanguage === 'tr' ? 'Sıfır' : 'Brand New',
                material: currentLanguage === 'tr' ? '%90 Pamuk, %6 Polyester, %4 Viskoz' : '90% Cotton, 6% Polyester, 4% Viscose',
                brand: 'SHINE',
                previewTransform: { x: 0, y: 63, width: 200, height: 270 },
                environmentalImpact: { water: 4000, co2: 18.5, energy: 21 }
            }));

            items[category] = curatedBottoms;
            return;
        }

        if (category === 'shoes') {
            const curatedShoes = [];
            const averageShoesPrice = range
                ? Math.round(((range.min + range.max) / 2) / 10) * 10
                : 140;

            // Shoes 1 = Dididos Ayakkabı (suni deri, kauçuk)
            curatedShoes.push(createRandomItem(0, {
                id: 'shoes-1',
                name: currentLanguage === 'tr' ? 'Dididos Spor Ayakkabı' : 'Dididos Sneakers',
                type: clothingTypes.BRAND_NEW,
                emoji: '👟',
                image: 'assets/images/shoes/shoes1.png',
                price: Math.round(averageShoesPrice * 1.2),
                condition: currentLanguage === 'tr' ? 'Sıfır' : 'Brand New',
                material: currentLanguage === 'tr' ? 'Suni Deri, Kauçuk' : 'Synthetic Leather, Rubber',
                brand: 'Dididos',
                previewTransform: { x: -102.4, y: 59, width: 405, height: 280 },
                environmentalImpact: { water: 100, co2: 15, energy: 21 }
            }));

            // Shoes 1 Blue = Dididos Ayakkabı Mavi İkinci El (suni deri, kauçuk)
            curatedShoes.push(createRandomItem(1, {
                id: 'shoes-1-blue',
                name: currentLanguage === 'tr' ? 'Dididos Spor Ayakkabı Mavi 2.El' : 'Dididos Sneakers Blue 2nd Hand',
                type: clothingTypes.SECONDHAND,
                emoji: '👟',
                image: 'assets/images/shoes/shoes1blue.png',
                price: Math.round(averageShoesPrice * 0.5),
                condition: currentLanguage === 'tr' ? 'İyi Durumda' : 'Good Condition',
                material: currentLanguage === 'tr' ? 'Suni Deri, Kauçuk' : 'Synthetic Leather, Rubber',
                brand: 'Dididos',
                previewTransform: { x: -102.4, y: 59, width: 405, height: 280 },
                environmentalImpact: { water: 0, co2: 0.8, energy: 1 }
            }));

            // Shoes 1 Green = Dididos Ayakkabı Yeşil (suni deri, kauçuk)
            curatedShoes.push(createRandomItem(2, {
                id: 'shoes-1-green',
                name: currentLanguage === 'tr' ? 'Dididos Spor Ayakkabı Yeşil' : 'Dididos Sneakers Green',
                type: clothingTypes.BRAND_NEW,
                emoji: '👟',
                image: 'assets/images/shoes/shoes1green.png',
                price: Math.round(averageShoesPrice * 1.2),
                condition: currentLanguage === 'tr' ? 'Sıfır' : 'Brand New',
                material: currentLanguage === 'tr' ? 'Suni Deri, Kauçuk' : 'Synthetic Leather, Rubber',
                brand: 'Dididos',
                previewTransform: { x: -102.4, y: 59, width: 405, height: 280 },
                environmentalImpact: { water: 100, co2: 15, energy: 21 }
            }));

            // Shoes 2 Black = NINE EAST Ayakkabı (%100 deri)
            curatedShoes.push(createRandomItem(3, {
                id: 'shoes-2-black',
                name: currentLanguage === 'tr' ? 'NINE EAST Ayakkabı Siyah' : 'NINE EAST Shoes Black',
                type: clothingTypes.BRAND_NEW,
                emoji: '👞',
                image: 'assets/images/shoes/shoes2black.png',
                price: Math.round(averageShoesPrice * 2.0),
                condition: currentLanguage === 'tr' ? 'Sıfır' : 'Brand New',
                material: currentLanguage === 'tr' ? '%100 Deri' : '100% Leather',
                brand: 'NINE EAST',
                previewTransform: { x: -102.4, y: 59, width: 405, height: 280 },
                environmentalImpact: { water: 8450, co2: 48, energy: 35 }
            }));

            // Shoes 2 Brown = NINE EAST Ayakkabı Kahverengi (%100 deri)
            curatedShoes.push(createRandomItem(4, {
                id: 'shoes-2-brown',
                name: currentLanguage === 'tr' ? 'NINE EAST Ayakkabı Kahve' : 'NINE EAST Shoes Brown',
                type: clothingTypes.BRAND_NEW,
                emoji: '👞',
                image: 'assets/images/shoes/shoes2brown.png',
                price: Math.round(averageShoesPrice * 2.0),
                condition: currentLanguage === 'tr' ? 'Sıfır' : 'Brand New',
                material: currentLanguage === 'tr' ? '%100 Deri' : '100% Leather',
                brand: 'NINE EAST',
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
    name: document.querySelector('.item-name'),
    details: {
        price: document.querySelector('[data-detail="price"]'),
        condition: document.querySelector('[data-detail="condition"]'),
        material: document.querySelector('[data-detail="material"]'),
        brand: document.querySelector('[data-detail="brand"]')
    }
};

const historyElements = {
    list: document.getElementById('sessionHistoryList'),
    exportButton: document.getElementById('exportHistoryBtn')
};

// Screen Navigation
function showScreen(screenName) {
    Object.values(screens).forEach(screen => screen.classList.remove('active'));
    screens[screenName].classList.add('active');
}

// Update Clothing Display
function updateClothingDisplay() {
    const items = clothingData[gameState.currentCategory];
    const currentItem = items[gameState.currentIndex];

    // Debug log - kıyafet bilgilerini konsola yazdır
    console.log('Current Item:', currentItem.name, 'Image:', currentItem.image);

    if (currentItem.image && currentItem.image !== null) {
        // Kategori bazlı class ekleme (top, bottom, shoes için ayrı stiller)
        const categoryClass = `item-image item-image-${gameState.currentCategory}`;
        itemDisplay.placeholder.innerHTML = `<img src="${currentItem.image}" alt="${currentItem.name}" class="${categoryClass}" onerror="console.error('Image load error:', this.src)">`;
        itemDisplay.placeholder.classList.add('has-image');
    } else {
        itemDisplay.placeholder.textContent = currentItem.emoji || '';
        itemDisplay.placeholder.classList.remove('has-image');
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
    buttons.prev.disabled = gameState.currentIndex === 0;
    buttons.next.disabled = gameState.currentIndex === items.length - 1;

    // Update select button state
    const isSelected = gameState.selectedItems[gameState.currentCategory]?.id === currentItem.id;
    buttons.select.textContent = isSelected ? translations[currentLanguage].selected : translations[currentLanguage].select;
    buttons.select.classList.toggle('selected', isSelected);

    // Update category button to show selection
    updateCategoryButtons();
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
    if (scoreSection) scoreSection.classList.remove('hidden');
    if (impactSection) impactSection.classList.add('hidden');

    const impact = calculateImpact();
    recordSession(impact);

    // Show initial score with random number
    const randomScore = Math.floor(Math.random() * 900000) + 100000;
    document.querySelector('.score-number').textContent = randomScore.toString().split('').join(' ');
    document.getElementById('initialScore').classList.add('active');

    // After 2 seconds, transition to impact screen
    setTimeout(() => {
        document.getElementById('initialScore').classList.remove('active');

        setTimeout(() => {
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
            if (scoreSection) scoreSection.classList.add('hidden');
            if (impactSection) impactSection.classList.remove('hidden');

            if (scoreActions) {
                scoreActions.classList.add('active');
            }
        }, 300);
    }, 2000);
}

// Event Listeners
buttons.start.addEventListener('click', () => {
    initializeBudget();
    showScreen('gameScreen');
    updateClothingDisplay();
    updateCharacterPreview();
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
    document.getElementById('initialScore').classList.remove('active');
    document.getElementById('impactScreen').classList.remove('active');

    const scoreActions = document.querySelector('.score-actions');
    if (scoreActions) {
        scoreActions.classList.remove('active');
    }
    if (scoreSection) scoreSection.classList.remove('hidden');
    if (impactSection) impactSection.classList.add('hidden');

    // Return to language screen to allow language change
    showScreen('languageScreen');
    updateBudgetUI();
});

if (historyElements.exportButton) {
    historyElements.exportButton.addEventListener('click', () => {
        const history = loadSessionHistory();
        if (!history.length) {
            alert(translations[currentLanguage].emptyHistory);
            return;
        }
        const csvContent = buildHistoryCSV(history);
        downloadCSV(csvContent, `dressup-history-${Date.now()}.csv`);
    });
}

// Language Selection
const languageButtons = document.querySelectorAll('.language-btn');
languageButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        currentLanguage = btn.dataset.lang;
        clothingData = generateClothingItems();
        translateUI();
        updateBudgetUI();
        renderSessionHistory();
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

renderSessionHistory();