loadproject();

editdata.player_datas[0].nickname = "汪次郎-契约";
editdata.player_datas[1].nickname = "汪次郎";
editdata.player_datas[2].nickname = "化妆舞会";
editdata.player_datas[3].nickname = "假日之滨";
editdata.player_datas[0].avatar_id = 401202;
editdata.player_datas[1].avatar_id = 401201;
editdata.player_datas[2].avatar_id = 401203;
editdata.player_datas[3].avatar_id = 401204;

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
};

// 最长菜名(15条45番)
// 立直, 一发, 海底摸月, 门前清自摸和, 白, 发, 东, 连东, 混全带幺九,
// 三杠子, 三暗刻, 小三元, 混一色, 宝牌一大堆(13), 宝牌一大堆(13)
tiles0 = "789s1111z5556667z";
tiles1 = "222255088889m3s";
tiles2 = "1111222245550s";
tiles3 = "3333444467777p";
paishan = randompaishan("", "7z3336666s4444773z7m65z");
roundbegin();
for (let i = 0; i < 3; i++) {
    leimingpai();
    mopai();
}
qiepai("7m");
mingpai();
qiepai("3s");
mingpai();
qiepai("4s");
for (let i = 65; i >= 5; i--) {
    mopai();
    qiepai();
}
mopai();
qiepai(true);
for (let i = 0; i < 3; i++) {
    mopai();
    qiepai();
}
mopai();
hupai();

// 最高番数(14条60番)
// 这个其实在"所有角色报所有菜名系列"中已经有了, 在第八局(东四局0本场)
// 两立直, 河底捞鱼, 白, 中, 东, 连东, 三杠子, 对对和,
// 三暗刻, 小三元, 混老头, 混一色, 宝牌一大堆(20), 宝牌一大堆(20)
tiles0 = "1999p1115556677z";
tiles1 = "222255508888m6z";
tiles2 = "222255508888s3z";
tiles3 = "3333444467777s";
paishan = randompaishan("1119p", "4444z8888p776251z");
roundbegin();
qiepai("1p", true);
for (let i = 0; i < 3; i++) {
    mopai();
    qiepai();
}
mopai();
for (let i = 0; i < 3; i++) {
    leimingpai();
    mopai();
}
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

GameMgr.Inst.checkPaiPu("210501-efaec1a5-5ac0-4e27-892a-180f82ac9748", 0)
