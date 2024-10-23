loadproject();

editdata.player_datas[0].nickname = "一之濑空";
editdata.player_datas[1].nickname = "莎拉";
editdata.player_datas[2].nickname = "五十岚阳菜";
editdata.player_datas[3].nickname = "月见山";
editdata.player_datas[0].avatar_id = 401304;
editdata.player_datas[1].avatar_id = 401604;
editdata.player_datas[2].avatar_id = 402004;
editdata.player_datas[3].avatar_id = 402703;

editdata.player_datas[0].views = editdata.player_datas[1].views = editdata.player_datas[2].views = editdata.player_datas[3].views = [
    {"slot": 1, "item_id": 305211}, // 和牌-核心裂变
    {"slot": 2, "item_id": 305311}, // 立直-虚拟导航
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

GameMgr.Inst.checkPaiPu("231127-e18887d1-d8eb-4e13-9ac0-5fb4f1a17426", 0)
