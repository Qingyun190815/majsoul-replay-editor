loadproject();

// 除了约瑟夫

editdata.player_datas[0].nickname = "九条璃雨";
editdata.player_datas[1].nickname = "北见纱和子";
editdata.player_datas[2].nickname = "藤本绮罗";
editdata.player_datas[3].nickname = "辉夜姬";
editdata.player_datas[0].avatar_id = 400804;
editdata.player_datas[1].avatar_id = 402403;
editdata.player_datas[2].avatar_id = 402803;
editdata.player_datas[3].avatar_id = 402903;

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
