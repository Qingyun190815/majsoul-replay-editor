loadproject();

// 第一局亲家的最长菜名(15条49番), 第二局最高番数(14条64番)
// 最后一局子家的最长菜名(15条55番)

editdata.player_datas[0].nickname = "竹井久-契约";
editdata.player_datas[1].nickname = "竹井久";
editdata.player_datas[2].nickname = "兔耳派对";
editdata.player_datas[0].avatar_id = 406202;
editdata.player_datas[1].avatar_id = 406201;
editdata.player_datas[2].avatar_id = 406203;

editdata.player_datas[0].views = editdata.player_datas[1].views = editdata.player_datas[2].views = [
    {"slot": 0, "item_id": 308023}, // 立直棒-爱心便当
    {"slot": 1, "item_id": 308021}, // 和牌-高岭之花
    {"slot": 2, "item_id": 308022}, // 立直-未来视
    {"slot": 6, "item_id": 308024}, // 桌布-清凉假日
    {"slot": 7, "item_id": 308025}, // 牌背-摇曳彩球
];

editdata.config = {
    'category': 1,
    'meta': {'mode_id': 0},
    'mode': {
        'mode': 11,
        'detail_rule': {
            'init_point': 100000,
        }
    }
};

// 最长菜名(15条49番)
// 立直, 一发, 海底摸月, 门前清自摸和, 白, 发, 东, 连东, 混全带幺九,
// 三杠子, 三暗刻, 小三元, 混一色, 宝牌一大堆(13), 宝牌4, 宝牌一大堆(13)
tiles0 = "789s1114z5556667z";
tiles1 = "2222556688889p";
tiles2 = "1111222240555s";
paishan = randompaishan("", "7z.....66s333377z.6p651444z");
roundbegin();
combomopai(7);
qiepai("6p");
mingqiepai("9p");
normalmoqie(43);
moqieliqi();
normalmoqie(2);
zimohu();

// 最高番数(14条64番)
// 两立直, 河底捞鱼, 白, 中, 东, 连东, 三杠子, 对对和,
// 三暗刻, 小三元, 混老头, 混一色, 宝牌一大堆(20), 宝牌4, 宝牌一大堆(20)
tiles0 = "1999p1115556677z";
tiles1 = "222255667777p6z";
tiles2 = "1111222240555s";
paishan = randompaishan("..4z", "3333z8888p776z.51z9p444z");
roundbegin();
qiepai("1p", true);
normalmoqie(2);
mopai();
combomopai(7);
qiepai();
normalmoqie(42);
mopai();
combomopai();
qiepai();
hupai();

// 跳转到南1局0本场
gotoju(1, 0, 0);

// 最长菜名(15条55番)
// 立直, 一发, 海底摸月, 门前清自摸和, 白, 发, 东, 连东, 混全带幺九,
// 三杠子, 三暗刻, 小三元, 混一色, 宝牌一大堆(16), 宝牌4, 宝牌一大堆(16)
tiles0 = "2222556688889p9m";
tiles1 = "789s2225556667z";
tiles2 = "1111222240555s";
paishan = randompaishan("4z", "7z.....11333377z.6p652444z");
roundbegin();
qiepai("9m");
mopai();
combomopai(7);
qiepai("6p")
mingqiepai("9p")
normalmoqie(42);
moqieliqi();
normalmoqie(2);
zimohu();
