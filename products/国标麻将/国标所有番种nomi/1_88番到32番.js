loadproject();

// 从第 1 局到第 18 局

editdata.player_datas[0].nickname = "一姬-契约";
editdata.player_datas[1].nickname = "新年初诣";
editdata.player_datas[2].nickname = "一姬当千";
editdata.player_datas[3].nickname = "绮春歌";
editdata.player_datas[0].avatar_id = 400102;
editdata.player_datas[1].avatar_id = 400104;
editdata.player_datas[2].avatar_id = 400105;
editdata.player_datas[3].avatar_id = 400106;

editdata.config = {
    'category': 1,
    'meta': {'mode_id': 0},
    'mode': {
        'mode': 1,
        'detail_rule': {
            'init_point': 300000,
            'guobiao': true,
            'guobiao_no_8fanfu': true,
            'guobiao_lianzhuang': true
        }
    }
};

// 第1局: 大四喜, 混一色
tiles0 = "55s111223344567z";
tiles1 = "1112345678999m";
tiles2 = "1112345678999p";
tiles3 = "1112345678999s";
paishan = randompaishan("234z");
roundbegin();
qiepai();
normalmoqie();
for (let i = 0; i < 2; i++) {
    mingqiepai();
    normalmoqie();
}
hupai();

// 第2局: 大三元, 缺一门
tiles0 = "23m55s1234556677z";
tiles1 = "1133445678999m";
tiles2 = "1112345678999p";
tiles3 = "1112345678999s";
paishan = randompaishan("567z1m");
roundbegin();
qiepai("1z");
normalmoqie();
mingqiepai("2z");
normalmoqie();
mingqiepai("3z");
normalmoqie();
mingqiepai("4z");
normalmoqie();
hupai();

// 第3局: 绿一色, 一般高
tiles0 = "2233446688s5667z";
tiles1 = "1133445678999m";
tiles2 = "1112345678999p";
tiles3 = "1112233455999s";
paishan = randompaishan("8s6s");
roundbegin();
qiepai();
normalmoqie();
mingqiepai("5z");
normalmoqie();
hupai();

// 第4局: 九莲宝灯, 连六
tiles0 = "1112345678999m1z";
tiles1 = "377s1234556677z";
tiles2 = "23468s11223344z";
tiles3 = "122344s66788s57z";
paishan = randompaishan("7m");
roundbegin();
qiepai();
normalmoqie();
hupai();

// 第5局: 四杠
tiles0 = "2222m555666p333s1z";
tiles1 = "1133445678999m";
tiles2 = "11123447889p11z";
tiles3 = "1111445555999s";
paishan = randompaishan("5p6p3s1z");
roundbegin();
combomopai();
qiepai();
normalmoqie();
for (let i = 0; i < 3; i++) {
    mingpai();
    normalmoqie(2);
}
hupai();

// 第6局: 连七对
tiles0 = "1122334455667p1z";
tiles1 = "1133445678999m";
tiles2 = "11223447889p11z";
tiles3 = "1111445555999s";
paishan = randompaishan("7p");
roundbegin();
qiepai();
normalmoqie();
hupai();

// 第7局: 十三幺
tiles0 = "19m19p18s9s1234567z";
tiles1 = "1133445678999m";
tiles2 = "11223447889p11z";
tiles3 = "1112445555999s";
paishan = randompaishan("1p");
roundbegin();
qiepai("8s");
normalmoqie();
hupai();

// ===========================

// 第8局: 清幺九
tiles0 = "1199m1199p11s1234z";
tiles1 = "3334445666777m";
tiles2 = "12223447889p11z";
tiles3 = "1244555566999s";
paishan = randompaishan("1m9m1p9p");
roundbegin();
qiepai();
normalmoqie();
for (let i = 0; i < 3; i++) {
    mingqiepai();
    normalmoqie();
}
hupai();

// 第9局: 小四喜, 混一色
tiles0 = "456s11223344456z";
tiles1 = "1112345678999m";
tiles2 = "1112345678999p";
tiles3 = "1112345678999s";
paishan = randompaishan("23z");
roundbegin();
qiepai();
normalmoqie();
mingqiepai();
normalmoqie();
hupai();

// 第10局: 小三元, 缺一门
tiles0 = "23m234s123556677z";
tiles1 = "1133445678999m";
tiles2 = "1112345678999p";
tiles3 = "1112345678999s";
paishan = randompaishan("56z1m");
roundbegin();
qiepai("1z");
normalmoqie();
mingqiepai("2z");
normalmoqie();
mingqiepai("3z");
normalmoqie();
hupai();

// 第11局: 字一色, 双箭刻
tiles0 = "678m11223355666z";
tiles1 = "1133445678999m";
tiles2 = "1112345678999p";
tiles3 = "1112345678999s";
paishan = randompaishan("235z");
roundbegin();
qiepai("6m");
normalmoqie();
mingqiepai("7m");
normalmoqie();
mingqiepai("8m");
normalmoqie();
hupai();

// 第12局: 四暗刻, 单调将
tiles0 = "222m555666p777s12z";
tiles1 = "3333445678999m";
tiles2 = "1112344478999p";
tiles3 = "1112345668999s";
paishan = randompaishan("1z");
roundbegin();
qiepai();
normalmoqie();
hupai();

// 第13局: 一色双龙会
tiles0 = "112233557789m12z";
tiles1 = "1122334455677m";
tiles2 = "1112344478999p";
tiles3 = "1112345668999s";
paishan = randompaishan("..8m9m");
roundbegin();
qiepai();
normalmoqie(3);
mingqiepai();
normalmoqie();
hupai();

// ===========================

// 第14局: 一色四同顺, 平和, 缺一门
tiles0 = "3333444455m99p12z";
tiles1 = "1111222266668m";
tiles2 = "1112344478899p";
tiles3 = "1112345668999s";
paishan = randompaishan("..5m5m");
roundbegin();
qiepai();
normalmoqie(3);
mingpai("34m");
qiepai();
normalmoqie();
hupai();

// 第15局: 一色四节高, 缺一门, 无字
tiles0 = "33445566m99p1234z";
tiles1 = "1111222289999m";
tiles2 = "1112344478899p";
tiles3 = "1112345668999s";
paishan = randompaishan("3456m");
roundbegin();
qiepai();
normalmoqie();
for (let i = 0; i<3;i++){
    mingqiepai();
    normalmoqie();
}
hupai();

// ===========================

// 第16局: 一色四步高, 平和, 缺一门
tiles0 = "1233455678m99p12z";
tiles1 = "1122334455677m";
tiles2 = "1112344478899p";
tiles3 = "1112345668999s";
paishan = randompaishan("..9m7m");
roundbegin();
qiepai();
normalmoqie(3);
mingqiepai();
normalmoqie();
hupai();

// 第17局: 三杠
tiles0 = "2222m555666p23s11z";
tiles1 = "1133445678999m";
tiles2 = "11123447889p11z";
tiles3 = "1111445555999s";
paishan = randompaishan("5p6p4s");
roundbegin();
combomopai();
qiepai();
normalmoqie();
for (let i = 0; i < 2; i++) {
    mingpai();
    normalmoqie(2);
}
hupai();

// 第18局: 混幺九, 缺一门
tiles0 = "11m99p2223344567z";
tiles1 = "1334456789999m";
tiles2 = "11123447889p11z";
tiles3 = "1111445555999s";
paishan = randompaishan("1m9p3z");
roundbegin();
qiepai();
normalmoqie();
for (let i = 0; i < 2; i++) {
    mingqiepai();
    normalmoqie();
}
hupai();
