

// DATA


const myData = [

    {id : "1",  japanese : "owari wa go ji desu", meaning : "bitiş saat beşte", pattern : "V in N form", explanation : "fiillerin isim biçimi" },
    {id : "2",  japanese : "ankara iku no basu ni norimashita", meaning : "ankaraya giden otobüse bindim", pattern : "V in N form", explanation : "fiillerin isim biçimi" },
    {id : "3",  japanese : "kare no oyogi koto wa omoshiroi desu", meaning : "onun yüzme şekli çok ilginç", pattern : "V in N form", explanation : "fiillerin isim biçimi" },
    {id : "4",  japanese : "kaeri wa itsu desu ka", meaning : "dönüş ne zaman", pattern : "V in N form", explanation : "fiillerin isim biçimi" },
    {id : "5",  japanese : "kare no kangae o wakarimasen", meaning : "onun düşüncesini bilmiyorum", pattern : "V in N form", explanation : "fiillerin isim biçimi" },
    {id : "6",  japanese : "haya oki desu ne", meaning : "erken kalkalım di mi", pattern : "V in N form", explanation : "fiillerin isim biçimi" },
    {id : "7",  japanese : "kyou no mouke wa amari yoku nai desu", meaning : "bugünün kazancı pek iyi değil", pattern : "V in N form", explanation : "fiillerin isim biçimi" },
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
    {id : "55",  japanese : "koohii o kudasai", meaning : "kahve lütfen", pattern : "… o kudasai || Vte kudasai || V nai de kudasai", explanation : "bir şeyin veya bir eylemin yapılmasını istemek" },
    {id : "56",  japanese : "unten menkyoshou o kudasai", meaning : "sürücü ehliyeti lütfen", pattern : "… o kudasai || Vte kudasai || V nai de kudasai", explanation : "bir şeyin veya bir eylemin yapılmasını istemek" },
    {id : "57",  japanese : "chiizu to tamago o kudasai, koucha mo kudasai", meaning : "peynir ve yumurta lütfen, çay da lütfen", pattern : "… o kudasai || Vte kudasai || V nai de kudasai", explanation : "bir şeyin veya bir eylemin yapılmasını istemek" },
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
    {id : "119",  japanese : "sono eiga o mi ni iku mae ni, kippu o kaimashita", meaning : "o filmi izlemeye gitmeden önce, bilet satın aldık", pattern : "N no mae (ni) || Vd mae (ni)", explanation : "…önce" },
    {id : "120",  japanese : "kono jyugyou no ato ryou ni kaerimasu", meaning : "bu dersten sonra yurda geri dönüyorum", pattern : "N no ato (de) || Vta ato (de)", explanation : "…sonra" },
    {id : "121",  japanese : "daigaku o sotsugyou shita ato nihon e ikimasu", meaning : "üniversiteden mezun olduktan sonra japonyaya gidiyorum", pattern : "N no ato (de) || Vta ato (de)", explanation : "…sonra" },
    {id : "122",  japanese : "ato de hanashimashou", meaning : "sonra konuşalım", pattern : "N no ato (de) || Vta ato (de)", explanation : "…sonra" },
    {id : "123",  japanese : "anata ga kaimono shite iru aida, watashi wa koko de matte imasu", meaning : "sen alışveriş yapıyor iken, ben burada bekliyorum", pattern : "N no aida (ni) || Vte iru aida (ni)", explanation : "…süresince || ...esnasında || ...iken" },
    {id : "124",  japanese : "kare ga kaimono shite iru aida, watashi wa koko de matte imashita", meaning : "o alışveriş yapıyor iken, ben burada bekliyordu", pattern : "N no aida (ni) || Vte iru aida (ni)", explanation : "…süresince || ...esnasında || ...iken" },
    {id : "125",  japanese : "yasumi no aida ni antaria (antalya) e ikimasu", meaning : "tatil zamanında antalya'ya gidiyoruz", pattern : "N no aida (ni) || Vte iru aida (ni)", explanation : "…süresince || ...esnasında || ...iken" },
    {id : "126",  japanese : "yasumi no aida ni nihongo o benkyou shimasu", meaning : "tatil sırasında japonyaya okumaya gidiyorum", pattern : "N no aida (ni) || Vte iru aida (ni)", explanation : "…süresince || ...esnasında || ...iken" },
    {id : "127",  japanese : "nihon ni ite iru aida ni, atarashii kotoba o takusan oboemashita", meaning : "japonyaya gidiyor iken, yeni kelimeleri çok ezberledim", pattern : "N no aida (ni) || Vte iru aida (ni)", explanation : "…süresince || ...esnasında || ...iken" },
    {id : "128",  japanese : "ongaku o kiki nagara benkyou shimasu", meaning : "müzik dinlerken ders çalışırım", pattern : "Vstem nagara V", explanation : "iki eylemi bir arada yaparken, ikinci eylemi vurgulamak" },
    {id : "129",  japanese : "mina de uta o utai nagara yama ni noborimashita", meaning : "herkes şarkı söyleyerek dağa tırmanıyor", pattern : "Vstem nagara V", explanation : "iki eylemi bir arada yaparken, ikinci eylemi vurgulamak" },
    {id : "130",  japanese : "kono mama tsutsunde kudasai", meaning : "bu şekilde paket yapın lütfen", pattern : "Kono mama || N no mama || Adj-na mama || Ajd-i mama || Vta mama", explanation : "durum bildirme, … durumda, o halde, o vaziyette" },
    {id : "131",  japanese : "ichi dooru (dollar) wa hyaku juu en no mama", meaning : "bir dolar 100 yen durumunda", pattern : "Kono mama || N no mama || Adj-na mama || Ajd-i mama || Vta mama", explanation : "durum bildirme, … durumda, o halde, o vaziyette" },
    {id : "132",  japanese : "toshokan de shizukana mama benkyou shita hou ga ii desu", meaning : "kütüphanede sessiz ortamda ders yapmam daha iyi olur", pattern : "Kono mama || N no mama || Adj-na mama || Ajd-i mama || Vta mama", explanation : "durum bildirme, … durumda, o halde, o vaziyette" },
    {id : "133",  japanese : "chichi no kuruma wa koshou shita mama", meaning : "bababım arabası arızalı durumda", pattern : "Kono mama || N no mama || Adj-na mama || Ajd-i mama || Vta mama", explanation : "durum bildirme, … durumda, o halde, o vaziyette" },
    {id : "134",  japanese : "kutsu o haita mama haitte wa ikemasen", meaning : "ayakkabı giyili içeri girmeniz olmaz", pattern : "Kono mama || N no mama || Adj-na mama || Ajd-i mama || Vta mama", explanation : "durum bildirme, … durumda, o halde, o vaziyette" },
    {id : "135",  japanese : "tatta mama koohii o nomimashita", meaning : "ayakta durarak kahve içtik", pattern : "Kono mama || N no mama || Adj-na mama || Ajd-i mama || Vta mama", explanation : "durum bildirme, … durumda, o halde, o vaziyette" },
    {id : "136",  japanese : "mado o aketa mama ie o demashita", meaning : "pencere açık halde evden çıktım", pattern : "Kono mama || N no mama || Adj-na mama || Ajd-i mama || Vta mama", explanation : "durum bildirme, … durumda, o halde, o vaziyette" },
    {id : "137",  japanese : "tsumetai mama de ii desu", meaning : "soğuk halde daha iyi", pattern : "Kono mama || N no mama || Adj-na mama || Ajd-i mama || Vta mama", explanation : "durum bildirme, … durumda, o halde, o vaziyette" },
    {id : "138",  japanese : "honya e itte, nihongo no jisho o kaimasu", meaning : "kitapçıya gidip japonca sözlük alacağım", pattern : "Vte, … || Adj-i kute, … || Adj-na de, … || N de, …", explanation : "fiil, sıfat ve isim cümlelerini birleştirmek" },
    {id : "139",  japanese : "ano kuruma wa atarashi kute, takai desu", meaning : "o araba yeni, pahalıdır", pattern : "Vte, … || Adj-i kute, … || Adj-na de, … || N de, …", explanation : "fiil, sıfat ve isim cümlelerini birleştirmek" },
    {id : "140",  japanese : "ano mura wa shizuka de, ii tokoro desu", meaning : "o köy sessiz, iyi biryerdir", pattern : "Vte, … || Adj-i kute, … || Adj-na de, … || N de, …", explanation : "fiil, sıfat ve isim cümlelerini birleştirmek" },
    {id : "141",  japanese : "sono hoteru wa kirei de, saabisu (servis) mo yokatta desı", meaning : "o otel güzel, servisi de iyidir", pattern : "Vte, … || Adj-i kute, … || Adj-na de, … || N de, …", explanation : "fiil, sıfat ve isim cümlelerini birleştirmek" },
    {id : "142",  japanese : "kyouto wa furui machi de, otera ga takusan arimasu", meaning : "kyoto eski bir şehir, tapınakları da çoktur", pattern : "Vte, … || Adj-i kute, … || Adj-na de, … || N de, …", explanation : "fiil, sıfat ve isim cümlelerini birleştirmek" },
    {id : "143",  japanese : "nihonjin wa taberu toki mae ni 'itadakimasu' to iimasu", meaning : "japonlar yemek yedikleri zaman 'itakadimasu' derler", pattern : "Subject … to iimasu || Subject … to iimashita || Subject … to itte imasu || Subject … to itte imashita", explanation : "başa birilerinin sözlerini aktarma şekli, bu formda iu fiilinin yanında kiku, kotaeru, hanasu, kaku gibi fiilleri de kullanabiliriz" },
    {id : "144",  japanese : "arisan wa natsuyasumi ni antaria e iku to iimashita", meaning : "alisan yaz tatilinde antalya'ya gittiğini söylüyor", pattern : "Subject … to iimasu || Subject … to iimashita || Subject … to itte imasu || Subject … to itte imashita", explanation : "başa birilerinin sözlerini aktarma şekli, bu formda iu fiilinin yanında kiku, kotaeru, hanasu, kaku gibi fiilleri de kullanabiliriz" },
    {id : "145",  japanese : "ayşesan wa raishuu kuru to itte imasu", meaning : "ayşesan gelecek sene geleceğini söylüyor", pattern : "Subject … to iimasu || Subject … to iimashita || Subject … to itte imasu || Subject … to itte imashita", explanation : "başa birilerinin sözlerini aktarma şekli, bu formda iu fiilinin yanında kiku, kotaeru, hanasu, kaku gibi fiilleri de kullanabiliriz" },
    {id : "146",  japanese : "muratsan wa byouin e iku to itte imashita", meaning : "muratsan hastaneye gittiğini söyledi", pattern : "Subject … to iimasu || Subject … to iimashita || Subject … to itte imasu || Subject … to itte imashita", explanation : "başa birilerinin sözlerini aktarma şekli, bu formda iu fiilinin yanında kiku, kotaeru, hanasu, kaku gibi fiilleri de kullanabiliriz" },
    {id : "147",  japanese : "kare wa nan to iimashita ka / kare wa ashita shiken ga aru to iimashita || kare wa kinou shiken ga atta to iimashita || kare wa ashita shiken ga nai to iimashita", meaning : "o ne söyledi? / o yarın sınav olduğunu söyledi || o dün sınav olduğunu söyledi || o yarın sınav olmayacağını söyledi", pattern : "Subject … to iimasu || Subject … to iimashita || Subject … to itte imasu || Subject … to itte imashita", explanation : "başa birilerinin sözlerini aktarma şekli, bu formda iu fiilinin yanında kiku, kotaeru, hanasu, kaku gibi fiilleri de kullanabiliriz" },
    {id : "148",  japanese : "ayşesan wa 'itsu antaria e kimashita ka' to (alisan ni) kikimashita", meaning : "ayşesan 'ne zaman antalyaya gittin' diye alisan'a sordu", pattern : "Subject … to iimasu || Subject … to iimashita || Subject … to itte imasu || Subject … to itte imashita", explanation : "başa birilerinin sözlerini aktarma şekli, bu formda iu fiilinin yanında kiku, kotaeru, hanasu, kaku gibi fiilleri de kullanabiliriz" },
    {id : "149",  japanese : "kanojo wa 'mou watashi ni awanai' to (kare ni tegami o) kakimashita", meaning : "o 'artık benimle buluşma' diye ona mektup yazdı", pattern : "Subject … to iimasu || Subject … to iimashita || Subject … to itte imasu || Subject … to itte imashita", explanation : "başa birilerinin sözlerini aktarma şekli, bu formda iu fiilinin yanında kiku, kotaeru, hanasu, kaku gibi fiilleri de kullanabiliriz" },
    {id : "150",  japanese : "alisan wa ima heya de benkyou shite iru to omoimasu", meaning : "alisan şu anda odada ders çalışıyor diye düşünüyorum", pattern : "Vd to omoimasu || Vta to omoimasu || Adj-i to omoimasu || Adj-i => Adj-katta to omoimasu || Adj-na => Adj da to omoimasu || Adj-na => Adj datta to omoimasu || N da to omoimasu || N datta to omoimasu", explanation : "birinin düşüncesini || tahminini ifade etmesi" },
    {id : "151",  japanese : "kare wa kyou kuru to omoimasu", meaning : "o bugün gelir diye düşünüyorum", pattern : "Vd to omoimasu || Vta to omoimasu || Adj-i to omoimasu || Adj-i => Adj-katta to omoimasu || Adj-na => Adj da to omoimasu || Adj-na => Adj datta to omoimasu || N da to omoimasu || N datta to omoimasu", explanation : "birinin düşüncesini || tahminini ifade etmesi" },
    {id : "152",  japanese : "kare wa ashita kuru to omoimasu", meaning : "o yarın gelir diye düşünüyorum", pattern : "Vd to omoimasu || Vta to omoimasu || Adj-i to omoimasu || Adj-i => Adj-katta to omoimasu || Adj-na => Adj da to omoimasu || Adj-na => Adj datta to omoimasu || N da to omoimasu || N datta to omoimasu", explanation : "birinin düşüncesini || tahminini ifade etmesi" },
    {id : "153",  japanese : "kare wa kinou kita to omoimasu", meaning : "o dün geldi diye düşünüyorum", pattern : "Vd to omoimasu || Vta to omoimasu || Adj-i to omoimasu || Adj-i => Adj-katta to omoimasu || Adj-na => Adj da to omoimasu || Adj-na => Adj datta to omoimasu || N da to omoimasu || N datta to omoimasu", explanation : "birinin düşüncesini || tahminini ifade etmesi" },
    {id : "154",  japanese : "hokkaidou wa mou totemo samui to omoimasu", meaning : "hokkaidou hala soğuktur diye düşünüyorum", pattern : "Vd to omoimasu || Vta to omoimasu || Adj-i to omoimasu || Adj-i => Adj-katta to omoimasu || Adj-na => Adj da to omoimasu || Adj-na => Adj datta to omoimasu || N da to omoimasu || N datta to omoimasu", explanation : "birinin düşüncesini || tahminini ifade etmesi" },
    {id : "155",  japanese : "shiken wa muzukashi katta to omoimasu", meaning : "sınav zordu diye düşünüyorum", pattern : "Vd to omoimasu || Vta to omoimasu || Adj-i to omoimasu || Adj-i => Adj-katta to omoimasu || Adj-na => Adj da to omoimasu || Adj-na => Adj datta to omoimasu || N da to omoimasu || N datta to omoimasu", explanation : "birinin düşüncesini || tahminini ifade etmesi" },
    {id : "156",  japanese : "kare wa shinsetsu da to omoimasu", meaning : "o kibardır diye düşünüyorum", pattern : "Vd to omoimasu || Vta to omoimasu || Adj-i to omoimasu || Adj-i => Adj-katta to omoimasu || Adj-na => Adj da to omoimasu || Adj-na => Adj datta to omoimasu || N da to omoimasu || N datta to omoimasu", explanation : "birinin düşüncesini || tahminini ifade etmesi" },
    {id : "157",  japanese : "ano okusan wa wakai toki kirei datta to omoimasu", meaning : "o bayan gençken güzeldi diye düşünüyorum", pattern : "Vd to omoimasu || Vta to omoimasu || Adj-i to omoimasu || Adj-i => Adj-katta to omoimasu || Adj-na => Adj da to omoimasu || Adj-na => Adj datta to omoimasu || N da to omoimasu || N datta to omoimasu", explanation : "birinin düşüncesini || tahminini ifade etmesi" },
    {id : "158",  japanese : "kare wa nihonjin da to omoimasu", meaning : "o japondur diye düşünüyorum", pattern : "Vd to omoimasu || Vta to omoimasu || Adj-i to omoimasu || Adj-i => Adj-katta to omoimasu || Adj-na => Adj da to omoimasu || Adj-na => Adj datta to omoimasu || N da to omoimasu || N datta to omoimasu", explanation : "birinin düşüncesini || tahminini ifade etmesi" },
    {id : "159",  japanese : "kono tokei wa gosen en datta to omoimasu", meaning : "bu saat 5000 yendi diye düşünüyorum", pattern : "Vd to omoimasu || Vta to omoimasu || Adj-i to omoimasu || Adj-i => Adj-katta to omoimasu || Adj-na => Adj da to omoimasu || Adj-na => Adj datta to omoimasu || N da to omoimasu || N datta to omoimasu", explanation : "birinin düşüncesini || tahminini ifade etmesi" },
    {id : "160",  japanese : "hiragana to katagana wa totemo yasashii to omoimashita", meaning : "hiragana ve katagana çok kolay diye düşünüyordum", pattern : "Vd to omoimasu || Vta to omoimasu || Adj-i to omoimasu || Adj-i => Adj-katta to omoimasu || Adj-na => Adj da to omoimasu || Adj-na => Adj datta to omoimasu || N da to omoimasu || N datta to omoimasu", explanation : "birinin düşüncesini || tahminini ifade etmesi" },
    {id : "161",  japanese : "nihonjin wa kore o 'kotatsu' to iimasu", meaning : "japoncada bu 'kotatsu' diye söylenir", pattern : "… to iimasu || … to iu", explanation : "bir nesnenin alandırılması" },
    {id : "162",  japanese : "nihonjin wa 'kiraz çiçeği' o sakura to iimasu", meaning : "japoncada 'kiraz çiçeği' sakura diye söylenir", pattern : "… to iimasu || … to iu", explanation : "bir nesnenin alandırılması" },
    {id : "163",  japanese : "kono gakki wa koto to iimasu", meaning : "bu muzik aleti 'koto' diye adlandırılır", pattern : "… to iimasu || … to iu", explanation : "bir nesnenin alandırılması" },
    {id : "164",  japanese : "sono hana wa nan to iimasu ka", meaning : "o çiçek nasıl adlandırılır?", pattern : "… to iimasu || … to iu", explanation : "bir nesnenin alandırılması" },
    {id : "165",  japanese : "papatiya wa nihongo de nan to iimasu ka", meaning : "papatya japoncada nasıl söylenir", pattern : "… to iimasu || … to iu", explanation : "bir nesnenin alandırılması" },
    {id : "166",  japanese : "kono ki wa nihongo de sugi to iimasu", meaning : "bu ağaç japoncada 'sugi' diye adlandırılır", pattern : "… to iimasu || … to iu", explanation : "bir nesnenin alandırılması" },
    {id : "167",  japanese : "lütfen oturun wa nihongo de dou iimasu ka", meaning : "lütfen oturun japoncada nasıl söylenir?", pattern : "… to iimasu || … to iu", explanation : "bir nesnenin alandırılması" },
    {id : "168",  japanese : "koto to iu gakki", meaning : "koto diye adlandırılan muzik aleti", pattern : "… to iimasu || … to iu", explanation : "bir nesnenin alandırılması" },
    {id : "169",  japanese : "tanaka to iu hito", meaning : "tanaka diye çağırılan insan", pattern : "… to iimasu || … to iu", explanation : "bir nesnenin alandırılması" },
    {id : "170",  japanese : "kaki to iu kudamono", meaning : "kaki diye adlandırılan meyve", pattern : "… to iimasu || … to iu", explanation : "bir nesnenin alandırılması" },
    {id : "171",  japanese : "yukata to iu kimono", meaning : "yukata diye adlandırılan kimono", pattern : "… to iimasu || … to iu", explanation : "bir nesnenin alandırılması" },
    {id : "172",  japanese : "kore wa nan to iu mono desu ka / o hashi desu", meaning : "bu ne diye adlandırılan bir şeydir? / çubuktur", pattern : "… to iimasu || … to iu", explanation : "bir nesnenin alandırılması" },
    {id : "173",  japanese : "kappadokia to iu tokoro o shitte imasu ka", meaning : "kapadokya diye adlandırılan yeri biliyor musun?", pattern : "… to iimasu || … to iu", explanation : "bir nesnenin alandırılması" },
    {id : "174",  japanese : "adana de yuki ga futta to iu kiji o yomimashita", meaning : "adanada kar yağdığını söyleyen yazıyı okudum", pattern : "… to iimasu || … to iu", explanation : "bir nesnenin alandırılması" },
    {id : "175",  japanese : "oosaka no takaakisan ga nakunatta to iu shirase o moraimashita", meaning : "osakalı takaakisan'ı kaybettiğimiz haberini aldım", pattern : "… to iimasu || … to iu", explanation : "bir nesnenin alandırılması" },
    {id : "176",  japanese : "kanji wa zenbu de yaku yon man ji ga aru to iu koto o shitte imasu ka", meaning : "kanji alfabesi yaklaşık olarak 40 bin harf olduğunu biliyor musun?", pattern : "… to iimasu || … to iu", explanation : "bir nesnenin alandırılması" },
    {id : "177",  japanese : "toukyou no jinkou wa oosaka no jinkou no yori yon bai desu", meaning : "tokyonun nüfusu osakanın 4 katıdır", pattern : "A wa B no … bai desu || A wa B yori …bai Adj-i or Adj-na desu || A wa B yori … bai Adj-i => Adj ku or Adj-na => Adj ni + Vmasu", explanation : "bir cismin katlara göre ifadesi" },
    {id : "178",  japanese : "hikouki wa shinkansen yori san bai hayai desu", meaning : "uçak şinkansenden 3 kat hızlıdır", pattern : "A wa B no … bai desu || A wa B yori …bai Adj-i or Adj-na desu || A wa B yori … bai Adj-i => Adj ku or Adj-na => Adj ni + Vmasu", explanation : "bir cismin katlara göre ifadesi" },
    {id : "179",  japanese : "hikouki wa shinkansen yori san bai ijyou hayaku tobimasu", meaning : "uçak şinkansenden 3 kat hızlı uçar", pattern : "A wa B no … bai desu || A wa B yori …bai Adj-i or Adj-na desu || A wa B yori … bai Adj-i => Adj ku or Adj-na => Adj ni + Vmasu", explanation : "bir cismin katlara göre ifadesi" },
    {id : "180",  japanese : "atarashii kuruma wa mae no kuruma yori san bai gurai shizuka desu", meaning : "yeni araba önceki arabadan 3 kat sessizdir", pattern : "A wa B no … bai desu || A wa B yori …bai Adj-i or Adj-na desu || A wa B yori … bai Adj-i => Adj ku or Adj-na => Adj ni + Vmasu", explanation : "bir cismin katlara göre ifadesi" },
    {id : "181",  japanese : "kuruma no enjin (engine) o naoshita ato, kuruma wa ni bai shizuka ni narimashita", meaning : "arabanın motorunu tamir ettikten sonra, araba 2 kat daha sessiz oldu", pattern : "A wa B no … bai desu || A wa B yori …bai Adj-i or Adj-na desu || A wa B yori … bai Adj-i => Adj ku or Adj-na => Adj ni + Vmasu", explanation : "bir cismin katlara göre ifadesi" },
    {id : "182",  japanese : "toruko no menseki wa nihon no menseki no yaku ni bai desu", meaning : "türkiyenin yüzölçümü japonyanın yüzölçümünün yaklaşık 2 katıdır", pattern : "A wa B no … bai desu || A wa B yori …bai Adj-i or Adj-na desu || A wa B yori … bai Adj-i => Adj ku or Adj-na => Adj ni + Vmasu", explanation : "bir cismin katlara göre ifadesi" },
    {id : "183",  japanese : "san bun no ichi", meaning : "üç bölümün biri", pattern : "A bun no B", explanation : "oransal ifadeler" },
    {id : "184",  japanese : "jyuu bun no nana", meaning : "on bölümün yedisi", pattern : "A bun no B", explanation : "oransal ifadeler" },
    {id : "185",  japanese : "toruko no jinkou wa nippon no jinkou no yaku ni bun no ichi desu", meaning : "türkiyenin nüfusu japonyanın nüfusunun yaklaşık ikide biridir", pattern : "A bun no B", explanation : "oransal ifadeler" },
    {id : "186",  japanese : "nippon no menseki wa furansu no menseki no yaku san bun no ni desu", meaning : "japonyanın yüzölçümü fransanın yüzölçümünün yaklaşık olarak üçte ikisidir", pattern : "A bun no B", explanation : "oransal ifadeler" },
    {id : "187",  japanese : "kyouto wa nara yori ookii desu", meaning : "kyouto nara'dan büyüktür", pattern : "A wa B yori [Adj-i || Adj-na => Adj ] desu", explanation : "kıyaslama || karşılaştırma" },
    {id : "188",  japanese : "inaka no hito wa machi no hito yori motto shinsetsu desu", meaning : "kırsal kesim insanı şehir insanından daha cana yakındır", pattern : "A wa B yori [Adj-i || Adj-na => Adj ] desu", explanation : "kıyaslama || karşılaştırma" },
    {id : "189",  japanese : "kanji wa hiragana yori muzukashii desu", meaning : "kanji hiraganadan zordur", pattern : "A wa B yori [Adj-i || Adj-na => Adj ] desu", explanation : "kıyaslama || karşılaştırma" },
    {id : "190",  japanese : "atarashii jisho wa mae no jisho yori motto benri desu", meaning : "yeni sözlük önceki sözlükten çok daha kullanışlıdır", pattern : "A wa B yori [Adj-i || Adj-na => Adj ] desu", explanation : "kıyaslama || karşılaştırma" },
    {id : "191",  japanese : "kanji to hiragana to dochira ga muzukashii desu ka / kanji no hou ga muzukashii desu", meaning : "kanji ile hirahanadan hangisi zordur / kanji daha zordur", pattern : "[ A to B to dochira ga Adj-i || Adj-na desu ka] || [A no hou ga Adj-i || Adj-na desu ]", explanation : "iki nesnenin soru sorularak kıyaslanması" },
    {id : "192",  japanese : "mura to machi to dochira ga shizuka desu ka / mura no hou ga shizuka desu", meaning : "köy ile şehirden hangisi sessizdir / köy daha sessizdir", pattern : "[ A to B to dochira ga Adj-i || Adj-na desu ka] || [A no hou ga Adj-i || Adj-na desu ]", explanation : "iki nesnenin soru sorularak kıyaslanması" },
    {id : "193",  japanese : "hokkaidou to kyuushuu to dochira ga atsui desu ka / kyuushuu no hou ga atsui desu", meaning : "hokkaido ile kyuşu'dan hangisi sıcaktır / kyuşu daha sıcaktır", pattern : "[ A to B to dochira ga Adj-i || Adj-na desu ka] || [A no hou ga Adj-i || Adj-na desu ]", explanation : "iki nesnenin soru sorularak kıyaslanması" },
    {id : "194",  japanese : "kanji to hiragana to roomaji no uchi de, dore ga ichiban yasashii desu ka / roomaji ga ichiban yasashii desu", meaning : "kanji, hiragana ve latin alfabeleri arasında hangisi en kolaydır / latin alfabesi en kolaydır", pattern : "A to B to C no [ uchi de dore || naka de doko || dare || itsu ] ga ichiban [ Adj-i || Adj-na ] ", explanation : "üç veya daha fazla nesneyi kıyaslamak" },
    {id : "195",  japanese : "toukyou to osaka to kyouto no uchi de, doko ga ichiban furui desu ka / kyouto ga ichiban furui desu", meaning : "tokyo, osaka ve kyoto şehirleri içinde neresi en eskidir / kyouto en eskidir", pattern : "A to B to C no [ uchi de dore || naka de doko || dare || itsu ] ga ichiban [ Adj-i || Adj-na ] ", explanation : "üç veya daha fazla nesneyi kıyaslamak" },
    {id : "196",  japanese : "kono sandai no uchi de dono kuruma ga ichiban hayai desu ka / kore ga ichiban hayai desu", meaning : "bu üç adet araba içinde hangi araba en hızlıdır / bu en hızlıdır", pattern : "A to B to C no [ uchi de dore || naka de doko || dare || itsu ] ga ichiban [ Adj-i || Adj-na ] ", explanation : "üç veya daha fazla nesneyi kıyaslamak" },
    {id : "197",  japanese : "fujisan wa nihon de ichiban takai yama desu ", meaning : "fujisan japonyanın en yüksek dağıdır", pattern : "N de …", explanation : "kıyaslamada sınır ve kapsam ifade etmek" },
    {id : "198",  japanese : "sekai de dono yama ga ichiban takai desu ka", meaning : "dünyada hangi dağ en yüksektir", pattern : "N de …", explanation : "kıyaslamada sınır ve kapsam ifade etmek" },
    {id : "199",  japanese : "ichi nen jyuu de ichiban samui kisetsu wa itsu desu ka", meaning : "bir yıl içinde en soğuk mevsim ne zamandır", pattern : "N de …", explanation : "kıyaslamada sınır ve kapsam ifade etmek" },
    {id : "200",  japanese : "zenbu de gakusei ga san jyuu ni nin imasu", meaning : "tüm olarak öğrenciler 32 kişi varlar", pattern : "N de …", explanation : "kıyaslamada sınır ve kapsam ifade etmek" },
    {id : "201",  japanese : "nihon no daigaku de dore ga ichiban furui desu ka", meaning : "japonyanın üniversitelerinden hangisi en eski olanıdır", pattern : "N de …", explanation : "kıyaslamada sınır ve kapsam ifade etmek" },
    {id : "202",  japanese : "kyou wa kinou hodo samu kunai desu", meaning : "bugün dün kadar soğuk değil", pattern : "A wa B hodo [Adj-i => Adj kunai desu || Adj-na => Adj dewa arimasen]", explanation : "…kadar, olumsuz ifadelerde kullanılır" },
    {id : "203",  japanese : "ankara wa istanburu hodo furu kunai desu", meaning : "ankara istanbul kadar eski değil", pattern : "A wa B hodo [Adj-i => Adj kunai desu || Adj-na => Adj dewa arimasen]", explanation : "…kadar, olumsuz ifadelerde kullanılır" },
    {id : "204",  japanese : "yeşilırmak wa kızılırmak hodo naga kunai desu", meaning : "yeşilırmak kızılırmak kadar uzun değil", pattern : "A wa B hodo [Adj-i => Adj kunai desu || Adj-na => Adj dewa arimasen]", explanation : "…kadar, olumsuz ifadelerde kullanılır" },
    {id : "205",  japanese : "kyoushitsu wa toshokan hodo shizuka de wa arimasen", meaning : "dershane kütüphane kadar sessiz değildir", pattern : "A wa B hodo [Adj-i => Adj kunai desu || Adj-na => Adj dewa arimasen]", explanation : "…kadar, olumsuz ifadelerde kullanılır" },
    {id : "206",  japanese : "oosaka wa kyouto hodo kirei de wa arimasen", meaning : "osaka kyoto kadar güzel değildir", pattern : "A wa B hodo [Adj-i => Adj kunai desu || Adj-na => Adj dewa arimasen]", explanation : "…kadar, olumsuz ifadelerde kullanılır" },
    {id : "207",  japanese : "hiragana wa kanji hodo fukuzatsu de wa arimasen", meaning : "hiragana kanji kadar karışık değildir", pattern : "A wa B hodo [Adj-i => Adj kunai desu || Adj-na => Adj dewa arimasen]", explanation : "…kadar, olumsuz ifadelerde kullanılır" },
    {id : "208",  japanese : "kore to sore wa onaji desu", meaning : "bu ile şu aynıdır", pattern : "A to B wa [ onaji desu || onaji gurai || onaji gurai Adj-i || onaji gurai Adj-na => onaji gurai Adj || onaji N ] desu", explanation : "aynılık ifadesi" },
    {id : "209",  japanese : "koube no jinkou to kyouto no jinkou wa onaji gurai desu", meaning : "kobenin nüfusu ile kyoutonun nüfusu hemen hemen aynıdır", pattern : "A to B wa [ onaji desu || onaji gurai || onaji gurai Adj-i || onaji gurai Adj-na => onaji gurai Adj || onaji N ] desu", explanation : "aynılık ifadesi" },
    {id : "210",  japanese : "koube no jinkou to kyouto no jinkou to onaji gurai desu", meaning : "kobenin nüfusu kyoutonun nüfusu ile yaklaşık olarak aynıdır", pattern : "A to B wa [ onaji desu || onaji gurai || onaji gurai Adj-i || onaji gurai Adj-na => onaji gurai Adj || onaji N ] desu", explanation : "aynılık ifadesi" },
    {id : "211",  japanese : "hiragana to katagana wa onaji gurai kantan desu", meaning : "hiragana ve katagana hemen hemen aynı basitliktedir", pattern : "A to B wa [ onaji desu || onaji gurai || onaji gurai Adj-i || onaji gurai Adj-na => onaji gurai Adj || onaji N ] desu", explanation : "aynılık ifadesi" },
    {id : "212",  japanese : "nigatsu wa ichigatsu to onaji gurai samui desu", meaning : "şubat ayı ocak ayı ile hemen hemen aynı soğukluktadır", pattern : "A to B wa [ onaji desu || onaji gurai || onaji gurai Adj-i || onaji gurai Adj-na => onaji gurai Adj || onaji N ] desu", explanation : "aynılık ifadesi" },
    {id : "213",  japanese : "sakka no natsume souseki to kavataba yasunari wa onaji gurai yuumei desu", meaning : "yazarlar sooseki natsume ile kavataba ", pattern : "A to B wa [ onaji desu || onaji gurai || onaji gurai Adj-i || onaji gurai Adj-na => onaji gurai Adj || onaji N ] desu", explanation : "aynılık ifadesi" },
    {id : "214",  japanese : "Osuman Torukogo to Torukogo wa chigaimasu", meaning : "osmanlıca ile türkçe farklıdır", pattern : "A to B wa chigaimasu || A wa B to chigaimasu", explanation : "farklılık ifadesi" },
    {id : "215",  japanese : "Torukomen to Yorukku wa chigaimasu", meaning : "türkmen ile yörük farklıdır", pattern : "A to B wa chigaimasu || A wa B to chigaimasu", explanation : "farklılık ifadesi" },
    {id : "216",  japanese : "Tanken wa katana to chigaimasu", meaning : "hançer kılıçtan farklıdır", pattern : "A to B wa chigaimasu || A wa B to chigaimasu", explanation : "farklılık ifadesi" },
    {id : "217",  japanese : "Densha wa kisha to chigaimasu", meaning : "elektrikli tren buharlı trenden farklıdır", pattern : "A to B wa chigaimasu || A wa B to chigaimasu", explanation : "farklılık ifadesi" },
    {id : "218",  japanese : "watashi wa yasukutte chiisai kuruma ga hoshii desu", meaning : "hızlı olup küçük bir araba istiyorum", pattern : "Subject Object [ ga hoshii desu ||  [ ga || wa ] hoshi katta desu ]", explanation : "istek, isteme duygusu ifadesi" },
    {id : "219",  japanese : "ookii kuruma wa hoshi kunai desu", meaning : "büyük araba istemiyorum", pattern : "Subject Object [ ga hoshii desu ||  [ ga || wa ] hoshi katta desu ]", explanation : "istek, isteme duygusu ifadesi" },
    {id : "220",  japanese : "watashi wa omoi kaban wa hoshi kunai desu. karui kaban ga hoshii desu", meaning : "ben ağır çanta istemiyorum. hafif çanta istiyorum", pattern : "Subject Object [ ga hoshii desu ||  [ ga || wa ] hoshi katta desu ]", explanation : "istek, isteme duygusu ifadesi" },
    {id : "221",  japanese : "kodomo no toki wa piano ga hoshi katta desu", meaning : "çocukken piyano istiyordum", pattern : "Subject Object [ ga hoshii desu ||  [ ga || wa ] hoshi katta desu ]", explanation : "istek, isteme duygusu ifadesi" },
    {id : "222",  japanese : "sono toki otouto wa jitensha ga hoshi kunakatta desu ", meaning : "o zamanlar erkek kardeşim bisiklet istememişti", pattern : "Subject Object [ ga hoshii desu ||  [ ga || wa ] hoshi katta desu ]", explanation : "istek, isteme duygusu ifadesi" },
    {id : "223",  japanese : "anata wa ima nani ga ichiban hoshii desu ka / watashi wa atarashii keitai denwa ga hoshii desu", meaning : "sen şu an en çok ne istersin / yeni cep telefonu isterim", pattern : "Subject Object [ ga hoshii desu ||  [ ga || wa ] hoshi katta desu ]", explanation : "istek, isteme duygusu ifadesi" },
    {id : "224",  japanese : "mainichi oyogi tai desu", meaning : "her gün yüzmek istiyorum", pattern : "Subject Object [ [ ga || o ] Vs tai || Vs  takatta || [ wa || o ] Vs takunai || Vs takunakatta ] desubir eylem yapma isteği ifadesi", explanation : "" },
    {id : "225",  japanese : "watashi wa tokei ga kai tai desu", meaning : "ben saat satın almak istiyorum", pattern : "Subject Object [ [ ga || o ] Vs tai || Vs  takatta || [ wa || o ] Vs takunai || Vs takunakatta ] desubir eylem yapma isteği ifadesi", explanation : "" },
    {id : "226",  japanese : "nihon e iki tai desu", meaning : "japonyaya gitmek istiyorum", pattern : "Subject Object [ [ ga || o ] Vs tai || Vs  takatta || [ wa || o ] Vs takunai || Vs takunakatta ] desubir eylem yapma isteği ifadesi", explanation : "" },
    {id : "227",  japanese : "ima koohii o nomi takunai desu", meaning : "şimdi kahve içmek istemiyorum", pattern : "Subject Object [ [ ga || o ] Vs tai || Vs  takatta || [ wa || o ] Vs takunai || Vs takunakatta ] desubir eylem yapma isteği ifadesi", explanation : "" },
    {id : "228",  japanese : "tsumetai biiru ga hoshii desu", meaning : "soğuk bira istiyorum", pattern : "Subject Object [ [ ga || o ] Vs tai || Vs  takatta || [ wa || o ] Vs takunai || Vs takunakatta ] desubir eylem yapma isteği ifadesi", explanation : "" },
    {id : "229",  japanese : "anata wa nani ga tabe tai desu ka / o sushi ga tabe tai desu", meaning : "sen ne yemek istersin / suşi yemek istiyorum", pattern : "Subject Object [ [ ga || o ] Vs tai || Vs  takatta || [ wa || o ] Vs takunai || Vs takunakatta ] desubir eylem yapma isteği ifadesi", explanation : "" },
    {id : "230",  japanese : "tenpura wa dou desu ka / tenpura wa tabe takunai desu", meaning : "tenpuraya ne dersiniz / tenpura yemek istemiyorum", pattern : "Subject Object [ [ ga || o ] Vs tai || Vs  takatta || [ wa || o ] Vs takunai || Vs takunakatta ] desubir eylem yapma isteği ifadesi", explanation : "" },
    {id : "231",  japanese : "watashi wa kurashikku (classic) ongaku ga kiki tai desu", meaning : "ben klasik müzik dinlemek istiyorum", pattern : "Subject Object [ [ ga || o ] Vs tai || Vs  takatta || [ wa || o ] Vs takunai || Vs takunakatta ] desubir eylem yapma isteği ifadesi", explanation : "" },
    {id : "232",  japanese : "watashi wa ano mono wa kai takunakatta desu", meaning : "ben o şeyi satın almak istemiyorum", pattern : "Subject Object [ [ ga || o ] Vs tai || Vs  takatta || [ wa || o ] Vs takunai || Vs takunakatta ] desubir eylem yapma isteği ifadesi", explanation : "" },
    {id : "233",  japanese : "watashi wa haha no ryouri ga tabe tai desu", meaning : "ben annemin yemeklerini yemek isterim", pattern : "Subject Object [ [ ga || o ] Vs tai || Vs  takatta || [ wa || o ] Vs takunai || Vs takunakatta ] desubir eylem yapma isteği ifadesi", explanation : "" },
    {id : "234",  japanese : "watashi wa tsuki ni iki tai desu. demo muri desu.", meaning : "ben aya gitmek isterim. ama imkansız.", pattern : "Subject Object [ [ ga || o ] Vs tai || Vs  takatta || [ wa || o ] Vs takunai || Vs takunakatta ] desubir eylem yapma isteği ifadesi", explanation : "" },
    {id : "235",  japanese : "musukosan wa jitensha ga hoshii to itte imasu", meaning : "oğlum bisiklet istediğini söylüyor", pattern : "Subject wa Object [ ga hoshii || [ [ ga || wa ] Vs tai ] to itte imasu ", explanation : "birinin bir şeyi istediğini söylemek" },
    {id : "236",  japanese : "alisan wa nihon e iki tai to itte imasu", meaning : "ali japonyaya gitmek istediğini söylüyor", pattern : "Subject wa Object [ ga hoshii || [ [ ga || wa ] Vs tai ] to itte imasu ", explanation : "birinin bir şeyi istediğini söylemek" },
    {id : "237",  japanese : "tanakasan wa mura ni sumi tai to itte imasu", meaning : "tanakasan köyde yaşamak istediğini söylüyor", pattern : "Subject wa Object [ ga hoshii || [ [ ga || wa ] Vs tai ] to itte imasu ", explanation : "birinin bir şeyi istediğini söylemek" },
    {id : "238",  japanese : "kare ga uchuu ni iki tai to itte imasu", meaning : "o uzaya gitmek istediğini söylüyor", pattern : "Subject wa Object [ ga hoshii || [ [ ga || wa ] Vs tai ] to itte imasu ", explanation : "birinin bir şeyi istediğini söylemek" },
    {id : "239",  japanese : "uchi no kodomo wa atarashii omocha o hoshi gatte imasu", meaning : "çocuğumuz yeni oyuncaklar istiyor", pattern : "Subject wa Object [ o hoshi gatte imasu || Vs ta gatte imasu ]", explanation : "başka birinin arzusunu ifade etmek. garu fiili canı çekmek, canı istemek anlamında" },
    {id : "240",  japanese : "watashi no kazoku wa inaka ni sumi ta gatte imasu", meaning : "ailem kırsal kesimde yaşamak istiyor", pattern : "Subject wa Object [ o hoshi gatte imasu || Vs ta gatte imasu ]", explanation : "başka birinin arzusunu ifade etmek. garu fiili canı çekmek, canı istemek anlamında" },
    {id : "241",  japanese : "ani mo nihon e iki ta gatte imasu", meaning : "abim japonyaya gitmek istiyor", pattern : "Subject wa Object [ o hoshi gatte imasu || Vs ta gatte imasu ]", explanation : "başka birinin arzusunu ifade etmek. garu fiili canı çekmek, canı istemek anlamında" },
    {id : "242",  japanese : "musume wa sensei ni nari ta gatte imasu", meaning : "kızım öğretmen olmak istiyor", pattern : "Subject wa Object [ o hoshi gatte imasu || Vs ta gatte imasu ]", explanation : "başka birinin arzusunu ifade etmek. garu fiili canı çekmek, canı istemek anlamında" },
    {id : "243",  japanese : "watashi wa opera ga suki desu", meaning : "ben opera severim", pattern : "Subject wa Object [  ga [ suki || kirai ] desu || wa [ suki || kirai ] de wa arimasen ] ", explanation : "hoşa giden, sevilen || hoşa gitmeyen, sevilmeyen" },
    {id : "244",  japanese : "anata wa nihon no sake ga suki desu ka / hai, suki desu", meaning : "sen japon içkisi sever misin / evet severim", pattern : "Subject wa Object [  ga [ suki || kirai ] desu || wa [ suki || kirai ] de wa arimasen ] ", explanation : "hoşa giden, sevilen || hoşa gitmeyen, sevilmeyen" },
    {id : "245",  japanese : "watashi wa ame ga kirai desu", meaning : "ben yağmurdan hoşlanmam", pattern : "Subject wa Object [  ga [ suki || kirai ] desu || wa [ suki || kirai ] de wa arimasen ] ", explanation : "hoşa giden, sevilen || hoşa gitmeyen, sevilmeyen" },
    {id : "246",  japanese : "sukina tabemono wa sushi desu ga, udon ga kirai desu", meaning : "sevdiğim yiyecek suşidir ama udon sevmem", pattern : "Subject wa Object [  ga [ suki || kirai ] desu || wa [ suki || kirai ] de wa arimasen ] ", explanation : "hoşa giden, sevilen || hoşa gitmeyen, sevilmeyen" },
    {id : "247",  japanese : "anata wa koohii ga suki desu ka / hai, suki desu", meaning : "sen kahve sever misin / evet severim", pattern : "Subject wa Object [  ga [ suki || kirai ] desu || wa [ suki || kirai ] de wa arimasen ] ", explanation : "hoşa giden, sevilen || hoşa gitmeyen, sevilmeyen" },
    {id : "248",  japanese : "sakana wa kirai de wa arimasen", meaning : "balık sevmiyor değilim", pattern : "Subject wa Object [  ga [ suki || kirai ] desu || wa [ suki || kirai ] de wa arimasen ] ", explanation : "hoşa giden, sevilen || hoşa gitmeyen, sevilmeyen" },
    {id : "249",  japanese : "sakana wa kirai de wa arimasen ga, amari suki de mo arimasen", meaning : "balık sevmiyor değilim ama pek seviyor da değilim", pattern : "Subject wa Object [  ga [ suki || kirai ] desu || wa [ suki || kirai ] de wa arimasen ] ", explanation : "hoşa giden, sevilen || hoşa gitmeyen, sevilmeyen" },
    {id : "250",  japanese : "anata wa suika ga suki desu ka / iie, suika wa amari suki de wa arimasen", meaning : "sen karpuz sever misin / hayır karpuzu pek seviyor değilim", pattern : "Subject wa Object [  ga [ suki || kirai ] desu || wa [ suki || kirai ] de wa arimasen ] ", explanation : "hoşa giden, sevilen || hoşa gitmeyen, sevilmeyen" },
    {id : "251",  japanese : "anata wa baruketto booru ga suki desu ka / iie, amari suki de wa arimasen", meaning : "sen basketbol sever misin / hayır, pek seviyor değilim", pattern : "Subject wa Object [  ga [ suki || kirai ] desu || wa [ suki || kirai ] de wa arimasen ] ", explanation : "hoşa giden, sevilen || hoşa gitmeyen, sevilmeyen" },
    {id : "252",  japanese : "anata wa inu ga suki desu ka", meaning : "sen köpek sever misin", pattern : "Subject wa Object [  ga [ suki || kirai ] desu || wa [ suki || kirai ] de wa arimasen ] ", explanation : "hoşa giden, sevilen || hoşa gitmeyen, sevilmeyen" },
    {id : "253",  japanese : "anata wa kanojo ga suki desu ka", meaning : "sen o kızı sever misin (insan olarak)", pattern : "Subject wa Object [  ga [ suki || kirai ] desu || wa [ suki || kirai ] de wa arimasen ] ", explanation : "hoşa giden, sevilen || hoşa gitmeyen, sevilmeyen" },
    {id : "254",  japanese : "anata wa kanojo [ o || ga ] ai shite imasu ka ", meaning : "sen o kızı seviyor musun (aşık)", pattern : "Subject wa Object [  ga [ suki || kirai ] desu || wa [ suki || kirai ] de wa arimasen ] ", explanation : "hoşa giden, sevilen || hoşa gitmeyen, sevilmeyen" },
    {id : "255",  japanese : "watashi wa sakkaa ga daisuki desu", meaning : "ben futbolu çok severim", pattern : "Subject wa Object ga [ daisuki || daikirai ] desu", explanation : "çok sevmek, çok sevmemek" },
    {id : "256",  japanese : "watashi no imouto wa ongaku ga daisuki desu", meaning : "kız kardeşim müziği çok sever", pattern : "Subject wa Object ga [ daisuki || daikirai ] desu", explanation : "çok sevmek, çok sevmemek" },
    {id : "257",  japanese : "akachan wa omocha to asobi ga daisuki desu", meaning : "bebekler oyuncaklarla oynamaya bayılırlar", pattern : "Subject wa Object ga [ daisuki || daikirai ] desu", explanation : "çok sevmek, çok sevmemek" },
    {id : "258",  japanese : "nezumi wa neko ga daikirai desu", meaning : "fareler kedilerden nefret ederler", pattern : "Subject wa Object ga [ daisuki || daikirai ] desu", explanation : "çok sevmek, çok sevmemek" },
    {id : "259",  japanese : "chichi wa o sake ga daikirai desu", meaning : "babam içkiden nefret eder", pattern : "Subject wa Object ga [ daisuki || daikirai ] desu", explanation : "çok sevmek, çok sevmemek" },
    {id : "260",  japanese : "kare wa uwasabanashi ga daikirai desu", meaning : "o dedikodulardan nefret eder", pattern : "Subject wa Object ga [ daisuki || daikirai ] desu", explanation : "çok sevmek, çok sevmemek" },
    {id : "261",  japanese : "anata no sukina kudamono wa nan desu ka / ichigo to painappuru (pineapple) desu", meaning : "senin sevdiğin meyve nedir / çilek ve ananastır", pattern : "Subject no [ sukina || kiraina || daisukina || daikiraina ] Object", explanation : "suki, kirai kelimelerini na sıfatı olarak ifade etmek" },
    {id : "262",  japanese : "watashi wa hana ga daisuki desu", meaning : "ben çiçekleri çok severim", pattern : "Subject no [ sukina || kiraina || daisukina || daikiraina ] Object", explanation : "suki, kirai kelimelerini na sıfatı olarak ifade etmek" },
    {id : "263",  japanese : "watashi no kiraina koto wa waruguchi desu", meaning : "benim sevmediğim şey iftiradır", pattern : "Subject no [ sukina || kiraina || daisukina || daikiraina ] Object", explanation : "suki, kirai kelimelerini na sıfatı olarak ifade etmek" },
    {id : "264",  japanese : "nezumi no daikiraina doubutsu ga neko desu", meaning : "farenin en çok nefret ettiği hayvan kedidir", pattern : "Subject no [ sukina || kiraina || daisukina || daikiraina ] Object", explanation : "suki, kirai kelimelerini na sıfatı olarak ifade etmek" },
    {id : "265",  japanese : "hakansan wa sakkaa ga jouzu desu", meaning : "hakan futbolda çok becerikli", pattern : "Subject wa Theme ga [ jouzu || heta ] desu", explanation : "beceri, yeteken ifadeleri… jouzu üstün yetenek ve başarıyı ifade eder. övücü bir anlamı vardır ve kişinin bunu kendi için kullanması bazen kaba kaçabilir. heta ise konu ile ilgili hiçbir yetenek veya beceri olmadığını ifade eder" },
    {id : "266",  japanese : "kanojo wa piano ga jouzu desu", meaning : "o bayan piyanoda çok başarılıdır (ustadır)", pattern : "Subject wa Theme ga [ jouzu || heta ] desu", explanation : "beceri, yeteken ifadeleri… jouzu üstün yetenek ve başarıyı ifade eder. övücü bir anlamı vardır ve kişinin bunu kendi için kullanması bazen kaba kaçabilir. heta ise konu ile ilgili hiçbir yetenek veya beceri olmadığını ifade eder" },
    {id : "267",  japanese : "musuko wa oyogi ga jouzu desu", meaning : "oğlum yüzmede çok iyidir (çok yeteneklidir)", pattern : "Subject wa Theme ga [ jouzu || heta ] desu", explanation : "beceri, yeteken ifadeleri… jouzu üstün yetenek ve başarıyı ifade eder. övücü bir anlamı vardır ve kişinin bunu kendi için kullanması bazen kaba kaçabilir. heta ise konu ile ilgili hiçbir yetenek veya beceri olmadığını ifade eder" },
    {id : "268",  japanese : "haha wa ryouri ga jouzu desu", meaning : "annem yemek pişirmekte çok beceriklidir", pattern : "Subject wa Theme ga [ jouzu || heta ] desu", explanation : "beceri, yeteken ifadeleri… jouzu üstün yetenek ve başarıyı ifade eder. övücü bir anlamı vardır ve kişinin bunu kendi için kullanması bazen kaba kaçabilir. heta ise konu ile ilgili hiçbir yetenek veya beceri olmadığını ifade eder" },
    {id : "269",  japanese : "seitosan wa hiragana ga heta desu", meaning : "öğrenciler hiragana yazmakta kötüler", pattern : "Subject wa Theme ga [ jouzu || heta ] desu", explanation : "beceri, yeteken ifadeleri… jouzu üstün yetenek ve başarıyı ifade eder. övücü bir anlamı vardır ve kişinin bunu kendi için kullanması bazen kaba kaçabilir. heta ise konu ile ilgili hiçbir yetenek veya beceri olmadığını ifade eder" },
    {id : "270",  japanese : "kare wa e ga heta desu", meaning : "onun resim yapmaya yeteneği yok", pattern : "Subject wa Theme ga [ jouzu || heta ] desu", explanation : "beceri, yeteken ifadeleri… jouzu üstün yetenek ve başarıyı ifade eder. övücü bir anlamı vardır ve kişinin bunu kendi için kullanması bazen kaba kaçabilir. heta ise konu ile ilgili hiçbir yetenek veya beceri olmadığını ifade eder" },
    {id : "271",  japanese : "watashi wa nihongo ga heta desu", meaning : "japoncada kötüyüm", pattern : "Subject wa Theme ga [ jouzu || heta ] desu", explanation : "beceri, yeteken ifadeleri… jouzu üstün yetenek ve başarıyı ifade eder. övücü bir anlamı vardır ve kişinin bunu kendi için kullanması bazen kaba kaçabilir. heta ise konu ile ilgili hiçbir yetenek veya beceri olmadığını ifade eder" },
    {id : "272",  japanese : "kanojo wa ryouri ga heta desu", meaning : "o yemek yapmakta beceriksizdir", pattern : "Subject wa Theme ga [ jouzu || heta ] desu", explanation : "beceri, yeteken ifadeleri… jouzu üstün yetenek ve başarıyı ifade eder. övücü bir anlamı vardır ve kişinin bunu kendi için kullanması bazen kaba kaçabilir. heta ise konu ile ilgili hiçbir yetenek veya beceri olmadığını ifade eder" },
    {id : "273",  japanese : "kare wa nihongo ga tokui desu (başarılı)", meaning : "o japoncada başarılıdır", pattern : "Subject wa Theme ga [ tokui || nigate ] desu", explanation : "kıvanç, övünme, böbürlenme… tokui jouzu kadar güçlü değil. yetenekten çok öğrenilmiş edinilmiş becerileri ifade eder. kişi bunu kendisi için de kullanırsa kaba olmaz. jouzu ise kaba karşılanabilir. nigate ise bir konuda acemiliği, beceriksizliği, mahcupluğu ifade eder." },
    {id : "274",  japanese : "kare wa nihongo ga jouzu desu (ana dili gibi)", meaning : "o japoncada çok iyidir (yetenekli)", pattern : "Subject wa Theme ga [ tokui || nigate ] desu", explanation : "kıvanç, övünme, böbürlenme… tokui jouzu kadar güçlü değil. yetenekten çok öğrenilmiş edinilmiş becerileri ifade eder. kişi bunu kendisi için de kullanırsa kaba olmaz. jouzu ise kaba karşılanabilir. nigate ise bir konuda acemiliği, beceriksizliği, mahcupluğu ifade eder." },
    {id : "275",  japanese : "anata no tokuina supootsu wa nana desu ka / watashi wa sukii ga tokui desu", meaning : "senin iyi olduğun spor dalı nedir / ben kayakta iyiyimdir", pattern : "Subject wa Theme ga [ tokui || nigate ] desu", explanation : "kıvanç, övünme, böbürlenme… tokui jouzu kadar güçlü değil. yetenekten çok öğrenilmiş edinilmiş becerileri ifade eder. kişi bunu kendisi için de kullanırsa kaba olmaz. jouzu ise kaba karşılanabilir. nigate ise bir konuda acemiliği, beceriksizliği, mahcupluğu ifade eder." },
    {id : "276",  japanese : "kanojo wa souji ga nigate desu (beceriksiz)", meaning : "o temizlik yapmada beceriksizdir", pattern : "Subject wa Theme ga [ tokui || nigate ] desu", explanation : "kıvanç, övünme, böbürlenme… tokui jouzu kadar güçlü değil. yetenekten çok öğrenilmiş edinilmiş becerileri ifade eder. kişi bunu kendisi için de kullanırsa kaba olmaz. jouzu ise kaba karşılanabilir. nigate ise bir konuda acemiliği, beceriksizliği, mahcupluğu ifade eder." },
    {id : "277",  japanese : "kanojo wa souji ga heta desu (hiç beceremez)", meaning : "o temizlik yapmayı hiç beceremez", pattern : "Subject wa Theme ga [ tokui || nigate ] desu", explanation : "kıvanç, övünme, böbürlenme… tokui jouzu kadar güçlü değil. yetenekten çok öğrenilmiş edinilmiş becerileri ifade eder. kişi bunu kendisi için de kullanırsa kaba olmaz. jouzu ise kaba karşılanabilir. nigate ise bir konuda acemiliği, beceriksizliği, mahcupluğu ifade eder." },
    {id : "278",  japanese : "watashi wa shougakusei no koro sansuu ga nigate deshita", meaning : "ilkokul öğrencisiyken matematiğim kötüydü", pattern : "Subject wa Theme ga [ tokui || nigate ] desu", explanation : "kıvanç, övünme, böbürlenme… tokui jouzu kadar güçlü değil. yetenekten çok öğrenilmiş edinilmiş becerileri ifade eder. kişi bunu kendisi için de kullanırsa kaba olmaz. jouzu ise kaba karşılanabilir. nigate ise bir konuda acemiliği, beceriksizliği, mahcupluğu ifade eder." },
    {id : "279",  japanese : "watashi wa shougakusei no koro sansuu ga heta deshita", meaning : "ilkokul öğrencisiyken matematiğe hiç yeteneğim yoktu", pattern : "Subject wa Theme ga [ tokui || nigate ] desu", explanation : "kıvanç, övünme, böbürlenme… tokui jouzu kadar güçlü değil. yetenekten çok öğrenilmiş edinilmiş becerileri ifade eder. kişi bunu kendisi için de kullanırsa kaba olmaz. jouzu ise kaba karşılanabilir. nigate ise bir konuda acemiliği, beceriksizliği, mahcupluğu ifade eder." },
    {id : "280",  japanese : "watashi wa fuyu ga nigate desu", meaning : "benim kışla aram iyi değildir", pattern : "Subject wa Theme ga [ tokui || nigate ] desu", explanation : "kıvanç, övünme, böbürlenme… tokui jouzu kadar güçlü değil. yetenekten çok öğrenilmiş edinilmiş becerileri ifade eder. kişi bunu kendisi için de kullanırsa kaba olmaz. jouzu ise kaba karşılanabilir. nigate ise bir konuda acemiliği, beceriksizliği, mahcupluğu ifade eder." },
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

