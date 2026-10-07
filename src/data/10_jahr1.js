/* 1. Ausbildungsjahr (vorläufige Struktur) */
DATA.lf.push({
  id: 'lf1', nr: 1, jahr: 1, titel: 'Im Ausbildungsbetrieb sicher arbeiten',
  subs: [
    { id: 'lf1-betrieb', titel: 'Betrieb und Ausbildung', w: [
      "der|Ausbildungsbetrieb|die Ausbildungsbetriebe||Die Firma, in der man den Beruf lernt.|Mein Ausbildungsbetrieb baut Gärten und Wege.|🏢|شركة التدريب المهني|навчальне підприємство|شرکت محل کارآموزی|eğitim işletmesi|предприятие, где проходят обучение|training company|zakład szkoleniowy|ናይ ስልጠና ትካል|firmă de formare profesională",
      "das|Berichtsheft|die Berichtshefte||Ein Heft. Man schreibt jede Woche hinein, was man gelernt hat.|Ich schreibe jeden Freitag in mein Berichtsheft.|📓|دفتر تقارير التدريب|щоденник практики|دفتر گزارش کارآموزی|rapor defteri (eğitim günlüğü)|дневник обучения (отчётная тетрадь)|record book (training log)|dzienniczek praktyk|መዝገብ ጸብጻብ ስልጠና|caiet de rapoarte (jurnal de ucenicie)",
      "die|Baustelle|die Baustellen||Der Ort, an dem gebaut wird.|Heute arbeiten wir auf der Baustelle im Park.|🚧|موقع البناء|будівельний майданчик|کارگاه ساختمانی|şantiye|стройплощадка|construction site|plac budowy|ቦታ ህንጻ|șantier",
      "der|Kunde|die Kunden||Die Person, die den Auftrag gibt und bezahlt.|Der Kunde wünscht sich eine neue Terrasse.|🤝|الزبون|клієнт|مشتری|müşteri|клиент|customer|klient|ዓሚል|client",
      "der|Auftrag|die Aufträge||Eine Arbeit, die ein Kunde bestellt hat.|Wir haben einen neuen Auftrag für einen Garten.|📋|طلبية عمل|замовлення|سفارش کار|sipariş (iş emri)|заказ|order (job)|zlecenie|ትእዛዝ ስራሕ|comandă (lucrare)",
      "der|Vorarbeiter|die Vorarbeiter||Die Person, die die Gruppe auf der Baustelle leitet.|Der Vorarbeiter erklärt uns die Aufgabe.|👷|رئيس العمال|бригадир|سرکارگر|ustabaşı|бригадир|foreman|brygadzista|ሓላፊ ጉጅለ ሰራሕተኛታት|șef de echipă",
      "die|Berufsschule|die Berufsschulen||Die Schule, in der man die Theorie für den Beruf lernt.|Am Montag gehe ich in die Berufsschule.|🏫|المدرسة المهنية|професійна школа|هنرستان (مدرسه حرفه‌ای)|meslek okulu|профессиональное училище|vocational school|szkoła zawodowa|ሞያዊ ቤት ትምህርቲ|școală profesională",
      "die|Arbeitszeit|die Arbeitszeiten||Die Zeit, in der man arbeitet.|Unsere Arbeitszeit beginnt um 7 Uhr.|⏰|ساعات العمل|робочий час|ساعت کاری|çalışma saati|рабочее время|working hours|czas pracy|ሰዓታት ስራሕ|program de lucru"
    ]},
    { id: 'lf1-schutz', titel: 'Arbeitsschutz', w: [
      "der|Schutzhelm|die Schutzhelme||Ein harter Hut. Er schützt den Kopf.|Auf der Baustelle trage ich immer einen Schutzhelm.|⛑️|خوذة الحماية|захисна каска|کلاه ایمنی|baret|защитная каска|safety helmet|kask ochronny|ቆብዕ ድሕነት|cască de protecție",
      "die|Schutzbrille|die Schutzbrillen||Eine Brille, die die Augen schützt.|Beim Steineschneiden brauche ich eine Schutzbrille.|🥽|نظارة الحماية|захисні окуляри|عینک ایمنی|koruyucu gözlük|защитные очки|safety goggles|okulary ochronne|መነጽር ድሕነት|ochelari de protecție",
      "der|Gehörschutz|–||Er schützt die Ohren vor lautem Lärm.|Bei der Rüttelplatte trage ich einen Gehörschutz.|🎧|واقي السمع|засоби захисту слуху|محافظ گوش|kulak koruyucu|средства защиты слуха|hearing protection|ochronniki słuchu|መከላኸሊ እዝኒ|antifoane",
      "der|Sicherheitsschuh|die Sicherheitsschuhe||Ein fester Schuh mit Stahlkappe. Er schützt die Füße.|Ohne Sicherheitsschuh darf ich nicht auf die Baustelle.|🥾|حذاء السلامة|захисний черевик|کفش ایمنی|iş güvenliği ayakkabısı|защитный ботинок|safety shoe|but ochronny|ጫማ ድሕነት|bocanc de protecție",
      "die|Warnweste|die Warnwesten||Eine helle Weste. Andere Menschen sehen mich damit gut.|An der Straße trage ich eine Warnweste.|🦺|سترة عاكسة|сигнальний жилет|جلیقه شب‌رنگ|reflektörlü yelek|сигнальный жилет|high-visibility vest|kamizelka odblaskowa|ሰደርያ መጠንቀቕታ|vestă reflectorizantă",
      "der|Arbeitshandschuh|die Arbeitshandschuhe||Er schützt die Hände bei der Arbeit.|Mit dem Arbeitshandschuh schütze ich meine Hände.|🧤|قفاز العمل|робоча рукавиця|دستکش کار|iş eldiveni|рабочая перчатка|work glove|rękawica robocza|ጓንቲ ስራሕ|mănușă de lucru",
      "der|Verbandkasten|die Verbandkästen||Eine Box mit Material für die Erste Hilfe.|Der Verbandkasten steht im Firmenwagen.|🩹|صندوق الإسعافات الأولية|аптечка|جعبه کمک‌های اولیه|ilk yardım çantası|аптечка|first-aid kit|apteczka|ሳጹን ቀዳማይ ረድኤት|trusă de prim ajutor",
      "die|Unfallverhütung|–||Alle Regeln, damit kein Unfall passiert.|Unfallverhütung ist auf jeder Baustelle wichtig.|⚠️|الوقاية من الحوادث|запобігання нещасним випадкам|پیشگیری از حوادث|kaza önleme|предотвращение несчастных случаев|accident prevention|zapobieganie wypadkom|ምክልኻል ሓደጋ|prevenirea accidentelor"
    ]},
    { id: 'lf1-werkzeug', titel: 'Handwerkzeuge', w: [
      "der|Spaten|die Spaten||Ein Werkzeug mit flachem Blatt. Man gräbt damit.|Mit dem Spaten grabe ich ein Pflanzloch.||رفش الحفر|штикова лопата|بیل|bel küreği|штыковая лопата|spade|szpadel|ባዴላ|cazma",
      "die|Schaufel|die Schaufeln||Ein Werkzeug zum Aufnehmen von Erde, Sand oder Kies.|Ich lade den Sand mit der Schaufel in die Schubkarre.||المجرفة|совкова лопата|بیل پهن (خاک‌انداز)|kürek|совковая лопата|shovel|łopata|ሰፊሕ ባዴላ|lopată",
      "die|Schubkarre|die Schubkarren||Ein Wagen mit einem Rad. Man transportiert damit Material.|Die Schubkarre ist voll mit Erde.||عربة اليد|тачка|فرغون|el arabası|тачка|wheelbarrow|taczka|ካርሬላ|roabă",
      "der|Rechen|die Rechen||Ein Werkzeug mit Zinken. Man zieht damit Erde glatt oder sammelt Laub.|Mit dem Rechen ziehe ich die Erde glatt.|🍂|مشط الحديقة (المدمّة)|граблі|شن‌کش|tırmık|грабли|rake|grabie|ራስትሮ|greblă",
      "die|Hacke|die Hacken||Ein Werkzeug zum Lockern des Bodens und gegen Beikraut.|Mit der Hacke lockere ich den Boden im Beet.|⛏️|المعزقة|сапа|کج‌بیل|çapa|мотыга (тяпка)|hoe|motyka|ዶማ|sapă",
      "die|Gartenschere|die Gartenscheren||Eine Schere für Zweige und Blumen.|Mit der Gartenschere schneide ich die Rose.|✂️|مقص الحديقة|секатор|قیچی باغبانی|bahçe makası|секатор|secateurs (pruning shears)|sekator|መቐስ ጀርዲን|foarfecă de grădină",
      "die|Grabegabel|die Grabegabeln||Eine Gabel mit starken Zinken. Man lockert damit die Erde.|Die Grabegabel ist gut für schweren Boden.||مذراة الحفر|садові вила|چنگک بیلی|bahçe çatalı|садовые вилы|digging fork|widły ogrodowe|መንሽ|furcă de săpat",
      "die|Handsäge|die Handsägen||Eine Säge, die man mit der Hand bewegt.|Den dicken Ast säge ich mit der Handsäge ab.|🪚|منشار يدوي|ножівка|اره دستی|el testeresi|ножовка|hand saw|piła ręczna|መጋዝ ኢድ|ferăstrău de mână"
    ]}
  ]
});

DATA.lf.push({
  id: 'lf2', nr: 2, jahr: 1, titel: 'Pflanzen untersuchen und zuordnen',
  subs: [
    { id: 'lf2-bau', titel: 'Bau der Pflanze', w: [
      "die|Wurzel|die Wurzeln||Der Teil der Pflanze in der Erde. Sie nimmt Wasser auf.|Die Wurzel holt Wasser aus dem Boden.|🌱|الجذر|корінь|ریشه|kök|корень|root|korzeń|ሱር|rădăcină",
      "der|Spross|die Sprosse||Der Teil der Pflanze über der Erde: Stängel, Blätter und Blüten.|Der Spross wächst zum Licht.|🌿|المجموع الخضري (الساق والأوراق)|пагін|اندام هوایی (ساقه و برگ)|sürgün (gövde)|побег|shoot|pęd|ልዕሊ መሬት ዘሎ ክፋል ተኽሊ|lăstar (tulpină cu frunze)",
      "der|Stängel|die Stängel||Der dünne Teil, der Blätter und Blüten trägt.|Der Stängel der Tulpe ist grün.|🌷|الساق|стебло|ساقه|sap|стебель|stem|łodyga|ጉንዲ|tulpină",
      "das|Blatt|die Blätter||Der grüne, flache Teil der Pflanze. Hier macht die Pflanze Zucker.|Das Blatt der Buche ist oval.|🍃|الورقة|листок|برگ|yaprak|лист|leaf|liść|ቆጽሊ|frunză",
      "die|Blüte|die Blüten||Der bunte Teil der Pflanze. Aus ihr wird die Frucht.|Die Blüte lockt Bienen an.|🌸|الزهرة|квітка|گل (شکوفه)|çiçek|цветок|flower (blossom)|kwiat|ዕምባባ|floare",
      "die|Frucht|die Früchte||Sie wächst aus der Blüte und enthält Samen.|Die Frucht des Apfelbaums ist der Apfel.|🍎|الثمرة|плід|میوه|meyve|плод|fruit|owoc|ፍረ|fruct",
      "der|Samen|die Samen||Daraus wächst eine neue Pflanze.|Der Samen braucht Wasser zum Keimen.|🌰|البذرة|насінина|بذر (دانه)|tohum|семя|seed|nasiono|ዘርኢ|sămânță",
      "die|Knospe|die Knospen||Daraus wachsen später Blätter oder Blüten.|Im Frühling öffnet sich die Knospe.||البرعم|брунька|جوانه|tomurcuk|почка|bud|pąk||mugur"
    ]},
    { id: 'lf2-leben', titel: 'Lebensvorgänge', w: [
      "die|Fotosynthese|–||Die Pflanze macht mit Licht aus Wasser und CO₂ Zucker und Sauerstoff.|Ohne Licht gibt es keine Fotosynthese.|☀️|التمثيل الضوئي|фотосинтез|فتوسنتز|fotosentez|фотосинтез|photosynthesis|fotosynteza|ፎቶሲንተሲስ|fotosinteză",
      "das|Chlorophyll|–||Der grüne Farbstoff in den Blättern.|Das Chlorophyll macht die Blätter grün.||الكلوروفيل (اليخضور)|хлорофіл|کلروفیل (سبزینه)|klorofil|хлорофилл|chlorophyll|chlorofil|ክሎሮፊል|clorofilă",
      "die|Keimung|die Keimungen||Aus dem Samen wächst eine kleine Pflanze.|Für die Keimung braucht der Samen Wärme und Wasser.|🌱|الإنبات|проростання|جوانه‌زنی|çimlenme|прорастание|germination|kiełkowanie|ምብቋል|germinare",
      "die|Verdunstung|–||Wasser geht als Dampf aus den Blättern in die Luft.|Bei Hitze ist die Verdunstung hoch.|💧|النتح (تبخر الماء من الأوراق)|випаровування|تعرق (تبخیر از برگ)|terleme (buharlaşma)|испарение (транспирация)|transpiration (evaporation)|transpiracja (parowanie)|ምትናን ማይ|transpirație (evaporare)",
      "die|Atmung|–||Die Pflanze nimmt Sauerstoff auf und gibt CO₂ ab.|Die Atmung findet Tag und Nacht statt.||التنفس|дихання|تنفس|solunum|дыхание|respiration|oddychanie|ምስትንፋስ|respirație",
      "das|Wachstum|–||Die Pflanze wird größer.|Dünger fördert das Wachstum.|📈|النمو|ріст|رشد|büyüme|рост|growth|wzrost|ዕቤት|creștere",
      "die|Bestäubung|die Bestäubungen||Blütenstaub kommt von einer Blüte zur anderen.|Bienen helfen bei der Bestäubung.|🐝|التلقيح|запилення|گرده‌افشانی|tozlaşma|опыление|pollination|zapylanie||polenizare",
      "der|Nährstoff|die Nährstoffe||Ein Stoff, den die Pflanze zum Wachsen braucht.|Stickstoff ist ein wichtiger Nährstoff.|🧪|العنصر الغذائي|поживна речовина|ماده مغذی|besin maddesi|питательное вещество|nutrient|składnik odżywczy|ኣልሚ ነገር|substanță nutritivă"
    ]},
    { id: 'lf2-gruppen', titel: 'Pflanzengruppen', w: [
      "der|Baum|die Bäume||Eine große Pflanze mit einem Stamm aus Holz.|Der Baum gibt im Sommer Schatten.|🌳|الشجرة|дерево|درخت|ağaç|дерево|tree|drzewo|ኦም|copac",
      "der|Strauch|die Sträucher||Eine Pflanze aus Holz mit vielen Trieben, ohne Stamm.|Der Strauch blüht im Mai gelb.|🌿|الشجيرة|кущ|درختچه|çalı|кустарник|shrub|krzew|ቆጥቋጥ|arbust",
      "die|Staude|die Stauden||Eine Pflanze ohne Holz, die viele Jahre lebt. Sie kommt jedes Jahr wieder.|Die Staude treibt im Frühling neu aus.|🌼|نبات عشبي معمّر|багаторічна трав'яниста рослина|گیاه علفی چندساله|çok yıllık otsu bitki|многолетнее травянистое растение|herbaceous perennial|bylina||plantă perenă",
      "das|Gehölz|die Gehölze||Sammelname für Pflanzen mit Holz: Bäume und Sträucher.|Im Herbst pflanzen wir das Gehölz.|🌲|نبات خشبي|деревна рослина|گیاه چوبی|odunsu bitki|древесное растение|woody plant|roślina drzewiasta|ዕንጨይታዊ ተኽሊ|plantă lemnoasă",
      "die|Zwiebelpflanze|die Zwiebelpflanzen||Eine Pflanze, die aus einer Zwiebel wächst, zum Beispiel die Tulpe.|Die Tulpe ist eine Zwiebelpflanze.|🌷|نبات بصلي|цибулинна рослина|گیاه پیازدار|soğanlı bitki|луковичное растение|bulb plant|roślina cebulowa||plantă cu bulb",
      "das|Gras|die Gräser||Eine Pflanze mit langen, schmalen Blättern.|Das Gras wächst nach dem Regen schnell.|🌾|العشب|трава|علف|ot|трава|grass|trawa|ሳዕሪ|iarbă",
      "die|Sommerblume|die Sommerblumen||Eine Blume, die nur einen Sommer lebt.|Die Sommerblume blüht bis zum ersten Frost.|🌺|زهرة حولية صيفية|однорічна квітка (літник)|گل فصلی یک‌ساله|yazlık çiçek|однолетний цветок (летник)|annual (bedding plant)|kwiat jednoroczny|ዕምባባ ሓደ ዓመት|floare anuală",
      "die|Kletterpflanze|die Kletterpflanzen||Eine Pflanze, die an Wänden oder Gerüsten nach oben wächst.|Die Kletterpflanze wächst an der Pergola hoch.||نبات متسلق|витка рослина|گیاه بالارونده|tırmanıcı bitki|вьющееся растение|climbing plant|pnącze||plantă cățărătoare"
    ]}
  ]
});

DATA.lf.push({
  id: 'lf3', nr: 3, jahr: 1, titel: 'Böden beurteilen und verbessern',
  subs: [
    { id: 'lf3-arten', titel: 'Bodenarten und Schichten', w: [
      "der|Boden|die Böden||Die oberste Schicht der Erde. Darin wachsen Pflanzen.|Der Boden im Garten ist sehr fest.|🟫|التربة|ґрунт|خاک|toprak|почва|soil|gleba|ሓመድ|sol",
      "der|Sand|die Sande||Boden mit großen Körnern. Wasser läuft schnell durch.|Sand ist locker und trocknet schnell.|🏖️|الرمل|пісок|ماسه|kum|песок|sand|piasek|ሑጻ|nisip",
      "der|Ton|die Tone||Boden mit sehr feinen Teilchen. Er hält viel Wasser.|Ton ist schwer und klebt an den Schuhen.||الطين (الصلصال)|глина|رس|kil|глина|clay|ił|ጭቃ|argilă",
      "der|Schluff|die Schluffe||Boden mit mittelfeinen Teilchen. Er ist feiner als Sand.|Schluff fühlt sich an wie Mehl.||الغرين (الطمي)|пил (мулиста частка ґрунту)|سیلت (لای)|silt|пылеватая фракция (алеврит)|silt|pył||praf (silt)",
      "der|Lehm|die Lehme||Eine Mischung aus Sand, Schluff und Ton.|Lehm ist ein guter Gartenboden.||التربة الطفلية (لوم)|суглинок|خاک لومی|tın (balçık)|суглинок|loam|glina|ሓመድ ጭቃ|lut",
      "der|Humus|–||Dunkler Boden aus verrotteten Pflanzen. Er ist sehr fruchtbar.|Humus macht den Boden fruchtbar.|🍂|الدبال|гумус|هوموس (خاک‌برگ)|humus|гумус|humus|próchnica|ሑሙስ|humus",
      "der|Oberboden|die Oberböden||Die oberste, dunkle und fruchtbare Bodenschicht.|Den Oberboden lagern wir am Rand der Baustelle.||التربة السطحية|верхній шар ґрунту|خاک سطحی|üst toprak|верхний слой почвы|topsoil|wierzchnia warstwa gleby|ላዕለዋይ ሓመድ|strat superior de sol",
      "der|Unterboden|die Unterböden||Die Bodenschicht unter dem Oberboden. Sie ist heller und fester.|Der Unterboden enthält wenig Humus.||التربة التحتية|підґрунтя|خاک زیرین|alt toprak|подпочва|subsoil|podglebie|ታሕተዋይ ሓመድ|subsol"
    ]},
    { id: 'lf3-verbessern', titel: 'Boden untersuchen und verbessern', w: [
      "der|pH-Wert|die pH-Werte||Er zeigt, ob der Boden sauer oder basisch ist.|Der pH-Wert im Beet liegt bei 6,5.|🧪|قيمة الحموضة (pH)|показник pH|مقدار pH|pH değeri|значение pH|pH value|odczyn pH|መጠን pH|valoarea pH",
      "die|Bodenprobe|die Bodenproben||Ein wenig Boden. Er wird im Labor untersucht.|Wir schicken die Bodenprobe ins Labor.||عينة التربة|проба ґрунту|نمونه خاک|toprak numunesi|проба почвы|soil sample|próbka gleby|ናሙና ሓመድ|probă de sol",
      "der|Kompost|die Komposte||Verrottete Pflanzenreste. Er verbessert den Boden.|Wir arbeiten Kompost in das Beet ein.|♻️|السماد العضوي (الكمبوست)|компост|کمپوست|kompost|компост|compost|kompost|ኮምፖስት|compost",
      "die|Bodenlockerung|die Bodenlockerungen||Fester Boden wird wieder locker gemacht.|Nach der Bodenlockerung wachsen die Wurzeln besser.||تفكيك التربة|розпушування ґрунту|سست کردن خاک|toprak gevşetme|рыхление почвы|soil loosening|spulchnianie gleby||afânarea solului",
      "die|Bodenverdichtung|die Bodenverdichtungen||Der Boden ist zu fest gedrückt. Es fehlen Wasser und Luft.|Schwere Maschinen machen eine Bodenverdichtung.|🚜|انضغاط التربة|ущільнення ґрунту|فشردگی خاک|toprak sıkışması|уплотнение почвы|soil compaction|zagęszczenie gleby||compactarea solului",
      "der|Rindenmulch|–||Zerkleinerte Baumrinde. Man legt sie auf das Beet.|Rindenmulch hält den Boden feucht.|🪵|نشارة اللحاء|мульча з кори|مالچ پوست درخت|ağaç kabuğu malçı|мульча из коры|bark mulch|kora (ściółka)||mulci din scoarță",
      "das|Substrat|die Substrate||Eine besondere Erde, zum Beispiel für Töpfe oder Dachgärten.|Für den Pflanzkübel nehmen wir ein Substrat.|🪴|وسط الزراعة (الركيزة)|субстрат|بستر کشت|yetiştirme ortamı (substrat)|субстрат|growing medium|podłoże||substrat",
      "die|Gründüngung|die Gründüngungen||Man sät Pflanzen und arbeitet sie später in den Boden ein.|Klee ist eine gute Gründüngung.|☘️|السماد الأخضر|сидерація (зелене добриво)|کود سبز|yeşil gübre|зелёное удобрение (сидерат)|green manure|nawóz zielony||îngrășământ verde"
    ]}
  ]
});

DATA.lf.push({
  id: 'lf4', nr: 4, jahr: 1, titel: 'Pflanzen ernähren, schützen und bewässern',
  subs: [
    { id: 'lf4-duengung', titel: 'Düngung', w: [
      "der|Dünger|die Dünger||Ein Mittel, das Pflanzen Nährstoffe gibt.|Im Frühjahr streuen wir Dünger auf den Rasen.||السماد|добриво|کود|gübre|удобрение|fertiliser|nawóz|ድኹዒ|îngrășământ",
      "der|Stickstoff|–||Ein Nährstoff (N). Er macht Blätter groß und grün.|Stickstoff fördert das Blattwachstum.|🍃|النيتروجين|азот|نیتروژن|azot|азот|nitrogen|azot|ናይትሮጅን|azot",
      "der|Phosphor|–||Ein Nährstoff (P). Er ist wichtig für Wurzeln und Blüten.|Phosphor hilft beim Wurzelwachstum.||الفوسفور|фосфор|فسفر|fosfor|фосфор|phosphorus|fosfor|ፎስፎረስ|fosfor",
      "das|Kalium|–||Ein Nährstoff (K). Er macht die Pflanze stark gegen Frost und Trockenheit.|Kalium stärkt die Pflanze im Winter.||البوتاسيوم|калій|پتاسیم|potasyum|калий|potassium|potas|ፖታስዩም|potasiu",
      "der|Kalk|die Kalke||Ein Stoff, der sauren Boden verbessert.|Saurer Boden braucht Kalk.||الجير|вапно|آهک|kireç|известь|lime|wapno|ኖራ|var",
      "der|Nährstoffmangel|die Nährstoffmängel||Der Pflanze fehlt ein Nährstoff. Man sieht es oft an den Blättern.|Gelbe Blätter zeigen einen Nährstoffmangel.|🟡|نقص العناصر الغذائية|нестача поживних речовин|کمبود مواد مغذی|besin eksikliği|недостаток питательных веществ|nutrient deficiency|niedobór składników odżywczych|ጉድለት ኣልሚ ነገር|carență de nutrienți",
      "die|Dosierung|die Dosierungen||Die richtige Menge, zum Beispiel Gramm pro Quadratmeter.|Die Dosierung steht auf dem Sack: 40 g pro m².|⚖️|الجرعة|дозування|مقدار مصرف|dozaj|дозировка|dosage|dawkowanie|መጠን|dozare",
      "das|Spurenelement|die Spurenelemente||Ein Nährstoff, den die Pflanze nur in sehr kleinen Mengen braucht, zum Beispiel Eisen.|Eisen ist ein Spurenelement.|🔬|عنصر غذائي صغير (عنصر نادر)|мікроелемент|عنصر ریزمغذی|iz element|микроэлемент|trace element|mikroelement||microelement"
    ]},
    { id: 'lf4-schutz', titel: 'Pflanzenschutz', w: [
      "der|Schädling|die Schädlinge||Ein Tier, das Pflanzen kaputt macht.|Der Schädling frisst die Blätter.|🐛|الآفة|шкідник|آفت|zararlı (haşere)|вредитель|pest|szkodnik||dăunător",
      "der|Nützling|die Nützlinge||Ein Tier, das gegen Schädlinge hilft.|Der Marienkäfer ist ein Nützling.|🐞|الحشرة النافعة|корисна комаха|حشره مفید|faydalı böcek|полезное насекомое|beneficial insect|organizm pożyteczny||insectă utilă",
      "die|Blattlaus|die Blattläuse||Ein kleines Insekt. Es saugt Saft aus der Pflanze.|Die Blattlaus sitzt an der Knospe.||المنّ (قمل النبات)|попелиця|شته|yaprak biti|тля|aphid|mszyca||afidă (păduche de frunză)",
      "der|Pilz|die Pilze||Ein Lebewesen. Manche Pilze machen Pflanzen krank, zum Beispiel Mehltau.|Der Pilz macht weiße Flecken auf den Blättern.|🍄|الفطر|гриб|قارچ|mantar|гриб|fungus|grzyb|ፈንገስ|ciupercă",
      "das|Beikraut|die Beikräuter||Eine Pflanze, die dort wächst, wo sie nicht soll (Unkraut).|Das Beikraut ziehen wir mit der Wurzel aus.|🌿|الأعشاب الضارة|бур'ян|علف هرز|yabani ot|сорняк|weed|chwast||buruiană",
      "das|Pflanzenschutzmittel|die Pflanzenschutzmittel||Ein Mittel gegen Schädlinge oder Krankheiten.|Das Pflanzenschutzmittel darf man nur mit Sachkunde benutzen.|🧴|مبيد (منتج وقاية النبات)|засіб захисту рослин|سم دفع آفات|bitki koruma ürünü|средство защиты растений|plant protection product|środek ochrony roślin|መድሃኒት ምክልኻል ተኽሊ|produs de protecție a plantelor",
      "der|Marienkäfer|die Marienkäfer||Ein roter Käfer mit schwarzen Punkten. Er frisst Blattläuse.|Ein Marienkäfer frisst viele Blattläuse.|🐞|الدعسوقة|сонечко|کفشدوزک|uğur böceği|божья коровка|ladybird|biedronka||buburuză",
      "die|Schnecke|die Schnecken||Ein langsames Tier ohne Beine. Sie frisst junge Pflanzen.|Die Schnecke frisst den Salat.|🐌|الحلزون (البزّاق)|слимак|حلزون|salyangoz|слизень (улитка)|slug (snail)|ślimak||melc"
    ]},
    { id: 'lf4-wasser', titel: 'Bewässerung', w: [
      "die|Bewässerung|die Bewässerungen||Pflanzen bekommen Wasser.|Im Sommer ist die Bewässerung sehr wichtig.|💧|الري|полив|آبیاری|sulama|полив|irrigation|nawadnianie|መስኖ|irigare",
      "der|Gartenschlauch|die Gartenschläuche||Ein langer Schlauch aus Gummi oder Kunststoff für Wasser.|Der Gartenschlauch ist 25 Meter lang.||خرطوم الحديقة|садовий шланг|شلنگ باغ|bahçe hortumu|садовый шланг|garden hose|wąż ogrodowy|ቱቦ ማይ|furtun de grădină",
      "der|Rasensprenger|die Rasensprenger||Ein Gerät, das Wasser auf den Rasen sprüht.|Der Rasensprenger läuft am frühen Morgen.|💦|رشاش المرجة|дощувач для газону|آبپاش چمن|çim fıskiyesi|дождеватель для газона|lawn sprinkler|zraszacz||aspersor pentru gazon",
      "die|Tropfbewässerung|die Tropfbewässerungen||Wasser kommt langsam in Tropfen direkt an die Wurzel.|Die Tropfbewässerung spart Wasser.|💧|الري بالتنقيط|крапельне зрошення|آبیاری قطره‌ای|damla sulama|капельный полив|drip irrigation|nawadnianie kropelkowe|መስኖ ብነጠብጣብ|irigare prin picurare",
      "die|Gießkanne|die Gießkannen||Ein Gefäß mit langem Rohr zum Gießen.|Die Gießkanne fasst zehn Liter.||إبريق السقي (المرشّة)|лійка|آبپاش دستی|sulama kabı|лейка|watering can|konewka||stropitoare",
      "der|Wasserbedarf|–||So viel Wasser braucht eine Pflanze.|Der Wasserbedarf ist im Juli am höchsten.|📊|الاحتياج المائي|потреба у воді|نیاز آبی|su ihtiyacı|потребность в воде|water requirement|zapotrzebowanie na wodę|ጠለብ ማይ|necesar de apă",
      "die|Zisterne|die Zisternen||Ein Behälter unter der Erde. Er sammelt Regenwasser.|Das Wasser aus der Zisterne nutzen wir zum Gießen.||خزان مياه الأمطار|резервуар для дощової води|آب‌انبار (مخزن آب باران)|yağmur suyu sarnıcı|резервуар для дождевой воды|rainwater tank (cistern)|zbiornik na deszczówkę|ዒላ ማይ ዝናብ|cisternă pentru apa de ploaie",
      "die|Trockenheit|–||Es regnet lange nicht. Der Boden ist trocken.|Bei Trockenheit müssen wir mehr gießen.|🌵|الجفاف|посуха|خشکی (خشکسالی)|kuraklık|засуха|drought|susza|ደርቂ|secetă"
    ]}
  ]
});
