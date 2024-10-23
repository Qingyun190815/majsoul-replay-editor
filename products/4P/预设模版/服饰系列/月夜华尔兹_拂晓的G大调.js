loadproject();

editdata.player_datas[0].nickname = "八木唯";
editdata.player_datas[1].nickname = "卡维";
editdata.player_datas[2].nickname = "北见纱和子";
editdata.player_datas[3].nickname = "森川绫子";
editdata.player_datas[0].avatar_id = 400705;
editdata.player_datas[1].avatar_id = 401004;
editdata.player_datas[2].avatar_id = 402404;
editdata.player_datas[3].avatar_id = 404804;

// 八木唯, 北见纱和子
editdata.player_datas[0].views = editdata.player_datas[2].views = [
    {"slot": 1, "item_id": 305209}, // 和牌-安可
    {"slot": 2, "item_id": 305309}, // 立直-开场曲
];
// 卡维, 森川绫子
editdata.player_datas[1].views = editdata.player_datas[3].views = [
    {"slot": 1, "item_id": 305216}, // 和牌-槲寄生下
    {"slot": 2, "item_id": 305316}, // 立直-鹿雪冬至
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

