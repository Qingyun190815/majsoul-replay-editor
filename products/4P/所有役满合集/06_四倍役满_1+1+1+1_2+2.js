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
            'init_point': 200000,
            'muyu_mode': 0,
            'shiduan': 1,
            'xuezhandaodi': 0,
            'xueliu': 0
        }
    }
}

// 第1局: 东亲, 东起 四暗刻单骑, 大四喜
tiles0 = "1p1s111222333444z";
tiles1 = "2223455067888m";
tiles2 = "2223455067888p";
tiles3 = "2223455067888s";
paishan = randompaishan("1s");
roundbegin();
qiepai("1p")
mopai();
qiepai();
hupai();

// 第2局: 东亲, 南起 地和, 大三元, 四暗刻, 字一色
tiles0 = "1112340678999p3z";
tiles1 = "1122555666777z";
tiles2 = "1112340678999p";
tiles3 = "1112340678999s";
paishan = randompaishan("1z");
roundbegin();
qiepai()
mopai();
hupai();

// 第3局: 南亲, 西起 地和, 四暗刻, 字一色, 小四喜
tiles1 = "1112340678999p7z";
tiles2 = "1112223334455z";
tiles3 = "1112340678999p";
tiles0 = "1112340678999s";
paishan = randompaishan("5z");
roundbegin();
qiepai()
mopai();
hupai();

try {
    MRE.close();
} catch (e) {
}

