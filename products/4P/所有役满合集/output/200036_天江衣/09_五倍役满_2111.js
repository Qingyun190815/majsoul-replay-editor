loadproject();

editdata.player_datas[0].nickname = "一姬-契约";
editdata.player_datas[1].nickname = "新年初诣";
editdata.player_datas[2].nickname = "一姬当千";
editdata.player_datas[3].nickname = "绮春歌";
editdata.player_datas[0].avatar_id = 400102;
editdata.player_datas[1].avatar_id = 400104;
editdata.player_datas[2].avatar_id = 400105;
editdata.player_datas[3].avatar_id = 400106;

// 头像框-大小姐发带
editdata.player_datas[0].avatar_frame = editdata.player_datas[1].avatar_frame = editdata.player_datas[2].avatar_frame = editdata.player_datas[3].avatar_frame = 305552;
editdata.player_datas[0].views = editdata.player_datas[1].views = editdata.player_datas[2].views = editdata.player_datas[3].views = [
    {"slot": 0, "item_id": 308003}, // 立直棒-墨西哥卷饼
    {"slot": 1, "item_id": 308001}, // 和牌-龙卷雷霆
    {"slot": 2, "item_id": 308002}, // 立直-花天月地
    {"slot": 5, "item_id": 305552}, // 头像框-大小姐发带
    {"slot": 6, "item_id": 308004}, // 桌布-赛间小憩
    {"slot": 7, "item_id": 308005}, // 牌背-艾托企鹅
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

// 第1局: 东亲, 东起 天和, 大三元, 字一色, 四暗刻单骑
tiles0 = "11122555666777z";
tiles1 = "1112340678999m";
tiles2 = "1112340678999p";
tiles3 = "1112340678999s";
paishan = randompaishan();
roundbegin();
hupai();

// 第2局: 东亲, 东起 天和, 字一色, 小四喜, 四暗刻单骑
tiles0 = "11122233344555z";
tiles1 = "1112340678999m";
tiles2 = "1112340678999p";
tiles3 = "1112340678999s";
paishan = randompaishan();
roundbegin();
hupai();

// 第3局: 东亲, 南起 地和, 大三元, 字一色, 四暗刻单骑
tiles0 = "1112340678999m4z";
tiles1 = "1112555666777z";
tiles2 = "1112340678999p";
tiles3 = "1112340678999s";
paishan = randompaishan("2z");
roundbegin();
qiepai();
zimohu();

// 第4局: 南亲, 西起 地和, 四暗刻, 字一色, 大四喜
tiles1 = "1112340678999m7z";
tiles2 = "1112223334455z";
tiles3 = "1112340678999p";
tiles0 = "1112340678999s";
paishan = randompaishan("4z");
roundbegin();
qiepai();
zimohu();

// 第5局: 西亲, 北起 地和, 字一色, 小四喜, 四暗刻单骑
tiles2 = "1112340678999m7z";
tiles3 = "1112223334555z";
tiles0 = "1112340678999p";
tiles1 = "1112340678999s";
paishan = randompaishan("4z");
roundbegin();
qiepai();
zimohu();

// 第6局: 北亲, 北起 大三元, 字一色, 四杠子, 四暗刻单骑
tiles3 = "11112555666777z";
tiles0 = "1112340678999m";
tiles1 = "1112340678999p";
tiles2 = "1112340678999s";
paishan = randompaishan("", "2567z");
roundbegin();
combomopai(4);
hupai();

// 第7局: 北亲, 北起 字一色, 小四喜, 四杠子, 四暗刻单骑
tiles3 = "11112223334555z";
tiles0 = "1112340678999m";
tiles1 = "1112340678999p";
tiles2 = "1112340678999s";
paishan = randompaishan("", "4532z");
roundbegin();
combomopai(4);
hupai();
