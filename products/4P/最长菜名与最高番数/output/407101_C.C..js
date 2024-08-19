try {
    MRE.open();
} catch (e) {
}

loadproject();

editdata.player_datas[0].nickname = "C.C.-契约";
editdata.player_datas[1].nickname = "C.C.";
editdata.player_datas[2].nickname = "C.C.-契约";
editdata.player_datas[3].nickname = "棋盘晚宴";
editdata.player_datas[0].avatar_id = 407102;
editdata.player_datas[1].avatar_id = 407101;
editdata.player_datas[2].avatar_id = 407102;
editdata.player_datas[3].avatar_id = 407103;

settings.chuanma_points_method = 0;
editdata.config = {
    'category': 1,
    'meta': {'mode_id': 2},
    'mode': {
        'mode': 1,
        'detail_rule': {
            'begin_open_mode': 0,
            'chuanma': 0,
            'dora3_mode': 0,
            'dora_count': 3,
            'fanfu': 1,
            'guyi_mode': 0,
            'have_zimosun': true,
            'huansanzhang': 0,
            'open_hand': 0,
            'init_point': 100000,
            'muyu_mode': 0,
            'shiduan': 1,
            'xuezhandaodi': 0,
            'xueliu': 0
        }
    }
}

// 最长菜名(15条45番)
// 立直, 一发, 海底摸月, 门前清自摸和, 白, 发, 东, 连东, 混全带幺九,
// 三杠子, 三暗刻, 小三元, 混一色, 宝牌一大堆(13), 宝牌一大堆(13)
tiles0 = "789s1111z5556667z";
tiles1 = "222255088889m3s";
tiles2 = "1111222245550s";
tiles3 = "3333444467777p";
paishan = randompaishan("", "7z3s3s3s6s6s6s6s4z4z4z4z7z7z3z7m6z5z");
roundbegin();
leimingpai();
mopai();
leimingpai();
mopai();
leimingpai();
mopai();
qiepai("7m");
mingpai();
qiepai("3s");
mingpai();
qiepai("4s");
mopai();
qiepai();
for (let i = 64; i >= 5; i--) {
    mopai();
    qiepai();
}
mopai();
qiepai(true);
mopai();
qiepai();
mopai();
qiepai();
mopai();
qiepai();
mopai();
hupai();

// 最高番数(14条60番)
// 两立直, 河底捞鱼, 白, 中, 东, 连东, 三杠子, 对对和,
// 三暗刻, 小三元, 混老头, 混一色, 宝牌一大堆(20), 宝牌一大堆(20)
tiles0 = "1999p1115556677z";
tiles1 = "222255508888m6z";
tiles2 = "222255508888s3z";
tiles3 = "3333444467777s";
paishan = randompaishan("1p1p1p9p", "4z4z8p4z8p4z8p8p7z7z6z2z5z1z");
roundbegin();
qiepai("1p", true);
mopai();
qiepai();
mopai();
qiepai();
mopai();
qiepai();
mopai();
leimingpai();
mopai();
leimingpai();
mopai();
leimingpai();
mopai();
qiepai();
for (let i = 62; i >= 3; i--) {
    mopai();
    qiepai();
}
mopai();
leimingpai();
mopai();
qiepai();
hupai();

try {
    MRE.close();
} catch (e) {
}

