loadproject();

editdata.player_datas[0].nickname = "相原舞";
editdata.player_datas[1].nickname = "雏桃";
editdata.player_datas[2].nickname = "辉夜姬";
editdata.player_datas[3].nickname = "艾丽莎";
editdata.player_datas[0].avatar_id = 400504;
editdata.player_datas[1].avatar_id = 402603;
editdata.player_datas[2].avatar_id = 402904;
editdata.player_datas[3].avatar_id = 403204;

// 相原舞, 雏桃
editdata.player_datas[0].views = editdata.player_datas[1].views = editdata.player_datas[2].views = editdata.player_datas[3].views = [
    {"slot": 1, "item_id": 305210}, // 和牌-鸿运开年
    {"slot": 2, "item_id": 305310}, // 立直-生财有道
];
// 辉夜姬, 艾丽莎
editdata.player_datas[0].views = editdata.player_datas[1].views = editdata.player_datas[2].views = editdata.player_datas[3].views = [
    {"slot": 1, "item_id": 305217}, // 和牌-金屏春色
    {"slot": 2, "item_id": 305317}, // 立直-暗香梅影
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
