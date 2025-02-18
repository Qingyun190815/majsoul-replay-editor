loadproject();

editdata.player_datas[0].nickname = "宫永照-契约";
editdata.player_datas[1].nickname = "凛然花开";
editdata.player_datas[2].nickname = "兔耳派对";
editdata.player_datas[0].avatar_id = 403702;
editdata.player_datas[1].avatar_id = 403703;
editdata.player_datas[2].avatar_id = 403704;

editdata.player_datas[0].views = editdata.player_datas[1].views = editdata.player_datas[2].views = [
    {"slot": 0, "item_id": 308003}, // 立直棒-墨西哥卷饼
    {"slot": 1, "item_id": 308001}, // 和牌-龙卷雷霆
    {"slot": 2, "item_id": 308002}, // 立直-花天月地
    {"slot": 6, "item_id": 308004}, // 桌布-赛间小憩
    {"slot": 7, "item_id": 308005}, // 牌背-艾托企鹅
];

editdata.config = {
    'category': 1,
    'meta': {'mode_id': 0},
    'mode': {
        'mode': 11,
    }
};

// 第1局: 立直, 两立直, 吃, 碰, 杠, 拔北, 四杠流局
tiles0 = "1112340678999p1s";
tiles1 = "23446668889s66z";
tiles2 = "1112223335777z";
paishan = randompaishan("1z6s", "6z84s4z4s");
roundbegin();
qiepai(true);
mingqiepai("6z");
mopai();
combomopai();
qiepai(true);
mingqiepai("6z");
normalmoqie();
mingpai();
mopai();
combomopai(3);
qiepai();
liuju();

// 第2局: 自摸
tiles0 = "111m23456p11123s4z";
tiles1 = "1112340678999p";
tiles2 = "1112223334445z";
paishan = randompaishan("", "1m.......1p");
roundbegin();
combomopai();
hupai();

// 第3局: 荣
tiles0 = "2p1112223334445z";
tiles1 = "2455667p234567s";
tiles2 = "1112340678999s";
paishan = randompaishan("", "1m........");
roundbegin();
qiepai("2p");
hupai();
