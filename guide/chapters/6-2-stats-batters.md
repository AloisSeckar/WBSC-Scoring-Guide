`6.2`

# Statistiky pálkařů

<ImageView :images="[
{ src: '6-2-stats.png', alt: 'Statistiky pálkařů' },
]" />

Vpravo jsou pole vyhrazena pro útočné statistiky. Řádek se vztahuje vždycky k hráči, jehož jméno a číslo je napsáno v řádku vlevo. I když stejný hráč hraje na více pozicích v obraně (zabírá více řádků), jeho statistiky na pálce se píší pouze do prvního řádku. Totéž platí, i když se v softballu hráč základní sestavy vrací do hry - pokračuje se v původním řádku. Je to logické, jinak by byl ve čtení celkových statistik hráče zaručeně zmatek. 

Pro celkové součty použijte až poslední řádek nad sekci „The box score balance“. Občas vídám čísla visící hned pod devátým pálkařem. Není to velká chyba, ale jelikož se při větším počtu střídání může stát, že část z těch 7 volných řádků budete potřebovat, bylo by to nekonzistentní.

WBSC sleduje pouze těchto 18 „základní“ statistik. Složitější derivované statistiky, jako je pálkařský průměr (BA), se z toho všechny dají vypočítat.

## PA

**Plate Appearances** - počet všech vystoupení v pálkařském boxu pálkaře. Platí, že `PA >= AB`.

## AB 

**At Bats** - počet všech startů na pálce počítaných do pálkařského průměru - `PA - ∑(SH, SF, BB, IBB, HP, IO)`.

## R

**Runs** - počet všech doběhů pálkaře v zápase.

## H

**Hits** - počet všech odpalů pálkaře v zápase.

## 2B

**Second base hits** - odpaly, po kterých pálkař doběhl až na druhou metu. Jde o **podmnožinu** všech hitů, t.j. každé `2B` se zároveň ve statistikách objeví i jako `H`.

## 3B

**Third base hits** - odpaly, po kterých pálkař doběhl až na třetí metu. Jde o **podmnožinu** všech hitů, t.j. každé `3B` se zároveň ve statistikách objeví i jako `H`.

## HR

**Home Runs** - odpaly, po kterých pálkař doběhl až domů. Jde o **podmnožinu** všech hitů, t.j. každý `HR` se zároveň ve statistikách objeví i jako `H`.

## GDP

**Grounded into Double Plays**  - po odpalu po zemi nastaly dva (nebo i tři) auty.

## SH 

**Sacrifice Hits** - složené ulejvky, které posouvají běžce a pálkař je aut (viz [příslušná kapitola](/chapters/4-6-advanced-sacrifices.html)).

## SF

**Sacrifice Flys** - stažení doběhu dalekým odpalem do zadního pole, při kterém je pálkař aut ze vzduchu (viz [příslušná kapitola](/chapters/4-6-advanced-sacrifices.html)).

## BB

**Base on Balls** - mety zdarma pro pálkaře po čtyřech špatných nadhozech.

## IBB

**Intentional Base on Balls** - meta zdarma ve chvíli, kdy je signalizován úmysl ji pálkaři dát (nenadhazuje se). `IBB` je **podmnožina** všech met zdarma, t.j. každá `IBB` se zároveň ve statistikách objeví i jako `BB`.

## HP

**Hit by Pitch** - trefení pálkaře nadhozem.

## IO

**Interference/Obstruction** - postup zadarmo na první metu v důsledku bránění catchera nebo některého z polařů. Pozor, jsou to **pouze postupy na první metu** - pokud dojde k překážení někde dál na metách, nezapočítává se to do této statistiky. Pokud byste si to neuvědomili, nebude vám vycházet [balance](/chapters/6-6-stats-balance.html).

## SB

**Stolen Bases** - úspěšně ukradené mety.

## CS

**Caught Stealing** - neúspěšné pokusy o krádež mety.

## K

**Strikeouts** - počítají se dohromady `KS` i `KL` a všechny další možné i nemožné varianty. Nerozhoduje, zda se pálkař dostal na metu nebo byl aut. Jakmile má u sebe v zápise jakékoliv `K*`, počítá se to do této statistiky.

## RBI

**Runs Batted In** je statistika pálkařů, která značí kolik svou činností na pálce zajistili týmu bodů (doběhů). RBI může být při každém startu logicky 0 až maximálně 4 - pálkař stáhne běžce ze všech tří met a sám doběhne. Toho lze dosáhnout pouze homerunem, kterému se říká „grand slam“.

Celkový počet RBI v utkání je tak vždy menší nebo roven celkovému počtu bodů. Ne každý doběh běžce je totiž něčí RBI. Pokud postup domů nastal v důsledku chyby, krádeže mety či WP/PB, pálkař RBI **nezískává**.

Z WBSC zápisu lze celkový počet RBI zjistit velmi snadno - je-li u postupu na domácí metu uvedeno číslo 1-9, příslušný pálkař v pálkařském pořadí má za tento doběh RBI. Je-li číslo v závorce (illegal advance v důsledku chyby) nebo je tam cokoliv jiného, RBI za tento doběh nikdo nezískal.

Pozor na speciální situaci doběhu při GDP, který se specificky za RBI nepovažuje (pravidlo). V zápise je na to myšleno, ale musíte si to včas uvědomit. Doběh v rozehře, ve které zároveň dojde ke GDP, je třeba označit vodorovnou čarou nad pořadím pálkaře u postupu běžce na domácí metu.

<ImageView :images="[
{ src: '6-2-gdp.png', alt: 'Při GDP není RBI' },
]" />
