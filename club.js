// club.js - التصميم المعتمد بألوان مخصصة وفصل لغوي صارم 100%

let currentLang = localStorage.getItem("footLang") || "ar";
let currentClubData = null;

const clubTranslations = {
    ar: {
        backText: "العودة للرئيسية", compText: "قارن النادي",
        founded: "التأسيس:", stadium: "الملعب:", wikiBtn: "ويكيبيديا",
        scorers: "الأهداف:", score: "النتيجة:", opponent: "الخصم:",
        showMore: "عرض المزيد ▼", showLess: "إخفاء ▲", editionLink: "التفاصيل",
        champion: "🏆 البطل", runnerUp: "🥈 الوصيف",
        dom: "البطولات المحلية", cont: "البطولات القارية", friendly: "البطولات الودية", other: "بطولات أخرى"
    },
    en: {
        backText: "Back to Home", compText: "Compare",
        founded: "Founded:", stadium: "Stadium:", wikiBtn: "Wikipedia",
        scorers: "Scorers:", score: "Score:", opponent: "Opponent:",
        showMore: "Show More ▼", showLess: "Show Less ▲", editionLink: "Details",
        champion: "🏆 Winner", runnerUp: "🥈 Runner-up",
        dom: "Domestic Trophies", cont: "Continental Trophies", friendly: "Friendly Trophies", other: "Other Trophies"
    }
};

window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    let currentClubId = urlParams.get('id') || "real_madrid";
    currentClubData = footDatabase.clubs[currentClubId];
    if(currentClubData) {
        applyLanguage(); 
        renderClubPage(); 
    }
};

function applyLanguage() {
    document.documentElement.dir = currentLang === "ar" ? "rtl" : "ltr";
    const t = clubTranslations[currentLang];
    
    document.getElementById("backText").innerText = t.backText;
    document.getElementById("compText").innerText = t.compText;
}

function toggleDetails(btn, hiddenDivId) {
    const t = clubTranslations[currentLang];
    const hiddenDiv = document.getElementById(hiddenDivId);
    if (hiddenDiv.style.display === "none") {
        hiddenDiv.style.display = "block";
        btn.innerHTML = `<span>${t.showLess}</span>`;
    } else {
        hiddenDiv.style.display = "none";
        btn.innerHTML = `<span>${t.showMore}</span>`;
    }
}

function renderClubPage() {
    if (!currentClubData) return;
    const t = clubTranslations[currentLang];
    
    // جلب البيانات باللغة الصحيحة بصرامة
    const clubName = currentLang === "ar" ? (currentClubData.nameAr || currentClubData.name) : (currentClubData.nameEn || currentClubData.name);
    const stadiumName = currentLang === "ar" ? (currentClubData.stadiumAr || currentClubData.stadium) : (currentClubData.stadiumEn || currentClubData.stadium);
    const foundedYear = currentLang === "ar" ? (currentClubData.foundedAr || currentClubData.founded) : (currentClubData.foundedEn || currentClubData.founded);

    const profileSection = document.getElementById("clubProfile");
    profileSection.style.cssText = "display: flex; flex-direction: column; align-items: center; justify-content: center; background: linear-gradient(135deg, #023E7D 0%, #001233 100%); padding: 30px; border-radius: 15px; border: 1px solid #33415C; margin-bottom: 30px;";

    profileSection.innerHTML = `
        <div style="background: #002855; padding: 20px; border-radius: 50%; width: 140px; height: 140px; display: flex; align-items: center; justify-content: center; border: 1px solid #33415C; margin-bottom: 20px;">
            <img src="${currentClubData.logo}" alt="Logo" style="max-width: 100px; max-height: 100px; object-fit: contain;">
        </div>
        <div style="color: #ffffff; width: 100%; text-align: center;">
            <h1 style="color: #ffffff; margin-bottom: 25px; font-size: 2.2rem;">${clubName}</h1>
            <div style="display: flex; justify-content: center; gap: 30px; font-size: 1rem; background: #001845; padding: 20px; border-radius: 10px; border: 1px solid #33415C; max-width: 600px; margin: 0 auto; direction: ${currentLang === 'ar' ? 'rtl' : 'ltr'};">
                <p><i class="fas fa-calendar-alt" style="color: #0466C8; margin: 0 5px;"></i> <strong style="color: #979DAC;">${t.founded}</strong> ${foundedYear}</p>
                <p><i class="fas fa-map-marker-alt" style="color: #0466C8; margin: 0 5px;"></i> <strong style="color: #979DAC;">${t.stadium}</strong> ${stadiumName}</p>
            </div>
        </div>
    `;

    const trophiesGrid = document.getElementById("trophiesGrid"); trophiesGrid.innerHTML = ""; 

    const continentalTypes = ["cont_1", "cont_2", "cont_3", "cont_super", "cont_defunct", "world", "world_defunct", "regional"];
    const domesticTypes = ["dom_league", "dom_cup", "dom_super", "dom_league_cup", "dom_cup_defunct"];
    const friendlyTypes = ["friendly", "friendly_2", "friendly_3"]; 
    
    const continentalTrophies = currentClubData.trophies.filter(tr => continentalTypes.includes(tr.type));
    const domesticTrophies = currentClubData.trophies.filter(tr => domesticTypes.includes(tr.type));
    const friendlyTrophies = currentClubData.trophies.filter(tr => friendlyTypes.includes(tr.type));
    const otherTrophies = currentClubData.trophies.filter(tr => !domesticTypes.includes(tr.type) && !continentalTypes.includes(tr.type) && !friendlyTypes.includes(tr.type));

    let globalToggleIndex = 0; 

    function renderSection(title, trophiesArray, icon) {
        if (trophiesArray.length === 0) return;

        const divider = document.createElement("div");
        divider.style.cssText = "grid-column: 1 / -1; margin-top: 30px; margin-bottom: 15px; border-bottom: 2px solid #33415C; padding-bottom: 10px;";
        divider.innerHTML = `<h2 style="color: #0466C8; margin: 0; font-size: 1.4rem;"><i class="${icon}"></i> ${title}</h2>`;
        trophiesGrid.appendChild(divider);

        trophiesArray.forEach(trophy => {
            let trophyName = currentLang === "ar" ? (trophy.nameAr || trophy.name) : (trophy.nameEn || trophy.name);
            let tId = null;
            if (footDatabase.tournaments) {
                for(let key in footDatabase.tournaments) {
                    if((footDatabase.tournaments[key].nameAr === trophy.nameAr) || (footDatabase.tournaments[key].nameEn === trophy.nameEn)) {
                        tId = key; break;
                    }
                }
            }
            if (tId) {
                trophyName = currentLang === "ar" ? (footDatabase.tournaments[tId].nameAr || footDatabase.tournaments[tId].name) : (footDatabase.tournaments[tId].nameEn || footDatabase.tournaments[tId].name);
            }

            const finalMainWiki = currentLang === "ar" ? (trophy.wikiLinkAr || trophy.wikiLink) : (trophy.wikiLinkEn || trophy.wikiLink);
            let detailsHtml = "";

            if (trophy.details && trophy.details.length > 0) {
                let visibleDetails = ""; let hiddenDetails = "";
                const hiddenDivId = `hidden-details-${globalToggleIndex}`; globalToggleIndex++;

                trophy.details.forEach((d, i) => {
                    // ترجمة صارمة للتفاصيل
                    const opponentName = currentLang === "ar" ? (d.opponentAr || d.opponent) : (d.opponentEn || d.opponent);
                    const scorers = currentLang === "ar" ? (d.scorersAr || d.scorers) : (d.scorersEn || d.scorers);
                    const matchScore = currentLang === "ar" ? (d.scoreAr || d.score) : (d.scoreEn || d.score);
                    const finalDetailLink = currentLang === "ar" ? (d.linkAr || d.link) : (d.linkEn || d.link);
                    
                    const statusText = d.status === "won" ? t.champion : t.runnerUp;
                    const statusBadgeColor = d.status === "won" ? '#002855' : '#001845'; 
                    const statusTextColor = d.status === "won" ? '#0466C8' : '#979DAC'; 

                    let oppId = null;
                    if (footDatabase.clubs) {
                        for(let key in footDatabase.clubs) {
                            if((footDatabase.clubs[key].nameAr === d.opponentAr) || (footDatabase.clubs[key].nameEn === d.opponentEn)) {
                                oppId = key; break;
                            }
                        }
                    }
                    let oppLogo = oppId && footDatabase.clubs[oppId] ? `<img src="${footDatabase.clubs[oppId].logo}" style="width: 25px; height: 25px; object-fit: contain; margin: 0 10px; vertical-align: middle; border-radius: 5px; box-shadow: 0 0 5px #001233;">` : '';

                    const editionBtn = finalDetailLink ? `<a href="${finalDetailLink}" target="_blank" style="display: inline-flex; align-items: center; gap: 5px; background: #023E7D; border: 1px solid #0353A4; color: #ffffff; padding: 4px 10px; border-radius: 15px; font-size: 0.8rem; text-decoration: none; transition: 0.3s; margin: 5px 0;"> <i class="fas fa-external-link-alt" style="font-size: 0.7rem;"></i> ${t.editionLink}</a>` : '';

                    let itemHtml = `
                        <div style="margin-bottom: 12px; background: #001233; padding: 12px; border-radius: 8px; border: 1px solid #33415C; line-height: 1.6;">
                            <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px dashed #33415C; padding-bottom: 8px; margin-bottom: 8px;">
                                <strong style="color: #ffffff; font-size: 1.15rem;" dir="ltr">${d.year}</strong>
                                <span style="background: ${statusBadgeColor}; color: ${statusTextColor}; padding: 3px 10px; border-radius: 15px; font-size: 0.8rem; font-weight: bold;">${statusText}</span>
                            </div>
                            <div style="font-size: 0.9rem; color: #979DAC; text-align: ${currentLang === 'ar' ? 'right' : 'left'}; direction: ${currentLang === 'ar' ? 'rtl' : 'ltr'};">
                                <p><strong style="color: #ffffff; font-size: 0.95rem;">${t.opponent}</strong> ${oppLogo}${opponentName}</p>
                                <p><strong style="color: #ffffff; font-size: 0.95rem;">${t.score}</strong> <span dir="ltr" style="background: #001845; padding: 1px 6px; border-radius: 4px; font-weight: bold;">${matchScore}</span></p>
                                <p><strong style="color: #ffffff; font-size: 0.95rem;"><i class="fas fa-futbol" style="color: #0466C8;"></i> ${t.scorers}</strong> ${scorers}</p>
                                ${editionBtn}
                            </div>
                        </div>
                    `;

                    if (i < 2) visibleDetails += itemHtml;
                    else hiddenDetails += itemHtml;
                });

                detailsHtml = `<div style="margin-top: 15px; width: 100%;">`;
                detailsHtml += visibleDetails;
                if (hiddenDetails !== "") {
                    detailsHtml += `<div id="${hiddenDivId}" style="display: none;">${hiddenDetails}</div>`;
                    detailsHtml += `<button onclick="toggleDetails(this, '${hiddenDivId}')" style="background: transparent; color: #0466C8; border: 1px solid #0466C8; padding: 8px; border-radius: 5px; cursor: pointer; width: 100%; font-weight: bold; margin-top: 5px; transition: 0.3s;"><span>${t.showMore}</span></button>`;
                }
                detailsHtml += `</div>`;
            }

            const trophyCard = document.createElement("div"); trophyCard.className = "trophy-card";
            trophyCard.style.cssText = "background: #001845; border: 1px solid #33415C; border-radius: 12px; padding: 20px; display: flex; flex-direction: column; box-shadow: 0 4px 10px #001233;";
            trophyCard.innerHTML = `
                <div style="display: flex; justify-content: space-between; width: 100%; align-items: center; border-bottom: 1px solid #33415C; padding-bottom: 15px; margin-bottom: 15px;">
                    <h3 style="margin: 0; color: #ffffff; font-size: 1.3rem;">${trophyName}</h3>
                    <div style="text-align: center; background: #001233; padding: 5px 15px; border-radius: 8px; border: 1px solid #33415C;">
                        <span style="display: block; font-size: 1.2rem; font-weight: bold; color: #ffffff;">${trophy.wonCount} <i class="fas fa-trophy" style="color: #ffffff; font-size: 0.9rem;"></i></span>
                        <span style="display: block; font-size: 0.8rem; color: #979DAC;">${trophy.runnerUpCount} <i class="fas fa-medal" style="color: #979DAC; font-size: 0.75rem;"></i></span>
                    </div>
                </div>
                ${detailsHtml}
                <a href="${finalMainWiki}" target="_blank" style="margin-top: auto; display: inline-flex; justify-content: center; align-items: center; gap: 8px; background: #0353A4; padding: 8px 15px; border-radius: 8px; text-decoration: none; color: #ffffff; font-size: 0.95rem; border: 1px solid #0466C8; font-weight: bold; align-self: center; width: 100%;">
                    <i class="fab fa-wikipedia-w" style="color: #ffffff;"></i> <span>${t.wikiBtn}</span>
                </a>
            `;
            trophiesGrid.appendChild(trophyCard);
        });
    }

    renderSection(t.cont, continentalTrophies, "fas fa-globe-europe");
    renderSection(t.dom, domesticTrophies, "fas fa-flag");
    renderSection(t.friendly, friendlyTrophies, "fas fa-handshake");
    renderSection(t.other, otherTrophies, "fas fa-medal");
}
