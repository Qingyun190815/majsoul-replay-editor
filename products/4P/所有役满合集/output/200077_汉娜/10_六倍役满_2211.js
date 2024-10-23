loadproject();

editdata.player_datas[0].nickname = "汉娜-契约";
editdata.player_datas[1].nickname = "汉娜";
editdata.player_datas[2].nickname = "汉娜-契约";
editdata.player_datas[3].nickname = "迷人礼颂";
editdata.player_datas[0].avatar_id = 407702;
editdata.player_datas[1].avatar_id = 407701;
editdata.player_datas[2].avatar_id = 407702;
editdata.player_datas[3].avatar_id = 407703;

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

GameMgr.Inst.checkPaiPu("240808-28d4bd69-6322-4b16-9eba-2f8d29f2e8f8", 0)
