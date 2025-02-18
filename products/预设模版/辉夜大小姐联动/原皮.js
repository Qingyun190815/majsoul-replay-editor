loadproject();

editdata.player_datas[0].nickname = "四宫辉夜";
editdata.player_datas[1].nickname = "白银御行";
editdata.player_datas[2].nickname = "早坂爱";
editdata.player_datas[3].nickname = "白银圭";
editdata.player_datas[0].avatar_id = 405501;
editdata.player_datas[1].avatar_id = 405601;
editdata.player_datas[2].avatar_id = 405701;
editdata.player_datas[3].avatar_id = 405801;

editdata.player_datas[0].views = editdata.player_datas[1].views = editdata.player_datas[2].views = editdata.player_datas[3].views = [
    {"slot": 0, "item_id": 308018}, // 立直棒-恋之反省
    {"slot": 1, "item_id": 308016}, // 和牌-恋之降临
    {"slot": 2, "item_id": 308017}, // 立直-恋之箭矢
    {"slot": 6, "item_id": 308019}, // 桌布-恋之见证
    {"slot": 7, "item_id": 308020}, // 牌背-恋之背影
];

editdata.config = {
    'category': 1,
    'meta': {'mode_id': 0},
    'mode': {
        'mode': 1,
        'detail_rule': {
            'init_point': 100000,
            'tablecloth_id': 308019, // 桌布-恋之见证
            'mjp_id': 308020, // 牌背-恋之背影
        }
    }
};

// 示例对局
demogame();
