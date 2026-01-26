`4.6`

# Sebeobětovací rozehry

TODO přesunout jako 4.2 (odpárat errory)
TODO někde uvést „bunt“

Logika „sebeobětovacích“ startů na pálce je taková, že pálkař se vzdal vlastního úspěchu při odpalu ve prospěch kolegy běžce na metě, který v důsledku jeho akce mohl postoupit. Tyto akce proto vnímáme statisticky jinak než standardní vystoupení v pálkařském boxu.

A abychom to mohli při budoucím vyhodnocování odlišit, musíme je pomocí speciálních symbolů umět zapsat. Rozeznáváme dva druhy:
- Sacrifice Hit (SH)
- Sacrifice Fly (SF)

## Sebeobětovací ulejvka (SH)

V určitých chvílích zápasu se kouč může rozhodnout, že nechce nechat svého pálkaře odpalovat obvyklým plným švihem, ale tajným signálem mu předá instrukci, aby míč nastavenou pálkou pouze lehce sťukl před sebe do pole. Cílem je posunout běžce na metách i za cenu vlastního autu na první metě. Této herní variantě se říká sebeobětovací ulejvka a do zápisu ji píšeme jako `SH` (_**S**acrifice **H**it_) následováno sekvencí čísel polařů, kteří zahráli aut:

TODO SH 54 / SH 13

Varianta vlevo je typická pro softball, kde pro tyto krátké míče většinou sbíhají jak 1B tak 3B a na první metě pak zaskakuje hráč na pozici 2B, variantu vpravo uvidíte spíše na baseballu, jelikož tam 1B ulejvky obvykle sbírat nechodí.

O sebeobětovací ulejvce můžeme uvažovat pouze tehdy, pokud je vidět, že se pálkař nesnaží odpálit, ale skutečně předem a viditelně nastavuje pálku s úmyslem zahrát krátkou hru. Zejména v ženském softballu bývají k vidění různé varianty, kdy je ulejvka pouze naznačena s cílem stáhnout vnitřní pole a následně je kratším švihovým odpalem „přelobovat“, přičemž takové hry SH být nemohou.

Ještě důležitější pro uznání SH je následující trojice podmínek:
- na metách byl alespoň jeden běžec
- alespoň jeden běžec postoupil v důsledku akce alespoň o 1 metu
- žádný z běžců nebyl nucený aut

TODO Komentář

Zatím jsme se zabývali standardním průběhem akce - pálkař skládá ulejvku a obrana na něj hraje aut. V řadě případů se ovšem může stát, že pálkař skončí na 1. metě safe. V takovém případě musíme začít rozlišovat několik možností.

1. Míč byl uveden do hry tak překvapivě nebo tak šikovně, že obrana neměla šanci aut stihnout. V takovém případě bychom zapsáním `SH` pálkaři zbytečně uškodili. Musíme akci zapsat jako `HIT`, přičemž skutečnost, že byl dosažen nikoliv z plného švihu, ale pouze nastavením pálky, zdůrazníme písmenem `B` za číslem polaře, v jehož prostoru míč skončil: TODO obr

2. Pálkař měl být na první metě aut, ale vinou chyby při zpracování, hodu nebo chytání příhozu k autu nedošlo. Zapsat v tuto chvíli pouze Error by opět pálkaři škodilo, protože on svou část splnil. Musíme proto `SH` a `E` zkombinovat: TODO obr

## Sebeobětovací odpal (SF)

`SF` (_**S**acrifice **F**ly_) nastane tehdy, když pálkař odpálí dostatečně dlouhý odpal chycený ze vzduchu, ale po chycení polařem zvládne ještě jeho kolega běžec postoupit na domácí metu a získat bod. Nejčastější scénář tedy je, že odpal letí daleko do vnějšího pole a běžec se rozbíhá ze třetí mety. Pálkaři se zapíše zkratka `SF` a číslo polaře, který zahrál aut chycením míče:

<ImageView :images="[
{ src: '4-6-sf8.png', alt: 'Sacrifice Fly - center field' },
]" />
 
Nicméně pozor - technicky nic nebrání tomu, aby polař, který míč chytá, byl někdo z infieldu - pokud běží na kratší luft dozadu a chytá jej v běhu přes ruku nebo ve slidu/skoku, je klidně možné, především tedy v softbalu, že běžec situaci využije a domů doběhne taky. Možné je také to, že běžec startuje už z druhé mety - to zase v případě hodně dalekého odpalu někam k plotu, který vnější pole chytá jen tak tak a pak už prostě nestíhá včas přihodit. Důležité ovšem je, že v důsledku odpalu **musí doběhnout bod**. Dílčí posuny z druhé mety na třetí nebo z první na druhou jsou málo a na sebeobětovací odpal nestačí.

Může se stát, že k chycení míče ze vzduchu dojde v zámezí. V takovém případě se před „SF“ přidá ještě písmeno „F“ jakou foul. A protože už se nevejdeme, zápis se rozdělí na dva řádky:

<ImageView :images="[
{ src: '4-6-fsf9.png', alt: 'Foul Sacrifice Fly - center field' },
]" />
 