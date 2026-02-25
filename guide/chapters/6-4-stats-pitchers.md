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

TODO

## Určování ER {#urcovani-er}

TODO
