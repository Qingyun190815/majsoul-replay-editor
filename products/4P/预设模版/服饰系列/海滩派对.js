loadproject();

editdata.player_datas[0].nickname = "一姬";
editdata.player_datas[1].nickname = "相原舞";
editdata.player_datas[2].nickname = "抚子";
editdata.player_datas[3].nickname = "九条璃雨";
editdata.player_datas[0].avatar_id = 400103;
editdata.player_datas[1].avatar_id = 400503;
editdata.player_datas[2].avatar_id = 400603;
editdata.player_datas[3].avatar_id = 400803;

// 头像框-豆芽
editdata.player_datas[0].avatar_frame = editdata.player_datas[1].avatar_frame = editdata.player_datas[2].avatar_frame = editdata.player_datas[3].avatar_frame = 305500;
editdata.player_datas[0].views = editdata.player_datas[1].views = editdata.player_datas[2].views = editdata.player_datas[3].views = [{"slot": 5, "item_id": 305500}];

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
