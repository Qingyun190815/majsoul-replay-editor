loadproject();

editdata.player_datas[0].nickname = "五十岚阳菜";
editdata.player_datas[1].nickname = "福姬";
editdata.player_datas[2].nickname = "姬川响";
editdata.player_datas[3].nickname = "莱恩";
editdata.player_datas[0].avatar_id = 402005;
editdata.player_datas[1].avatar_id = 403804;
editdata.player_datas[2].avatar_id = 404603;
editdata.player_datas[3].avatar_id = 404703;

// 头像框-雪夜童话
editdata.player_datas[0].avatar_frame = editdata.player_datas[1].avatar_frame = editdata.player_datas[2].avatar_frame = editdata.player_datas[3].avatar_frame = 305542;
editdata.player_datas[0].views = editdata.player_datas[1].views = editdata.player_datas[2].views = editdata.player_datas[3].views = [{"slot": 5, "item_id": 305542}];

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

GameMgr.Inst.checkPaiPu("240824-6cc115df-e972-4d7a-9f16-32a1c52e92b8", 0)
