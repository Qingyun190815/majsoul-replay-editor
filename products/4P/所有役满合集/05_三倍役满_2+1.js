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

// 第1局: 东亲, 东起 天和, 纯正九莲宝灯
tiles0 = "11123450678999m";
tiles1 = "1112223334445z";
tiles2 = "1112340678999p";
tiles3 = "1112340678999s";
paishan = randompaishan("");
roundbegin();
hupai();

// 第2局: 东亲, 东起 天和, 四暗刻单骑
tiles0 = "555m555p555s11122z";
tiles1 = "1112340678999m";
tiles2 = "1112340678999p";
tiles3 = "1112340678999s";
paishan = randompaishan("");
roundbegin();
hupai();

// 第3局: 东亲, 东起 天和, 国士无双十三面
tiles0 = "19m19p19s12345677z";
tiles1 = "1112340678999m";
tiles2 = "1112340678999p";
tiles3 = "1112340678999s";
paishan = randompaishan("");
roundbegin();
hupai();

// 第4局: 东亲, 南起 地和, 纯正九莲宝灯
tiles0 = "11122233344456z";
tiles1 = "1112345678999m";
tiles2 = "1112340678999p";
tiles3 = "1112340678999s";
paishan = randompaishan("0m");
roundbegin();
qiepai();
mopai();
hupai();

// 第5局: 南亲, 西起 地和, 四暗刻单骑
tiles1 = "1112340678999m7z";
tiles2 = "555m555p555s1112z";
tiles3 = "1112340678999p";
tiles0 = "1112340678999s";
paishan = randompaishan("2z");
roundbegin();
qiepai();
mopai();
hupai();

// 第6局: 西亲, 北起 地和, 国士无双十三面
tiles2 = "22234550677888m";
tiles3 = "19m19p19s1234567z";
tiles0 = "1112340678999p";
tiles1 = "1112340678999s";
paishan = randompaishan("7z");
roundbegin();
qiepai("7m");
mopai();
hupai();

// 第7局: 北亲, 北起 大三元, 四暗刻单骑
tiles3 = "222p12555666777z";
tiles0 = "1112340678999m";
tiles1 = "1112340678999p";
tiles2 = "1112340678999s";
paishan = randompaishan("1z");
roundbegin();
qiepai("2z");
mopai();
qiepai();
hupai();

// 第8局: 北亲, 北起 字一色, 四暗刻单骑
tiles3 = "11122233355567z";
tiles0 = "1112340678999m";
tiles1 = "1112340678999p";
tiles2 = "1112340678999s";
paishan = randompaishan("6z");
roundbegin();
qiepai();
mopai();
qiepai();
hupai();

// 第9局: 北亲, 北起 字一色, 大四喜
tiles3 = "11122233344556z";
tiles0 = "1112340678999m";
tiles1 = "1112340678999p";
tiles2 = "1112340678999s";
paishan = randompaishan("4z");
roundbegin();
qiepai();
mopai();
qiepai();
hupai();

// 第10局: 北亲, 北起 绿一色, 四暗刻单骑
tiles3 = "222444666888s67z";
tiles0 = "1112340678999m";
tiles1 = "1112340678999p";
tiles2 = "1112340678999s";
paishan = randompaishan("6z");
roundbegin();
qiepai();
mopai();
qiepai();
hupai();

// 第11局: 北亲, 北起 清老头, 四暗刻单骑
tiles3 = "111999m111999p19s";
tiles0 = "2223455067888m";
tiles1 = "2223455067888p";
tiles2 = "2223455067888s";
paishan = randompaishan("1s");
roundbegin();
qiepai();
mopai();
qiepai();
hupai();

// 第12局: 北亲, 北起 小四喜, 四暗刻单骑
tiles3 = "111m11122233345z";
tiles0 = "2223455067888m";
tiles1 = "2223455067888p";
tiles2 = "2223455067888s";
paishan = randompaishan("54z");
roundbegin();
qiepai();
mopai();
qiepai();
mopai();
qiepai();
hupai();

// 第13局: 北亲, 北起 四杠子, 四暗刻单骑
tiles3 = "1111m1112223335z";
tiles0 = "2223455067888m";
tiles1 = "2223455067888p";
tiles2 = "2223455067888s";
paishan = randompaishan("", "5123z");
roundbegin();
leimingpai();
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
