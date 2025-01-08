loadproject();

editdata.player_datas[0].nickname = "八木唯";
editdata.player_datas[1].nickname = "四宫夏生";
editdata.player_datas[2].nickname = "莎拉";
editdata.player_datas[3].nickname = "七夕";
editdata.player_datas[0].avatar_id = 400706;
editdata.player_datas[1].avatar_id = 401105;
editdata.player_datas[2].avatar_id = 401605;
editdata.player_datas[3].avatar_id = 403903;

editdata.player_datas[0].views = editdata.player_datas[1].views = editdata.player_datas[2].views = editdata.player_datas[3].views = [
    {"slot": 1, "item_id": 305220}, // 和牌-泰山鸭顶
    {"slot": 2, "item_id": 305320}, // 立直-立直鸭
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
