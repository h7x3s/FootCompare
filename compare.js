// compare.js - نسخة نظام النقاط والمقارنة الحقيقية للأسماء (تم إصلاح حساب الأبطال فقط)

let currentLang = localStorage.getItem("footLang") || "ar";
let team1Data = null;
let team2Data = null;

const uiTranslations = {
    ar: { 
        backText: "العودة للرئيسية", trophiesTitle: "مقارنة السجل التاريخي للبطولات", 
        h2hTitle: "سجل المواجهات المباشرة (نظام النقاط التاريخي)", 
        noMatches: "لا توجد مواجهات تاريخية مسجلة بين هذين الفريقين في الموسوعة.",
        pointsText: "نقطة", finalText: "نهائي", elimText: "إقصاء", groupText: "مواجهة عادية"
    },
    en: { 
        backText: "Back to Home", trophiesTitle: "Historical Trophies Comparison", 
        h2hTitle: "Head-to-Head Record (Historical Points System)", 
        noMatches: "No historical matches recorded between these teams in the encyclopedia.",
        pointsText: "Pts", finalText: "Final", elimText: "Elimination", groupText: "Regular Match"
    }
};

const orderMap = { "cont_1": 1, "dom_league": 2, "dom_cup": 3, "world": 4, "world_defunct": 5, "cont_2": 6, "cont_3": 7, "cont_super": 8, "dom_league_cup": 9, "dom_super": 10, "dom_cup_defunct": 11, "friendly": 12, "friendly_2": 13, "friendly_3": 12 };

window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    team1Data = footDatabase.clubs[urlParams.get('team1')];
    team2Data = footDatabase.clubs[urlParams.get('team2')];

    if (!team1Data || !team2Data) return;

    applyLanguage(); 
    renderComparisonPage();
    renderH2HPointsSystem(); // تشغيل نظام النقاط الجديد!
};

function applyLanguage() {
    document.documentElement.dir = currentLang === "ar" ? "rtl" : "ltr";
    const t = uiTranslations[currentLang];
    
    document.getElementById("backText").innerText = t.backText;
    document.getElementById("trophiesTitle").innerText = t.trophiesTitle;
    document.getElementById("h2hTitle").innerText = t.h2hTitle;
}

function renderComparisonPage() {
    const name1 = currentLang === "ar" ? team1Data.nameAr : team1Data.nameEn;
    const name2 = currentLang === "ar" ? team2Data.nameAr : team2Data.nameEn;

    document.getElementById("compareHeader").innerHTML = `
        <div><img src="${team1Data.logo}" style="width: 120px; height: 120px; object-fit: contain; margin-bottom: 10px;"><h3 style="color: white;">${name1}</h3></div>
        <div style="font-size: 3rem; font-weight: bold; color: var(--light-blue); display: flex; align-items: center;">VS</div>
        <div><img src="${team2Data.logo}" style="width: 120px; height: 120px; object-fit: contain; margin-bottom: 10px;"><h3 style="color: white;">${name2}</h3></div>
    `;

    const groupedTrophies = {};

    // خوارزمية دمج الأسماء الحقيقية
    function processTrophies(teamData, isTeam1) {
        teamData.trophies.forEach(t => {
            const type = t.type || "other";
            const order = orderMap[type] || 99;
            
            if (!groupedTrophies[type]) {
                groupedTrophies[type] = { 
                    name1Ar: "", name1En: "", 
                    name2Ar: "", name2En: "", 
                    count1: 0, count2: 0, order: order 
                };
            }

            // هنا يكمن التعديل: الاعتماد على wonCount بدلاً من count الإجمالي
            const actualWins = t.wonCount !== undefined ? t.wonCount : t.count;

            if (isTeam1) {
                groupedTrophies[type].count1 += actualWins;
                groupedTrophies[type].name1Ar = t.nameAr;
                groupedTrophies[type].name1En = t.nameEn;
            } else {
                groupedTrophies[type].count2 += actualWins;
                groupedTrophies[type].name2Ar = t.nameAr;
                groupedTrophies[type].name2En = t.nameEn;
            }
        });
    }

    processTrophies(team1Data, true);
    processTrophies(team2Data, false);

    const sortedTrophies = Object.values(groupedTrophies).sort((a, b) => a.order - b.order);
    let trophiesHtml = "";

    sortedTrophies.forEach(t => {
        // إخفاء البطولة إذا كان كلا الفريقين لا يمتلكان أي لقب فيها (لتجنب ظهور 0 مقابل 0)
        if (t.count1 === 0 && t.count2 === 0) return;

        const color1 = t.count1 > t.count2 ? 'gold' : 'white';
        const color2 = t.count2 > t.count1 ? 'gold' : 'white';
        
        // هنا السحر: إذا كان الاسمان مختلفين، اجمعهما بعلامة ( / )، وإذا كانا متشابهين اعرضهما مرة واحدة!
        let displayAr = (t.name1Ar === t.name2Ar || !t.name2Ar || !t.name1Ar) ? (t.name1Ar || t.name2Ar) : `${t.name1Ar} / ${t.name2Ar}`;
        let displayEn = (t.name1En === t.name2En || !t.name2En || !t.name1En) ? (t.name1En || t.name2En) : `${t.name1En} / ${t.name2En}`;
        
        const trophyName = currentLang === "ar" ? displayAr : displayEn;

        trophiesHtml += `
            <div style="display: flex; justify-content: space-between; align-items: center; background: rgba(0,40,85,0.8); padding: 15px 20px; border-radius: 10px; border: 1px solid var(--mid-blue); direction: ltr; margin-bottom: 10px;">
                <span style="font-weight: bold; font-size: 1.5rem; color: ${color1}; width: 30px; text-align: center;">${t.count1}</span>
                <span style="color: var(--light-grey); flex: 1; text-align: center; font-size: 1.1rem;">🏆 ${trophyName}</span>
                <span style="font-weight: bold; font-size: 1.5rem; color: ${color2}; width: 30px; text-align: center;">${t.count2}</span>
            </div>
        `;
    });

    document.getElementById("trophiesCompareGrid").innerHTML = trophiesHtml;
}

// السحر الثاني: نظام حساب النقاط
function renderH2HPointsSystem() {
    const matchesList = document.getElementById("matchesList");
    matchesList.innerHTML = "";

    // فلترة المباريات الخاصة بهذين الفريقين فقط من قاعدة البيانات
    const history = footDatabase.matches.filter(m => 
        (m.team1 === team1Data.id && m.team2 === team2Data.id) || 
        (m.team1 === team2Data.id && m.team2 === team1Data.id)
    );

    if (history.length === 0) {
        matchesList.innerHTML = `<p style='color: white; text-align: center;'>${uiTranslations[currentLang].noMatches}</p>`;
        return;
    }

    let team1Points = 0;
    let team2Points = 0;

    let historyHtml = "";

    // بناء قائمة المباريات وحساب النقاط
    history.forEach(m => {
        if (m.winner === team1Data.id) team1Points += m.points;
        if (m.winner === team2Data.id) team2Points += m.points;

        const compName = currentLang === "ar" ? m.compAr : m.compEn;
        const stageName = currentLang === "ar" ? m.stageAr : m.stageEn;
        const ptsText = uiTranslations[currentLang].pointsText;
        
        // تلوين النقاط حسب الأهمية
        let ptColor = m.points === 3 ? "gold" : (m.points === 2 ? "#e74c3c" : "#3498db");

        historyHtml += `
            <div style="background: rgba(255,255,255,0.05); padding: 15px; border-radius: 10px; border: 1px solid rgba(255,255,255,0.1); margin-bottom: 10px;">
                <div style="color: var(--light-grey); font-size: 0.9rem; margin-bottom: 10px; text-align: center;">
                    📅 ${m.date} | ${compName} - ${stageName} 
                    <a href="${m.wikiLink}" target="_blank" style="color: var(--light-blue); text-decoration: none; margin-left: 10px;"><i class="fab fa-wikipedia-w"></i></a>
                </div>
                <div style="display: flex; align-items: center; justify-content: space-between; font-size: 1.1rem; font-weight: bold; color: var(--text-white); direction: ltr;">
                    <div style="display: flex; align-items: center; gap: 8px; width: 30%; justify-content: flex-end;">
                        <img src="${footDatabase.clubs[m.team1].logo}" style="width: 30px; height: 30px; object-fit: contain;">
                    </div>
                    
                    <div style="display: flex; flex-direction: column; align-items: center; width: 40%;">
                        <div style="color: white; font-size: 1.2rem; background: rgba(0,0,0,0.3); padding: 2px 10px; border-radius: 5px;">${m.result}</div>
                        <div style="color: ${ptColor}; font-size: 0.8rem; margin-top: 5px;">+${m.points} ${ptsText} (${footDatabase.clubs[m.winner].nameEn})</div>
                    </div>
                    
                    <div style="display: flex; align-items: center; gap: 8px; width: 30%; justify-content: flex-start;">
                        <img src="${footDatabase.clubs[m.team2].logo}" style="width: 30px; height: 30px; object-fit: contain;">
                    </div>
                </div>
            </div>
        `;
    });

    // لوحة عرض النتيجة الإجمالية للنقاط في الأعلى
    const scoreColor1 = team1Points > team2Points ? 'gold' : 'white';
    const scoreColor2 = team2Points > team1Points ? 'gold' : 'white';

    const scoreboardHtml = `
        <div style="display: flex; justify-content: space-around; align-items: center; background: linear-gradient(135deg, rgba(0,40,85,1) 0%, rgba(0,0,0,1) 100%); padding: 20px; border-radius: 15px; border: 2px solid gold; margin-bottom: 20px;">
            <div style="text-align: center;">
                <h4 style="color: var(--light-grey); margin: 0;">${currentLang === "ar" ? team1Data.nameAr : team1Data.nameEn}</h4>
                <div style="font-size: 3rem; color: ${scoreColor1}; font-weight: bold;">${team1Points}</div>
            </div>
            <div style="text-align: center; color: var(--light-blue); font-size: 1.2rem; font-weight: bold;">
                <i class="fas fa-balance-scale"></i><br>Total Points
            </div>
            <div style="text-align: center;">
                <h4 style="color: var(--light-grey); margin: 0;">${currentLang === "ar" ? team2Data.nameAr : team2Data.nameEn}</h4>
                <div style="font-size: 3rem; color: ${scoreColor2}; font-weight: bold;">${team2Points}</div>
            </div>
        </div>
    `;

    matchesList.innerHTML = scoreboardHtml + historyHtml;
}
