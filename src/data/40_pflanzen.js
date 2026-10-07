/* Pflanzenkunde – für alle Ausbildungsjahre.
 * Zuerst die Grundbegriffe (botanische Namen), dann Pflanzennamen.
 * Pflanzennamen auf Tigrinya fehlen bewusst: Hier hilft der botanische Name,
 * der in allen Sprachen gleich ist.
 */
DATA.lf.push({
  id: 'pfl', nr: 0, jahr: 0, titel: 'Pflanzenkunde: botanische Namen und Pflanzen',
  subs: [
    { id: 'pfl-grund', titel: 'Grundbegriffe: botanische Namen', w: [
      "der|botanische Name|die botanischen Namen||Der wissenschaftliche Name einer Pflanze. Er ist Latein und gilt auf der ganzen Welt.|Der botanische Name der Stiel-Eiche ist Quercus robur.|🏷️|الاسم العلمي للنبات|ботанічна назва|نام علمی گیاه|bilimsel (botanik) ad|ботаническое название|botanical name|nazwa botaniczna|ሳይንሳዊ ስም ተኽሊ|denumire botanică",
      "die|Gattung|die Gattungen||Der erste Teil des botanischen Namens. Er beginnt mit einem großen Buchstaben, zum Beispiel Acer.|Acer ist die Gattung der Ahorne.||الجنس|рід|جنس|cins|род|genus|rodzaj||gen",
      "die|Art|die Arten||Der zweite Teil des botanischen Namens. Er wird klein geschrieben, zum Beispiel platanoides.|Die Art platanoides bedeutet: wie eine Platane.||النوع|вид|گونه|tür|вид|species|gatunek||specie",
      "die|Sorte|die Sorten||Eine gezüchtete Form mit besonderen Merkmalen. Sie steht in einfachen Anführungszeichen, zum Beispiel 'Crimson King'.|Die Sorte 'Crimson King' hat rote Blätter.|🏷️|الصنف|сорт|رقم (واریته)|çeşit|сорт|cultivar|odmiana|ዓሌት|soi",
      "die|Hybride|die Hybriden||Eine Kreuzung aus zwei Arten. Im Namen steht dann ein ×.|Forsythia × intermedia ist eine Hybride.|✖️|الهجين|гібрид|دورگه (هیبرید)|melez (hibrit)|гибрид|hybrid|mieszaniec|ድቅል|hibrid",
      "die|Pflanzenfamilie|die Pflanzenfamilien||Eine Gruppe von Gattungen, die miteinander verwandt sind, zum Beispiel die Rosengewächse.|Die Pflanzenfamilie der Rosengewächse ist sehr groß.||الفصيلة النباتية|родина рослин|تیره گیاهی|bitki familyası|семейство растений|plant family|rodzina roślin|ስድራ ተኽልታት|familie de plante",
      "der|deutsche Name|die deutschen Namen||Der Name der Pflanze auf Deutsch. Er ist nicht überall gleich.|Der deutsche Name von Acer platanoides ist Spitz-Ahorn.|🗣️|الاسم الألماني الشائع|німецька назва|نام آلمانی (عامیانه)|Almanca adı|немецкое название|German common name|nazwa niemiecka|ስም ብጀርመንኛ|denumire germană",
      "das|Latein|–||Eine sehr alte Sprache. Viele Pflanzennamen kommen aus dem Latein.|Botanische Namen kommen meist aus dem Latein.|📜|اللغة اللاتينية|латина|زبان لاتین|Latince|латынь|Latin|łacina|ላቲን|latina"
    ]},
    { id: 'pfl-laub', titel: 'Laubgehölze', w: [
      "die|Hänge-Birke|die Hänge-Birken|Betula pendula|Ein Baum mit weißer Rinde und hängenden Zweigen.|Die Hänge-Birke wächst auch auf armen Böden.|🌳|البتولا المتدلية|береза повисла|توس آویزان|sarkık huş|берёза повислая|silver birch|brzoza brodawkowata||mesteacăn",
      "die|Stiel-Eiche|die Stiel-Eichen|Quercus robur|Ein großer Baum, der sehr alt wird. Die Früchte heißen Eicheln.|Die Stiel-Eiche kann über 500 Jahre alt werden.|🌳|البلوط الإنجليزي|дуб звичайний|بلوط معمولی|saplı meşe|дуб черешчатый|English oak|dąb szypułkowy||stejar pedunculat",
      "der|Spitz-Ahorn|die Spitz-Ahorne|Acer platanoides|Ein Baum mit spitzen Blattzipfeln. Man sieht ihn oft an Straßen.|Der Spitz-Ahorn hat im Herbst gelbe Blätter.|🍁|القيقب النرويجي|клен гостролистий|افرای نروژی|Norveç akçaağacı|клён остролистный|Norway maple|klon zwyczajny||arțar",
      "der|Feld-Ahorn|die Feld-Ahorne|Acer campestre|Ein kleiner Baum für Hecken und freie Landschaft.|Der Feld-Ahorn verträgt Trockenheit gut.|🍁|القيقب الحقلي|клен польовий|افرای صحرایی|ova akçaağacı|клён полевой|field maple|klon polny||jugastru",
      "die|Rot-Buche|die Rot-Buchen|Fagus sylvatica|Ein Baum mit glatter, grauer Rinde. Man nutzt ihn auch als Hecke.|Die Rot-Buche behält im Winter oft ihr trockenes Laub.|🌳|الزان الأوروبي|бук лісовий|راش اروپایی|Avrupa kayını|бук лесной|European beech|buk zwyczajny||fag",
      "die|Hainbuche|die Hainbuchen|Carpinus betulus|Ein Baum oder Heckenstrauch. Er verträgt Schnitt sehr gut.|Die Hainbuche ist eine beliebte Heckenpflanze.|🌳|شجرة الكاربينوس|граб звичайний|ممرز|gürgen|граб обыкновенный|hornbeam|grab pospolity||carpen",
      "die|Winter-Linde|die Winter-Linden|Tilia cordata|Ein Baum mit herzförmigen Blättern. Die Blüten duften stark.|Die Winter-Linde blüht im Juli.|🌳|الزيزفون صغير الأوراق|липа серцелиста|نمدار برگ‌ریز|kış ıhlamuru|липа мелколистная|small-leaved lime|lipa drobnolistna||tei",
      "die|Forsythie|die Forsythien|Forsythia × intermedia|Ein Strauch, der im März gelb blüht, noch vor den Blättern.|Die Forsythie blüht im Frühling gelb.|💛|الفورسيثيا|форзиція|فورسیتیا (زرین‌پیچ)|forsitya|форзиция|forsythia|forsycja||forsiție",
      "der|Flieder|die Flieder|Syringa vulgaris|Ein Strauch mit lila oder weißen Blüten, die gut duften.|Der Flieder blüht im Mai.|💜|الليلك|бузок|یاس بنفش|leylak|сирень|lilac|lilak||liliac",
      "der|Liguster|die Liguster|Ligustrum vulgare|Ein Strauch für Hecken. Er hat kleine Blätter und schwarze Beeren.|Der Liguster ist eine schnell wachsende Hecke.|🌿|الليغستروم (الحنّاء الأوروبية)|бирючина|برگ‌نو|kurtbağrı|бирючина|privet|ligustr||lemn câinesc"
    ]},
    { id: 'pfl-nadel', titel: 'Nadelgehölze', w: [
      "die|Wald-Kiefer|die Wald-Kiefern|Pinus sylvestris|Ein Nadelbaum. Die Nadeln stehen zu zweit, die Rinde ist oben orange.|Die Wald-Kiefer wächst auf sandigem Boden.|🌲|الصنوبر الحرجي|сосна звичайна|کاج جنگلی|sarıçam|сосна обыкновенная|Scots pine|sosna zwyczajna||pin silvestru",
      "die|Berg-Kiefer|die Berg-Kiefern|Pinus mugo|Eine kleine, buschige Kiefer. Gut für Steingärten.|Die Berg-Kiefer bleibt klein und kompakt.|🌲|الصنوبر الجبلي|сосна гірська|کاج کوهی|dağ çamı|сосна горная|mountain pine|kosodrzewina||jneapăn",
      "die|Fichte|die Fichten|Picea abies|Ein Nadelbaum mit kurzen, spitzen Nadeln und hängenden Zapfen.|Die Fichte braucht feuchten Boden.|🌲|التنوب النرويجي|ялина європейська|صنوبر نروژی (پیسه‌آ)|ladin|ель обыкновенная|Norway spruce|świerk pospolity||molid",
      "die|Weiß-Tanne|die Weiß-Tannen|Abies alba|Ein Nadelbaum mit weichen Nadeln. Die Zapfen stehen aufrecht.|Die Weiß-Tanne hat zwei weiße Streifen unter den Nadeln.|🎄|التنوب الأبيض|ялиця біла|نراد سفید|ak göknar|пихта белая|silver fir|jodła pospolita||brad alb",
      "die|Eibe|die Eiben|Taxus baccata|Ein Nadelgehölz für Hecken. Fast alle Teile sind giftig.|Die Eibe ist sehr giftig.|🌲|الطقسوس|тис ягідний|سرخدار|porsuk|тис ягодный|yew|cis pospolity||tisă",
      "der|Lebensbaum|die Lebensbäume|Thuja occidentalis|Ein Nadelgehölz mit kleinen, schuppigen Blättern. Oft als Hecke.|Der Lebensbaum ist eine beliebte Heckenpflanze.|🌲|الثويا|туя західна|توجا (سرو خمره‌ای)|batı mazısı (tuya)|туя западная|northern white cedar (thuja)|żywotnik zachodni||tuia",
      "die|Europäische Lärche|die Europäischen Lärchen|Larix decidua|Ein Nadelbaum, der im Herbst seine Nadeln verliert.|Die Europäische Lärche wird im Herbst goldgelb.|🌲|الأرز الأوروبي المتساقط (اللاريكس)|модрина європейська|سیاه‌کاج اروپایی (لاریکس)|Avrupa melezi|лиственница европейская|European larch|modrzew europejski||larice",
      "der|Gemeine Wacholder|die Gemeinen Wacholder|Juniperus communis|Ein Nadelgehölz mit stechenden Nadeln und blauen Beeren.|Der Gemeine Wacholder wächst gern in der Sonne.|🫐|العرعر الشائع|ялівець звичайний|سرو کوهی (ارس)|adi ardıç|можжевельник обыкновенный|common juniper|jałowiec pospolity||ienupăr"
    ]},
    { id: 'pfl-stauden', titel: 'Stauden und Gräser', w: [
      "der|Lavendel|die Lavendel|Lavandula angustifolia|Eine duftende Pflanze mit lila Blüten. Sie liebt Sonne.|Der Lavendel duftet im Sommer.|💜|الخزامى|лаванда вузьколиста|اسطوخودوس|lavanta|лаванда узколистная|English lavender|lawenda wąskolistna||lavandă",
      "der|Storchschnabel|die Storchschnäbel|Geranium × magnificum|Eine robuste Staude mit violetten Blüten. Gut als Bodendecker.|Der Storchschnabel blüht im Juni.|🌸|إبرة الراعي (جيرانيوم)|герань пишна|شمعدانی وحشی (ژرانیوم)|turnagagası|герань великолепная|cranesbill|bodziszek wspaniały||ciocul-cocorului",
      "der|Frauenmantel|die Frauenmäntel|Alchemilla mollis|Eine Staude mit runden, weichen Blättern. Wassertropfen bleiben darauf liegen.|Der Frauenmantel blüht gelbgrün.|💧|الكيمية الناعمة (رجل الأسد)|манжетка м'яка|آلکمیلا (پنجه شیر)|aslan pençesi|манжетка мягкая|lady's mantle|przywrotnik miękki||crețișoară",
      "der|Sonnenhut|die Sonnenhüte|Rudbeckia fulgida|Eine Staude mit gelben Blüten und schwarzer Mitte.|Der Sonnenhut blüht bis in den Herbst.|🌼|الرودبيكيا|рудбекія блискуча|رودبکیا|rudbekya|рудбекия блестящая|black-eyed Susan|rudbekia błyskotliwa||rudbeckia",
      "die|Katzenminze|die Katzenminzen|Nepeta × faassenii|Eine Staude mit blau-lila Blüten. Katzen mögen den Duft.|Die Katzenminze blüht sehr lange.|🐈|نعناع القطط|котяча м'ята|پونه گربه|kedi nanesi|котовник|catmint|kocimiętka||cătușnică",
      "die|Funkie|die Funkien|Hosta|Eine Staude für den Schatten mit großen Blättern.|Die Funkie wächst gut im Schatten.|🍃|الهوستا|хоста|هوستا|hosta|хоста|hosta (plantain lily)|funkia||hosta",
      "das|Chinaschilf|–|Miscanthus sinensis|Ein hohes Gras. Es bleibt im Winter stehen.|Das Chinaschilf wird bis zu zwei Meter hoch.|🌾|القصب الصيني (ميسكانثوس)|міскантус китайський|میسکانتوس (نی چینی)|Çin kamışı|мискантус китайский|Chinese silver grass|miskant chiński||miscanthus",
      "das|Lampenputzergras|–|Pennisetum alopecuroides|Ein Gras mit weichen Blüten, die wie Flaschenbürsten aussehen.|Das Lampenputzergras blüht im Spätsommer.|🌾|عشب النافورة (بينيسيتوم)|пенісетум лисохвостовий|علف چشمه‌ای (پنیستوم)|çeşme otu (pennisetum)|пеннисетум лисохвостовый|fountain grass|rozplenica japońska||pennisetum"
    ]},
    { id: 'pfl-kletter', titel: 'Kletterpflanzen und Bodendecker', w: [
      "der|Efeu|–|Hedera helix|Eine immergrüne Kletterpflanze. Sie hält sich mit Haftwurzeln fest.|Der Efeu wächst an der Mauer hoch.|🌿|اللبلاب|плющ звичайний|پیچک (عشقه)|sarmaşık|плющ обыкновенный|ivy|bluszcz pospolity||iederă",
      "der|Wilde Wein|–|Parthenocissus tricuspidata|Eine Kletterpflanze mit roten Blättern im Herbst.|Der Wilde Wein wird im Herbst rot.|🍁|الكرمة البرية|дикий виноград|تاک وحشی (پیچ اناری)|yabani asma|девичий виноград|Boston ivy|winobluszcz trójklapowy||viță de Canada",
      "die|Waldrebe|die Waldreben|Clematis|Eine Kletterpflanze mit großen Blüten. Sie braucht ein Rankgerüst.|Die Waldrebe klettert an der Pergola.|🌸|الكليماتيس|ломиніс (клематис)|کلماتیس|akasma (klematis)|клематис (ломонос)|clematis|powojnik||clematită",
      "der|Blauregen|–|Wisteria sinensis|Eine starke Kletterpflanze mit langen, blauen Blütentrauben.|Der Blauregen braucht ein sehr stabiles Gerüst.|💜|الوستارية الصينية|гліцинія китайська|ویستریا|mor salkım|глициния китайская|Chinese wisteria|glicynia chińska||glicină",
      "die|Kletterrose|die Kletterrosen|Rosa (Kletterrosen)|Eine Rose mit langen Trieben. Man muss sie anbinden.|Die Kletterrose blüht am Rosenbogen.|🌹|الورد المتسلق|витка троянда|رز رونده|sarmaşık gül|плетистая роза|climbing rose|róża pnąca||trandafir cățărător",
      "das|Kleine Immergrün|–|Vinca minor|Ein Bodendecker mit blauen Blüten. Er wächst im Schatten.|Das Kleine Immergrün bedeckt den Boden unter den Bäumen.|🔵|الونكة الصغرى|барвінок малий|پیچ تلگرافی (وینکا)|küçük cezayir menekşesi|барвинок малый|lesser periwinkle|barwinek pospolity||saschiu",
      "das|Dickmännchen|–|Pachysandra terminalis|Ein immergrüner Bodendecker für den Schatten.|Das Dickmännchen wächst gut unter Gehölzen.|🍃|الباكيساندرا|пахізандра верхівкова|پاکیساندرا|pachysandra|пахизандра верхушечная|Japanese spurge|runianka japońska||pachysandra",
      "die|Kriechspindel|die Kriechspindeln|Euonymus fortunei|Ein immergrüner Bodendecker. Er kann auch klettern.|Die Kriechspindel hat oft bunte Blätter.|🌿|الفعيلة الزاحفة (يونيموس)|бересклет Форчуна|اونیموس رونده|sürünücü taflan (euonymus)|бересклет Форчуна|wintercreeper|trzmielina Fortune'a||euonymus târâtor"
    ]}
  ]
});

/* Kurztext für die Einführung „Botanische Namen verstehen" in allen Sprachen */
const BOT_INTRO = {
  ar: 'الاسم العلمي للنبات باللاتينية وهو نفسه في كل العالم. الجزء الأول = الجنس، الجزء الثاني = النوع.',
  uk: 'Ботанічна назва – латиною, вона однакова в усьому світі. Перша частина = рід, друга частина = вид.',
  fa: 'نام علمی گیاه لاتین است و در همه دنیا یکسان است. بخش اول = جنس، بخش دوم = گونه.',
  tr: 'Bitkinin bilimsel adı Latincedir ve tüm dünyada aynıdır. 1. kısım = cins, 2. kısım = tür.',
  ru: 'Ботаническое название – на латыни, оно одинаково во всём мире. Первая часть = род, вторая часть = вид.',
  en: 'The botanical name is Latin and the same all over the world. Part 1 = genus, part 2 = species.',
  pl: 'Nazwa botaniczna jest po łacinie i jest taka sama na całym świecie. Część 1 = rodzaj, część 2 = gatunek.',
  ti: 'ሳይንሳዊ ስም ተኽሊ ብላቲን እዩ፡ ኣብ ኩሉ ዓለም ሓደ እዩ። ቀዳማይ ክፋል = ጀነስ፡ ካልኣይ ክፋል = ስፒሽስ።',
  ro: 'Denumirea botanică este în latină și este la fel în toată lumea. Partea 1 = genul, partea 2 = specia.'
};
