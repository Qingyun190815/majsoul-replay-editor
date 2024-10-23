loadproject();

editdata.player_datas[0].nickname = "藤本绮罗-契约";
editdata.player_datas[1].nickname = "瑞雪迎新";
editdata.player_datas[2].nickname = "满分假期";
editdata.player_datas[3].nickname = "温存韶光";
editdata.player_datas[0].avatar_id = 402802;
editdata.player_datas[1].avatar_id = 402803;
editdata.player_datas[2].avatar_id = 402804;
editdata.player_datas[3].avatar_id = 402805;

editdata.config = {
    'category': 1,
    'meta': {'mode_id': 0},
    'mode': {
        'mode': 1,
        'detail_rule': {
            'init_point': 200000,
        }
    }
};

// 第1局: 东亲, 南起 纯正九莲宝灯
tiles0 = "0m123456789p1114z";
tiles1 = "1112345678999m";
tiles2 = "1112340678999p";
tiles3 = "1112340678999s";
paishan = randompaishan();
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
normalmoqie();
hupai();

// 第3局: 南亲, 南起 国士无双十三面
tiles1 = "139m19p19s1234567z";
tiles2 = "2223405567888m";
tiles3 = "1112340678999p";
tiles0 = "1112340678999s";
paishan = randompaishan("1z");
roundbegin();
qiepai("3m");
normalmoqie();
hupai();

// 第4局: 南亲, 南起 大四喜
tiles1 = "22m111222333445z";
tiles2 = "1112340678999m";
tiles3 = "1112340678999p";
tiles0 = "1112340678999s";
paishan = randompaishan("54z");
roundbegin();
qiepai();
normalmoqie(2);
hupai();

GameMgr.Inst.checkPaiPu("240822-4b832cf6-1310-41e8-9379-ee3179a3dedd", 0)
