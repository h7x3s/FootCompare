// script.js - الصفحة الرئيسية مع نظام الاستكشاف الجديد

let currentLang = localStorage.getItem("footLang") || "ar";

// 1. ترجمات النصوص الثابتة
const uiTranslations = {
    ar: {
        mainTitle: "FootCompare: مقارنة وإحصائيات كرة القدم", subDesc: "ابحث عن ناديك المفضل أو قارن بين أفضل الفرق.", searchPlaceholder: "ابحث عن نادي... (مثال: ريال مدريد)",
        team1Title: "الفريق الأول", team2Title: "الفريق الثاني", compareText: "ابدأ المقارنة", langBtn: "English",
        exploreTitle: "استكشف عالم كرة القدم", tournamentsLabel: "🏆 البطولات", clubsLabel: "🛡️ أبرز الأندية / المنتخبات"
    },
    en: {
        mainTitle: "FootCompare: Football Stats & Comparisons", subDesc: "Search for your favorite club or compare the best teams.", searchPlaceholder: "Search for a club... (e.g., Real Madrid)",
        team1Title: "First Team", team2Title: "Second Team", compareText: "Start Comparison", langBtn: "العربية",
        exploreTitle: "Explore the Football World", tournamentsLabel: "🏆 Tournaments", clubsLabel: "🛡️ Top Clubs / National Teams"
    }
};

// 2. قاعدة بيانات الاستكشاف (القارات والدول والبطولات)
const exploreData = {
    continental: [
        { id: "global", icon: "World.png", nameAr: "عالمي", nameEn: "Global", 
          tournamentsAr: ["كأس العالم", "كأس الأبطال (فيناليسيما)", "كأس العالم للأندية", "كأس القارات"], tournamentsEn: ["World Cup", "Finalisma", "Club World Cup", "Confederations Cup"], 
          clubsAr: ["البرازيل", "الأرجنتين", "ألمانيا", "فرنسا", "إسبانيا", "إيطاليا"], clubsEn: ["Brazil", "Argentina", "Germany", "France", "Spain", "Italy"] },
        { id: "europe", icon: "europe.png", nameAr: "أوروبا", nameEn: "Europe", 
          tournamentsAr: ["كأس أمم أوروبا (اليورو)", "دوري أبطال أوروبا", "الدوري الأوروبي", "كأس السوبر الأوروبي", "دوري المؤتمر الأوروبي", "دوري الأمم الأوروبية"], tournamentsEn: ["Euro", "UEFA Champions League", "UEFA Europa League", "UEFA Super Cup", "UEFA Conference League", "UEFA Nations League"], 
          clubsAr: ["ريال مدريد", "برشلونة", "بايرن ميونخ", "ميلان", "ليفربول", "مانشستر سيتي"], clubsEn: ["Real Madrid", "Barcelona", "Bayern Munich", "AC Milan", "Liverpool", "Man City"] },
        { id: "latam", icon: "SouthAmerica.png", nameAr: "أمريكا الجنوبية", nameEn: "South America", 
          tournamentsAr: ["كوبا أمريكا", "كوبا ليبرتادوريس", "كوبا سودأمريكانا", "ريكوبا سودأمريكانا"], tournamentsEn: ["Copa América", "Copa Libertadores", "Copa Sudamericana", "Recopa Sudamericana"], 
          clubsAr: ["بوكا جونيورز", "ريفر بليت", "فلامنغو", "بالميراس", "سانتوس", "ساو باولو"], clubsEn: ["Boca Juniors", "River Plate", "Flamengo", "Palmeiras", "Santos", "Sao Paulo"] }
    ],
    countries: [
        { id: "spain", icon: "spain.png", nameAr: "إسبانيا", nameEn: "Spain", 
          tournamentsAr: ["الدوري الإسباني", "كأس ملك إسبانيا", "كأس السوبر الإسباني"], tournamentsEn: ["La Liga", "Copa del Rey", "Supercopa"], 
          clubsAr: ["ريال مدريد", "برشلونة", "أتلتيكو مدريد", "إشبيلية", "فالنسيا", "بيلباو"], clubsEn: ["Real Madrid", "Barcelona", "Atletico Madrid", "Sevilla", "Valencia", "Bilbao"] },
        { id: "england", icon: "england.png󠁧󠁢󠁥󠁮󠁧󠁿", nameAr: "إنجلترا", nameEn: "England", 
          tournamentsAr: ["الدوري الإنجليزي", "كأس الاتحاد", "كأس الرابطة", "الدرع الخيرية"], tournamentsEn: ["Premier League", "FA Cup", "EFL Cup", "Community Shield"], 
          clubsAr: ["مانشستر يونايتد", "مانشستر سيتي", "ليفربول", "أرسنال", "تشيلسي", "توتنهام"], clubsEn: ["Man United", "Man City", "Liverpool", "Arsenal", "Chelsea", "Tottenham"] },
        { id: "italy", icon: "italy.png", nameAr: "إيطاليا", nameEn: "Italy", 
          tournamentsAr: ["الدوري الإيطالي", "كأس إيطاليا", "كأس السوبر الإيطالي"], tournamentsEn: ["Serie A", "Coppa Italia", "Supercoppa"], 
          clubsAr: ["يوفنتوس", "ميلان", "إنتر", "نابولي", "روما", "لاتسيو"], clubsEn: ["Juventus", "AC Milan", "Inter", "Napoli", "Roma", "Lazio"] },
        { id: "germany", icon: "germany.png", nameAr: "ألمانيا", nameEn: "Germany", 
          tournamentsAr: ["الدوري الألماني", "كأس ألمانيا", "كأس السوبر الألماني"], tournamentsEn: ["Bundesliga", "DFB-Pokal", "DFL-Supercup"], 
          clubsAr: ["بايرن ميونخ", "دورتموند", "ليفركوزن", "لايبزيغ", "شالكه", "فرانكفورت"], clubsEn: ["Bayern Munich", "Dortmund", "Leverkusen", "Leipzig", "Schalke", "Frankfurt"] },
        { id: "france", icon: "france.png", nameAr: "فرنسا", nameEn: "France", 
          tournamentsAr: ["الدوري الفرنسي", "كأس فرنسا", "كأس الأبطال الفرنسي"], tournamentsEn: ["Ligue 1", "Coupe de France", "Trophee des Champions"], 
          clubsAr: ["باريس سان جيرمان", "مارسيليا", "ليون", "موناكو", "ليل", "سانت إتيان"], clubsEn: ["PSG", "Marseille", "Lyon", "Monaco", "Lille", "Saint-Etienne"] },
        { id: "portugal", icon: "portugal.png", nameAr: "البرتغال", nameEn: "Portugal", 
          tournamentsAr: ["الدوري البرتغالي", "كأس البرتغال", "كأس الرابطة", "السوبر"], tournamentsEn: ["Primeira Liga", "Taca de Portugal", "Taca da Liga", "Supertaca"], 
          clubsAr: ["بنفيكا", "بورتو", "سبورتينغ", "براغا"], clubsEn: ["Benfica", "Porto", "Sporting", "Braga"] },
        { id: "netherlands", icon: "netherlands.png", nameAr: "هولندا", nameEn: "Netherlands", 
          tournamentsAr: ["الدوري الهولندي", "كأس هولندا", "درع يوهان كرويف"], tournamentsEn: ["Eredivisie", "KNVB Cup", "Johan Cruyff Shield"], 
          clubsAr: ["أياكس", "آيندهوفن", "فاينورد", "ألكمار"], clubsEn: ["Ajax", "PSV", "Feyenoord", "AZ Alkmaar"] },
        { id: "belgium", icon: "belgium.png", nameAr: "بلجيكا", nameEn: "Belgium", 
          tournamentsAr: ["الدوري البلجيكي", "كأس بلجيكا", "السوبر البلجيكي"], tournamentsEn: ["Belgian Pro League", "Belgian Cup", "Supercup"], 
          clubsAr: ["أندرلخت", "كلوب بروج", "ستاندارد لييج", "جينك"], clubsEn: ["Anderlecht", "Club Brugge", "Standard Liege", "Genk"] },
        { id: "brazil", icon: "brazil.png", nameAr: "البرازيل", nameEn: "Brazil", 
          tournamentsAr: ["الدوري البرازيلي", "كأس البرازيل", "السوبر البرازيلي"], tournamentsEn: ["Brasileirao", "Copa do Brasil", "Supercopa"], 
          clubsAr: ["فلامنغو", "بالميراس", "سانتوس", "ساو باولو", "كورينثيانز", "كروزيرو"], clubsEn: ["Flamengo", "Palmeiras", "Santos", "Sao Paulo", "Corinthians", "Cruzeiro"] },
        { id: "argentina", icon: "argentina.png", nameAr: "الأرجنتين", nameEn: "Argentina", 
          tournamentsAr: ["الدوري الأرجنتيني", "كأس الأرجنتين", "السوبر الأرجنتيني"], tournamentsEn: ["Primera Division", "Copa Argentina", "Supercopa"], 
          clubsAr: ["بوكا جونيورز", "ريفر بليت", "إنديبندينتي", "راسينغ"], clubsEn: ["Boca Juniors", "River Plate", "Independiente", "Racing"] },
        { id: "turkey", icon: "turkey.png", nameAr: "تركيا", nameEn: "Turkey", 
          tournamentsAr: ["الدوري التركي", "كأس تركيا", "السوبر التركي"], tournamentsEn: ["Super Lig", "Turkish Cup", "Super Cup"], 
          clubsAr: ["غلطة سراي", "فنربخشة", "بشكتاش", "طرابزون سبور"], clubsEn: ["Galatasaray", "Fenerbahce", "Besiktas", "Trabzonspor"] },
        { id: "saudi", icon: "saudiarabia.png", nameAr: "السعودية", nameEn: "Saudi Arabia", 
          tournamentsAr: ["الدوري السعودي", "كأس الملك", "السوبر السعودي"], tournamentsEn: ["Saudi Pro League", "King's Cup", "Super Cup"], 
          clubsAr: ["الهلال", "النصر", "الاتحاد", "الأهلي", "الشباب"], clubsEn: ["Al Hilal", "Al Nassr", "Al Ittihad", "Al Ahli", "Al Shabab"] }
    ]
};

function applyLanguage() {
    document.documentElement.dir = currentLang === "ar" ? "rtl" : "ltr";
    const t = uiTranslations[currentLang];

    document.getElementById("mainTitle").innerText = t.mainTitle;
    document.getElementById("subDesc").innerText = t.subDesc;
    document.getElementById("searchInput").placeholder = t.searchPlaceholder;
    document.getElementById("team1Title").innerText = t.team1Title;
    document.getElementById("team2Title").innerText = t.team2Title;
    document.getElementById("compareText").innerText = t.compareText;
    document.getElementById("langToggle").innerText = t.langBtn;
    
    // ترجمة قسم الاستكشاف
    document.getElementById("exploreTitle").innerText = t.exploreTitle;
    document.getElementById("tournamentsLabel").innerText = t.tournamentsLabel;
    document.getElementById("clubsLabel").innerText = t.clubsLabel;

    updateSelectTranslations("team1Select");
    updateSelectTranslations("team2Select");
    renderExploreGrids();
    
    // إغلاق النافذة عند تغيير اللغة لترتيب البيانات
    closeExploreDetails();
}

function toggleLanguage() {
    currentLang = currentLang === "ar" ? "en" : "ar";
    localStorage.setItem("footLang", currentLang); 
    applyLanguage();
}

function updateLogo(selectElementId, logoContainerId) {
    const selectEl = document.getElementById(selectElementId);
    const logoContainer = document.getElementById(logoContainerId);
    const selectedTeam = selectEl.value;
    if (footDatabase.clubs[selectedTeam]) {
        logoContainer.innerHTML = `<img src="${footDatabase.clubs[selectedTeam].logo}" alt="Logo" style="width: 100%; height: 100%; object-fit: contain;">`;
    }
}

function updateSelectTranslations(selectId) {
    const select = document.getElementById(selectId);
    for (let i = 0; i < select.options.length; i++) {
        let val = select.options[i].value;
        if (footDatabase.clubs[val]) {
            select.options[i].innerText = currentLang === "ar" ? footDatabase.clubs[val].nameAr : footDatabase.clubs[val].nameEn;
        }
    }
}

// === دالات قسم الاستكشاف الجديد ===

function renderExploreGrids() {
    const contGrid = document.getElementById("continentalGrid");
    const countGrid = document.getElementById("countriesGrid");
    
    contGrid.innerHTML = "";
    countGrid.innerHTML = "";

    // رسم مربعات القارات
    exploreData.continental.forEach(item => {
        const name = currentLang === "ar" ? item.nameAr : item.nameEn;
        contGrid.innerHTML += createBoxHtml(item, name, 'rgba(255, 255, 255, 0.05)', 'white');
    });

    // رسم مربعات الدول
    exploreData.countries.forEach(item => {
        const name = currentLang === "ar" ? item.nameAr : item.nameEn;
        countGrid.innerHTML += createBoxHtml(item, name, 'rgba(255, 255, 255, 0.05)', 'var(--text-white)');
    });
}

function createBoxHtml(item, name, bgColor, textColor) {
    // التعديل هنا: أضفنا أمر استبدال الفاصلة العليا برمز مشفر لكي لا ينكسر الكود
    const dataStr = encodeURIComponent(JSON.stringify(item)).replace(/'/g, "%27");
    
    const iconHtml = item.icon.includes(".") 
        ? `<img src="${item.icon}" alt="${name}" style="width: 50px; height: 50px; object-fit: contain; margin-bottom: 5px; border-radius: 8px;">`
        : `<div style="font-size: 2rem; margin-bottom: 5px;">${item.icon}</div>`;

    return `
        <div onclick="openExploreDetails('${dataStr}')" style="background: ${bgColor}; border: 1px solid rgba(255,255,255,0.1); border-radius: 8px; padding: 15px 5px; text-align: center; cursor: pointer; transition: 0.3s; box-shadow: 0 2px 5px rgba(0,0,0,0.2);">
            ${iconHtml}
            <div style="color: ${textColor}; font-weight: bold; font-size: 0.9rem;">${name}</div>
        </div>
    `;
}

function openExploreDetails(encodedData) {
    const item = JSON.parse(decodeURIComponent(encodedData));
    const title = currentLang === "ar" ? item.nameAr : item.nameEn;
    const tournaments = currentLang === "ar" ? item.tournamentsAr : item.tournamentsEn;
    const clubs = currentLang === "ar" ? item.clubsAr : item.clubsEn;

    // تحديث الأيقونة
    const iconHtml = item.icon.includes(".") 
        ? `<img src="${item.icon}" alt="${title}" style="width: 30px; height: 30px; object-fit: contain; margin: 0 10px; vertical-align: middle; border-radius: 4px;">`
        : `<span style="margin: 0 10px;">${item.icon}</span>`;

    document.getElementById("detailsTitle").innerHTML = `${iconHtml} ${title}`;
    
    // رسم البطولات (نظام بحث ديناميكي ذكي)
    let tourHtml = "";
    tournaments.forEach(t => {
        // البحث عن البطولة في قاعدة البيانات تلقائياً (عربي أو إنجليزي)
        let tId = null;
        if (footDatabase.tournaments) {
            for(let key in footDatabase.tournaments) {
                if(footDatabase.tournaments[key].nameAr === t || footDatabase.tournaments[key].nameEn === t) {
                    tId = key;
                    break;
                }
            }
        }

        if (tId) {
            // إذا كانت البطولة موجودة في الموسوعة، اجعلها زر رابط ذهبي
            tourHtml += `<a href="tournament.html?id=${tId}" style="text-decoration: none; background: rgba(0,0,0,0.5); border: 1px solid var(--light-blue); color: white; padding: 5px 12px; border-radius: 15px; font-size: 0.85rem; cursor: pointer; transition: 0.3s; font-weight: bold;">${t} <i class="fas fa-external-link-alt" style="font-size: 0.7rem; margin: 0 3px;"></i></a>`;
        } else {
            // إذا لم نضفها بعد، تظهر كنص عادي رمادي
            tourHtml += `<span style="background: rgba(0,0,0,0.3); border: 1px solid rgba(255,255,255,0.1); color: rgba(255,255,255,0.4); padding: 5px 12px; border-radius: 15px; font-size: 0.85rem;">${t}</span>`;
        }
    });
    document.getElementById("tournamentsContent").innerHTML = tourHtml;

    // رسم الأندية (نظام بحث ديناميكي ذكي)
    let clubsHtml = "";
    clubs.forEach(c => {
        // البحث عن النادي في قاعدة البيانات تلقائياً
        let cId = null;
        if (footDatabase.clubs) {
            for(let key in footDatabase.clubs) {
                if(footDatabase.clubs[key].nameAr === c || footDatabase.clubs[key].nameEn === c) {
                    cId = key;
                    break;
                }
            }
        }

        if (cId) {
            // إذا كان النادي موجوداً، اجعله زر رابط ذهبي
            clubsHtml += `<a href="club.html?id=${cId}" style="text-decoration: none; background: rgba(255,255,255,0.1); border: 1px solid var(--light-blue); color: white; padding: 5px 12px; border-radius: 15px; font-size: 0.85rem; cursor: pointer; transition: 0.3s; font-weight: bold;">${c} <i class="fas fa-external-link-alt" style="font-size: 0.7rem; margin: 0 3px;"></i></a>`;
        } else {
            // إذا لم نضفه بعد، يظهر كنص عادي رمادي
            clubsHtml += `<span style="background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.05); color: rgba(255,255,255,0.3); padding: 5px 12px; border-radius: 15px; font-size: 0.85rem;">${c}</span>`;
        }
    });
    document.getElementById("clubsContent").innerHTML = clubsHtml;

    const detailsBox = document.getElementById("exploreDetails");
    detailsBox.style.display = "block";
    detailsBox.scrollIntoView({ behavior: "smooth", block: "center" });
}

function closeExploreDetails() {
    document.getElementById("exploreDetails").style.display = "none";
}

// ====================================

function searchClub() {
    const query = document.getElementById("searchInput").value.trim().toLowerCase();
    if (query === "") {
        alert(currentLang === "ar" ? "الرجاء كتابة اسم النادي!" : "Please enter a club name!");
        return;
    }

    const searchMap = {
        "برشلونة": "barcelona", "barcelona": "barcelona", "ريال مدريد": "real_madrid", "real madrid": "real_madrid",
        "بايرن ميونخ": "bayern_munich", "bayern munich": "bayern_munich", "مانشستر سيتي": "man_city", "manchester city": "man_city",
        // ... (يمكنك إضافة باقي قاموس البحث الخاص بك هنا كما كان في السابق)
    };

    const foundId = searchMap[query];
    if (foundId) window.location.href = `club.html?id=${foundId}`;
    else alert(currentLang === "ar" ? "لم نتمكن من العثور على هذا النادي. جرب اختيار نادي من القائمة." : "Club not found. Try selecting from the list.");
}

function startComparison() {
    const team1 = document.getElementById("team1Select").value;
    const team2 = document.getElementById("team2Select").value;
    if (team1 === team2) {
        alert(currentLang === "ar" ? "الرجاء اختيار فريقين مختلفين!" : "Select two different teams!");
        return;
    }
    window.location.href = `compare.html?team1=${team1}&team2=${team2}`;
}

window.onload = function() {
    applyLanguage(); 
    updateLogo("team1Select", "logo1");
    updateLogo("team2Select", "logo2");

    document.getElementById("team1Select").addEventListener("change", function() { updateLogo("team1Select", "logo1"); });
    document.getElementById("team2Select").addEventListener("change", function() { updateLogo("team2Select", "logo2"); });
};
