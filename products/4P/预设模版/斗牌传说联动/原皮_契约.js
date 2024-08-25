loadproject();

editdata.player_datas[0].nickname = "赤木茂";
editdata.player_datas[1].nickname = "鹫巢岩";
editdata.player_datas[2].nickname = "赤木茂-契约";
editdata.player_datas[3].nickname = "鹫巢岩-契约";
editdata.player_datas[0].avatar_id = 405001;
editdata.player_datas[1].avatar_id = 405101;
editdata.player_datas[2].avatar_id = 405002;
editdata.player_datas[3].avatar_id = 405102;

editdata.player_datas[0].views = editdata.player_datas[1].views = editdata.player_datas[2].views = editdata.player_datas[3].views = [{"slot": 1, "item_id": 308011}, {"slot": 2, "item_id": 308012}];

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

// Insert your code above

GameMgr.Inst.checkPaiPu("211102-36501f8b-d854-42a8-b827-5f7ca300b2e8", 0)
