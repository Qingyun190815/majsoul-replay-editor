loadproject();

editdata.player_datas[0].nickname = "卡维";
editdata.player_datas[1].nickname = "明智英树";
editdata.player_datas[2].nickname = "二之宫花";
editdata.player_datas[3].nickname = "艾因";
editdata.player_datas[0].avatar_id = 401003;
editdata.player_datas[1].avatar_id = 401404;
editdata.player_datas[2].avatar_id = 401707;
editdata.player_datas[3].avatar_id = 402503;

// 称号-一姬当千
editdata.player_datas[0].title = editdata.player_datas[1].title = editdata.player_datas[2].title = editdata.player_datas[3].title = 600045;
editdata.player_datas[0].views = editdata.player_datas[1].views = editdata.player_datas[2].views = editdata.player_datas[3].views = [
    {"slot": 1, "item_id": 305213}, // 和牌-疾月斩
    {"slot": 2, "item_id": 305313}, // 立直-风华斩
];

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
