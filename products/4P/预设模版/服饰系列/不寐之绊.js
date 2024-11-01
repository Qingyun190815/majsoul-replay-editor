loadproject();

editdata.player_datas[0].nickname = "一之濑空";
editdata.player_datas[1].nickname = "A-37";
editdata.player_datas[2].nickname = "森川绫子";
editdata.player_datas[3].nickname = "岚星";
editdata.player_datas[0].avatar_id = 401306;
editdata.player_datas[1].avatar_id = 404505;
editdata.player_datas[2].avatar_id = 404805;
editdata.player_datas[3].avatar_id = 407403;

// 头像框-一汪打尽
editdata.player_datas[0].avatar_frame = editdata.player_datas[1].avatar_frame = editdata.player_datas[2].avatar_frame = editdata.player_datas[3].avatar_frame = 30550017;
editdata.player_datas[0].views = editdata.player_datas[1].views = editdata.player_datas[2].views = editdata.player_datas[3].views = [{"slot": 5, "item_id": 30550017}];

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

GameMgr.Inst.checkPaiPu("240824-069a7e45-a8cb-49d8-be75-594a207f9c1e", 0)
