loadproject();

editdata.player_datas[0].nickname = "一姬-契约";
editdata.player_datas[1].nickname = "新年初诣";
editdata.player_datas[2].nickname = "一姬当千";
editdata.player_datas[3].nickname = "绮春歌";
editdata.player_datas[0].avatar_id = 400102;
editdata.player_datas[1].avatar_id = 400104;
editdata.player_datas[2].avatar_id = 400105;
editdata.player_datas[3].avatar_id = 400106;

editdata.config = {
    'category': 1,
    'meta': {'mode_id': 0},
    'mode': {
        'mode': 1,
        'detail_rule': {
            'guobiao': true,
            'guobiao_no_8fanfu': true,
            'guobiao_lianzhuang': true
        }
    }
};

tiles0 = "123789m1234478p2z";
tiles1 = "2223334445556z";
tiles2 = "1112233678999p";
tiles3 = "1122345678999s";
paishan = randompaishan("9p");
roundbegin();
qiepai();
normalmoqie();
hupai();
