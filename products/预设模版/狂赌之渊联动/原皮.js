loadproject();

editdata.player_datas[0].nickname = "蛇喰梦子";
editdata.player_datas[1].nickname = "早乙女芽亚里";
editdata.player_datas[2].nickname = "生志摩妄";
editdata.player_datas[3].nickname = "桃喰绮罗莉";
editdata.player_datas[0].avatar_id = 404001;
editdata.player_datas[1].avatar_id = 404101;
editdata.player_datas[2].avatar_id = 404201;
editdata.player_datas[3].avatar_id = 404301;

editdata.player_datas[0].views = editdata.player_datas[1].views = editdata.player_datas[2].views = editdata.player_datas[3].views = [
    {"slot": 0, "item_id": 308008}, // 立直棒-生死之剑
    {"slot": 1, "item_id": 308006}, // 和牌-命运之轮
    {"slot": 2, "item_id": 308007}, // 立直-纸牌花火
    {"slot": 6, "item_id": 308009}, // 桌布-无双之花
    {"slot": 7, "item_id": 308010}, // 牌背-百花境界
];

editdata.config = {
    'category': 1,
    'meta': {'mode_id': 0},
    'mode': {
        'mode': 1,
        'detail_rule': {
            'init_point': 100000,
            'tablecloth_id': 308009, // 桌布-无双之花
            'mjp_id': 308010, // 牌背-百花境界
        }
    }
};

// 示例对局
demogame();
