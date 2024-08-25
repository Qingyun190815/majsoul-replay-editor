loadproject();

editdata.player_datas[0].nickname = "鲁鲁修-晚宴";
editdata.player_datas[1].nickname = "C.C.-晚宴";
editdata.player_datas[2].nickname = "枢木朱雀-晚宴";
editdata.player_datas[3].nickname = "红月卡莲-晚宴";
editdata.player_datas[0].avatar_id = 407002;
editdata.player_datas[1].avatar_id = 407102;
editdata.player_datas[2].avatar_id = 407202;
editdata.player_datas[3].avatar_id = 407302;

editdata.player_datas[0].views = editdata.player_datas[1].views = editdata.player_datas[2].views = editdata.player_datas[3].views = [{"slot": 1, "item_id": 308026}, {"slot": 2, "item_id": 308027}];

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

GameMgr.Inst.checkPaiPu("240824-6cc115df-e972-4d7a-9f16-32a1c52e92b8", 0)
