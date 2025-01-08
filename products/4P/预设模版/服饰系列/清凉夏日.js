loadproject();

// 除了轻库娘

editdata.player_datas[0].nickname = "三上千织";
editdata.player_datas[1].nickname = "泽尼娅";
editdata.player_datas[2].nickname = "白石奈奈";
editdata.player_datas[3].nickname = "五十岚阳菜";
editdata.player_datas[0].avatar_id = 400404;
editdata.player_datas[1].avatar_id = 400904;
editdata.player_datas[2].avatar_id = 401803;
editdata.player_datas[3].avatar_id = 402003;

editdata.player_datas[0].views = editdata.player_datas[1].views = editdata.player_datas[2].views = editdata.player_datas[3].views = [
    {"slot": 1, "item_id": 305208}, // 和牌-海浪的馈赠
    {"slot": 2, "item_id": 305308}, // 立直-浪之声
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
