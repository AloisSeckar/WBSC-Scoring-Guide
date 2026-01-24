`4.5`

# Volba v obraně (FC)

Volbou v obraně se myslí situace, kdy běžící pálkař nebo běžec získá metu díky tomu, že obrana hraje na některého z jeho kolegů někde jinde. Starý český softballový zápis je v tomto opět dost odlišný od způsobu, jakým na volby v obraně nahlíží systém WBSC.

Celkem rozeznáváme čtyři různé situace, které mohou nastat:

- Occupied (O)
- Fielders Choice (FC)
- On the throw (T)
- Indifference (O/)

## Occupied (O)

Toto je prakticky nejobvyklejší situace - krátký odpal do vnitřního pole a obrana se místo jednoduchého (a jistého) autu běžícího pálkaře na první metě rozhoduje přihazovat na některou z dalších met, kde úspěšně autuje běžce. Není přitom podstatné, zda šlo o nucený (šlapaný) aut nebo o tečování[^1]. Důležité je, že byla šance včasného příhozu na první metu, která zůstala nevyužita.

TODO

## Fielders Choice (FC)

Tuto variantu použijeme u pálkaře, který se dostane na metu, ačkoliv býval mohl být aut, ale obrana si vybrala hru na jiného běžce, kde však z časových důvodů nestihla zahrát aut. Podstatné je, že nenastala chyba, ale bylo to pouze nesprávné rozhodnutí.

TODO

## On the throw (T)

Týká se dodatečných postupů běžců (nebo běžícího pálkaře), kteří se posunou o jednu nebo více met dál v důsledku toho, že obrana hraje příhoz na jiného běžce u jiné mety a umožní tak získat o metu navíc, kterou by hráč v útoku svým vlastním úsilím nezískal.

TODO

## Indifference (O/)

Jestliže _on the throw_ pokrývá postupy, kdy obrana někam hází, _indifference_ máme na zachycení těch her, kdy se naopak nikam nehází - ale běžci přesto postupují.

Existuje typická situace, kdy se tato varianta volby v obraně aplikuje. Je to zároveň výjimka z pravidla _„Když běžec vybíhá s nadhozem, má vždycky krádež“_. Jde o situaci, kdy je obsazena 1. a 3. meta, a obrana očividně běžce z první mety nechává volně postoupit na druhou. Buďto nechce házet vůbec, nebo se snaží vylákat hru na běžce ze třetí mety. V takovém případě běžcova snaha o krádež vyjde vniveč a my mu krádež napsat nesmíme[^2]. Místo toho zapíšeme k postupu na druhou metu `O/2`. Pozor však na rozehry, kdy nehození příhozu vzniklo až v důsledku toho, že catcher nedokázal hned zpracovat nadhoz a přihodit nikoliv nechtěl, ale pouze nebyl schopen. Nebo si všiml, že na metě nemá polaře, který se zapomněl. To také nelze označit za volbu. Potom tedy naopak krádež píšeme.

Druhou automatickou situací je vícenásobný pokus o krádež spojený s chycením jednoho z běžců. Protože chytit ostatní běžce není možné a nebylo by fér catchera, který jedné krádeži úspěšně zabránil, trestat tím, že ostatním běžcům, kteří doběhli nikým nerušeni, ukradenou metu přiznáme, použijeme u nich symbol `O/2` (nebo `O/1`, pokud půjde o baseballovou rozehru, kterou iniciuje nadhazovač).

<ImageView :images="[
{ src: '4-5-cs-oc2.png', alt: 'Indifference + Caught stealing - catcher' },
{ src: '4-5-cs-oc1.png', alt: 'Indifference + Caught stealing - pitcher' },
]" />
     
„Indifference“ je dále uplatnitelná např. ve chvíli, kdy kvůli špatné komunikaci polařů zůstane neobsazená meta (zejména po ulejvce), a běžec situace využije k postupu „zadarmo“. Svádělo by to zapsat spíše jako něčí chybu, jenomže jak chcete určit, který polař se zapomněl a nebyl tam, kde měl být? Různé týmy pokrývají mety různě, nelze odvodit univerzální pravidlo. Jinou aplikací jsou chvíle, kdy se začne diskutovat o těsném výroku rozhodčího, obrana se v nepřerušené hře dožaduje autu a mezitím běžci dál běhají. Opět nám k vyznačení takového postupu z palety herních situací zůstane „indifference“.

---

[^1]: Ve starém softbalovém zápisu vídáme u pálkařů zkratky `FO` v případě, že byl jeho kolega aut nucený, a `FC`, pokud šlo o tečování.
[^2]: Takto napsáno to platí zejména v softballu, kde je vzdálenost mezi metami krátká a příhoz na jednu metu (téměř) automaticky implikuje postup jinde. V baseballu, ke jsou mety dále od sebe, už bychom měli počítat, že příhoz 2-6-2 nebo 2-4-2 většinou stihnout lze, a cathera, který to ani nezkusí, ukradenou metou „potrestat“. Výjimku můžeme udělat ke konci těsných zápasů, kde obrana skutečně nechce doběh riskovat.