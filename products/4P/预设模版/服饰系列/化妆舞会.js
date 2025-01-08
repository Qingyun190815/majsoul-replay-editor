loadproject();

editdata.player_datas[0].nickname = "二阶堂美树";
editdata.player_datas[1].nickname = "泽尼娅";
editdata.player_datas[2].nickname = "四宫夏生";
editdata.player_datas[3].nickname = "汪次郎";
editdata.player_datas[0].avatar_id = 400203;
editdata.player_datas[1].avatar_id = 400903;
editdata.player_datas[2].avatar_id = 401103;
editdata.player_datas[3].avatar_id = 401203;

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
