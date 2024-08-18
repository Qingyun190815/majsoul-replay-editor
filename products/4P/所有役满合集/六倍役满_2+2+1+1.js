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
    'category': 1, // 1表示友人房, 2表示匹配房
    'meta': {'mode_id': 2}, //2表示铜四东, 3表示铜四南, 详见 字典.md
    'mode': {
        'mode': 1, // 1表示4人, 11表示3人
        'detail_rule': {
            'begin_open_mode': 0,
            'chuanma': 0,
            'dora3_mode': 0, //是否是宝牌狂热模式
            'dora_count': 3, //红宝牌数量
            'fanfu': 1,
            'guyi_mode': 0,
            'have_zimosun': true,
            'huansanzhang': 0,
            'open_hand': 0,
            'init_point': 500000,
            'muyu_mode': 0, //是否是龙之目玉模式
            'shiduan': 1,
            'xuezhandaodi': 0,
            'xueliu': 0 //是否是血流成河
        }
    }
}

// 第1局: 东亲, 东起 天和, 字一色, 四暗刻单骑, 大四喜
tiles0 = "11122233344477z";
tiles1 = "1112340678999m";
tiles2 = "1112340678999p";
tiles3 = "1112340678999s";
paishan = randompaishan("");
roundbegin();
hupai();

// 第2局: 东亲, 南起 地和, 字一色, 四暗刻单骑, 大四喜
tiles0 = "1112340678999s5z";
tiles1 = "1112223334447z";
tiles2 = "1112340678999m";
tiles3 = "1112340678999p";
paishan = randompaishan("7z");
roundbegin();
qiepai();
mopai();
hupai();

// 第3局: 南亲, 南起 字一色, 四杠子, 四暗刻单骑, 大四喜
tiles1 = "11112223334447z";
tiles2 = "1112340678999m5z";
tiles3 = "1112340678999p";
tiles0 = "1112340678999s";
paishan = randompaishan("", "7z4z3z2z");
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

