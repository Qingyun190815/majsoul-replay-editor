loadproject();

editdata.player_datas[0].nickname = "汪次郎-契约";
editdata.player_datas[1].nickname = "汪次郎";
editdata.player_datas[2].nickname = "化妆舞会";
editdata.player_datas[3].nickname = "假日之滨";
editdata.player_datas[0].avatar_id = 401202;
editdata.player_datas[1].avatar_id = 401201;
editdata.player_datas[2].avatar_id = 401203;
editdata.player_datas[3].avatar_id = 401204;

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

GameMgr.Inst.checkPaiPu("210501-efaec1a5-5ac0-4e27-892a-180f82ac9748", 0)
