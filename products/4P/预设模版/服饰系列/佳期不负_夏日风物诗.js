loadproject();

editdata.player_datas[0].nickname = "明智英树";
editdata.player_datas[1].nickname = "寺崎千穗理";
editdata.player_datas[2].nickname = "小野寺七羽";
editdata.player_datas[3].nickname = "泽克斯";
editdata.player_datas[0].avatar_id = 401405;
editdata.player_datas[1].avatar_id = 403303;
editdata.player_datas[2].avatar_id = 405303;
editdata.player_datas[3].avatar_id = 406003;

// 明智英树, 寺崎千穗理
editdata.player_datas[0].views = editdata.player_datas[1].views = [
    {"slot": 1, "item_id": 305208}, // 和牌-海浪的馈赠
    {"slot": 2, "item_id": 305308}, // 立直-浪之声
];
// 小野寺七羽, 泽克斯
editdata.player_datas[2].views = editdata.player_datas[3].views = [
    {"slot": 1, "item_id": 305220}, // 和牌-泰山鸭顶
    {"slot": 2, "item_id": 305320}, // 立直-立直鸭
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
