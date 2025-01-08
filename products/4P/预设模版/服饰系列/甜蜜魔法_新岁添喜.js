loadproject();

editdata.player_datas[0].nickname = "五十岚阳菜";
editdata.player_datas[1].nickname = "福姬";
editdata.player_datas[2].nickname = "姬川响";
editdata.player_datas[3].nickname = "莱恩";
editdata.player_datas[0].avatar_id = 402005;
editdata.player_datas[1].avatar_id = 403804;
editdata.player_datas[2].avatar_id = 404603;
editdata.player_datas[3].avatar_id = 404703;

// 头像框-雪夜童话
editdata.player_datas[0].avatar_frame = editdata.player_datas[1].avatar_frame = editdata.player_datas[2].avatar_frame = editdata.player_datas[3].avatar_frame = 305542;
editdata.player_datas[0].views = editdata.player_datas[1].views = editdata.player_datas[2].views = editdata.player_datas[3].views = [{"slot": 5, "item_id": 305542}];

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
