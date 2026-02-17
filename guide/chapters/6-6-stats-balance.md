`6.6`

# Balance scoresheetu

Tento oddíl vpravo dole slouží pro závěrečnou křížovou kontrolu, že statistiky, které vám vyšly, dávají smysl. Součet hodnot v horním řádku, které reprezentují všechny varianty, jak pálkaři přichází do hry, musí logicky odpovídat součtu v dolním řádku, kde jsou pro změnu všichni ti, kteří ze hry odešli[^1]. Kdyby hráči během hry někde mizeli, bylo dost zvláštní.

Zato ze statistik může něco zmizet velmi snadno, protože ani ti nejzkušenější mě nevyjímaje někdy neuhlídají úplně všechno, zapomenou nějakou čárku někde vyznačit nebo je pak špatně sečtou. Díky nesouladu v tomto kontrolním součtu se na to většinou přijde.

<ImageView :images="[
{ src: '6-6-balance.png', alt: 'Balance scoresheetu' },
]" />
 
Hodnoty stačí jednoduše odečíst z příslušných polí na vyplněném scoresheetu. Pokud se suma horního a dolního řádku rovná napoprvé, dobrá práce. Pokud ne, zkuste to prvně ještě jednou přepočítat, protože není vůbec vyloučeno, že čísla jsou dobře, jen hlava už nezabrala. Když to pořád nevychází, nezbývá než začít pátrat. Nejčastěji jsou špatně sečtené `AB` nebo chybí či přebývá nějaký `LOB`. Běžně se také podaří přehlédnout některé ze situací `SH` / `SF` / `BB` / `HP`.

Jakmile vybalancujete obě strany, projeďte ještě naposledy celý zápis, zda nechybí takové „drobnosti“, jako konec zápasu, počet diváků, celkové skóre a součty jednotlivých statistik. To jsou pak zbytečné chyby z nepozornosti.

**Gratuluji, máte hotovo!**

---

[^1]: Speciální postavení má `TIE` - běžec, který je umístěn na metu při tiebreaku. Ten se musí někde vyskytnout (protože určitě buďto zaznamená doběh, zůstane na metě na konci směny nebo je autován), ale zároveň nešel na pálku, takže není v součtu prvního řádku. Proto se od počtu hráčů, kteří začali skutečně jako pálkaři, odečítá.
