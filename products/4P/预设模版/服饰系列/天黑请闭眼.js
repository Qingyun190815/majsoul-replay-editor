loadproject();

editdata.player_datas[0].nickname = "三上千织";
editdata.player_datas[1].nickname = "艾因";
editdata.player_datas[2].nickname = "艾丽莎";
editdata.player_datas[3].nickname = "莱恩";
editdata.player_datas[0].avatar_id = 400406;
editdata.player_datas[1].avatar_id = 402504;
editdata.player_datas[2].avatar_id = 403205;
editdata.player_datas[3].avatar_id = 404704;

editdata.player_datas[0].views = editdata.player_datas[1].views = editdata.player_datas[2].views = editdata.player_datas[3].views = [
    {"slot": 1, "item_id": 30520001}, // 和牌-杰克的恶作剧
    {"slot": 2, "item_id": 30530001}, // 立直-南瓜夜行
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
