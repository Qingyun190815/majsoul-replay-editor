loadproject()

editdata.player_datas[0].nickname = "美游-契约";
editdata.player_datas[1].nickname = "美游";
editdata.player_datas[2].nickname = "美游-契约";
editdata.player_datas[3].nickname = "Prism Live";
editdata.player_datas[0].avatar_id = 408002;
editdata.player_datas[1].avatar_id = 408001;
editdata.player_datas[2].avatar_id = 408002;
editdata.player_datas[3].avatar_id = 408003;

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

// 第1局: 东亲, 南起 纯正九莲宝灯
tiles0 = "0m123456789p1114z";
tiles1 = "1112345678999m";
tiles2 = "1112340678999p";
tiles3 = "1112340678999s";
paishan = randompaishan("");
roundbegin();
qiepai("0m");
hupai();

// 第2局: 南亲, 南起 四暗刻单骑
tiles1 = "222p222s11122267z";
tiles2 = "1112340678999m";
tiles3 = "1112340678999p";
tiles0 = "1112340678999s";
paishan = randompaishan("6z");
roundbegin();
qiepai();
mopai();
qiepai();
hupai();

// 第3局: 南亲, 南起 国士无双十三面
tiles1 = "139m19p19s1234567z";
tiles2 = "2223455067888m";
tiles3 = "1112340678999p";
tiles0 = "1112340678999s";
paishan = randompaishan("1z");
roundbegin();
qiepai("3m");
mopai();
qiepai();
hupai();

// 第4局: 南亲, 南起 大四喜
tiles1 = "22m111222333445z";
tiles2 = "1112340678999m";
tiles3 = "1112340678999p";
tiles0 = "1112340678999s";
paishan = randompaishan("54z");
roundbegin();
qiepai();
mopai();
qiepai();
mopai();
qiepai();
hupai();
