loadproject();

editdata.player_datas[0].nickname = "三上千织";
editdata.player_datas[1].nickname = "小鸟游雏田";
editdata.player_datas[2].nickname = "雏桃";
editdata.player_datas[3].nickname = "A-37";
editdata.player_datas[0].avatar_id = 400405;
editdata.player_datas[1].avatar_id = 401903;
editdata.player_datas[2].avatar_id = 402604;
editdata.player_datas[3].avatar_id = 404504;

// 头像框-猫咪军团的身份
editdata.player_datas[0].avatar_frame = editdata.player_datas[1].avatar_frame = editdata.player_datas[2].avatar_frame = editdata.player_datas[3].avatar_frame = 305523;
editdata.player_datas[0].views = editdata.player_datas[1].views = editdata.player_datas[2].views = editdata.player_datas[3].views = [{"slot": 5, "item_id": 305523}];

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
