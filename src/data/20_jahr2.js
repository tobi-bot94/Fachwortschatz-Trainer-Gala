/* 2. Ausbildungsjahr (vorläufige Struktur) */
DATA.lf.push({
  id: 'lf5', nr: 5, jahr: 2, fr: 'gala', titel: 'Baustellen einrichten und vermessen',
  subs: [
    { id: 'lf5-baustelle', titel: 'Baustelle einrichten', w: [
      "die|Baustelleneinrichtung|die Baustelleneinrichtungen||Alles, was man vor der Arbeit auf der Baustelle aufbaut: Zaun, Toilette, Lager.|Die Baustelleneinrichtung dauert einen halben Tag.|🏗️|تجهيز موقع البناء|облаштування будмайданчика|تجهیز کارگاه|şantiye kurulumu|обустройство стройплощадки|site setup|zagospodarowanie placu budowy|ምድላው ቦታ ስራሕ|organizarea șantierului",
      "der|Bauzaun|die Bauzäune||Ein Zaun um die Baustelle. Er schützt vor Unfällen.|Der Bauzaun steht um die ganze Baustelle.|🚧|سياج موقع البناء|будівельний паркан|حصار کارگاه|şantiye çiti|строительное ограждение|site fence|ogrodzenie budowy|ሓጹር ቦታ ስራሕ|gard de șantier",
      "der|Bauplan|die Baupläne||Eine Zeichnung. Sie zeigt, was und wie gebaut wird.|Auf dem Bauplan ist der Weg 1,20 m breit.|📐|مخطط البناء|будівельне креслення|نقشه اجرایی|uygulama planı (proje)|строительный чертёж|construction drawing|plan budowy (rysunek)|ንድፊ ህንጻ|plan de execuție",
      "das|Leistungsverzeichnis|die Leistungsverzeichnisse||Eine Liste mit allen Arbeiten und Mengen für einen Auftrag.|Im Leistungsverzeichnis stehen 120 m² Pflaster.|📄|جدول الكميات|відомість обсягів робіт|فهرست مقادیر و بها|keşif listesi (iş kalemleri)|ведомость объёмов работ|bill of quantities|przedmiar robót|ዝርዝር ስራሕቲ|listă de cantități (antemăsurătoare)",
      "der|Lagerplatz|die Lagerplätze||Ein Platz auf der Baustelle für Material.|Die Steine liegen auf dem Lagerplatz.|📦|مكان التخزين|складський майданчик|محل دپوی مصالح|depolama alanı|складская площадка|storage area|miejsce składowania|ቦታ መኽዘን|loc de depozitare",
      "die|Absperrung|die Absperrungen||Band oder Gitter. Niemand soll in den gefährlichen Bereich laufen.|Die Absperrung schützt die Fußgänger.|🚧|الحاجز|огородження|مانع (نوار حفاظتی)|bariyer|ограждение|barrier|odgrodzenie|መዕገቲ|împrejmuire (barieră)",
      "das|Aufmaß|die Aufmaße||Man misst die fertige Arbeit genau, zum Beispiel für die Rechnung.|Nach dem Pflastern machen wir das Aufmaß.|📏|قياس الأعمال المنفذة|обмір виконаних робіт|متره کار انجام‌شده|metraj (yapılan işin ölçümü)|обмер выполненных работ|measurement of completed work|obmiar robót|ምዕቃን ዝተሰርሐ ስራሕ|măsurătoarea lucrărilor executate",
      "der|Bauleiter|die Bauleiter||Die Person, die die ganze Baustelle plant und kontrolliert.|Der Bauleiter kommt jeden Morgen auf die Baustelle.|👷|مدير موقع البناء|виконроб (керівник будівництва)|سرپرست کارگاه|şantiye şefi|прораб (руководитель строительства)|site manager|kierownik budowy|ሓላፊ ህንጻ|șef de șantier"
    ]},
    { id: 'lf5-vermessung', titel: 'Vermessung', w: [
      "der|Zollstock|die Zollstöcke||Ein Meterstab, den man zusammenklappen kann.|Mit dem Zollstock messe ich die Höhe der Stufe.|📏|متر قابل للطي|складаний метр|متر تاشو|katlanır metre|складной метр|folding ruler|miarka składana|ዝዕጸፍ መዐቀኒ|metru pliant",
      "das|Maßband|die Maßbänder||Ein langes Band mit Zahlen zum Messen.|Mit dem Maßband messen wir 25 Meter.|📏|شريط القياس|рулетка|متر نواری|şerit metre|рулетка|tape measure|taśma miernicza|ገመድ መዐቀኒ|ruletă",
      "die|Wasserwaage|die Wasserwaagen||Ein Werkzeug. Es zeigt, ob etwas genau waagerecht ist.|Die Wasserwaage zeigt: Die Platte liegt gerade.||ميزان الماء|будівельний рівень|تراز|su terazisi|строительный уровень|spirit level|poziomica|መዐቀኒ ማዕርነት|nivelă cu bulă",
      "das|Nivelliergerät|die Nivelliergeräte||Ein Gerät mit Fernrohr. Man misst damit Höhen.|Mit dem Nivelliergerät prüfen wir die Höhe vom Planum.|🔭|جهاز التسوية (الميزان المساحي)|нівелір|ترازیاب (دوربین نیوو)|nivo|нивелир|levelling instrument|niwelator|መዐቀኒ ብራኸ|nivelă optică",
      "die|Fluchtstange|die Fluchtstangen||Ein rot-weißer Stab. Man steckt damit gerade Linien ab.|Die Fluchtstange steht genau an der Ecke.|🚩|شاخص المساحة|віха|ژالون|jalon|веха|ranging pole|tyczka miernicza|ዓንዲ መዐቀኒ|jalon",
      "die|Richtschnur|die Richtschnüre||Eine gespannte Schnur. Sie zeigt die Linie und die Höhe an.|Wir spannen die Richtschnur für die Randsteine.|🧵|خيط الاستقامة|шнур-причалка|ریسمان کار|çırpı ipi|шнур-причалка|string line|sznurek murarski|ገመድ መቕነዒ|sfoară de aliniere",
      "der|Pflock|die Pflöcke||Ein Stück Holz, das man in die Erde schlägt, zum Beispiel als Markierung.|Der Pflock markiert die Ecke der Terrasse.|🪵|الوتد|кілок|میخ چوبی|kazık|колышек|peg (stake)|palik||țăruș",
      "das|Gefälle|die Gefälle||Eine Fläche ist schräg, damit Wasser abläuft. Man gibt es in Prozent an.|Die Terrasse hat 2 % Gefälle vom Haus weg.|↘️|الميل|ухил|شیب|eğim|уклон|fall (gradient)|spadek|ዝምባለ|pantă"
    ]},
    { id: 'lf5-maschinen', titel: 'Maschinen und Geräte', w: [
      "der|Bagger|die Bagger||Eine große Maschine zum Graben und Heben.|Der Bagger hebt die Baugrube aus.|🚜|الحفّارة|екскаватор|بیل مکانیکی|ekskavatör|экскаватор|excavator|koparka|ማሽን ምኹዓት|excavator",
      "der|Radlader|die Radlader||Eine Maschine mit Schaufel vorne. Sie transportiert Material.|Der Radlader bringt den Schotter zur Fläche.|🚜|اللودر|фронтальний навантажувач|لودر|lastikli yükleyici (kepçe)|фронтальный погрузчик|wheel loader|ładowarka kołowa|ሎደር|încărcător frontal",
      "die|Rüttelplatte|die Rüttelplatten||Eine Maschine, die Boden oder Pflaster fest drückt.|Mit der Rüttelplatte verdichten wir den Schotter.||الدكّاكة الهزّازة|віброплита|کمپکتور صفحه‌ای (ویبره)|titreşimli plaka (kompaktör)|виброплита|plate compactor|zagęszczarka płytowa|ማሽን ምጽቃጥ|placă vibrantă",
      "der|Minibagger|die Minibagger||Ein kleiner Bagger für enge Gärten.|Der Minibagger passt durch das Gartentor.|🚜|حفّارة صغيرة|міні-екскаватор|بیل مکانیکی کوچک|mini ekskavatör|мини-экскаватор|mini excavator|minikoparka|ንእሽቶ ማሽን ምኹዓት|miniexcavator",
      "der|Dumper|die Dumper||Ein kleines Fahrzeug mit Mulde für Erde und Steine.|Der Dumper fährt den Aushub weg.|🚛|قلّابة صغيرة (دمبر)|думпер (міні-самоскид)|دامپر (کمپرسی کوچک)|damper|думпер (мини-самосвал)|dumper|wozidło (dumper)|ንእሽቶ ገልባጢት|dumper (basculantă mică)",
      "der|Trennschleifer|die Trennschleifer||Eine Maschine mit Scheibe. Man schneidet damit Steine.|Mit dem Trennschleifer schneide ich den Randstein.||قاطعة الأحجار|бензоріз|سنگ‌بر (فرز برش)|taş kesme makinesi|бензорез|cut-off saw|przecinarka|መቑረጺ እምኒ|debitator (mașină de tăiat piatră)",
      "die|Motorsäge|die Motorsägen||Eine Säge mit Motor für Bäume und dicke Äste.|Die Motorsäge darf man nur mit Schutzkleidung benutzen.|🪚|المنشار الآلي|бензопила|اره موتوری|motorlu testere|бензопила|chainsaw|piła łańcuchowa|ሞቶር መጋዝ|drujbă",
      "der|Rasenmäher|die Rasenmäher||Eine Maschine zum Schneiden von Rasen.|Der Rasenmäher schneidet den Rasen auf 4 cm.||جزّازة العشب|газонокосарка|ماشین چمن‌زنی|çim biçme makinesi|газонокосилка|lawnmower|kosiarka|ማሽን ምቑራጽ ሳዕሪ|mașină de tuns iarba"
    ]}
  ]
});

DATA.lf.push({
  id: 'lf6', nr: 6, jahr: 2, fr: 'gala', titel: 'Erdarbeiten durchführen und Flächen entwässern',
  subs: [
    { id: 'lf6-erde', titel: 'Erdarbeiten', w: [
      "der|Aushub|die Aushübe||Die Erde, die man beim Graben herausholt.|Den Aushub fahren wir mit dem Dumper weg.|⛏️|ناتج الحفر|виймковий ґрунт|خاک حفاری|hafriyat|вынутый грунт|excavated material (spoil)|urobek|ዝተኹዓተ ሓመድ|pământ excavat",
      "die|Baugrube|die Baugruben||Ein großes Loch für ein Fundament oder einen Teich.|Die Baugrube ist 80 cm tief.|🕳️|حفرة الأساس|котлован|گود ساختمانی|temel çukuru|котлован|excavation pit|wykop|ጉድጓድ ህንጻ|groapă de fundație",
      "das|Planum|die Planums||Die glatte, feste Fläche aus Boden unter dem Wegeaufbau.|Das Planum hat das gleiche Gefälle wie der Belag.|📐|سطح التسوية|земляне полотно (спланована основа)|بستر تسطیح‌شده|tesviye yüzeyi|спланированное основание|formation level (subgrade)|koryto (podłoże wyrównane)|ዝተማዕረ መሬት|platformă nivelată",
      "die|Böschung|die Böschungen||Ein schräger Hang aus Erde.|Die Böschung bepflanzen wir mit Bodendeckern.|⛰️|المنحدر الترابي|укіс|شیب خاکی|şev|откос|embankment (slope)|skarpa|ዝምባለ ጎቦ|taluz",
      "die|Verfüllung|die Verfüllungen||Ein Loch oder Graben wird wieder mit Material gefüllt.|Für die Verfüllung nehmen wir Sand.||الردم|засипка|پرکردن (خاکریزی)|dolgu|засыпка|backfill|zasypka|ምምላእ ጉድጓድ|umplutură",
      "der|Graben|die Gräben||Eine lange, schmale Vertiefung im Boden, zum Beispiel für Rohre.|Der Graben für das Rohr ist 60 cm tief.||الخندق|траншея|ترانشه|hendek|траншея|trench|rów|ነዊሕ ጉድጓድ|șanț",
      "die|Verdichtung|die Verdichtungen||Eine Maschine drückt Material fest zusammen.|Die Verdichtung machen wir mit der Rüttelplatte.||الدمك|ущільнення|تراکم (کوبیدن)|sıkıştırma|уплотнение|compaction|zagęszczanie|ምጽቃጥ|compactare",
      "der|Mutterboden|–||Ein anderes Wort für Oberboden: dunkle, fruchtbare Erde.|Der Mutterboden wird vor dem Bau abgetragen.|🟫|التربة الزراعية الخصبة|родючий шар ґрунту|خاک زراعی|bitkisel toprak|плодородный слой почвы|topsoil|ziemia urodzajna|ለምዒ ሓመድ|pământ vegetal"
    ]},
    { id: 'lf6-wasser', titel: 'Entwässerung', w: [
      "die|Entwässerung|die Entwässerungen||Regenwasser wird von Flächen weggeleitet.|Ohne Entwässerung steht das Wasser auf dem Hof.|💧|تصريف المياه|водовідведення|زهکشی (دفع آب سطحی)|su tahliyesi (drenaj)|водоотвод|drainage|odwodnienie|ምፍሳስ ማይ|evacuarea apei",
      "die|Rinne|die Rinnen||Ein offener Kanal. Er leitet Wasser ab.|Die Rinne liegt vor der Garage.||القناة (المجرى)|водовідвідний лоток|آبرو|oluk|водоотводный лоток|channel drain|odwodnienie liniowe|መፍሰሲ ማይ|rigolă",
      "der|Hofablauf|die Hofabläufe||Ein Gitter im Boden. Dort fließt das Wasser in den Kanal.|Der Hofablauf ist voll mit Laub.||بالوعة الفناء|дворовий трап|کفشور حیاط|avlu süzgeci|дворовый трап (дождеприёмник)|yard gully|wpust podwórzowy|መእተዊ ማይ ቀጽሪ|sifon de curte",
      "das|Rohr|die Rohre||Ein langes, rundes Teil. Wasser fließt hindurch.|Das Rohr verlegen wir mit Gefälle.||الأنبوب|труба|لوله|boru|труба|pipe|rura|ቱቦ|țeavă",
      "die|Versickerung|die Versickerungen||Regenwasser läuft langsam in den Boden.|Rasenfugenpflaster ermöglicht Versickerung.|⬇️|تسرّب الماء إلى التربة|інфільтрація (вбирання води)|نفوذ آب به خاک|suyun toprağa sızması|впитывание воды в грунт|infiltration|wsiąkanie|ምስራግ ማይ ናብ መሬት|infiltrare",
      "der|Schacht|die Schächte||Ein senkrechtes Loch mit Deckel, zum Beispiel zur Kontrolle der Rohre.|Der Schacht hat einen Deckel aus Gusseisen.||غرفة التفتيش|оглядовий колодязь|منهول (چاهک بازدید)|rögar|смотровой колодец|manhole (inspection chamber)|studzienka|ጉድጓድ ቁጽጽር|cămin de vizitare",
      "das|Regenwasser|–||Wasser, das als Regen vom Himmel fällt.|Das Regenwasser fließt in die Zisterne.|🌧️|مياه الأمطار|дощова вода|آب باران|yağmur suyu|дождевая вода|rainwater|deszczówka|ማይ ዝናብ|apă de ploaie",
      "die|Drainage|die Drainagen||Rohre oder Schichten, die Wasser aus dem Boden ableiten.|Die Drainage verhindert Staunässe.||الصرف الجوفي (الدرين)|дренаж|زهکش|drenaj|дренаж|land drain|drenaż|ቱቦ ምፍሳስ ማይ|drenaj"
    ]}
  ]
});

DATA.lf.push({
  id: 'lf7', nr: 7, jahr: 2, fr: 'gala', titel: 'Wege und Plätze befestigen',
  subs: [
    { id: 'lf7-aufbau', titel: 'Aufbau von Wegen', w: [
      "der|Oberbau|die Oberbauten||Alle Schichten über dem Planum: Tragschicht, Bettung und Belag.|Der Oberbau ist bei einer Einfahrt dicker als bei einem Gartenweg.||البنية العلوية للطريق|дорожній одяг (верхня будова)|روسازی|üst yapı|дорожная одежда|pavement construction|nawierzchnia (konstrukcja)|ላዕለዋይ ህንጻ መገዲ|structura căii (suprastructură)",
      "die|Tragschicht|die Tragschichten||Eine feste Schicht aus Schotter. Sie trägt die Last.|Die Tragschicht ist 20 cm dick.||طبقة الأساس الحاملة|несучий шар|لایه اساس|taşıyıcı tabaka|несущий слой|base course|warstwa nośna|ተሰካሚ ደርቢ|strat portant",
      "die|Frostschutzschicht|die Frostschutzschichten||Eine Schicht aus Kies oder Schotter. Sie schützt vor Schäden durch Frost.|Die Frostschutzschicht liegt direkt auf dem Planum.|❄️|طبقة الحماية من الصقيع|морозозахисний шар|لایه ضد یخبندان|don koruma tabakası|морозозащитный слой|frost protection layer (sub-base)|warstwa mrozoochronna|ደርቢ ምክልኻል ውርጪ|strat de protecție la îngheț",
      "die|Bettung|die Bettungen||Eine dünne Schicht aus Splitt oder Sand. Darauf liegen die Steine.|Die Bettung ziehen wir mit der Latte glatt.||طبقة الفرش|постіль (вирівнювальний шар)|بستر ماسه‌ای|yataklama tabakası|постель (выравнивающий слой)|bedding layer|podsypka|ደርቢ መንበሪ እምኒ|strat de pozare",
      "der|Splitt|die Splitte||Kleine, kantige Steine, zum Beispiel 2 bis 5 mm groß.|Für die Bettung nehmen wir Splitt.|⚪|الحصى المكسّر الناعم|дрібний щебінь (відсів)|شن شکسته ریز|mıcır|мелкий щебень (отсев)|fine chippings (grit)|grys|ደቂቕ ጸጸር|criblură (split)",
      "der|Schotter|die Schotter||Grobe, kantige Steine, zum Beispiel 0 bis 32 mm groß.|Der Schotter wird in Lagen verdichtet.|🪨|الحصى المكسّر (البحص)|щебінь|سنگ شکسته (شن)|kırma taş|щебень|crushed stone|tłuczeń (kruszywo łamane)|ጸጸር|piatră spartă",
      "der|Randstein|die Randsteine||Ein Stein am Rand. Er hält das Pflaster fest.|Der Randstein steht in Beton.||حجر الحافة|бордюрний камінь|جدول (سنگ کناره)|bordür taşı|бордюрный камень|edging stone (kerb)|krawężnik (obrzeże)|እምኒ ደረት|bordură",
      "die|Fuge|die Fugen||Der kleine Raum zwischen zwei Steinen.|Die Fuge ist 3 bis 5 mm breit.||الفاصل بين الأحجار|шов|درز|derz|шов|joint|fuga|ፉጋ (መንጎ እምኒ)|rost"
    ]},
    { id: 'lf7-belag', titel: 'Beläge und Verbände', w: [
      "das|Pflaster|die Pflaster||Ein Belag aus vielen kleinen Steinen.|Das Pflaster in der Einfahrt ist aus Granit.|🧱|الرصف بالحجارة|бруківка|سنگفرش|parke taşı döşeme|мощение (брусчатка)|paving|bruk|ዝተነጽፈ እምኒ|pavaj",
      "der|Pflasterstein|die Pflastersteine||Ein einzelner Stein für das Pflaster.|Der Pflasterstein ist 8 cm dick.|🧱|حجر الرصف|бруківковий камінь|سنگ فرش (بلوک)|parke taşı|брусчатка (камень)|paving stone|kostka brukowa|እምኒ ንጽፊ|piatră de pavaj",
      "die|Platte|die Platten||Ein flacher, großer Stein für Terrassen oder Wege.|Die Platte ist 60 mal 40 cm groß.|⬜|البلاطة|плита|دال (تخته‌سنگ)|plaka|плита|slab|płyta|ጸፍጣፍ እምኒ|dală",
      "der|Naturstein|die Natursteine||Ein Stein aus der Natur, zum Beispiel Granit oder Sandstein.|Naturstein ist teurer als Betonstein.|🪨|الحجر الطبيعي|природний камінь|سنگ طبیعی|doğal taş|натуральный камень|natural stone|kamień naturalny|ተፈጥሮኣዊ እምኒ|piatră naturală",
      "der|Betonstein|die Betonsteine||Ein Stein aus Beton. Er wird in einer Fabrik gemacht.|Der Betonstein ist grau und rechteckig.|🧱|الحجر الخرساني|бетонна бруківка|بلوک بتنی|beton parke taşı|бетонная брусчатка|concrete paver|kostka betonowa|እምኒ ኮንክሪት|pavele din beton",
      "der|Verband|die Verbände||Das Muster, in dem man die Steine legt.|Der Verband sieht aus wie ein Fischgrätmuster.||نمط التركيب|схема укладання (перев'язка)|الگوی چیدمان|döşeme deseni|рисунок укладки|laying pattern (bond)|wzór układania|ኣሰራርዓ እምኒ|model de așezare",
      "der|Läuferverband|die Läuferverbände||Die Steine liegen in langen Reihen, versetzt wie bei einer Mauer.|Der Läuferverband ist einfach zu verlegen.||التركيب الطولي المتعاقب|укладання рядами зі зміщенням|چیدمان ردیفی|sıralı döşeme|укладка рядами со смещением|stretcher bond|wiązanie pasowe|ብመስመር ዝተሰርዐ|așezare în rânduri decalate",
      "der|Gummihammer|die Gummihämmer||Ein Hammer mit Kopf aus Gummi. Er klopft Steine fest.|Mit dem Gummihammer klopfe ich die Platte fest.|🔨|مطرقة مطاطية|гумовий молоток (киянка)|چکش لاستیکی|lastik çekiç|резиновая киянка|rubber mallet|młotek gumowy|መዶሻ ጎማ|ciocan de cauciuc"
    ]}
  ]
});

DATA.lf.push({
  id: 'lf8', nr: 8, jahr: 2, fr: 'gala', titel: 'Gehölze pflanzen und schneiden',
  subs: [
    { id: 'lf8-pflanzung', titel: 'Pflanzung', w: [
      "die|Pflanzgrube|die Pflanzgruben||Das Loch, in das eine Pflanze kommt.|Die Pflanzgrube ist doppelt so breit wie der Ballen.|🕳️|حفرة الزراعة|посадкова яма|چاله کاشت|dikim çukuru|посадочная яма|planting pit|dół do sadzenia|ጉድጓድ ተኽሊ|groapă de plantare",
      "der|Wurzelballen|die Wurzelballen||Die Wurzeln mit der Erde daran.|Der Wurzelballen darf nicht austrocknen.||كتلة الجذور|кореневий ком|گلوله ریشه|kök topu|корневой ком|root ball|bryła korzeniowa|ሱርን ሓመድን|balotul rădăcinii",
      "die|Containerpflanze|die Containerpflanzen||Eine Pflanze, die in einem Topf gewachsen ist.|Die Containerpflanze kann man fast das ganze Jahr pflanzen.|🪴|نبات مزروع في وعاء|рослина в контейнері|گیاه گلدانی|saksılı bitki|растение в контейнере|container plant|roślina w pojemniku|ኣብ ድስቲ ዝዓበየ ተኽሊ|plantă la ghiveci (container)",
      "die|Wurzelware|–||Pflanzen ohne Erde an den Wurzeln.|Wurzelware pflanzen wir nur im Herbst oder im Frühjahr.|🌱|شتلات عارية الجذور|саджанці з відкритим коренем|نهال ریشه‌لخت|çıplak köklü fidan|саженцы с открытыми корнями|bare-root plants|sadzonki z odkrytym korzeniem||puieți cu rădăcină nudă",
      "der|Baumpfahl|die Baumpfähle||Ein Holzpfahl. Er hält einen jungen Baum gerade.|Der Baumpfahl steht auf der Westseite.|🪵|دعامة الشجرة|кілок для дерева|قیم درخت|ağaç kazığı|кол для дерева|tree stake|palik do drzewa|ደገፍ ኦም|tutore pentru pom",
      "das|Angießen|–||Das erste Gießen direkt nach dem Pflanzen.|Das Angießen ist nach dem Pflanzen sehr wichtig.|💧|السقي بعد الزراعة مباشرة|полив одразу після посадки|آبیاری بلافاصله پس از کاشت|can suyu (dikimden sonra ilk sulama)|полив сразу после посадки|watering in|podlewanie po posadzeniu|ቀዳማይ ምስታይ ማይ|udarea după plantare",
      "der|Pflanzschnitt|die Pflanzschnitte||Ein Schnitt beim Pflanzen. Danach wächst die Pflanze besser an.|Beim Pflanzschnitt kürzen wir die Triebe um ein Drittel.|✂️|التقليم عند الزراعة|обрізування під час посадки|هرس هنگام کاشت|dikim budaması|обрезка при посадке|pruning at planting|cięcie przy sadzeniu||tăiere la plantare",
      "der|Pflanzabstand|die Pflanzabstände||Der Abstand zwischen zwei Pflanzen.|Der Pflanzabstand bei der Hecke beträgt 30 cm.|↔️|مسافة الزراعة|відстань між рослинами|فاصله کاشت|dikim aralığı|расстояние между растениями|planting distance|rozstawa sadzenia|ርሕቀት ተኽልታት|distanța de plantare"
    ]},
    { id: 'lf8-schnitt', titel: 'Gehölzschnitt', w: [
      "der|Rückschnitt|die Rückschnitte||Triebe werden kürzer geschnitten.|Im Frühjahr machen wir einen Rückschnitt bei den Stauden.|✂️|التقليم (التقصير)|обрізування (вкорочення)|هرس (کوتاه کردن)|geri budama|обрезка (укорачивание)|cutting back|przycinanie|ምቕናስ|tăiere de scurtare",
      "der|Formschnitt|die Formschnitte||Ein Schnitt, der der Pflanze eine feste Form gibt, zum Beispiel eine Kugel.|Der Formschnitt beim Buchsbaum braucht Geduld.||التقليم التشكيلي|формувальна стрижка|هرس فرم‌دهی|şekil budaması|формовочная стрижка|topiary (shaping cut)|cięcie formujące||tăiere de formare",
      "der|Verjüngungsschnitt|die Verjüngungsschnitte||Alte Triebe werden ganz entfernt. Die Pflanze wird wieder jung.|Der Verjüngungsschnitt macht den alten Strauch wieder dicht.|🔄|تقليم التجديد|омолоджувальна обрізка|هرس جوان‌سازی|gençleştirme budaması|омолаживающая обрезка|rejuvenation pruning|cięcie odmładzające||tăiere de întinerire",
      "der|Trieb|die Triebe||Ein junger, wachsender Teil der Pflanze.|Der Trieb ist dieses Jahr 40 cm gewachsen.|🌿|الفرع الجديد|пагін|شاخه جوان|sürgün|побег|shoot|pęd|ሓድሽ ጨንፈር|lăstar",
      "der|Ast|die Äste||Ein dicker Teil am Baum. Daran wachsen Zweige.|Der tote Ast muss ab.|🌳|الغصن|гілка|شاخه|dal|сук (ветка)|branch|gałąź|ጨንፈር|ramură",
      "der|Leittrieb|die Leittriebe||Der oberste Trieb in der Mitte eines Baumes.|Den Leittrieb schneiden wir nicht ab.|⬆️|الفرع القائد|провідник (центральний пагін)|شاخه اصلی (رهبر)|lider sürgün|центральный проводник|leader (central shoot)|przewodnik||ax principal (lăstar conducător)",
      "die|Hecke|die Hecken||Viele Sträucher in einer Reihe. Sie sehen aus wie eine grüne Wand.|Die Hecke schneiden wir zweimal im Jahr.|🌳|السياج النباتي|живопліт|پرچین|canlı çit|живая изгородь|hedge|żywopłot|ሓጹር ኣግራብ|gard viu",
      "die|Heckenschere|die Heckenscheren||Eine große Schere oder Maschine für Hecken.|Die Heckenschere hat einen Akku.|✂️|مقص السياج|кущоріз|قیچی پرچین|çit makası|кусторез|hedge trimmer|nożyce do żywopłotu|መቐስ ሓጹር|foarfecă pentru gard viu"
    ]}
  ]
});
