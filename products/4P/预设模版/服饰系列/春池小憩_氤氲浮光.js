loadproject();

editdata.player_datas[0].nickname = "辉夜姬";
editdata.player_datas[1].nickname = "福姬";
editdata.player_datas[2].nickname = "泷川夏彦";
editdata.player_datas[3].nickname = "夏弥尔";
editdata.player_datas[0].avatar_id = 402905;
editdata.player_datas[1].avatar_id = 403803;
editdata.player_datas[2].avatar_id = 404903;
editdata.player_datas[3].avatar_id = 405403;

// 福姬, 夏弥尔
editdata.player_datas[1].views = editdata.player_datas[3].views = [
    {"slot": 1, "item_id": 305211}, // 和牌-核心裂变
    {"slot": 2, "item_id": 305311}, // 立直-虚拟导航
];
// 辉夜姬, 泷川夏彦
editdata.player_datas[0].views = editdata.player_datas[2].views = [
    {"slot": 1, "item_id": 305221}, // 和牌-机械哲学
    {"slot": 2, "item_id": 305321}, // 立直-量子智能
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
