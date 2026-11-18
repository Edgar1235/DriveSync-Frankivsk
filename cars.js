// Мультивалютний словник інтерфейсу та автомобілів
const translations = {
    uk: {
        title: "🚗 Автопарк ТСЦ МВС № 2641",
        subtitle: "Екзаменаційні автомобілі та лайфхаки (BeamNG / Cyberpunk Style)",
        changeBg: "Змінити фон",
        navMap: "🗺️ Карта (Малювання)",
        navRoutes: "📍 Маршрути МВС та Відео",
        navList: "📋 Список і Чек-лист",
        navStreets: "📋 Вулиці маршрутів",
        navCars: "🚗 Авто МВС",
        selectCarHeader: "Виберіть екзаменаційне авто",
        lblGearbox: "Коробка:",
        lblClutch: "Педаль зчеплення:",
        lblSteering: "Гідропідсилювач:",
        lblBrakes: "Гальма:",
        tipsHeader: "💡 Лайфхаки для здачі на цій тачці:",
        badges: {
            'badge-mt': "Механіка (МКПП-6)",
            'badge-at': "Автомат (Варіатор)",
            'badge-duster': "Кросовер (МКПП)",
            'badge-juke': "Компакт-кросовер",
            'badge-logan': "Седан (МКПП)",
            'badge-polo': "Німецький хетчбек",
            'badge-sonata': "Комфорт-седан"
        }
    },
    en: {
        title: "🚗 RSC MIA Fleet No. 2641",
        subtitle: "Exam vehicles and life hacks (BeamNG / Cyberpunk Style)",
        changeBg: "Change BG",
        navMap: "🗺️ Map (Drawing)",
        navRoutes: "📍 MIA Routes & Video",
        navList: "📋 List & Checklist",
        navStreets: "📋 Route Streets",
        navCars: "🚗 MIA Cars",
        selectCarHeader: "Select exam vehicle",
        lblGearbox: "Gearbox:",
        lblClutch: "Clutch pedal:",
        lblSteering: "Power steering:",
        lblBrakes: "Brakes:",
        tipsHeader: "💡 Life hacks for passing on this ride:",
        badges: {
            'badge-mt': "Manual (6-speed)",
            'badge-at': "Automatic (CVT)",
            'badge-duster': "Crossover (Manual)",
            'badge-juke': "Compact Crossover",
            'badge-logan': "Sedan (Manual)",
            'badge-polo': "German Hatchback",
            'badge-sonata': "Comfort Sedan"
        }
    },
    pl: {
        title: "🚗 Flota MSC MSW nr 2641",
        subtitle: "Pojazdy egzaminacyjne i lifehacki (BeamNG / Cyberpunk Style)",
        changeBg: "Zmień tło",
        navMap: "🗺️ Mapa (Rysowanie)",
        navRoutes: "📍 Trasy MSW i Wideo",
        navList: "📋 Lista i Checklista",
        navStreets: "📋 Ulice tras",
        navCars: "🚗 Samochody MSW",
        selectCarHeader: "Wybierz pojazd egzaminacyjny",
        lblGearbox: "Skrzynia biegów:",
        lblClutch: "Pedał sprzęgła:",
        lblSteering: "Wspomaganie kierownicy:",
        lblBrakes: "Hamulce:",
        tipsHeader: "💡 Lifehacki do zdania na tym aucie:",
        badges: {
            'badge-mt': "Manualna (6-biegowa)",
            'badge-at': "Automat (CVT)",
            'badge-duster': "Crossover (Manual)",
            'badge-juke': "Kompaktowy crossover",
            'badge-logan': "Sedan (Manual)",
            'badge-polo': "Niemiecki hatchback",
            'badge-sonata': "Sedan komfortowy"
        }
    },
    de: {
        title: "🚗 Fuhrpark DSC MWD Nr. 2641",
        subtitle: "Prüfungsfahrzeuge und Lifehacks (BeamNG / Cyberpunk Style)",
        changeBg: "Hintergrund ändern",
        navMap: "🗺️ Karte (Zeichnen)",
        navRoutes: "📍 MWD-Routen & Video",
        navList: "📋 Liste & Checkliste",
        navStreets: "📋 Routenstraßen",
        navCars: "🚗 MWD-Autos",
        selectCarHeader: "Prüfungsfahrzeug auswählen",
        lblGearbox: "Getriebe:",
        lblClutch: "Kupplungspedal:",
        lblSteering: "Servolenkung:",
        lblBrakes: "Bremsen:",
        tipsHeader: "💡 Lifehacks für das Bestehen mit diesem Auto:",
        badges: {
            'badge-mt': "Schaltung (6-Gang)",
            'badge-at': "Automatik (CVT)",
            'badge-duster': "Crossover (Schaltung)",
            'badge-juke': "Kompakt-SUV",
            'badge-logan': "Limousine (Schaltung)",
            'badge-polo': "Deutscher Schrägheck",
            'badge-sonata': "Komfort-Limousine"
        }
    },
    zh: {
        title: "🚗 内务部服务中心车队 第2641号",
        subtitle: "考试车辆与技巧 (BeamNG / 赛博朋克风格)",
        changeBg: "更改背景",
        navMap: "🗺️ 地图 (绘制)",
        navRoutes: "📍 内务部路线与视频",
        navList: "📋 列表与清单",
        navStreets: "📋 路线街道",
        navCars: "🚗 考试车辆",
        selectCarHeader: "选择考试车辆",
        lblGearbox: "变速箱:",
        lblClutch: "离合器踏板:",
        lblSteering: "助力转向:",
        lblBrakes: "刹车:",
        tipsHeader: "💡 开这辆车通过考试的技巧:",
        badges: {
            'badge-mt': "手动挡 (6速)",
            'badge-at': "自动挡 (CVT)",
            'badge-duster': "跨界车 (手动)",
            'badge-juke': "紧凑型跨界车",
            'badge-logan': "三厢车 (手动)",
            'badge-polo': "德国两厢车",
            'badge-sonata': "舒适轿车"
        }
    },
    hu: {
        title: "🚗 Belügyminisztérium Szolgáltató Központ Flotta 2641",
        subtitle: "Vizsgajárművek és tippek (BeamNG / Cyberpunk Style)",
        changeBg: "Háttér módosítása",
        navMap: "🗺️ Térkép (Rajzolás)",
        navRoutes: "📍 Útvonalak és Videó",
        navList: "📋 Lista és Ellenőrzőlista",
        navStreets: "📋 Útvonalak utcái",
        navCars: "🚗 Vizsgaautók",
        selectCarHeader: "Válasszon vizsgajárművet",
        lblGearbox: "Váltó:",
        lblClutch: "Kuplungpedál:",
        lblSteering: "Szervokormány:",
        lblBrakes: "Fékek:",
        tipsHeader: "💡 Tippek a vizsgához ezzel az autóval:",
        badges: {
            'badge-mt': "Mechanikus (6 fokozatú)",
            'badge-at': "Automata (CVT)",
            'badge-duster': "Crossover (Mechanikus)",
            'badge-juke': "Kompakt crossover",
            'badge-logan': "Sedan (Mechanikus)",
            'badge-polo': "Német ferdehátú",
            'badge-sonata': "Komfort sedan"
        }
    },
    ro: {
        title: "🚗 Flota TSC MAI Nr. 2641",
        subtitle: "Vehicule de examen și trucuri (BeamNG / Cyberpunk Style)",
        changeBg: "Schimbă fundalul",
        navMap: "🗺️ Hartă (Desenare)",
        navRoutes: "📍 Rute MAI și Video",
        navList: "📋 Listă și Checklist",
        navStreets: "📋 Străzile rutelor",
        navCars: "🚗 Mașini MAI",
        selectCarHeader: "Selectați vehiculul de examen",
        lblGearbox: "Cutie de viteze:",
        lblClutch: "Pedala de ambreiaj:",
        lblSteering: "Servodirecție:",
        lblBrakes: "Frâne:",
        tipsHeader: "💡 Trucuri pentru a promova cu această mașină:",
        badges: {
            'badge-mt': "Manuală (6 trepte)",
            'badge-at': "Automată (CVT)",
            'badge-duster': "Crossover (Manual)",
            'badge-juke': "Crossover compact",
            'badge-logan': "Sedan (Manual)",
            'badge-polo': "Hatchback german",
            'badge-sonata': "Sedan de confort"
        }
    }
};

// Дані машин та їх переклади
const vehiclesData = {
    'corolla-mt': {
        name: {
            uk: 'Toyota Corolla (МКПП-6)',
            en: 'Toyota Corolla (Manual 6-speed)',
            pl: 'Toyota Corolla (Manualna 6-biegowa)',
            de: 'Toyota Corolla (Schaltung 6-Gang)',
            zh: '丰田卡罗拉 (手动6速)',
            hu: 'Toyota Corolla (6 fokozatú manuális)',
            ro: 'Toyota Corolla (Manuală 6 trepte)'
        },
        tagline: {
            uk: '«Народний воїн» сервісного центру',
            en: '«People’s warrior» of the service center',
            pl: '„Ludowy wojownik” centrum serwisowego',
            de: '„Volkskrieger“ des Servicezentrums',
            zh: '服务中心的“平民战士”',
            hu: 'A szervizközpont „népi harcosa”',
            ro: '„Războinicul poporului” din centrul de servicii'
        },
        image: 'img/toyota_mt.jpg',
        specs: {
            gearbox: { uk: 'Механіка, 6-ступка', en: 'Manual, 6-speed', pl: 'Manualna, 6-biegowa', de: 'Schaltung, 6-Gang', zh: '手动，6速', hu: 'Manuális, 6 fokozatú', ro: 'Manuală, 6 trepte' },
            clutch: { uk: 'Середня (характерна точка схоплення)', en: 'Medium (characteristic bite point)', pl: 'Średnie (charakterystyczny punkt chwytu)', de: 'Mittel (charakteristischer Schleifpunkt)', zh: '适中 (特征结合点)', hu: 'Közepes (jellegzetes fogáspont)', ro: 'Medie (punct caracteristic de cuplare)' },
            steering: { uk: 'Електричний (дуже легкий рух кермом)', en: 'Electric (very light steering)', pl: 'Elektryczne (bardzo lekki ruch kierownicą)', de: 'Elektrisch (sehr leichtgängige Lenkung)', zh: '电动 (转向非常轻)', hu: 'Elektromos (nagyon könnyű kormánymozgatás)', ro: 'Electrică (direcție foarte ușoară)' },
            brakes: { uk: 'Чутливі з першого міліметра', en: 'Sensitive from the first millimeter', pl: 'Czułe od pierwszego milimetra', de: 'Empfindlich ab dem ersten Millimeter', zh: '一毫米起即灵敏', hu: 'Az első millimétertől érzékeny', ro: 'Sensibile din primul milimetru' }
        },
        tips: {
            uk: [
                'На підйомах (особливо біля МВС) зчеплення хапає ближче до середини — не кидай різко, бо заглухнеш.',
                'Оглядовість через дзеркала чудова, але передні стійки широкі — уважно дивись на пішохідних переходах!',
                'Задня вмикається через кільце-фіксатор (не забудь потягнути вгору).'
            ],
            en: [
                'On inclines (especially near MIA), the clutch bites closer to the middle — do not release it abruptly or you will stall.',
                'Visibility through the mirrors is great, but the front pillars are wide — look carefully at pedestrian crossings!',
                'Reverse gear is engaged via a locking ring (don’t forget to pull it up).'
            ],
            pl: [
                'Na wzniesieniach (zwłaszcza koło MSW) sprzęgło łapie bliżej środka — nie puszczaj gwałtownie, bo zgaśniesz.',
                'Widoczność w lusterkach jest świetna, ale przednie słupki są szerokie — uważaj na przejściach dla pieszych!',
                'Bieg wsteczny włącza się przez pierścień blokujący (nie zapomnij pociągnąć do góry).'
            ],
            de: [
                'An Steigungen (besonders in der Nähe des MWD) greift die Kupplung weiter in der Mitte — nicht abrupt loslassen, sonst stirbt der Motor ab.',
                'Die Sicht durch die Spiegel ist großartig, aber die A-Säulen sind breit — achten Sie genau auf Fußgängerüberwege!',
                'Der Rückwärtsgang wird über einen Sperrring eingelegt (nicht vergessen nach oben zu ziehen).'
            ],
            zh: [
                '在坡道上（特别是内务部附近），离合器结合点偏中 — 切勿猛抬，否则容易熄火。',
                '后视镜视野很好，但前A柱较宽 — 在人行横道上请仔细观察！',
                '倒档通过锁定环挂入（别忘了向上提起）。'
            ],
            hu: [
                'Emelkedőkön (különösen a BM közelében) a kuplung inkább középen fog — ne engedd fel hirtelen, mert lefulladsz.',
                'A kilátás a tükörből nagyszerű, de az első oszlopok szélesek — figyelj oda a gyalogos-átkelőhelyeken!',
                'A hátramenetet rögzítőgyűrűn keresztül kell kapcsolni (ne felejtsd el felfelé húzni).'
            ],
            ro: [
                'În pante (mai ales lângă MAI), ambreiajul prinde mai pe la mijloc — nu-l elibera brusc, altfel se va opri motorul.',
                'Vizibilitatea prin oglinzi este excelentă, dar stâlpii față sunt largi — fiți atenți la trecerile de pieton!',
                'Marșarierul se cuplează printr-un inel de blocare (nu uitați să-l trageți în sus).'
            ]
        }
    },
    'corolla-at': {
        name: {
            uk: 'Toyota Corolla (Автомат / Варіатор)',
            en: 'Toyota Corolla (Automatic / CVT)',
            pl: 'Toyota Corolla (Automat / CVT)',
            de: 'Toyota Corolla (Automatik / CVT)',
            zh: '丰田卡罗拉 (自动 / CVT)',
            hu: 'Toyota Corolla (Automata / CVT)',
            ro: 'Toyota Corolla (Automată / CVT)'
        },
        tagline: {
            uk: 'Спокій і комфорт для категорії В',
            en: 'Peace and comfort for category B',
            pl: 'Spokój i komfort dla kategorii B',
            de: 'Ruhe und Komfort für die Klasse B',
            zh: 'B类驾照的平静与舒适',
            hu: 'Nyugalom és kérelem a B kategóriához',
            ro: 'Liniște și confort pentru categoria B'
        },
        image: 'img/toyota_at.jpg',
        specs: {
            gearbox: { uk: 'Автомат (Варіатор)', en: 'Automatic (CVT)', pl: 'Automat (CVT)', de: 'Automatik (CVT)', zh: '自动 (CVT)', hu: 'Automata (CVT)', ro: 'Automată (CVT)' },
            clutch: { uk: 'Відсутня (тільки газ і гальма)', en: 'None (gas and brakes only)', pl: 'Brak (tylko gaz i hamulec)', de: 'Keine (nur Gas und Bremse)', zh: '无 (仅油门和刹车)', hu: 'Nincs (csak gáz és fék)', ro: 'Lipsește (doar accelerație și frână)' },
            steering: { uk: 'Електричний (мʼяке керування)', en: 'Electric (smooth steering)', pl: 'Elektryczne (miękkie sterowanie)', de: 'Elektrisch (sanfte Lenkung)', zh: '电动 (转向柔顺)', hu: 'Elektromos (finom vezérlés)', ro: 'Electrică (direcție lină)' },
            brakes: { uk: 'Плавні, передбачувані', en: 'Smooth, predictable', pl: 'Płynne, przewidywalne', de: 'Sanft, vorhersehbar', zh: '平稳、可预测', hu: 'Simák, kiszámíthatók', ro: 'Line, previzibile' }
        },
        tips: {
            uk: [
                'Слідкуй за селектором: випадково не перемкни в нейтраль під час руху на спуску.',
                'На світлофорах тримай гальмо впевнено, машина не котиться назад завдяки асистенту старту.',
                'Ідеальний варіант для тих, хто хоче зосередитися виключно на знаках і дорожній обстановці.'
            ],
            en: [
                'Watch the shifter: do not accidentally switch to neutral while driving downhill.',
                'Hold the brake firmly at traffic lights; the car will not roll backward thanks to the hill-start assistant.',
                'An ideal choice for those who want to focus exclusively on road signs and traffic conditions.'
            ],
            pl: [
                'Uważaj na selektor: nie wrzuć przypadkowo neutralnego biegu podczas zjeżdżania w dół.',
                'Trzymaj hamulec pewnie na światłach; samochód nie stacza się dzięki asystentowi ruszania pod górę.',
                'Idealna opcja dla osób, które chcą skupić się wyłącznie na znakach i sytuacji na drodze.'
            ],
            de: [
                'Achten Sie auf den Wählhebel: Schalten Sie bei Bergabfahrt nicht versehentlich in Neutral.',
                'Halten Sie die Bremse an Ampeln fest; das Auto rollt dank Berganfahrassistent nicht zurück.',
                'Die ideale Wahl für alle, die sich ausschließlich auf Verkehrsschilder und Verkehrslage konzentrieren möchten.'
            ],
            zh: [
                '注意档位选择器：下坡时切勿意外挂入空挡。',
                '在红绿灯处稳踩刹车；由于配备了坡道起步辅助，车辆不会后溜。',
                '对于想要专注于道路标志和交通状况的学员来说是理想的选择。'
            ],
            hu: [
                'Figyeld a választókart: lejtmenetben véletlenül se kapcsolj üresbe.',
                'A lámpáknál tartsd határozottan a féket; az elindulás-segítőnek köszönhetően az autó nem gurul vissza.',
                'Ideális választás azok számára, akik kizárólag a táblákra és a közlekedési helyzetre szeretnének fókuszálni.'
            ],
            ro: [
                'Fiți atenți la selector: să nu comutați accidental în neutru în timp ce coborâți o pantă.',
                'Țineți frâna ferm la semafor; mașina nu se va urni înapoi datorită asistentului la plecarea din rampă.',
                'O opțiune ideală pentru cei care doresc să se concentreze exclusiv pe indicatoare și condițiile de trafic.'
            ]
        }
    },
    'duster-mt': {
        name: {
            uk: 'Renault Duster (Кросовер / МКПП)',
            en: 'Renault Duster (Crossover / Manual)',
            pl: 'Renault Duster (Crossover / Manual)',
            de: 'Renault Duster (Crossover / Schaltung)',
            zh: '雷诺达斯特 (跨界车 / 手动)',
            hu: 'Renault Duster (Crossover / Manuális)',
            ro: 'Renault Duster (Crossover / Manuală)'
        },
        tagline: {
            uk: '«Позашляховий боєць» для міських умов',
            en: '«Off-road fighter» for urban environments',
            pl: '„Bojownik terenowy” w warunkach miejskich',
            de: '„Geländekämpfer“ für städtische Bedingungen',
            zh: '城市环境中的“越野斗士”',
            hu: '„Terepjáró harcos” városi viszonyok közé',
            ro: '„Luptător off-road” pentru mediul urban'
        },
        image: 'img/renault_duster.jpg',
        specs: {
            gearbox: { uk: 'Механіка, 5/6-ступка', en: 'Manual, 5/6-speed', pl: 'Manualna, 5/6-biegowa', de: 'Schaltung, 5/6-Gang', zh: '手动，5/6速', hu: 'Manuális, 5/6 fokozatú', ro: 'Manuală, 5/6 trepte' },
            clutch: { uk: 'Довгохідна (мʼякша, ніж у седанів)', en: 'Long-travel (softer than sedans)', pl: 'Długi skok (miększe niż w sedanach)', de: 'Langhubig (weicher als bei Limousinen)', zh: '长行程 (比轿车更软)', hu: 'Hosszú utú (puhább, mint a szedánok)', ro: 'Cursă lungă (mai moale decât la sedane)' },
            steering: { uk: 'Гідропідсилювач (інформативне кермо)', en: 'Hydraulic power steering (informative)', pl: 'Wspomaganie hydrauliczne (czytelna kierownica)', de: 'Servolenkung (informatives Lenkrad)', zh: '液压助力 (方向盘路感清晰)', hu: 'Szervokormány (informatív kormány)', ro: 'Servodirecție (volan informativ)' },
            brakes: { uk: 'Висока педаль, специфічний хід', en: 'High pedal, specific travel', pl: 'Wysoki pedał, specyficzny skok', de: 'Hohes Pedal, spezifischer Weg', zh: '踏板较高，行程独特', hu: 'Magas pedál, sajátos út', ro: 'Pedală înaltă, cursă specifică' }
        },
        tips: {
            uk: [
                'Завдяки високій посадці чудово видно габарити кузова, але стеж за широкими стійками.',
                'Коробка має коротку першу передачу — це зручно для плавного старту під гору.',
                'Підвіска чудово ковтає нерівності, але на екзамені проїжджай лежачі поліцейські плавно й акуратно.'
            ],
            en: [
                'Thanks to the high seating position, body dimensions are clearly visible, but watch out for wide pillars.',
                'The gearbox has a short first gear — convenient for a smooth start uphill.',
                'The suspension absorbs bumps wonderfully, but during the exam, drive over speed bumps smoothly and carefully.'
            ],
            pl: [
                'Dzięki wysokiej pozycji siedzącej dobrze widać gabaryty nadwozia, ale uważaj na szerokie słupki.',
                'Skrzynia ma krótki pierwszy bieg — wygodnie do płynnego ruszania pod górę.',
                'Zawieszenie świetnie połyka nierówności, ale na egzaminie przejeżdżaj progi zwalniające płynnie i ostrożnie.'
            ],
            de: [
                'Dank der hohen Sitzposition sind die Fahrzeugabmessungen gut sichtbar, aber achten Sie auf die breiten Säulen.',
                'Das Getriebe hat einen kurzen ersten Gang — praktisch für einen sanften Start am Berg.',
                'Die Federung schluckt Unebenheiten wunderbar, aber fahren Sie in der Prüfung sanft und vorsichtig über Bodenwellen.'
            ],
            zh: [
                '得益于高坐姿，车身尺寸清晰可见，但要注意较宽的A柱。',
                '变速箱一档较短 — 方便在上坡时平稳起步。',
                '悬挂过滤颠簸能力极强，但在考试中通过减速带时请平稳小心。'
            ],
            hu: [
                'A magas üléshelyzetnek köszönhetően jól láthatók a karosszéria méretei, de figyelj a széles oszlopokra.',
                'A váltónak rövid az első sebessége — ez kényelmes a sima emelkedős elinduláshoz.',
                'A futómű csodásan nyeli az egyenetlenségeket, de a vizsgán simán és óvatosan hajts át a fekvőrendőrökön.'
            ],
            ro: [
                'Datorită poziției înalte a scaunului, dimensiunile caroseriei sunt vizibile clar, dar aveți grijă la stâlpii groși.',
                'Cutia de viteze are o treaptă I scurtă — utilă pentru o pornire lină în rampă.',
                'Suspensia absoarbe denivelările minunat, dar în timpul examenului treceți peste limitadores de viteză lin și cu atenție.'
            ]
        }
    },
    'juke-at': {
        name: {
            uk: 'Nissan Juke (Компакт-кросовер)',
            en: 'Nissan Juke (Compact Crossover)',
            pl: 'Nissan Juke (Kompaktowy crossover)',
            de: 'Nissan Juke (Kompakt-SUV)',
            zh: '日产劲客/Juke (紧凑型跨界车)',
            hu: 'Nissan Juke (Kompakt crossover)',
            ro: 'Nissan Juke (Crossover compact)'
        },
        tagline: {
            uk: 'Маневрений міський стиляга',
            en: 'Maneuverable urban style icon',
            pl: 'Zwrotny miejski stylista',
            de: 'Wendiger Stadtdesigner',
            zh: '灵活的城市时尚座驾',
            hu: 'Manőverezhető városi stílusikon',
            ro: 'Stilat și manevrabil în oraș'
        },
        image: 'img/nissan_juke.jpg',
        specs: {
            gearbox: { uk: 'Автомат / Варіатор', en: 'Automatic / CVT', pl: 'Automat / CVT', de: 'Automatik / CVT', zh: '自动 / CVT', hu: 'Automata / CVT', ro: 'Automată / CVT' },
            clutch: { uk: 'Відсутня', en: 'None', pl: 'Brak', de: 'Keine', zh: '无', hu: 'Nincs', ro: 'Lipsește' },
            steering: { uk: 'Гостре спортивне кермо', en: 'Sharp sports steering', pl: 'Ostre sportowe koło kierownicy', de: 'Scharfe Sportlenkung', zh: '灵敏运动方向盘', hu: 'Éles sportkormány', ro: 'Volan sport ascuțit' },
            brakes: { uk: 'Короткий хід педалі гальма', en: 'Short brake pedal travel', pl: 'Krótki skok pedału hamulca', de: 'Kurzer Bremspedalweg', zh: '刹车踏板行程较短', hu: 'Rövid fékpedál út', ro: 'Cursă scurtă a pedalei de frână' }
        },
        tips: {
            uk: [
                'Має дуже компактні габарити — ідеально для паркування та маневрування у тісних дворах.',
                'Через оригінальну форму кузова та специфічні дзеркала звертай особливу увагу на «сліпі зони».',
                'Швидко реагує на поворот керма, тому рухайся плавно, без різких ривків.'
            ],
            en: [
                'Has very compact dimensions — ideal for parking and maneuvering in tight yards.',
                'Due to the original body shape and specific mirrors, pay special attention to "blind spots".',
                'Responds quickly to steering, so move smoothly without sharp jerks.'
            ],
            pl: [
                'Posiada bardzo kompaktowe wymiary — idealne do parkowania i manewrowania na ciasnych podwórkach.',
                'Ze względu na oryginalny kształt nadwozia i specyficzne lusterka, zwracaj szczególną uwagę na „martwe pola”.',
                'Szybko reaguje na ruchy kierownicą, dlatego poruszaj się płynnie, bez gwałtownych szarpnięć.'
            ],
            de: [
                'Hat sehr kompakte Abmessungen — ideal zum Parken und Manövrieren in engen Höfen.',
                'Achten Sie aufgrund der originellen Karosserieform und der spezifischen Spiegel besonders auf den „toten Winkel“.',
                'Reagiert schnell auf Lenkbewegungen, fahren Sie daher sanft und ohne abrupte Rucke.'
            ],
            zh: [
                '尺寸非常紧凑 — 非常适合在狭窄的院子里停车和掉头。',
                '由于独特的车身造型和特殊的外后视镜，请特别注意“盲区”。',
                '转向响应快，因此请平稳行驶，避免急剧晃动。'
            ],
            hu: [
                'Nagyon kompakt méretekkel rendelkezik — ideális parkoláshoz és szűk udvarokon való manőverezéshez.',
                'Az eredeti karosszériaforma és a sajátos tükrök miatt fordíts különös figyelmet a „holtterekre”.',
                'Gyorsan reagál a kormánymozgatásra, ezért haladj simán, hirtelen rángatások nélkül.'
            ],
            ro: [
                'Are dimensiuni foarte compacte — ideal pentru parcare și manevre în curți înguste.',
                'Datorită formei originale a caroseriei și oglinzilor specifice, acordați o atenție deosebită „unghiurilor morte”.',
                'Reacționează rapid la direcție, așa că deplasați-vă lin, fără smucituri bruște.'
            ]
        }
    },
    'logan-mt': {
        name: {
            uk: 'Renault Logan (Седан / МКПП)',
            en: 'Renault Logan (Sedan / Manual)',
            pl: 'Renault Logan (Sedan / Manual)',
            de: 'Renault Logan (Limousine / Schaltung)',
            zh: '雷诺洛ган (三厢车 / 手动)',
            hu: 'Renault Logan (Sedan / Manuális)',
            ro: 'Renault Logan (Sedan / Manuală)'
        },
        tagline: {
            uk: 'Легендарний «роботяга» автошкіл',
            en: 'Legendary driving school «workhorse»',
            pl: 'Legendarny „wołaj roboczy” szkół jazdy',
            de: 'Legendäres Fahrschul-„Arbeitspferd“',
            zh: '传奇驾校“老黄牛”',
            hu: 'A autósiskolák legendás „igáslova”',
            ro: 'Legendarul „cal de bătaie” al școlilor de șoferi'
        },
        image: 'img/renault_logan.jpg',
        specs: {
            gearbox: { uk: 'Механіка, 5-ступка', en: 'Manual, 5-speed', pl: 'Manualna, 5-biegowa', de: 'Schaltung, 5-Gang', zh: '手动，5速', hu: 'Manuális, 5 fokozatú', ro: 'Manuală, 5 trepte' },
            clutch: { uk: 'Мʼяка, довгий хід педалі', en: 'Soft, long pedal travel', pl: 'Miękkie, długi skok pedału', de: 'Weich, langer Pedalweg', zh: '偏软，踏板行程长', hu: 'Puha, hosszú pedálút', ro: 'Moale, cursă lungă a pedalei' },
            steering: { uk: 'Гідропідсилювач керма', en: 'Hydraulic power steering', pl: 'Wspomaganie hydrauliczne kierownicy', de: 'Servolenkung', zh: '液压转向助力', hu: 'Szervokormány', ro: 'Servodirecție hidraulică' },
            brakes: { uk: 'Прості та надійні', en: 'Simple and reliable', pl: 'Proste i niezawodne', de: 'Einfach und zuverlässig', zh: '简单可靠', hu: 'Egyszerű és megbízható', ro: 'Simple și fiabile' }
        },
        tips: {
            uk: [
                'Має дуже прощаюче зчеплення — чудово підходить для перших виїздів у місто.',
                'Чудова оглядовість завдяки великій площі скління.',
                'Коробка передач вимагає чіткого вмикання, не кидай ричаг на ходу.'
            ],
            en: [
                'Features a very forgiving clutch — great for first trips into the city.',
                'Great visibility due to the large glass area.',
                'The gearbox requires clear engagement; do not throw the lever while on the move.'
            ],
            pl: [
                'Posiada bardzo wyrozumiałe sprzęgło — świetne na pierwsze wyjazdy w miasto.',
                'Świetna widoczność dzięki dużej powierzchni szyb.',
                'Skrzynia biegów wymaga zdecydowanego wrzucania, nie rzucaj drążkiem w ruchu.'
            ],
            de: [
                'Hat eine sehr fehlertolerante Kupplung — ideal für die ersten Fahrten in die Stadt.',
                'Tolle Sicht durch große Glasflächen.',
                'Das Getriebe erfordert ein klares Einlegen, den Schalthebel während der Fahrt nicht herumreißen.'
            ],
            zh: [
                '离合器宽容度很高 — 非常适合初次开进市区。',
                '大面积车窗带来了极佳的视野。',
                '变速箱需要挂挡清晰，行车时切忌生拉硬拽。'
            ],
            hu: [
                'Nagyon megbocsátó kuplunggal rendelkezik — kiváló az első városi vezetésekhez.',
                'Nagyszerű kilátás a nagy üvegfelületeknek köszönhetően.',
                'A váltó határozott kapcsolást igényel, menet közben ne rángasd a kart.'
            ],
            ro: [
                'Are un ambreiaj foarte iertător — excelent pentru primele ieșiri în oraș.',
                'Vizibilitate excelentă datorită suprafeței mari a geamurilor.',
                'Cutia de viteze necesită o acționare precisă, nu smuciți levierul din mers.'
            ]
        }
    },
    'polo-mt': {
        name: {
            uk: 'Volkswagen Polo (Німецька ергономіка)',
            en: 'Volkswagen Polo (German Ergonomics)',
            pl: 'Volkswagen Polo (Niemiecka ergonomia)',
            de: 'Volkswagen Polo (Deutsche Ergonomie)',
            zh: '大众波罗 (德国人机工程)',
            hu: 'Volkswagen Polo (Német ergonómia)',
            ro: 'Volkswagen Polo (Ergonomie germană)'
        },
        tagline: {
            uk: 'Чіткість та збитість у кожному русі',
            en: 'Clarity and precision in every move',
            pl: 'Precyzja i zwartość w każdym ruchu',
            de: 'Präzision und Kompaktheit in jeder Bewegung',
            zh: '每个动作都清晰扎实',
            hu: 'Precizitás és tömörség minden mozdulatban',
            ro: 'Precizie și compactitate în fiecare mișcare'
        },
        image: 'img/vw_polo.jpg',
        specs: {
            gearbox: { uk: 'Механіка / Автомат', en: 'Manual / Automatic', pl: 'Manualna / Automat', de: 'Schaltung / Automatik', zh: '手动 / 自动', hu: 'Manuális / Automata', ro: 'Manuală / Automată' },
            clutch: { uk: 'Коротка та інформативна точка схоплення', en: 'Short and informative bite point', pl: 'Krótki i czytelny punkt chwytu', de: 'Kurzer und informativer Schleifpunkt', zh: '结合点短且清晰', hu: 'Rövid és informatív fogáspont', ro: 'Punct de cuplare scurt și informativ' },
            steering: { uk: 'Електромеханічний підсилювач', en: 'Electromechanical power steering', pl: 'Elektromechaniczne wspomaganie', de: 'Elektromechanische Lenkung', zh: '机电助力转向', hu: 'Elektromechanikus szervokormány', ro: 'Servodirecție electromecanică' },
            brakes: { uk: 'Дуже чутливі та ефективні', en: 'Very sensitive and effective', pl: 'Bardzo czułe i skuteczne', de: 'Sehr empfindlich und effektiv', zh: '非常灵敏且高效', hu: 'Nagyon érzékeny és hatékony', ro: 'Foarte sensibile și eficiente' }
        },
        tips: {
            uk: [
                'Педаль гальма тут дуже чутлива — натискай плавно, щоб не клювати носом.',
                'Кермо неймовірно збите, відчувається кожен міліметр повороту коліс.',
                'Ідеальна посадка та дзеркала, головне — контролюй швидкість на обмеженнях.'
            ],
            en: [
                'The brake pedal here is very sensitive — press smoothly to avoid nodding.',
                'The steering wheel is incredibly tight, every millimeter of wheel turn is felt.',
                'Perfect seating position and mirrors, main thing is to control speed limits.'
            ],
            pl: [
                'Pedał hamulca jest tu bardzo czuły — naciskaj płynnie, aby nie nurkować przodem.',
                'Kierownica jest niezwykle zwarta, czuć każdy milimetr skrętów kół.',
                'Idealna pozycja za kierownicą i lusterka, najważniejsze to kontrolować prędkość.'
            ],
            de: [
                'Das Bremspedal ist hier sehr empfindlich — sanft drücken, um kein Nicken zu verursachen.',
                'Das Lenkrad ist unglaublich direkt, jeder Millimeter des Lenkeinschlags ist spürbar.',
                'Perfekte Sitzposition und Spiegel, das Wichtigste ist die Geschwindigkeitskontrolle.'
            ],
            zh: [
                '刹车踏板非常灵敏 — 需平稳踩下，避免前倾点头。',
                '方向盘手感极其扎实，车轮转动的每一毫米都能清晰感知。',
                '完美的坐姿和后视镜，核心是要控制好限速。'
            ],
            hu: [
                'A fékpedál itt nagyon érzékeny — finoman nyomd, hogy ne bólogasson az autó.',
                'A kormány hihetetlenül feszes, a kerekek minden milliméteres elfordulása érezhető.',
                'Tökéletes üléshelyzet és tükrök, a legfontosabb a sebességhatárok betartása.'
            ],
            ro: [
                'Pedala de frână este foarte sensibilă aici — apăsați lin pentru a evita înmuierea botului mașinii.',
                'Volanul este extrem de strâns, se simte fiecare milimetru de viraj al roților.',
                'Poziție la volan și oglinzi ideale, cel mai important este să controlați viteza.'
            ]
        }
    },
    'sonata-at': {
        name: {
            uk: 'Hyundai Sonata (Комфорт-седан)',
            en: 'Hyundai Sonata (Comfort Sedan)',
            pl: 'Hyundai Sonata (Sedan komfortowy)',
            de: 'Hyundai Sonata (Komfort-Limousine)',
            zh: '现代索纳塔 (舒适轿车)',
            hu: 'Hyundai Sonata (Komfort sedan)',
            ro: 'Hyundai Sonata (Sedan de confort)'
        },
        tagline: {
            uk: '«Великий крейсер» для впевненого керування',
            en: '«Large cruiser» for confident driving',
            pl: '„Wielki krążownik” do pewnej jazdy',
            de: '„Großer Kreuzer“ für souveränes Fahren',
            zh: '自信驾驶的“大型巡洋舰”',
            hu: '„Nagy utasszállító” a magabiztos vezetéshez',
            ro: '„Mare crucișător” pentru o conducere încrezătoare'
        },
        image: 'img/hyundai_sonata.jpg',
        specs: {
            gearbox: { uk: 'Автомат / Механіка', en: 'Automatic / Manual', pl: 'Automat / Manual', de: 'Automatik / Schaltung', zh: '自动 / 手动', hu: 'Automata / Manuális', ro: 'Automată / Manuală' },
            clutch: { uk: 'Мʼяка або відсутня', en: 'Soft or none', pl: 'Miękkie lub brak', de: 'Weich oder keine', zh: '偏软或无', hu: 'Puha vagy nincs', ro: 'Moale sau lipsește' },
            steering: { uk: 'Легкий гідро/електропідсилювач', en: 'Light power steering', pl: 'Lekkie wspomaganie', de: 'Leichte Servolenkung', zh: '轻便助力转向', hu: 'Könnyű szervokormány', ro: 'Servodirecție ușoară' },
            brakes: { uk: 'Плавні та передбачувані', en: 'Smooth and predictable', pl: 'Płynne i przewidywalne', de: 'Sanft und vorhersehbar', zh: '平稳且可预测', hu: 'Simák és kiszámíthatók', ro: 'Line și previzibile' }
        },
        tips: {
            uk: [
                'Машина довша за стандартні хетчбеки — звикай закладати трохи більший радіус на поворотах.',
                'Через довгий кузов уважно контролюй задню частину під час паралельного паркування.',
                'Просторий і комфортний автомобіль, який чудово привчає відчувати габарити великого седана.'
            ],
            en: [
                'The car is longer than standard hatchbacks — get used to taking slightly wider turns.',
                'Due to the long body, carefully monitor the rear part during parallel parking.',
                'A spacious and comfortable car that perfectly trains you to feel the dimensions of a large sedan.'
            ],
            pl: [
                'Samochód jest dłuższy niż standardowe hatchbacki — przyzwyczaj się do brania nieco większego promienia na zakrętach.',
                'Ze względu na długie nadwozie dokładnie kontroluj tył podczas parkowania równoległego.',
                'Przestronny i komfortowy samochód, który doskonale uczy wyczucia gabarytów dużego sedana.'
            ],
            de: [
                'Das Auto ist länger als Standard-Hatchbacks — gewöhnen Sie sich an etwas größere Kurvenradien.',
                'Überwachen Sie aufgrund der langen Karosserie das Heck beim Längsparken sorgfältig.',
                'Ein geräumiges und komfortables Auto, das Ihnen perfekt beibringt, die Abmessungen einer großen Limousine zu spüren.'
            ],
            zh: [
                '车身比标准两厢车长 — 转向时请习惯稍大的转弯半径。',
                '由于车身较长，平行泊车时请仔细观察车尾。',
                '宽敞舒适的汽车，能极好地培养你对大型轿车车身尺寸的感知。'
            ],
            hu: [
                'Az autó hosszabb, mint a standard ferdehátúak — szokd meg, hogy kicsit nagyobb ívben kanyarodj.',
                'A hosszú karosszéria miatt figyelmesen ellenőrizd a hátulját párhuzamos parkolás közben.',
                'Tágas és kényelmes autó, amely kiválóan megtanít érezni egy nagy szedán méreteit.'
            ],
            ro: [
                'Mașina este mai lungă decât hatchback-urile standard — obișnuiți-vă să luați viraje cu o rază puțin mai mare.',
                'Datorită caroseriei lungi, monitorizați cu atenție partea din spate în timpul parcării paralele.',
                'O mașină spațioasă și confortabilă, care vă antrenează perfect să simțiți dimensiunile unui sedan mare.'
            ]
        }
    }
};

let currentLang = 'uk';
let activeCarKey = 'corolla-mt';

// Оновлення текстів інтерфейсу та активної машини під поточну мову
function applyTranslations() {
    const urlParams = new URLSearchParams(window.location.search);
    currentLang = urlParams.get('lang') || localStorage.getItem('selected_lang') || 'uk';

    const t = translations[currentLang] || translations['uk'];

    // Шапка та меню
    document.getElementById('site-title').innerText = t.title;
    document.getElementById('site-subtitle').innerText = t.subtitle;
    document.getElementById('lbl-bg').innerText = t.changeBg;

    // Кнопки навігації
    document.getElementById('nav-map').innerText = t.navMap;
    document.getElementById('nav-routes').innerText = t.navRoutes;
    document.getElementById('nav-list').innerText = t.navList;
    document.getElementById('nav-streets').innerText = t.navStreets;
    document.getElementById('nav-cars').innerText = t.navCars;

    // Панель вибору
    document.getElementById('pane-header-text').innerText = t.selectCarHeader;
    document.getElementById('lbl-gearbox').innerText = t.lblGearbox;
    document.getElementById('lbl-clutch').innerText = t.lblClutch;
    document.getElementById('lbl-steering').innerText = t.lblSteering;
    document.getElementById('lbl-brakes').innerText = t.lblBrakes;
    document.getElementById('tips-header').innerText = t.tipsHeader;

    // Бейджики у списку машин
    for (const [badgeId, badgeText] of Object.entries(t.badges)) {
        const el = document.getElementById(badgeId);
        if (el) el.innerText = badgeText;
    }

    // Перемальовуємо поточну обрану машину мовою інтерфейсу
    selectCar(activeCarKey, false);
}

// Вибір машини зліва та оновлення правої панелі
function selectCar(carKey, updateActiveCard = true) {
    activeCarKey = carKey;
    const car = vehiclesData[carKey];
    if (!car) return;

    if (updateActiveCard) {
        document.querySelectorAll('.vehicle-card').forEach(card => {
            card.classList.remove('active');
        });
        if (event && event.currentTarget) {
            event.currentTarget.classList.add('active');
        }
    }

    // Заповнюємо праву панель перекладеними даними
    document.getElementById('selected-car-img').src = car.image;
    document.getElementById('car-name').innerText = car.name[currentLang] || car.name['uk'];
    document.getElementById('car-tagline').innerText = car.tagline[currentLang] || car.tagline['uk'];

    document.getElementById('spec-gearbox').innerText = car.specs.gearbox[currentLang] || car.specs.gearbox['uk'];
    document.getElementById('spec-clutch').innerText = car.specs.clutch[currentLang] || car.specs.clutch['uk'];
    document.getElementById('spec-steering').innerText = car.specs.steering[currentLang] || car.specs.steering['uk'];
    document.getElementById('spec-brakes').innerText = car.specs.brakes[currentLang] || car.specs.brakes['uk'];

    const tipsList = document.getElementById('tips-list');
    const localizedTips = car.tips[currentLang] || car.tips['uk'];
    tipsList.innerHTML = localizedTips.map(tip => `<li>${tip}</li>`).join('');
}

// Запускаємо переклади при завантаженні сторінки
window.addEventListener('DOMContentLoaded', () => {
    applyTranslations();
});