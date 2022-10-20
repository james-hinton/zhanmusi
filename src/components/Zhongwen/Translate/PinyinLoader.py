with open("cedict_ts.u8", "r", encoding="utf-8") as file:
    text = file.read()
    lines = text.split("\n")
    dict_lines = list(lines)

    """
    example: 
    裹屍布 裹尸布 [guo3 shi1 bu4] /shroud/cloth to wrap a corpse/
    裹挾 裹挟 [guo3 xie2] /to sweep along/to coerce/
    裹脅 裹胁 [guo3 xie2] /to compel/to coerce/
    裹腳 裹脚 [guo3 jiao3] /foot-binding/long strip of cloth used for foot-binding/
    裹足不前 裹足不前 [guo3 zu2 bu4 qian2] /to stand still without advancing (idiom); to hesitate and hold back/
    裼 裼 [ti4] /baby's quilt/
    裼 裼 [xi1] /to bare the upper body/
    製 制 [zhi4] /to manufacture/to make/
    製件 制件 [zhi4 jian4] /workpiece/
    製作 制作 [zhi4 zuo4] /to make/to manufacture/
    製作商 制作商 [zhi4 zuo4 shang1] /maker/manufacturer/
    製作者 制作者 [zhi4 zuo4 zhe3] /producer/maker/creator/
    製假 制假 [zhi4 jia3] /to counterfeit/to manufacture counterfeit goods/
    製備 制备 [zhi4 bei4] /to prepare/preparation (chemistry)/
    製冰機 制冰机 [zhi4 bing1 ji1] /ice maker/
    製劑 制剂 [zhi4 ji4] /(chemical or pharmaceutical) preparation/
    製品 制品 [zhi4 pin3] /products/goods/
    製售 制售 [zhi4 shou4] /to manufacture and sell/
    製圖 制图 [zhi4 tu2] /to map/to chart/to draft/mapmaking/charting/
    製成 制成 [zhi4 cheng2] /to manufacture/to turn out (a product)/
    製模 制模 [zhi4 mu2] /mold making/
    製氧機 制氧机 [zhi4 yang3 ji1] /oxygen concentrator/
    製油 制油 [zhi4 you2] /to extract (vegetable) oil/oil extraction/
    製片 制片 [zhi4 pian4] /moviemaking/
    製片人 制片人 [zhi4 pian4 ren2] /moviemaker/filmmaker/producer/
    製片廠 制片厂 [zhi4 pian4 chang3] /film studio/
    製版 制版 [zhi4 ban3] /to make a plate (printing)/
    製程 制程 [zhi4 cheng2] /manufacturing process/processing/
    製藥企業 制药企业 [zhi4 yao4 qi3 ye4] /pharmaceutical company/
    製藥廠 制药厂 [zhi4 yao4 chang3] /pharmaceutical company/drugs manufacturing factory/
    製表 制表 [zhi4 biao3] /to tabulate/tabulation/scheduling/watchmaking/
    製造 制造 [zhi4 zao4] /to manufacture/to make/
    製造商 制造商 [zhi4 zao4 shang1] /manufacturing company/
    製造廠 制造厂 [zhi4 zao4 chang3] /manufacturing plant/factory/
    製造業者 制造业者 [zhi4 zao4 ye4 zhe3] /manufacturer/
    製造者 制造者 [zhi4 zao4 zhe3] /maker/
    製陶 制陶 [zhi4 tao2] /to manufacture pottery/
    製陶工人 制陶工人 [zhi4 tao2 gong1 ren2] /potter/
    製鞋匠 制鞋匠 [zhi4 xie2 jiang4] /shoemaker/cobbler/
    製鞋工人 制鞋工人 [zhi4 xie2 gong1 ren2] /shoemaker/cobbler/
    裾 裾 [ju1] /garment/
    褀 褀 [qi2] /variant of 綥[qi2]/
    褂 褂 [gua4] /Chinese-style unlined garment/gown/
    褂子 褂子 [gua4 zi5] /unlined upper garment/
    複 复 [fu4] /to repeat/to double/to overlap/complex (not simple)/compound/composite/double/diplo-/duplicate/overlapping/to duplicate/
    複共軛 复共轭 [fu4 gong4 e4] /complex conjugate (math.)/complex conjugation/
    複利 复利 [fu4 li4] /compound interest/
    複刻 复刻 [fu4 ke4] /variant of 復刻|复刻[fu4 ke4]/
    複印 复印 [fu4 yin4] /to photocopy/to duplicate a document/
    複印件 复印件 [fu4 yin4 jian4] /photocopy/duplicate/
    複印機 复印机 [fu4 yin4 ji1] /photocopier/
    複印紙 复印纸 [fu4 yin4 zhi3] /photocopier paper/
    複句 复句 [fu4 ju4] /compound phrase/
    複合 复合 [fu4 he2] /complex/compound/composite/hybrid/to compound/to combine/
    複合元音 复合元音 [fu4 he2 yuan2 yin1] /diphthong (such as putonghua ɑi, ei etc)/
    複合弓 复合弓 [fu4 he2 gong1] /composite bow (archery)/
    複合材料 复合材料 [fu4 he2 cai2 liao4] /composite material/
    複合母音 复合母音 [fu4 he2 mu3 yin1] /diphthong/compound vowel/
    複合詞 复合词 [fu4 he2 ci2] /compound word/
    複合詞素詞 复合词素词 [fu4 he2 ci2 su4 ci2] /polymorphemic/
    複姓 复姓 [fu4 xing4] /two-character surname such as 司馬|司马[Si1 ma3] or 諸葛|诸葛[Zhu1 ge3]/
    複寫 复写 [fu4 xie3] /to duplicate/to carbon copy/
    複寫紙 复写纸 [fu4 xie3 zhi3] /carbon paper/
    複平面 复平面 [fu4 ping2 mian4] /complex plane/
    複式 复式 [fu4 shi4] /double/multiple/compound/combined/double-entry (accounting)/
    複數 复数 [fu4 shu4] /plural/complex number (math.)/
    複數域 复数域 [fu4 shu4 yu4] /field of complex numbers (math.), usually denoted by C/
    複數平面 复数平面 [fu4 shu4 ping2 mian4] /(math.) complex plane; Argand plane/
    複數形式 复数形式 [fu4 shu4 xing2 shi4] /plural form (of a countable noun)/
    複方 复方 [fu4 fang1] /compound prescription (involving several medicines)/
    複本 复本 [fu4 ben3] /copy/
    複殖吸蟲 复殖吸虫 [fu4 zhi2 xi1 chong2] /digenetic trematode worm (i.e. from Order Digenea 複殖目|复殖目)/
    複殖目 复殖目 [fu4 zhi2 mu4] /Order Digenea (including trematode worms that parasite humans)/
    複比 复比 [fu4 bi3] /compound ratio (i.e. the product of two or more ratios)/
    複疊 复叠 [fu4 die2] /reduplication of words or syllables (as a stylistic device in Chinese)/
    複眼 复眼 [fu4 yan3] /compound eye/
    複社 复社 [Fu4 she4] /late Ming cultural renewal movement, led by Zhang Pu 張溥|张溥[Zhang1 Pu3] and others/
    複線 复线 [fu4 xian4] /multiple track (e.g. rail)/multi-lane (e.g. highway)/the complex line (math.)/
    複習 复习 [fu4 xi2] /variant of 復習|复习[fu4 xi2]/
    複聽 复听 [fu4 ting1] /double hearing/diplacusis/
    複葉 复叶 [fu4 ye4] /compound leaf (botany)/
    複製 复制 [fu4 zhi4] /to duplicate/to make a copy of/to copy/to reproduce/to clone/
    複製品 复制品 [fu4 zhi4 pin3] /replica/reproduction/
    複視 复视 [fu4 shi4] /double vision/diplopia/
    複詞 复词 [fu4 ci2] /compound word/polysyllabic word/
    複試 复试 [fu4 shi4] /to sit for the second round of a two-stage exam/
    複讀 复读 [fu4 du2] /(of an audio device) to repeat a recorded phrase (e.g. for language learning)/
    複變 复变 [fu4 bian4] /(math.) complex variable/
    複變函數 复变函数 [fu4 bian4 han2 shu4] /function of a complex variable (math.)/
    複變函數論 复变函数论 [fu4 bian4 han2 shu4 lun4] /(math.) theory of functions of a complex variable/
    複賽 复赛 [fu4 sai4] /(sports) semifinal or quarterfinal/to compete in a semifinal (or a quarterfinal)/
    複迭 复迭 [fu4 die2] /variant of 複疊|复叠[fu4 die2]/
    複述 复述 [fu4 shu4] /to repeat (one's own words or sb else's)/(in the classroom) to paraphrase what one has learned/
    複選框 复选框 [fu4 xuan3 kuang4] /check box/
    複雜 复杂 [fu4 za2] /complicated/complex/
    複雜化 复杂化 [fu4 za2 hua4] /to complicate/to become complicated/
    複雜性 复杂性 [fu4 za2 xing4] /complexity/
    複雜系統 复杂系统 [fu4 za2 xi4 tong3] /complex system/
    複音形 复音形 [fu4 yin1 xing2] /diphthong/liaison/
    複音詞 复音词 [fu4 yin1 ci2] /disyllabic word/polysyllabic word/
    複韻母 复韵母 [fu4 yun4 mu3] /compound final/
    褉 褉 [xie1] /short garments/
    褊 褊 [bian3] /narrow/urgent/
    褊狹 褊狭 [bian3 xia2] /narrow/small-minded/
    褌 裈 [kun1] /pants (old)/
    褎 褎 [xiu4] /sleeve/ample flowing robes/
    褏 褏 [xiu4] /old variant of 袖[xiu4]/
    褐 褐 [he4] /brown/gray or dark color/coarse hemp cloth/Taiwan pr. [he2]/
    褐冠山雀 褐冠山雀 [he4 guan1 shan1 que4] /(bird species of China) grey crested tit (Lophophanes dichrous)/
    褐冠鵑隼 褐冠鹃隼 [he4 guan1 juan1 sun3] /(bird species of China) Jerdon's baza (Aviceda jerdoni)/
    褐喉旋木雀 褐喉旋木雀 [he4 hou2 xuan2 mu4 que4] /(bird species of China) Sikkim treecreeper (Certhia discolor)/
    褐喉沙燕 褐喉沙燕 [he4 hou2 sha1 yan4] /(bird species of China) grey-throated martin (Riparia chinensis)/
    褐喉食蜜鳥 褐喉食蜜鸟 [he4 hou2 shi2 mi4 niao3] /(bird species of China) brown-throated sunbird (Anthreptes malacensis)/
    褐山鷦鶯 褐山鹪莺 [he4 shan1 jiao1 ying1] /(bird species of China) brown prinia (Prinia polychroa)/
    褐岩鷚 褐岩鹨 [he4 yan2 liu4] /(bird species of China) brown accentor (Prunella fulvescens)/
    褐林鴞 褐林鸮 [he4 lin2 xiao1] /(bird species of China) brown wood owl (Strix leptogrammica)/
    褐柳鶯 褐柳莺 [he4 liu3 ying1] /(bird species of China) dusky warbler (Phylloscopus fuscatus)/
    褐河烏 褐河乌 [he4 he2 wu1] /(bird species of China) brown dipper (Cinclus pallasii)/
    褐漁鴞 褐渔鸮 [he4 yu2 xiao1] /(bird species of China) brown fish owl (Ketupa zeylonensis)/
    褐灰雀 褐灰雀 [he4 hui1 que4] /(bird species of China) brown bullfinch (Pyrrhula nipalensis)/
    褐煤 褐煤 [he4 mei2] /lignite/brown coal/
    褐翅叉尾海燕 褐翅叉尾海燕 [he4 chi4 cha1 wei3 hai3 yan4] /(bird species of China) Tristram's storm petrel (Oceanodroma tristrami)/
    褐翅燕鷗 褐翅燕鸥 [he4 chi4 yan4 ou1] /(bird species of China) bridled tern (Onychoprion anaethetus)/
    褐翅雪雀 褐翅雪雀 [he4 chi4 xue3 que4] /(bird species of China) Tibetan snowfinch (Montifringilla adamsi)/
    褐翅鴉雀 褐翅鸦雀 [he4 chi4 ya1 que4] /(bird species of China) brown-winged parrotbill (Sinosuthora brunnea)/
    褐翅鴉鵑 褐翅鸦鹃 [he4 chi4 ya1 juan1] /(bird species of China) greater coucal (Centropus sinensis)/
    褐耳鷹 褐耳鹰 [he4 er3 ying1] /(bird species of China) shikra (Accipiter badius)/
    褐背地山雀 褐背地山雀 [he4 bei4 di4 shan1 que4] /(bird species of China) ground tit (Pseudopodoces humilis)/
    褐背鶲鶪 褐背鹟䴗 [he4 bei4 weng1 ju2] /(bird species of China) bar-winged flycatcher-shrike (Hemipus picatus)/
    褐胸噪鶥 褐胸噪鹛 [he4 xiong1 zao4 mei2] /(bird species of China) grey laughingthrush (Garrulax maesi)/
    褐胸山鷓鴣 褐胸山鹧鸪 [he4 xiong1 shan1 zhe4 gu1] /(bird species of China) bar-backed partridge (Arborophila brunneopectus)/
    褐胸鶲 褐胸鹟 [he4 xiong1 weng1] /(bird species of China) brown-breasted flycatcher (Muscicapa muttui)/
    褐脅雀鶥 褐胁雀鹛 [he4 xie2 que4 mei2] /(bird species of China) rusty-capped fulvetta (Alcippe dubia)/
    褐臉雀鶥 褐脸雀鹛 [he4 lian3 que4 mei2] /(bird species of China) brown-cheeked fulvetta (Alcippe poioicephala)/
    褐色 褐色 [he4 se4] /brown/
    褐頂雀鶥 褐顶雀鹛 [he4 ding3 que4 mei2] /(bird species of China) dusky fulvetta (Alcippe brunnea)/
    褐頭山雀 褐头山雀 [he4 tou2 shan1 que4] /(bird species of China) willow tit (Poecile montanus)/
    褐頭嶺雀 褐头岭雀 [he4 tou2 ling3 que4] /(bird species of China) Sillem's mountain finch (Leucosticte sillemi)/
    褐頭雀鶥 褐头雀鹛 [he4 tou2 que4 mei2] /(bird species of China) grey-hooded fulvetta (Fulvetta cinereiceps)/
    褐頭鳳鶥 褐头凤鹛 [he4 tou2 feng4 mei2] /(bird species of China) Taiwan yuhina (Yuhina brunneiceps)/
    褐頭鵐 褐头鹀 [he4 tou2 wu2] /(bird species of China) red-headed bunting (Emberiza bruniceps)/
    褐頭鶇 褐头鸫 [he4 tou2 dong1] /(bird species of China) grey-sided thrush (Turdus feae)/
    褐頭鷦鶯 褐头鹪莺 [he4 tou2 jiao1 ying1] /(bird species of China) plain prinia (Prinia inornata)/
    褐馬雞 褐马鸡 [he4 ma3 ji1] /(bird species of China) brown eared pheasant (Crossoptilon mantchuricum)/
    褐鰹鳥 褐鲣鸟 [he4 jian1 niao3] /(bird species of China) brown booby (Sula leucogaster)/
    褐鴉雀 褐鸦雀 [he4 ya1 que4] /(bird species of China) brown parrotbill (Cholornis unicolor)/
    褒 褒 [bao1] /to praise/to commend/to honor/(of clothes) large or loose/
    褒呔 褒呔 [bao1 tai1] /bow tie (loanword) (Cantonese)/
    褒姒 褒姒 [Bao1 si4] /Baosi, concubine of King You of Zhou 周幽王[Zhou1 You1 wang2] and one of the famous Chinese beauties/
    褒忠 褒忠 [Bao1 zhong1] /Baozhong or Paochung township in Yunlin county 雲林縣|云林县[Yun2 lin2 xian4], Taiwan/
    褒忠鄉 褒忠乡 [Bao1 zhong1 xiang1] /Baozhong or Paochung township in Yunlin county 雲林縣|云林县[Yun2 lin2 xian4], Taiwan/
    褒揚 褒扬 [bao1 yang2] /to praise/
    褒禪山 褒禅山 [Bao1 chan2 Shan1] /Mt Baochan in Anhui/formerly known as Mt Hua 華山|华山/
    褒義 褒义 [bao1 yi4] /commendatory sense/positive connotation/
    褒貶 褒贬 [bao1 bian3] /to appraise/to pass judgment on/to speak ill of/praise and censure/appraisal/
    褓 褓 [bao3] /cloth for carrying baby on back/
    褓姆 褓姆 [bao3 mu3] /variant of 保姆[bao3 mu3]/
    褓母 褓母 [bao3 mu3] /variant of 保姆[bao3 mu3]/
    褔 褔 [fu4] /full up/classifier for items of clothing (old)/
    褕 褕 [yu2] /loose garment/
    褘 袆 [hui1] /a queen's ceremonial gowns/
    褙 褙 [bei4] /paper or cloth pasted together/
    褚 褚 [Chu3] /surname Chu/
    褚 褚 [zhu3] /padding (in garment)/to store up/pocket/Taiwan pr. [chu3]/
    褚人獲 褚人获 [Chu3 Ren2 huo4] /Chu Renhuo (1635-1682), author of historical novel Dramatized History of Sui and Tang 隋唐演義|隋唐演义[Sui2 Tang2 Yan3 yi4]/
    褚遂良 褚遂良 [Chu3 Sui4 liang2] /Chu Suiliang (596-659), one of Four Great Calligraphers of early Tang 唐初四大家[Tang2 chu1 Si4 Da4 jia1]/
    褟 褟 [ta1] /inner shirt/to sew onto clothing/see also 禢[Ta4]/
    褟縧子 褟绦子 [ta1 tao1 zi5] /lace hemming/
    褡 褡 [da1] /pouch/sleeveless jacket/
    褡褳 褡裢 [da1 lian5] /cloth pouch open in the middle, forming two bags/jacket worn for Chinese wrestling/
    褢 褢 [huai2] /to carry in the bosom or the sleeve/to wrap, to conceal/
    褥 褥 [ru4] /mattress/
    """

    # define functions
    def parse_line(line):
        if line == "":
            dict_lines.remove(line)
            return 0
        line = line.rstrip("/")
        line = line.split("/")
        if len(line) <= 1:
            return 0
        english = line[1]
        char_and_pinyin = line[0].split("[")
        characters = char_and_pinyin[0]
        characters = characters.split()
        traditional = characters[0]
        simplified = characters[1]
        pinyin = char_and_pinyin[1]
        pinyin = pinyin.rstrip()
        pinyin = pinyin.rstrip("]")

        definition = line[2:]
        definition = " ".join(definition)
        definition = definition.rstrip()
        definition = definition.rstrip("/")
        definition = definition.rstrip(" ")
        definition = definition.rstrip("\n")

        list_of_dicts.append(
            {
                "traditional": traditional,
                "simplified": simplified,
                "pinyin": pinyin,
                "english": english,
                "definition": definition,
            }
        )

    def remove_surnames():
        for x in range(len(list_of_dicts) - 1, -1, -1):
            if "surname " in list_of_dicts[x]["english"]:
                if (
                    list_of_dicts[x]["traditional"]
                    == list_of_dicts[x + 1]["traditional"]
                ):
                    list_of_dicts.pop(x)

    def main():
        for line in dict_lines:
            parse_line(line)
        remove_surnames()

        return list_of_dicts


list_of_dicts = []
parsed_dict = main()


# Save as JSON file:
import json

with open("cedict_ts.json", "w", encoding="utf-8") as file:

    # Make sure to use the right encoding
    json.dump(parsed_dict, file, ensure_ascii=False, indent=4)
