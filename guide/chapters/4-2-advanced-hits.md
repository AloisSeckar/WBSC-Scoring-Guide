`4.2`

# Odpaly

Odpaly jsme si již zadefinovali v kapitole `3.3`, ale vzali jsme to jen stručně. Vystačili byste si s tím, protože klíčová je informace, že pálkař hitu dosáhl, ale teď už je čas posunout naše vědomosti ještě o kousek dál.

## Přesnější umístění

Jelikož mají zapisovatelé rádi přesnost, tak k tomu přidali ještě sadu dalších zkratek pro bližší určení „mezer“ na hřišti, které mezi polaři v obraně jsou:

- `LL` - odpal směřuje vzduchem do úzkého pásu podél levého[^1] okraje hřiště
- `GLL` - odpal směřuje po zemi podél třetí mety do úzkého pásu podél levého okraje hřiště
- `LS` - odpal se prvně dotkne země ve vnitřním poli, ale mezi hráčem na třetí metě (3B) a shortstopem (SS) pokračuje do vnějšího pole
- `LC` - odpal letí vzduchem do vnějšího pole, kde dopadne do prostoru mezi levým (LF) a středním (CF) polařem
- `MI` - odpal se prvně dotkne země ve vnitřním poli zhruba v ose hřiště a shortstopem (SS) a hráčem na druhé metě (2B) pokračuje do vnějšího pole
- `RC` - odpal letí vzduchem do vnějšího pole, kde dopadne do prostoru mezi středním (CF) a pravým (RF) polařem
- `RS` - odpal se prvně dotkne země ve vnitřním poli, ale mezi hráčem na první (1B) a druhé metě (2B) pokračuje do vnějšího pole
- `RL` - odpal směřuje vzduchem do úzkého pásu podél praného okraje hřiště
- `GRL` - odpal směřuje po zemi podél první mety do úzkého pásu podél praného okraje hřiště

<ImageView :images="[
{ src: '4-2-field.png', alt: 'Kompletní schéma pro zápis umístění odpalů' },
]" />

Určení lokace je pouze orientační a nemá žádný přímý vliv na statistiky. Při pozdějším čtení zápisu však může být informace, do kterých míst pálkaři obvykle pálí, poměrně užitečná. Snažte se proto místo určovat v rámci možností přesně a nebojte se pro větší podrobnost využívat i „písemné“ možnosti.

Zápisy odpalů tedy mohou vypadat například takto:
         
<ImageView :images="[
{ src: '4-2-lc.png', alt: 'Odpal vzduchem do levého středu - LC' },
{ src: '4-2-mi.png', alt: 'Odpal po zemi přes střed - MI' },
{ src: '4-2-grl.png', alt: 'Odpal po pravé lajně - GRL' },
]" />

## Speciální případy

Je-li home run „oběhnutý“, to znamená, že míč neopustil hřiště, ale pálkař i tak stihl oběhnout všechny mety dřív, než s tím obrana stačila něco udělat, je zkratka IHR (_inside-the-park home run_).

<ImageView :images="[
{ src: '4-2-ihr.png', alt: 'Oběhnutý home run - IHR' },
]" />
 
Občas se také stane, že míč po odpalu přeskočí plot, uvízne někde pod ním, dotkne se ochranné sítě v místech, kde je speciálně stanoveno územní pravidlo, nebo vyjede mimo prostor hřiště mezerou v ohrazení. V takovém případě rozhodčí přeruší hru a přidělí pálkaři druhou metu. Této situaci se říká _ground rule double_, pročež se k symbolu dvoumetrového odpalu připojí ještě zkratka GR.

<ImageView :images="[
{ src: '4-2-2gr.png', alt: 'Ground rule double - 2B GR' },
]" />
 
Prozradím „spoiler“, že existuje ještě jedna extra situace pro zápis odpalu, ale o té více až v dedikované kapitole `4.6` věnované sebeobětovacím rozehrám.

---

[^1]: Z pohledu diváka za domácí metou
