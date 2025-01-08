loadproject();

editdata.player_datas[0].nickname = "抚子";
editdata.player_datas[1].nickname = "四宫夏生";
editdata.player_datas[2].nickname = "石原碓海";
editdata.player_datas[3].nickname = "七海礼奈";
editdata.player_datas[0].avatar_id = 400604;
editdata.player_datas[1].avatar_id = 401104;
editdata.player_datas[2].avatar_id = 403103;
editdata.player_datas[3].avatar_id = 404403;

editdata.player_datas[0].views = editdata.player_datas[1].views = editdata.player_datas[2].views = editdata.player_datas[3].views = [
    {"slot": 1, "item_id": 305216}, // 和牌-槲寄生下
    {"slot": 2, "item_id": 305316}, // 立直-鹿雪冬至
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
