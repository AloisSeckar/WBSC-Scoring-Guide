`6.4`

# Statistiky nadhazovačů

<ImageView :images="[
{ src: '6-4-stats.png', alt: 'Statistiky nadhazovačů' },
]" />

U nadhazovačů se sleduje široká paleta statistik, přičemž je dobré si od počátku uvědomit, že - víceméně - odpovídají křížem pálkařským statististikám druhého týmu. Tedy alespoň jejich celkové součty. Je to samozřejmě logické, protože na to, aby mohl pálkař například získat hit (`H`), musí jej nadhazovač soupeře dopustit - a bude ho mít tedy zároveň zapsaný ve svých statistikách.

Většina ze statistik nadhazovačů je proto velmi jednoduchá. O to více času však budeme muset strávit u dvou specialit - `WLS` a `ER`. Nejprve si projedeme všechny sledované sloupce obecně, a v závěru se vrátíme k určování těch dvou.

## T

První políčko vlevo od jména je spíše údaj než statistika. Nabývá hodnot `R` nebo `L` a určuje, zda nadhazovač hází pravou či levou rukou. Patrně to příliš nevyužijete, zato však o to častěji zapomenete vyplnit. Nejlepší by bylo, naučit se automaticky kolonku dopsat ihned, jak to zjistíte - např. když se začne rozhazovat. Musím se ale přiznat, že ani já sám jsem spolehlivé mentální cvičení či memotechnickou pomůcku za celou dobu neobjevil a vesele zapomínám dodnes, zejména u později do hry střídajích hráčů.

Na mezinárodních turnajích to naštěstí lze zjistit i ex-post pohledem do oficiálního lineupu zúčastněných týmů. Pamatuju sice ještě doby, kdy údaje odevzdané týmy nebyly příliš spolehlivé (resp. všichni měli vyplněno pravou ruku, i když pak někteří házeli levou), to se však hodně zlepšilo a dnes se dá údajům vcelku bez obav důvěřovat.

## WLS

Specilní příznaky `W` (win), `L` (loss) a `S` (save) připsané těm nadhazovačům, kterých se to týká. Pokud je na každé straně pouze jeden, bude to jednoduché, vystřídalo-li se jich více, budete muset zapojit své znalosti a vybrat ty správné kandidáty.

Dále viz [Určování WLS](#urcovani-wls).

## BF

**Batters Faced** - počet všech pálkařů, kteří proti nadhazovači absolvovali (ukončený) start v pálkařském boxu. Platí, že `BF >= AB`, a dále také, že součet všech `BF` se rovná součtu `PA` u pálkařů na druhé straně.

Správnou hodnotu je ideální určit ve chvíli, kdy nahazovač střídá. V tu chvíli můžete nejsnáz napočítat čtverečky na opačné straně scoresheetu, které jsou vyplněny za dobu působení odcházejícího hráče. Ne vždy je však na podobnou operaci dostatek klidu.

## AB 

**At Bats** - počet všech startů na pálce počítaných do pálkařského průměru - `BF - ∑(SH, SF, BB, IBB, HP, IO)` - soupeřových pálkařů.

## R

**Runs** - počet všech doběhů soupeřových pálkařů, kteří se dostali na metu během nadhazovačova působení na hřišti.

## ER

**Earned Runs** - podmnožina těch doběhů z `R`, které jsou (podle definice v oficiálních pravidlech baseballu) považovány za "umožněné" nadhazovačem. Platí, že `ER <= R`.

Dále viz [Určování ER](#urcovani-er).

## H

**Hits** - počet soupeřových odpalů během nadhazovačova působení na hřišti.

## 2B

**Second base hits** - odpaly, po kterých pálkař doběhl až na druhou metu. Jde o **podmnožinu** všech hitů, t.j. každé `2B` se zároveň ve statistikách objeví i jako `H`.

## 3B

**Third base hits** - odpaly, po kterých pálkař doběhl až na třetí metu. Jde o **podmnožinu** všech hitů, t.j. každé `3B` se zároveň ve statistikách objeví i jako `H`.

## HR

**Home Runs** - odpaly, po kterých pálkař doběhl až domů. Jde o **podmnožinu** všech hitů, t.j. každý `HR` se zároveň ve statistikách objeví i jako `H`.

## SH 

**Sacrifice Hits** - složené ulejvky, které posouvají běžce a pálkař je aut (viz [příslušná kapitola](/chapters/4-6-advanced-sacrifices.html)).

## SF

**Sacrifice Flys** - stažení doběhu dalekým odpalem do zadního pole, při kterém je pálkař aut ze vzduchu (viz [příslušná kapitola](/chapters/4-6-advanced-sacrifices.html)).

## BB

**Base on Balls** - mety zdarma pro pálkaře po čtyřech špatných nadhozech, které nadhazovač hodil.

## IBB

**Intentional Base on Balls** - meta zdarma ve chvíli, kdy je signalizován úmysl ji pálkaři dát (nenadhazuje se). `IBB` je **podmnožina** všech met zdarma, t.j. každá `IBB` se zároveň ve statistikách objeví i jako `BB`.

## HP

**Hit by Pitch** - trefení pálkaře nadhozem, které nadhazovač způsobil..

## IO

**Interference/Obstruction** - postup zadarmo na první metu v důsledku bránění catchera nebo některého z polařů během nadhazovačova působení na hřišti. Součet (v naprosté většině zápasů to je **0** a snad nepamatuju případ, že by to bylo více než **1**) musí odpovídat součtu `IO` v pálkařských statistikách druhého týmu.

## K

**Strikeouts** - počet všech strikeoutů, o které se nadhazovač zasloužil. Součet logicky musí odpovídat součtu `K` v pálkařských statistikách druhého týmu. Nezapomínejte na případy, kdy se pálkař důsledkem chyby dostane na metu - strikeout pro nadhazovače platí i tak.

## WP

**Wild Pitches** - kolik nadhazovač hodil během zápasu nechytatelných nadhozů, které umožnily dodatečný postup běžců. Nezapomeňte při vyhodnocování na situace `K WP` či `BB+WP` a také pozor na to, že postup 2 nebo 3 běžců na stejný wild pitch znamená **jenom jeden** `WP` do statistik.

Statistika `WP` je záludná v tom, že součet není k dispozici nikde jinde, aby bylo možné provést křížovou kontrolu. Správný počet je třeba vyčíst ze zápisu situací na druhé straně scoresheetu a pozorně zkontrolovat, zda se na něco nezapomnělo.

## BK/IP

**Balks/Illegal Pitches** - toto políčko je rozděleno, aby bylo univerzální jak pro baseballový, tak softballový zápis. Ve speciálncích mutacích (zejména starších, kdy ještě byly například zvlášť organizace `CEB` a `ESF`) může být v hlavičce jen jeden údaj. 

V každém případě jde o balky nebo nesprávné nadhozy ve chvíli, kdy v jejich důsledku dojde k postupu běžců - a tedy je sitace zapsána na druhé staně scoresheetu. Tak jako u `WP` platí i zde, že není proti čemu kontrolovat správný součet a je třeba zápis pozorně číst.

## Určování WLS {#urcovani-wls}

Správné určení „vítězného“ a „poraženého“ nadhazovače je na konci zápasu důležitým úkolem zapisovatele. Platí, že v každém utkání je právě jeden nadhazovač vítězného týmu, který obdrží **W** (win), a právě jeden nadhazovač poraženého soupeře, který obdrží **L** (lose). Kromě toho může, ale nemusí, být v družstvu vítězů ještě další nadhazovač, který má získat statistiku **S** (save).

Přidělení **W**/**L** se primárně odvíjí od zjištění _rozhodujícího okamžiku_ zápasu, čímž se myslí dosažení bodu, který definitivně zvrátil skóre na jednu či druhou stranu. Tento moment může nastat na samém začátku zápasu (když první pálkař hostů odpálí homerun z prvního nadhozu a pak už celý zbytek zápasu hosté vedou a vyhrají) nebo naopak na samém konci (v dohrávce vyrovnaného zápasu získají domácí poslední rozhodující bod, který jim zajistí vítězství). Nebo k tomu může dojít kdykoliv mezi tím. Skóre se může různě přelévat a teprve v jednu určitou chvíli se s konečnou platností obrátí.

Pozor, na rozdíl od takového _GWG_ v hokeji, kdy je počítán ten gól, který tvoří rozdílový stav na konci zápasu (tj. při výsledku 3:2 to bude v každém případě až ten třetí), v pálkovacích sportech může být rozhodujícím bodem již hned první, pokud tým po zbytek zápasu držel vedení a soupeř pouze korigoval.

Schopnost tento okamžik spolehlivě identifikovat je nutnou součástí zapisovatelských dovedností.

Trik, který vám může pomoct, je poznamenat si aktuální nadhazovače obou týmů v průběhu zápasu pokaždé, když dojde ke změně týmu, který je ve vedení. Pokud už další změna později nenastane, stačí se k tomu pouze vrátit. Pokud v dalšímu průběhu dojde k vyrovnání, poznámku si smažete, a když se ještě později skóre zase překlopí na jednu stranu, opět ji pro aktuální dvojici nadhazovačů obnovíte. Výhoda této metody je v tom, že ve chvíli, kdy se situace právě děje, máte ideální přehled o tom, kdo je právě v lineupu. Pokud budete rozhodující okamžik vyhodnocovat až po zápase podle skóre po směnách, je to méně evidentní, náchylnější na chybu a máte pak ještě navíc další práci s ověřováním, kdo v tu chvíli právě házel.

### W
Nadhazovač, který byl napsaný v lineupu v okamžiku, kdy tým dosáhl rozhodujícího bodu pro své budoucí vítězství, má velkou šanci, aby byl prohlášen vítězným nadhazovačem.

Pozor, je tu však jedna výjimka. Vychází-li to totiž na nadhazovače základní sestavy (starting pitcher), je navíc požadováno, aby dotyčný odházel dostatečný počet směn. Toto vychází z tradičně odlišného postavení rotace startujících nadhazovačů v baseballových týmech, od kterých se očekává odházení +/- 100 nadhozů, oproti regimentu „relief“ pitcherů, kteří jsou připraveni naskočit v průběhu zápasu z bullpenu, ale často jen na pár pálkařů. Proto musí nadhazovač, který začíná, z pohledu statistik předvést něco navíc a kromě toho, že je ve správný čas na správném místě v lineupu, musí zvládnout i dostatečnou porci zápasů.
Konkrétně jde o:

- TODO Minimální počty směn base/soft

Pokud nastane situace, kdy podmínka minimálního počtu směn splněná není, nemůže startující nadhazovač obdržet **W** a zapisovatel ho musí přidělit některému z dalších nadhazovačů, kteří přišli později. Kritérium pro určení není zcela jednoznačné, měl by to být ten, který svým výkonem nejvíc přispěl - tj. házel delší čas, měl hodně strikeoutů, umožnil málo bodů a odpalů atd. V některých případech (obvykle když nápadně silnější tým soupeře jednoznačně přehrává, a přitom často střídá své nadhazovače, aby je šetřil do dalších zápasů) to může být relativně složité a někdy je to vyloženě o hození si mincí. Ale taková jsou pravidla (ODKAZ).

Výše uvedené platí, pokud je rozhodným okamžikem zápasu doba působení startujícího nadhazovače. Pokud k němu dojde až později, kdy už hází některý z relieverů, ten už žádné kritérium počtu odházených směn plnit nemusí, a stačí mu tedy zcela minimální zapojení se.

Zde je důležité si uvědomit, že tým nikdy nezískává vedení v době, kdy jeho nadhazovač skutečně hází. Otázka „zásluh“ je tedy bezpředmětná. Kdo je napsán v lineupu na pozici **P** v době, kdy jeho tým na pálce získá rozhodující bod, ten má nárok na **W**, přestože předtím stihl hodit třeba jen jeden aut a vzápětí po konci úspěšného útoku je už zase střídán někým dalším. Nebo je dokonce možné, že nadhazovač domácích dokončil první půlsměnu v době, kdy jeho tým ještě prohrával, v dohrávce došlo k otočce a do příští obrany už nastoupil někdo jiný. Stále však rozhoduje, kdo byl uveden v lineupu v tu chvíli, kdy padl rozhodující bod.

### L

Situace okolo poraženého nadhazovače je o něco jednodušší - na rozdíl od vítězného protějšku, poražení si své **L** skutečně způsobují sami. Definice z pravidel říká, že jde o nadhazovače, který je „zodpovědný za rozhodující bod“ (ODKAZ NA PRAVIDLA).

Zde jen pozor na otázku střídání uprostřed směny. Být zodpovědný totiž v tomto případě může znamenat i pustit na metu běžce, který posléze doběhl domů. Tedy se občas může stát, že poraženým nadhazovačem je ten, který kolegovi zanechal potenciální body v pozicích na metách, když byl střídán, ačkoliv on sám už v daný moment nenadhazuje.

### S

Nejsložitější ze tří nadhazovačských statistik je **S** (save), česky „vítězství udržené nadhazovačem“.

**S** se vyznačuje hlavně tím, že ho nejde udělit vždy. Nadhazovač, který ukončí zápas ve vítězném týmu, musí pro jeho zisk splňovat následující:

1.	Nesmí už mít **W** - win je cennější statistika a má před save přednost.
2.	Musí nastat nejméně jedna ze situací:
    1. Odházel alespoň 3.0 IP (v softballu 2.0 IP, pokud zápas trvá alespoň 5 směn). To už je významná porce zápasu.
    2. Odházel alespoň 1.0 IP, ale v okamžiku jeho nástupu do hry byl rozdíl ve skóre maximálně 3 body. Sice byl ve hře „pouze“ na jednu směnu, ale výsledek byl relativně těsný, a tudíž jeho působení přispělo k udržení výhry dostatečnou měrou.
    3. Hodil poslední aut, ale v okamžiku jeho nástupu do hry hrozil vyrovnávací bod buďto od prvního pálkaře v boxu nebo od druhého v přípravném kruhu. Tato definice je nejvíc kostrbatá a také nejvíc variabilní, co se situace na hřišti týká. Tímto říkáme, že může stačit dokonce jen 0.1 IP, klidně jeden jediný nadhoz na jednoho pálkaře, ale pouze tehdy, kdy ve vzduchu visí vyrovnání. Co přesně se tím myslí? Představme si, že jak první pálkař, na kterého nadhazovač začne házet, tak další, co přijde po něm, dají homerun. Pokud byl zápas do té doby o dva body, je rázem vyrovnáno. Pokud byli na metách běžci, kritérium „těsného zápasu“ se zvyšuje - přichází-li nadhazovač do hry s obsazenými všemi metami, hrozí mu z následujících dvou startů na pálce až pět bodů - grandslam + další sólo HR. A tedy i relativně velký náskok pěti bodů může být dostatečně cenné udržet, pokud se to dohazujícímu hráči úspěšně povede.

Důležité je nezapomenout, že se stav zápasu vzhledem k možnému **S** vždy posuzuje právě v tu chvíli, kdy poslední nadhazovač nastupuje. Pokud si následně situaci sám zkomplikuje a zápas se během jeho působení „těsným“ teprve stane, je to jeho chyba, a nikoliv zásluha, zřetel na to tak brát nemůžeme.

**S** je mnohem častější v baseballu, kde jsou zápasy delší a týmy pracují s více nadhazovači. Opomenutí přidělení této statistiky je poměrně častá chyba, tak na to zkuste vždy myslet a po zápase poctivě zkontrolovat. Sice v našich končinách druhého Mariana Rivieru asi nepotkáme, přesto je však škoda o ni nadhazovače připravovat.

Opět může pomoct poznámka vyplněná už v okamžiku střídání nadhazovače do hry, zda má vzhledem k aktuálním okolnostem na případné **S** nárok.

### Bonus

Statistiky WBSC rozeznávají pouze **W**, **L** a **S**. Přesto bych však chtěl zmínit ještě další dvě příbuzné statistiky, které sledují v MLB. Jsou to **H** (hold) a **BS** (blown save).

Pro **H** platí stejná kritéria jako pro **S**, rozdíl je v tom, že se přiděluje nadhazovačům, kteří házeli za vítězný tým v době jeho vedení, nemají **W** a nebyli těmi posledními ve hře. Scénář může být třeba: první nadhazovač 7.0 IP a **W**, druhý 1.1 IP a **H** a třetí 0.2 IP a **S**. Obvykle má tým jen jednoho dominantního relief pitchera, který je pravidelně nasazován v závěrech těsnějších zápasů na pozici „closer“, ostatní v bullpenu se musí spokojit s tím, že mohou sbírat tyto **H**.

Naopak nikdo nechce sbírat **BS**, protože to znamená, že vítězství neudržel, dovolil soupeřům skórovat, a svou šanci na save resp. hold promarnil („blown“). Zde je zajímavé, že na rozdíl od **W**+**S**, což dohromady nejde, zvládnout v jednom zápase **BS**+**L**, to už možné je. Samozřejmě to tak být nemusí, nešťastník může zápas pouze nechat srovnat, načež je vyexpedován zpět na lavičku, nebo se taky může stát, že se dalším vývojem opět hra otočí ve prospěch jeho týmu. Dokonce to v určitých případech může skončit nepravděpodobnou kombinací **BS**+**W**. Také pozor na situaci, pokud bod, který zápas otáčí do prohry, nechal na metě předchozí nadhazovač - **L** v té chvíli půjde předchůdci, ale **BS** je v každém případě toho, kdo měl doházet na vítězství a nezvládl ho udržet.

Při počtech zápasů a počtech nadhazovačů na zápas, které máme v našich končinách k dispozici, nedává sledování těchto dvou statistik příliš velký smysl, protože téměř vždy půjde o nízké jednotky případů. Přesto mi připadá zajímavé tyto dvě odvozené statistiky, nebo už možná „sabermetriky“, znát.

## Určování ER {#urcovani-er}

TODO
