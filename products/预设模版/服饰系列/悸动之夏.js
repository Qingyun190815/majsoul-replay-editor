loadproject();

// 悸动之夏UP装扮:
// 立直棒-波子汽水
// 和牌-泰山鸭顶
// 立直-立直鸭
// 牌背-鸭鸭牌背

// 此外还有活动获得的 动态桌布-紫霞海岸

editdata.player_datas[0].nickname = "八木唯";
editdata.player_datas[1].nickname = "四宫夏生";
editdata.player_datas[2].nickname = "莎拉";
editdata.player_datas[3].nickname = "七夕";
editdata.player_datas[0].avatar_id = 400706;
editdata.player_datas[1].avatar_id = 401105;
editdata.player_datas[2].avatar_id = 401605;
editdata.player_datas[3].avatar_id = 403903;

editdata.player_datas[0].views = editdata.player_datas[1].views = editdata.player_datas[2].views = editdata.player_datas[3].views = [
    {"slot": 0, "item_id": 305613}, // 立直棒-波子汽水
    {"slot": 1, "item_id": 305220}, // 和牌-泰山鸭顶
    {"slot": 2, "item_id": 305320}, // 立直-立直鸭
    {"slot": 6, "item_id": 305809}, // 动态桌布-紫霞海岸
    {"slot": 7, "item_id": 305709}, // 牌背-鸭鸭牌背
];

editdata.config = {
    'category': 1,
    'meta': {'mode_id': 0},
    'mode': {
        'mode': 1,
        'detail_rule': {
            'init_point': 100000,
            'mjp_id': 305709, // 牌背-鸭鸭牌背
        }
    }
};

// 示例对局
demogame();
