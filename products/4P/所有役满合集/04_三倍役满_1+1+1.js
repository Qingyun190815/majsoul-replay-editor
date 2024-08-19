try {
    MRE.open();
} catch (e) {
}

loadproject();

editdata.player_datas[0].nickname = "一姬-契约";
editdata.player_datas[1].nickname = "新年初诣";
editdata.player_datas[2].nickname = "一姬当千";
editdata.player_datas[3].nickname = "绮春歌";
editdata.player_datas[0].avatar_id = 400102;
editdata.player_datas[1].avatar_id = 400104;
editdata.player_datas[2].avatar_id = 400105;
editdata.player_datas[3].avatar_id = 400106;

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
            'init_point': 500000,
            'muyu_mode': 0,
            'shiduan': 1,
            'xuezhandaodi': 0,
            'xueliu': 0
        }
    }
}

// 第1局: 东亲, 南起 地和, 大三元, 四暗刻
tiles0 = "1112340678999m1z";
tiles1 = "22p22s555666777z";
tiles2 = "1112340678999p";
tiles3 = "1112340678999s";
paishan = randompaishan("2p");
roundbegin();
qiepai();
mopai();
hupai();

// 第2局: 南亲, 西起 地和, 四暗刻, 字一色
tiles1 = "1112340678999m7z";
tiles2 = "1112223335566z";
tiles3 = "1112340678999p";
tiles0 = "1112340678999s";
paishan = randompaishan("5z");
roundbegin();
qiepai();
mopai();
hupai();

// 第3局: 西亲, 北起 地和, 四暗刻, 绿一色
tiles2 = "1112340678999m7z";
tiles3 = "22244466688s66z";
tiles0 = "1112340678999p";
tiles1 = "1112340678999s";
paishan = randompaishan("8s");
roundbegin();
qiepai();
mopai();
hupai();

// 第4局: 北亲, 东起 地和, 四暗刻, 清老头
tiles3 = "2223455067888m7z";
tiles0 = "111999m11199p11s";
tiles1 = "2223455067888p";
tiles2 = "2223455067888s";
paishan = randompaishan("9p");
roundbegin();
qiepai();
mopai();
hupai();

// 第5局: 东亲, 南起 地和, 四暗刻, 小四喜
tiles0 = "2223455067888m7z";
tiles1 = "111m1112223344z";
tiles2 = "2223455067888p";
tiles3 = "2223455067888s";
paishan = randompaishan("3z");
roundbegin();
qiepai();
mopai();
hupai();

// 第6局: 南亲, 南起 大三元, 四暗刻, 字一色
tiles1 = "1s1122555666777z";
tiles2 = "2223455067888m";
tiles3 = "2223455067888p";
tiles0 = "1113455067888s";
paishan = randompaishan("1z", "4z");
roundbegin();
qiepai("1s");
mingpai();
mopai();
qiepai();
mopai();
hupai();

// 第7局: 南亲, 南起 大三元, 字一色, 四杠子 (副露)
tiles1 = "11123555666777z";
tiles2 = "2223455067888m";
tiles3 = "2223455067888p";
tiles0 = "2223455067888s";
paishan = randompaishan("1z", "2z5z6z7z");
roundbegin();
qiepai("3z");
mopai();
qiepai();
mingpai();
mopai();
leimingpai();
mopai();
leimingpai();
mopai();
leimingpai();
mopai();
hupai();

// 第8局: 南亲, 南起 四暗刻, 字一色, 小四喜
tiles1 = "1s1112223344555z";
tiles2 = "2223455067888m";
tiles3 = "2223455067888p";
tiles0 = "1113455067888s";
paishan = randompaishan("3z", "6z");
roundbegin();
qiepai("1s");
mingpai();
mopai();
qiepai();
mopai();
hupai();

// 第9局: 南亲, 南起 字一色, 小四喜, 四杠子 (副露)
tiles1 = "1112223334z5557z";
tiles2 = "2223455067888m";
tiles3 = "2223455067888p";
tiles0 = "2223455067888s";
paishan = randompaishan("5z", "4z1z2z3z");
roundbegin();
qiepai();
mopai();
qiepai();
mingpai();
mopai();
leimingpai();
mopai();
leimingpai();
mopai();
leimingpai();
mopai();
hupai();

try {
    MRE.close();
} catch (e) {
}
