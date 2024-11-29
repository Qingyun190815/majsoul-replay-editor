loadproject();

editdata.player_datas[0].nickname = "浅仓透-契约";
editdata.player_datas[1].nickname = "浅仓透";
editdata.player_datas[2].nickname = "浅仓透-契约";
editdata.player_datas[3].nickname = "悠然格调";
editdata.player_datas[0].avatar_id = 40010002;
editdata.player_datas[1].avatar_id = 40010001;
editdata.player_datas[2].avatar_id = 40010002;
editdata.player_datas[3].avatar_id = 40010003;

editdata.config = {
    'category': 1,
    'meta': {'mode_id': 0},
    'mode': {
        'mode': 1,
        'detail_rule': {
            'init_point': 500000,
        }
    }
};

// 第1局: 东亲, 东起 天和, 字一色, 四暗刻单骑, 大四喜
tiles0 = "11122233344477z";
tiles1 = "1112340678999m";
tiles2 = "1112340678999p";
tiles3 = "1112340678999s";
paishan = randompaishan();
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
zimohu();

// 第3局: 南亲, 南起 字一色, 四杠子, 四暗刻单骑, 大四喜
tiles1 = "11112223334447z";
tiles2 = "1112340678999m";
tiles3 = "1112340678999p";
tiles0 = "1112340678999s";
paishan = randompaishan("", "7432z");
roundbegin();
combomopai(4);
hupai();

GameMgr.Inst.checkPaiPu("241125-fb7ea56d-a854-4ba0-8f16-202757a56ba5", 0)
