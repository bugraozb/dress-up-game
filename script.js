// Translations
const translations = {
    en: {
        welcomeTitle: "Welcome to Eco Fashion Game",
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
        waterSaved: "Liters of water saved",
        co2Reduced: "kg of CO2 emissions prevented",
        wasteReduced: "kg of textile waste avoided",
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
        priceLabel: "Price:",
        conditionLabel: "Condition:",
        materialLabel: "Material:",
        brandLabel: "Brand:",
        currencySymbol: "$",
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
            "EcoWear",
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
        impactMessageA: "Outstanding! You made the most sustainable choices possible. Your outfit saves the planet while keeping you stylish!",
        impactMessageB: "Excellent work! Your fashion choices significantly reduce environmental impact. Keep up the great sustainable shopping!",
        impactMessageC: "Good job! You made some eco-conscious decisions. Every sustainable choice makes a difference for our planet.",
        impactMessageD: "Not bad! Consider choosing more secondhand or eco-friendly items next time to increase your positive impact.",
        impactMessageF: "There is room for improvement. Try choosing secondhand or eco-friendly items to reduce your environmental footprint!",
        accessoryNames: ['Hat', 'Scarf', 'Belt', 'Bag', 'Sunglasses', 'Watch', 'Bracelet', 'Necklace', 'Earrings', 'Ring'],
        outerwearNames: ['Jacket', 'Coat', 'Hoodie', 'Cardigan', 'Blazer', 'Sweater', 'Vest', 'Windbreaker', 'Parka', 'Poncho'],
        bottomsNames: ['Jeans', 'Pants', 'Shorts', 'Skirt', 'Leggings', 'Trousers', 'Joggers', 'Culottes', 'Chinos', 'Cargo Pants'],
        shoesNames: ['Sneakers', 'Boots', 'Sandals', 'Loafers', 'Flats', 'Heels', 'Oxfords', 'Slippers', 'Mules', 'Espadrilles']
    },
    tr: {
        welcomeTitle: "Eko Moda Oyununa Hoş Geldiniz",
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
        waterSaved: "Tasarruf edilen su (litre)",
        co2Reduced: "Önlenen CO2 emisyonu (kg)",
        wasteReduced: "Önlenen tekstil atığı (kg)",
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
        priceLabel: "Fiyat:",
        conditionLabel: "Durum:",
        materialLabel: "Materyal:",
        brandLabel: "Marka:",
        currencySymbol: "₺",
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
        impactMessageA: "Mükemmel! En sürdürülebilir seçimleri yaptınız. Kombinleriniz hem şık hem de gezegeni koruyor!",
        impactMessageB: "Harika iş! Moda seçimleriniz çevresel etkiyi önemli ölçüde azaltıyor. Sürdürülebilir alışverişe devam edin!",
        impactMessageC: "Aferin! Çevre bilinçli kararlar aldınız. Her sürdürülebilir seçim gezegenimiz için fark yaratır.",
        impactMessageD: "Fena değil! Bir dahaki sefere daha fazla ikinci el veya sürdürülebilir ürün seçerek olumlu etkilerinizi artırabilirsiniz.",
        impactMessageF: "Gelişme için alan var. Çevresel ayak izinizi azaltmak için ikinci el veya sürdürülebilir ürünler seçmeyi deneyin!",
        accessoryNames: ['Şapka', 'Atkı', 'Kemer', 'Çanta', 'Güneş Gözlüğü', 'Saat', 'Bilezik', 'Kolye', 'Küpe', 'Yüzük'],
        outerwearNames: ['Ceket', 'Palto', 'Kapşonlu', 'Hırka', 'Blazer', 'Kazak', 'Yelek', 'Rüzgarlık', 'Parka', 'Ponço'],
        bottomsNames: ['Kot Pantolon', 'Pantolon', 'Şort', 'Etek', 'Tayt', 'Kumaş Pantolon', 'Eşofman', 'Bol Pantolon', 'Chino', 'Kargo'],
        shoesNames: ['Spor Ayakkabı', 'Bot', 'Sandalet', 'Loafer', 'Babet', 'Topuklu', 'Oxford', 'Terlik', 'Mule', 'Espadril']
    }
};

// Game State
let currentLanguage = 'en';

const gameState = {
    currentCategory: 'accessories',
    currentIndex: 0,
    selectedItems: {
        accessories: null,
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
    const categories = ['accessories', 'outerwear', 'bottoms', 'shoes'];
    const items = {};

    const namesByCategory = {
        accessories: translations[currentLanguage].accessoryNames,
        outerwear: translations[currentLanguage].outerwearNames,
        bottoms: translations[currentLanguage].bottomsNames,
        shoes: translations[currentLanguage].shoesNames
    };

    const conditionOptions = translations[currentLanguage].conditionOptions;
    const materialOptions = translations[currentLanguage].materialOptions;
    const brandOptions = translations[currentLanguage].brandNames;

    const emojis = {
        accessories: ['🎩', '🧢', '👒', '🎓', '🧣', '👝', '🎒', '👜', '🕶️', '⌚', '📿', '💍'],
        outerwear: ['🧥', '🥼', '🦺', '👔', '🥻', '👕', '👚', '🩱'],
        bottoms: ['👖', '👗', '🩳', '👘', '🩱'],
        shoes: ['👟', '👞', '👠', '👡', '🥾', '🥿', '👢']
    };

    const priceRanges = {
        accessories: { min: 30, max: 160 },
        outerwear: { min: 150, max: 420 },
        bottoms: { min: 80, max: 260 },
        shoes: { min: 100, max: 320 }
    };

    categories.forEach(category => {
        items[category] = [];
        const names = namesByCategory[category];
        const categoryEmojis = emojis[category];
        const range = priceRanges[category];

        for (let i = 0; i < 30; i++) {
            const typeKeys = Object.keys(clothingTypes);
            const randomType = clothingTypes[typeKeys[Math.floor(Math.random() * typeKeys.length)]];
            const baseName = names[i % names.length];
            const nameVariant = i < names.length ? baseName : `${baseName} ${Math.floor(i / names.length) + 1}`;
            const emoji = categoryEmojis[i % categoryEmojis.length];
            const price = range
                ? Math.round((Math.random() * (range.max - range.min) + range.min) / 10) * 10
                : Math.round(Math.random() * 100) * 10;
            const condition = getRandomFromArray(conditionOptions);
            const material = getRandomFromArray(materialOptions);
            const brand = getRandomFromArray(brandOptions);

            items[category].push({
                id: i,
                name: nameVariant,
                type: randomType,
                emoji: emoji,
                price: price,
                condition: condition,
                material: material,
                brand: brand
            });
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

// Screen Navigation
function showScreen(screenName) {
    Object.values(screens).forEach(screen => screen.classList.remove('active'));
    screens[screenName].classList.add('active');
}

// Update Clothing Display
function updateClothingDisplay() {
    const items = clothingData[gameState.currentCategory];
    const currentItem = items[gameState.currentIndex];

    itemDisplay.placeholder.textContent = currentItem.emoji;
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
        accessories: document.getElementById('selected-accessories'),
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
        accessories: document.getElementById('preview-accessories'),
        outerwear: document.getElementById('preview-outerwear'),
        bottoms: document.getElementById('preview-bottoms'),
        shoes: document.getElementById('preview-shoes')
    };

    // Clear all layers
    Object.values(previewLayers).forEach(layer => {
        layer.innerHTML = '';
    });

    // Add visual indicators for selected items
    if (gameState.selectedItems.accessories) {
        const item = gameState.selectedItems.accessories;
        const color = getColorForType(item.type);
        // Add a hat/accessory on head
        previewLayers.accessories.innerHTML = `
            <circle cx="100" cy="40" r="35" fill="${color}" opacity="0.7"/>
            <text x="100" y="48" text-anchor="middle" font-size="24">${item.emoji}</text>
        `;
    }

    if (gameState.selectedItems.outerwear) {
        const item = gameState.selectedItems.outerwear;
        const color = getColorForType(item.type);
        // Add outerwear on torso
        previewLayers.outerwear.innerHTML = `
            <rect x="70" y="90" width="60" height="80" fill="${color}" opacity="0.7" rx="5"/>
            <text x="100" y="140" text-anchor="middle" font-size="24">${item.emoji}</text>
        `;
    }

    if (gameState.selectedItems.bottoms) {
        const item = gameState.selectedItems.bottoms;
        const color = getColorForType(item.type);
        // Add bottoms on legs
        previewLayers.bottoms.innerHTML = `
            <polygon points="70,200 75,280 95,280 100,200" fill="${color}" opacity="0.7"/>
            <polygon points="100,200 105,280 125,280 130,200" fill="${color}" opacity="0.7"/>
            <text x="100" y="240" text-anchor="middle" font-size="24">${item.emoji}</text>
        `;
    }

    if (gameState.selectedItems.shoes) {
        const item = gameState.selectedItems.shoes;
        const color = getColorForType(item.type);
        // Add shoes on feet
        previewLayers.shoes.innerHTML = `
            <ellipse cx="75" cy="285" rx="15" ry="8" fill="${color}" opacity="0.8"/>
            <ellipse cx="125" cy="285" rx="15" ry="8" fill="${color}" opacity="0.8"/>
            <text x="100" y="295" text-anchor="middle" font-size="20">${item.emoji}</text>
        `;
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
    let totalWaterSaved = 0;
    let totalCO2Reduced = 0;
    let totalWasteReduced = 0;
    let ecoScore = 0;

    Object.values(gameState.selectedItems).forEach(item => {
        if (item) {
            totalWaterSaved += item.type.waterSaved;
            totalCO2Reduced += item.type.co2Reduced;
            totalWasteReduced += item.type.wasteReduced;

            if (item.type === clothingTypes.ECO_FRIENDLY) ecoScore += 3;
            else if (item.type === clothingTypes.SECONDHAND) ecoScore += 2;
            else ecoScore += 0;
        }
    });

    // Determine eco rating
    let ecoRating;
    if (ecoScore >= 10) ecoRating = 'A+';
    else if (ecoScore >= 8) ecoRating = 'A';
    else if (ecoScore >= 6) ecoRating = 'B';
    else if (ecoScore >= 4) ecoRating = 'C';
    else ecoRating = 'D';

    // Generate impact message
    let message;
    if (ecoScore >= 10) {
        message = translations[currentLanguage].impactMessageA;
    } else if (ecoScore >= 8) {
        message = translations[currentLanguage].impactMessageB;
    } else if (ecoScore >= 6) {
        message = translations[currentLanguage].impactMessageC;
    } else if (ecoScore >= 4) {
        message = translations[currentLanguage].impactMessageD;
    } else {
        message = translations[currentLanguage].impactMessageF;
    }

    return {
        waterSaved: totalWaterSaved,
        co2Reduced: totalCO2Reduced,
        wasteReduced: totalWasteReduced,
        ecoRating: ecoRating,
        message: message
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

    // Show initial score with random number
    const randomScore = Math.floor(Math.random() * 900000) + 100000;
    document.querySelector('.score-number').textContent = randomScore.toString().split('').join(' ');
    document.getElementById('initialScore').classList.add('active');

    // After 2 seconds, transition to impact screen
    setTimeout(() => {
        document.getElementById('initialScore').classList.remove('active');

        setTimeout(() => {
            // Update impact data
            document.getElementById('waterSaved').textContent = impact.waterSaved.toLocaleString();
            document.getElementById('co2Reduced').textContent = impact.co2Reduced.toLocaleString();
            document.getElementById('wasteReduced').textContent = impact.wasteReduced.toLocaleString();
            document.getElementById('ecoRating').textContent = impact.ecoRating;
            document.getElementById('impactText').textContent = impact.message;

            // Show random sustainability fact
            const facts = translations[currentLanguage].sustainabilityFacts;
            const randomFact = facts[Math.floor(Math.random() * facts.length)];
            document.getElementById('sustainabilityFact').textContent = randomFact;

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

buttons.select.addEventListener('click', (e) => {
    const items = clothingData[gameState.currentCategory];
    const currentItem = items[gameState.currentIndex];

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
});

buttons.finish.addEventListener('click', () => {
    // Check if all categories have selections
    const allSelected = Object.values(gameState.selectedItems).every(item => item !== null);

    if (!allSelected) {
        alert(translations[currentLanguage].selectAllCategories);
        return;
    }

    showScreen('scoreScreen');
    displayResults();
});

buttons.playAgain.addEventListener('click', () => {
    // Reset game state
    gameState.currentCategory = 'accessories';
    gameState.currentIndex = 0;
    gameState.selectedItems = {
        accessories: null,
        outerwear: null,
        bottoms: null,
        shoes: null
    };

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
});

// Language Selection
const languageButtons = document.querySelectorAll('.language-btn');
languageButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        currentLanguage = btn.dataset.lang;
        clothingData = generateClothingItems();
        translateUI();
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