

// DATA


const myData = [


    { japanese : "owari wa go ji desu", meaning : "deneme", pattern : "V in N form", explanation : "isimleşmiş fiiller" },
{ japanese : "ankara iku no basu ni norimashita", meaning : "deneme", pattern : "V in N form", explanation : "isimleşmiş fiiller" },
{ japanese : "kare no oyogi koto wa omoshiroi desu", meaning : "deneme", pattern : "V in N form", explanation : "isimleşmiş fiiller" },
{ japanese : "kaeri wa itsu desu ka", meaning : "", pattern : "V in N form", explanation : "isimleşmiş fiiller" },
{ japanese : "kare no kangae o wakarimasen", meaning : "", pattern : "V in N form", explanation : "isimleşmiş fiiller" },
{ japanese : "haya oki desu ne", meaning : "", pattern : "V in N form", explanation : "isimleşmiş fiiller" },
{ japanese : "kyou no mouke wa amari yoku nai desu", meaning : "deneme", pattern : "V in N form", explanation : "isimleşmiş fiiller" },
{ japanese : "honya e itte jisho o kaimasu", meaning : "", pattern : "Vte Vte, V", explanation : "ardarda gelen iki veya daha fazla hareketin Vte formuyla ifadesi" },
{ japanese : "kinou akkumerukezu e itte, eiga o mite, o sushi o tabete, kaimono o shimashita ", meaning : "", pattern : "Vte Vte, V", explanation : "ardarda gelen iki veya daha fazla hareketin Vte formuyla ifadesi" },
{ japanese : "konban hayaku nete, ashita goji ni okimasu", meaning : "", pattern : "Vte Vte, V", explanation : "ardarda gelen iki veya daha fazla hareketin Vte formuyla ifadesi" },
{ japanese : "maiban ni jikan gurai nihongo o benkyou shite kara, nemasu", meaning : "", pattern : "Vte kara, ...", explanation : "zaman veya sıra bakımından bir şeyi yaptıktan sonra diğer hareketi ifade etmek" },
{ japanese : "kinou eiga o mite kara, depaato de kaimono o shimashita", meaning : "", pattern : "Vte kara, ...", explanation : "zaman veya sıra bakımından bir şeyi yaptıktan sonra diğer hareketi ifade etmek" },
{ japanese : "ashita tomodachi ni atte kara, issho ni toshokan e ikimasu", meaning : "", pattern : "Vte kara, ...", explanation : "zaman veya sıra bakımından bir şeyi yaptıktan sonra diğer hareketi ifade etmek" },
{ japanese : "nihongo o naratte kara nihon e ikimasu", meaning : "", pattern : "Vte kara, ...", explanation : "zaman veya sıra bakımından bir şeyi yaptıktan sonra diğer hareketi ifade etmek" },
{ japanese : "nichiyoubi ni wa hon o yonda ri, terebi o mita ri shimasu", meaning : "", pattern : "Vta ri Vta ri Vta ri + shimasu", explanation : "farklı veya belirsiz sayıdaki olay ve hareketlerin bir zaman aralığında sırasız yapılması ifadesi" },
{ japanese : "ano heya de karera wa shinbun o yonda ri, shukudai o shita ri, tegami o kaita ri shite imasu", meaning : "", pattern : "Vta ri Vta ri Vta ri + shimasu", explanation : "farklı veya belirsiz sayıdaki olay ve hareketlerin bir zaman aralığında sırasız yapılması ifadesi" },
{ japanese : "asa kara ban made ame ga futta ri, yanda ri shimashita", meaning : "", pattern : "Vta ri Vta ri Vta ri + shimasu", explanation : "farklı veya belirsiz sayıdaki olay ve hareketlerin bir zaman aralığında sırasız yapılması ifadesi" },
{ japanese : "henna hito ga ie no mae o itta ri, kita ri shite imasu", meaning : "", pattern : "Vta ri Vta ri Vta ri + shimasu", explanation : "farklı veya belirsiz sayıdaki olay ve hareketlerin bir zaman aralığında sırasız yapılması ifadesi" },
{ japanese : "gareria e itte, tomodachi ni atta ri, kaimono o shita ri, eiga o mita ri shite, yoru ie ni kaerimashita", meaning : "", pattern : "Vta ri Vta ri Vta ri + shimasu", explanation : "farklı veya belirsiz sayıdaki olay ve hareketlerin bir zaman aralığında sırasız yapılması ifadesi" },
{ japanese : "desu * da / de aru", meaning : "", pattern : "Polite vs Plain", explanation : "nazik vs genel ifade şekilleri" },
{ japanese : "de wa arimasen * de wa nai", meaning : "", pattern : "Polite vs Plain", explanation : "nazik vs genel ifade şekilleri" },
{ japanese : "deshita * datta", meaning : "", pattern : "Polite vs Plain", explanation : "nazik vs genel ifade şekilleri" },
{ japanese : "de wa arimasen deshita * de wa nakatta", meaning : "", pattern : "Polite vs Plain", explanation : "nazik vs genel ifade şekilleri" },
{ japanese : "deshyou * darou", meaning : "", pattern : "Polite vs Plain", explanation : "nazik vs genel ifade şekilleri" },
{ japanese : "yasashii desu * yasashii", meaning : "", pattern : "Polite vs Plain", explanation : "nazik vs genel ifade şekilleri" },
{ japanese : "yasashiku nai desu / yasashiku arimasen * yasashiku nai ", meaning : "", pattern : "Polite vs Plain", explanation : "nazik vs genel ifade şekilleri" },
{ japanese : "yasashikatta desu * yasashi katta", meaning : "", pattern : "Polite vs Plain", explanation : "nazik vs genel ifade şekilleri" },
{ japanese : "yasashiku nakatta desu / yasashiku arimasen deshita * yasashiku nakatta", meaning : "", pattern : "Polite vs Plain", explanation : "nazik vs genel ifade şekilleri" },
{ japanese : "shizuka desu * shizuka da / shizuka de aru", meaning : "", pattern : "Polite vs Plain", explanation : "nazik vs genel ifade şekilleri" },
{ japanese : "shizuka de wa arimasen * shizuka de wa nai", meaning : "", pattern : "Polite vs Plain", explanation : "nazik vs genel ifade şekilleri" },
{ japanese : "shizuka deshita * shizuka datta", meaning : "", pattern : "Polite vs Plain", explanation : "nazik vs genel ifade şekilleri" },
{ japanese : "shizuka de wa nakatta desu  / shizuka de wa arimasen deshita * shizuka de wa nakatta", meaning : "", pattern : "Polite vs Plain", explanation : "nazik vs genel ifade şekilleri" },
{ japanese : "kaki masu * kaku", meaning : "", pattern : "Polite vs Plain", explanation : "nazik vs genel ifade şekilleri" },
{ japanese : "kaki masen * kaka nai", meaning : "", pattern : "Polite vs Plain", explanation : "nazik vs genel ifade şekilleri" },
{ japanese : "kaki mashita * kai ta", meaning : "", pattern : "Polite vs Plain", explanation : "nazik vs genel ifade şekilleri" },
{ japanese : "kakimasen deshita * kaka nakatta", meaning : "", pattern : "Polite vs Plain", explanation : "nazik vs genel ifade şekilleri" },
{ japanese : "oshie masu * oshie ru", meaning : "", pattern : "Polite vs Plain", explanation : "nazik vs genel ifade şekilleri" },
{ japanese : "oshie masen * oshie nai", meaning : "", pattern : "Polite vs Plain", explanation : "nazik vs genel ifade şekilleri" },
{ japanese : "oshie mashita * oshie ta", meaning : "", pattern : "Polite vs Plain", explanation : "nazik vs genel ifade şekilleri" },
{ japanese : "oshie masen deshita * oshie nakatta", meaning : "", pattern : "Polite vs Plain", explanation : "nazik vs genel ifade şekilleri" },
{ japanese : "ki masu * ku ru", meaning : "", pattern : "Polite vs Plain", explanation : "nazik vs genel ifade şekilleri" },
{ japanese : "ki masen * ko nai", meaning : "", pattern : "Polite vs Plain", explanation : "nazik vs genel ifade şekilleri" },
{ japanese : "ki mashita * ki ta", meaning : "", pattern : "Polite vs Plain", explanation : "nazik vs genel ifade şekilleri" },
{ japanese : "ki masen deshita * ko nakatta", meaning : "", pattern : "Polite vs Plain", explanation : "nazik vs genel ifade şekilleri" },
{ japanese : "shi masu * su ru", meaning : "", pattern : "Polite vs Plain", explanation : "nazik vs genel ifade şekilleri" },
{ japanese : "shi masen * shi nai", meaning : "", pattern : "Polite vs Plain", explanation : "nazik vs genel ifade şekilleri" },
{ japanese : "shi mashita * shi ta", meaning : "", pattern : "Polite vs Plain", explanation : "nazik vs genel ifade şekilleri" },
{ japanese : "shi masen deshita * shi nakatta", meaning : "", pattern : "Polite vs Plain", explanation : "nazik vs genel ifade şekilleri" },
{ japanese : "kore wa hana desu * kore wa hana da", meaning : "", pattern : "Polite vs Plain", explanation : "nazik vs genel ifade şekilleri" },
{ japanese : "sensei, koko e suwari masen ka * tanakasan, koko e suwara nai ka", meaning : "", pattern : "Polite vs Plain", explanation : "nazik vs genel ifade şekilleri" },
{ japanese : "kinou toshokan e itte, nihongo no hon o saga shimashita * kinou toshokan e itte, nihongo no hon o saga shita", meaning : "", pattern : "Polite vs Plain", explanation : "nazik vs genel ifade şekilleri" },
{ japanese : "kono kusuri o mainichi nomimasu * byouki ni natte kara, mainichi kusuri o nomu", meaning : "", pattern : "Polite vs Plain", explanation : "nazik vs genel ifade şekilleri" },
{ japanese : "kinou no shigoto wa muzukashiku nakatta desu * kinou no shigoto wa muzukashiku nakatta", meaning : "", pattern : "Polite vs Plain", explanation : "nazik vs genel ifade şekilleri" },
{ japanese : "kono kuruma wa totemo benri desu * kono kuruma wa totemo benri da", meaning : "", pattern : "Polite vs Plain", explanation : "nazik vs genel ifade şekilleri" },
{ japanese : "koohii o kudasai", meaning : "", pattern : "… o kudasai || Vte kudasai || V nai de kudasai", explanation : "bir şeyin veya bir eylemin yapılmasını istemek" },
{ japanese : "unten menkyoshou o kudasai", meaning : "", pattern : "… o kudasai || Vte kudasai || V nai de kudasai", explanation : "bir şeyin veya bir eylemin yapılmasını istemek" },
{ japanese : "chiizu to tamago o kudasai, koucha mo kudasai", meaning : "", pattern : "… o kudasai || Vte kudasai || V nai de kudasai", explanation : "bir şeyin veya bir eylemin yapılmasını istemek" },
{ japanese : "motto yukkuri hanashite kudasai", meaning : "", pattern : "… o kudasai || Vte kudasai || V nai de kudasai", explanation : "bir şeyin veya bir eylemin yapılmasını istemek" },
{ japanese : "hiragana de kaite kudasai", meaning : "", pattern : "… o kudasai || Vte kudasai || V nai de kudasai", explanation : "bir şeyin veya bir eylemin yapılmasını istemek" },
{ japanese : "ashita watashi no ie e kite kudasai", meaning : "", pattern : "… o kudasai || Vte kudasai || V nai de kudasai", explanation : "bir şeyin veya bir eylemin yapılmasını istemek" },
{ japanese : "osake o nomanai de kudasai", meaning : "", pattern : "… o kudasai || Vte kudasai || V nai de kudasai", explanation : "bir şeyin veya bir eylemin yapılmasını istemek" },
{ japanese : "torukogo de hanasanai de kudasai", meaning : "", pattern : "… o kudasai || Vte kudasai || V nai de kudasai", explanation : "bir şeyin veya bir eylemin yapılmasını istemek" },
{ japanese : "yoru osoku gitaa o hikanai de kudasai", meaning : "", pattern : "… o kudasai || Vte kudasai || V nai de kudasai", explanation : "bir şeyin veya bir eylemin yapılmasını istemek" },
{ japanese : "mou romaji de kakanai de kudasai. hiragana de kaite kudasai", meaning : "", pattern : "… o kudasai || Vte kudasai || V nai de kudasai", explanation : "bir şeyin veya bir eylemin yapılmasını istemek" },
{ japanese : "koko de tabako o sutte wa ikemasen", meaning : "", pattern : "Vte wa ikemasen", explanation : "yasak, olmaz ifadesi" },
{ japanese : "romaji de kaite wa ikemasen", meaning : "", pattern : "Vte wa ikemasen", explanation : "yasak, olmaz ifadesi" },
{ japanese : "asa osoku okite wa ikemasen", meaning : "", pattern : "Vte wa ikemasen", explanation : "yasak, olmaz ifadesi" },
{ japanese : "koko de tabako o sutte mo ii desu ka / hai, sutte mo ii desu || iie, sutte wa ikemasen", meaning : "", pattern : "V mo ii desu", explanation : "izin, yaparsan da olur ifadesi" },
{ japanese : "toshokan e itte benkyou shite mo ii desu ka", meaning : "", pattern : "V mo ii desu", explanation : "izin, yaparsan da olur ifadesi" },
{ japanese : "shukudai o shite kara, terebi o mite mo ii desu", meaning : "", pattern : "V mo ii desu", explanation : "izin, yaparsan da olur ifadesi" },
{ japanese : "anata no keitai denwa o tsukatte mo ii desu ka", meaning : "", pattern : "V mo ii desu", explanation : "izin, yaparsan da olur ifadesi" },
{ japanese : "sensei ashita gakkou e kite mo ii desu ka / iie, kona kute mo ii desu. ie de benkyou shite kudasai", meaning : "", pattern : "Vnai => Vna kute mo ii desu", explanation : "izin, yapmazsan da olur ifadesi" },
{ japanese : "kono jisho wa amari yokunai desu. kawana kute mo ii desu ka / hai, kawana kute mo ii desu || iie, katte kudasai", meaning : "", pattern : "Vnai => Vna kute mo ii desu", explanation : "izin, yapmazsan da olur ifadesi" },
{ japanese : "kaerana kereba narimasen", meaning : "", pattern : "Vnai => Vna kereba narimasen", explanation : "zorunluluk || yükümlülük || vazife , yapmazsan olmaz ifadesi" },
{ japanese : "maiasa roku ji han ni okina kereba narimasen", meaning : "", pattern : "Vnai => Vna kereba narimasen", explanation : "zorunluluk || yükümlülük || vazife , yapmazsan olmaz ifadesi" },
{ japanese : "nihongo ono atarashii kotoba o oboena kereba narimasen", meaning : "", pattern : "Vnai => Vna kereba narimasen", explanation : "zorunluluk || yükümlülük || vazife , yapmazsan olmaz ifadesi" },
{ japanese : "hiragana to katagana o hayaku kakana kereba narimasen deshita", meaning : "", pattern : "Vnai => Vna kereba narimasen", explanation : "zorunluluk || yükümlülük || vazife , yapmazsan olmaz ifadesi" },
{ japanese : "kono kusuri o nomana kereba narimasen", meaning : "", pattern : "Vnai => Vna kereba narimasen", explanation : "zorunluluk || yükümlülük || vazife , yapmazsan olmaz ifadesi" },
{ japanese : "kanji de kakana kereba narimasen ka / iie, kakana kute mo ii desu. hiragana de kaite kudasai", meaning : "", pattern : "Vnai => Vna kereba narimasen", explanation : "zorunluluk || yükümlülük || vazife , yapmazsan olmaz ifadesi" },
{ japanese : "eigo de hanasana kereba narimasen ka / iie, hanasana kute mo ii desu. nihongo ka torukogo de hanashite kudasai", meaning : "", pattern : "Vnai => Vna kereba narimasen", explanation : "zorunluluk || yükümlülük || vazife , yapmazsan olmaz ifadesi" },
{ japanese : "senseni ni awana kute wa ikemasen", meaning : "", pattern : "Vnai => Vna kute wa ikemasen", explanation : "…mamazlık olmaz, …mamazlık etmemeli derken" },
{ japanese : "kodomotachi wa miruku o nomana kute wa ikemasen", meaning : "", pattern : "Vnai => Vna kute wa ikemasen", explanation : "…mamazlık olmaz, …mamazlık etmemeli derken" },
{ japanese : "repooto o kakana kute wa ikemasen", meaning : "", pattern : "Vnai => Vna kute wa ikemasen", explanation : "…mamazlık olmaz, …mamazlık etmemeli derken" },
{ japanese : "denwa o kakana kute wa ikemasen", meaning : "", pattern : "Vnai => Vna kute wa ikemasen", explanation : "…mamazlık olmaz, …mamazlık etmemeli derken" },
{ japanese : "mainichi nihongo de hanashita hou ga ii desu", meaning : "", pattern : "Vta + hou ga ii desu || Vnai + hou ga ii desu", explanation : "tavsiye || öğüt || nasihat verirken ..san daha iyi olur || …masan daha iyi olur ifadesi" },
{ japanese : "byouin de tabako o suwanai hou ga ii desu", meaning : "", pattern : "Vta + hou ga ii desu || Vnai + hou ga ii desu", explanation : "tavsiye || öğüt || nasihat verirken ..san daha iyi olur || …masan daha iyi olur ifadesi" },
{ japanese : "kenkou no tameni tabako o yameta hou ga ii desu", meaning : "", pattern : "Vta + hou ga ii desu || Vnai + hou ga ii desu", explanation : "tavsiye || öğüt || nasihat verirken ..san daha iyi olur || …masan daha iyi olur ifadesi" },
{ japanese : "arukooru o yameta hou ga ii desu ka / hai, sono hou ga ii desu || hai, yameta hou ga ii desu", meaning : "", pattern : "Vta + hou ga ii desu || Vnai + hou ga ii desu", explanation : "tavsiye || öğüt || nasihat verirken ..san daha iyi olur || …masan daha iyi olur ifadesi" },
{ japanese : "sonna ni koohii o nomanai hou ga ii desu || cha o nonda hou ga ii desu", meaning : "", pattern : "Vta + hou ga ii desu || Vnai + hou ga ii desu", explanation : "tavsiye || öğüt || nasihat verirken ..san daha iyi olur || …masan daha iyi olur ifadesi" },
{ japanese : "nihongo o romaji de benkyou shinai hou ga ii desu. hiragana de benkyou shite kudasai", meaning : "", pattern : "Vta + hou ga ii desu || Vnai + hou ga ii desu", explanation : "tavsiye || öğüt || nasihat verirken ..san daha iyi olur || …masan daha iyi olur ifadesi" },
{ japanese : "ashita wa ooame desu. kaisha e kuruma de ikanai hou ga ii desu. chikatetsu de itta hou ga ii desu.", meaning : "", pattern : "Vta + hou ga ii desu || Vnai + hou ga ii desu", explanation : "tavsiye || öğüt || nasihat verirken ..san daha iyi olur || …masan daha iyi olur ifadesi" },
{ japanese : "nihongo de hanashi nasai", meaning : "", pattern : "Vstem nasai", explanation : "nazik emir kipi" },
{ japanese : "koko ni namae o kaki nasai", meaning : "", pattern : "Vstem nasai", explanation : "nazik emir kipi" },
{ japanese : "hayaku oki nasai", meaning : "", pattern : "Vstem nasai", explanation : "nazik emir kipi" },
{ japanese : "sono heya de machi nasai", meaning : "", pattern : "Vstem nasai", explanation : "nazik emir kipi" },
{ japanese : "kocchi e ki nasai", meaning : "", pattern : "Vstem nasai", explanation : "nazik emir kipi" },
{ japanese : "sono toki watashi wa mada go sai deshita", meaning : "", pattern : "Kono toki || N no toki || Adj-na toki || Adj-datta toki || Adj-i toki || Adj-katta toki || Vd toki || Vta + toki", explanation : "bir şey olduğu zaman, şu oldu || olurdu vs gibi zamansal cümlelerin ifadesi" },
{ japanese : "sono toki anata wa nani o shite imashita ka", meaning : "", pattern : "Kono toki || N no toki || Adj-na toki || Adj-datta toki || Adj-i toki || Adj-katta toki || Vd toki || Vta + toki", explanation : "bir şey olduğu zaman, şu oldu || olurdu vs gibi zamansal cümlelerin ifadesi" },
{ japanese : "daigakusei no toki, isutanburu ni sunde imashita", meaning : "", pattern : "Kono toki || N no toki || Adj-na toki || Adj-datta toki || Adj-i toki || Adj-katta toki || Vd toki || Vta + toki", explanation : "bir şey olduğu zaman, şu oldu || olurdu vs gibi zamansal cümlelerin ifadesi" },
{ japanese : "byouki no toki, …", meaning : "", pattern : "Kono toki || N no toki || Adj-na toki || Adj-datta toki || Adj-i toki || Adj-katta toki || Vd toki || Vta + toki", explanation : "bir şey olduğu zaman, şu oldu || olurdu vs gibi zamansal cümlelerin ifadesi" },
{ japanese : "shiken no toki, …", meaning : "", pattern : "Kono toki || N no toki || Adj-na toki || Adj-datta toki || Adj-i toki || Adj-katta toki || Vd toki || Vta + toki", explanation : "bir şey olduğu zaman, şu oldu || olurdu vs gibi zamansal cümlelerin ifadesi" },
{ japanese : "kodomo no toki, …", meaning : "", pattern : "Kono toki || N no toki || Adj-na toki || Adj-datta toki || Adj-i toki || Adj-katta toki || Vd toki || Vta + toki", explanation : "bir şey olduğu zaman, şu oldu || olurdu vs gibi zamansal cümlelerin ifadesi" },
{ japanese : "hima na toki, yoku sakkaa o shimashita", meaning : "", pattern : "Kono toki || N no toki || Adj-na toki || Adj-datta toki || Adj-i toki || Adj-katta toki || Vd toki || Vta + toki", explanation : "bir şey olduğu zaman, şu oldu || olurdu vs gibi zamansal cümlelerin ifadesi" },
{ japanese : "umi ga mada kirei datta toki, yoku oyogi ni ikimashita", meaning : "", pattern : "Kono toki || N no toki || Adj-na toki || Adj-datta toki || Adj-i toki || Adj-katta toki || Vd toki || Vta + toki", explanation : "bir şey olduğu zaman, şu oldu || olurdu vs gibi zamansal cümlelerin ifadesi" },
{ japanese : "tenki ga ii toki, watashi wa kouen o sanpo shimasu", meaning : "", pattern : "Kono toki || N no toki || Adj-na toki || Adj-datta toki || Adj-i toki || Adj-katta toki || Vd toki || Vta + toki", explanation : "bir şey olduğu zaman, şu oldu || olurdu vs gibi zamansal cümlelerin ifadesi" },
{ japanese : "samui toki kono sutoobu (stove) o tsukatte kudasai", meaning : "", pattern : "Kono toki || N no toki || Adj-na toki || Adj-datta toki || Adj-i toki || Adj-katta toki || Vd toki || Vta + toki", explanation : "bir şey olduğu zaman, şu oldu || olurdu vs gibi zamansal cümlelerin ifadesi" },
{ japanese : "senshuu totemo samukatta toki, kaze o hikimashita", meaning : "", pattern : "Kono toki || N no toki || Adj-na toki || Adj-datta toki || Adj-i toki || Adj-katta toki || Vd toki || Vta + toki", explanation : "bir şey olduğu zaman, şu oldu || olurdu vs gibi zamansal cümlelerin ifadesi" },
{ japanese : "unten suru toki, megane o kakemasu", meaning : "", pattern : "Kono toki || N no toki || Adj-na toki || Adj-datta toki || Adj-i toki || Adj-katta toki || Vd toki || Vta + toki", explanation : "bir şey olduğu zaman, şu oldu || olurdu vs gibi zamansal cümlelerin ifadesi" },
{ japanese : "gohan o taberu toki, nihonjin wa hashi o tsukaimasu", meaning : "", pattern : "Kono toki || N no toki || Adj-na toki || Adj-datta toki || Adj-i toki || Adj-katta toki || Vd toki || Vta + toki", explanation : "bir şey olduğu zaman, şu oldu || olurdu vs gibi zamansal cümlelerin ifadesi" },
{ japanese : "watashi wa denwa o kaketa toki, kare wa ie ni imasen deshita", meaning : "", pattern : "Kono toki || N no toki || Adj-na toki || Adj-datta toki || Adj-i toki || Adj-katta toki || Vd toki || Vta + toki", explanation : "bir şey olduğu zaman, şu oldu || olurdu vs gibi zamansal cümlelerin ifadesi" },
{ japanese : "nihon e itta toki, kaimono o kaimashita", meaning : "", pattern : "Kono toki || N no toki || Adj-na toki || Adj-datta toki || Adj-i toki || Adj-katta toki || Vd toki || Vta + toki", explanation : "bir şey olduğu zaman, şu oldu || olurdu vs gibi zamansal cümlelerin ifadesi" },
{ japanese : "unten shite iru toki, nihongo no teepu (tape) o kikimasu", meaning : "", pattern : "Kono toki || N no toki || Adj-na toki || Adj-datta toki || Adj-i toki || Adj-katta toki || Vd toki || Vta + toki", explanation : "bir şey olduğu zaman, şu oldu || olurdu vs gibi zamansal cümlelerin ifadesi" },
{ japanese : "akai ranpu (lamp) ga tsuite iru toki, kono heya ni hairanai de kudasai. ranpu ga kiete iru toki wa, haitte mo ii desu", meaning : "", pattern : "Kono toki || N no toki || Adj-na toki || Adj-datta toki || Adj-i toki || Adj-katta toki || Vd toki || Vta + toki", explanation : "bir şey olduğu zaman, şu oldu || olurdu vs gibi zamansal cümlelerin ifadesi" },
{ japanese : "asagohan o tabete ita toki, jishin ga arimashita", meaning : "", pattern : "Kono toki || N no toki || Adj-na toki || Adj-datta toki || Adj-i toki || Adj-katta toki || Vd toki || Vta + toki", explanation : "bir şey olduğu zaman, şu oldu || olurdu vs gibi zamansal cümlelerin ifadesi" },
{ japanese : "yasumi no mae ni shiken ga arimasu", meaning : "", pattern : "N no mae (ni) || Vd mae (ni)", explanation : "…önce" },
{ japanese : "eki no mae ni ginkou ga arimasu", meaning : "", pattern : "N no mae (ni) || Vd mae (ni)", explanation : "…önce" },
{ japanese : "jyugyou no mae ni toshokan e ikimasu", meaning : "", pattern : "N no mae (ni) || Vd mae (ni)", explanation : "…önce" },
{ japanese : "sensei ni au mae ni puresento o kaimashita", meaning : "", pattern : "N no mae (ni) || Vd mae (ni)", explanation : "…önce" },
{ japanese : "sono eiga o mi ni iku mae ni, kippu o kaimashita", meaning : "", pattern : "N no mae (ni) || Vd mae (ni)", explanation : "…önce" },
{ japanese : "kono jyugyou no ato ryou ni kaerimasu", meaning : "", pattern : "N no ato (de) || Vta ato (de)", explanation : "…sonra" },
{ japanese : "daigaku o sotsugyou shita ato nihon e ikimasu", meaning : "", pattern : "N no ato (de) || Vta ato (de)", explanation : "…sonra" },
{ japanese : "ato de hanashimashou", meaning : "", pattern : "N no ato (de) || Vta ato (de)", explanation : "…sonra" },
{ japanese : "anata ga kaimono shite iru aida, watashi wa koko de matte imasu", meaning : "", pattern : "N no aida (ni) || Vte iru aida (ni)", explanation : "…süresince || ...esnasında || ...iken" },
{ japanese : "kare ga kaimono shite iru aida, watashi wa koko de matte imashita", meaning : "", pattern : "N no aida (ni) || Vte iru aida (ni)", explanation : "…süresince || ...esnasında || ...iken" },
{ japanese : "yasumi no aida ni antaria (antalya) e ikimasu", meaning : "", pattern : "N no aida (ni) || Vte iru aida (ni)", explanation : "…süresince || ...esnasında || ...iken" },
{ japanese : "yasumi no aida ni nihongo o benkyou shimasu", meaning : "", pattern : "N no aida (ni) || Vte iru aida (ni)", explanation : "…süresince || ...esnasında || ...iken" },
{ japanese : "nihon ni ite iru aida ni, atarashii kotoba o takusan oboemashita", meaning : "", pattern : "N no aida (ni) || Vte iru aida (ni)", explanation : "…süresince || ...esnasında || ...iken" },
{ japanese : "ongaku o kiki nagara benkyou shimasu", meaning : "", pattern : "Vstem nagara V", explanation : "iki eylemi bir arada yaparken, ikinci eylemi vurgulamak" },
{ japanese : "mina de uta o utai nagara yama ni noborimashita", meaning : "", pattern : "Vstem nagara V", explanation : "iki eylemi bir arada yaparken, ikinci eylemi vurgulamak" },
{ japanese : "kono mama tsutsunde kudasai", meaning : "", pattern : "Kono mama || N no mama || Adj-na mama || Ajd-i mama || Vta mama", explanation : "durum bildirme, … durumda, o halde, o vaziyette" },
{ japanese : "ichi dooru (dollar) wa hayku juu en no mama", meaning : "", pattern : "Kono mama || N no mama || Adj-na mama || Ajd-i mama || Vta mama", explanation : "durum bildirme, … durumda, o halde, o vaziyette" },
{ japanese : "toshokan de shizukana mama benkyou shita hou ga ii desu", meaning : "", pattern : "Kono mama || N no mama || Adj-na mama || Ajd-i mama || Vta mama", explanation : "durum bildirme, … durumda, o halde, o vaziyette" },
{ japanese : "chichi no kuruma wa koshou shita mama", meaning : "", pattern : "Kono mama || N no mama || Adj-na mama || Ajd-i mama || Vta mama", explanation : "durum bildirme, … durumda, o halde, o vaziyette" },
{ japanese : "kutsu o haita mama haitte wa ikemasen", meaning : "", pattern : "Kono mama || N no mama || Adj-na mama || Ajd-i mama || Vta mama", explanation : "durum bildirme, … durumda, o halde, o vaziyette" },
{ japanese : "tatta mama koohii o nomimashita", meaning : "", pattern : "Kono mama || N no mama || Adj-na mama || Ajd-i mama || Vta mama", explanation : "durum bildirme, … durumda, o halde, o vaziyette" },
{ japanese : "mado o aketa mama ie o demashita", meaning : "", pattern : "Kono mama || N no mama || Adj-na mama || Ajd-i mama || Vta mama", explanation : "durum bildirme, … durumda, o halde, o vaziyette" },
{ japanese : "tsumetai mama de ii desu", meaning : "", pattern : "Kono mama || N no mama || Adj-na mama || Ajd-i mama || Vta mama", explanation : "durum bildirme, … durumda, o halde, o vaziyette" },
{ japanese : "honya e itte, nihongo no jisho o kaimasu", meaning : "", pattern : "Vte, … || Adj-i kute, … || Adj-na de, … || N de, …", explanation : "fiil, sıfat ve isim cümlelerini birleştirmek" },
{ japanese : "ano kuruma wa atarashi kute, takai desu", meaning : "", pattern : "Vte, … || Adj-i kute, … || Adj-na de, … || N de, …", explanation : "fiil, sıfat ve isim cümlelerini birleştirmek" },
{ japanese : "ano mura wa shizuka de, ii tokoro desu", meaning : "", pattern : "Vte, … || Adj-i kute, … || Adj-na de, … || N de, …", explanation : "fiil, sıfat ve isim cümlelerini birleştirmek" },
{ japanese : "sono hoteru wa kirei de, saabisu (servis) mo yokatta desı", meaning : "", pattern : "Vte, … || Adj-i kute, … || Adj-na de, … || N de, …", explanation : "fiil, sıfat ve isim cümlelerini birleştirmek" },
{ japanese : "kyouto wa furui machi de, otera ga takusan arimasu", meaning : "", pattern : "Vte, … || Adj-i kute, … || Adj-na de, … || N de, …", explanation : "fiil, sıfat ve isim cümlelerini birleştirmek" },
{ japanese : "nihonjin wa taberu toki mae ni 'itadakimasu' to iimasu", meaning : "", pattern : "Subject … to iimasu || Subject … to iimashita || Subject … to itte imasu || Subject … to itte imashita", explanation : "başa birilerinin sözlerini aktarma şekli, bu formda iu fiilinin yanında kiku, kotaeru, hanasu, kaku gibi fiilleri de kullanabiliriz" },
{ japanese : "arisan wa natsuyasumi ni antaria e iku to iimashita", meaning : "", pattern : "Subject … to iimasu || Subject … to iimashita || Subject … to itte imasu || Subject … to itte imashita", explanation : "başa birilerinin sözlerini aktarma şekli, bu formda iu fiilinin yanında kiku, kotaeru, hanasu, kaku gibi fiilleri de kullanabiliriz" },
{ japanese : "ayşesan wa raishuu kuru to itte imasu", meaning : "", pattern : "Subject … to iimasu || Subject … to iimashita || Subject … to itte imasu || Subject … to itte imashita", explanation : "başa birilerinin sözlerini aktarma şekli, bu formda iu fiilinin yanında kiku, kotaeru, hanasu, kaku gibi fiilleri de kullanabiliriz" },
{ japanese : "muratsan wa byouin e iku to itte imashita", meaning : "", pattern : "Subject … to iimasu || Subject … to iimashita || Subject … to itte imasu || Subject … to itte imashita", explanation : "başa birilerinin sözlerini aktarma şekli, bu formda iu fiilinin yanında kiku, kotaeru, hanasu, kaku gibi fiilleri de kullanabiliriz" },
{ japanese : "kare wa nan to iimashita ka / kare wa ashita shiken ga aru to iimashita || kare wa kinou shiken ga atta to iimashita || kare wa ashita shiken ga nai to iimashita", meaning : "", pattern : "Subject … to iimasu || Subject … to iimashita || Subject … to itte imasu || Subject … to itte imashita", explanation : "başa birilerinin sözlerini aktarma şekli, bu formda iu fiilinin yanında kiku, kotaeru, hanasu, kaku gibi fiilleri de kullanabiliriz" },
{ japanese : "ayşesan wa 'itsu antaria e kimashita ka' to (alisan ni) kikimashita", meaning : "", pattern : "Subject … to iimasu || Subject … to iimashita || Subject … to itte imasu || Subject … to itte imashita", explanation : "başa birilerinin sözlerini aktarma şekli, bu formda iu fiilinin yanında kiku, kotaeru, hanasu, kaku gibi fiilleri de kullanabiliriz" },
{ japanese : "kanojo wa 'mou watasgi ni awanai' to (kare ni tegami o) kakimashita", meaning : "", pattern : "Subject … to iimasu || Subject … to iimashita || Subject … to itte imasu || Subject … to itte imashita", explanation : "başa birilerinin sözlerini aktarma şekli, bu formda iu fiilinin yanında kiku, kotaeru, hanasu, kaku gibi fiilleri de kullanabiliriz" },
{ japanese : "alisan wa ima heya de benkyou shite iru to omoimasu", meaning : "", pattern : "Vd to omoimasu || Vta to omoimasu || Adj-i to omoimasu || Adj-i => Adj-katta to omoimasu || Adj-na => Adj da to omoimasu || Adj-na => Adj datta to omoimasu || N da to omoimasu || N datta to omoimasu", explanation : "birinin düşüncesini || tahminini ifade etmesi" },
{ japanese : "kare wa kyou kuru to omoimasu", meaning : "", pattern : "Vd to omoimasu || Vta to omoimasu || Adj-i to omoimasu || Adj-i => Adj-katta to omoimasu || Adj-na => Adj da to omoimasu || Adj-na => Adj datta to omoimasu || N da to omoimasu || N datta to omoimasu", explanation : "birinin düşüncesini || tahminini ifade etmesi" },
{ japanese : "kare wa ashita kuru to omoimasu", meaning : "", pattern : "Vd to omoimasu || Vta to omoimasu || Adj-i to omoimasu || Adj-i => Adj-katta to omoimasu || Adj-na => Adj da to omoimasu || Adj-na => Adj datta to omoimasu || N da to omoimasu || N datta to omoimasu", explanation : "birinin düşüncesini || tahminini ifade etmesi" },
{ japanese : "kare wa kinou kita to omoimasu", meaning : "", pattern : "Vd to omoimasu || Vta to omoimasu || Adj-i to omoimasu || Adj-i => Adj-katta to omoimasu || Adj-na => Adj da to omoimasu || Adj-na => Adj datta to omoimasu || N da to omoimasu || N datta to omoimasu", explanation : "birinin düşüncesini || tahminini ifade etmesi" },
{ japanese : "hokkaidou wa mou totemo samui to omoimasu", meaning : "", pattern : "Vd to omoimasu || Vta to omoimasu || Adj-i to omoimasu || Adj-i => Adj-katta to omoimasu || Adj-na => Adj da to omoimasu || Adj-na => Adj datta to omoimasu || N da to omoimasu || N datta to omoimasu", explanation : "birinin düşüncesini || tahminini ifade etmesi" },
{ japanese : "shiken wa muzukashi katta to omoimasu", meaning : "", pattern : "Vd to omoimasu || Vta to omoimasu || Adj-i to omoimasu || Adj-i => Adj-katta to omoimasu || Adj-na => Adj da to omoimasu || Adj-na => Adj datta to omoimasu || N da to omoimasu || N datta to omoimasu", explanation : "birinin düşüncesini || tahminini ifade etmesi" },
{ japanese : "kare wa shinsetsu da to omoimasu", meaning : "", pattern : "Vd to omoimasu || Vta to omoimasu || Adj-i to omoimasu || Adj-i => Adj-katta to omoimasu || Adj-na => Adj da to omoimasu || Adj-na => Adj datta to omoimasu || N da to omoimasu || N datta to omoimasu", explanation : "birinin düşüncesini || tahminini ifade etmesi" },
{ japanese : "ano okusan wa wakai toki kirei datta to omoimasu", meaning : "", pattern : "Vd to omoimasu || Vta to omoimasu || Adj-i to omoimasu || Adj-i => Adj-katta to omoimasu || Adj-na => Adj da to omoimasu || Adj-na => Adj datta to omoimasu || N da to omoimasu || N datta to omoimasu", explanation : "birinin düşüncesini || tahminini ifade etmesi" },
{ japanese : "kare wa nihonjin da to omoimasu", meaning : "", pattern : "Vd to omoimasu || Vta to omoimasu || Adj-i to omoimasu || Adj-i => Adj-katta to omoimasu || Adj-na => Adj da to omoimasu || Adj-na => Adj datta to omoimasu || N da to omoimasu || N datta to omoimasu", explanation : "birinin düşüncesini || tahminini ifade etmesi" },
{ japanese : "kono tokei wa gosen en datta to omoimasu", meaning : "", pattern : "Vd to omoimasu || Vta to omoimasu || Adj-i to omoimasu || Adj-i => Adj-katta to omoimasu || Adj-na => Adj da to omoimasu || Adj-na => Adj datta to omoimasu || N da to omoimasu || N datta to omoimasu", explanation : "birinin düşüncesini || tahminini ifade etmesi" },
{ japanese : "hiragana to katagana wa totemo yasashii to omoimashita", meaning : "", pattern : "Vd to omoimasu || Vta to omoimasu || Adj-i to omoimasu || Adj-i => Adj-katta to omoimasu || Adj-na => Adj da to omoimasu || Adj-na => Adj datta to omoimasu || N da to omoimasu || N datta to omoimasu", explanation : "birinin düşüncesini || tahminini ifade etmesi" },
{ japanese : "nihonjin wa kore o 'kotatsu' to iimasu", meaning : "", pattern : "… to iimasu || … to iu", explanation : "bir nesnenin alandırılması" },
{ japanese : "nihonjin wa 'kiraz çiçeği' o sakura to iimasu", meaning : "", pattern : "… to iimasu || … to iu", explanation : "bir nesnenin alandırılması" },
{ japanese : "kono gakki wa koto to iimasu", meaning : "", pattern : "… to iimasu || … to iu", explanation : "bir nesnenin alandırılması" },
{ japanese : "sono hana wa nan to iimasu ka", meaning : "", pattern : "… to iimasu || … to iu", explanation : "bir nesnenin alandırılması" },
{ japanese : "papatiya' wa nihongo de nan to iimasu ka", meaning : "", pattern : "… to iimasu || … to iu", explanation : "bir nesnenin alandırılması" },
{ japanese : "kono ki wa nihongo de sugi to iimasu", meaning : "", pattern : "… to iimasu || … to iu", explanation : "bir nesnenin alandırılması" },
{ japanese : "lütfen oturun' wa nihongo de dou iimasu ka", meaning : "", pattern : "… to iimasu || … to iu", explanation : "bir nesnenin alandırılması" },
{ japanese : "koto to iu gakki", meaning : "", pattern : "… to iimasu || … to iu", explanation : "bir nesnenin alandırılması" },
{ japanese : "tanaka to iu hito", meaning : "", pattern : "… to iimasu || … to iu", explanation : "bir nesnenin alandırılması" },
{ japanese : "kaki to iu kudamono", meaning : "", pattern : "… to iimasu || … to iu", explanation : "bir nesnenin alandırılması" },
{ japanese : "yukata to iu kimono", meaning : "", pattern : "… to iimasu || … to iu", explanation : "bir nesnenin alandırılması" },
{ japanese : "kore wa nan to iu mono desu ka / o hashi desu", meaning : "", pattern : "… to iimasu || … to iu", explanation : "bir nesnenin alandırılması" },
{ japanese : "kappadokia' to iu tokoro o shitte imasu ka", meaning : "", pattern : "… to iimasu || … to iu", explanation : "bir nesnenin alandırılması" },
{ japanese : "adana de yuki ga futta to iu kiji o yomimashita", meaning : "", pattern : "… to iimasu || … to iu", explanation : "bir nesnenin alandırılması" },
{ japanese : "oosaka no taksakisan ga nakunatta to iu shirase o moraimashita", meaning : "", pattern : "… to iimasu || … to iu", explanation : "bir nesnenin alandırılması" },
{ japanese : "kanji wa zenbu de yaku yon man ji ga aru to iu koto o shitte imasu ka", meaning : "", pattern : "… to iimasu || … to iu", explanation : "bir nesnenin alandırılması" },
{ japanese : "toukyou no jinkou wa oosaka no jinkou no yori yon bai desu", meaning : "", pattern : "A wa B no … bai desu || A wa B yori …bai Adj-i or Adj-na desu || A wa B yori … bai Adj-i => Adj ku or Adj-na => Adj ni + Vmasu", explanation : "bir cismin katlara göre ifadesi" },
{ japanese : "kikouki wa shinkansen yori san bai hayai desu", meaning : "", pattern : "A wa B no … bai desu || A wa B yori …bai Adj-i or Adj-na desu || A wa B yori … bai Adj-i => Adj ku or Adj-na => Adj ni + Vmasu", explanation : "bir cismin katlara göre ifadesi" },
{ japanese : "hikouki wa shinkansen yori san bai ijyou hayaku tobimasu", meaning : "", pattern : "A wa B no … bai desu || A wa B yori …bai Adj-i or Adj-na desu || A wa B yori … bai Adj-i => Adj ku or Adj-na => Adj ni + Vmasu", explanation : "bir cismin katlara göre ifadesi" },
{ japanese : "atarashii kuruma wa mae no kuruma yori san bai gurai shizuka desu", meaning : "", pattern : "A wa B no … bai desu || A wa B yori …bai Adj-i or Adj-na desu || A wa B yori … bai Adj-i => Adj ku or Adj-na => Adj ni + Vmasu", explanation : "bir cismin katlara göre ifadesi" },
{ japanese : "kuruma no enjin (engine) o naoshita ato, kuruma wa ni bai shizuka ni narimashita", meaning : "", pattern : "A wa B no … bai desu || A wa B yori …bai Adj-i or Adj-na desu || A wa B yori … bai Adj-i => Adj ku or Adj-na => Adj ni + Vmasu", explanation : "bir cismin katlara göre ifadesi" },
{ japanese : "toruko no menseki wa nihon no menseki no yaku ni bai desu", meaning : "", pattern : "A wa B no … bai desu || A wa B yori …bai Adj-i or Adj-na desu || A wa B yori … bai Adj-i => Adj ku or Adj-na => Adj ni + Vmasu", explanation : "bir cismin katlara göre ifadesi" },
{ japanese : "san bun no ichi", meaning : "", pattern : "A bun no B", explanation : "oransal ifadeler" },
{ japanese : "jyuu bun no nana", meaning : "", pattern : "A bun no B", explanation : "oransal ifadeler" },
{ japanese : "toruko no jinkou wa nippon no jinkou no yaku ni bun no ichi desu", meaning : "", pattern : "A bun no B", explanation : "oransal ifadeler" },
{ japanese : "nippon no menseki wa furansu no menseki no yaku san bun no ni desu", meaning : "", pattern : "A bun no B", explanation : "oransal ifadeler" },
{ japanese : "kyouto wa nara yori ookii desu", meaning : "", pattern : "A wa B yori [Adj-i || Adj-na => Adj ] desu", explanation : "kıyaslama || karşılaştırma" },
{ japanese : "inaka no hito wa machi no hito yori motto shinsetsu desu", meaning : "", pattern : "A wa B yori [Adj-i || Adj-na => Adj ] desu", explanation : "kıyaslama || karşılaştırma" },
{ japanese : "kanji wa hiragana yori muzukashii desu", meaning : "", pattern : "A wa B yori [Adj-i || Adj-na => Adj ] desu", explanation : "kıyaslama || karşılaştırma" },
{ japanese : "atarashii jisho wa mae no jisho yori motto benri desu", meaning : "", pattern : "A wa B yori [Adj-i || Adj-na => Adj ] desu", explanation : "kıyaslama || karşılaştırma" },



];


const divDisplayPatterns = document.getElementById("div-display-patterns");

//const patternTitleElement = document.querySelector("pattern-title");




// FUNCTIONS



// group according to patterns

function getUniqueSetOfPatterns () {

    let mappedData = myData.map(item => item.pattern);

    let setOfMappedData = [...new Set(mappedData)];

   return setOfMappedData; // retuns an array of pattern names

}



// group according to explanations

function getUniqueSetOfExplanations () {

    let mappedData = myData.map(item => item.explanation);

    let setOfMappedData = [...new Set(mappedData)];

    return setOfMappedData; // returns an array of explanation names

}


// associate each pattern name with relevant sentences

function associatePatternsWithSentences () {

    let patterns = getUniqueSetOfPatterns();

    let arrayOfAssociatedObjects = [];

    patterns.forEach( pattern => {

        let patternObject = { pattern : "", explanation : "", japanese : [] }

        let filteredData = myData.filter(item => item.pattern === pattern);
        //let mappedData = filteredData.map(item => item.japanese);

        patternObject.pattern = pattern;
        patternObject.explanation = filteredData[0].explanation;
        patternObject.japanese = filteredData;

        arrayOfAssociatedObjects.push(patternObject)


    });

    return arrayOfAssociatedObjects;

}




function renderArrayOfAssocaitedObjects () {

    let arrayOfAssocaitedObjects = associatePatternsWithSentences();

    arrayOfAssocaitedObjects.forEach(object => {

        let patternTitleElement = document.createElement("h3");
        patternTitleElement.setAttribute("class", "pattern-title");
        patternTitleElement.textContent = object.pattern;

        let explanationElement = document.createElement("h4");
        explanationElement.setAttribute("class", "explanation-element");
        explanationElement.textContent = object.explanation ;
        explanationElement.style.display = "none";
        patternTitleElement.append(explanationElement);

        let divSentences = document.createElement("div");
        divSentences.setAttribute("class", "div-sentences");
        explanationElement.append(divSentences);


        object.japanese.forEach(item => {

            let japaneseP = document.createElement("p");
            japaneseP.setAttribute("class", "japaneseP")
            let meaningP = document.createElement("p");
            meaningP.setAttribute("class", "meaningP");
            meaningP.style.display = "none";

            japaneseP.textContent = item.japanese;
            meaningP.textContent = item.meaning;

            divSentences.append(japaneseP);
            divSentences.append(meaningP);

            divSentences.style.display = "none";



        })

    
        divDisplayPatterns.append(patternTitleElement);
        
    })


}

renderArrayOfAssocaitedObjects();



document.body.addEventListener("click", function(e) {


if (e.target.className === "pattern-title") {

    console.log(e.target.firstElementChild.style);

if (e.target.firstElementChild.style.display === "none" && e.target.firstElementChild.className === "explanation-element" ) {
        e.target.firstElementChild.style.display = "block"; 
    } else if (e.target.firstElementChild.style.display === "block") {
        e.target.firstElementChild.style.display = "none"; 
    }



if (e.target.firstElementChild.firstElementChild.style.display === "none" && e.target.firstElementChild.firstElementChild.className === "div-sentences") {

    e.target.firstElementChild.firstElementChild.style.display = "block";

} else if (e.target.firstElementChild.firstElementChild.style.display === "block") {
    e.target.firstElementChild.firstElementChild.style.display = "none";
}

}


if (e.target.className === "japaneseP") {

    if (e.target.nextElementSibling.style.display === "none" ) {
        e.target.nextElementSibling.style.display = "block";
    } else if (e.target.nextElementSibling.style.display === "block") {
        e.target.nextElementSibling.style.display = "none";
    }


} else {

    null

}

});




document.oncopy = () => {
    getSelectedText();
};



function getSelectedText () {

    let definitionScreen;

    if (window.getSelection) {  // all browsers, except IE before version 9
        var range = window.getSelection();
        var rangeToString = range.toString().trim().toLowerCase();
        var rangeToArray = rangeToString.split(" ");

        if (rangeToArray.length === 1) {
            definitionScreen = window.open(`https://jisho.org/search/${rangeToString}`,"_blank" );
            
        } else if(rangeToArray.length > 1) {
            definitionScreen = window.open(`https://translate.google.com/#view=home&op=translate&sl=ja&tl=en&text=${rangeToString}`, "_blank" ) 
          
        } else {
            console.log("no text selected");
        };
     
    };

};

