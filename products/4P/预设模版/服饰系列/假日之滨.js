loadproject();

editdata.player_datas[0].nickname = "藤田佳奈";
editdata.player_datas[1].nickname = "汪次郎";
editdata.player_datas[2].nickname = "石原碓海";
editdata.player_datas[3].nickname = "福姬";
editdata.player_datas[0].avatar_id = 400305;
editdata.player_datas[1].avatar_id = 401204;
editdata.player_datas[2].avatar_id = 403104;
editdata.player_datas[3].avatar_id = 403805;

// 称号-喵之一手
editdata.player_datas[0].title = editdata.player_datas[1].title = editdata.player_datas[2].title = editdata.player_datas[3].title = 600078;
// 头像框-大小姐发带
editdata.player_datas[0].avatar_frame = editdata.player_datas[1].avatar_frame = editdata.player_datas[2].avatar_frame = editdata.player_datas[3].avatar_frame = 305552;
editdata.player_datas[0].views = editdata.player_datas[1].views = editdata.player_datas[2].views = editdata.player_datas[3].views = [{"slot": 5, "item_id": 305552}];

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
