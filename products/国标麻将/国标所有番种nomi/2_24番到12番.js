loadproject();

// 从第 19 局到第 38 局

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

// 第1(19)局: 七对
tiles0 = "11m2299p2288s5567z";
tiles1 = "1334456789999m";
tiles2 = "11123447889p11z";
tiles3 = "1111445555999s";
paishan = randompaishan("6z");
roundbegin();
qiepai();
normalmoqie();
hupai();

// 第2(20)局: 七星不靠
tiles0 = "47m28p36s12345677z";
tiles1 = "1334456789999m";
tiles2 = "11123447889p11z";
tiles3 = "1111445555999s";
paishan = randompaishan("1m");
roundbegin();
qiepai();
normalmoqie();
hupai();

// 第3(21)局: 全双刻
tiles0 = "2244m6688p22s1234z";
tiles1 = "1113336789999m";
tiles2 = "11123447899p11z";
tiles3 = "1111445555999s";
paishan = randompaishan("24m68p");
roundbegin();
qiepai();
normalmoqie();
for (let i = 0; i < 3; i++) {
    mingqiepai();
    normalmoqie();
}
hupai();

// 第4(22)局: 清一色
tiles0 = "222334566789m67z";
tiles1 = "1112223334445z";
tiles2 = "1112344789p555z";
tiles3 = "1111445555999s";
paishan = randompaishan("3m9m");
roundbegin();
qiepai();
normalmoqie();
mingqiepai();
normalmoqie();
hupai();

// 第5(23)局: 一色三同顺, 缺一门
tiles0 = "1122233m555p5567z";
tiles1 = "1112223334445z";
tiles2 = "111234478999p5z";
tiles3 = "1111445555999s";
paishan = randompaishan("..3m1m");
roundbegin();
qiepai();
normalmoqie(3);
mingpai("12m");
qiepai();
normalmoqie();
hupai();

// 第6(24)局: 一色三节高, 缺一门
tiles0 = "2223344m456p5567z";
tiles1 = "1112223334445z";
tiles2 = "111234478999p5z";
tiles3 = "1111445555999s";
paishan = randompaishan("..3m4m");
roundbegin();
qiepai();
normalmoqie(3);
mingqiepai();
normalmoqie();
hupai();

// 第7(25)局: 全大, 幺九刻
tiles0 = "77789m77788p99s12z";
tiles1 = "1112223334445z";
tiles2 = "111234455999p5z";
tiles3 = "1111445555888s";
paishan = randompaishan("8p9s");
roundbegin();
qiepai();
normalmoqie();
mingqiepai();
normalmoqie();
hupai();

// 第8(26)局: 全中
tiles0 = "44456m44455p66s12z";
tiles1 = "1112223334445z";
tiles2 = "111233466999p5z";
tiles3 = "1111445555888s";
paishan = randompaishan("5p6s");
roundbegin();
qiepai();
normalmoqie();
mingqiepai();
normalmoqie();
hupai();

// 第9(27)局: 全小, 喜相逢
tiles0 = "11123m22333p23s12z";
tiles1 = "1112223334445z";
tiles2 = "111123466999p5z";
tiles3 = "2224445555888s";
paishan = randompaishan("2p1s");
roundbegin();
qiepai();
normalmoqie();
mingqiepai();
normalmoqie();
hupai();

// ===========================

// 第10(28)局: 清龙, 缺一门
tiles0 = "12345678m23s5567z";
tiles1 = "1112223334445z";
tiles2 = "111123466999p5z";
tiles3 = "2224445555888s";
paishan = randompaishan("..9m4s");
roundbegin();
qiepai();
normalmoqie(3);
mingqiepai();
normalmoqie();
hupai();

// 第11(29)局: 三色双龙会
tiles0 = "12378m12378p55s12z";
tiles1 = "1112223334445z";
tiles2 = "111223466999p5z";
tiles3 = "2224446666888s";
paishan = randompaishan("..9m9p");
roundbegin();
qiepai();
normalmoqie(3);
mingqiepai();
normalmoqie();
hupai();

// 第12(30)局: 一色三步高, 缺一门
tiles0 = "12334556m23p5567z";
tiles1 = "1112223334445z";
tiles2 = "111223466999p5z";
tiles3 = "2224446666888s";
paishan = randompaishan("..7m4p");
roundbegin();
qiepai();
normalmoqie(3);
mingqiepai();
normalmoqie();
hupai();

// 第13(31)局: 全带五, 平和, 喜相逢
tiles0 = "34556m45566p55s12z";
tiles1 = "1112223334445z";
tiles2 = "111223466999p5z";
tiles3 = "2224446666888s";
paishan = randompaishan("..7m7p");
roundbegin();
qiepai();
normalmoqie(3);
mingqiepai();
normalmoqie();
hupai();

// 第14(32)局: 三同刻
tiles0 = "2278m22p222s44567z";
tiles1 = "1112223334555z";
tiles2 = "1112334669999p";
tiles3 = "3334446666888s";
paishan = randompaishan("2m2p9m");
roundbegin();
qiepai();
normalmoqie();
for (let i = 0; i<2;i++){
    mingqiepai();
    normalmoqie();
}
hupai();

// 第15(33)局: 三暗刻, 无字
tiles0 = "222378m333p555s67z";
tiles1 = "1112223334555z";
tiles2 = "1112234669999p";
tiles3 = "3334446666888s";
paishan = randompaishan("..9m3m");
roundbegin();
qiepai();
normalmoqie(3);
mingqiepai();
normalmoqie();
hupai();

// ===========================

// 第16(34)局: 全不靠
tiles0 = "147m258p39s234566z";
tiles1 = "1112223334555z";
tiles2 = "1112234669999p";
tiles3 = "3334446666888s";
paishan = randompaishan("7z");
roundbegin();
qiepai();
normalmoqie();
hupai();

// 第17(35)局: 组合龙
tiles0 = "147m258p2239s5567z";
tiles1 = "1112223334445z";
tiles2 = "1112234669999p";
tiles3 = "3334446668888s";
paishan = randompaishan("2s6s");
roundbegin();
qiepai();
normalmoqie();
mingqiepai();
normalmoqie();
hupai();

// 第18(36)局: 大于五
tiles0 = "666789m77p6799s12z";
tiles1 = "1112223334445z";
tiles2 = "1112234669999p";
tiles3 = "3334444666888s";
paishan = randompaishan("7p8s");
roundbegin();
qiepai();
normalmoqie();
mingqiepai();
normalmoqie();
hupai();

// 第19(37)局: 小于五
tiles0 = "123444m33p1134s12z";
tiles1 = "1112223334445z";
tiles2 = "1112234669999p";
tiles3 = "3334446666888s";
paishan = randompaishan("3p2s");
roundbegin();
qiepai();
normalmoqie();
mingqiepai();
normalmoqie();
hupai();

// 第20(38)局: 三风刻, 缺一门
tiles0 = "234m22p223344567z";
tiles1 = "1112223334445m";
tiles2 = "1112234669999p";
tiles3 = "3334446666888s";
paishan = randompaishan("234z");
roundbegin();
qiepai();
normalmoqie();
for (let i = 0; i<2; i++){
    mingqiepai();
    normalmoqie();
}
hupai();
