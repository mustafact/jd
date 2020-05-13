

// DATA


const myData = [

    {id : "1",  japanese : "owari wa go ji desu", meaning : "bitiş saat beşte", pattern : "V in N form", explanation : "isimleşmiş fiiller" },
    {id : "2",  japanese : "ankara iku no basu ni norimashita", meaning : "ankaraya giden otobüse bindim", pattern : "V in N form", explanation : "isimleşmiş fiiller" },
    {id : "3",  japanese : "kare no oyogi koto wa omoshiroi desu", meaning : "onun yüzme şekli çok ilginç", pattern : "V in N form", explanation : "isimleşmiş fiiller" },
    {id : "4",  japanese : "kaeri wa itsu desu ka", meaning : "dönüş ne zaman", pattern : "V in N form", explanation : "isimleşmiş fiiller" },
    {id : "5",  japanese : "kare no kangae o wakarimasen", meaning : "onun düşüncesini bilmiyorum", pattern : "V in N form", explanation : "isimleşmiş fiiller" },
    {id : "6",  japanese : "haya oki desu ne", meaning : "erken kalkalım di mi", pattern : "V in N form", explanation : "isimleşmiş fiiller" },
    {id : "7",  japanese : "kyou no mouke wa amari yoku nai desu", meaning : "bugünün kazancı pek iyi değil", pattern : "V in N form", explanation : "isimleşmiş fiiller" },
    {id : "8",  japanese : "honya e itte jisho o kaimasu", meaning : "kitapçıya gidip sözlük satın alacağım", pattern : "Vte Vte, V", explanation : "ardarda gelen iki veya daha fazla hareketin Vte formuyla ifadesi" },
    {id : "9",  japanese : "kinou akkumerukezu e itte, eiga o mite, o sushi o tabete, kaimono o shimashita ", meaning : "bugün akmerkeze gidip, film bakıp, sushi yiyip, alışveriş yaptım", pattern : "Vte Vte, V", explanation : "ardarda gelen iki veya daha fazla hareketin Vte formuyla ifadesi" },
    {id : "10",  japanese : "konban hayaku nete, ashita goji ni okimasu", meaning : "bu akşam erken yatıp, yarın saat 5te kalkacağım", pattern : "Vte Vte, V", explanation : "ardarda gelen iki veya daha fazla hareketin Vte formuyla ifadesi" },
    {id : "11",  japanese : "maiban ni jikan gurai nihongo o benkyou shite kara, nemasu", meaning : "hergün iki saat japonca çalıştıktan sonra, uyurum", pattern : "Vte kara, ...", explanation : "zaman veya sıra bakımından bir şeyi yaptıktan sonra diğer hareketi ifade etmek" },
    {id : "12",  japanese : "kinou eiga o mite kara, depaato de kaimono o shimashita", meaning : "dün film izledikten sonra, departmanda alışveriş yaptım", pattern : "Vte kara, ...", explanation : "zaman veya sıra bakımından bir şeyi yaptıktan sonra diğer hareketi ifade etmek" },
    {id : "13",  japanese : "ashita tomodachi ni atte kara, issho ni toshokan e ikimasu", meaning : "dün arkadaşla buluştuktan sonra, birlikte kütüphaneye gittik", pattern : "Vte kara, ...", explanation : "zaman veya sıra bakımından bir şeyi yaptıktan sonra diğer hareketi ifade etmek" },
    {id : "14",  japanese : "nihongo o naratte kara nihon e ikimasu", meaning : "japonca öğrendikten sonra japonyaya gideceğim", pattern : "Vte kara, ...", explanation : "zaman veya sıra bakımından bir şeyi yaptıktan sonra diğer hareketi ifade etmek" },
    {id : "15",  japanese : "nichiyoubi ni wa hon o yonda ri, terebi o mita ri shimasu", meaning : "Pazar günleri kitap okur, tv izlerim", pattern : "Vta ri Vta ri Vta ri + shimasu", explanation : "farklı veya belirsiz sayıdaki olay ve hareketlerin bir zaman aralığında sırasız yapılması ifadesi" },
    {id : "16",  japanese : "ano heya de karera wa shinbun o yonda ri, shukudai o shita ri, tegami o kaita ri shite imasu", meaning : "o odada onlar gazete okur, ödev yapar, mektup yazarlar", pattern : "Vta ri Vta ri Vta ri + shimasu", explanation : "farklı veya belirsiz sayıdaki olay ve hareketlerin bir zaman aralığında sırasız yapılması ifadesi" },
    {id : "17",  japanese : "asa kara ban made ame ga futta ri, yanda ri shimashita", meaning : "sabahtan akşama kadar yağmur yağdı durdu", pattern : "Vta ri Vta ri Vta ri + shimasu", explanation : "farklı veya belirsiz sayıdaki olay ve hareketlerin bir zaman aralığında sırasız yapılması ifadesi" },
    {id : "18",  japanese : "henna hito ga ie no mae o itta ri, kita ri shite imasu", meaning : "garip biri evin önünde gidip geliyor", pattern : "Vta ri Vta ri Vta ri + shimasu", explanation : "farklı veya belirsiz sayıdaki olay ve hareketlerin bir zaman aralığında sırasız yapılması ifadesi" },
    {id : "19",  japanese : "gareria e itte, tomodachi ni atta ri, kaimono o shita ri, eiga o mita ri shite, yoru ie ni kaerimashita", meaning : "galleriaya gidip arkadaşlarla buluma, alışveriş yapma, film izleme yapıp, akşam eve döndüm.", pattern : "Vta ri Vta ri Vta ri + shimasu", explanation : "farklı veya belirsiz sayıdaki olay ve hareketlerin bir zaman aralığında sırasız yapılması ifadesi" },
    {id : "20",  japanese : "desu * da / de aru", meaning : "", pattern : "Polite vs Plain", explanation : "nazik vs genel ifade şekilleri" },
    {id : "21",  japanese : "de wa arimasen * de wa nai", meaning : "", pattern : "Polite vs Plain", explanation : "nazik vs genel ifade şekilleri" },
    {id : "22",  japanese : "deshita * datta", meaning : "", pattern : "Polite vs Plain", explanation : "nazik vs genel ifade şekilleri" },
    {id : "23",  japanese : "de wa arimasen deshita * de wa nakatta", meaning : "", pattern : "Polite vs Plain", explanation : "nazik vs genel ifade şekilleri" },
    {id : "24",  japanese : "deshyou * darou", meaning : "", pattern : "Polite vs Plain", explanation : "nazik vs genel ifade şekilleri" },
    {id : "25",  japanese : "yasashii desu * yasashii", meaning : "", pattern : "Polite vs Plain", explanation : "nazik vs genel ifade şekilleri" },
    {id : "26",  japanese : "yasashiku nai desu / yasashiku arimasen * yasashiku nai ", meaning : "", pattern : "Polite vs Plain", explanation : "nazik vs genel ifade şekilleri" },
    {id : "27",  japanese : "yasashikatta desu * yasashi katta", meaning : "", pattern : "Polite vs Plain", explanation : "nazik vs genel ifade şekilleri" },
    {id : "28",  japanese : "yasashiku nakatta desu / yasashiku arimasen deshita * yasashiku nakatta", meaning : "", pattern : "Polite vs Plain", explanation : "nazik vs genel ifade şekilleri" },
    {id : "29",  japanese : "shizuka desu * shizuka da / shizuka de aru", meaning : "", pattern : "Polite vs Plain", explanation : "nazik vs genel ifade şekilleri" },
    {id : "30",  japanese : "shizuka de wa arimasen * shizuka de wa nai", meaning : "", pattern : "Polite vs Plain", explanation : "nazik vs genel ifade şekilleri" },
    {id : "31",  japanese : "shizuka deshita * shizuka datta", meaning : "", pattern : "Polite vs Plain", explanation : "nazik vs genel ifade şekilleri" },
    {id : "32",  japanese : "shizuka de wa nakatta desu  / shizuka de wa arimasen deshita * shizuka de wa nakatta", meaning : "", pattern : "Polite vs Plain", explanation : "nazik vs genel ifade şekilleri" },
    {id : "33",  japanese : "kaki masu * kaku", meaning : "", pattern : "Polite vs Plain", explanation : "nazik vs genel ifade şekilleri" },
    {id : "34",  japanese : "kaki masen * kaka nai", meaning : "", pattern : "Polite vs Plain", explanation : "nazik vs genel ifade şekilleri" },
    {id : "35",  japanese : "kaki mashita * kai ta", meaning : "", pattern : "Polite vs Plain", explanation : "nazik vs genel ifade şekilleri" },
    {id : "36",  japanese : "kakimasen deshita * kaka nakatta", meaning : "", pattern : "Polite vs Plain", explanation : "nazik vs genel ifade şekilleri" },
    {id : "37",  japanese : "oshie masu * oshie ru", meaning : "", pattern : "Polite vs Plain", explanation : "nazik vs genel ifade şekilleri" },
    {id : "38",  japanese : "oshie masen * oshie nai", meaning : "", pattern : "Polite vs Plain", explanation : "nazik vs genel ifade şekilleri" },
    {id : "39",  japanese : "oshie mashita * oshie ta", meaning : "", pattern : "Polite vs Plain", explanation : "nazik vs genel ifade şekilleri" },
    {id : "40",  japanese : "oshie masen deshita * oshie nakatta", meaning : "", pattern : "Polite vs Plain", explanation : "nazik vs genel ifade şekilleri" },
    {id : "41",  japanese : "ki masu * ku ru", meaning : "", pattern : "Polite vs Plain", explanation : "nazik vs genel ifade şekilleri" },
    {id : "42",  japanese : "ki masen * ko nai", meaning : "", pattern : "Polite vs Plain", explanation : "nazik vs genel ifade şekilleri" },
    {id : "43",  japanese : "ki mashita * ki ta", meaning : "", pattern : "Polite vs Plain", explanation : "nazik vs genel ifade şekilleri" },
    {id : "44",  japanese : "ki masen deshita * ko nakatta", meaning : "", pattern : "Polite vs Plain", explanation : "nazik vs genel ifade şekilleri" },
    {id : "45",  japanese : "shi masu * su ru", meaning : "", pattern : "Polite vs Plain", explanation : "nazik vs genel ifade şekilleri" },
    {id : "46",  japanese : "shi masen * shi nai", meaning : "", pattern : "Polite vs Plain", explanation : "nazik vs genel ifade şekilleri" },
    {id : "47",  japanese : "shi mashita * shi ta", meaning : "", pattern : "Polite vs Plain", explanation : "nazik vs genel ifade şekilleri" },
    {id : "48",  japanese : "shi masen deshita * shi nakatta", meaning : "", pattern : "Polite vs Plain", explanation : "nazik vs genel ifade şekilleri" },
    {id : "49",  japanese : "kore wa hana desu * kore wa hana da", meaning : "", pattern : "Polite vs Plain", explanation : "nazik vs genel ifade şekilleri" },
    {id : "50",  japanese : "sensei, koko e suwari masen ka * tanakasan, koko e suwara nai ka", meaning : "", pattern : "Polite vs Plain", explanation : "nazik vs genel ifade şekilleri" },
    {id : "51",  japanese : "kinou toshokan e itte, nihongo no hon o saga shimashita * kinou toshokan e itte, nihongo no hon o saga shita", meaning : "", pattern : "Polite vs Plain", explanation : "nazik vs genel ifade şekilleri" },
    {id : "52",  japanese : "kono kusuri o mainichi nomimasu * byouki ni natte kara, mainichi kusuri o nomu", meaning : "", pattern : "Polite vs Plain", explanation : "nazik vs genel ifade şekilleri" },
    {id : "53",  japanese : "kinou no shigoto wa muzukashiku nakatta desu * kinou no shigoto wa muzukashiku nakatta", meaning : "", pattern : "Polite vs Plain", explanation : "nazik vs genel ifade şekilleri" },
    {id : "54",  japanese : "kono kuruma wa totemo benri desu * kono kuruma wa totemo benri da", meaning : "", pattern : "Polite vs Plain", explanation : "nazik vs genel ifade şekilleri" },
    {id : "55",  japanese : "koohii o kudasai", meaning : "", pattern : "… o kudasai || Vte kudasai || V nai de kudasai", explanation : "bir şeyin veya bir eylemin yapılmasını istemek" },
    {id : "56",  japanese : "unten menkyoshou o kudasai", meaning : "sürücü ehliyeti lütfen", pattern : "… o kudasai || Vte kudasai || V nai de kudasai", explanation : "bir şeyin veya bir eylemin yapılmasını istemek" },
    {id : "57",  japanese : "chiizu to tamago o kudasai, koucha mo kudasai", meaning : "", pattern : "… o kudasai || Vte kudasai || V nai de kudasai", explanation : "bir şeyin veya bir eylemin yapılmasını istemek" },
    {id : "58",  japanese : "motto yukkuri hanashite kudasai", meaning : "biraz yavaşça konuşun lütfen", pattern : "… o kudasai || Vte kudasai || V nai de kudasai", explanation : "bir şeyin veya bir eylemin yapılmasını istemek" },
    {id : "59",  japanese : "hiragana de kaite kudasai", meaning : "hiraganada yazın lütfen", pattern : "… o kudasai || Vte kudasai || V nai de kudasai", explanation : "bir şeyin veya bir eylemin yapılmasını istemek" },
    {id : "60",  japanese : "ashita watashi no ie e kite kudasai", meaning : "yarın evime gel lütfen", pattern : "… o kudasai || Vte kudasai || V nai de kudasai", explanation : "bir şeyin veya bir eylemin yapılmasını istemek" },
    {id : "61",  japanese : "osake o nomanai de kudasai", meaning : "osake içmeyin lütfen", pattern : "… o kudasai || Vte kudasai || V nai de kudasai", explanation : "bir şeyin veya bir eylemin yapılmasını istemek" },
    {id : "62",  japanese : "torukogo de hanasanai de kudasai", meaning : "türkçe konuşmayın lütfen", pattern : "… o kudasai || Vte kudasai || V nai de kudasai", explanation : "bir şeyin veya bir eylemin yapılmasını istemek" },
    {id : "63",  japanese : "yoru osoku gitaa o hikanai de kudasai", meaning : "gece gitar çalmayın lütfen", pattern : "… o kudasai || Vte kudasai || V nai de kudasai", explanation : "bir şeyin veya bir eylemin yapılmasını istemek" },
    {id : "64",  japanese : "mou romaji de kakanai de kudasai. hiragana de kaite kudasai", meaning : "artık romanjide yazmayın. hiraganada yazın lütfen", pattern : "… o kudasai || Vte kudasai || V nai de kudasai", explanation : "bir şeyin veya bir eylemin yapılmasını istemek" },
    {id : "65",  japanese : "koko de tabako o sutte wa ikemasen", meaning : "burada sigara içmeyin lütfen", pattern : "Vte wa ikemasen", explanation : "yasak, olmaz ifadesi" },
    {id : "66",  japanese : "romaji de kaite wa ikemasen", meaning : "romanji yazmak olmaz", pattern : "Vte wa ikemasen", explanation : "yasak, olmaz ifadesi" },
    {id : "67",  japanese : "asa osoku okite wa ikemasen", meaning : "sabah geç kalkmak olmaz", pattern : "Vte wa ikemasen", explanation : "yasak, olmaz ifadesi" },
    {id : "68",  japanese : "koko de tabako o sutte mo ii desu ka / hai, sutte mo ii desu || iie, sutte wa ikemasen", meaning : "burada sigara içsem olur mu / evet, içsen olur || hayır, içsen olmaz", pattern : "V mo ii desu", explanation : "izin, yaparsan da olur ifadesi" },
    {id : "69",  japanese : "toshokan e itte benkyou shite mo ii desu ka", meaning : "kütüphaneye gidip ders çalışsam olur mu", pattern : "V mo ii desu", explanation : "izin, yaparsan da olur ifadesi" },
    {id : "70",  japanese : "shukudai o shite kara, terebi o mite mo ii desu", meaning : "ödev yaptıktan sonra, tv izlesem olur mu", pattern : "V mo ii desu", explanation : "izin, yaparsan da olur ifadesi" },
    {id : "71",  japanese : "anata no keitai denwa o tsukatte mo ii desu ka", meaning : "senin cep telefonunu kullansam olur mu", pattern : "V mo ii desu", explanation : "izin, yaparsan da olur ifadesi" },
    {id : "72",  japanese : "sensei ashita gakkou e kite mo ii desu ka / iie, kona kute mo ii desu. ie de benkyou shite kudasai", meaning : "hocam, yarın okula gelsem olur mu / hayır, gelmesen de olur. evde ders çalış lütfen", pattern : "Vnai => Vna kute mo ii desu", explanation : "izin, yapmazsan da olur ifadesi" },
    {id : "73",  japanese : "kono jisho wa amari yokunai desu. kawana kute mo ii desu ka / hai, kawana kute mo ii desu || iie, katte kudasai", meaning : "bu sözlük pek iyi değil. satın almasam olur mu / evet, satın almasan olur || hayır, satın al lütfen", pattern : "Vnai => Vna kute mo ii desu", explanation : "izin, yapmazsan da olur ifadesi" },
    {id : "74",  japanese : "kaerana kereba narimasen", meaning : "dönmezsem olmaz", pattern : "Vnai => Vna kereba narimasen", explanation : "zorunluluk || yükümlülük || vazife , yapmazsan olmaz ifadesi" },
    {id : "75",  japanese : "maiasa roku ji han ni okina kereba narimasen", meaning : "her sabah 6da kalkmazsam olmaz", pattern : "Vnai => Vna kereba narimasen", explanation : "zorunluluk || yükümlülük || vazife , yapmazsan olmaz ifadesi" },
    {id : "76",  japanese : "nihongo no atarashii kotoba o oboena kereba narimasen", meaning : "japonca yeni sözcükleri ezberlemezsen olmaz", pattern : "Vnai => Vna kereba narimasen", explanation : "zorunluluk || yükümlülük || vazife , yapmazsan olmaz ifadesi" },
    {id : "77",  japanese : "hiragana to katagana o hayaku kakana kereba narimasen deshita", meaning : "hiragana ve kataganayı hızlı öğrenmem gerekti (öğrenmeden olmazdı)", pattern : "Vnai => Vna kereba narimasen", explanation : "zorunluluk || yükümlülük || vazife , yapmazsan olmaz ifadesi" },
    {id : "78",  japanese : "kono kusuri o nomana kereba narimasen", meaning : "bu ilacı içmezsen olmaz", pattern : "Vnai => Vna kereba narimasen", explanation : "zorunluluk || yükümlülük || vazife , yapmazsan olmaz ifadesi" },
    {id : "79",  japanese : "kanji de kakana kereba narimasen ka / iie, kakana kute mo ii desu. hiragana de kaite kudasai", meaning : "kanjide yazmasam olmaz mı / hayır, yazmasan da olur. hiraganada yaz lütfen", pattern : "Vnai => Vna kereba narimasen", explanation : "zorunluluk || yükümlülük || vazife , yapmazsan olmaz ifadesi" },
    {id : "80",  japanese : "eigo de hanasana kereba narimasen ka / iie, hanasana kute mo ii desu. nihongo ka torukogo de hanashite kudasai", meaning : "ingilizce konuşmazsak olmaz mı / hayır, konuşmazsanız da olur. japonca ve türkçe konuşun lütfen", pattern : "Vnai => Vna kereba narimasen", explanation : "zorunluluk || yükümlülük || vazife , yapmazsan olmaz ifadesi" },
    {id : "81",  japanese : "senseni ni awana kute wa ikemasen", meaning : "öğretmenle buluşmamazlık olmaz", pattern : "Vnai => Vna kute wa ikemasen", explanation : "…mamazlık olmaz, …mamazlık etmemeli derken" },
    {id : "82",  japanese : "kodomotachi wa miruku o nomana kute wa ikemasen", meaning : "çocuklar süt içmezmezlik ederse olmaz", pattern : "Vnai => Vna kute wa ikemasen", explanation : "…mamazlık olmaz, …mamazlık etmemeli derken" },
    {id : "83",  japanese : "repooto o kakana kute wa ikemasen", meaning : "raporu yazmamazlık olmaz", pattern : "Vnai => Vna kute wa ikemasen", explanation : "…mamazlık olmaz, …mamazlık etmemeli derken" },
    {id : "84",  japanese : "denwa o kakana kute wa ikemasen", meaning : "telefon etmemezlik olmaz", pattern : "Vnai => Vna kute wa ikemasen", explanation : "…mamazlık olmaz, …mamazlık etmemeli derken" },
    {id : "85",  japanese : "mainichi nihongo de hanashita hou ga ii desu", meaning : "hergün japonca konuşman daha iyi olur", pattern : "Vta + hou ga ii desu || Vnai + hou ga ii desu", explanation : "tavsiye || öğüt || nasihat verirken ..san daha iyi olur || …masan daha iyi olur ifadesi" },
    {id : "86",  japanese : "byouin de tabako o suwanai hou ga ii desu", meaning : "hastanede sigara içmemen daha iyi olur", pattern : "Vta + hou ga ii desu || Vnai + hou ga ii desu", explanation : "tavsiye || öğüt || nasihat verirken ..san daha iyi olur || …masan daha iyi olur ifadesi" },
    {id : "87",  japanese : "kenkou no tameni tabako o yameta hou ga ii desu", meaning : "sağlığın adına sigarayı bırakman daha iyi olur", pattern : "Vta + hou ga ii desu || Vnai + hou ga ii desu", explanation : "tavsiye || öğüt || nasihat verirken ..san daha iyi olur || …masan daha iyi olur ifadesi" },
    {id : "88",  japanese : "arukooru o yameta hou ga ii desu ka / hai, sono hou ga ii desu || hai, yameta hou ga ii desu", meaning : "alkolü bırakmam daha mı iyi olur / evet, o daha iyi olur || evet, bıraksan daha iyi olur", pattern : "Vta + hou ga ii desu || Vnai + hou ga ii desu", explanation : "tavsiye || öğüt || nasihat verirken ..san daha iyi olur || …masan daha iyi olur ifadesi" },
    {id : "89",  japanese : "sonna ni koohii o nomanai hou ga ii desu || cha o nonda hou ga ii desu", meaning : "o kadar kahve imesen daha ii olur || çay içmen daha iyi olur", pattern : "Vta + hou ga ii desu || Vnai + hou ga ii desu", explanation : "tavsiye || öğüt || nasihat verirken ..san daha iyi olur || …masan daha iyi olur ifadesi" },
    {id : "90",  japanese : "nihongo o romaji de benkyou shinai hou ga ii desu. hiragana de benkyou shite kudasai", meaning : "japoncayı romanjide çalışmasan daha iyi olur. hiraganada çalışırsan daha iyi olur", pattern : "Vta + hou ga ii desu || Vnai + hou ga ii desu", explanation : "tavsiye || öğüt || nasihat verirken ..san daha iyi olur || …masan daha iyi olur ifadesi" },
    {id : "91",  japanese : "ashita wa ooame desu. kaisha e kuruma de ikanai hou ga ii desu. chikatetsu de itta hou ga ii desu.", meaning : "dün çok yağmur vardı. işe arabayla gitmesen daha iyi olur. metroyla gitsen daha iyi olur", pattern : "Vta + hou ga ii desu || Vnai + hou ga ii desu", explanation : "tavsiye || öğüt || nasihat verirken ..san daha iyi olur || …masan daha iyi olur ifadesi" },
    {id : "92",  japanese : "nihongo de hanashi nasai", meaning : "japonca konuşunuz lütfen", pattern : "Vstem nasai", explanation : "nazik emir kipi" },
    {id : "93",  japanese : "koko ni namae o kaki nasai", meaning : "buraya isminizi yazınız lütfen", pattern : "Vstem nasai", explanation : "nazik emir kipi" },
    {id : "94",  japanese : "hayaku oki nasai", meaning : "erken kalkınız lütfen", pattern : "Vstem nasai", explanation : "nazik emir kipi" },
    {id : "95",  japanese : "sono heya de machi nasai", meaning : "şu odada bekleyiniz lütfen", pattern : "Vstem nasai", explanation : "nazik emir kipi" },
    {id : "96",  japanese : "kocchi e ki nasai", meaning : "buraya geliniz lütfen", pattern : "Vstem nasai", explanation : "nazik emir kipi" },
    {id : "97",  japanese : "sono toki watashi wa mada go sai deshita", meaning : "o zaman ben halen 5 yaşındaydım", pattern : "Kono toki || N no toki || Adj-na toki || Adj-datta toki || Adj-i toki || Adj-katta toki || Vd toki || Vta + toki", explanation : "bir şey olduğu zaman, şu oldu || olurdu vs gibi zamansal cümlelerin ifadesi" },
    {id : "98",  japanese : "sono toki anata wa nani o shite imashita ka", meaning : "o zaman sen ne yapıyordun", pattern : "Kono toki || N no toki || Adj-na toki || Adj-datta toki || Adj-i toki || Adj-katta toki || Vd toki || Vta + toki", explanation : "bir şey olduğu zaman, şu oldu || olurdu vs gibi zamansal cümlelerin ifadesi" },
    {id : "99",  japanese : "daigakusei no toki, isutanburu ni sunde imashita", meaning : "öğrenciyken, istanbulda yaşıyordum", pattern : "Kono toki || N no toki || Adj-na toki || Adj-datta toki || Adj-i toki || Adj-katta toki || Vd toki || Vta + toki", explanation : "bir şey olduğu zaman, şu oldu || olurdu vs gibi zamansal cümlelerin ifadesi" },
    {id : "100",  japanese : "byouki no toki, …", meaning : "hastayken, …", pattern : "Kono toki || N no toki || Adj-na toki || Adj-datta toki || Adj-i toki || Adj-katta toki || Vd toki || Vta + toki", explanation : "bir şey olduğu zaman, şu oldu || olurdu vs gibi zamansal cümlelerin ifadesi" },
    {id : "101",  japanese : "shiken no toki, …", meaning : "sınav varkeni, …", pattern : "Kono toki || N no toki || Adj-na toki || Adj-datta toki || Adj-i toki || Adj-katta toki || Vd toki || Vta + toki", explanation : "bir şey olduğu zaman, şu oldu || olurdu vs gibi zamansal cümlelerin ifadesi" },
    {id : "102",  japanese : "kodomo no toki, …", meaning : "çocukkken, …", pattern : "Kono toki || N no toki || Adj-na toki || Adj-datta toki || Adj-i toki || Adj-katta toki || Vd toki || Vta + toki", explanation : "bir şey olduğu zaman, şu oldu || olurdu vs gibi zamansal cümlelerin ifadesi" },
    {id : "103",  japanese : "hima na toki, yoku sakkaa o shimashita", meaning : "boşken, sık sık futbol oynadım", pattern : "Kono toki || N no toki || Adj-na toki || Adj-datta toki || Adj-i toki || Adj-katta toki || Vd toki || Vta + toki", explanation : "bir şey olduğu zaman, şu oldu || olurdu vs gibi zamansal cümlelerin ifadesi" },
    {id : "104",  japanese : "umi ga mada kirei datta toki, yoku oyogi ni ikimashita", meaning : "deniz hala temiz olduğunda, sık sık yüzmeye gittim", pattern : "Kono toki || N no toki || Adj-na toki || Adj-datta toki || Adj-i toki || Adj-katta toki || Vd toki || Vta + toki", explanation : "bir şey olduğu zaman, şu oldu || olurdu vs gibi zamansal cümlelerin ifadesi" },
    {id : "105",  japanese : "tenki ga ii toki, watashi wa kouen o sanpo shimasu", meaning : "hava iyi olduğu zaman, parkta yürüyüş yaptım", pattern : "Kono toki || N no toki || Adj-na toki || Adj-datta toki || Adj-i toki || Adj-katta toki || Vd toki || Vta + toki", explanation : "bir şey olduğu zaman, şu oldu || olurdu vs gibi zamansal cümlelerin ifadesi" },
    {id : "106",  japanese : "samui toki kono sutoobu (stove) o tsukatte kudasai", meaning : "soğuk olduğu zaman, sobayı kullanın lütfen", pattern : "Kono toki || N no toki || Adj-na toki || Adj-datta toki || Adj-i toki || Adj-katta toki || Vd toki || Vta + toki", explanation : "bir şey olduğu zaman, şu oldu || olurdu vs gibi zamansal cümlelerin ifadesi" },
    {id : "107",  japanese : "senshuu totemo samukatta toki, kaze o hikimashita", meaning : "geçen hafta çok soğuk olduğu zaman üşüttüm", pattern : "Kono toki || N no toki || Adj-na toki || Adj-datta toki || Adj-i toki || Adj-katta toki || Vd toki || Vta + toki", explanation : "bir şey olduğu zaman, şu oldu || olurdu vs gibi zamansal cümlelerin ifadesi" },
    {id : "108",  japanese : "unten suru toki, megane o kakemasu", meaning : "araba sürdüğüm zaman gözlük takarım", pattern : "Kono toki || N no toki || Adj-na toki || Adj-datta toki || Adj-i toki || Adj-katta toki || Vd toki || Vta + toki", explanation : "bir şey olduğu zaman, şu oldu || olurdu vs gibi zamansal cümlelerin ifadesi" },
    {id : "109",  japanese : "gohan o taberu toki, nihonjin wa hashi o tsukaimasu", meaning : "yemek yedikleri zaman, japonlar çubuk kullanırlar", pattern : "Kono toki || N no toki || Adj-na toki || Adj-datta toki || Adj-i toki || Adj-katta toki || Vd toki || Vta + toki", explanation : "bir şey olduğu zaman, şu oldu || olurdu vs gibi zamansal cümlelerin ifadesi" },
    {id : "110",  japanese : "watashi wa denwa o kaketa toki, kare wa ie ni imasen deshita", meaning : "telefon açtığım zaman, o evde değidi", pattern : "Kono toki || N no toki || Adj-na toki || Adj-datta toki || Adj-i toki || Adj-katta toki || Vd toki || Vta + toki", explanation : "bir şey olduğu zaman, şu oldu || olurdu vs gibi zamansal cümlelerin ifadesi" },
    {id : "111",  japanese : "nihon e itta toki, kaimono o kaimashita", meaning : "japonyaya gittiğim zaman, kimono satın aldım", pattern : "Kono toki || N no toki || Adj-na toki || Adj-datta toki || Adj-i toki || Adj-katta toki || Vd toki || Vta + toki", explanation : "bir şey olduğu zaman, şu oldu || olurdu vs gibi zamansal cümlelerin ifadesi" },
    {id : "112",  japanese : "unten shite iru toki, nihongo no teepu (tape) o kikimasu", meaning : "araba sürüyor olduğum zaman, japonca tape dinlerim", pattern : "Kono toki || N no toki || Adj-na toki || Adj-datta toki || Adj-i toki || Adj-katta toki || Vd toki || Vta + toki", explanation : "bir şey olduğu zaman, şu oldu || olurdu vs gibi zamansal cümlelerin ifadesi" },
    {id : "113",  japanese : "akai ranpu (lamp) ga tsuite iru toki, kono heya ni hairanai de kudasai. ranpu ga kiete iru toki wa, haitte mo ii desu", meaning : "kırmızı lamba yanıyor olduğu zaman, odaya girme lütfen. lamba sönük olduğu zamansa girersen olur", pattern : "Kono toki || N no toki || Adj-na toki || Adj-datta toki || Adj-i toki || Adj-katta toki || Vd toki || Vta + toki", explanation : "bir şey olduğu zaman, şu oldu || olurdu vs gibi zamansal cümlelerin ifadesi" },
    {id : "114",  japanese : "asagohan o tabete ita toki, jishin ga arimashita", meaning : "kahvaltı ediyor iken, deprem oldu", pattern : "Kono toki || N no toki || Adj-na toki || Adj-datta toki || Adj-i toki || Adj-katta toki || Vd toki || Vta + toki", explanation : "bir şey olduğu zaman, şu oldu || olurdu vs gibi zamansal cümlelerin ifadesi" },
    {id : "115",  japanese : "yasumi no mae ni shiken ga arimasu", meaning : "tatilden önce sınav var", pattern : "N no mae (ni) || Vd mae (ni)", explanation : "…önce" },
    {id : "116",  japanese : "eki no mae ni ginkou ga arimasu", meaning : "istasyonun önünde banka var", pattern : "N no mae (ni) || Vd mae (ni)", explanation : "…önce" },
    {id : "117",  japanese : "jyugyou no mae ni toshokan e ikimasu", meaning : "dersten önce kütüphaneye gidiyorum", pattern : "N no mae (ni) || Vd mae (ni)", explanation : "…önce" },
    {id : "118",  japanese : "sensei ni au mae ni puresento o kaimashita", meaning : "öğretmenle buluşmadan önce hediye satıl aldım", pattern : "N no mae (ni) || Vd mae (ni)", explanation : "…önce" },
    {id : "119",  japanese : "sono eiga o mi ni iku mae ni, kippu o kaimashita", meaning : "", pattern : "N no mae (ni) || Vd mae (ni)", explanation : "…önce" },
    {id : "120",  japanese : "kono jyugyou no ato ryou ni kaerimasu", meaning : "", pattern : "N no ato (de) || Vta ato (de)", explanation : "…sonra" },
    {id : "121",  japanese : "daigaku o sotsugyou shita ato nihon e ikimasu", meaning : "", pattern : "N no ato (de) || Vta ato (de)", explanation : "…sonra" },
    {id : "122",  japanese : "ato de hanashimashou", meaning : "", pattern : "N no ato (de) || Vta ato (de)", explanation : "…sonra" },
    {id : "123",  japanese : "anata ga kaimono shite iru aida, watashi wa koko de matte imasu", meaning : "", pattern : "N no aida (ni) || Vte iru aida (ni)", explanation : "…süresince || ...esnasında || ...iken" },
    {id : "124",  japanese : "kare ga kaimono shite iru aida, watashi wa koko de matte imashita", meaning : "", pattern : "N no aida (ni) || Vte iru aida (ni)", explanation : "…süresince || ...esnasında || ...iken" },
    {id : "125",  japanese : "yasumi no aida ni antaria (antalya) e ikimasu", meaning : "", pattern : "N no aida (ni) || Vte iru aida (ni)", explanation : "…süresince || ...esnasında || ...iken" },
    {id : "126",  japanese : "yasumi no aida ni nihongo o benkyou shimasu", meaning : "", pattern : "N no aida (ni) || Vte iru aida (ni)", explanation : "…süresince || ...esnasında || ...iken" },
    {id : "127",  japanese : "nihon ni ite iru aida ni, atarashii kotoba o takusan oboemashita", meaning : "", pattern : "N no aida (ni) || Vte iru aida (ni)", explanation : "…süresince || ...esnasında || ...iken" },
    {id : "128",  japanese : "ongaku o kiki nagara benkyou shimasu", meaning : "", pattern : "Vstem nagara V", explanation : "iki eylemi bir arada yaparken, ikinci eylemi vurgulamak" },
    {id : "129",  japanese : "mina de uta o utai nagara yama ni noborimashita", meaning : "", pattern : "Vstem nagara V", explanation : "iki eylemi bir arada yaparken, ikinci eylemi vurgulamak" },
    {id : "130",  japanese : "kono mama tsutsunde kudasai", meaning : "", pattern : "Kono mama || N no mama || Adj-na mama || Ajd-i mama || Vta mama", explanation : "durum bildirme, … durumda, o halde, o vaziyette" },
    {id : "131",  japanese : "ichi dooru (dollar) wa hayku juu en no mama", meaning : "", pattern : "Kono mama || N no mama || Adj-na mama || Ajd-i mama || Vta mama", explanation : "durum bildirme, … durumda, o halde, o vaziyette" },
    {id : "132",  japanese : "toshokan de shizukana mama benkyou shita hou ga ii desu", meaning : "", pattern : "Kono mama || N no mama || Adj-na mama || Ajd-i mama || Vta mama", explanation : "durum bildirme, … durumda, o halde, o vaziyette" },
    {id : "133",  japanese : "chichi no kuruma wa koshou shita mama", meaning : "", pattern : "Kono mama || N no mama || Adj-na mama || Ajd-i mama || Vta mama", explanation : "durum bildirme, … durumda, o halde, o vaziyette" },
    {id : "134",  japanese : "kutsu o haita mama haitte wa ikemasen", meaning : "", pattern : "Kono mama || N no mama || Adj-na mama || Ajd-i mama || Vta mama", explanation : "durum bildirme, … durumda, o halde, o vaziyette" },
    {id : "135",  japanese : "tatta mama koohii o nomimashita", meaning : "", pattern : "Kono mama || N no mama || Adj-na mama || Ajd-i mama || Vta mama", explanation : "durum bildirme, … durumda, o halde, o vaziyette" },
    {id : "136",  japanese : "mado o aketa mama ie o demashita", meaning : "", pattern : "Kono mama || N no mama || Adj-na mama || Ajd-i mama || Vta mama", explanation : "durum bildirme, … durumda, o halde, o vaziyette" },
    {id : "137",  japanese : "tsumetai mama de ii desu", meaning : "", pattern : "Kono mama || N no mama || Adj-na mama || Ajd-i mama || Vta mama", explanation : "durum bildirme, … durumda, o halde, o vaziyette" },
    {id : "138",  japanese : "honya e itte, nihongo no jisho o kaimasu", meaning : "", pattern : "Vte, … || Adj-i kute, … || Adj-na de, … || N de, …", explanation : "fiil, sıfat ve isim cümlelerini birleştirmek" },
    {id : "139",  japanese : "ano kuruma wa atarashi kute, takai desu", meaning : "", pattern : "Vte, … || Adj-i kute, … || Adj-na de, … || N de, …", explanation : "fiil, sıfat ve isim cümlelerini birleştirmek" },
    {id : "140",  japanese : "ano mura wa shizuka de, ii tokoro desu", meaning : "", pattern : "Vte, … || Adj-i kute, … || Adj-na de, … || N de, …", explanation : "fiil, sıfat ve isim cümlelerini birleştirmek" },
    {id : "141",  japanese : "sono hoteru wa kirei de, saabisu (servis) mo yokatta desı", meaning : "", pattern : "Vte, … || Adj-i kute, … || Adj-na de, … || N de, …", explanation : "fiil, sıfat ve isim cümlelerini birleştirmek" },
    {id : "142",  japanese : "kyouto wa furui machi de, otera ga takusan arimasu", meaning : "", pattern : "Vte, … || Adj-i kute, … || Adj-na de, … || N de, …", explanation : "fiil, sıfat ve isim cümlelerini birleştirmek" },
    {id : "143",  japanese : "nihonjin wa taberu toki mae ni 'itadakimasu' to iimasu", meaning : "", pattern : "Subject … to iimasu || Subject … to iimashita || Subject … to itte imasu || Subject … to itte imashita", explanation : "başa birilerinin sözlerini aktarma şekli, bu formda iu fiilinin yanında kiku, kotaeru, hanasu, kaku gibi fiilleri de kullanabiliriz" },
    {id : "144",  japanese : "arisan wa natsuyasumi ni antaria e iku to iimashita", meaning : "", pattern : "Subject … to iimasu || Subject … to iimashita || Subject … to itte imasu || Subject … to itte imashita", explanation : "başa birilerinin sözlerini aktarma şekli, bu formda iu fiilinin yanında kiku, kotaeru, hanasu, kaku gibi fiilleri de kullanabiliriz" },
    {id : "145",  japanese : "ayşesan wa raishuu kuru to itte imasu", meaning : "", pattern : "Subject … to iimasu || Subject … to iimashita || Subject … to itte imasu || Subject … to itte imashita", explanation : "başa birilerinin sözlerini aktarma şekli, bu formda iu fiilinin yanında kiku, kotaeru, hanasu, kaku gibi fiilleri de kullanabiliriz" },
    {id : "146",  japanese : "muratsan wa byouin e iku to itte imashita", meaning : "", pattern : "Subject … to iimasu || Subject … to iimashita || Subject … to itte imasu || Subject … to itte imashita", explanation : "başa birilerinin sözlerini aktarma şekli, bu formda iu fiilinin yanında kiku, kotaeru, hanasu, kaku gibi fiilleri de kullanabiliriz" },
    {id : "147",  japanese : "kare wa nan to iimashita ka / kare wa ashita shiken ga aru to iimashita || kare wa kinou shiken ga atta to iimashita || kare wa ashita shiken ga nai to iimashita", meaning : "", pattern : "Subject … to iimasu || Subject … to iimashita || Subject … to itte imasu || Subject … to itte imashita", explanation : "başa birilerinin sözlerini aktarma şekli, bu formda iu fiilinin yanında kiku, kotaeru, hanasu, kaku gibi fiilleri de kullanabiliriz" },
    {id : "148",  japanese : "ayşesan wa 'itsu antaria e kimashita ka' to (alisan ni) kikimashita", meaning : "", pattern : "Subject … to iimasu || Subject … to iimashita || Subject … to itte imasu || Subject … to itte imashita", explanation : "başa birilerinin sözlerini aktarma şekli, bu formda iu fiilinin yanında kiku, kotaeru, hanasu, kaku gibi fiilleri de kullanabiliriz" },
    {id : "149",  japanese : "kanojo wa 'mou watasgi ni awanai' to (kare ni tegami o) kakimashita", meaning : "", pattern : "Subject … to iimasu || Subject … to iimashita || Subject … to itte imasu || Subject … to itte imashita", explanation : "başa birilerinin sözlerini aktarma şekli, bu formda iu fiilinin yanında kiku, kotaeru, hanasu, kaku gibi fiilleri de kullanabiliriz" },
    {id : "150",  japanese : "alisan wa ima heya de benkyou shite iru to omoimasu", meaning : "", pattern : "Vd to omoimasu || Vta to omoimasu || Adj-i to omoimasu || Adj-i => Adj-katta to omoimasu || Adj-na => Adj da to omoimasu || Adj-na => Adj datta to omoimasu || N da to omoimasu || N datta to omoimasu", explanation : "birinin düşüncesini || tahminini ifade etmesi" },
    {id : "151",  japanese : "kare wa kyou kuru to omoimasu", meaning : "", pattern : "Vd to omoimasu || Vta to omoimasu || Adj-i to omoimasu || Adj-i => Adj-katta to omoimasu || Adj-na => Adj da to omoimasu || Adj-na => Adj datta to omoimasu || N da to omoimasu || N datta to omoimasu", explanation : "birinin düşüncesini || tahminini ifade etmesi" },
    {id : "152",  japanese : "kare wa ashita kuru to omoimasu", meaning : "", pattern : "Vd to omoimasu || Vta to omoimasu || Adj-i to omoimasu || Adj-i => Adj-katta to omoimasu || Adj-na => Adj da to omoimasu || Adj-na => Adj datta to omoimasu || N da to omoimasu || N datta to omoimasu", explanation : "birinin düşüncesini || tahminini ifade etmesi" },
    {id : "153",  japanese : "kare wa kinou kita to omoimasu", meaning : "", pattern : "Vd to omoimasu || Vta to omoimasu || Adj-i to omoimasu || Adj-i => Adj-katta to omoimasu || Adj-na => Adj da to omoimasu || Adj-na => Adj datta to omoimasu || N da to omoimasu || N datta to omoimasu", explanation : "birinin düşüncesini || tahminini ifade etmesi" },
    {id : "154",  japanese : "hokkaidou wa mou totemo samui to omoimasu", meaning : "", pattern : "Vd to omoimasu || Vta to omoimasu || Adj-i to omoimasu || Adj-i => Adj-katta to omoimasu || Adj-na => Adj da to omoimasu || Adj-na => Adj datta to omoimasu || N da to omoimasu || N datta to omoimasu", explanation : "birinin düşüncesini || tahminini ifade etmesi" },
    {id : "155",  japanese : "shiken wa muzukashi katta to omoimasu", meaning : "", pattern : "Vd to omoimasu || Vta to omoimasu || Adj-i to omoimasu || Adj-i => Adj-katta to omoimasu || Adj-na => Adj da to omoimasu || Adj-na => Adj datta to omoimasu || N da to omoimasu || N datta to omoimasu", explanation : "birinin düşüncesini || tahminini ifade etmesi" },
    {id : "156",  japanese : "kare wa shinsetsu da to omoimasu", meaning : "", pattern : "Vd to omoimasu || Vta to omoimasu || Adj-i to omoimasu || Adj-i => Adj-katta to omoimasu || Adj-na => Adj da to omoimasu || Adj-na => Adj datta to omoimasu || N da to omoimasu || N datta to omoimasu", explanation : "birinin düşüncesini || tahminini ifade etmesi" },
    {id : "157",  japanese : "ano okusan wa wakai toki kirei datta to omoimasu", meaning : "", pattern : "Vd to omoimasu || Vta to omoimasu || Adj-i to omoimasu || Adj-i => Adj-katta to omoimasu || Adj-na => Adj da to omoimasu || Adj-na => Adj datta to omoimasu || N da to omoimasu || N datta to omoimasu", explanation : "birinin düşüncesini || tahminini ifade etmesi" },
    {id : "158",  japanese : "kare wa nihonjin da to omoimasu", meaning : "", pattern : "Vd to omoimasu || Vta to omoimasu || Adj-i to omoimasu || Adj-i => Adj-katta to omoimasu || Adj-na => Adj da to omoimasu || Adj-na => Adj datta to omoimasu || N da to omoimasu || N datta to omoimasu", explanation : "birinin düşüncesini || tahminini ifade etmesi" },
    {id : "159",  japanese : "kono tokei wa gosen en datta to omoimasu", meaning : "", pattern : "Vd to omoimasu || Vta to omoimasu || Adj-i to omoimasu || Adj-i => Adj-katta to omoimasu || Adj-na => Adj da to omoimasu || Adj-na => Adj datta to omoimasu || N da to omoimasu || N datta to omoimasu", explanation : "birinin düşüncesini || tahminini ifade etmesi" },
    {id : "160",  japanese : "hiragana to katagana wa totemo yasashii to omoimashita", meaning : "", pattern : "Vd to omoimasu || Vta to omoimasu || Adj-i to omoimasu || Adj-i => Adj-katta to omoimasu || Adj-na => Adj da to omoimasu || Adj-na => Adj datta to omoimasu || N da to omoimasu || N datta to omoimasu", explanation : "birinin düşüncesini || tahminini ifade etmesi" },
    {id : "161",  japanese : "nihonjin wa kore o 'kotatsu' to iimasu", meaning : "", pattern : "… to iimasu || … to iu", explanation : "bir nesnenin alandırılması" },
    {id : "162",  japanese : "nihonjin wa 'kiraz çiçeği' o sakura to iimasu", meaning : "", pattern : "… to iimasu || … to iu", explanation : "bir nesnenin alandırılması" },
    {id : "163",  japanese : "kono gakki wa koto to iimasu", meaning : "", pattern : "… to iimasu || … to iu", explanation : "bir nesnenin alandırılması" },
    {id : "164",  japanese : "sono hana wa nan to iimasu ka", meaning : "", pattern : "… to iimasu || … to iu", explanation : "bir nesnenin alandırılması" },
    {id : "165",  japanese : "papatiya' wa nihongo de nan to iimasu ka", meaning : "", pattern : "… to iimasu || … to iu", explanation : "bir nesnenin alandırılması" },
    {id : "166",  japanese : "kono ki wa nihongo de sugi to iimasu", meaning : "", pattern : "… to iimasu || … to iu", explanation : "bir nesnenin alandırılması" },
    {id : "167",  japanese : "lütfen oturun' wa nihongo de dou iimasu ka", meaning : "", pattern : "… to iimasu || … to iu", explanation : "bir nesnenin alandırılması" },
    {id : "168",  japanese : "koto to iu gakki", meaning : "", pattern : "… to iimasu || … to iu", explanation : "bir nesnenin alandırılması" },
    {id : "169",  japanese : "tanaka to iu hito", meaning : "", pattern : "… to iimasu || … to iu", explanation : "bir nesnenin alandırılması" },
    {id : "170",  japanese : "kaki to iu kudamono", meaning : "", pattern : "… to iimasu || … to iu", explanation : "bir nesnenin alandırılması" },
    {id : "171",  japanese : "yukata to iu kimono", meaning : "", pattern : "… to iimasu || … to iu", explanation : "bir nesnenin alandırılması" },
    {id : "172",  japanese : "kore wa nan to iu mono desu ka / o hashi desu", meaning : "", pattern : "… to iimasu || … to iu", explanation : "bir nesnenin alandırılması" },
    {id : "173",  japanese : "kappadokia' to iu tokoro o shitte imasu ka", meaning : "", pattern : "… to iimasu || … to iu", explanation : "bir nesnenin alandırılması" },
    {id : "174",  japanese : "adana de yuki ga futta to iu kiji o yomimashita", meaning : "", pattern : "… to iimasu || … to iu", explanation : "bir nesnenin alandırılması" },
    {id : "175",  japanese : "oosaka no taksakisan ga nakunatta to iu shirase o moraimashita", meaning : "", pattern : "… to iimasu || … to iu", explanation : "bir nesnenin alandırılması" },
    {id : "176",  japanese : "kanji wa zenbu de yaku yon man ji ga aru to iu koto o shitte imasu ka", meaning : "", pattern : "… to iimasu || … to iu", explanation : "bir nesnenin alandırılması" },
    {id : "177",  japanese : "toukyou no jinkou wa oosaka no jinkou no yori yon bai desu", meaning : "", pattern : "A wa B no … bai desu || A wa B yori …bai Adj-i or Adj-na desu || A wa B yori … bai Adj-i => Adj ku or Adj-na => Adj ni + Vmasu", explanation : "bir cismin katlara göre ifadesi" },
    {id : "178",  japanese : "kikouki wa shinkansen yori san bai hayai desu", meaning : "", pattern : "A wa B no … bai desu || A wa B yori …bai Adj-i or Adj-na desu || A wa B yori … bai Adj-i => Adj ku or Adj-na => Adj ni + Vmasu", explanation : "bir cismin katlara göre ifadesi" },
    {id : "179",  japanese : "hikouki wa shinkansen yori san bai ijyou hayaku tobimasu", meaning : "", pattern : "A wa B no … bai desu || A wa B yori …bai Adj-i or Adj-na desu || A wa B yori … bai Adj-i => Adj ku or Adj-na => Adj ni + Vmasu", explanation : "bir cismin katlara göre ifadesi" },
    {id : "180",  japanese : "atarashii kuruma wa mae no kuruma yori san bai gurai shizuka desu", meaning : "", pattern : "A wa B no … bai desu || A wa B yori …bai Adj-i or Adj-na desu || A wa B yori … bai Adj-i => Adj ku or Adj-na => Adj ni + Vmasu", explanation : "bir cismin katlara göre ifadesi" },
    {id : "181",  japanese : "kuruma no enjin (engine) o naoshita ato, kuruma wa ni bai shizuka ni narimashita", meaning : "", pattern : "A wa B no … bai desu || A wa B yori …bai Adj-i or Adj-na desu || A wa B yori … bai Adj-i => Adj ku or Adj-na => Adj ni + Vmasu", explanation : "bir cismin katlara göre ifadesi" },
    {id : "182",  japanese : "toruko no menseki wa nihon no menseki no yaku ni bai desu", meaning : "", pattern : "A wa B no … bai desu || A wa B yori …bai Adj-i or Adj-na desu || A wa B yori … bai Adj-i => Adj ku or Adj-na => Adj ni + Vmasu", explanation : "bir cismin katlara göre ifadesi" },
    {id : "183",  japanese : "san bun no ichi", meaning : "", pattern : "A bun no B", explanation : "oransal ifadeler" },
    {id : "184",  japanese : "jyuu bun no nana", meaning : "", pattern : "A bun no B", explanation : "oransal ifadeler" },
    {id : "185",  japanese : "toruko no jinkou wa nippon no jinkou no yaku ni bun no ichi desu", meaning : "", pattern : "A bun no B", explanation : "oransal ifadeler" },
    {id : "186",  japanese : "nippon no menseki wa furansu no menseki no yaku san bun no ni desu", meaning : "", pattern : "A bun no B", explanation : "oransal ifadeler" },
    {id : "187",  japanese : "kyouto wa nara yori ookii desu", meaning : "", pattern : "A wa B yori [Adj-i || Adj-na => Adj ] desu", explanation : "kıyaslama || karşılaştırma" },
    {id : "188",  japanese : "inaka no hito wa machi no hito yori motto shinsetsu desu", meaning : "", pattern : "A wa B yori [Adj-i || Adj-na => Adj ] desu", explanation : "kıyaslama || karşılaştırma" },
    {id : "189",  japanese : "kanji wa hiragana yori muzukashii desu", meaning : "", pattern : "A wa B yori [Adj-i || Adj-na => Adj ] desu", explanation : "kıyaslama || karşılaştırma" },
    {id : "190",  japanese : "atarashii jisho wa mae no jisho yori motto benri desu", meaning : "", pattern : "A wa B yori [Adj-i || Adj-na => Adj ] desu", explanation : "kıyaslama || karşılaştırma" },

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

