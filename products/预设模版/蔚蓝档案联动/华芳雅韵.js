loadproject();

editdata.player_datas[0].nickname = "砂狼白子-华芳";
editdata.player_datas[1].nickname = "小鸟游星野-华芳";
editdata.player_datas[2].nickname = "陆八魔爱露-华芳";
editdata.player_datas[3].nickname = "浅黄睦月-华芳";
editdata.player_datas[0].avatar_id = 408603;
editdata.player_datas[1].avatar_id = 408703;
editdata.player_datas[2].avatar_id = 408803;
editdata.player_datas[3].avatar_id = 408903;

editdata.player_datas[0].views = editdata.player_datas[1].views = editdata.player_datas[2].views = editdata.player_datas[3].views = [
    {"slot": 0, "item_id": 308038}, // 立直棒-大蛇比纳
    {"slot": 1, "item_id": 308036}, // 和牌-冷血射击
    {"slot": 2, "item_id": 308037}, // 立直-虹色轨迹
    {"slot": 6, "item_id": 308039}, // 桌布-什亭青空
    {"slot": 7, "item_id": 308040}, // 牌背-佩洛之星
];

editdata.config = {
    'category': 1,
    'meta': {'mode_id': 0},
    'mode': {
        'mode': 1,
        'detail_rule': {
            'init_point': 100000,
            'tablecloth_id': 308039, // 桌布-什亭青空
            'mjp_id': 308040, // 牌背-佩洛之星
        }
    }
};

// 示例对局
demogame();
