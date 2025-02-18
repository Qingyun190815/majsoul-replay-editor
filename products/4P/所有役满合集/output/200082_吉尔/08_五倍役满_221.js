loadproject();

editdata.player_datas[0].nickname = "一姬-契约";
editdata.player_datas[1].nickname = "新年初诣";
editdata.player_datas[2].nickname = "一姬当千";
editdata.player_datas[3].nickname = "绮春歌";
editdata.player_datas[0].avatar_id = 400102;
editdata.player_datas[1].avatar_id = 400104;
editdata.player_datas[2].avatar_id = 400105;
editdata.player_datas[3].avatar_id = 400106;

editdata.player_datas[0].views = editdata.player_datas[1].views = editdata.player_datas[2].views = editdata.player_datas[3].views = [
    {"slot": 0, "item_id": 308033}, // 立直棒-红晖的魔杖
    {"slot": 1, "item_id": 308031}, // 和牌-魔力的迸发
    {"slot": 2, "item_id": 308032}, // 立直-英灵的典仪
    {"slot": 6, "item_id": 308034}, // 桌布-星夜的羁绊
    {"slot": 7, "item_id": 308035}, // 牌背-苍蓝的星辰
];

editdata.config = {
    'category': 1,
    'meta': {'mode_id': 0},
    'mode': {
        'mode': 1,
        'detail_rule': {
            'init_point': 500000,
        }
    }
};

// 第1局: 东亲, 东起 天和, 四暗刻单骑, 大四喜
tiles0 = "22m111222333444z";
tiles1 = "1112340678999m";
tiles2 = "1112340678999p";
tiles3 = "1112340678999s";
paishan = randompaishan();
roundbegin();
hupai();

// 第2局: 东亲, 南起 地和, 四暗刻单骑, 大四喜
tiles0 = "1112340678999s5z";
tiles1 = "2m111222333444z";
tiles2 = "1112340678999m";
tiles3 = "1112340678999p";
paishan = randompaishan("2m");
roundbegin();
qiepai();
zimohu();

// 第3局: 南亲, 南起 字一色, 四暗刻单骑, 大四喜
tiles1 = "111222333444z57z";
tiles2 = "1112340678999m";
tiles3 = "1112340678999p";
tiles0 = "1112340678999s";
paishan = randompaishan("5z");
roundbegin();
qiepai();
normalmoqie();
hupai();

// 第4局: 南亲, 南起 四杠子, 四暗刻单骑, 大四喜
tiles1 = "2m1111222333444z";
tiles2 = "1112340678999m";
tiles3 = "1112340678999p";
tiles0 = "1112340678999s";
paishan = randompaishan("", "2m432z");
roundbegin();
combomopai(4);
hupai();
