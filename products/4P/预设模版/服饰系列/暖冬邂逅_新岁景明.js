loadproject();

// 除了斋藤治

editdata.player_datas[0].nickname = "如月莲";
editdata.player_datas[1].nickname = "柚";
editdata.player_datas[2].nickname = "四宫冬实";
editdata.player_datas[3].nickname = "如月彩音";
editdata.player_datas[0].avatar_id = 403004;
editdata.player_datas[1].avatar_id = 405904;
editdata.player_datas[2].avatar_id = 406604;
editdata.player_datas[3].avatar_id = 406803;

editdata.player_datas[0].views = editdata.player_datas[1].views = editdata.player_datas[2].views = editdata.player_datas[3].views = [
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
