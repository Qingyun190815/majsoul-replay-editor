loadproject();

editdata.player_datas[0].nickname = "浅仓透-悠然";
editdata.player_datas[1].nickname = "樋口圆香-悠然";
editdata.player_datas[2].nickname = "福丸小糸-悠然";
editdata.player_datas[3].nickname = "市川雏菜-悠然";
editdata.player_datas[0].avatar_id = 40010003;
editdata.player_datas[1].avatar_id = 40010103;
editdata.player_datas[2].avatar_id = 40010203;
editdata.player_datas[3].avatar_id = 40010303;

editdata.player_datas[0].views = editdata.player_datas[1].views = editdata.player_datas[2].views = editdata.player_datas[3].views = [
    {"slot": 0, "item_id": 30560005}, // 立直棒-动听之源
    {"slot": 1, "item_id": 30520007}, // 和牌-涟漪之空
    {"slot": 2, "item_id": 30530007}, // 立直-水漾星光
    {"slot": 6, "item_id": 30580011}, // 桌布-闪耀吧！
    {"slot": 7, "item_id": 30570007}, // 牌背-静谧夜光
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

// 示例对局
tiles0 = "11223344556777z";
tiles1 = "1112340678999m";
tiles2 = "1112340678999p";
tiles3 = "1112340678999s";
paishan = randompaishan("6z", "5z....");
roundbegin();
qiepai(true);
normalmoqie();
hupai();
