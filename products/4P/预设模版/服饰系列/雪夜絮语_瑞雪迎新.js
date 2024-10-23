loadproject();

// 除了约瑟夫

editdata.player_datas[0].nickname = "九条璃雨";
editdata.player_datas[1].nickname = "北见纱和子";
editdata.player_datas[2].nickname = "藤本绮罗";
editdata.player_datas[3].nickname = "辉夜姬";
editdata.player_datas[0].avatar_id = 400804;
editdata.player_datas[1].avatar_id = 402403;
editdata.player_datas[2].avatar_id = 402803;
editdata.player_datas[3].avatar_id = 402903;

editdata.config = {
    'category': 1,
    'meta': {'mode_id': 0},
    'mode': {
        'mode': 1,
        'detail_rule': {
            'init_point': 100000,
        }
    }
};

// Insert your code below

/*
tiles0 = "11112223334446z";
tiles1 = "1112340678999m";
tiles2 = "111333777999s6z";
tiles3 = "222444666888s6z";
paishan = randompaishan("6z", "0p432z");
roundbegin();
for (let i = 0; i < 4; i++) {
    leimingpai();
    mopai();
}
qiepai();
mopai();
qiepai("6z", true);
hupai();
*/

GameMgr.Inst.checkPaiPu("240822-4b832cf6-1310-41e8-9379-ee3179a3dedd", 0)
