loadproject();

editdata.player_datas[0].nickname = "浅仓透-契约";
editdata.player_datas[1].nickname = "樋口圆香-契约";
editdata.player_datas[2].nickname = "福丸小糸-契约";
editdata.player_datas[3].nickname = "市川雏菜-契约";
editdata.player_datas[0].avatar_id = 40010002;
editdata.player_datas[1].avatar_id = 40010102;
editdata.player_datas[2].avatar_id = 40010202;
editdata.player_datas[3].avatar_id = 40010302;

editdata.player_datas[0].views = editdata.player_datas[1].views = editdata.player_datas[2].views = editdata.player_datas[3].views = [
    {"slot": 1, "item_id": 30520007}, // 和牌-涟漪之空
    {"slot": 2, "item_id": 30530007}, // 立直-水漾星光
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

// Insert your code above

GameMgr.Inst.checkPaiPu("241125-fb7ea56d-a854-4ba0-8f16-202757a56ba5", 0)
