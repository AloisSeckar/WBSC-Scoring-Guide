`6.3`

# Statistiky polařů

<ImageView :images="[
{ src: '6-3-stats.png', alt: 'Statistiky polařů' },
]" />

Vystoupení hráčů v obraně zaznamenáváme do sloupců nalevo od jmen hráčů. 

O nuancích si více podrobněji povídáme v kapitole o [střídání hráčů](5-substitution.md). Te%d si ukážeme, proč to bylo důležité.

Každý řádek se vztahuje k jednomu hráči na jednom postu v obraně. Účelem je umožnit sledovat výkony v obraně nejen celkově, ale i podle pozic. Pokud během zápasu došlo ke střídání pozic, musí proto hráč dostat nový řádek, i když se jen přesunul jinam. Naopak pokud se na svou původní pozici vrací, nezačínáme další nový řádek, ale vracíme se zpět do již vyplněného řádku výše. Jednak tím šetříme místo, kterého může být v některých zápasech skutečný nedostatek, ale hlavně bychom stejně museli celkové obranné statistiky na dané pozici nakonec sčítat, tak proč si to komplikovat?

Pro pozice `DP`, `DH`, `OPO`, `PH` a `PR` statistiky v obraně nedávají smysl a políčka na příslušném řádku tedy mohou zůstat prázdná. `PH` a `PR` však můžeme vidět v kombinaci s číslem pozice v obraně v druhém sloupci vedle, což nastává tehdy, když se hráč prvně objevil v útoku, ale poté v následující směně šel hrát i do obrany. V těchto případech "šetříme místem" a využijeme stejný řádek. Je totiž jasné, že případné obranné statistiky se musí určitě vztahovat k pozici, kterou zaujal v obraně. Pokud později střídá někam jinam (včetně toho, že se z něj stane softballové `OPO`), vyplníme samozřejmě další řádek.

Pro nadhazovače, kteří chodí na pálku, se může stát, že je máte napsané 2x - jednou v pálkařském pořadí a podruhé dole na stránce kvůli [nadhazovačským statistikám](6-4-stats-pitchers.md). V takovém případě si musíte vybrat, zda jeho obranné statistiky budete psát nahoru či dolu. Pokud vím, není na to pevně dané pravidlo. Pokud pálí **všichni** nadhazovači, dává mi smysl psát to nahoru mezi pálkaře, pokud naopak alespoň jeden nadhazovač pouze nadhazuje a nechává se na pálce zastupovat, píšu pak **všem** nadhazovačům obranné statistiky dolů. Ale je to ve finále jedno - jde jen o to nenapsat stejný aut/asistenci/error dvakrát nebo ani jednou.

Pro hráče v obraně existuje 5 vyhodnocovaných statistik. Stejně jako u pálkařů se pokročilejší _"sabermetrics"_ dají kombinací těchto základních odvodit.

## PO

**Players Out** - počet zahraných autů, tj. chycení ze vzduchu, tečování, zašlápnutí mety a další varianty. V případě zahraných strikeoutů jde PO většinou catcherovi, s výjimkou upuštěných míčů přihozených včas na první metu. Součet všech PO v zápase musí odpovídat celkovému počtu autů podle počtu směn - tj. 3x počet odehraných směn. Je to 27 ve standardním baseballovém a 21 v běžném softballovém zápase. Končí-li zápasy dříve, je počet samozřejmě odpovídajícím způsobem nižší.

## A

**Assists** - počet asistencí, tj. přihození na aut a příhozy v rundownech. Asistencí u každého autu je 0-n, nejčastěji 0 nebo 1, vzácněji 2 a více. Teoreticky, kdyby vznikl rundown, do kterého se zapojí všichni polaři, může být asistencí až devět. Pamatujte, že každý hráč může mít na jednom autu asistenci maximálně jednu, i kdyby ve skutečnosti v déletrvajícím rundownu házel vícekrát. Naopak platí, že může mít v sekvenci zároveň `A` i finální `PO` (např. `2-6-2`).

## E

**Errors** - počet chyb, kterých se hráč během zápasu dopustil. „Velké“ i „malé“ chyby se z hlediska těchto polařských statistik nerozlišují a zapisují se obě dohromady.

## DP

**Double plays (DP)** - počet účastí na vícenásobných autech (spojených ve scoresheetu čarou). Všichni polaři, kteří se zahrání spojených autů účastnili, lhostejno zda s `A` nebo `PO`, dostanou _právě jednu_ `DP` (tj. v klasické `GDP 643` nemá druhá meta dvojitou účast).

## IP

**Innings played (IP)** - počet odehraných směn na dané pozici v obraně. Hodnota je složena z počtu dokončených celých směn před tečkou a za tečkou 0, 1 nebo 2, podle počtu autů. Pokud hráč odehrál v zápase 3 celé směny, bude IP `3.0`. Odehrál-li dva auty v rámci směny, bude IP `0.2`. Celkový „součet“ na každém postu musí odpovídat počtu směn odehraných v zápase (`9.0` v baseballovém, `7.0` v softballovém, případně adekvátně méně u zkrácených). 

Pamatujte, že tato hodnota neříká nic o počtu soupeřů, kteří se mezitím vystřídali na pálce, a skutečném množsvtí absolvovaných rozeher. Je možné získat `1.0` IP po třech pálkařích (a nejlépe ve třech nadhozech), nebo také strávit na hřišti desítky minut, ale stále mít ve statistikách `0.0` IP (potkává to zejména ten den neúspěšné nadhazovače).

## DP celkem

Speciální políčko je na celkový počet „double play“ situací. Nesčítají se všechny čárky (protože double-play se obvykle účastní alespoň dva a více hráčů, z nichž každý má svou), ale pouze rozehry s vícenásobnými auty jako celek.

<ImageView :images="[
{ src: '6-3-dp.png', alt: 'Celkový počet realizovaných DP' },
]" />

## Součty

Hodnoty ve sloupcích `PO`, `A` a `E` se pro účely křížové kontroly sčítají v řádku "Total" zcela vlevo dole. Pište je prosím skutečně až dolů a nikoliv před dělící řádek, který odděluje nadhazovače. Je to jedna z estetických důvodů, ale hlavně proto, že jinak snadno přehlédnete statistický příspěvek nadhazovačů, kteří nechodí zároveň na pálku.
