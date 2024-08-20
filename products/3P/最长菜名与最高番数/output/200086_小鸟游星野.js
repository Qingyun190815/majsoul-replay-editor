try {
    MRE.open();
} catch (e) {
}

loadproject();

// 主要是三个小局, 前两局和最后一局
// 第一局亲家的最长菜名(15条49番), 第二局最高番数(14条64番)
// 最后一局子家的最长菜名(15条55番)

editdata.player_datas[0].nickname = "小鸟游星野-契约";
editdata.player_datas[1].nickname = "小鸟游星野";
editdata.player_datas[2].nickname = "华芳雅韵";
editdata.player_datas[0].avatar_id = 408702;
editdata.player_datas[1].avatar_id = 408701;
editdata.player_datas[2].avatar_id = 408703;

settings.chuanma_points_method = 0;
editdata.config = {
    'category': 1,
    'meta': {'mode_id': 17},
    'mode': {
        'mode': 11,
        'detail_rule': {
            'begin_open_mode': 0,
            'chuanma': 0,
            'dora3_mode': 0,
            'dora_count': 2,
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

// 最长菜名(15条49番)
// 立直, 一发, 海底摸月, 门前清自摸和, 白, 发, 东, 连东, 混全带幺九,
// 三杠子, 三暗刻, 小三元, 混一色, 宝牌一大堆(13), 宝牌一大堆(13)
tiles0 = "789s1114z5556667z";
tiles1 = "2222556688889p";
tiles2 = "1111222245550s";
paishan = randompaishan("", "7z111m6666s333377z16p651444z");
roundbegin();
for (let i = 0; i < 7; i++) {
    leimingpai();
    mopai();
}
qiepai("6p")
mingpai();
qiepai('9p')
for (let i = 46; i >= 4; i--) {
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
hupai();

// 最高番数(14条64番)
// 两立直, 河底捞鱼, 白, 中, 东, 连东, 三杠子, 对对和,
// 三暗刻, 小三元, 混老头, 混一色, 宝牌一大堆(20), 宝牌4, 宝牌一大堆(20)
tiles0 = "1999p1115556677z";
tiles1 = "222255667777p6z";
tiles2 = "1111222245550s";
paishan = randompaishan("11p4z", "3333z8888p776z3p51z9p444z");
roundbegin();
qiepai("1p", true);
mopai();
qiepai();
mopai();
qiepai();
mopai();
for (let i = 0; i < 7; i++) {
    leimingpai();
    mopai();
}
qiepai();
for (let i = 43; i >= 2; i--) {
    mopai();
    qiepai();
}
mopai();
leimingpai();
mopai();
qiepai();
hupai();

// 过渡到南1局
// 东1
tiles0 = "11122233345567z";
tiles1 = "111m12345p12344s";
tiles2 = "1112340678999p";
paishan = randompaishan("6p", "6z");
roundbegin();
leimingpai();
mopai();
qiepai("7z");
mopai();
hupai();
// 东2
tiles1 = "11122233345567z";
tiles2 = "111m12345p12344s";
tiles0 = "1112340678999p";
paishan = randompaishan("6p", "6z");
roundbegin();
leimingpai();
mopai();
qiepai("7z");
mopai();
hupai();
// 东3
tiles2 = "11122233345567z";
tiles0 = "111m12345p12344s";
tiles1 = "1112340678999p";
paishan = randompaishan("6p", "6z");
roundbegin();
leimingpai();
mopai();
qiepai("7z");
mopai();
hupai();

// 最长菜名(15条55番)
// 立直, 一发, 海底摸月, 门前清自摸和, 白, 发, 东, 连东, 混全带幺九,
// 三杠子, 三暗刻, 小三元, 混一色, 宝牌一大堆(16), 宝牌一大堆(16)
tiles0 = "2222556688889p9m";
tiles1 = "789s2225556667z";
tiles2 = "1111222245550s";
paishan = randompaishan("4z", "7z111m1111333377z16p652444z");
roundbegin();
qiepai("9m");
mopai();
for (let i = 0; i < 7; i++) {
    leimingpai();
    mopai();
}
qiepai("6p")
mingpai();
qiepai('9p')
for (let i = 45; i >= 4; i--) {
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
hupai();

try {
    MRE.close();
} catch (e) {
}

