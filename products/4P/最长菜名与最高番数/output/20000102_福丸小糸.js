loadproject();

editdata.player_datas[0].nickname = "福丸小糸-契约";
editdata.player_datas[1].nickname = "福丸小糸";
editdata.player_datas[2].nickname = "福丸小糸-契约";
editdata.player_datas[3].nickname = "悠然格调";
editdata.player_datas[0].avatar_id = 40010202;
editdata.player_datas[1].avatar_id = 40010201;
editdata.player_datas[2].avatar_id = 40010202;
editdata.player_datas[3].avatar_id = 40010203;

editdata.player_datas[0].views = editdata.player_datas[1].views = editdata.player_datas[2].views = editdata.player_datas[3].views = [
    {"slot": 0, "item_id": 30560005}, // 立直棒-动听之源
    {"slot": 1, "item_id": 30520007}, // 和牌-涟漪之空
    {"slot": 2, "item_id": 30530007}, // 立直-水漾星光
    {"slot": 6, "item_id": 30580011}, // 桌布-闪耀吧！
    {"slot": 7, "item_id": 30570007}, // 牌背-静谧夜光
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
