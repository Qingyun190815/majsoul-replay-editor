loadproject();

editdata.player_datas[0].nickname = "小鸟游雏田";
editdata.player_datas[1].nickname = "凉宫杏树";
editdata.player_datas[2].nickname = "斋藤治";
editdata.player_datas[3].nickname = "A-37";
editdata.player_datas[0].avatar_id = 401904;
editdata.player_datas[1].avatar_id = 402104;
editdata.player_datas[2].avatar_id = 402303;
editdata.player_datas[3].avatar_id = 404503;

// 凉宫杏树, A-37
editdata.player_datas[1].views = editdata.player_datas[3].views = [
    {"slot": 1, "item_id": 305204}, // 和牌-群星之寂
    {"slot": 2, "item_id": 305304}, // 立直-星陨
];
// 小鸟游雏田, 斋藤治
editdata.player_datas[0].views = editdata.player_datas[2].views = [
    {"slot": 1, "item_id": 305205}, // 和牌-厄里斯之瞳
    {"slot": 2, "item_id": 305305}, // 立直-血·朗基努斯枪
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

GameMgr.Inst.checkPaiPu("240824-069a7e45-a8cb-49d8-be75-594a207f9c1e", 0)
