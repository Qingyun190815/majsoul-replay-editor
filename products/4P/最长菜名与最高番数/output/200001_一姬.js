loadproject();

editdata.player_datas[0].nickname = "一姬-契约";
editdata.player_datas[1].nickname = "新年初诣";
editdata.player_datas[2].nickname = "一姬当千";
editdata.player_datas[3].nickname = "绮春歌";
editdata.player_datas[0].avatar_id = 400102;
editdata.player_datas[1].avatar_id = 400104;
editdata.player_datas[2].avatar_id = 400105;
editdata.player_datas[3].avatar_id = 400106;

// 称号-一姬当千
editdata.player_datas[0].title = editdata.player_datas[1].title = editdata.player_datas[2].title = editdata.player_datas[3].title = 600045;
// 主播(猫爪子)认证
editdata.player_datas[0].verified = editdata.player_datas[1].verified = editdata.player_datas[2].verified = editdata.player_datas[3].verified = 1;
editdata.player_datas[0].views = editdata.player_datas[1].views = editdata.player_datas[2].views = editdata.player_datas[3].views = [
    {"slot": 0, "item_id": 305049}, // 立直棒-炎夏型一姬甜筒
    {"slot": 1, "item_id": 305213}, // 和牌-疾月斩
    {"slot": 2, "item_id": 305324}, // 立直-猫过留痕
    {"slot": 6, "item_id": 305046}, // 桌布-吃瓜
    {"slot": 13, "item_id": 305718}, // 牌面-猫咪雀圣
];

editdata.config = {
    'category': 1,
    'meta': {'mode_id': 0},
    'mode': {
        'mode': 1,
        'detail_rule': {
            'init_point': 100000,
        }
    }
};

// 最长菜名(15条45番)
// 立直, 一发, 海底摸月, 门前清自摸和, 白, 发, 东, 连东, 混全带幺九,
// 三杠子, 三暗刻, 小三元, 混一色, 宝牌一大堆(13), 宝牌一大堆(13)
tiles0 = "789s1111z5556667z";
tiles1 = "222205588889m3s";
tiles2 = "1122224055599s";
tiles3 = "3333444467777p";
paishan = randompaishan("", "7z.....66s444477z.9s65z");
roundbegin();
combomopai(3);
qiepai("9s");
mingqiepai("4s");
normalmoqie(61);
moqieliqi();
normalmoqie(3);
zimohu();

// 最高番数(14条60番)
// 这个其实在"所有报菜名合集"中已经有了, 在第八局(东四局0本场)
// 两立直, 河底捞鱼, 白, 中, 东, 连东, 三杠子, 对对和,
// 三暗刻, 小三元, 混老头, 混一色, 宝牌一大堆(20), 宝牌一大堆(20)
tiles0 = "1999p1115556677z";
tiles1 = "222205558888m6z";
tiles2 = "222205558888s3z";
tiles3 = "3333444467777s";
paishan = randompaishan("...9p", "4444z8888p776z.51z");
roundbegin();
qiepai("1p", true);
normalmoqie(3);
mopai();
combomopai(3);
qiepai();
normalmoqie(60);
mopai();
leimingpai();
normalmoqie();
hupai();
