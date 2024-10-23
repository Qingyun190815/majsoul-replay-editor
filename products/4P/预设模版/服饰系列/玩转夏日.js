loadproject();

editdata.player_datas[0].nickname = "二阶堂美树";
editdata.player_datas[1].nickname = "寺崎千穗理";
editdata.player_datas[2].nickname = "柚";
editdata.player_datas[3].nickname = "凌";
editdata.player_datas[0].avatar_id = 400208;
editdata.player_datas[1].avatar_id = 403304;
editdata.player_datas[2].avatar_id = 405905;
editdata.player_datas[3].avatar_id = 407503;

// 称号-青云之志
editdata.player_datas[0].title = editdata.player_datas[1].title = editdata.player_datas[2].title = editdata.player_datas[3].title = 600094;
// 和牌-喵——呜！ 和 立直-萌爪狂欢
editdata.player_datas[0].views = editdata.player_datas[1].views = editdata.player_datas[2].views = editdata.player_datas[3].views = [
    {"slot": 1, "item_id": 30520005}, // 和牌-喵——呜！
    {"slot": 2, "item_id": 30530005}, // 立直-萌爪狂欢
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
