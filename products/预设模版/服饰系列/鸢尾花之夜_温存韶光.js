loadproject();

// 鸢尾花之夜和温存韶光完全同期, UP装扮:
// 和牌-机械哲学
// 立直-量子智能
// 牌背-魂之元件 (没加入views)

// 此外购买鸢尾花之夜服饰还可以获得:
// 桌布-预热开场
// 牌背-喵呜TV

editdata.player_datas[0].nickname = "二阶堂美树";
editdata.player_datas[1].nickname = "相原舞";
editdata.player_datas[2].nickname = "月见山";
editdata.player_datas[3].nickname = "藤本绮罗";
editdata.player_datas[0].avatar_id = 400207;
editdata.player_datas[1].avatar_id = 400506;
editdata.player_datas[2].avatar_id = 402705;
editdata.player_datas[3].avatar_id = 402805;

editdata.player_datas[0].views = editdata.player_datas[1].views = editdata.player_datas[2].views = editdata.player_datas[3].views = [
    {"slot": 1, "item_id": 305221}, // 和牌-机械哲学
    {"slot": 2, "item_id": 305321}, // 立直-量子智能
    {"slot": 6, "item_id": 30580005}, // 桌布-预热开场
    {"slot": 7, "item_id": 30570003}, // 牌背-喵呜TV
];

editdata.config = {
    'category': 1,
    'meta': {'mode_id': 0},
    'mode': {
        'mode': 1,
        'detail_rule': {
            'init_point': 100000,
            'tablecloth_id': 30580005, // 桌布-预热开场
            'mjp_id': 30570003, // 牌背-喵呜TV
        }
    }
};

// 示例对局
demogame();
