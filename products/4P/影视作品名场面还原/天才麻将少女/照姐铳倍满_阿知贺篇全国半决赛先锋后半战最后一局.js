loadproject();

// 照姐铳松实玄倍满, 阿知贺篇第11集19min开始
// 因为雀魂天麻联动没有 花田煌 和 松实玄, 所以分别用 岚星 和 伊芙 代替

editdata.player_datas[0].nickname = "花田煌";
editdata.player_datas[1].nickname = "园城寺怜";
editdata.player_datas[2].nickname = "松实玄";
editdata.player_datas[3].nickname = "宫永照";
editdata.player_datas[0].avatar_id = 407401;
editdata.player_datas[1].avatar_id = 406501;
editdata.player_datas[2].avatar_id = 408301;
editdata.player_datas[3].avatar_id = 403701;

editdata.player_datas[2].views = [{"slot": 1, "item_id": 305206}, {"slot": 2, "item_id": 308022}]; // 和牌-天降正义 和 立直-未来视
editdata.player_datas[3].views = [{"slot": 2, "item_id": 308002}]; // 立直-花天月地

editdata.config = {
    'category': 4,
    'meta': {'mode_id': 0},
    'mode': {
        'mode': 2,
        'detail_rule': {
            'dora_count': 4,
            'init_point': 100000,
        }
    }
};

// 南4局2本场
transition(1, 3, 2);

// 立直平和一杯口断幺dora6, 倍满
// 有些手牌切牌没有画面, 我就随便编了几个
scores = [48200, 80900, 57100, 213800];
tiles3 = "14m4667778p44777z";
tiles0 = "126899s1127m455z";
tiles1 = "2489m357789s89p5z";
tiles2 = "2233340p23s206m6z";
paishan = randompaishan("3z4z2z 1s9m2z9s 3s9p6p9p 3z1p1m4s 6p2s8m0p 5p1p.5s4p5m0s 8m2z7m", "9p2p....");
discardtiles = ["3z4z9p1p6s1p1s1m", "4z2z6p4m7s5z5s5m5s", "2z9s9p2m6z2s3p2z", "1m1s3s3z4m4p8m7m"];
roundbegin();
qiepai();
normalmoqie(19);
moqieliqi();
normalmoqie(2);
mingqiepai();
normalmoqie(2);
mingqiepai();
normalmoqie();
moqieliqi();
normalmoqie();
mingqiepai();
normalmoqie(2);
hupai();
