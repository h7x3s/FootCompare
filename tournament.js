// tournament.js - التصميم الموحد بألوان مخصصة ولغة صارمة

let currentLang = localStorage.getItem("footLang") || "ar";
let currentTourData = null;

const tourTranslations = {
    ar: {
        backText: "العودة للرئيسية", historyTitle: "السجل التاريخي للبطولة",
        founded: "التأسيس:", region: "المنطقة:",
        currentChampion: "البطل الحالي:", mostSuccessful: "الأكثر تتويجاً:",
        topScorer: "الهداف التاريخي:", wikiBtn: "تفاصيل البطولة (ويكيبيديا)",
        winner: "البطل", runnerUp: "الوصيف", editionLink: "تفاصيل النسخة"
    },
    en: {
        backText: "Back to Home", historyTitle: "Historical Record",
        founded: "Founded:", region: "Region:",
        currentChampion: "Current Champion:", mostSuccessful: "Most Titles:",
        topScorer: "Top Scorer:", wikiBtn: "Tournament Details (Wiki)",
        winner: "Winner", runnerUp: "Runner-up", editionLink: "Edition Details"
    }
};

window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    let tourId = urlParams.get('id') || "champions_league"; 
    
    currentTourData = footDatabase.tournaments[tourId];
    
    if(currentTourData) {
        applyLanguage(); 
        renderTournamentPage(); 
    }
};

function applyLanguage() {
    document.documentElement.dir = currentLang === "ar" ? "rtl" : "ltr";
    const t = tourTranslations[currentLang];
    
    document.getElementById("backText").innerText = t.backText;
    document.getElementById("historyTitle").innerText = t.historyTitle;
}

function renderTournamentPage() {
    if (!currentTourData) return;
    const t = tourTranslations[currentLang];
    
    const tourName = currentLang === "ar" ? currentTourData.nameAr : currentTourData.nameEn;
    const region = currentLang === "ar" ? currentTourData.regionAr : currentTourData.regionEn;
    const currentChamp = currentLang === "ar" ? currentTourData.currentChampionAr : currentTourData.currentChampionEn;
    const mostSucc = currentLang === "ar" ? currentTourData.mostSuccessfulAr : currentTourData.mostSuccessfulEn;
    const topScorer = currentLang === "ar" ? currentTourData.topScorerAr : currentTourData.topScorerEn;
    const finalMainWiki = currentLang === "ar" ? (currentTourData.wikiLinkAr || currentTourData.wikiLink) : (currentTourData.wikiLinkEn || currentTourData.wikiLink);

    // الهيدر المتناسق بألوان اللوحة
    const profileSection = document.getElementById("tournamentProfile");
    profileSection.style.cssText = "display: flex; flex-direction: column; align-items: center; justify-content: center; background: linear-gradient(135deg, #023E7D 0%, #001233 100%); padding: 30px; border-radius: 15px; border: 1px solid #33415C; margin-bottom: 30px;";

    profileSection.innerHTML = `
        <div style="background: #002855; padding: 20px; border-radius: 50%; width: 140px; height: 140px; display: flex; align-items: center; justify-content: center; border: 1px solid #33415C; margin-bottom: 20px;">
            <img src="${currentTourData.logo}" alt="Logo" style="max-width: 100px; max-height: 100px; object-fit: contain;">
        </div>
        
        <div style="color: #ffffff; width: 100%; text-align: center;">
            <h1 style="color: #ffffff; margin-bottom: 25px; font-size: 2.2rem;">${tourName}</h1>
            
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px; font-size: 1rem; background: #001845; padding: 20px; border-radius: 10px; border: 1px solid #33415C; text-align: ${currentLang === 'ar' ? 'right' : 'left'}; max-width: 800px; margin: 0 auto; direction: ${currentLang === 'ar' ? 'rtl' : 'ltr'};">
                <p><i class="fas fa-calendar-alt" style="color: #0466C8; width: 25px;"></i> <strong style="color: #979DAC;">${t.founded}</strong> ${currentTourData.founded}</p>
                <p><i class="fas fa-globe" style="color: #0466C8; width: 25px;"></i> <strong style="color: #979DAC;">${t.region}</strong> ${region}</p>
                <p><i class="fas fa-trophy" style="color: #0466C8; width: 25px;"></i> <strong style="color: #979DAC;">${t.currentChampion}</strong> ${currentChamp}</p>
                <p><i class="fas fa-star" style="color: #0466C8; width: 25px;"></i> <strong style="color: #979DAC;">${t.mostSuccessful}</strong> ${mostSucc}</p>
                <p><i class="fas fa-futbol" style="color: #0466C8; width: 25px;"></i> <strong style="color: #979DAC;">${t.topScorer}</strong> ${topScorer}</p>
            </div>
            
            <div style="margin-top: 25px; width: 100%; text-align: center;">
                <a href="${finalMainWiki}" target="_blank" style="display: inline-flex; align-items: center; justify-content: center; gap: 8px; background: #0353A4; padding: 10px 25px; border-radius: 8px; color: #ffffff; text-decoration: none; border: 1px solid #0466C8; font-weight: bold; transition: 0.3s; box-shadow: 0 4px 6px #001233;">
                    <i class="fab fa-wikipedia-w"></i> <span>${t.wikiBtn}</span>
                </a>
            </div>
        </div>
    `;

    // البطاقات المتناسقة والمثبتة (direction: ltr للمحافظة على الترتيب)
    const historyList = document.getElementById("tournamentHistoryList");
    historyList.innerHTML = "";
    
    if (currentTourData.history && currentTourData.history.length > 0) {
        currentTourData.history.forEach(match => {
            const winner = currentLang === "ar" ? match.winnerAr : match.winnerEn;
            const runnerUp = currentLang === "ar" ? match.runnerUpAr : match.runnerUpEn;
            const finalLink = currentLang === "ar" ? (match.linkAr || match.link) : (match.linkEn || match.link);

            let winnerLogo = match.winnerId && footDatabase.clubs[match.winnerId] ? `<img src="${footDatabase.clubs[match.winnerId].logo}" style="width: 25px; height: 25px; object-fit: contain; margin: 0 8px; vertical-align: middle;">` : '';
            let runnerUpLogo = match.runnerUpId && footDatabase.clubs[match.runnerUpId] ? `<img src="${footDatabase.clubs[match.runnerUpId].logo}" style="width: 22px; height: 22px; object-fit: contain; margin: 0 8px; vertical-align: middle; opacity: 0.8;">` : '';

            const editionBtn = finalLink ? `<a href="${finalLink}" target="_blank" style="display: inline-flex; align-items: center; gap: 5px; background: #023E7D; border: 1px solid #0353A4; color: #ffffff; padding: 5px 15px; border-radius: 20px; font-size: 0.85rem; text-decoration: none; font-weight: bold; transition: 0.3s;"><i class="fas fa-info-circle"></i> <span>${t.editionLink}</span></a>` : '';

            historyList.innerHTML += `
                <div style="background: #001845; border: 1px solid #33415C; border-radius: 12px; padding: 15px 20px; margin-bottom: 15px; display: flex; flex-direction: column; gap: 15px; box-shadow: 0 4px 8px #001233; direction: ltr;">
                    
                    <div style="display: flex; justify-content: space-between; align-items: center; width: 100%;">
                        <div style="flex: 1; display: flex; align-items: center; justify-content: flex-end; text-align: right;">
                            <span style="color: #ffffff; font-weight: bold; font-size: 1.1rem;">${winner}</span>
                            ${winnerLogo}
                        </div>
                        <div style="margin: 0 15px; background: #0353A4; border: 1px solid #0466C8; color: #ffffff; padding: 5px 18px; border-radius: 8px; font-weight: bold; font-family: monospace; font-size: 1.2rem; min-width: 70px; text-align: center; box-shadow: 0 2px 4px #001233;">
                            ${match.score}
                        </div>
                        <div style="flex: 1; display: flex; align-items: center; justify-content: flex-start; text-align: left; opacity: 0.8;">
                            ${runnerUpLogo}
                            <span style="color: #979DAC; font-size: 1rem;">${runnerUp}</span>
                        </div>
                    </div>

                    <div style="display: flex; justify-content: center; align-items: center; gap: 20px; width: 100%; border-top: 1px dashed #5C677D; padding-top: 12px; direction: ${currentLang === 'ar' ? 'rtl' : 'ltr'};">
                        <strong style="color: #ffffff; font-size: 1.2rem;" dir="ltr">${match.year}</strong>
                        ${editionBtn}
                    </div>
                </div>
            `;
        });
    }
}
