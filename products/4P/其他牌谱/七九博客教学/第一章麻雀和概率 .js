loadproject();

editdata.player_datas[0].nickname = "赤木茂-契约";
editdata.player_datas[1].nickname = "鹫巢岩-契约";
editdata.player_datas[2].nickname = "赤木茂-光暗对决";
editdata.player_datas[3].nickname = "鹫巢岩-光暗对决";
editdata.player_datas[0].avatar_id = 405002;
editdata.player_datas[1].avatar_id = 405102;
editdata.player_datas[2].avatar_id = 405003;
editdata.player_datas[3].avatar_id = 405103;

editdata.player_datas[0].views = editdata.player_datas[1].views = editdata.player_datas[2].views = editdata.player_datas[3].views = [
    {"slot": 0, "item_id": 308013}, // 立直棒-命悬一线
    {"slot": 1, "item_id": 308011}, // 和牌-地狱低语
    {"slot": 2, "item_id": 308012}, // 立直-幽冥之焰
    {"slot": 6, "item_id": 308014}, // 桌布-传说之夜
    {"slot": 7, "item_id": 308015}, // 牌背-双鹫纹章
];

editdata.config = {
    'category': 1,
    'meta': {'mode_id': 0},
    'mode': {
        'mode': 1,
        'detail_rule': {
            'init_point': 100000,
            'tablecloth_id': 308014, // 桌布-传说之夜
            'mjp_id': 308015, // 牌背-双鹫纹章
        }
    }
};

// 示例对局
tiles0 = "78m12355s134p1277z";
tiles1 = "1237m12p67s22347z";
tiles2 = "26m069p346777s36z";
tiles3 = "69m1568p35s45566z";
paishan = randompaishan("48529m8p9p9s4s8m7m1s6p7z4p9p1s6s3s5m2s", "1z....");
discardtiles = ["1z2z1p", "7z", "", ""];
roundbegin();
qiepai();
normalmoqie();
mingqiepai();
normalmoqie();
normalmoqie(10);
mingqiepai();
hupai();


// 示例对局
tiles0 = "78m12355s334p1277z";
tiles1 = "1237m12p67s22347z";
tiles2 = "26m069p346777s36z";
tiles3 = "69m1568p35s45566z";
paishan = randompaishan("48529m8p9p9s4s8m7m1s6p7z4p9p1s6s3s5m2s", "1z....");
discardtiles = ["1z2z3p", "7z", "", ""];
roundbegin();
qiepai();
normalmoqie();
mingqiepai();
normalmoqie();
normalmoqie(10);
mingqiepai();
hupai();