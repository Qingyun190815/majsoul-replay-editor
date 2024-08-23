loadproject();

editdata.player_datas[0].nickname = "鲁鲁修-契约";
editdata.player_datas[1].nickname = "C.C.-契约";
editdata.player_datas[2].nickname = "枢木朱雀-契约";
editdata.player_datas[3].nickname = "红月卡莲-契约";
editdata.player_datas[0].avatar_id = 407002;
editdata.player_datas[1].avatar_id = 407102;
editdata.player_datas[2].avatar_id = 407202;
editdata.player_datas[3].avatar_id = 407302;

editdata.player_datas[0].views = editdata.player_datas[1].views = editdata.player_datas[2].views = editdata.player_datas[3].views = [{"slot": 1, "item_id": 308026}, {"slot": 2, "item_id": 308027}];

settings.chuanma_points_method = 0;
editdata.config = {
    'category': 2,
    'meta': {'mode_id': 3},
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
            'init_point': 100000,
            'muyu_mode': 0,
            'shiduan': 1,
            'xuezhandaodi': 0,
            'xueliu': 0
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

GameMgr.Inst.checkPaiPu("210926-5f5adaf3-0413-4489-95c2-98c212e521c3", 0)
