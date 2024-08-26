loadproject();

editdata.player_datas[0].nickname = "伊莉雅-Prism";
editdata.player_datas[1].nickname = "美游-Prism";
editdata.player_datas[2].nickname = "小黑-Prism";
editdata.player_datas[3].nickname = "吉尔-Prism";
editdata.player_datas[0].avatar_id = 407903;
editdata.player_datas[1].avatar_id = 408003;
editdata.player_datas[2].avatar_id = 408103;
editdata.player_datas[3].avatar_id = 408203;

editdata.player_datas[0].views = editdata.player_datas[1].views = editdata.player_datas[2].views = editdata.player_datas[3].views = [{"slot": 1, "item_id": 308031}, {"slot": 2, "item_id": 308032}];

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

GameMgr.Inst.checkPaiPu("231127-e18887d1-d8eb-4e13-9ac0-5fb4f1a17426", 0)
