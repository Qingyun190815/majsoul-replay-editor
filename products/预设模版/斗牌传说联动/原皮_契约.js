loadproject();

editdata.player_datas[0].nickname = "赤木茂";
editdata.player_datas[1].nickname = "鹫巢岩";
editdata.player_datas[2].nickname = "赤木茂-契约";
editdata.player_datas[3].nickname = "鹫巢岩-契约";
editdata.player_datas[0].avatar_id = 405001;
editdata.player_datas[1].avatar_id = 405101;
editdata.player_datas[2].avatar_id = 405002;
editdata.player_datas[3].avatar_id = 405102;

editdata.player_datas[0].views = editdata.player_datas[1].views = editdata.player_datas[2].views = editdata.player_datas[3].views = [
    {"slot": 0, "item_id": 308013}, // 立直棒-命悬一线
    {"slot": 1, "item_id": 308011}, // 和牌-地狱低语
    {"slot": 2, "item_id": 308012}, // 立直-幽冥之焰
    {"slot": 6, "item_id": 308014}, // 桌布-传说之夜
    {"slot": 7, "item_id": 308015}, // 牌背-双鹫纹章
];

editdata.config = {
    'category': 1,
    'meta': {'mode_id': 0},
    'mode': {
        'mode': 1,
        'detail_rule': {
            'init_point': 100000,
            'tablecloth_id': 308014, // 桌布-传说之夜
            'mjp_id': 308015, // 牌背-双鹫纹章
        }
    }
};

// 示例对局
demogame();
