const footDatabase = {
    clubs: {
        "barcelona": {
            id: "barcelona", country: "Spain", continent: "Europe",
            nameAr: "برشلونة", nameEn: "Barcelona", 
            founded: "1899", stadiumAr: "سبوتيفاي كامب نو", stadiumEn: "Spotify Camp Nou", logo: "Barcelona.png",
                        trophies: [
                // --- 1. دوري أبطال أوروبا (5 ألقاب، 3 وصافة) ---
                { 
                    type: "cont_1", nameAr: "دوري أبطال أوروبا", nameEn: "UEFA Champions League", 
                    wonCount: 5, runnerUpCount: 3, count: 8, wikiLinkAr: "https://ar.wikipedia.org/wiki/%D8%AF%D9%88%D8%B1%D9%8A_%D8%A3%D8%A8%D8%B7%D8%A7%D9%84_%D8%A3%D9%88%D8%B1%D9%88%D8%A8%D8%A7", wikiLinkEn: "https://en.wikipedia.org/wiki/UEFA_Champions_League",
                    details: [
                        { status: "won", year: "2015", opponentAr: "يوفنتوس", opponentEn: "Juventus", score: "3-1", scorersAr: "برشلونة: راكيتيتش، سواريز، نيمار | يوفنتوس: موراتا", scorersEn: "FCB: Rakitić, Suárez, Neymar | JUV: Morata", linkAr: "https://ar.wikipedia.org/wiki/نهائي_دوري_أبطال_أوروبا_2015", linkEn: "https://en.wikipedia.org/wiki/2014–15_UEFA_Champions_League" },
                        { status: "won", year: "2011", opponentAr: "مانشستر يونايتد", opponentEn: "Manchester United", score: "3-1", scorersAr: "برشلونة: بيدرو، ميسي، فيا | يونايتد: روني", scorersEn: "FCB: Pedro, Messi, Villa | MUN: Rooney", linkAr: "https://ar.wikipedia.org/wiki/نهائي_دوري_أبطال_أوروبا_2011", linkEn: "https://en.wikipedia.org/wiki/2010–11_UEFA_Champions_League" },
                        { status: "won", year: "2009", opponentAr: "مانشستر يونايتد", opponentEn: "Manchester United", score: "2-0", scorersAr: "إيتو، ميسي", scorersEn: "Eto'o, Messi", link: "https://ar.wikipedia.org/wiki/نهائي_دوري_أبطال_أوروبا_2009", linkEn: "https://en.wikipedia.org/wiki/2008–09_UEFA_Champions_League" },
                        { status: "won", year: "2006", opponentAr: "أرسنال", opponentEn: "Arsenal", score: "2-1", scorersAr: "برشلونة: إيتو، بيليتي | أرسنال: كامبل", scorersEn: "FCB: Eto'o, Belletti | ARS: Campbell", linkAr: "https://ar.wikipedia.org/wiki/نهائي_دوري_أبطال_أوروبا_2006", linkEn: "https://en.wikipedia.org/wiki/2005–06_UEFA_Champions_League" },
                        { status: "runner_up", year: "1994", opponentAr: "إي سي ميلان", opponentEn: "AC Milan", score: "0-4", scorersAr: "ميلان: ماسارو (2)، سافيسيفيتش، ديسايي", scorersEn: "MIL: Massaro (2), Savićević, Desailly", linkAr: "https://ar.wikipedia.org/wiki/نهائي_دوري_أبطال_أوروبا_1994", linkEn: "https://en.wikipedia.org/wiki/1993–94_UEFA_Champions_League" },
                        { status: "won", year: "1992", opponentAr: "سامبدوريا", opponentEn: "Sampdoria", scoreAr: "1-0 (ب.و.إ)", scoreEn: "1-0 (AET)", scorersAr: "كومان", scorersEn: "Koeman", link: "https://ar.wikipedia.org/wiki/نهائي_كأس_أوروبا_1992", linkEn: "https://en.wikipedia.org/wiki/1991–92_European_Cup" },
                        { status: "runner_up", year: "1986", opponentAr: "ستيوا بوخارست", opponentEn: "Steaua București", scoreAr: "0-0 (0-2 ر.ت)", scoreEn: "0-0 (0-2 PEN)", scorersAr: "لا يوجد (ركلات ترجيح)", scorersEn: "None (Penalties)", linkAr: "https://ar.wikipedia.org/wiki/نهائي_كأس_أوروبا_1986", linkEn: "https://en.wikipedia.org/wiki/1985–86_European_Cup" },
                        { status: "runner_up", year: "1961", opponentAr: "بنفيكا", opponentEn: "Benfica", score: "2-3", scorersAr: "برشلونة: كوتشيس، تشيبور | بنفيكا: أغواس، رماليتس (ع.م)، كولونا", scorersEn: "FCB: Kocsis, Czibor | BEN: Águas, Ramallets (o.g.), Coluna", linkAr: "https://ar.wikipedia.org/wiki/نهائي_كأس_أوروبا_1961", linkEn: "https://en.wikipedia.org/wiki/1960–61_European_Cup"}
                    ]
                },
               // --- 2. الدوري الإسباني (28 لقب، 28 وصافة) ---
                { 
                    type: "dom_league", nameAr: "الدوري الإسباني", nameEn: "La Liga", 
                    wonCount: 28, runnerUpCount: 28, count: 56, wikiLinkAr: "https://ar.wikipedia.org/wiki/الدوري_الإسباني", wikiLinkEn: "https://en.wikipedia.org/wiki/La_Liga",
                    details: [
                        { status: "won", year: "2025-2026", opponentAr: "ريال مدريد", opponentEn: "Real Madrid", scoreAr: "94 نقطة", scoreEn: "94 Pts", scorersAr: "فيران توريس، لامين يامال (هدافي الفريق)", scorersEn: "Ferrán Torres, Lamine Yamal (Top Scorers)", linkAr: "https://ar.wikipedia.org/wiki/الدوري_الإسباني_2025-26", linkEn: "https://en.wikipedia.org/wiki/2025-26_La_Liga"},
                        { status: "won", year: "2024-2025", opponentAr: "ريال مدريد", opponentEn: "Real Madrid", scoreAr: "88 نقطة", scoreEn: "88 Pts", scorersAr: "ليفاندوفسكي (هداف الفريق)", scorersEn: "Lewandowski (Top Scorer)", linkAr: "https://ar.wikipedia.org/wiki/الدوري_الإسباني_2024–25", linkEn: "https://en.wikipedia.org/wiki/2024–25_La_Liga"},
                        { status: "runner-up", year: "2023-2024", opponentAr: "ريال مدريد", opponentEn: "Real Madrid", scoreAr: "85 نقطة", scoreEn: "85 Pts", scorersAr: "ليفاندوفسكي (هداف الفريق)", scorersEn: "Lewandowski (Top Scorer)", linkAr: "https://ar.wikipedia.org/wiki/الدوري_الإسباني_2023-24", linkEn: "https://en.wikipedia.org/wiki/2023–24_La_Liga"},
                        { status: "won", year: "2022-2023", opponentAr: "ريال مدريد", opponentEn: "Real Madrid", scoreAr: "88 نقطة", scoreEn: "88 Pts", scorersAr: "ليفاندوفسكي (هداف الفريق)", scorersEn: "Lewandowski (Top Scorer)", linkAr: "https://ar.wikipedia.org/wiki/الدوري_الإسباني_2022–23", linkEn: "https://en.wikipedia.org/wiki/2022–23_La_Liga"},
                        { status: "runner_up", year: "2021-2022", opponentAr: "ريال مدريد", opponentEn: "Real Madrid", scoreAr: "73 نقطة", scoreEn: "73 Pts", scorersAr: "ديباي (هداف الفريق)", scorersEn: "Depay (Top Scorer)", linkAr: "https://ar.wikipedia.org/wiki/الدوري_الإسباني_2021–22", linkEn: "https://en.wikipedia.org/wiki/2021–22_La_Liga"},
                        { status: "runner_up", year: "2019-2020", opponentAr: "ريال مدريد", opponentEn: "Real Madrid", scoreAr: "82 نقطة", scoreEn: "82 Pts", scorersAr: "ميسي (هداف الدوري)", scorersEn: "Messi (Top Scorer)", linkAr: "https://ar.wikipedia.org/wiki/الدوري_الإسباني_2019–20", linkEn: "https://en.wikipedia.org/wiki/2019–20_La_Liga"},
                        { status: "won", year: "2018-2019", opponentAr: "أتلتيكو مدريد", opponentEn: "Atlético Madrid", scoreAr: "87 نقطة", scoreEn: "87 Pts", scorersAr: "ميسي (هداف الدوري)", scorersEn: "Messi (Top Scorer)", linkAr: "https://ar.wikipedia.org/wiki/الدوري_الإسباني_2018–19", linkEn: "https://en.wikipedia.org/wiki/2018–19_La_Liga"},
                        { status: "won", year: "2017-2018", opponentAr: "أتلتيكو مدريد", opponentEn: "Atlético Madrid", scoreAr: "93 نقطة", scoreEn: "93 Pts", scorersAr: "ميسي (هداف الدوري)", scorersEn: "Messi (Top Scorer)", linkAr: "https://ar.wikipedia.org/wiki/الدوري_الإسباني_2017–18", linkEn: "https://en.wikipedia.org/wiki/2017–18_La_Liga"},
                        { status: "runner_up", year: "2016-2017", opponentAr: "ريال مدريد", opponentEn: "Real Madrid", scoreAr: "90 نقطة", scoreEn: "90 Pts", scorersAr: "ميسي (هداف الدوري)", scorersEn: "Messi (Top Scorer)", linkAr: "https://ar.wikipedia.org/wiki/الدوري_الإسباني_2016–17", linkEn: "https://en.wikipedia.org/wiki/2016–17_La_Liga"},
                        { status: "won", year: "2015-2016", opponentAr: "ريال مدريد", opponentEn: "Real Madrid", scoreAr: "91 نقطة", scoreEn: "91 Pts", scorersAr: "سواريز (هداف الدوري)", scorersEn: "Suárez (Top Scorer)", linkAr: "https://ar.wikipedia.org/wiki/الدوري_الإسباني_2015–16", linkEn: "https://en.wikipedia.org/wiki/2015–16_La_Liga"},
                        { status: "won", year: "2014-2015", opponentAr: "ريال مدريد", opponentEn: "Real Madrid", scoreAr: "94 نقطة", scoreEn: "94 Pts", scorersAr: "ميسي (43 هدف)", scorersEn: "Messi (43 goals)", linkAr: "https://ar.wikipedia.org/wiki/الدوري_الإسباني_2014–15", linkEn: "https://en.wikipedia.org/wiki/2014–15_La_Liga"},
                        { status: "runner_up", year: "2013-2014", opponentAr: "أتلتيكو مدريد", opponentEn: "Atlético Madrid", scoreAr: "87 نقطة", scoreEn: "87 Pts", scorersAr: "ميسي (28 هدف)", scorersEn: "Messi (28 goals)", linkAr: "https://ar.wikipedia.org/wiki/الدوري_الإسباني_2013–14", linkEn: "https://en.wikipedia.org/wiki/2013–14_La_Liga"},
                        { status: "won", year: "2012-2013", opponentAr: "ريال مدريد", opponentEn: "Real Madrid", scoreAr: "100 نقطة", scoreEn: "100 Pts", scorersAr: "ميسي (46 هدف)", scorersEn: "Messi (46 goals)", linkAr: "https://ar.wikipedia.org/wiki/الدوري_الإسباني_2012–13", linkEn: "https://en.wikipedia.org/wiki/2012–13_La_Liga"},
                        { status: "runner_up", year: "2011-2012", opponentAr: "ريال مدريد", opponentEn: "Real Madrid", scoreAr: "91 نقطة", scoreEn: "91 Pts", scorersAr: "ميسي (50 هدف)", scorersEn: "Messi (50 goals)", linkAr: "https://ar.wikipedia.org/wiki/الدوري_الإسباني_2011–12", linkEn: "https://en.wikipedia.org/wiki/2011–12_La_Liga"},
                        { status: "won", year: "2010-2011", opponentAr: "ريال مدريد", opponentEn: "Real Madrid", scoreAr: "96 نقطة", scoreEn: "96 Pts", scorersAr: "ميسي (31 هدف)", scorersEn: "Messi (31 goals)", linkAr: "https://ar.wikipedia.org/wiki/الدوري_الإسباني_2010–11", linkEn: "https://en.wikipedia.org/wiki/2010–11_La_Liga"},
                        { status: "won", year: "2009-2010", opponentAr: "ريال مدريد", opponentEn: "Real Madrid", scoreAr: "99 نقطة", scoreEn: "99 Pts", scorersAr: "ميسي (34 هدف)", scorersEn: "Messi (34 goals)", linkAr: "https://ar.wikipedia.org/wiki/الدوري_الإسباني_2009–10", linkEn: "https://en.wikipedia.org/wiki/2009–10_La_Liga"},
                        { status: "won", year: "2008-2009", opponentAr: "ريال مدريد", opponentEn: "Real Madrid", scoreAr: "87 نقطة", scoreEn: "87 Pts", scorersAr: "إيتو (30 هدف)", scorersEn: "Eto'o (30 goals)", linkAr: "https://ar.wikipedia.org/wiki/الدوري_الإسباني_2008–09", linkEn: "https://en.wikipedia.org/wiki/2008–09_La_Liga"},
                        { status: "runner_up", year: "2006-2007", opponentAr: "ريال مدريد", opponentEn: "Real Madrid", scoreAr: "76 نقطة", scoreEn: "76 Pts", scorersAr: "رونالدينيو (21 هدف)", scorersEn: "Ronaldinho (21 goals)", linkAr: "https://ar.wikipedia.org/wiki/الدوري_الإسباني_2006–07", linkEn: "https://en.wikipedia.org/wiki/2006–07_La_Liga"},
                        { status: "won", year: "2005-2006", opponentAr: "ريال مدريد", opponentEn: "Real Madrid", scoreAr: "82 نقطة", scoreEn: "82 Pts", scorersAr: "إيتو (26 هدف)", scorersEn: "Eto'o (26 goals)", linkAr: "https://ar.wikipedia.org/wiki/الدوري_الإسباني_2005–06", linkEn: "https://en.wikipedia.org/wiki/2005–06_La_Liga"},
                        { status: "won", year: "2004-2005", opponentAr: "ريال مدريد", opponentEn: "Real Madrid", scoreAr: "84 نقطة", scoreEn: "84 Pts", scorersAr: "إيتو (24 هدف)", scorersEn: "Eto'o (24 goals)", linkAr: "https://ar.wikipedia.org/wiki/الدوري_الإسباني_2004–05", linkEn: "https://en.wikipedia.org/wiki/2004–05_La_Liga"},
                        { status: "runner_up", year: "2003-2004", opponentAr: "فالنسيا", opponentEn: "Valencia", scoreAr: "72 نقطة", scoreEn: "72 Pts", scorersAr: "رونالدينيو (15 هدف)", scorersEn: "Ronaldinho (15 goals)", linkAr: "https://ar.wikipedia.org/wiki/الدوري_الإسباني_2003–04", linkEn: "https://en.wikipedia.org/wiki/2003–04_La_Liga"},
                        { status: "runner_up", year: "1999-2000", opponentAr: "ديبورتيفو لاكورونيا", opponentEn: "Deportivo La Coruña", scoreAr: "64 نقطة", scoreEn: "64 Pts", scorersAr: "كلايفرت (15 هدف)", scorersEn: "Kluivert (15 goals)", linkAr: "https://ar.wikipedia.org/wiki/الدوري_الإسباني_1999–2000", linkEn: "https://en.wikipedia.org/wiki/1999–2000_La_Liga"},
                        { status: "won", year: "1998-1999", opponentAr: "ريال مدريد", opponentEn: "Real Madrid", scoreAr: "79 نقطة", scoreEn: "79 Pts", scorersAr: "ريفالدو (24 هدف)", scorersEn: "Rivaldo (24 goals)", linkAr: "https://ar.wikipedia.org/wiki/الدوري_الإسباني_1998–99", linkEn: "https://en.wikipedia.org/wiki/1998–99_La_Liga"},
                        { status: "won", year: "1997-1998", opponentAr: "أتلتيك بيلباو", opponentEn: "Athletic Bilbao", scoreAr: "74 نقطة", scoreEn: "74 Pts", scorersAr: "ريفالدو (19 هدف)", scorersEn: "Rivaldo (19 goals)", linkAr: "https://ar.wikipedia.org/wiki/الدوري_الإسباني_1997–98", linkEn: "https://en.wikipedia.org/wiki/1997–98_La_Liga"},
                        { status: "runner_up", year: "1996-1997", opponentAr: "ريال مدريد", opponentEn: "Real Madrid", scoreAr: "90 نقطة", scoreEn: "90 Pts", scorersAr: "رونالدو (34 هدف)", scorersEn: "Ronaldo (34 goals)", linkAr: "https://ar.wikipedia.org/wiki/الدوري_الإسباني_1996–97", linkEn: "https://en.wikipedia.org/wiki/1996–97_La_Liga"},
                        { status: "won", year: "1993-1994", opponentAr: "ديبورتيفو لاكورونيا", opponentEn: "Deportivo La Coruña", scoreAr: "56 نقطة", scoreEn: "56 Pts", scorersAr: "روماريو (30 هدف)", scorersEn: "Romário (30 goals)", linkAr: "https://ar.wikipedia.org/wiki/الدوري_الإسباني_1993–94", linkEn: "https://en.wikipedia.org/wiki/1993–94_La_Liga"},
                        { status: "won", year: "1992-1993", opponentAr: "ريال مدريد", opponentEn: "Real Madrid", scoreAr: "58 نقطة", scoreEn: "58 Pts", scorersAr: "ستويتشكوف (20 هدف)", scorersEn: "Stoichkov (20 goals)", linkAr: "https://ar.wikipedia.org/wiki/الدوري_الإسباني_1992–93", linkEn: "https://en.wikipedia.org/wiki/1992–93_La_Liga"},
                        { status: "won", year: "1991-1992", opponentAr: "ريال مدريد", opponentEn: "Real Madrid", scoreAr: "55 نقطة", scoreEn: "55 Pts", scorersAr: "ستويتشكوف (17 هدف)", scorersEn: "Stoichkov (17 goals)", linkAr: "https://ar.wikipedia.org/wiki/الدوري_الإسباني_1991–92", linkEn: "https://en.wikipedia.org/wiki/1991–92_La_Liga"},
                        { status: "won", year: "1990-1991", opponentAr: "أتلتيكو مدريد", opponentEn: "Atlético Madrid", scoreAr: "57 نقطة", scoreEn: "57 Pts", scorersAr: "ستويتشكوف (14 هدف)", scorersEn: "Stoichkov (14 goals)", linkAr: "https://ar.wikipedia.org/wiki/الدوري_الإسباني_1990–91", linkEn: "https://en.wikipedia.org/wiki/1990–91_La_Liga"},
                        { status: "runner_up", year: "1988-1989", opponentAr: "ريال مدريد", opponentEn: "Real Madrid", scoreAr: "57 نقطة", scoreEn: "57 Pts", scorersAr: "خوليو ساليناس (20 هدف)", scorersEn: "Julio Salinas (20 goals)", linkAr: "https://ar.wikipedia.org/wiki/الدوري_الإسباني_1988–89", linkEn: "https://en.wikipedia.org/wiki/1988–89_La_Liga"},
                        { status: "runner_up", year: "1986-1987", opponentAr: "ريال مدريد", opponentEn: "Real Madrid", scoreAr: "63 نقطة", scoreEn: "63 Pts", scorersAr: "غاري لينيكر (20 هدف)", scorersEn: "Gary Lineker (20 goals)", linkAr: "https://ar.wikipedia.org/wiki/الدوري_الإسباني_1986–87", linkEn: "https://en.wikipedia.org/wiki/1986–87_La_Liga"},
                        { status: "runner_up", year: "1985-1986", opponentAr: "ريال مدريد", opponentEn: "Real Madrid", scoreAr: "45 نقطة", scoreEn: "45 Pts", scorersAr: "بيرند شوستر (10 أهداف)", scorersEn: "Bernd Schuster (10 goals)", linkAr: "https://ar.wikipedia.org/wiki/الدوري_الإسباني_1985–86", linkEn: "https://en.wikipedia.org/wiki/1985–86_La_Liga"},
                        { status: "won", year: "1984-1985", opponentAr: "أتلتيكو مدريد", opponentEn: "Atlético Madrid", scoreAr: "53 نقطة", scoreEn: "53 Pts", scorersAr: "ستيف أركيبالد (15 هدف)", scorersEn: "Steve Archibald (15 goals)", linkAr: "https://ar.wikipedia.org/wiki/الدوري_الإسباني_1984–85", linkEn: "https://en.wikipedia.org/wiki/1984–85_La_Liga"},
                        { status: "runner_up", year: "1981-1982", opponentAr: "ريال سوسيداد", opponentEn: "Real Sociedad", scoreAr: "45 نقطة", scoreEn: "45 Pts", scorersAr: "كيني (27 هدف)", scorersEn: "Quini (27 goals)", linkAr: "https://ar.wikipedia.org/wiki/الدوري_الإسباني_1981–82", linkEn: "https://en.wikipedia.org/wiki/1981–82_La_Liga"},
                        { status: "runner_up", year: "1977-1978", opponentAr: "ريال مدريد", opponentEn: "Real Madrid", scoreAr: "41 نقطة", scoreEn: "41 Pts", scorersAr: "أسينسي، ريكساش (9 أهداف)", scorersEn: "Asensi, Rexach (9 goals)", linkAr: "https://ar.wikipedia.org/wiki/الدوري_الإسباني_1977–78", linkEn: "https://en.wikipedia.org/wiki/1977–78_La_Liga"},
                        { status: "runner_up", year: "1976-1977", opponentAr: "أتلتيكو مدريد", opponentEn: "Atlético Madrid", scoreAr: "45 نقطة", scoreEn: "45 Pts", scorersAr: "مانويل كلاريس (22 هدف)", scorersEn: "Manuel Clares (22 goals)", linkAr: "https://ar.wikipedia.org/wiki/الدوري_الإسباني_1976–77", linkEn: "https://en.wikipedia.org/wiki/1976–77_La_Liga"},
                        { status: "runner_up", year: "1975-1976", opponentAr: "ريال مدريد", opponentEn: "Real Madrid", scoreAr: "43 نقطة", scoreEn: "43 Pts", scorersAr: "يوهان نيسكينز (12 هدف)", scorersEn: "Johan Neeskens (12 goals)", linkAr: "https://ar.wikipedia.org/wiki/الدوري_الإسباني_1975–76", linkEn: "https://en.wikipedia.org/wiki/1975–76_La_Liga"},
                        { status: "won", year: "1973-1974", opponentAr: "أتلتيكو مدريد", opponentEn: "Atlético Madrid", scoreAr: "50 نقطة", scoreEn: "50 Pts", scorersAr: "يوهان كرويف (16 هدف)", scorersEn: "Johan Cruyff (16 goals)", linkAr: "https://ar.wikipedia.org/wiki/الدوري_الإسباني_1973–74", linkEn: "https://en.wikipedia.org/wiki/1973–74_La_Liga"},
                        { status: "runner_up", year: "1972-1973", opponentAr: "أتلتيكو مدريد", opponentEn: "Atlético Madrid", scoreAr: "46 نقطة", scoreEn: "46 Pts", scorersAr: "خوسيه باريوس (8 أهداف)", scorersEn: "José Barrios (8 goals)", linkAr: "https://ar.wikipedia.org/wiki/الدوري_الإسباني_1972–73", linkEn: "https://en.wikipedia.org/wiki/1972–73_La_Liga"},
                        { status: "runner_up", year: "1970-1971", opponentAr: "فالنسيا", opponentEn: "Valencia", scoreAr: "43 نقطة", scoreEn: "43 Pts", scorersAr: "ريكساش (17 هدف)", scorersEn: "Rexach (17 goals)", linkAr: "https://ar.wikipedia.org/wiki/الدوري_الإسباني_1970–71", linkEn: "https://en.wikipedia.org/wiki/1970–71_La_Liga"},
                        { status: "runner_up", year: "1967-1968", opponentAr: "ريال مدريد", opponentEn: "Real Madrid", scoreAr: "39 نقطة", scoreEn: "39 Pts", scorersAr: "خوسيه زالدوا (12 هدف)", scorersEn: "José Zaldúa (12 goals)", linkAr: "https://ar.wikipedia.org/wiki/الدوري_الإسباني_1967–68", linkEn: "https://en.wikipedia.org/wiki/1967–68_La_Liga"},
                        { status: "runner_up", year: "1966-1967", opponentAr: "ريال مدريد", opponentEn: "Real Madrid", scoreAr: "42 نقطة", scoreEn: "42 Pts", scorersAr: "جوسيب فوستي (10 أهداف)", scorersEn: "Josep Fusté (10 goals)", linkAr: "https://ar.wikipedia.org/wiki/الدوري_الإسباني_1966–67", linkEn: "https://en.wikipedia.org/wiki/1966–67_La_Liga"},
                        { status: "runner_up", year: "1963-1964", opponentAr: "ريال مدريد", opponentEn: "Real Madrid", scoreAr: "42 نقطة", scoreEn: "42 Pts", scorersAr: "كايتانو ري (17 هدف)", scorersEn: "Cayetano Ré (17 goals)", linkAr: "https://ar.wikipedia.org/wiki/الدوري_الإسباني_1963–64", linkEn: "https://en.wikipedia.org/wiki/1963–64_La_Liga"},
                        { status: "runner_up", year: "1961-1962", opponentAr: "ريال مدريد", opponentEn: "Real Madrid", scoreAr: "40 نقطة", scoreEn: "40 Pts", scorersAr: "إيفاريستو (20 هدف)", scorersEn: "Evaristo (20 goals)", linkAr: "https://ar.wikipedia.org/wiki/الدوري_الإسباني_1961–62", linkEn: "https://en.wikipedia.org/wiki/1961–62_La_Liga"},
                        { status: "won", year: "1959-1960", opponentAr: "ريال مدريد", opponentEn: "Real Madrid", scoreAr: "46 نقطة", scoreEn: "46 Pts", scorersAr: "إيولوجيو مارتينيز (23 هدف)", scorersEn: "Eulogio Martínez (23 goals)", linkAr: "https://ar.wikipedia.org/wiki/الدوري_الإسباني_1959–60", linkEn: "https://en.wikipedia.org/wiki/1959–60_La_Liga"},
                        { status: "won", year: "1958-1959", opponentAr: "ريال مدريد", opponentEn: "Real Madrid", scoreAr: "51 نقطة", scoreEn: "51 Pts", scorersAr: "إيفاريستو (20 هدف)", scorersEn: "Evaristo (20 goals)", linkAr: "https://ar.wikipedia.org/wiki/الدوري_الإسباني_1958–59", linkEn: "https://en.wikipedia.org/wiki/1958–59_La_Liga"},
                        { status: "runner_up", year: "1955-1956", opponentAr: "أتلتيك بيلباو", opponentEn: "Athletic Bilbao", scoreAr: "47 نقطة", scoreEn: "47 Pts", scorersAr: "لاديسلاو كوبالا (14 هدف)", scorersEn: "Ladislao Kubala (14 goals)", linkAr: "https://ar.wikipedia.org/wiki/الدوري_الإسباني_1955–56", linkEn: "https://en.wikipedia.org/wiki/1955–56_La_Liga"},
                        { status: "runner_up", year: "1954-1955", opponentAr: "ريال مدريد", opponentEn: "Real Madrid", scoreAr: "41 نقطة", scoreEn: "41 Pts", scorersAr: "لاديسلاو كوبالا (14 هدف)", scorersEn: "Ladislao Kubala (14 goals)", linkAr: "https://ar.wikipedia.org/wiki/الدوري_الإسباني_1954–55", linkEn: "https://en.wikipedia.org/wiki/1954–55_La_Liga"},
                        { status: "runner_up", year: "1953-1954", opponentAr: "ريال مدريد", opponentEn: "Real Madrid", scoreAr: "36 نقطة", scoreEn: "36 Pts", scorersAr: "لاديسلاو كوبالا (23 هدف)", scorersEn: "Ladislao Kubala (23 goals)", linkAr: "https://ar.wikipedia.org/wiki/الدوري_الإسباني_1953–54", linkEn: "https://en.wikipedia.org/wiki/1953–54_La_Liga"},
                        { status: "won", year: "1952-1953", opponentAr: "فالنسيا", opponentEn: "Valencia", scoreAr: "42 نقطة", scoreEn: "42 Pts", scorersAr: "توماس مورينو (22 هدف)", scorersEn: "Tomás Moreno (22 goals)", linkAr: "https://ar.wikipedia.org/wiki/الدوري_الإسباني_1952–53", linkEn: "https://en.wikipedia.org/wiki/1952–53_La_Liga"},
                        { status: "won", year: "1951-1952", opponentAr: "أتلتيك بيلباو", opponentEn: "Athletic Bilbao", scoreAr: "43 نقطة", scoreEn: "43 Pts", scorersAr: "لاديسلاو كوبالا (26 هدف)", scorersEn: "Ladislao Kubala (26 goals)", linkAr: "https://ar.wikipedia.org/wiki/الدوري_الإسباني_1951–52", linkEn: "https://en.wikipedia.org/wiki/1951–52_La_Liga"},
                        { status: "won", year: "1948-1949", opponentAr: "فالنسيا", opponentEn: "Valencia", scoreAr: "37 نقطة", scoreEn: "37 Pts", scorersAr: "سيزار رودريغيز (28 هدف)", scorersEn: "César Rodríguez (28 goals)", linkAr: "https://ar.wikipedia.org/wiki/الدوري_الإسباني_1948–49", linkEn: "https://en.wikipedia.org/wiki/1948–49_La_Liga"},
                        { status: "won", year: "1947-1948", opponentAr: "فالنسيا", opponentEn: "Valencia", scoreAr: "37 نقطة", scoreEn: "37 Pts", scorersAr: "سيزار رودريغيز (19 هدف)", scorersEn: "César Rodríguez (19 goals)", linkAr: "https://ar.wikipedia.org/wiki/الدوري_الإسباني_1947–48", linkEn: "https://en.wikipedia.org/wiki/1947–48_La_Liga"},
                        { status: "runner_up", year: "1945-1946", opponentAr: "إشبيلية", opponentEn: "Sevilla", scoreAr: "35 نقطة", scoreEn: "35 Pts", scorersAr: "سيزار رودريغيز (11 هدف)", scorersEn: "César Rodríguez (11 goals)", linkAr: "https://ar.wikipedia.org/wiki/الدوري_الإسباني_1945–46", linkEn: "https://en.wikipedia.org/wiki/1945–46_La_Liga"},
                        { status: "won", year: "1944-1945", opponentAr: "ريال مدريد", opponentEn: "Real Madrid", scoreAr: "39 نقطة", scoreEn: "39 Pts", scorersAr: "جوسيب إسكولا (16 هدف)", scorersEn: "Josep Escolà (16 goals)", linkAr: "https://ar.wikipedia.org/wiki/الدوري_الإسباني_1944–45", linkEn: "https://en.wikipedia.org/wiki/1944–45_La_Liga"},
                        { status: "runner_up", year: "1929-1930", opponentAr: "أتلتيك بيلباو", opponentEn: "Athletic Bilbao", scoreAr: "23 نقطة", scoreEn: "23 Pts", scorersAr: "كارلوس بيستيت (12 هدف)", scorersEn: "Carles Bestit (12 goals)", linkAr: "https://ar.wikipedia.org/wiki/الدوري_الإسباني_1929–30", linkEn: "https://en.wikipedia.org/wiki/1929–30_La_Liga"},
                        { status: "won", year: "1929", opponentAr: "ريال مدريد", opponentEn: "Real Madrid", scoreAr: "25 نقطة", scoreEn: "25 Pts", scorersAr: "مانويل باريرا (11 هدف)", scorersEn: "Manuel Parera (11 goals)", linkAr: "https://ar.wikipedia.org/wiki/الدوري_الإسباني_1929", linkEn: "https://en.wikipedia.org/wiki/1929_La_Liga"}
                        
                    ]
                },
                // --- كأس ملك إسبانيا - برشلونة (31 لقب، 11 وصافة) ---
                { 
                    type: "dom_cup", nameAr: "كأس ملك إسبانيا", nameEn: "Copa del Rey", 
                    wonCount: 32, runnerUpCount: 12, count: 44, wikiLinkAr: "https://ar.wikipedia.org/wiki/كأس_ملك_إسبانيا", wikiLinkEn: "https://en.wikipedia.org/wiki/Copa_del_Rey",
                    details: [
                        {
                        	status: "won", year: "2025", opponentAr: "ريال مدريد", opponentEn: "Real Madrid", scoreAr: "3-2", scoreEn: "3-2",
                            scorersAr: "برشلونة: بيدري، فيران توريس، كوندي | مدريد: مبابي، تشواميني",
                            scorersEn: "BAR: Pedri, Ferrán Torres, Koundé | RMA: Mbappé, Tchouaméni",
                            linkAr: "https://ar.wikipedia.org/wiki/نهائي_كأس_ملك_إسبانيا_2025", linkEn: "https://en.wikipedia.org/wiki/2025_Copa_del_Rey_final" 
                        },
                        { 
                            status: "won", year: "2021", opponentAr: "أتلتيك بيلباو", opponentEn: "Athletic Bilbao", scoreAr: "4-0", scoreEn: "4-0",
                            scorersAr: "برشلونة: غريزمان، دي يونغ، ميسي (2)", 
                            scorersEn: "BAR: Griezmann, De Jong, Messi (2)",
                            linkAr: "https://ar.wikipedia.org/wiki/نهائي_كأس_ملك_إسبانيا_2021", linkEn: "https://en.wikipedia.org/wiki/2021_Copa_del_Rey_final" 
                        },
                        { 
                            status: "runner_up", year: "2019", opponentAr: "فالنسيا", opponentEn: "Valencia", scoreAr: "1-2", scoreEn: "1-2",
                            scorersAr: "برشلونة: ميسي | فالنسيا: غاميرو، رودريغو", 
                            scorersEn: "BAR: Messi | VAL: Gameiro, Rodrigo",
                            linkAr: "https://ar.wikipedia.org/wiki/نهائي_كأس_ملك_إسبانيا_2019", linkEn: "https://en.wikipedia.org/wiki/2019_Copa_del_Rey_final" 
                        },
                        { 
                            status: "won", year: "2018", opponentAr: "إشبيلية", opponentEn: "Sevilla", scoreAr: "5-0", scoreEn: "5-0",
                            scorersAr: "برشلونة: سواريز (2)، ميسي، إنييستا، كوتينيو", 
                            scorersEn: "BAR: Suárez (2), Messi, Iniesta, Coutinho",
                            linkAr: "https://ar.wikipedia.org/wiki/نهائي_كأس_ملك_إسبانيا_2018", linkEn: "https://en.wikipedia.org/wiki/2018_Copa_del_Rey_final" 
                        },
                        { 
                            status: "won", year: "2017", opponentAr: "ألافيس", opponentEn: "Alavés", scoreAr: "3-1", scoreEn: "3-1",
                            scorersAr: "برشلونة: ميسي، نيمار، باكو ألكاسير | ألافيس: ثيو هيرنانديز", 
                            scorersEn: "BAR: Messi, Neymar, Alcácer | ALA: Theo Hernandez",
                            linkAr: "https://ar.wikipedia.org/wiki/نهائي_كأس_ملك_إسبانيا_2017", linkEn: "https://en.wikipedia.org/wiki/2017_Copa_del_Rey_final" 
                        },
                        { 
                            status: "won", year: "2016", opponentAr: "إشبيلية", opponentEn: "Sevilla", scoreAr: "2-0 (ب.و.إ)", scoreEn: "2-0 (AET)",
                            scorersAr: "برشلونة: ألبا، نيمار", 
                            scorersEn: "BAR: Alba, Neymar",
                            linkAr: "https://ar.wikipedia.org/wiki/نهائي_كأس_ملك_إسبانيا_2016", linkEn: "https://en.wikipedia.org/wiki/2016_Copa_del_Rey_final" 
                        },
                        { 
                            status: "won", year: "2015", opponentAr: "أتلتيك بيلباو", opponentEn: "Athletic Bilbao", scoreAr: "3-1", scoreEn: "3-1",
                            scorersAr: "برشلونة: ميسي (2)، نيمار | بيلباو: ويليامز", 
                            scorersEn: "BAR: Messi (2), Neymar | ATH: Williams",
                            linkAr: "https://ar.wikipedia.org/wiki/نهائي_كأس_ملك_إسبانيا_2015", linkEn: "https://en.wikipedia.org/wiki/2015_Copa_del_Rey_final" 
                        },
                        { 
                            status: "runner_up", year: "2014", opponentAr: "ريال مدريد", opponentEn: "Real Madrid", scoreAr: "1-2", scoreEn: "1-2",
                            scorersAr: "برشلونة: بارترا | مدريد: دي ماريا، بيل", 
                            scorersEn: "BAR: Bartra | RMA: Di María, Bale",
                            linkAr: "https://ar.wikipedia.org/wiki/نهائي_كأس_ملك_إسبانيا_2014", linkEn: "https://en.wikipedia.org/wiki/2014_Copa_del_Rey_final" 
                        },
                        { 
                            status: "won", year: "2012", opponentAr: "أتلتيك بيلباو", opponentEn: "Athletic Bilbao", scoreAr: "3-0", scoreEn: "3-0",
                            scorersAr: "برشلونة: بيدرو (2)، ميسي", 
                            scorersEn: "BAR: Pedro (2), Messi",
                            linkAr: "https://ar.wikipedia.org/wiki/نهائي_كأس_ملك_إسبانيا_2012", linkEn: "https://en.wikipedia.org/wiki/2012_Copa_del_Rey_final" 
                        },
                        { 
                            status: "runner_up", year: "2011", opponentAr: "ريال مدريد", opponentEn: "Real Madrid", scoreAr: "0-1 (ب.و.إ)", scoreEn: "0-1 (AET)",
                            scorersAr: "مدريد: رونالدو", 
                            scorersEn: "RMA: Ronaldo",
                            linkAr: "https://ar.wikipedia.org/wiki/نهائي_كأس_ملك_إسبانيا_2011", linkEn: "https://en.wikipedia.org/wiki/2011_Copa_del_Rey_final" 
                        },
                        { 
                            status: "won", year: "2009", opponentAr: "أتلتيك بيلباو", opponentEn: "Athletic Bilbao", scoreAr: "4-1", scoreEn: "4-1",
                            scorersAr: "برشلونة: توري، ميسي، بويان، تشافي | بيلباو: توكيرو", 
                            scorersEn: "BAR: Touré, Messi, Bojan, Xavi | ATH: Toquero",
                            linkAr: "https://ar.wikipedia.org/wiki/نهائي_كأس_ملك_إسبانيا_2009", linkEn: "https://en.wikipedia.org/wiki/2009_Copa_del_Rey_final" 
                        },

                        // --- نهاية القرن العشرين (1970 - 1998) ---
                        { 
                            status: "won", year: "1998", opponentAr: "مايوركا", opponentEn: "Mallorca", scoreAr: "1-1 (5-4 ر.ت)", scoreEn: "1-1 (5-4 PEN)",
                            scorersAr: "برشلونة: ريفالدو | مايوركا: ستانكوفيتش", 
                            scorersEn: "BAR: Rivaldo | MAL: Stanković",
                            linkAr: "https://ar.wikipedia.org/wiki/نهائي_كأس_ملك_إسبانيا_1998", linkEn: "https://en.wikipedia.org/wiki/1998_Copa_del_Rey_final" 
                        },
                        { 
                            status: "won", year: "1997", opponentAr: "ريال بيتيس", opponentEn: "Real Betis", scoreAr: "3-2 (ب.و.إ)", scoreEn: "3-2 (AET)",
                            scorersAr: "برشلونة: فيغو (2)، بيتزي | بيتيس: ألفونسو، فينيدي جورج", 
                            scorersEn: "BAR: Figo (2), Pizzi | BET: Alfonso, Finidi George",
                            linkAr: "https://ar.wikipedia.org/wiki/نهائي_كأس_ملك_إسبانيا_1997", linkEn: "https://en.wikipedia.org/wiki/1997_Copa_del_Rey_final" 
                        },
                        { 
                            status: "runner_up", year: "1996", opponentAr: "أتلتيكو مدريد", opponentEn: "Atlético Madrid", scoreAr: "0-1 (ب.و.إ)", scoreEn: "0-1 (AET)",
                            scorersAr: "أتلتيكو: بانتيتش", 
                            scorersEn: "ATM: Pantić",
                            linkAr: "https://ar.wikipedia.org/wiki/نهائي_كأس_ملك_إسبانيا_1996", linkEn: "https://en.wikipedia.org/wiki/1996_Copa_del_Rey_final" 
                        },
                        { 
                            status: "won", year: "1990", opponentAr: "ريال مدريد", opponentEn: "Real Madrid", scoreAr: "2-0", scoreEn: "2-0",
                            scorersAr: "برشلونة: أمور، ساليناس", 
                            scorersEn: "BAR: Amor, Salinas",
                            linkAr: "https://ar.wikipedia.org/wiki/نهائي_كأس_ملك_إسبانيا_1990", linkEn: "https://en.wikipedia.org/wiki/1990_Copa_del_Rey_final" 
                        },
                        { 
                            status: "won", year: "1988", opponentAr: "ريال سوسيداد", opponentEn: "Real Sociedad", scoreAr: "1-0", scoreEn: "1-0",
                            scorersAr: "برشلونة: أليكسانكو", 
                            scorersEn: "BAR: Alexanko",
                            linkAr: "https://ar.wikipedia.org/wiki/نهائي_كأس_ملك_إسبانيا_1988", linkEn: "https://en.wikipedia.org/wiki/1988_Copa_del_Rey_final" 
                        },
                        { 
                            status: "runner_up", year: "1986", opponentAr: "ريال سرقسطة", opponentEn: "Real Zaragoza", scoreAr: "0-1", scoreEn: "0-1",
                            scorersAr: "سرقسطة: سوسا", 
                            scorersEn: "ZAR: Sosa",
                            linkAr: "https://ar.wikipedia.org/wiki/نهائي_كأس_ملك_إسبانيا_1986", linkEn: "https://en.wikipedia.org/wiki/1986_Copa_del_Rey_final" 
                        },
                        { 
                            status: "runner_up", year: "1984", opponentAr: "أتلتيك بيلباو", opponentEn: "Athletic Bilbao", scoreAr: "0-1", scoreEn: "0-1",
                            scorersAr: "بيلباو: إينديكا", 
                            scorersEn: "ATH: Endika",
                            linkAr: "https://ar.wikipedia.org/wiki/نهائي_كأس_ملك_إسبانيا_1984", linkEn: "https://en.wikipedia.org/wiki/1984_Copa_del_Rey_final" 
                        },
                        { 
                            status: "won", year: "1983", opponentAr: "ريال مدريد", opponentEn: "Real Madrid", scoreAr: "2-1", scoreEn: "2-1",
                            scorersAr: "برشلونة: فيكتور، ماركوس | مدريد: خوانيتو", 
                            scorersEn: "BAR: Víctor, Marcos | RMA: Juanito",
                            linkAr: "https://ar.wikipedia.org/wiki/نهائي_كأس_ملك_إسبانيا_1983", linkEn: "https://en.wikipedia.org/wiki/1983_Copa_del_Rey_final" 
                        },
                        { 
                            status: "won", year: "1981", opponentAr: "سبورتينغ خيخون", opponentEn: "Sporting Gijón", scoreAr: "3-1", scoreEn: "3-1",
                            scorersAr: "برشلونة: كيني (2)، إستيبان | خيخون: ماسيدو", 
                            scorersEn: "BAR: Quini (2), Esteban | GIJ: Maceda",
                            linkAr: "https://ar.wikipedia.org/wiki/نهائي_كأس_ملك_إسبانيا_1981", linkEn: "https://en.wikipedia.org/wiki/1981_Copa_del_Rey_final" 
                        },
                        { 
                            status: "won", year: "1978", opponentAr: "لاس بالماس", opponentEn: "Las Palmas", scoreAr: "3-1", scoreEn: "3-1",
                            scorersAr: "برشلونة: ريكساش (2)، أسينسي | بالماس: برينديسي", 
                            scorersEn: "BAR: Rexach (2), Asensi | LPA: Brindisi",
                            linkAr: "https://ar.wikipedia.org/wiki/نهائي_كأس_ملك_إسبانيا_1978", linkEn: "https://en.wikipedia.org/wiki/1978_Copa_del_Rey_final" 
                        },
                        { 
                            status: "runner_up", year: "1974", opponentAr: "ريال مدريد", opponentEn: "Real Madrid", scoreAr: "0-4", scoreEn: "0-4",
                            scorersAr: "مدريد: سانتيانا، روبينان، أغويلار، بيري", 
                            scorersEn: "RMA: Santillana, Rubiñán, Aguilar, Pirri",
                            linkAr: "https://ar.wikipedia.org/wiki/نهائي_كأس_إسبانيا_1974", linkEn: "https://en.wikipedia.org/wiki/1974_General%C3%ADsimo_Cup_final" 
                        },
                        { 
                            status: "won", year: "1971", opponentAr: "فالنسيا", opponentEn: "Valencia", scoreAr: "4-3 (ب.و.إ)", scoreEn: "4-3 (AET)",
                            scorersAr: "برشلونة: فوستي (2)، زابالزا، ألفونسيدا | فالنسيا: كلافاروند، بولي، فالديز", 
                            scorersEn: "BAR: Fusté (2), Zabalza, Alfonseda | VAL: Claramunt, Paquito, Valdez",
                            linkAr: "https://ar.wikipedia.org/wiki/نهائي_كأس_إسبانيا_1971", linkEn: "https://en.wikipedia.org/wiki/1971_General%C3%ADsimo_Cup_final" 
                        },

                        // --- حقبة منتصف القرن (1910 - 1968) ---
                        { 
                            status: "won", year: "1968", opponentAr: "ريال مدريد", opponentEn: "Real Madrid", scoreAr: "1-0", scoreEn: "1-0",
                            scorersAr: "برشلونة: زونزو نيغي (هـ.ذ)", 
                            scorersEn: "BAR: Zunzunegui (OG)",
                            linkAr: "https://ar.wikipedia.org/wiki/نهائي_كأس_إسبانيا_1968", linkEn: "https://en.wikipedia.org/wiki/1968_General%C3%ADsimo_Cup_final" 
                        },
                        { 
                            status: "won", year: "1963", opponentAr: "ريال سرقسطة", opponentEn: "Zaragoza", scoreAr: "3-1", scoreEn: "3-1",
                            scorersAr: "برشلونة: بيريدا، كوتشيس، زالدوا | سرقسطة: فيا", 
                            scorersEn: "BAR: Pereda, Kocsis, Zaldúa | ZAR: Villa",
                            linkAr: "https://ar.wikipedia.org/wiki/نهائي_كأس_إسبانيا_1963", linkEn: "https://en.wikipedia.org/wiki/1963_General%C3%ADsimo_Cup_final" 
                        },
                        { 
                            status: "won", year: "1959", opponentAr: "غرناطة", opponentEn: "Granada", scoreAr: "4-1", scoreEn: "4-1",
                            scorersAr: "برشلونة: مارتينيز (2)، كوتشيس، تيخادا | غرناطة: أرسينيو", 
                            scorersEn: "BAR: Martínez (2), Kocsis, Tejada | GRA: Arsenio",
                            linkAr: "https://ar.wikipedia.org/wiki/نهائي_كأس_إسبانيا_1959", linkEn: "https://en.wikipedia.org/wiki/1959_General%C3%ADsimo_Cup_final" 
                        },
                        { 
                            status: "won", year: "1957", opponentAr: "إسبانيول", opponentEn: "Espanyol", scoreAr: "1-0", scoreEn: "1-0",
                            scorersAr: "برشلونة: سامبيدرو", 
                            scorersEn: "BAR: Sampedro",
                            linkAr: "https://ar.wikipedia.org/wiki/نهائي_كأس_إسبانيا_1957", linkEn: "https://en.wikipedia.org/wiki/1957_General%C3%ADsimo_Cup_final" 
                        },
                        { 
                            status: "runner_up", year: "1954", opponentAr: "فالنسيا", opponentEn: "Valencia", scoreAr: "0-3", scoreEn: "0-3",
                            scorersAr: "فالنسيا: فويرتيس (2)، بادينس", 
                            scorersEn: "VAL: Fuertes (2), Badenes",
                            linkAr: "https://ar.wikipedia.org/wiki/نهائي_كأس_إسبانيا_1954", linkEn: "https://en.wikipedia.org/wiki/1954_General%C3%ADsimo_Cup_final" 
                        },
                        { 
                            status: "won", year: "1953", opponentAr: "أتلتيك بيلباو", opponentEn: "Athletic Bilbao", scoreAr: "2-1", scoreEn: "2-1",
                            scorersAr: "برشلونة: كوبالا، مانشون | بيلباو: فينانسيو", 
                            scorersEn: "BAR: Kubala, Manchón | ATH: Venancio",
                            linkAr: "https://ar.wikipedia.org/wiki/نهائي_كأس_إسبانيا_1953", linkEn: "https://en.wikipedia.org/wiki/1953_General%C3%ADsimo_Cup_final" 
                        },
                        { 
                            status: "won", year: "1952", opponentAr: "فالنسيا", opponentEn: "Valencia", scoreAr: "4-2 (ب.و.إ)", scoreEn: "4-2 (AET)",
                            scorersAr: "برشلونة: باسورا، فيلا، كوبالا، سيزار | فالنسيا: بادينس (2)", 
                            scorersEn: "BAR: Basora, Vila, Kubala, César | VAL: Badenes (2)",
                            linkAr: "https://ar.wikipedia.org/wiki/نهائي_كأس_إسبانيا_1952", linkEn: "https://en.wikipedia.org/wiki/1952_General%C3%ADsimo_Cup_final" 
                        },
                        { 
                            status: "won", year: "1951", opponentAr: "ريال سوسيداد", opponentEn: "Real Sociedad", scoreAr: "3-0", scoreEn: "3-0",
                            scorersAr: "برشلونة: سيزار (2)، سيغور", 
                            scorersEn: "BAR: César (2), Seguer",
                            linkAr: "https://ar.wikipedia.org/wiki/نهائي_كأس_إسبانيا_1951", linkEn: "https://en.wikipedia.org/wiki/1951_General%C3%ADsimo_Cup_final" 
                        },
                        { 
                            status: "won", year: "1942", opponentAr: "أتلتيك بيلباو", opponentEn: "Athletic Bilbao", scoreAr: "4-3 (ب.و.إ)", scoreEn: "4-3 (AET)",
                            scorersAr: "برشلونة: إيسكولا (2)، مارتن (2) | بيلباو: إيريوندو، إيليسيس، زارا", 
                            scorersEn: "BAR: Escolà (2), Martín (2) | ATH: Iriondo, Elices, Zarra",
                            linkAr: "https://ar.wikipedia.org/wiki/نهائي_كأس_إسبانيا_1942", linkEn: "https://en.wikipedia.org/wiki/1942_General%C3%ADsimo_Cup_final" 
                        },
                        { 
                            status: "runner_up", year: "1936", opponentAr: "ريال مدريد", opponentEn: "Real Madrid", scoreAr: "1-2", scoreEn: "1-2",
                            scorersAr: "برشلونة: إيسكولا | مدريد: يوجينيو، ليكوي", 
                            scorersEn: "BAR: Escolà | RMA: Eugenio, Lécue",
                            linkAr: "https://ar.wikipedia.org/wiki/نهائي_كأس_إسبانيا_1936", linkEn: "https://en.wikipedia.org/wiki/1936_Copa_del_Presidente_de_la_Rep%C3%BAblica_final" 
                        },
                        { 
                            status: "runner_up", year: "1932", opponentAr: "أتلتيك بيلباو", opponentEn: "Athletic Bilbao", scoreAr: "0-1", scoreEn: "0-1",
                            scorersAr: "بيلباو: باتا", 
                            scorersEn: "ATH: Bata",
                            linkAr: "https://ar.wikipedia.org/wiki/نهائي_كأس_إسبانيا_1932", linkEn: "https://en.wikipedia.org/wiki/1932_Copa_del_Presidente_de_la_Rep%C3%BAblica_final" 
                        },
                        { 
                            status: "won", year: "1928", opponentAr: "ريال سوسيداد", opponentEn: "Real Sociedad", scoreAr: "3-1 (إعادة)", scoreEn: "3-1 (RE)",
                            scorersAr: "برشلونة: ساميتيير، ساستري، أروتشا | سوسيداد: ماركويز", 
                            scorersEn: "BAR: Samitier, Sastre, Arocha | SOCC: Marculeta",
                            linkAr: "https://ar.wikipedia.org/wiki/نهائي_كأس_إسبانيا_1928", linkEn: "https://en.wikipedia.org/wiki/1928_Copa_del_Rey_final" 
                        },
                        { 
                            status: "won", year: "1926", opponentAr: "أتلتيكو مدريد", opponentEn: "Atlético Madrid", scoreAr: "3-2 (ب.و.إ)", scoreEn: "3-2 (AET)",
                            scorersAr: "برشلونة: ساميتيير، جوست، ألكانتارا | أتلتيكو: بالاسيوس، كوسيو", 
                            scorersEn: "BAR: Samitier, Just, Alcántara | ATM: Palacios, Cosme",
                            linkAr: "https://ar.wikipedia.org/wiki/نهائي_كأس_إسبانيا_1926", linkEn: "https://en.wikipedia.org/wiki/1926_Copa_del_Rey_final" 
                        },
                        { 
                            status: "won", year: "1925", opponentAr: "أريناس غيتكسو", opponentEn: "Arenas Club", scoreAr: "2-0", scoreEn: "2-0",
                            scorersAr: "برشلونة: ساميتيير، سانتشو", 
                            scorersEn: "BAR: Samitier, Sancho",
                            linkAr: "https://ar.wikipedia.org/wiki/نهائي_كأس_إسبانيا_1925", linkEn: "https://en.wikipedia.org/wiki/1925_Copa_del_Rey_final" 
                        },
                        { 
                            status: "won", year: "1922", opponentAr: "ريال يونيون", opponentEn: "Real Unión", scoreAr: "5-1", scoreEn: "5-1",
                            scorersAr: "برشلونة: ألكانتارا (2)، ساميتيير، تورالبا، غراسيا | يونيون: باتريشيو", 
                            scorersEn: "BAR: Alcántara (2), Samitier, Torralba, Gràcia | RUN: Patricio",
                            linkAr: "https://ar.wikipedia.org/wiki/نهائي_كأس_إسبانيا_1922", linkEn: "https://en.wikipedia.org/wiki/1922_Copa_del_Rey_final" 
                        },
                        { 
                            status: "won", year: "1920", opponentAr: "أتلتيك بيلباو", opponentEn: "Athletic Bilbao", scoreAr: "2-0", scoreEn: "2-0",
                            scorersAr: "برشلونة: مارتينيز، ألكانتارا", 
                            scorersEn: "BAR: Martínez, Alcántara",
                            linkAr: "https://ar.wikipedia.org/wiki/نهائي_كأس_إسبانيا_1920", linkEn: "https://en.wikipedia.org/wiki/1920_Copa_del_Rey_final" 
                        },
                        { 
                            status: "runner_up", year: "1919", opponentAr: "أريناس غيتكسو", opponentEn: "Arenas Club", scoreAr: "2-5 (ب.و.إ)", scoreEn: "2-5 (AET)",
                            scorersAr: "برشلونة: فينالز، لاكا | أريناس: سيسوما (3)، بينيا، إيبايبارياغا", 
                            scorersEn: "BAR: Viñals, Lakatos | ARE: Sesúmaga (3), Peña, Ibaibarriaga",
                            linkAr: "https://ar.wikipedia.org/wiki/نهائي_كأس_إسبانيا_1919", linkEn: "https://en.wikipedia.org/wiki/1919_Copa_del_Rey_final" 
                        },
                        { 
                            status: "won", year: "1913", opponentAr: "ريال سوسيداد", opponentEn: "Real Sociedad", scoreAr: "2-1 (إعادة)", scoreEn: "2-1 (RE)",
                            scorersAr: "برشلونة: بيردي، رودريغيز | سوسيداد: ريزولا", 
                            scorersEn: "BAR: Berdié, Rodríguez | SOC: Rezola",
                            linkAr: "https://ar.wikipedia.org/wiki/نهائي_كأس_إسبانيا_1913", linkEn: "https://en.wikipedia.org/wiki/1913_Copa_del_Rey_Final_(UECF)" 
                        },
                        { 
                            status: "won", year: "1912", opponentAr: "خيمناستيكا مدريد", opponentEn: "Gimnástica Madrid", scoreAr: "2-0", scoreEn: "2-0",
                            scorersAr: "برشلونة: ماسانيا، رودريغيز", 
                            scorersEn: "BAR: Massana, Rodríguez",
                            linkAr: "https://ar.wikipedia.org/wiki/نهائي_كأس_إسبانيا_1912", linkEn: "https://en.wikipedia.org/wiki/1912_Copa_del_Rey_final" 
                        },
                        { 
                            status: "won", year: "1910", opponentAr: "إسبانيول مدريد", opponentEn: "Español Madrid", scoreAr: "3-2", scoreEn: "3-2",
                            scorersAr: "برشلونة: رودريغيز، كوامالا، والاس | إسبانيول: بويول (2)", 
                            scorersEn: "BAR: Rodríguez, Comamala, Wallace | ESP: Buylla (2)",
                            linkAr: "https://ar.wikipedia.org/wiki/نهائي_كأس_إسبانيا_1910", linkEn: "https://en.wikipedia.org/wiki/1910_FECF_Copa_del_Rey_final"
                        },
                        {
                        	status: "runner_up", year: "1902", opponentAr: "بزكايا", opponentEn: "Bizcaya", scoreAr: "1-2", scoreEn: "1-2",
                            scorersAr: "برشلونة: جون بارسونز | بزكايا: خوان أستوركيا، أرماند كازو",
                            scorersEn: "BAR: John Parsons | BCA: Juan Astorquia, Armand Cazeaux",
                            linkAr: "https://ar.wikipedia.org/wiki/كأس_التتويج_1902", linkEn: "https://en.wikipedia.org/wiki/1902_Copa_de_la_Coronación" 
                        }
                            ]
                            },
                // --- 4. كأس العالم للأندية (3 ألقاب، 1 وصافة) ---
                { 
                    type: "world", nameAr: "كأس العالم للأندية", nameEn: "FIFA Club World Cup", 
                    wonCount: 3, runnerUpCount: 1, count: 4, wikiLink: "https://ar.wikipedia.org/wiki/كأس_العالم_للأندية",
                    details: [
                        { status: "won", year: "2015", opponentAr: "ريفر بليت", opponentEn: "River Plate", scoreAr: "3-0", scoreEn: "3-0", scorersAr: "ميسي، سواريز (2)", scorersEn: "Messi, Suárez (2)", linkAr: "https://ar.wikipedia.org/wiki/نهائي_كأس_العالم_للأندية_2015", linkEn: "https://en.wikipedia.org/wiki/2015_FIFA_Club_World_Cup_final" },
                        { status: "won", year: "2011", opponentAr: "سانتوس", opponentEn: "Santos", scoreAr: "4-0", scoreEn: "4-0", scorersAr: "ميسي (2)، تشافي، فابريغاس", scorersEn: "Messi (2), Xavi, Fàbregas", linkAr: "https://ar.wikipedia.org/wiki/نهائي_كأس_العالم_للأندية_2011", linkEn: "https://en.wikipedia.org/wiki/2011_FIFA_Club_World_Cup_final" },
                        { status: "won", year: "2009", opponentAr: "إستوديانتيس", opponentEn: "Estudiantes", scoreAr: "2-1 (ب.و.إ)", scoreEn: "2-1 (AET)", scorersAr: "برشلونة: بيدرو، ميسي | إستوديانتيس: بوسيلي", scorersEn: "FCB: Pedro, Messi | EST: Boselli", linkAr: "https://ar.wikipedia.org/wiki/نهائي_كأس_العالم_للأندية_2009", linkEn: "https://en.wikipedia.org/wiki/2009_FIFA_Club_World_Cup_final" },
                        { status: "runner_up", year: "2006", opponentAr: "إنترناسيونال", opponentEn: "Internacional", scoreAr: "0-1", scoreEn: "0-1", scorersAr: "إنترناسيونال: أدريانو جابيرو", scorersEn: "INT: Adriano Gabiru", linkAr: "https://ar.wikipedia.org/wiki/نهائي_كأس_العالم_للأندية_2006", linkEn: "https://en.wikipedia.org/wiki/2006_FIFA_Club_World_Cup_final" }
                    ]
                },
                // --- 5. كأس السوبر الأوروبي (5 ألقاب، 4 وصافة) ---
                { 
                    type: "cont_super", nameAr: "كأس السوبر الأوروبي", nameEn: "UEFA Super Cup", 
                    wonCount: 5, runnerUpCount: 4, count: 9, wikiLink: "https://ar.wikipedia.org/wiki/كأس_السوبر_الأوروبي",
                    details: [
                        { status: "won", year: "2015", opponentAr: "إشبيلية", opponentEn: "Sevilla", scoreAr: "5-4 (ب.و.إ)", scoreEn: "5-4 (AET)", scorersAr: "برشلونة: ميسي (2)، رافينيا، سواريز، بيدرو | إشبيلية: بانيغا، رييس، غاميرو، كونوبليانكا", scorersEn: "FCB: Messi (2), Rafinha, Suárez, Pedro | SEV: Banega, Reyes, Gameiro, Konoplyanka", linkAr: "https://ar.wikipedia.org/wiki/كأس_السوبر_الأوروبي_2015", linkEn: "https://en.wikipedia.org/wiki/2015_UEFA_Super_Cup" },
                        { status: "won", year: "2011", opponentAr: "بورتو", opponentEn: "Porto", scoreAr: "2-0", scoreEn: "2-0", scorersAr: "ميسي، فابريغاس", scorersEn: "Messi, Fàbregas", linkAr: "https://ar.wikipedia.org/wiki/كأس_السوبر_الأوروبي_2011", linkEn: "https://en.wikipedia.org/wiki/2011_UEFA_Super_Cup" },
                        { status: "won", year: "2009", opponentAr: "شاختار دونيتسك", opponentEn: "Shakhtar Donetsk", scoreAr: "1-0 (ب.و.إ)", scoreEn: "1-0 (AET)", scorersAr: "بيدرو", scorersEn: "Pedro", linkAr: "https://ar.wikipedia.org/wiki/كأس_السوبر_الأوروبي_2009", linkEn: "https://en.wikipedia.org/wiki/2009_UEFA_Super_Cup" },
                        { status: "runner_up", year: "2006", opponentAr: "إشبيلية", opponentEn: "Sevilla", scoreAr: "0-3", scoreEn: "0-3", scorersAr: "إشبيلية: ريناتو، كانوتيه، ماريسكا", scorersEn: "SEV: Renato, Kanouté, Maresca", linkAr: "https://ar.wikipedia.org/wiki/كأس_السوبر_الأوروبي_2006", linkEn: "https://en.wikipedia.org/wiki/2006_UEFA_Super_Cup" },
                        { status: "won", year: "1997", opponentAr: "بوروسيا دورتموند", opponentEn: "Dortmund", scoreAr: "3-1 (مجموع ذهاب وإياب)", scoreEn: "3-1 (AGG)", scorersAr: "لويس إنريكي، ريفالدو، جيوفاني", scorersEn: "Luis Enrique, Rivaldo, Giovanni", linkAr: "https://ar.wikipedia.org/wiki/كأس_السوبر_الأوروبي_1997", linkEn: "https://en.wikipedia.org/wiki/1997_UEFA_Super_Cup" },
                        { status: "won", year: "1992", opponentAr: "فيردر بريمن", opponentEn: "Werder Bremen", scoreAr: "3-2 (مجموع ذهاب وإياب)", scoreEn: "3-2 (AGG)", scorersAr: "برشلونة: ستويتشكوف، غويكوتشيا، ساليناس", scorersEn: "FCB: Stoichkov, Goikoetxea, Salinas", linkAr: "https://ar.wikipedia.org/wiki/كأس_السوبر_الأوروبي_1992", linkEn: "https://en.wikipedia.org/wiki/1992_European_Super_Cup" },
                        { status: "runner_up", year: "1989", opponentAr: "إي سي ميلان", opponentEn: "AC Milan", scoreAr: "1-2 (مجموع ذهاب وإياب)", scoreEn: "1-2 (AGG)", scorersAr: "برشلونة: ساليناس | ميلان: فان باستن، إيفاني", scorersEn: "FCB: Salinas | MIL: Van Basten, Evani", linkAr: "https://ar.wikipedia.org/wiki/كأس_السوبر_الأوروبي_1989", linkEn: "https://en.wikipedia.org/wiki/1989_European_Super_Cup" },
                        { status: "runner_up", year: "1982", opponentAr: "أستون فيلا", opponentEn: "Aston Villa", scoreAr: "1-3 (مجموع ذهاب وإياب)", scoreEn: "1-3 (AGG)", scorersAr: "برشلونة: ماركوس ألونسو | فيلا: شو، كوانس، مكناب", scorersEn: "FCB: Marcos Alonso | VIL: Shaw, Cowans, McNaught", linkAr: "https://ar.wikipedia.org/wiki/كأس_السوبر_الأوروبي_1982", linkEn: "https://en.wikipedia.org/wiki/1982_European_Super_Cup" },
                        { status: "runner_up", year: "1979", opponentAr: "نوتينغهام فورست", opponentEn: "Nottingham Forest", scoreAr: "1-2 (مجموع ذهاب وإياب)", scoreEn: "1-2 (AGG)", scorersAr: "برشلونة: روبرتو | فورست: جورج، كيني", scorersEn: "FCB: Roberto | NOT: George, Kenny", linkAr: "https://ar.wikipedia.org/wiki/كأس_السوبر_الأوروبي_1979", linkEn: "https://en.wikipedia.org/wiki/1979_European_Super_Cup" }
                    ]
                    },
                { 
    type: "dom_super", nameAr: "كأس السوبر الإسباني", nameEn: "Supercopa de España", 
    wonCount: 16, runnerUpCount: 12, count: 28, wikiLink: "https://ar.wikipedia.org/wiki/كأس_السوبر_الإسباني",
    details: [
        { status: "won", year: "2025-26", opponentAr: "ريال مدريد", opponentEn: "Real Madrid", scoreAr: "3-2", scoreEn: "3-2", scorersAr: "برشلونة: رافينيا (2), ليفاندوفسكي | ريال مدريد: فينيسيوس، جونزالو قارسيا", scorersEn: "FCB: Raphinha (2), Lewandowski | RMA: Vinícius Jr, Gonzalo García", linkAr: "https://ar.wikipedia.org/wiki/كأس_السوبر_الإسباني_2025–26", linkEn: "https://en.wikipedia.org/wiki/2025–26_Supercopa_de_España" },
        { status: "won", year: "2024-25", opponentAr: "ريال مدريد", opponentEn: "Real Madrid", scoreAr: "5-2", scoreEn: "5-2", scorersAr: "برشلونة: لامين يامال، ليفاندوفسكي، رافينيا (2), بالدي | ريال مدريد: مبابي، رودريغو", scorersEn: "FCB: Lamine Yamal, Lewandowski, Raphinha (2), Balde | RMA: Mbappé, Rodrygo", linkAr: "https://ar.wikipedia.org/wiki/كأس_السوبر_الإسباني_2024–25", linkEn: "https://en.wikipedia.org/wiki/2024–25_Supercopa_de_España" },
        { status: "runner_up", year: "2023-24", opponentAr: "ريال مدريد", opponentEn: "Real Madrid", scoreAr: "1-4", scoreEn: "1-4", scorersAr: "برشلونة: ليفاندوفسكي | ريال مدريد: فينيسيوس جونيور (3)، رودريغو", scorersEn: "FCB: Lewandowski | RMA: Vinícius Jr (3), Rodrygo", linkAr: "https://ar.wikipedia.org/wiki/كأس_السوبر_الإسباني_2023–24", linkEn: "https://en.wikipedia.org/wiki/2023–24_Supercopa_de_España" },
        { status: "won", year: "2022-23", opponentAr: "ريال مدريد", opponentEn: "Real Madrid", scoreAr: "3-1", scoreEn: "3-1", scorersAr: "برشلونة: غافي، ليفاندوفسكي، بيدري | ريال مدريد: بنزيما", scorersEn: "FCB: Gavi, Lewandowski, Pedri | RMA: Benzema", linkAr: "https://ar.wikipedia.org/wiki/كأس_السوبر_الإسباني_2022–23", linkEn: "https://en.wikipedia.org/wiki/2022–23_Supercopa_de_España" },
        { status: "runner_up", year: "2020-21", opponentAr: "أتلتيك بيلباو", opponentEn: "Athletic Bilbao", scoreAr: "2-3 (ب.و.إ)", scoreEn: "2-3 (AET)", scorersAr: "برشلونة: غريزمان (2) | بيلباو: دي ماركوس، فيلاليبري، ويليامز", scorersEn: "FCB: Griezmann (2) | ATH: De Marcos, Villalibre, Williams", linkAr: "https://ar.wikipedia.org/wiki/كأس_السوبر_الإسباني_2020–21", linkEn: "https://en.wikipedia.org/wiki/2020–21_Supercopa_de_España" },
        { status: "won", year: "2018", opponentAr: "إشبيلية", opponentEn: "Sevilla", scoreAr: "2-1", scoreEn: "2-1", scorersAr: "برشلونة: بيكيه، ديمبيلي | إشبيلية: سارابيا", scorersEn: "FCB: Piqué, Dembélé | SEV: Sarabia", linkAr: "https://ar.wikipedia.org/wiki/كأس_السوبر_الإسباني_2018", linkEn: "https://en.wikipedia.org/wiki/2018_Supercopa_de_España" },
        { status: "runner_up", year: "2017", opponentAr: "ريال مدريد", opponentEn: "Real Madrid", scoreAr: "1-5 (مجموع ذهاب وإياب)", scoreEn: "1-5 (AGG)", scorersAr: "برشلونة: ميسي | ريال مدريد: بيكيه (ه.ذ)، رونالدو، أسينسيو (2)، بنزيما", scorersEn: "FCB: Messi | RMA: Piqué (OG), Ronaldo, Asensio (2), Benzema", linkAr: "https://ar.wikipedia.org/wiki/كأس_السوبر_الإسباني_2017", linkEn: "https://en.wikipedia.org/wiki/2017_Supercopa_de_España" },
        { status: "won", year: "2016", opponentAr: "إشبيلية", opponentEn: "Sevilla", scoreAr: "5-0 (مجموع ذهاب وإياب)", scoreEn: "5-0 (AGG)", scorersAr: "برشلونة: سواريز، منير، توران (2)، ميسي", scorersEn: "FCB: Suárez, Munir, Turan (2), Messi", linkAr: "https://ar.wikipedia.org/wiki/كأس_السوبر_الإسباني_2016", linkEn: "https://en.wikipedia.org/wiki/2016_Supercopa_de_España" },
        { status: "runner_up", year: "2015", opponentAr: "أتلتيك بيلباو", opponentEn: "Athletic Bilbao", scoreAr: "1-5 (مجموع ذهاب وإياب)", scoreEn: "1-5 (AGG)", scorersAr: "برشلونة: ميسي | بيلباو: سان خوسيه، أدوريز (4)", scorersEn: "FCB: Messi | ATH: San José, Aduriz (4)", linkAr: "https://ar.wikipedia.org/wiki/كأس_السوبر_الإسباني_2015", linkEn: "https://en.wikipedia.org/wiki/2015_Supercopa_de_España" },
        { status: "won", year: "2013", opponentAr: "أتلتيكو مدريد", opponentEn: "Atlético Madrid", scoreAr: "1-1 (أ.خ.د)", scoreEn: "1-1 (Away goals)", scorersAr: "برشلونة: نيمار | أتلتيكو: فيا", scorersEn: "FCB: Neymar | ATM: Villa", linkAr: "https://ar.wikipedia.org/wiki/كأس_السوبر_الإسباني_2013", linkEn: "https://en.wikipedia.org/wiki/2013_Supercopa_de_España" },
        { status: "runner_up", year: "2012", opponentAr: "ريال مدريد", opponentEn: "Real Madrid", scoreAr: "4-4 (أ.خ.د)", scoreEn: "4-4 (Away goals)", scorersAr: "برشلونة: بيدرو، ميسي (2)، تشافي | ريال مدريد: رونالدو (2)، دي ماريا، هيغواين", scorersEn: "FCB: Pedro, Messi (2), Xavi | RMA: Ronaldo (2), Di María, Higuaín", linkAr: "https://ar.wikipedia.org/wiki/كأس_السوبر_الإسباني_2012", linkEn: "https://en.wikipedia.org/wiki/2012_Supercopa_de_España" },
        { status: "won", year: "2011", opponentAr: "ريال مدريد", opponentEn: "Real Madrid", scoreAr: "5-4 (مجموع ذهاب وإياب)", scoreEn: "5-4 (AGG)", scorersAr: "برشلونة: فيا، ميسي (3)، إنييستا | ريال مدريد: أوزيل، ألونسو، رونالدو، بنزيما", scorersEn: "FCB: Villa, Messi (3), Iniesta | RMA: Özil, Alonso, Ronaldo, Benzema", linkAr: "https://ar.wikipedia.org/wiki/كأس_السوبر_الإسباني_2011", linkEn: "https://en.wikipedia.org/wiki/2011_Supercopa_de_España" },
        { status: "won", year: "2010", opponentAr: "إشبيلية", opponentEn: "Sevilla", scoreAr: "5-3 (مجموع ذهاب وإياب)", scoreEn: "5-3 (AGG)", scorersAr: "برشلونة: إبراهيموفيتش، كونكو (ه.ذ)، ميسي (3) | إشبيلية: فابيانو، كانوتيه (2)", scorersEn: "FCB: Ibrahimović, Konko (OG), Messi (3) | SEV: Fabiano, Kanouté (2)", linkAr: "https://ar.wikipedia.org/wiki/كأس_السوبر_الإسباني_2010", linkEn: "https://en.wikipedia.org/wiki/2010_Supercopa_de_España" },
        { status: "won", year: "2009", opponentAr: "أتلتيك بيلباو", opponentEn: "Athletic Bilbao", scoreAr: "5-1 (مجموع ذهاب وإياب)", scoreEn: "5-1 (AGG)", scorersAr: "برشلونة: تشافي، بيدرو، ميسي (2)، بويان | بيلباو: دي ماركوس", scorersEn: "FCB: Xavi, Pedro, Messi (2), Bojan | ATH: De Marcos", linkAr: "https://ar.wikipedia.org/wiki/كأس_السوبر_الإسباني_2009", linkEn: "https://en.wikipedia.org/wiki/2009_Supercopa_de_España" },
        { status: "won", year: "2006", opponentAr: "إسبانيول", opponentEn: "Espanyol", scoreAr: "4-0 (مجموع ذهاب وإياب)", scoreEn: "4-0 (AGG)", scorersAr: "جولي، تشافي، ديكو (2)", scorersEn: "Giuly, Xavi, Deco (2)", linkAr: "https://ar.wikipedia.org/wiki/كأس_السوبر_الإسباني_2006", linkEn: "https://en.wikipedia.org/wiki/2006_Supercopa_de_España" },
        { status: "won", year: "2005", opponentAr: "ريال بيتيس", opponentEn: "Real Betis", scoreAr: "4-2 (مجموع ذهاب وإياب)", scoreEn: "4-2 (AGG)", scorersAr: "برشلونة: جولي، إيتو (2)، رونالدينيو | بيتيس: داني (2)", scorersEn: "FCB: Giuly, Eto'o (2), Ronaldinho | BET: Dani (2)", linkAr: "https://ar.wikipedia.org/wiki/كأس_السوبر_الإسباني_2005", linkEn: "https://en.wikipedia.org/wiki/2005_Supercopa_de_España" },
        { status: "runner_up", year: "1999", opponentAr: "فالنسيا", opponentEn: "Valencia", scoreAr: "3-4 (مجموع ذهاب وإياب)", scoreEn: "3-4 (AGG)", scorersAr: "برشلونة: كلايفرت (2)، ر. دي بور | فالنسيا: لوبيز، ألبيلدا، سانشيز، فارينوس", scorersEn: "FCB: Kluivert (2), R. de Boer | VAL: López, Albelda, Sánchez, Farinós", linkAr: "https://ar.wikipedia.org/wiki/كأس_السوبر_الإسباني_1999", linkEn: "https://en.wikipedia.org/wiki/1999_Supercopa_de_España" },
        { status: "runner_up", year: "1998", opponentAr: "مايوركا", opponentEn: "Mallorca", scoreAr: "1-3 (مجموع ذهاب وإياب)", scoreEn: "1-3 (AGG)", scorersAr: "برشلونة: تشافي | مايوركا: داني، ستانكوفيتش، إنغونغا", scorersEn: "FCB: Xavi | MAL: Dani, Stanković, Engonga", linkAr: "https://ar.wikipedia.org/wiki/كأس_السوبر_الإسباني_1998", linkEn: "https://en.wikipedia.org/wiki/1998_Supercopa_de_España" },
        { status: "runner_up", year: "1997", opponentAr: "ريال مدريد", opponentEn: "Real Madrid", scoreAr: "3-5 (مجموع ذهاب وإياب)", scoreEn: "3-5 (AGG)", scorersAr: "برشلونة: نادال، جيوفاني، فيغو | ريال مدريد: راؤول (3)، مياتوفيتش، سيدورف", scorersEn: "FCB: Nadal, Giovanni, Figo | RMA: Raúl (3), Mijatović, Seedorf", linkAr: "https://ar.wikipedia.org/wiki/كأس_السوبر_الإسباني_1997", linkEn: "https://en.wikipedia.org/wiki/1997_Supercopa_de_España" },
        { status: "won", year: "1996", opponentAr: "أتلتيكو مدريد", opponentEn: "Atlético Madrid", scoreAr: "6-5 (مجموع ذهاب وإياب)", scoreEn: "6-5 (AGG)", scorersAr: "برشلونة: رونالدو (2)، نادال، دي لا بينا، فيغو، ستويتشكوف | أتلتيكو: إسنيدر (2)، بانتيتش، لوبيز", scorersEn: "FCB: Ronaldo (2), Nadal, de la Peña, Figo, Stoichkov | ATM: Esnáider (2), Pantić, López", linkAr: "https://ar.wikipedia.org/wiki/كأس_السوبر_الإسباني_1996", linkEn: "https://en.wikipedia.org/wiki/1996_Supercopa_de_España" },
        { status: "won", year: "1994", opponentAr: "ريال سرقسطة", opponentEn: "Real Zaragoza", scoreAr: "6-5 (مجموع ذهاب وإياب)", scoreEn: "6-5 (AGG)", scorersAr: "برشلونة: ستويتشكوف (3)، بيغريستين (2)، أمور | سرقسطة: إسنيدر، هيغويرا (3)، بيلسوي", scorersEn: "FCB: Stoichkov (3), Begiristain (2), Amor | ZAR: Esnáider, Higuera (3), Belsué", linkAr: "https://ar.wikipedia.org/wiki/كأس_السوبر_الإسباني_1994", linkEn: "https://en.wikipedia.org/wiki/1994_Supercopa_de_España" },
        { status: "runner_up", year: "1993", opponentAr: "ريال مدريد", opponentEn: "Real Madrid", scoreAr: "2-4 (مجموع ذهاب وإياب)", scoreEn: "2-4 (AGG)", scorersAr: "برشلونة: ستويتشكوف، باكيرو | ريال مدريد: ألفونسو (2)، زامورانو (2)", scorersEn: "FCB: Stoichkov, Bakero | RMA: Alfonso (2), Zamorano (2)", linkAr: "https://ar.wikipedia.org/wiki/كأس_السوبر_الإسباني_1993", linkEn: "https://en.wikipedia.org/wiki/1993_Supercopa_de_España" },
        { status: "won", year: "1992", opponentAr: "أتلتيكو مدريد", opponentEn: "Atlético Madrid", scoreAr: "5-2 (مجموع ذهاب وإياب)", scoreEn: "5-2 (AGG)", scorersAr: "برشلونة: بيغريستين (3)، ساليناس، ستويتشكوف | أتلتيكو: فيريرا، مانولو", scorersEn: "FCB: Begiristain (3), Salinas, Stoichkov | ATM: Ferreira, Manolo", linkAr: "https://ar.wikipedia.org/wiki/كأس_السوبر_الإسباني_1992", linkEn: "https://en.wikipedia.org/wiki/1992_Supercopa_de_España" },
        { status: "won", year: "1991", opponentAr: "أتلتيكو مدريد", opponentEn: "Atlético Madrid", scoreAr: "2-1 (مجموع ذهاب وإياب)", scoreEn: "2-1 (AGG)", scorersAr: "برشلونة: أمور، باكيرو | أتلتيكو: ألفريدو", scorersEn: "FCB: Amor, Bakero | ATM: Alfredo", linkAr: "https://ar.wikipedia.org/wiki/كأس_السوبر_الإسباني_1991", linkEn: "https://en.wikipedia.org/wiki/1991_Supercopa_de_España" },
        { status: "runner_up", year: "1990", opponentAr: "ريال مدريد", opponentEn: "Real Madrid", scoreAr: "1-5 (مجموع ذهاب وإياب)", scoreEn: "1-5 (AGG)", scorersAr: "برشلونة: غويكوتشيا | ريال مدريد: ميتشيل، بوتراغينيو (2)، سانشيز، أراغون", scorersEn: "FCB: Goikoetxea | RMA: Míchel, Butragueño (2), Sánchez, Aragón", linkAr: "https://ar.wikipedia.org/wiki/كأس_السوبر_الإسباني_1990", linkEn: "https://en.wikipedia.org/wiki/1990_Supercopa_de_España" },
        { status: "runner_up", year: "1988", opponentAr: "ريال مدريد", opponentEn: "Real Madrid", scoreAr: "2-3 (مجموع ذهاب وإياب)", scoreEn: "2-3 (AGG)", scorersAr: "برشلونة: باكيرو (2) | ريال مدريد: ميتشيل، سانشيز، بوتراغينيو", scorersEn: "FCB: Bakero (2) | RMA: Míchel, Sánchez, Butragueño", linkAr: "https://ar.wikipedia.org/wiki/كأس_السوبر_الإسباني_1988", linkEn: "https://en.wikipedia.org/wiki/1988_Supercopa_de_España" },
        { status: "runner_up", year: "1985", opponentAr: "أتلتيكو مدريد", opponentEn: "Atlético Madrid", scoreAr: "2-3 (مجموع ذهاب وإياب)", scoreEn: "2-3 (AGG)", scorersAr: "برشلونة: كلوس، أليكزانكو | أتلتيكو: كابريرا، رويز، دا سيلفا", scorersEn: "FCB: Clos, Alexanko | ATM: Cabrera, Ruiz, Da Silva", linkAr: "https://ar.wikipedia.org/wiki/كأس_السوبر_الإسباني_1985", linkEn: "https://en.wikipedia.org/wiki/1985_Supercopa_de_España" },
        { status: "won", year: "1983", opponentAr: "أتلتيك بيلباو", opponentEn: "Athletic Bilbao", scoreAr: "3-2 (مجموع ذهاب وإياب)", scoreEn: "3-2 (AGG)", scorersAr: "برشلونة: أليكزانكو، كاراسكو، روخو | بيلباو: سارابيا، إنديكا", scorersEn: "FCB: Alexanko, Carrasco, Rojo | ATH: Sarabia, Endika", linkAr: "https://ar.wikipedia.org/wiki/كأس_السوبر_الإسباني_1983", linkEn: "https://en.wikipedia.org/wiki/1983_Supercopa_de_España" }
    ]
},
                // --- 7. كأس الكؤوس الأوروبية - ملغاة (4 ألقاب، 2 وصافة) ---
                { 
                    type: "cont_2", nameAr: "كأس الكؤوس الأوروبية (ملغاة)", nameEn: "UEFA Cup Winners' Cup", 
                    wonCount: 4, runnerUpCount: 2, count: 6, wikiLink: "https://ar.wikipedia.org/wiki/كأس_الكؤوس_الأوروبية",
                    details: [
                        { status: "won", year: "1997", opponentAr: "باريس سان جيرمان", opponentEn: "PSG", scoreAr: "1-0", scoreEn: "1-0", scorersAr: "رونالدو", scorersEn: "Ronaldo", linkAr: "https://ar.wikipedia.org/wiki/كأس_الكؤوس_الأوروبية_1996–97", linkEn: "https://en.wikipedia.org/wiki/1996–97_UEFA_Cup_Winners%27_Cup" },
                        { status: "runner_up", year: "1991", opponentAr: "مانشستر يونايتد", opponentEn: "Manchester United", scoreAr: "1-2", scoreEn: "1-2", scorersAr: "برشلونة: كومان | يونايتد: هيوز (2)", scorersEn: "FCB: Koeman | MUN: Hughes (2)", linkAr: "https://ar.wikipedia.org/wiki/كأس_الكؤوس_الأوروبية_1990–91", linkEn: "https://en.wikipedia.org/wiki/1990–91_European_Cup_Winners%27_Cup" },
                        { status: "won", year: "1989", opponentAr: "سامبدوريا", opponentEn: "Sampdoria", scoreAr: "2-0", scoreEn: "2-0", scorersAr: "سالينيس، لوبيز ريكارتي", scorersEn: "Salinas, López Rekarte", linkAr: "https://ar.wikipedia.org/wiki/كأس_الكؤوس_الأوروبية_1988–89", linkEn: "https://en.wikipedia.org/wiki/1988–89_European_Cup_Winners%27_Cup" },
                        { status: "won", year: "1982", opponentAr: "ستاندارد لييج", opponentEn: "Standard Liège", scoreAr: "2-1", scoreEn: "2-1", scorersAr: "برشلونة: سيمونسن، كيني | لييج: فانديرسميسن", scorersEn: "FCB: Simonsen, Quini | STA: Vandersmissen", linkAr: "https://ar.wikipedia.org/wiki/كأس_الكؤوس_الأوروبية_1981–82", linkEn: "https://en.wikipedia.org/wiki/1981–82_European_Cup_Winners%27_Cup" },
                        { status: "won", year: "1979", opponentAr: "فورتونا دوسلدورف", opponentEn: "Fortuna Düsseldorf", scoreAr: "4-3 (ب.و.إ)", scoreEn: "4-3 (AET)", scorersAr: "برشلونة: سانشيز، أسينسي، ريكساش، كرانكل | فورتونا: ألوفس (2)، سيل", scorersEn: "FCB: Sánchez, Asensi, Rexach, Krankl | FOR: Allofs (2), Seel", linkAr: "https://ar.wikipedia.org/wiki/كأس_الكؤوس_الأوروبية_1978–79", linkEn: "https://en.wikipedia.org/wiki/1978–79_European_Cup_Winners%27_Cup" },
                        { status: "runner_up", year: "1969", opponentAr: "سلوفان براتيسلافا", opponentEn: "Slovan Bratislava", scoreAr: "2-3", scoreEn: "2-3", scorersAr: "برشلونة: زالدوا، ريكساش | سلوفان: سفيتش، هريفناك، تشابكوفيتش", scorersEn: "FCB: Zaldúa, Rexach | SLO: Cvetler, Hrivnák, Čapkovič", linkAr: "https://ar.wikipedia.org/wiki/كأس_الكؤوس_الأوروبية_1968–69", linkEn: "https://en.wikipedia.org/wiki/1968–69_European_Cup_Winners%27_Cup" }
                    ]
                },
                // --- 8. كأس المعارض الأوروبية - ملغاة (3 ألقاب، 1 وصافة) ---
                { 
                    type: "friendly", nameAr: "كأس المعارض الأوروبية (ملغاة)", nameEn: "Inter-Cities Fairs Cup", 
                    wonCount: 3, runnerUpCount: 1, count: 4, wikiLink: "https://ar.wikipedia.org/wiki/كأس_المعارض_الأوروبية",
                    details: [
                        { status: "won", year: "1966", opponentAr: "ريال سرقسطة", opponentEn: "Real Zaragoza", scoreAr: "4-3 (مجموع)", scoreEn: "4-3 (AGG)", scorersAr: "برشلونة: بويول، زابالا (3) | سرقسطة: مارسيلينو، فيا", scorersEn: "FCB: Pujol, Zaballa (3) | ZAR: Marcelino, Villa", linkAr: "https://ar.wikipedia.org/wiki/نهائي_كأس_المعارض_الأوروبية_1966", linkEn: "https://en.wikipedia.org/wiki/1966_Inter-Cities_Fairs_Cup_final" },
                        { status: "runner_up", year: "1962", opponentAr: "فالنسيا", opponentEn: "Valencia", score: "3-7 (مجموع)", scoreEn: "3-7 (AGG)", scorersAr: "برشلونة: كوتشيس (2)، ألبيرتو | فالنسيا: نونيز، غويو (2)، والدو، إلخ", scorersEn: "FCB: Kocsis (2), Albert | VAL: Núñez, Guillot (2), Waldo, etc.", linkAr: "https://ar.wikipedia.org/wiki/نهائي_كأس_المعارض_الأوروبية_1962", linkEn: "https://en.wikipedia.org/wiki/1962_Inter-Cities_Fairs_Cup_final" },
                        { status: "won", year: "1960", opponentAr: "برمنغهام سيتي", opponentEn: "Birmingham City", score: "4-1 (مجموع)", scoreEn: "4-1 (AGG)", scorersAr: "برشلونة: إيولوجيو مارتينيز، تشيبور (2)، كول | برمنغهام: براون", scorersEn: "FCB: Martínez, Czibor (2), Coll | BIR: Brown", linkAr: "https://ar.wikipedia.org/wiki/نهائي_كأس_المعارض_الأوروبية_1960", linkEn: "https://en.wikipedia.org/wiki/1960_Inter-Cities_Fairs_Cup_final" },
                        { status: "won", year: "1958", opponentAr: "لندن 11", opponentEn: "London XI", score: "8-2 (مجموع)", scoreEn: "8-2 (AGG)", scorersAr: "برشلونة: سواريز (2)، مارتينيز، إيفاريستو (2)، فيرغيس", scorersEn: "FCB: Suárez (2), Martínez, Evaristo (2), Vergés", linkAr: "https://ar.wikipedia.org/wiki/نهائي_كأس_المعارض_الأوروبية_1958", linkEn: "https://en.wikipedia.org/wiki/1958_Inter-Cities_Fairs_Cup_final" }
                    ]
                },
                // --- 9. الكأس اللاتينية - ملغاة (2 ألقاب) ---
                { 
                    type: "friendly_2", nameAr: "الكأس اللاتينية (ملغاة)", nameEn: "Latin Cup", 
                    wonCount: 2, runnerUpCount: 0, count: 2, wikiLink: "https://ar.wikipedia.org/wiki/الكأس_اللاتينية",
                    details: [
                        { status: "won", year: "1952", opponentAr: "نيس", opponentEn: "Nice", score: "1-0", scorersAr: "سيزار", scorersEn: "César", linkAr: "https://ar.wikipedia.org/wiki/كأس_لاتينا_1949?wprov=rarw1", link: "https://en.wikipedia.org/wiki/1949_Latin_Cup" },
                        { status: "won", year: "1949", opponentAr: "سبورتينغ لشبونة", opponentEn: "Sporting CP", score: "2-1", scorersAr: "سيغوير، باسورا", scorersEn: "Seguer, Basora", linkAr: "https://ar.wikipedia.org/wiki/كأس_لاتينا_1949?wprov=rarw1", linkEn: "https://en.wikipedia.org/wiki/1949_Latin_Cup" }
                    ]
                },
                // --- 10. كأس الدوري الإسباني - ملغاة (2 ألقاب) ---
                { 
                    type: "dom_league_cup", nameAr: "كأس الدوري الإسباني (ملغاة)", nameEn: "Copa de la Liga", 
                    wonCount: 2, runnerUpCount: 0, count: 2, wikiLink: "https://ar.wikipedia.org/wiki/كأس_الدوري_الإسباني",
                    details: [
                        { status: "won", year: "1986", opponentAr: "ريال بيتيس", opponentEn: "Real Betis", scoreAr: "2-1 (مجموع)", scoreEn: "2-1 (AGG)", scorersAr: "أماريا، أليكسانكو", scorersEn: "Amarilla, Alexanko", linkAr: "https://ar.wikipedia.org/wiki/كأس_الدوري_الإسباني_1986", linkEn: "https://en.wikipedia.org/wiki/1986_Copa_de_la_Liga" },
                        { status: "won", year: "1983", opponentAr: "ريال مدريد", opponentEn: "Real Madrid", scoreAr: "4-3 (مجموع)", scoreEn: "4-3 (AGG)", scorersAr: "مارادونا، أليكسانكو، كاراسكو", scorersEn: "Maradona, Alexanko, Carrasco", linkAr: "https://ar.wikipedia.org/wiki/كأس_الدوري_الإسباني_1983", linkEn: "https://en.wikipedia.org/wiki/1983_Copa_de_la_Liga" }
                    ]
                },
                // --- 11. كأس إيفا دوارتي (السوبر القديم) - ملغاة (3 ألقاب، 2 وصافة) ---
                { 
                    type: "dom_cup_defunct", nameAr: "كأس إيفا دوارتي (ملغاة)", nameEn: "Copa Eva Duarte", 
                    wonCount: 3, runnerUpCount: 2, count: 5, wikiLink: "https://ar.wikipedia.org/wiki/كأس_إيفا_دوارتي",
                    details: [
                        { status: "won", year: "1953", opponentAr: "مُتوج تلقائياً (بطل الثنائية)", opponentEn: "Awarded automatically", score: "-", scorersAr: "-", scorersEn: "-", link: "" },
                        { status: "won", year: "1952", opponentAr: "مُتوج تلقائياً (بطل الثنائية)", opponentEn: "Awarded automatically", score: "-", scorersAr: "-", scorersEn: "-", link: "" },
                        { status: "runner_up", year: "1951", opponentAr: "أتلتيكو مدريد", opponentEn: "Atlético Madrid", score: "0-2", scorersAr: "أتلتيكو: كارلسون، إسكوديرو", scorersEn: "ATL: Carlsson, Escudero", link: "" },
                        { status: "runner_up", year: "1949", opponentAr: "فالنسيا", opponentEn: "Valencia", score: "4-7", scorersAr: "برشلونة: سيغوير (3)، نيكولاو", scorersEn: "FCB: Seguer (3), Nicolau", link: "" },
                        { status: "won", year: "1948", opponentAr: "إشبيلية", opponentEn: "Sevilla", score: "1-0", scorersAr: "سيغوير", scorersEn: "Seguer", link: "" }
                    ]
                },
                // --- 7. كأس الإنتركونتيننتال - ملغاة (1 وصافة) ---
                { 
                    type: "world_defunct", nameAr: "كأس الإنتركونتيننتال (ملغاة)", nameEn: "Intercontinental Cup", 
                    wonCount: 0, runnerUpCount: 1, count: 1, wikiLink: "https://ar.wikipedia.org/wiki/كأس_الإنتركونتيننتال",
                    details: [
                        { status: "runner_up", year: "1992", opponentAr: "ساو باولو", opponentEn: "São Paulo", score: "1-2", scorersAr: "برشلونة: ستويتشكوف | ساو باولو: راي (2)", scorersEn: "FCB: Stoichkov | SAO: Raí (2)", link: "https://ar.wikipedia.org/wiki/كأس_الإنتركونتيننتال_1992" }
                    ]
                },
                // --- 13. كأس العالم للأندية المصغرة - ملغاة (1 لقب) ---
                {
                	type: "friendly_3", nameAr: "كأس العالم للأندية المصغرة (ملغاة)", nameEn: "Small Club World Cup",
                wonCount: 1, runnerUpCount: 0, count: 1, wikiLinkAr: "https://ar.wikipedia.org/wiki/%D9%83%D8%A3%D8%B3_%D8%A7%D9%84%D8%B9%D8%A7%D9%84%D9%85_%D8%A7%D9%84%D9%85%D8%B5%D8%BA%D8%B1%D8%A9_%D9%84%D9%84%D8%A3%D9%86%D8%AF%D9%8A%D8%A9", wikiLinkEn: "https://en.wikipedia.org/wiki/Small_Club_World_Cup",
                details: [
                        { status: "won", year: "1957", opponentAr: "بوتافوجو", opponentEn: "Botafogo", score: "10 نقاط", scorersAr: "رامون فيلافيردي (6 أهداف)", scorersEn: "Ramón Villaverde (6 Goals)", link: "https://en.wikipedia.org/wiki/1957_Small_Club_World_Cup" }
                    ]
                }
            ]
        },
                "real_madrid": {
            id: "real_madrid", country: "Spain", continent: "Europe",
            nameAr: "ريال مدريد", nameEn: "Real Madrid", 
            founded: "1902", stadium: "سانتياغو برنابيو", logo: "RealMadrid.png",
            trophies: [
                // --- 1. دوري أبطال أوروبا (15 لقب، 3 وصافة) ---
                { 
                    type: "cont_1", nameAr: "دوري أبطال أوروبا", nameEn: "UEFA Champions League", 
                    wonCount: 15, runnerUpCount: 3, count: 18, wikiLinkAr: "https://ar.wikipedia.org/wiki/تاريخ_ريال_مدريد", wikiLinkEn: "https://en.wikipedia.org/wiki/Real_Madrid_CF_in_international_football",
                    details: [
                        { status: "won", year: "2024", opponentAr: "بوروسيا دورتموند", opponentEn: "Dortmund", score: "2-0", scorersAr: "كارفاخال، فينيسيوس", scorersEn: "Carvajal, Vinícius", linkAr: "https://ar.wikipedia.org/wiki/نهائي_دوري_أبطال_أوروبا_2024", linkEn: "https://en.wikipedia.org/wiki/2024_UEFA_Champions_League_final" },
                        { status: "won", year: "2022", opponentAr: "ليفربول", opponentEn: "Liverpool", score: "1-0", scorersAr: "فينيسيوس", scorersEn: "Vinícius", linkAr: "https://ar.wikipedia.org/wiki/نهائي_دوري_أبطال_أوروبا_2022", linkEn: "https://en.wikipedia.org/wiki/2022_UEFA_Champions_League_final" },
                        { status: "won", year: "2018", opponentAr: "ليفربول", opponentEn: "Liverpool", score: "3-1", scorersAr: "بنزيما، بيل (2)", scorersEn: "Benzema, Bale (2)", linkAr: "https://ar.wikipedia.org/wiki/نهائي_دوري_أبطال_أوروبا_2018", linkEn: "https://en.wikipedia.org/wiki/2018_UEFA_Champions_League_final" },
                        { status: "won", year: "2017", opponentAr: "يوفنتوس", opponentEn: "Juventus", score: "4-1", scorersAr: "رونالدو (2)، كاسيميرو، أسينسيو", scorersEn: "Ronaldo (2), Casemiro, Asensio", linkAr: "https://ar.wikipedia.org/wiki/نهائي_دوري_أبطال_أوروبا_2017", linkEn: "https://en.wikipedia.org/wiki/2017_UEFA_Champions_League_final" },
                        { status: "won", year: "2016", opponentAr: "أتلتيكو مدريد", opponentEn: "Atlético Madrid", score: "1-1 (5-3 ر.ت)", scorersAr: "راموس", scorersEn: "Ramos", linkAr: "https://ar.wikipedia.org/wiki/نهائي_دوري_أبطال_أوروبا_2016", linkEn: "https://en.wikipedia.org/wiki/2016_UEFA_Champions_League_final" },
                        { status: "won", year: "2014", opponentAr: "أتلتيكو مدريد", opponentEn: "Atlético Madrid", score: "4-1 (ب.و.إ)", scorersAr: "راموس، بيل، مارسيلو، رونالدو", scorersEn: "Ramos, Bale, Marcelo, Ronaldo", linkAr: "https://ar.wikipedia.org/wiki/نهائي_دوري_أبطال_أوروبا_2014", linkEn: "https://en.wikipedia.org/wiki/2014_UEFA_Champions_League_final" },
                        { status: "won", year: "2002", opponentAr: "باير ليفركوزن", opponentEn: "Bayer Leverkusen", score: "2-1", scorersAr: "راؤول، زيدان", scorersEn: "Raúl, Zidane", linkAr: "https://ar.wikipedia.org/wiki/نهائي_دوري_أبطال_أوروبا_2002", linkEn: "https://en.wikipedia.org/wiki/2002_UEFA_Champions_League_final" },
                        { status: "won", year: "2000", opponentAr: "فالنسيا", opponentEn: "Valencia", score: "3-0", scorersAr: "مورينتس، ماكمانامان، راؤول", scorersEn: "Morientes, McManaman, Raúl", linkAr: "https://ar.wikipedia.org/wiki/نهائي_دوري_أبطال_أوروبا_2000", linkEn: "https://en.wikipedia.org/wiki/2000_UEFA_Champions_League_final" },
                        { status: "won", year: "1998", opponentAr: "يوفنتوس", opponentEn: "Juventus", score: "1-0", scorersAr: "مياتوفيتش", scorersEn: "Mijatović", linkAr: "https://ar.wikipedia.org/wiki/نهائي_دوري_أبطال_أوروبا_1998", linkEn: "https://en.wikipedia.org/wiki/1998_UEFA_Champions_League_final" },
                        { status: "runner_up", year: "1981", opponentAr: "ليفربول", opponentEn: "Liverpool", score: "0-1", scorersAr: "ليفربول: كينيدي", scorersEn: "LIV: Kennedy", linkAr: "https://ar.wikipedia.org/wiki/نهائي_كأس_أوروبا_1981", linkEn: "https://en.wikipedia.org/wiki/1981_European_Cup_final" },
                        { status: "won", year: "1966", opponentAr: "بارتيزان", opponentEn: "Partizan", score: "2-1", scorersAr: "أمانسيو، سيرينا", scorersEn: "Amancio, Serena", linkAr: "https://ar.wikipedia.org/wiki/نهائي_كأس_أوروبا_1966", linkEn: "https://en.wikipedia.org/wiki/1966_European_Cup_final" },
                        { status: "runner_up", year: "1964", opponentAr: "إنتر ميلان", opponentEn: "Inter Milan", score: "1-3", scorersAr: "مدريد: فيلو | إنتر: ماتسولا (2)، ميلاني", scorersEn: "RMA: Felo | INT: Mazzola (2), Milani", linkAr: "https://ar.wikipedia.org/wiki/نهائي_كأس_أوروبا_1964", linkEn: "https://en.wikipedia.org/wiki/1964_European_Cup_final" },
                        { status: "runner_up", year: "1962", opponentAr: "بنفيكا", opponentEn: "Benfica", score: "3-5", scorersAr: "مدريد: بوشكاش (3) | بنفيكا: ألميدا، كافيم، كولونا، إيزيبيو (2)", scorersEn: "RMA: Puskás (3) | BEN: Águas, Cavém, Coluna, Eusébio (2)", linkAr: "https://ar.wikipedia.org/wiki/نهائي_كأس_أوروبا_1962", linkEn: "https://en.wikipedia.org/wiki/1962_European_Cup_final" },
                        { status: "won", year: "1960", opponentAr: "آينتراخت فرانكفورت", opponentEn: "Eintracht Frankfurt", score: "7-3", scorersAr: "دي ستيفانو (3)، بوشكاش (4)", scorersEn: "Di Stéfano (3), Puskás (4)", linkAr: "https://ar.wikipedia.org/wiki/نهائي_كأس_أوروبا_1960", linkEn: "https://en.wikipedia.org/wiki/1960_European_Cup_final" },
                        { status: "won", year: "1959", opponentAr: "ستاد ريمس", opponentEn: "Stade de Reims", score: "2-0", scorersAr: "ماتيوس، دي ستيفانو", scorersEn: "Mateos, Di Stéfano", linkAr: "https://ar.wikipedia.org/wiki/نهائي_كأس_أوروبا_1959", linkEn: "https://en.wikipedia.org/wiki/1959_European_Cup_final" },
                        { status: "won", year: "1958", opponentAr: "إي سي ميلان", opponentEn: "AC Milan", score: "3-2 (ب.و.إ)", scorersAr: "دي ستيفانو، ريال، خينتو", scorersEn: "Di Stéfano, Rial, Gento", linkAr: "https://ar.wikipedia.org/wiki/نهائي_كأس_أوروبا_1958", linkEn: "https://en.wikipedia.org/wiki/1958_European_Cup_final" },
                        { status: "won", year: "1957", opponentAr: "فيورنتينا", opponentEn: "Fiorentina", score: "2-0", scorersAr: "دي ستيفانو، خينتو", scorersEn: "Di Stéfano, Gento", linkAr: "https://ar.wikipedia.org/wiki/نهائي_كأس_أوروبا_1957", linkEn: "https://en.wikipedia.org/wiki/1957_European_Cup_final" },
                        { status: "won", year: "1956", opponentAr: "ستاد ريمس", opponentEn: "Stade de Reims", score: "4-3", scorersAr: "دي ستيفانو، ريال (2)، ماركيتوس", scorersEn: "Di Stéfano, Rial (2), Marquitos", linkAr: "https://ar.wikipedia.org/wiki/نهائي_كأس_أوروبا_1956", linkEn: "https://en.wikipedia.org/wiki/1956_European_Cup_final" }
                    ]
                },
                // --- 2. كأس العالم للأندية (5 ألقاب) ---
                { 
                    type: "world", nameAr: "كأس العالم للأندية", nameEn: "FIFA Club World Cup", 
                    wonCount: 5, runnerUpCount: 0, count: 5, wikiLinkAr: "https://ar.wikipedia.org/wiki/كأس_العالم_للأندية", wikiLinkEn: "https://en.wikipedia.org/wiki/FIFA_Club_World_Cup",
                    details: [
                        { status: "won", year: "2022", opponentAr: "الهلال", opponentEn: "Al Hilal", score: "5-3", scorersAr: "فينيسيوس (2)، فالفيردي (2)، بنزيما", scorersEn: "Vinícius (2), Valverde (2), Benzema", linkAr: "https://ar.wikipedia.org/wiki/نهائي_كأس_العالم_للأندية_2022", linkEn: "https://en.wikipedia.org/wiki/2022_FIFA_Club_World_Cup_final" },
                        { status: "won", year: "2018", opponentAr: "العين", opponentEn: "Al Ain", score: "4-1", scorersAr: "مودريتش، يورينتي، راموس، يحيى نادر (ع.م)", scorersEn: "Modrić, Llorente, Ramos, Nader (o.g.)", linkAr: "https://ar.wikipedia.org/wiki/نهائي_كأس_العالم_للأندية_2018", linkEn: "https://en.wikipedia.org/wiki/2018_FIFA_Club_World_Cup_final" },
                        { status: "won", year: "2017", opponentAr: "غريميو", opponentEn: "Grêmio", score: "1-0", scorersAr: "كريستيانو رونالدو", scorersEn: "Cristiano Ronaldo", linkAr: "https://ar.wikipedia.org/wiki/نهائي_كأس_العالم_للأندية_2017", linkEn: "https://en.wikipedia.org/wiki/2017_FIFA_Club_World_Cup_final" },
                        { status: "won", year: "2016", opponentAr: "كاشيما أنتلرز", opponentEn: "Kashima Antlers", score: "4-2 (ب.و.إ)", scorersAr: "بنزيما، رونالدو (3)", scorersEn: "Benzema, Ronaldo (3)", linkAr: "https://ar.wikipedia.org/wiki/نهائي_كأس_العالم_للأندية_2016", linkEn: "https://en.wikipedia.org/wiki/2016_FIFA_Club_World_Cup_final" },
                        { status: "won", year: "2014", opponentAr: "سان لورينزو", opponentEn: "San Lorenzo", score: "2-0", scorersAr: "راموس، بيل", scorersEn: "Ramos, Bale", linkAr: "https://ar.wikipedia.org/wiki/نهائي_كأس_العالم_للأندية_2014", linkEn: "https://en.wikipedia.org/wiki/2014_FIFA_Club_World_Cup_final" }
                    ]
                },
                // --- 3. كأس الإنتركونتيننتال - ملغاة (3 ألقاب، 2 وصافة) ---
                { 
                    type: "world_defunct", nameAr: "كأس الإنتركونتيننتال (ملغاة)", nameEn: "Intercontinental Cup", 
                    wonCount: 3, runnerUpCount: 2, count: 5, wikiLinkAr: "https://ar.wikipedia.org/wiki/كأس_الإنتركونتيننتال", wikiLinkEn: "https://en.wikipedia.org/wiki/Intercontinental_Cup_(football)",
                    details: [
                        { status: "won", year: "2002", opponentAr: "أوليمبيا", opponentEn: "Olimpia", score: "2-0", scorersAr: "رونالدو، جوتي", scorersEn: "Ronaldo, Guti", linkAr: "https://ar.wikipedia.org/wiki/كأس_الإنتركونتيننتال_2002", linkEn: "https://en.wikipedia.org/wiki/2002_Intercontinental_Cup" },
                        { status: "runner_up", year: "2000", opponentAr: "بوكا جونيورز", opponentEn: "Boca Juniors", score: "1-2", scorersAr: "مدريد: روبرتو كارلوس | بوكا: باليرمو (2)", scorersEn: "RMA: Roberto Carlos | BOC: Palermo (2)", linkAr: "https://ar.wikipedia.org/wiki/كأس_الإنتركونتيننتال_2000", linkEn: "https://en.wikipedia.org/wiki/2000_Intercontinental_Cup" },
                        { status: "won", year: "1998", opponentAr: "فاسكو دا غاما", opponentEn: "Vasco da Gama", score: "2-1", scorersAr: "راؤول، يارني", scorersEn: "Raúl, Jarni", linkAr: "https://ar.wikipedia.org/wiki/كأس_الإنتركونتيننتال_1998", linkEn: "https://en.wikipedia.org/wiki/1998_Intercontinental_Cup" },
                        { status: "runner_up", year: "1966", opponentAr: "بنيارول", opponentEn: "Peñarol", score: "0-4 (مجموع)", scorersAr: "بنيارول: سبنسر (3)، روكا", scorersEn: "PEN: Spencer (3), Rocha", linkAr: "", linkEn: "https://en.wikipedia.org/wiki/1966_Intercontinental_Cup" },
                        { status: "won", year: "1960", opponentAr: "بنيارول", opponentEn: "Peñarol", score: "5-1 (مجموع)", scorersAr: "بوشكاش (2)، دي ستيفانو، هيريرا، خينتو", scorersEn: "Puskás (2), Di Stéfano, Herrera, Gento", linkAr: "https://ar.wikipedia.org/wiki/كأس_الإنتركونتيننتال_1960", linkEn: "https://en.wikipedia.org/wiki/1960_Intercontinental_Cup" }
                    ]
                },
                // --- 4. كأس السوبر الأوروبي (6 ألقاب، 3 وصافة) ---
                { 
                    type: "cont_super", nameAr: "كأس السوبر الأوروبي", nameEn: "UEFA Super Cup", 
                    wonCount: 6, runnerUpCount: 3, count: 9, wikiLinkAr: "https://ar.wikipedia.org/wiki/كأس_السوبر_الأوروبي", wikiLinkEn: "https://en.wikipedia.org/wiki/UEFA_Super_Cup",
                    details: [
                        { status: "won", year: "2024", opponentAr: "أتالانتا", opponentEn: "Atalanta", score: "2-0", scorersAr: "فالفيردي، مبابي", scorersEn: "Valverde, Mbappé", linkAr: "https://ar.wikipedia.org/wiki/كأس_السوبر_الأوروبي_2024", linkEn: "https://en.wikipedia.org/wiki/2024_UEFA_Super_Cup" },
                        { status: "won", year: "2022", opponentAr: "آينتراخت فرانكفورت", opponentEn: "Eintracht Frankfurt", score: "2-0", scorersAr: "ألابا، بنزيما", scorersEn: "Alaba, Benzema", linkAr: "https://ar.wikipedia.org/wiki/كأس_السوبر_الأوروبي_2022", linkEn: "https://en.wikipedia.org/wiki/2022_UEFA_Super_Cup" },
                        { status: "runner_up", year: "2018", opponentAr: "أتلتيكو مدريد", opponentEn: "Atlético Madrid", score: "2-4 (ب.و.إ)", scorersAr: "مدريد: بنزيما، راموس | أتلتيكو: كوستا (2)، ساؤول، كوكي", scorersEn: "RMA: Benzema, Ramos | ATL: Costa (2), Saúl, Koke", linkAr: "https://ar.wikipedia.org/wiki/كأس_السوبر_الأوروبي_2018", linkEn: "https://en.wikipedia.org/wiki/2018_UEFA_Super_Cup" },
                        { status: "won", year: "2017", opponentAr: "مانشستر يونايتد", opponentEn: "Manchester United", score: "2-1", scorersAr: "كاسيميرو، إيسكو", scorersEn: "Casemiro, Isco", linkAr: "https://ar.wikipedia.org/wiki/كأس_السوبر_الأوروبي_2017", linkEn: "https://en.wikipedia.org/wiki/2017_UEFA_Super_Cup" },
                        { status: "won", year: "2016", opponentAr: "إشبيلية", opponentEn: "Sevilla", score: "3-2 (ب.و.إ)", scorersAr: "أسينسيو، راموس، كارفاخال", scorersEn: "Asensio, Ramos, Carvajal", linkAr: "https://ar.wikipedia.org/wiki/كأس_السوبر_الأوروبي_2016", linkEn: "https://en.wikipedia.org/wiki/2016_UEFA_Super_Cup" },
                        { status: "won", year: "2014", opponentAr: "إشبيلية", opponentEn: "Sevilla", score: "2-0", scorersAr: "كريستيانو رونالدو (2)", scorersEn: "Cristiano Ronaldo (2)", linkAr: "https://ar.wikipedia.org/wiki/كأس_السوبر_الأوروبي_2014", linkEn: "https://en.wikipedia.org/wiki/2014_UEFA_Super_Cup" },
                        { status: "runner_up", year: "2000", opponentAr: "غلطة سراي", opponentEn: "Galatasaray", score: "1-2 (هدف ذهبي)", scorersAr: "مدريد: راؤول | غلطة سراي: جارديل (2)", scorersEn: "RMA: Raúl | GAL: Jardel (2)", linkAr: "https://ar.wikipedia.org/wiki/كأس_السوبر_الأوروبي_2000", linkEn: "https://en.wikipedia.org/wiki/2000_UEFA_Super_Cup" },
                        { status: "runner_up", year: "1998", opponentAr: "تشيلسي", opponentEn: "Chelsea", score: "0-1", scorersAr: "تشيلسي: بويت", scorersEn: "CHE: Poyet", linkAr: "https://ar.wikipedia.org/wiki/كأس_السوبر_الأوروبي_1998", linkEn: "https://en.wikipedia.org/wiki/1998_UEFA_Super_Cup" }
                    ]
                },
                // --- 5. كأس الاتحاد الأوروبي / اليوروباليغ (2 ألقاب) ---
                { 
                    type: "cont_3", nameAr: "كأس الاتحاد الأوروبي", nameEn: "UEFA Cup", 
                    wonCount: 2, runnerUpCount: 0, count: 2, wikiLinkAr: "https://ar.wikipedia.org/wiki/الدوري_الأوروبي", wikiLinkEn: "https://en.wikipedia.org/wiki/UEFA_Europa_League",
                    details: [
                        { status: "won", year: "1986", opponentAr: "كولن", opponentEn: "Köln", score: "5-3 (مجموع)", scorersAr: "فالدانو، سانشيز، وغيرها", scorersEn: "Valdano, Sánchez, etc.", linkAr: "https://ar.wikipedia.org/wiki/نهائي_كأس_الاتحاد_الأوروبي_1986", linkEn: "https://en.wikipedia.org/wiki/1986_UEFA_Cup_final" },
                        { status: "won", year: "1985", opponentAr: "فيديوتون", opponentEn: "Videoton", score: "3-1 (مجموع)", scorersAr: "ميتشيل، سانتيانا", scorersEn: "Míchel, Santillana", linkAr: "https://ar.wikipedia.org/wiki/نهائي_كأس_الاتحاد_الأوروبي_1985", linkEn: "https://en.wikipedia.org/wiki/1985_UEFA_Cup_final" }
                    ]
                },
                // --- 6. الكأس اللاتينية - ملغاة (2 ألقاب) ---
                { 
                    type: "friendly_2", nameAr: "الكأس اللاتينية (ملغاة)", nameEn: "Latin Cup", 
                    wonCount: 2, runnerUpCount: 0, count: 2, wikiLinkAr: "https://ar.wikipedia.org/wiki/الكأس_اللاتينية", wikiLinkEn: "https://en.wikipedia.org/wiki/Latin_Cup",
                    details: [
                        { status: "won", year: "1957", opponentAr: "بنفيكا", opponentEn: "Benfica", score: "1-0", scorersAr: "دي ستيفانو", scorersEn: "Di Stéfano", linkAr: "", linkEn: "" },
                        { status: "won", year: "1955", opponentAr: "ستاد ريمس", opponentEn: "Stade de Reims", score: "2-0", scorersAr: "ريال، هيال", scorersEn: "Rial, Héctor", linkAr: "", linkEn: "" }
                    ]
                },
                // --- 8. كأس الكؤوس الأوروبية - ملغاة (2 وصافة) ---
                { 
                    type: "cont_2", nameAr: "كأس الكؤوس الأوروبية (ملغاة)", nameEn: "UEFA Cup Winners' Cup", 
                    wonCount: 0, runnerUpCount: 2, count: 2, wikiLinkAr: "https://ar.wikipedia.org/wiki/كأس_الكؤوس_الأوروبية", wikiLinkEn: "https://en.wikipedia.org/wiki/UEFA_Cup_Winners'_Cup",
                    details: [
                        { status: "runner_up", year: "1983", opponentAr: "أبردين", opponentEn: "Aberdeen", score: "1-2 (ب.و.إ)", scorersAr: "مدريد: خوانيتو | أبردين: بلاك، هيويت", scorersEn: "RMA: Juanito | ABE: Black, Hewitt", linkAr: "https://ar.wikipedia.org/wiki/نهائي_كأس_الكؤوس_الأوروبية_1983", linkEn: "https://en.wikipedia.org/wiki/1983_European_Cup_Winners'_Cup_final" },
                        { status: "runner_up", year: "1971", opponentAr: "تشيلسي", opponentEn: "Chelsea", score: "1-2 (مباراة إعادة)", scorersAr: "مدريد: فليتاس | تشيلسي: ديمبسي، أوسغود", scorersEn: "RMA: Fleitas | CHE: Dempsey, Osgood", linkAr: "https://ar.wikipedia.org/wiki/نهائي_كأس_الكؤوس_الأوروبية_1971", linkEn: "https://en.wikipedia.org/wiki/1971_European_Cup_Winners'_Cup_final" }
                    ]
                },
                // --- الدوري الإسباني - ريال مدريد (36 لقب، 25 وصافة) ---
                { 
                    type: "dom_league", nameAr: "الدوري الإسباني", nameEn: "La Liga", 
                    wonCount: 36, runnerUpCount: 25, count: 61, wikiLinkAr: "https://ar.wikipedia.org/wiki/قائمة_مواسم_ريال_مدريد", wikiLinkEn: "https://en.wikipedia.org/wiki/List_of_Real_Madrid_CF_seasons",
                    details: [
                        // --- العصر الحديث (2010 - 2024) ---
                        { status: "won", year: "2023-24", opponentAr: "برشلونة (وصيف)", opponentEn: "Barcelona", score: "95 pt", scorersAr: "بيلينغهام (19 هدف)", scorersEn: "Bellingham (19)" },
                        { status: "runner_up", year: "2022-23", opponentAr: "برشلونة (البطل)", opponentEn: "Barcelona", score: "78 pt", scorersAr: "بنزيمة (19 هدف)", scorersEn: "Benzema (19)" },
                        { status: "won", year: "2021-22", opponentAr: "برشلونة (وصيف)", opponentEn: "Barcelona", score: "86 pt", scorersAr: "بنزيمة (27 هدف)", scorersEn: "Benzema (27)" },
                        { status: "runner_up", year: "2020-21", opponentAr: "أتلتيكو مدريد", opponentEn: "Atlético Madrid", score: "84 pt", scorersAr: "بنزيمة (23 هدف)", scorersEn: "Benzema (23)" },
                        { status: "won", year: "2019-20", opponentAr: "برشلونة (وصيف)", opponentEn: "Barcelona", score: "87 pt", scorersAr: "بنزيمة (21 هدف)", scorersEn: "Benzema (21)" },
                        { status: "won", year: "2016-17", opponentAr: "برشلونة (وصيف)", opponentEn: "Barcelona", score: "93 pt", scorersAr: "رونالدو (25 هدف)", scorersEn: "Ronaldo (25)" },
                        { status: "runner_up", year: "2015-16", opponentAr: "برشلونة", opponentEn: "Barcelona", score: "90 pt", scorersAr: "رونالدو (35 هدف)", scorersEn: "Ronaldo (35)" },
                        { status: "runner_up", year: "2014-15", opponentAr: "برشلونة", opponentEn: "Barcelona", score: "92 pt", scorersAr: "رونالدو (48 هدف)", scorersEn: "Ronaldo (48)" },
                        { status: "runner_up", year: "2012-13", opponentAr: "برشلونة", opponentEn: "Barcelona", score: "85 pt", scorersAr: "رونالدو (34 هدف)", scorersEn: "Ronaldo (34)" },
                        { status: "won", year: "2011-12", opponentAr: "برشلونة (وصيف)", opponentEn: "Barcelona", score: "100 pt", scorersAr: "رونالدو (46 هدف)", scorersEn: "Ronaldo (46)" },
                        { status: "runner_up", year: "2010-11", opponentAr: "برشلونة", opponentEn: "Barcelona", score: "92 pt", scorersAr: "رونالدو (40 هدف)", scorersEn: "Ronaldo (40)" },
                        { status: "runner_up", year: "2009-10", opponentAr: "برشلونة", opponentEn: "Barcelona", score: "96 pt", scorersAr: "رونالدو (26 هدف)", scorersEn: "Ronaldo (26)" },

                        // --- عصر الجالاكتيكوس والألفية (1990 - 2009) ---
                        { status: "runner_up", year: "2008-09", opponentAr: "برشلونة", opponentEn: "Barcelona", score: "78 pt", scorersAr: "هيغواين (22 هدف)", scorersEn: "Higuaín (22)" },
                        { status: "won", year: "2007-08", opponentAr: "فياريال (وصيف)", opponentEn: "Villarreal", score: "85 pt", scorersAr: "راؤول (18 هدف)", scorersEn: "Raúl (18)" },
                        { status: "won", year: "2006-07", opponentAr: "برشلونة (وصيف)", opponentEn: "Barcelona", score: "76 pt", scorersAr: "فان نيستلروي (25 هدف)", scorersEn: "Van Nistelrooy (25)" },
                        { status: "runner_up", year: "2005-06", opponentAr: "برشلونة", opponentEn: "Barcelona", score: "70 pt", scorersAr: "رونالدو الظاهرة (14 هدف)", scorersEn: "Ronaldo (14)" },
                        { status: "runner_up", year: "2004-05", opponentAr: "برشلونة", opponentEn: "Barcelona", score: "80 pt", scorersAr: "رونالدو الظاهرة (21 هدف)", scorersEn: "Ronaldo (21)" },
                        { status: "won", year: "2002-03", opponentAr: "سوسيداد (وصيف)", opponentEn: "R. Sociedad", score: "78 pt", scorersAr: "رونالدو الظاهرة (23 هدف)", scorersEn: "Ronaldo (23)" },
                        { status: "won", year: "2000-01", opponentAr: "ديبورتيفو لاكورونيا", opponentEn: "Deportivo", score: "80 pt", scorersAr: "راؤول (24 هدف)", scorersEn: "Raúl (24)" },
                        { status: "runner_up", year: "1998-99", opponentAr: "برشلونة", opponentEn: "Barcelona", score: "68 pt", scorersAr: "راؤول (25 هدف)", scorersEn: "Raúl (25)" },
                        { status: "won", year: "1996-97", opponentAr: "برشلونة (وصيف)", opponentEn: "Barcelona", score: "92 pt", scorersAr: "سوكير (24 هدف)", scorersEn: "Šuker (24)" },
                        { status: "won", year: "1994-95", opponentAr: "ديبورتيفو لاكورونيا", opponentEn: "Deportivo", score: "55 pt", scorersAr: "زامورانو (28 هدف)", scorersEn: "Zamorano (28)" },
                        { status: "runner_up", year: "1992-93", opponentAr: "برشلونة", opponentEn: "Barcelona", score: "57 pt", scorersAr: "زامورانو (26 هدف)", scorersEn: "Zamorano (26)" },
                        { status: "runner_up", year: "1991-92", opponentAr: "برشلونة", opponentEn: "Barcelona", score: "54 pt", scorersAr: "هيرو (21 هدف)", scorersEn: "Hierro (21)" },

                        // --- عصر كينتا ديل بويتري والهيمنة (1960 - 1990) ---
                        { status: "won", year: "1989-90", opponentAr: "فالنسيا", score: "62 pt", scorersAr: "هوغو سانشيز (38 هدف)" },
                        { status: "won", year: "1988-89", opponentAr: "برشلونة", score: "62 pt", scorersAr: "هوغو سانشيز (27 هدف)" },
                        { status: "won", year: "1987-88", opponentAr: "سوسيداد", score: "62 pt", scorersAr: "هوغو سانشيز (29 هدف)" },
                        { status: "won", year: "1986-87", opponentAr: "برشلونة", score: "66 pt", scorersAr: "هوغو سانشيز (34 هدف)" },
                        { status: "won", year: "1985-86", opponentAr: "برشلونة", score: "56 pt", scorersAr: "هوغو سانشيز (22 هدف)" },
                        { status: "runner_up", year: "1983-84", opponentAr: "أتلتيك بيلباو", score: "49 pt", scorersAr: "خوانيتو (17 هدف)" },
                        { status: "runner_up", year: "1982-83", opponentAr: "أتلتيك بيلباو", score: "49 pt", scorersAr: "سانتيانا (9 أهداف)" },
                        { status: "runner_up", year: "1980-81", opponentAr: "سوسيداد", score: "45 pt", scorersAr: "خوانيتو (19 هدف)" },
                        { status: "won", year: "1979-80", opponentAr: "سوسيداد", score: "53 pt", scorersAr: "سانتيانا (23 هدف)" },
                        { status: "won", year: "1978-79", opponentAr: "سبورتينغ خيخون", score: "47 pt", scorersAr: "سانتيانا (18 هدف)" },
                        { status: "won", year: "1977-78", opponentAr: "برشلونة", score: "47 pt", scorersAr: "سانتيانا (24 هدف)" },
                        { status: "won", year: "1975-76", opponentAr: "برشلونة", score: "48 pt", scorersAr: "بيري (13 هدف)" },
                        { status: "won", year: "1974-75", opponentAr: "سرقسطة", score: "50 pt", scorersAr: "سانتيانا (17 هدف)" },
                        { status: "won", year: "1971-72", opponentAr: "فالنسيا", score: "47 pt", scorersAr: "بيري (11 هدف)" },
                        { status: "won", year: "1968-69", opponentAr: "لاس بالماس", score: "47 pt", scorersAr: "أمانسيو (14 هدف)" },
                        { status: "won", year: "1967-68", opponentAr: "برشلونة", score: "42 pt", scorersAr: "أمانسيو (10 أهداف)" },
                        { status: "won", year: "1966-67", opponentAr: "برشلونة", score: "47 pt", scorersAr: "خنتو (11 هدف)" },
                        { status: "runner_up", year: "1965-66", opponentAr: "أتلتيكو مدريد", score: "44 pt", scorersAr: "أمانسيو (15 هدف)" },
                        { status: "won", year: "1964-65", opponentAr: "أتلتيكو مدريد", score: "47 pt", scorersAr: "غروسو (17 هدف)" },
                        { status: "won", year: "1963-64", opponentAr: "برشلونة", score: "46 pt", scorersAr: "بوشكاش (21 هدف)" },
                        { status: "won", year: "1962-63", opponentAr: "أتلتيكو مدريد", score: "49 pt", scorersAr: "بوشكاش (26 هدف)" },
                        { status: "won", year: "1961-62", opponentAr: "برشلونة", score: "43 pt", scorersAr: "بوشكاش (20 هدف)" },
                        { status: "won", year: "1960-61", opponentAr: "أتلتيكو مدريد", score: "52 pt", scorersAr: "بوشكاش (28 هدف)" },

                        // --- عصر دي ستيفانو والبدايات (1929 - 1960) ---
                        { status: "runner_up", year: "1959-60", opponentAr: "برشلونة", score: "46 pt", scorersAr: "بوشكاش (25 هدف)" },
                        { status: "runner_up", year: "1958-59", opponentAr: "برشلونة", score: "47 pt", scorersAr: "دي ستيفانو (23 هدف)" },
                        { status: "won", year: "1957-58", opponentAr: "أتلتيكو مدريد", score: "45 pt", scorersAr: "دي ستيفانو (19 هدف)" },
                        { status: "won", year: "1956-57", opponentAr: "إشبيلية", score: "44 pt", scorersAr: "دي ستيفانو (31 هدف)" },
                        { status: "won", year: "1954-55", opponentAr: "برشلونة", score: "46 pt", scorersAr: "دي ستيفانو (25 هدف)" },
                        { status: "won", year: "1953-54", opponentAr: "برشلونة", score: "40 pt", scorersAr: "دي ستيفانو (27 هدف)" },
                        { status: "runner_up", year: "1944-45", opponentAr: "برشلونة", score: "38 pt", scorersAr: "سابينو بارينغا (18 هدف)" },
                        { status: "runner_up", year: "1941-42", opponentAr: "فالنسيا", score: "33 pt", scorersAr: "ألداي (23 هدف)" },
                        { status: "runner_up", year: "1935-36", opponentAr: "أتلتيك بيلباو", score: "29 pt", scorersAr: "ساينودو (20 هدف)" },
                        { status: "runner_up", year: "1934-35", opponentAr: "ريال بيتيس", score: "33 pt", scorersAr: "ساينودو (17 هدف)" },
                        { status: "runner_up", year: "1933-34", opponentAr: "أتلتيك بيلباو", score: "25 pt", scorersAr: "ريجيرو (11 هدف)" },
                        { status: "won", year: "1932-33", opponentAr: "أتلتيك بيلباو", score: "28 pt", scorersAr: "أوليفاريس (16 هدف)" },
                        { status: "won", year: "1931-32", opponentAr: "أتلتيك بيلباو", score: "28 pt", scorersAr: "أوليفاريس (11 هدف)" },
                        { status: "runner_up", year: "1929", opponentAr: "برشلونة", score: "23 pt", scorersAr: "غاسبار روبيو (11 هدف)" }
                    ]
                },
                // --- 10. كأس ملك إسبانيا (20 لقب، 20 وصافة) ---
                {
    type: "dom_cup", nameAr: "كأس ملك إسبانيا", nameEn: "Copa del Rey",
    wonCount: 20, runnerUpCount: 21, count: 41,
    wikiLinkAr: "https://ar.wikipedia.org/wiki/%D9%83%D8%A3%D8%B3_%D8%A7%D9%84%D9%85%D9%84%D9%83_(%D8%A5%D8%B3%D8%A8%D8%A7%D9%86%D9%8A%D8%A7)", wikiLinkEn: "https://en.wikipedia.org/wiki/Copa_del_Rey",
    details: [
        { status: "runner_up", year: "2025", opponentAr: "برشلونة", opponentEn: "Barcelona", score: "2-3 (ب.و.إ)", scoreEn: "2-3 (AET)", scorersAr: "", scorersEn: "", linkAr: "https://ar.wikipedia.org/wiki/نهائي_كأس_ملك_إسبانيا_2025", linkEn: "https://en.wikipedia.org/wiki/2025_Copa_del_Rey_final" },
        { status: "won", year: "2023", opponentAr: "أوساسونا", opponentEn: "Osasuna", score: "2-1", scorersAr: "ريال مدريد: رودريغو (2)", scorersEn: "RMA: Rodrygo (2)", linkAr: "https://ar.wikipedia.org/wiki/نهائي_كأس_ملك_إسبانيا_2023", linkEn: "https://en.wikipedia.org/wiki/2023_Copa_del_Rey_final" },
        { status: "won", year: "2014", opponentAr: "برشلونة", opponentEn: "Barcelona", score: "2-1", scorersAr: "ريال مدريد: دي ماريا، بيل | برشلونة: نيمار", scorersEn: "RMA: Di María, Bale | BAR: Neymar", linkAr: "https://ar.wikipedia.org/wiki/نهائي_كأس_ملك_إسبانيا_2014", linkEn: "https://en.wikipedia.org/wiki/2014_Copa_del_Rey_final" },
        { status: "runner_up", year: "2013", opponentAr: "أتلتيكو مدريد", opponentEn: "Atlético Madrid", score: "1-2 (ب.و.إ)", scoreEn: "1-2 (AET)", scorersAr: "ريال مدريد: رونالدو | أتلتيكو: كوستا، ميراندا", scorersEn: "RMA: Ronaldo | ATM: Costa, Miranda", linkAr: "https://ar.wikipedia.org/wiki/نهائي_كأس_ملك_إسبانيا_2013", linkEn: "https://en.wikipedia.org/wiki/2013_Copa_del_Rey_final" },
        { status: "won", year: "2011", opponentAr: "برشلونة", opponentEn: "Barcelona", score: "1-0 (ب.و.إ)", scoreEn: "1-0 (AET)", scorersAr: "رونالدو", scorersEn: "Ronaldo", linkAr: "https://ar.wikipedia.org/wiki/نهائي_كأس_ملك_إسبانيا_2011", linkEn: "https://en.wikipedia.org/wiki/2011_Copa_del_Rey_final" },
        { status: "runner_up", year: "2004", opponentAr: "ريال سرقسطة", opponentEn: "Real Zaragoza", score: "2-3 (ب.و.إ)", scoreEn: "2-3 (AET)", scorersAr: "", scorersEn: "", linkAr: "https://www.rsssf.org/tabless/spancup04.html", linkEn: "https://www.rsssf.org/tabless/spancup04.html" },
        { status: "runner_up", year: "2002", opponentAr: "ديبورتيبو لاكورونيا", opponentEn: "Deportivo La Coruña", score: "1-2", scorersAr: "", scorersEn: "", linkAr: "https://www.rsssf.org/tabless/spancup02.html", linkEn: "https://www.rsssf.org/tabless/spancup02.html" },
        { status: "won", year: "1993", opponentAr: "ريال سرقسطة", opponentEn: "Real Zaragoza", score: "2-0", scorersAr: "", scorersEn: "", linkAr: "https://www.rsssf.org/tabless/spancup1993.html", linkEn: "https://www.rsssf.org/tabless/spancup1993.html" },
        { status: "runner_up", year: "1992", opponentAr: "أتلتيكو مدريد", opponentEn: "Atlético Madrid", score: "0-2", scorersAr: "", scorersEn: "", linkAr: "https://www.rsssf.org/tabless/spancup1992.html", linkEn: "https://www.rsssf.org/tabless/spancup1992.html" },
        { status: "runner_up", year: "1990", opponentAr: "برشلونة", opponentEn: "Barcelona", score: "0-2", scorersAr: "", scorersEn: "", linkAr: "https://www.rsssf.org/tabless/spancup1990.html", linkEn: "https://www.rsssf.org/tabless/spancup1990.html" },
        { status: "won", year: "1989", opponentAr: "ريال بلد الوليد", opponentEn: "Real Valladolid", score: "1-0", scorersAr: "", scorersEn: "", linkAr: "https://www.rsssf.org/tabless/spancup1989.html", linkEn: "https://www.rsssf.org/tabless/spancup1989.html" },
        { status: "runner_up", year: "1983", opponentAr: "برشلونة", opponentEn: "Barcelona", score: "1-2", scorersAr: "", scorersEn: "", linkAr: "https://www.rsssf.org/tabless/spancup1983.html", linkEn: "https://www.rsssf.org/tabless/spancup1983.html" },
        { status: "won", year: "1982", opponentAr: "سبورتنغ خيخون", opponentEn: "Sporting Gijón", score: "2-1", scorersAr: "", scorersEn: "", linkAr: "https://www.rsssf.org/tabless/spancup1982.html", linkEn: "https://www.rsssf.org/tabless/spancup1982.html" },
        { status: "won", year: "1980", opponentAr: "كاستيا (فريق ريال مدريد الاحتياطي)", opponentEn: "Castilla (Real Madrid reserves)", score: "6-1", scorersAr: "", scorersEn: "", linkAr: "https://www.rsssf.org/tabless/spancup1980.html", linkEn: "https://www.rsssf.org/tabless/spancup1980.html" },
        { status: "runner_up", year: "1979", opponentAr: "فالنسيا", opponentEn: "Valencia", score: "0-2", scorersAr: "", scorersEn: "", linkAr: "https://www.rsssf.org/tabless/spancup1979.html", linkEn: "https://www.rsssf.org/tabless/spancup1979.html" },
        { status: "won", year: "1975", opponentAr: "أتلتيكو مدريد", opponentEn: "Atlético Madrid", scoreAr: "0-0 (4-3 ر.ت)", scoreEn: "0-0 (4-3 PEN)", scorersAr: "لا يوجد (ركلات ترجيح)", scorersEn: "None (Penalties)", linkAr: "https://www.rsssf.org/tabless/spancup1975.html", linkEn: "https://www.rsssf.org/tabless/spancup1975.html" },
        { status: "won", year: "1974", opponentAr: "برشلونة", opponentEn: "Barcelona", score: "4-0", scorersAr: "", scorersEn: "", linkAr: "https://www.rsssf.org/tabless/spancup1974.html", linkEn: "https://www.rsssf.org/tabless/spancup1974.html" },
        { status: "won", year: "1970", opponentAr: "فالنسيا", opponentEn: "Valencia", score: "3-1", scorersAr: "", scorersEn: "", linkAr: "https://www.rsssf.org/tabless/spancup1970.html", linkEn: "https://www.rsssf.org/tabless/spancup1970.html" },
        { status: "runner_up", year: "1968", opponentAr: "برشلونة", opponentEn: "Barcelona", score: "0-1", scorersAr: "", scorersEn: "", linkAr: "https://www.rsssf.org/tabless/spancup1968.html", linkEn: "https://www.rsssf.org/tabless/spancup1968.html" },
        { status: "won", year: "1962", opponentAr: "إشبيلية", opponentEn: "Sevilla", score: "2-1", scorersAr: "", scorersEn: "", linkAr: "https://www.rsssf.org/tabless/spancup1962.html", linkEn: "https://www.rsssf.org/tabless/spancup1962.html" },
        { status: "runner_up", year: "1961", opponentAr: "أتلتيكو مدريد", opponentEn: "Atlético Madrid", score: "2-3", scorersAr: "", scorersEn: "", linkAr: "https://www.rsssf.org/tabless/spancup1961.html", linkEn: "https://www.rsssf.org/tabless/spancup1961.html" },
        { status: "runner_up", year: "1960", opponentAr: "أتلتيكو مدريد", opponentEn: "Atlético Madrid", score: "1-3", scorersAr: "", scorersEn: "", linkAr: "https://www.rsssf.org/tabless/spancup1960.html", linkEn: "https://www.rsssf.org/tabless/spancup1960.html" },
        { status: "runner_up", year: "1958", opponentAr: "أتلتيك بلباو", opponentEn: "Athletic Bilbao", score: "0-2", scorersAr: "", scorersEn: "", linkAr: "https://www.rsssf.org/tabless/spancup1958.html", linkEn: "https://www.rsssf.org/tabless/spancup1958.html" },
        { status: "won", year: "1947", opponentAr: "إسبانيول", opponentEn: "Español", scoreAr: "2-0 (ب.و.إ)", scoreEn: "2-0 (AET)", scorersAr: "", scorersEn: "", linkAr: "https://www.rsssf.org/tabless/spancup1947.html", linkEn: "https://www.rsssf.org/tabless/spancup1947.html" },
        { status: "won", year: "1946", opponentAr: "فالنسيا", opponentEn: "Valencia", score: "3-1", scorersAr: "", scorersEn: "", linkAr: "https://www.rsssf.org/tabless/spancup1946.html", linkEn: "https://www.rsssf.org/tabless/spancup1946.html" },
        { status: "runner_up", year: "1943", opponentAr: "أتلتيك بلباو", opponentEn: "Athletic Bilbao", scoreAr: "0-1 (ب.و.إ)", scoreEn: "0-1 (AET)", scorersAr: "", scorersEn: "", linkAr: "https://www.rsssf.org/tabless/spancup1943.html", linkEn: "https://www.rsssf.org/tabless/spancup1943.html" },
        { status: "runner_up", year: "1940", opponentAr: "إسبانيول", opponentEn: "Español", scoreAr: "2-3 (ب.و.إ)", scoreEn: "2-3 (AET)", scorersAr: "", scorersEn: "", linkAr: "https://www.rsssf.org/tabless/spancup1940.html", linkEn: "https://www.rsssf.org/tabless/spancup1940.html" },
        { status: "won", year: "1936", opponentAr: "برشلونة", opponentEn: "Barcelona", score: "2-1", scorersAr: "", scorersEn: "", linkAr: "https://www.rsssf.org/tabless/spancup1936.html", linkEn: "https://www.rsssf.org/tabless/spancup1936.html" },
        { status: "won", year: "1934", opponentAr: "فالنسيا", opponentEn: "Valencia", score: "2-1", scorersAr: "", scorersEn: "", linkAr: "https://www.rsssf.org/tabless/spancup1934.html", linkEn: "https://www.rsssf.org/tabless/spancup1934.html" },
        { status: "runner_up", year: "1933", opponentAr: "أتلتيك بلباو", opponentEn: "Athletic Bilbao", score: "1-2", scorersAr: "", scorersEn: "", linkAr: "https://www.rsssf.org/tabless/spancup1933.html", linkEn: "https://www.rsssf.org/tabless/spancup1933.html" },
        { status: "runner_up", year: "1930", opponentAr: "أتلتيك بلباو", opponentEn: "Athletic Bilbao", scoreAr: "2-3 (ب.و.إ)", scoreEn: "2-3 (AET)", scorersAr: "", scorersEn: "", linkAr: "https://www.rsssf.org/tabless/spancup1930.html", linkEn: "https://www.rsssf.org/tabless/spancup1930.html" },
        { status: "runner_up", year: "1929", opponentAr: "إسبانيول", opponentEn: "Español", score: "1-2", scorersAr: "", scorersEn: "", linkAr: "https://www.rsssf.org/tabless/spancup1929.html", linkEn: "https://www.rsssf.org/tabless/spancup1929.html" },
        { status: "runner_up", year: "1924", opponentAr: "ريال أونيون إيرون", opponentEn: "Real Unión de Irún", score: "0-1", scorersAr: "", scorersEn: "", linkAr: "https://www.rsssf.org/tabless/spancup1924.html", linkEn: "https://www.rsssf.org/tabless/spancup1924.html" },
        { status: "runner_up", year: "1918", opponentAr: "ريال أونيون إيرون", opponentEn: "Real Unión de Irún", score: "0-2", scorersAr: "", scorersEn: "", linkAr: "https://www.rsssf.org/tabless/spancup1918.html", linkEn: "https://www.rsssf.org/tabless/spancup1918.html" },
        { status: "won", year: "1917", opponentAr: "أريناس دي جيتشو", opponentEn: "Arenas de Guecho", scoreAr: "0-0، 2-1 (إعادة)", scoreEn: "0-0, 2-1 (replay)", scorersAr: "", scorersEn: "", linkAr: "https://www.rsssf.org/tabless/spancup1917.html", linkEn: "https://www.rsssf.org/tabless/spancup1917.html" },
        { status: "runner_up", year: "1916", opponentAr: "أتلتيك بلباو", opponentEn: "Athletic Bilbao", score: "0-4", scorersAr: "", scorersEn: "", linkAr: "https://www.rsssf.org/tabless/spancup1916.html", linkEn: "https://www.rsssf.org/tabless/spancup1916.html" },
        { status: "won", year: "1908", opponentAr: "فيغو سبورتنغ", opponentEn: "Vigo Sporting", score: "2-1", scorersAr: "", scorersEn: "", linkAr: "https://www.rsssf.org/tabless/spancup1908.html", linkEn: "https://www.rsssf.org/tabless/spancup1908.html" },
        { status: "won", year: "1907", opponentAr: "بيثكايا بلباو", opponentEn: "Vizcaya de Bilbao", score: "1-0", scorersAr: "", scorersEn: "", linkAr: "https://www.rsssf.org/tabless/spancup1907.html", linkEn: "https://www.rsssf.org/tabless/spancup1907.html" },
        { status: "won", year: "1906", opponentAr: "أتلتيك بلباو", opponentEn: "Athletic Bilbao", score: "4-1", scorersAr: "", scorersEn: "", linkAr: "https://www.rsssf.org/tabless/spancup1906.html", linkEn: "https://www.rsssf.org/tabless/spancup1906.html" },
        { status: "won", year: "1905", opponentAr: "أتلتيك بلباو", opponentEn: "Athletic Bilbao", score: "1-0", scorersAr: "", scorersEn: "", linkAr: "https://www.rsssf.org/tabless/spancup1905.html", linkEn: "https://www.rsssf.org/tabless/spancup1905.html" },
        { status: "runner_up", year: "1903", opponentAr: "أتلتيك بلباو", opponentEn: "Athletic Bilbao", score: "2-3", scorersAr: "", scorersEn: "", linkAr: "https://www.rsssf.org/tabless/spancup1903.html", linkEn: "https://www.rsssf.org/tabless/spancup1903.html" }
    ]
},
                // --- 11. كأس السوبر الإسباني (13 لقب، 6 وصافة) ---
                { 
                    type: "dom_super", nameAr: "كأس السوبر الإسباني", nameEn: "Supercopa de España", 
                    wonCount: 13, runnerUpCount: 6, count: 19, wikiLinkAr: "https://ar.wikipedia.org/wiki/كأس_السوبر_الإسباني", wikiLinkEn: "https://en.wikipedia.org/wiki/Supercopa_de_Espa%C3%B1a",
                    details: [
                        { status: "won", year: "2023-2024", opponentAr: "برشلونة", opponentEn: "Barcelona", score: "4-1", scorersAr: "فينيسيوس (3)، رودريغو", scorersEn: "Vinícius (3), Rodrygo", linkAr: "https://ar.wikipedia.org/wiki/نهائي_كأس_السوبر_الإسباني_2024", linkEn: "https://en.wikipedia.org/wiki/2024_Supercopa_de_Espa%C3%B1a_final" },
                        { status: "runner_up", year: "2022-2023", opponentAr: "برشلونة", opponentEn: "Barcelona", score: "1-3", scorersAr: "مدريد: بنزيما | برشلونة: جافي، ليفاندوفسكي، بيدري", scorersEn: "RMA: Benzema | BAR: Gavi, Lewandowski, Pedri", linkAr: "https://ar.wikipedia.org/wiki/نهائي_كأس_السوبر_الإسباني_2023", linkEn: "https://en.wikipedia.org/wiki/2023_Supercopa_de_Espa%C3%B1a_final" },
                        { status: "won", year: "2021-2022", opponentAr: "أتلتيك بيلباو", opponentEn: "Athletic Bilbao", score: "2-0", scorersAr: "مودريتش، بنزيما", scorersEn: "Modrić, Benzema", linkAr: "https://ar.wikipedia.org/wiki/نهائي_كأس_السوبر_الإسباني_2022", linkEn: "https://en.wikipedia.org/wiki/2022_Supercopa_de_Espa%C3%B1a_final" },
                        { status: "won", year: "2019-2020", opponentAr: "أتلتيكو مدريد", opponentEn: "Atlético Madrid", score: "0-0 (4-1 ر.ت)", scorersAr: "ركلات ترجيح", scorersEn: "Penalties", linkAr: "https://ar.wikipedia.org/wiki/نهائي_كأس_السوبر_الإسباني_2020", linkEn: "https://en.wikipedia.org/wiki/2020_Supercopa_de_Espa%C3%B1a_final" },
                        { status: "won", year: "2017", opponentAr: "برشلونة", opponentEn: "Barcelona", score: "5-1 (مجموع)", scorersAr: "رونالدو، أسينسيو (2)، بيكيه (ع.م)، بنزيما", scorersEn: "Ronaldo, Asensio (2), Piqué (o.g.), Benzema", linkAr: "https://ar.wikipedia.org/wiki/كأس_السوبر_الإسباني_2017", linkEn: "https://en.wikipedia.org/wiki/2017_Supercopa_de_Espa%C3%B1a" },
                        { status: "runner_up", year: "2014", opponentAr: "أتلتيكو مدريد", opponentEn: "Atlético Madrid", score: "1-2 (مجموع)", scorersAr: "مدريد: جيمس رودريغيز | أتلتيكو: غارسيا، ماندجوكيتش", scorersEn: "RMA: James | ATL: García, Mandžukić", linkAr: "https://ar.wikipedia.org/wiki/كأس_السوبر_الإسباني_2014", linkEn: "https://en.wikipedia.org/wiki/2014_Supercopa_de_Espa%C3%B1a" },
                        { status: "won", year: "2012", opponentAr: "برشلونة", opponentEn: "Barcelona", score: "4-4 (أ.خ.د)", scorersAr: "رونالدو (2)، دي ماريا، هيغواين", scorersEn: "Ronaldo (2), Di María, Higuaín", linkAr: "https://ar.wikipedia.org/wiki/كأس_السوبر_الإسباني_2012", linkEn: "https://en.wikipedia.org/wiki/2012_Supercopa_de_Espa%C3%B1a" },
                        { status: "runner_up", year: "2011", opponentAr: "برشلونة", opponentEn: "Barcelona", score: "4-5 (مجموع)", scorersAr: "مدريد: أوزيل، ألونسو، رونالدو، بنزيما | برشلونة: فيا، ميسي (3)، إنييستا", scorersEn: "RMA: Özil, Alonso, Ronaldo, Benzema | BAR: Villa, Messi (3), Iniesta", linkAr: "https://ar.wikipedia.org/wiki/كأس_السوبر_الإسباني_2011", linkEn: "https://en.wikipedia.org/wiki/2011_Supercopa_de_Espa%C3%B1a" },
                        { status: "won", year: "2008", opponentAr: "فالنسيا", opponentEn: "Valencia", score: "6-5 (مجموع)", scorersAr: "فان نيستلروي (3)، راموس، دي لا ريد، هيغواين", scorersEn: "Van Nistelrooy (3), Ramos, De la Red, Higuaín", linkAr: "https://ar.wikipedia.org/wiki/كأس_السوبر_الإسباني_2008", linkEn: "https://en.wikipedia.org/wiki/2008_Supercopa_de_Espa%C3%B1a" }
                    ]
                },
                // --- 12. كأس الدوري الإسباني - ملغاة (1 لقب، 1 وصافة) ---
                { 
                    type: "dom_league_cup", nameAr: "كأس الدوري الإسباني (ملغاة)", nameEn: "Copa de la Liga", 
                    wonCount: 1, runnerUpCount: 1, count: 2, wikiLinkAr: "https://ar.wikipedia.org/wiki/كأس_الدوري_الإسباني", wikiLinkEn: "https://en.wikipedia.org/wiki/Copa_de_la_Liga",
                    details: [
                        { status: "won", year: "1984-1985", opponentAr: "أتلتيكو مدريد", opponentEn: "Atlético Madrid", score: "4-3 (مجموع)", scorersAr: "بينيدا، سانتيانا، شتيليكه، فالدانو", scorersEn: "Pineda, Santillana, Stielike, Valdano", linkAr: "", linkEn: "https://en.wikipedia.org/wiki/1985_Copa_de_la_Liga" },
                        { status: "runner_up", year: "1982-1983", opponentAr: "برشلونة", opponentEn: "Barcelona", score: "3-4 (مجموع)", scorersAr: "مدريد: ديل بوسكي، خوانيتو، ماكيدا | برشلونة: مارادونا (2)، أليسانكو، كراسكو", scorersEn: "RMA: Del Bosque, Juanito, Maqueda | BAR: Maradona (2), Alexanko, Carrasco", linkAr: "", linkEn: "https://en.wikipedia.org/wiki/1983_Copa_de_la_Liga" }
                    ]
                },
                // --- 13. كأس إيفا دوارتي - ملغاة (1 لقب) ---
                { 
                    type: "dom_cup_defunct", nameAr: "كأس إيفا دوارتي (ملغاة)", nameEn: "Copa Eva Duarte", 
                    wonCount: 1, runnerUpCount: 0, count: 1, wikiLinkAr: "https://ar.wikipedia.org/wiki/كأس_إيفا_دوارتي", wikiLinkEn: "https://en.wikipedia.org/wiki/Copa_Eva_Duarte",
                    details: [
                        { status: "won", year: "1947", opponentAr: "فالنسيا", opponentEn: "Valencia", score: "3-1", scorersAr: "ماكالا، مونتيلو، ألونسو", scorersEn: "Macala, Montalvo, Alonso", linkAr: "https://ar.wikipedia.org/wiki/كأس_إيفا_دوارتي", linkEn: "https://en.wikipedia.org/wiki/Copa_Eva_Duarte" }
                        ]
                        },
                // --- 13. كأس العالم للأندية المصغرة - ملغاة (1 لقب) ---
                {
                	type: "friendly_3", nameAr: "كأس العالم للأندية المصغرة (ملغاة)", nameEn: "Small Club World Cup",
                wonCount: 1, runnerUpCount: 0, count: 1, wikiLinkAr: "https://ar.wikipedia.org/wiki/%D9%83%D8%A3%D8%B3_%D8%A7%D9%84%D8%B9%D8%A7%D9%84%D9%85_%D8%A7%D9%84%D9%85%D8%B5%D8%BA%D8%B1%D8%A9_%D9%84%D9%84%D8%A3%D9%86%D8%AF%D9%8A%D8%A9", wikiLinkEn: "https://en.wikipedia.org/wiki/Small_Club_World_Cup",
                details: [
                        { status: "won", year: "1956", opponentAr: "فاسكو دا غاما", opponentEn: "Vasco da Gama", scoreAr: "9 نقاط", scoreEn: "9 Pts", scorersAr: "دي ستيفانو، هكتور ريال (هدافي الفريق بـ4 أهداف)", scorersEn: "Di Stéfano, Héctor Rial (Top Scorer 4 Goals)", link: "https://en.wikipedia.org/wiki/1956_Small_Club_World_Cup" },
                        { status: "won", year: "1952", opponentAr: "بوتافوجو", opponentEn: "Botafogo", scoreAr: "8 نقاط", scoreEn: "8 Pts", scorersAr: "باهينيو (7 أهداف)", scorersEn: "Pahiño (7 Goals)", link: "https://en.wikipedia.org/wiki/1952_Small_Club_World_Cup" },
                    ]
                }
            ]
        },
                "bayern_munich": {
            id: "bayern_munich", country: "Germany", continent: "Europe",
            nameAr: "بايرن ميونخ", nameEn: "Bayern Munich", 
            foundedAr: "1900", foundedEn: "1900", 
            stadiumAr: "أليانز أرينا", stadiumEn: "Allianz Arena", 
            logo: "BayernMunchen.png", // تأكد من اسم الصورة في مجلدك
            trophies: [
                // --- 1. دوري أبطال أوروبا (6 ألقاب، 5 وصافة) ---
                { 
                    type: "cont_1", nameAr: "دوري أبطال أوروبا", nameEn: "UEFA Champions League", 
                    wonCount: 6, runnerUpCount: 5, count: 11, wikiLinkAr: "https://ar.wikipedia.org/wiki/تاريخ_بايرن_ميونخ", wikiLinkEn: "https://en.wikipedia.org/wiki/FC_Bayern_Munich_in_international_football_competitions",
                    details: [
                        { status: "won", year: "2020", opponentAr: "باريس سان جيرمان", opponentEn: "PSG", score: "1-0", scorersAr: "كومان", scorersEn: "Coman", linkAr: "https://ar.wikipedia.org/wiki/نهائي_دوري_أبطال_أوروبا_2020", linkEn: "https://en.wikipedia.org/wiki/2020_UEFA_Champions_League_final" },
                        { status: "won", year: "2013", opponentAr: "بوروسيا دورتموند", opponentEn: "Dortmund", score: "2-1", scorersAr: "ماندجوكيتش، روبن", scorersEn: "Mandžukić, Robben", linkAr: "https://ar.wikipedia.org/wiki/نهائي_دوري_أبطال_أوروبا_2013", linkEn: "https://en.wikipedia.org/wiki/2013_UEFA_Champions_League_final" },
                        { status: "runner_up", year: "2012", opponentAr: "تشيلسي", opponentEn: "Chelsea", score: "1-1 (3-4 ر.ت)", scorersAr: "بايرن: مولر | تشيلسي: دروغبا", scorersEn: "BAY: Müller | CHE: Drogba", linkAr: "https://ar.wikipedia.org/wiki/نهائي_دوري_أبطال_أوروبا_2012", linkEn: "https://en.wikipedia.org/wiki/2012_UEFA_Champions_League_final" },
                        { status: "runner_up", year: "2010", opponentAr: "إنتر ميلان", opponentEn: "Inter Milan", score: "0-2", scorersAr: "إنتر: ميليتو (2)", scorersEn: "INT: Milito (2)", linkAr: "https://ar.wikipedia.org/wiki/نهائي_دوري_أبطال_أوروبا_2010", linkEn: "https://en.wikipedia.org/wiki/2010_UEFA_Champions_League_final" },
                        { status: "won", year: "2001", opponentAr: "فالنسيا", opponentEn: "Valencia", score: "1-1 (5-4 ر.ت)", scorersAr: "إيفنبرغ", scorersEn: "Effenberg", linkAr: "https://ar.wikipedia.org/wiki/نهائي_دوري_أبطال_أوروبا_2001", linkEn: "https://en.wikipedia.org/wiki/2001_UEFA_Champions_League_final" },
                        { status: "runner_up", year: "1999", opponentAr: "مانشستر يونايتد", opponentEn: "Manchester United", score: "1-2", scorersAr: "بايرن: باسلر | مانشستر: شيرنغهام، سولشار", scorersEn: "BAY: Basler | MUN: Sheringham, Solskjær", linkAr: "https://ar.wikipedia.org/wiki/نهائي_دوري_أبطال_أوروبا_1999", linkEn: "https://en.wikipedia.org/wiki/1999_UEFA_Champions_League_final" },
                        { status: "runner_up", year: "1987", opponentAr: "بورتو", opponentEn: "Porto", score: "1-2", scorersAr: "بايرن: كوجل | بورتو: ماجر، جواري", scorersEn: "BAY: Kögl | POR: Madjer, Juary", linkAr: "https://ar.wikipedia.org/wiki/نهائي_كأس_أوروبا_1987", linkEn: "https://en.wikipedia.org/wiki/1987_European_Cup_final" },
                        { status: "runner_up", year: "1982", opponentAr: "أستون فيلا", opponentEn: "Aston Villa", score: "0-1", scorersAr: "أستون فيلا: وايت", scorersEn: "AVL: Withe", linkAr: "https://ar.wikipedia.org/wiki/نهائي_كأس_أوروبا_1982", linkEn: "https://en.wikipedia.org/wiki/1982_European_Cup_final" },
                        { status: "won", year: "1976", opponentAr: "سانت إتيان", opponentEn: "Saint-Étienne", score: "1-0", scorersAr: "روث", scorersEn: "Roth", linkAr: "https://ar.wikipedia.org/wiki/نهائي_كأس_أوروبا_1976", linkEn: "https://en.wikipedia.org/wiki/1976_European_Cup_final" },
                        { status: "won", year: "1975", opponentAr: "ليدز يونايتد", opponentEn: "Leeds United", score: "2-0", scorersAr: "روث، مولر", scorersEn: "Roth, Müller", linkAr: "https://ar.wikipedia.org/wiki/نهائي_كأس_أوروبا_1975", linkEn: "https://en.wikipedia.org/wiki/1975_European_Cup_final" },
                        { status: "won", year: "1974", opponentAr: "أتلتيكو مدريد", opponentEn: "Atlético Madrid", score: "4-0 (إعادة)", scorersAr: "هونيس (2)، مولر (2)", scorersEn: "Hoeneß (2), Müller (2)", linkAr: "https://ar.wikipedia.org/wiki/نهائي_كأس_أوروبا_1974", linkEn: "https://en.wikipedia.org/wiki/1974_European_Cup_final" }
                    ]
                },
                // --- 2. كأس العالم للأندية (2 ألقاب) ---
                { 
                    type: "world", nameAr: "كأس العالم للأندية", nameEn: "FIFA Club World Cup", 
                    wonCount: 2, runnerUpCount: 0, count: 2, wikiLinkAr: "https://ar.wikipedia.org/wiki/كأس_العالم_للأندية", wikiLinkEn: "https://en.wikipedia.org/wiki/FIFA_Club_World_Cup",
                    details: [
                        { status: "won", year: "2020", opponentAr: "تيغريس أونال", opponentEn: "Tigres UANL", score: "1-0", scorersAr: "بافار", scorersEn: "Pavard", linkAr: "https://ar.wikipedia.org/wiki/نهائي_كأس_العالم_للأندية_2020", linkEn: "https://en.wikipedia.org/wiki/2020_FIFA_Club_World_Cup_final" },
                        { status: "won", year: "2013", opponentAr: "الرجاء الرياضي", opponentEn: "Raja Casablanca", score: "2-0", scorersAr: "دانتي، تياغو", scorersEn: "Dante, Thiago", linkAr: "https://ar.wikipedia.org/wiki/نهائي_كأس_العالم_للأندية_2013", linkEn: "https://en.wikipedia.org/wiki/2013_FIFA_Club_World_Cup_final" }
                    ]
                },
                // --- 3. كأس الإنتركونتيننتال - ملغاة (2 ألقاب) ---
                { 
                    type: "world_defunct", nameAr: "كأس الإنتركونتيننتال (ملغاة)", nameEn: "Intercontinental Cup", 
                    wonCount: 2, runnerUpCount: 0, count: 2, wikiLinkAr: "https://ar.wikipedia.org/wiki/كأس_الإنتركونتيننتال", wikiLinkEn: "https://en.wikipedia.org/wiki/Intercontinental_Cup_(football)",
                    details: [
                        { status: "won", year: "2001", opponentAr: "بوكا جونيورز", opponentEn: "Boca Juniors", score: "1-0 (ب.و.إ)", scorersAr: "كوفور", scorersEn: "Kuffour", linkAr: "https://ar.wikipedia.org/wiki/كأس_الإنتركونتيننتال_2001", linkEn: "https://en.wikipedia.org/wiki/2001_Intercontinental_Cup" },
                        { status: "won", year: "1976", opponentAr: "كروزيرو", opponentEn: "Cruzeiro", score: "2-0 (مجموع)", scorersAr: "مولر، كابلمان", scorersEn: "Müller, Kapellmann", linkAr: "https://ar.wikipedia.org/wiki/كأس_الإنتركونتيننتال_1976", linkEn: "https://en.wikipedia.org/wiki/1976_Intercontinental_Cup" }
                    ]
                },
                // --- 4. كأس السوبر الأوروبي (2 ألقاب، 3 وصافة) ---
                { 
                    type: "cont_super", nameAr: "كأس السوبر الأوروبي", nameEn: "UEFA Super Cup", 
                    wonCount: 2, runnerUpCount: 3, count: 5, wikiLinkAr: "https://ar.wikipedia.org/wiki/كأس_السوبر_الأوروبي", wikiLinkEn: "https://en.wikipedia.org/wiki/UEFA_Super_Cup",
                    details: [
                        { status: "won", year: "2020", opponentAr: "إشبيلية", opponentEn: "Sevilla", score: "2-1 (ب.و.إ)", scorersAr: "غوريتزكا، خافي مارتينيز", scorersEn: "Goretzka, Javi Martínez", linkAr: "https://ar.wikipedia.org/wiki/كأس_السوبر_الأوروبي_2020", linkEn: "https://en.wikipedia.org/wiki/2020_UEFA_Super_Cup" },
                        { status: "won", year: "2013", opponentAr: "تشيلسي", opponentEn: "Chelsea", score: "2-2 (5-4 ر.ت)", scorersAr: "ريبيري، خافي مارتينيز", scorersEn: "Ribéry, Javi Martínez", linkAr: "https://ar.wikipedia.org/wiki/كأس_السوبر_الأوروبي_2013", linkEn: "https://en.wikipedia.org/wiki/2013_UEFA_Super_Cup" },
                        { status: "runner_up", year: "2001", opponentAr: "ليفربول", opponentEn: "Liverpool", score: "2-3", scorersAr: "بايرن: ساليهاميدزيتش، يانكر | ليفربول: ريزه، هيسكي، أوين", scorersEn: "BAY: Salihamidžić, Jancker | LIV: Riise, Heskey, Owen", linkAr: "https://ar.wikipedia.org/wiki/كأس_السوبر_الأوروبي_2001", linkEn: "https://en.wikipedia.org/wiki/2001_UEFA_Super_Cup" },
                        { status: "runner_up", year: "1976", opponentAr: "أندرلخت", opponentEn: "Anderlecht", score: "3-5 (مجموع)", scorersAr: "بايرن: مولر (3) | أندرلخت: رينسينبرينك (2)، هان، كوليتش، ديردير", scorersEn: "BAY: Müller (3) | AND: Rensenbrink (2), Haan, Coeck, Derder", linkAr: "", linkEn: "https://en.wikipedia.org/wiki/1976_European_Super_Cup" },
                        { status: "runner_up", year: "1975", opponentAr: "دينامو كييف", opponentEn: "Dynamo Kyiv", score: "0-3 (مجموع)", scorersAr: "دينامو كييف: بلوخين (3)", scorersEn: "DYN: Blokhin (3)", linkAr: "", linkEn: "https://en.wikipedia.org/wiki/1975_European_Super_Cup" }
                    ]
                },
                // --- 5. الدوري الأوروبي / كأس الاتحاد (1 لقب) ---
                { 
                    type: "cont_3", nameAr: "الدوري الأوروبي", nameEn: "UEFA Europa League", 
                    wonCount: 1, runnerUpCount: 0, count: 1, wikiLinkAr: "https://ar.wikipedia.org/wiki/الدوري_الأوروبي", wikiLinkEn: "https://en.wikipedia.org/wiki/UEFA_Europa_League",
                    details: [
                        { status: "won", year: "1995-1996", opponentAr: "بوردو", opponentEn: "Bordeaux", score: "5-1 (مجموع)", scorersAr: "شول (2)، هيلمر، كلينسمان، كوستا", scorersEn: "Scholl (2), Helmer, Klinsmann, Kostadinov", linkAr: "https://ar.wikipedia.org/wiki/نهائي_كأس_الاتحاد_الأوروبي_1996", linkEn: "https://en.wikipedia.org/wiki/1996_UEFA_Cup_final" }
                    ]
                },
                // --- 6. كأس الكؤوس الأوروبية - ملغاة (1 لقب) ---
                { 
                    type: "cont_2", nameAr: "كأس الكؤوس الأوروبية (ملغاة)", nameEn: "UEFA Cup Winners' Cup", 
                    wonCount: 1, runnerUpCount: 0, count: 1, wikiLinkAr: "https://ar.wikipedia.org/wiki/كأس_الكؤوس_الأوروبية", wikiLinkEn: "https://en.wikipedia.org/wiki/UEFA_Cup_Winners'_Cup",
                    details: [
                        { status: "won", year: "1966-1967", opponentAr: "رينجرز", opponentEn: "Rangers", score: "1-0 (ب.و.إ)", scorersAr: "روث", scorersEn: "Roth", linkAr: "https://ar.wikipedia.org/wiki/نهائي_كأس_الكؤوس_الأوروبية_1967", linkEn: "https://en.wikipedia.org/wiki/1967_European_Cup_Winners'_Cup_final" }
                    ]
                },
                // --- 1. الدوري الألماني (33 لقب، 10 وصافة) ---
                { 
                    type: "dom_league", nameAr: "الدوري الألماني", nameEn: "Bundesliga", 
                    wonCount: 33, runnerUpCount: 10, count: 43, wikiLinkAr: "https://ar.wikipedia.org/wiki/الدوري_الألماني", wikiLinkEn: "https://en.wikipedia.org/wiki/Bundesliga",
                    details: [
                        // الألقاب (Won)
                        { status: "won", year: "2022-23", opponentAr: "دورتموند (وصيف)", opponentEn: "Dortmund", score: "71 pt" },
                        { status: "won", year: "2021-22", opponentAr: "دورتموند (وصيف)", opponentEn: "Dortmund", score: "77 pt" },
                        { status: "won", year: "2020-21", opponentAr: "لايبزيغ (وصيف)", opponentEn: "Leipzig", score: "78 pt" },
                        { status: "won", year: "2019-20", opponentAr: "دورتموند (وصيف)", opponentEn: "Dortmund", score: "82 pt" },
                        { status: "won", year: "2018-19", opponentAr: "دورتموند (وصيف)", opponentEn: "Dortmund", score: "78 pt" },
                        { status: "won", year: "2017-18", opponentAr: "شالكه (وصيف)", opponentEn: "Schalke", score: "84 pt" },
                        { status: "won", year: "2016-17", opponentAr: "لايبزيغ (وصيف)", opponentEn: "Leipzig", score: "82 pt" },
                        { status: "won", year: "2015-16", opponentAr: "دورتموند (وصيف)", opponentEn: "Dortmund", score: "88 pt" },
                        { status: "won", year: "2014-15", opponentAr: "فولفسبورغ (وصيف)", opponentEn: "Wolfsburg", score: "79 pt" },
                        { status: "won", year: "2013-14", opponentAr: "دورتموند (وصيف)", opponentEn: "Dortmund", score: "90 pt" },
                        { status: "won", year: "2012-13", opponentAr: "دورتموند (وصيف)", opponentEn: "Dortmund", score: "91 pt" },
                        { status: "won", year: "2009-10", opponentAr: "شالكه (وصيف)", opponentEn: "Schalke", score: "70 pt" },
                        { status: "won", year: "2007-08", opponentAr: "فيردر بريمن (وصيف)", opponentEn: "Bremen", score: "76 pt" },
                        { status: "won", year: "2005-06", opponentAr: "فيردر بريمن (وصيف)", opponentEn: "Bremen", score: "75 pt" },
                        { status: "won", year: "2004-05", opponentAr: "شالكه (وصيف)", opponentEn: "Schalke", score: "77 pt" },
                        { status: "won", year: "2002-03", opponentAr: "شتوتغارت (وصيف)", opponentEn: "Stuttgart", score: "75 pt" },
                        { status: "won", year: "2000-01", opponentAr: "شالكه (وصيف)", opponentEn: "Schalke", score: "63 pt" },
                        { status: "won", year: "1999-00", opponentAr: "ليفركوزن (وصيف)", opponentEn: "Leverkusen", score: "73 pt" },
                        { status: "won", year: "1998-99", opponentAr: "ليفركوزن (وصيف)", opponentEn: "Leverkusen", score: "78 pt" },
                        { status: "won", year: "1996-97", opponentAr: "ليفركوزن (وصيف)", opponentEn: "Leverkusen", score: "71 pt" },
                        { status: "won", year: "1993-94", opponentAr: "كايزرسلاوترن (وصيف)", opponentEn: "Kaiserslautern", score: "44 pt" },
                        { status: "won", year: "1989-90", opponentAr: "كولن (وصيف)", opponentEn: "Köln", score: "49 pt" },
                        { status: "won", year: "1988-89", opponentAr: "كولن (وصيف)", opponentEn: "Köln", score: "50 pt" },
                        { status: "won", year: "1986-87", opponentAr: "هامبورغ (وصيف)", opponentEn: "Hamburg", score: "53 pt" },
                        { status: "won", year: "1985-86", opponentAr: "فيردر بريمن (وصيف)", opponentEn: "Bremen", score: "49 pt" },
                        { status: "won", year: "1984-85", opponentAr: "فيردر بريمن (وصيف)", opponentEn: "Bremen", score: "50 pt" },
                        { status: "won", year: "1980-81", opponentAr: "هامبورغ (وصيف)", opponentEn: "Hamburg", score: "53 pt" },
                        { status: "won", year: "1979-80", opponentAr: "هامبورغ (وصيف)", opponentEn: "Hamburg", score: "50 pt" },
                        { status: "won", year: "1973-74", opponentAr: "بوروسيا مونشنغلادباخ", opponentEn: "M'gladbach", score: "49 pt" },
                        { status: "won", year: "1972-73", opponentAr: "كولن (وصيف)", opponentEn: "Köln", score: "54 pt" },
                        { status: "won", year: "1971-72", opponentAr: "شالكه (وصيف)", opponentEn: "Schalke", score: "55 pt" },
                        { status: "won", year: "1968-69", opponentAr: "أليمانيا آخن (وصيف)", opponentEn: "Aachen", score: "46 pt" },
                        { status: "won", year: "1931-32", opponentAr: "آينتراخت فرانكفورت", opponentEn: "Frankfurt", score: "2-0" },
                        // الوصافة (Runner-up)
                        { status: "runner_up", year: "2011-12", opponentAr: "بوروسيا دورتموند", opponentEn: "Dortmund" },
                        { status: "runner_up", year: "2008-09", opponentAr: "فولفسبورغ", opponentEn: "Wolfsburg" },
                        { status: "runner_up", year: "2003-04", opponentAr: "فيردر بريمن", opponentEn: "Bremen" },
                        { status: "runner_up", year: "1997-98", opponentAr: "كايزرسلاوترن", opponentEn: "Kaiserslautern" },
                        { status: "runner_up", year: "1995-96", opponentAr: "بوروسيا دورتموند", opponentEn: "Dortmund" },
                        { status: "runner_up", year: "1992-93", opponentAr: "فيردر بريمن", opponentEn: "Bremen" },
                        { status: "runner_up", year: "1990-91", opponentAr: "كايزرسلاوترن", opponentEn: "Kaiserslautern" },
                        { status: "runner_up", year: "1987-88", opponentAr: "فيردر بريمن", opponentEn: "Bremen" },
                        { status: "runner_up", year: "1970-71", opponentAr: "بوروسيا مونشنغلادباخ", opponentEn: "M'gladbach" },
                        { status: "runner_up", year: "1969-70", opponentAr: "بوروسيا مونشنغلادباخ", opponentEn: "M'gladbach" }
                    ]
                },
                // --- 2. كأس ألمانيا (20 لقب، 4 وصافة) ---
                { 
                    type: "dom_cup", nameAr: "كأس ألمانيا", nameEn: "DFB-Pokal", 
                    wonCount: 20, runnerUpCount: 4, count: 24, wikiLinkAr: "https://ar.wikipedia.org/wiki/كأس_ألمانيا", wikiLinkEn: "https://en.wikipedia.org/wiki/DFB-Pokal",
                    details: [
                        { status: "won", year: "2020", opponentAr: "باير ليفركوزن", opponentEn: "Leverkusen", score: "4-2" },
                        { status: "won", year: "2019", opponentAr: "لايبزيغ", opponentEn: "Leipzig", score: "3-0" },
                        { status: "won", year: "2016", opponentAr: "بوروسيا دورتموند", opponentEn: "Dortmund", score: "0-0 (4-3 ر.ت)" },
                        { status: "won", year: "2014", opponentAr: "بوروسيا دورتموند", opponentEn: "Dortmund", score: "2-0" },
                        { status: "won", year: "2013", opponentAr: "شتوتغارت", opponentEn: "Stuttgart", score: "3-2" },
                        { status: "won", year: "2010", opponentAr: "فيردر بريمن", opponentEn: "Bremen", score: "4-0" },
                        { status: "won", year: "2008", opponentAr: "بوروسيا دورتموند", opponentEn: "Dortmund", score: "2-1" },
                        { status: "won", year: "2006", opponentAr: "آينتراخت فرانكفورت", opponentEn: "Frankfurt", score: "1-0" },
                        { status: "won", year: "2005", opponentAr: "شالكه", opponentEn: "Schalke", score: "2-1" },
                        { status: "won", year: "2003", opponentAr: "كايزرسلاوترن", opponentEn: "Kaiserslautern", score: "3-1" },
                        { status: "won", year: "2000", opponentAr: "فيردر بريمن", opponentEn: "Bremen", score: "3-0" },
                        { status: "won", year: "1998", opponentAr: "دويسبورغ", opponentEn: "Duisburg", score: "2-1" },
                        { status: "won", year: "1986", opponentAr: "شتوتغارت", opponentEn: "Stuttgart", score: "5-2" },
                        { status: "won", year: "1984", opponentAr: "بوروسيا مونشنغلادباخ", opponentEn: "M'gladbach", score: "1-1 (7-6 ر.ت)" },
                        { status: "won", year: "1982", opponentAr: "نورنبرغ", opponentEn: "Nürnberg", score: "4-2" },
                        { status: "won", year: "1971", opponentAr: "كولن", opponentEn: "Köln", score: "2-1" },
                        { status: "won", year: "1969", opponentAr: "شالكه", opponentEn: "Schalke", score: "2-1" },
                        { status: "won", year: "1967", opponentAr: "هامبورغ", opponentEn: "Hamburg", score: "4-0" },
                        { status: "won", year: "1966", opponentAr: "دويسبورغ", opponentEn: "Duisburg", score: "4-2" },
                        { status: "won", year: "1957", opponentAr: "فورتونا دوسلدورف", opponentEn: "Düsseldorf", score: "1-0" },
                        { status: "runner_up", year: "2018", opponentAr: "آينتراخت فرانكفورت", opponentEn: "Frankfurt", score: "1-3" },
                        { status: "runner_up", year: "2012", opponentAr: "بوروسيا دورتموند", opponentEn: "Dortmund", score: "2-5" },
                        { status: "runner_up", year: "1999", opponentAr: "فيردر بريمن", opponentEn: "Bremen", score: "1-1 (5-6 ر.ت)" },
                        { status: "runner_up", year: "1985", opponentAr: "أوردينغن 05", opponentEn: "Uerdingen", score: "1-2" }
                    ]
                },
                // --- 3. كأس السوبر الألماني (10 ألقاب، 7 وصافة) ---
                { 
                    type: "dom_super", nameAr: "كأس السوبر الألماني", nameEn: "DFL-Supercup", 
                    wonCount: 10, runnerUpCount: 7, count: 17, wikiLinkAr: "https://ar.wikipedia.org/wiki/كأس_السوبر_الألماني", wikiLinkEn: "https://en.wikipedia.org/wiki/DFL-Supercup",
                    details: [
                        { status: "won", year: "2022", opponentAr: "لايبزيغ", opponentEn: "Leipzig", score: "5-3" },
                        { status: "won", year: "2021", opponentAr: "دورتموند", opponentEn: "Dortmund", score: "3-1" },
                        { status: "won", year: "2020", opponentAr: "دورتموند", opponentEn: "Dortmund", score: "3-2" },
                        { status: "won", year: "2018", opponentAr: "فرانكفورت", opponentEn: "Frankfurt", score: "5-0" },
                        { status: "won", year: "2017", opponentAr: "دورتموند", opponentEn: "Dortmund", score: "2-2 (5-4 ر.ت)" },
                        { status: "won", year: "2016", opponentAr: "دورتموند", opponentEn: "Dortmund", score: "2-0" },
                        { status: "won", year: "2012", opponentAr: "دورتموند", opponentEn: "Dortmund", score: "2-1" },
                        { status: "won", year: "2010", opponentAr: "شالكه", opponentEn: "Schalke", score: "2-0" },
                        { status: "won", year: "1990", opponentAr: "كايزرسلاوترن", opponentEn: "Kaiserslautern", score: "4-1" },
                        { status: "won", year: "1987", opponentAr: "هامبورغ", opponentEn: "Hamburg", score: "2-1" },
                        { status: "runner_up", year: "2023", opponentAr: "لايبزيغ", opponentEn: "Leipzig", score: "0-3" },
                        { status: "runner_up", year: "2019", opponentAr: "دورتموند", opponentEn: "Dortmund", score: "0-2" },
                        { status: "runner_up", year: "2015", opponentAr: "فولفسبورغ", opponentEn: "Wolfsburg", score: "1-1 (4-5 ر.ت)" },
                        { status: "runner_up", year: "2014", opponentAr: "دورتموند", opponentEn: "Dortmund", score: "0-2" },
                        { status: "runner_up", year: "2013", opponentAr: "دورتموند", opponentEn: "Dortmund", score: "2-4" },
                        { status: "runner_up", year: "1994", opponentAr: "فيردر بريمن", opponentEn: "Bremen", score: "1-3" },
                        { status: "runner_up", year: "1989", opponentAr: "بوروسيا دورتموند", opponentEn: "Dortmund", score: "3-4" }
                    ]
                },
                // --- 4. كأس الرابطة الألمانية (6 ألقاب، 1 وصافة) ---
                { 
                    type: "dom_league_cup", nameAr: "كأس الرابطة الألمانية (ملغاة)", nameEn: "DFB-Ligapokal", 
                    wonCount: 6, runnerUpCount: 1, count: 7, wikiLinkAr: "https://ar.wikipedia.org/wiki/كأس_الرابطة_الألمانية", wikiLinkEn: "https://en.wikipedia.org/wiki/DFL-Ligapokal",
                    details: [
                        { status: "won", year: "2007", opponentAr: "شالكه", opponentEn: "Schalke", score: "1-0" },
                        { status: "won", year: "2004", opponentAr: "فيردر بريمن", opponentEn: "Bremen", score: "3-2" },
                        { status: "won", year: "2000", opponentAr: "هرتا برلين", opponentEn: "Hertha Berlin", score: "5-1" },
                        { status: "won", year: "1999", opponentAr: "فيردر بريمن", opponentEn: "Bremen", score: "2-1" },
                        { status: "won", year: "1998", opponentAr: "شتوتغارت", opponentEn: "Stuttgart", score: "4-0" },
                        { status: "won", year: "1997", opponentAr: "شتوتغارت", opponentEn: "Stuttgart", score: "2-0" },
                        { status: "runner_up", year: "2006", opponentAr: "فيردر بريمن", opponentEn: "Bremen", score: "0-2" }
                    ]
                },
                                // --- 5. البطولات الودية (أمثلة) ---
                { 
                    type: "friendly_4", nameAr: "كأس أودي (ودية)", nameEn: "Audi Cup", 
                    wonCount: 3, runnerUpCount: 2, count: 5, wikiLinkAr: "https://ar.wikipedia.org/wiki/كأس_أودي", wikiLinkEn: "https://en.wikipedia.org/wiki/Audi_Cup",
                    details: [
                        { status: "won", year: "2015", opponentAr: "ريال مدريد", opponentEn: "Real Madrid", score: "1-0", scorersAr: "ليفاندوفسكي", scorersEn: "Lewandowski", linkAr: "", linkEn: "https://en.wikipedia.org/wiki/2015_Audi_Cup" },
                        { status: "won", year: "2013", opponentAr: "مانشستر سيتي", opponentEn: "Manchester City", score: "2-1", scorersAr: "مولر، ماندجوكيتش", scorersEn: "Müller, Mandžukić", linkAr: "", linkEn: "https://en.wikipedia.org/wiki/2013_Audi_Cup" },
                        { status: "runner_up", year: "2019", opponentAr: "توتنهام", opponentEn: "Tottenham", score: "2-2 (5-6 ر.ت)", scorersAr: "بايرن: آرب، ديفيز", scorersEn: "Arp, Davies", linkAr: "", linkEn: "https://en.wikipedia.org/wiki/2019_Audi_Cup" },
                    ]
                }
            ]
        },
                "atletico_madrid": {
            id: "atletico_madrid", country: "Spain", continent: "Europe",
            nameAr: "أتلتيكو مدريد", nameEn: "Atletico de Madrid", 
            founded: "1903", stadiumAr: "ميتروبوليتانو", stadiumEn: "Metropolitano Stadium", logo: "AtleticoMadrid.png",
                        trophies: [
                        { 
                    type: "dom_league", nameAr: "الدوري الإسباني", nameEn: "La Liga", 
                    wonCount: 28, runnerUpCount: 28, count: 56, wikiLinkAr: "https://ar.wikipedia.org/wiki/الدوري_الإسباني", wikiLinkEn: "https://en.wikipedia.org/wiki/La_Liga",
                    details: [
                        { status: "won", year: "2020-2021", opponentAr: "ريال مدريد", opponentEn: "Real Madrid", scoreAr: "86 نقطة", scoreEn: "86 Pts", scorersAr: "ليفاندوفسكي (هداف الفريق)", scorersEn: "Lewandowski (Top Scorer)", linkAr: "https://ar.wikipedia.org/wiki/الدوري_الإسباني_2024–25", linkEn: "https://en.wikipedia.org/wiki/2024–25_La_Liga"},
                        { status: "won", year: "2013-2014", opponentAr: "برشلونة", opponentEn: "Barcelona", scoreAr: "90 نقطة", scoreEn: "90 Pts", scorersAr: "ليفاندوفسكي (هداف الفريق)", scorersEn: "Lewandowski (Top Scorer)", linkAr: "https://ar.wikipedia.org/wiki/الدوري_الإسباني_2023-24", linkEn: "https://en.wikipedia.org/wiki/2023–24_La_Liga"},
                        ]
                        }
                        ]
                        }
    },
    matches: [],
    // ==========================================
    // قسم البطولات المستقلة الجديد
    // ==========================================
    tournaments: {
        "champions_league": {
            id: "champions_league",
            nameAr: "دوري أبطال أوروبا", 
            nameEn: "UEFA Champions League",
            logo: "UCL.png", // ستحتاج لإضافة صورة لشعار البطولة في مجلد الصور
            founded: "1955", 
            regionAr: "أوروبا (يويفا)", 
            regionEn: "Europe (UEFA)",
            currentChampionAr: "ريال مدريد (2024)", 
            currentChampionEn: "Real Madrid (2024)",
            mostSuccessfulAr: "ريال مدريد (15 لقب)", 
            mostSuccessfulEn: "Real Madrid (15 titles)",
            topScorerAr: "كريستيانو رونالدو (140 هدف)", 
            topScorerEn: "Cristiano Ronaldo (140 goals)",
            wikiLinkAr: "https://ar.wikipedia.org/wiki/دوري_أبطال_أوروبا",
            wikiLinkEn: "https://en.wikipedia.org/wiki/UEFA_Champions_League",
            // سجل الأبطال التاريخي للبطولة
            history: [
                { year: "2024-2025", winnerId: "PSG", winnerAr: "باريس سان جيرمان", winnerEn: "Paris Saint-Germain", runnerUpId: "inter", runnerUpAr: "إنتر ميلان", runnerUpEn: "Inter Milan", score: "5-0", linkAr: "https://ar.wikipedia.org/wiki/نهائي_دوري_أبطال_أوروبا_2025", linkEn: "https://en.wikipedia.org/wiki/2025_UEFA_Champions_League_final" },
                { year: "2023-2024", winnerId: "real_madrid", winnerAr: "ريال مدريد", winnerEn: "Real Madrid", runnerUpId: "dortmund", runnerUpAr: "بوروسيا دورتموند", runnerUpEn: "Dortmund", score: "2-0", linkAr: "https://ar.wikipedia.org/wiki/نهائي_دوري_أبطال_أوروبا_2024", linkEn: "https://en.wikipedia.org/wiki/2024_UEFA_Champions_League_final" },
                { year: "2022-2023", winnerId: "man_city", winnerAr: "مانشستر سيتي", winnerEn: "Man City", runnerUpId: "inter", runnerUpAr: "إنتر ميلان", runnerUpEn: "Inter Milan", score: "1-0", linkAr: "https://ar.wikipedia.org/wiki/نهائي_دوري_أبطال_أوروبا_2023", linkEn: "https://en.wikipedia.org/wiki/2023_UEFA_Champions_League_final" },
                { year: "2021-2022", winnerId: "real_madrid", winnerAr: "ريال مدريد", winnerEn: "Real Madrid", runnerUpId: "liverpool", runnerUpAr: "ليفربول", runnerUpEn: "Liverpool", score: "1-0", linkAr: "https://ar.wikipedia.org/wiki/نهائي_دوري_أبطال_أوروبا_2022", linkEn: "https://en.wikipedia.org/wiki/2022_UEFA_Champions_League_final" },
                { year: "2020-2021", winnerId: "chelsea", winnerAr: "تشيلسي", winnerEn: "Chelsea", runnerUpId: "man_city", runnerUpAr: "مانشستر سيتي", runnerUpEn: "Man City", score: "1-0", linkAr: "https://ar.wikipedia.org/wiki/نهائي_دوري_أبطال_أوروبا_2021", linkEn: "https://en.wikipedia.org/wiki/2021_UEFA_Champions_League_final" },
                { year: "2019-2020", winnerId: "bayern_munich", winnerAr: "بايرن ميونخ", winnerEn: "Bayern Munich", runnerUpId: "psg", runnerUpAr: "باريس سان جيرمان", runnerUpEn: "PSG", score: "1-0", linkAr: "https://ar.wikipedia.org/wiki/نهائي_دوري_أبطال_أوروبا_2020", linkEn: "https://en.wikipedia.org/wiki/2020_UEFA_Champions_League_final" }
            ]            
        }
    }
}; // هذه هي نهاية ملف database.js
