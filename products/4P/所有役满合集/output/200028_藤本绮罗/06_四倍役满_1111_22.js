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

// 第1局: 东亲, 东起 四暗刻单骑, 大四喜
tiles0 = "1p1s111222333444z";
tiles1 = "2223405567888m";
tiles2 = "2223405567888p";
tiles3 = "2223405567888s";
paishan = randompaishan("1s");
roundbegin();
qiepai("1p")
normalmoqie();
hupai();

// 第2局: 东亲, 南起 地和, 大三元, 四暗刻, 字一色
tiles0 = "1112340678999s3z";
tiles1 = "1122555666777z";
tiles2 = "1112340678999m";
tiles3 = "1112340678999p";
paishan = randompaishan("1z");
roundbegin();
qiepai();
zimohu();

// 第3局: 南亲, 西起 地和, 四暗刻, 字一色, 小四喜
tiles1 = "1112340678999s7z";
tiles2 = "1112223334455z";
tiles3 = "1112340678999m";
tiles0 = "1112340678999p";
paishan = randompaishan("5z");
roundbegin();
qiepai();
zimohu();

GameMgr.Inst.checkPaiPu("240822-4b832cf6-1310-41e8-9379-ee3179a3dedd", 0)
