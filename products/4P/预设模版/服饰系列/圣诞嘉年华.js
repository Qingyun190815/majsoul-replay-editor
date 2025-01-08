loadproject();

editdata.player_datas[0].nickname = "藤田佳奈";
editdata.player_datas[1].nickname = "三上千织";
editdata.player_datas[2].nickname = "八木唯";
editdata.player_datas[3].nickname = "一之濑空";
editdata.player_datas[0].avatar_id = 400303;
editdata.player_datas[1].avatar_id = 400403;
editdata.player_datas[2].avatar_id = 400703;
editdata.player_datas[3].avatar_id = 401303;

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
