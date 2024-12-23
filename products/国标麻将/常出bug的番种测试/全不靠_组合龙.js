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
            'init_point': 30000,
            'guobiao': true,
            'guobiao_no_8fanfu': true
        }
    }
};

tiles0 = "147m258p369s12344z";
tiles1 = "5555555555555z";
tiles2 = "5555555555555z";
tiles3 = "5555555555555z";
paishan = randompaishan("6z");
roundbegin();
qiepai();
normalmoqie();
hupai(0);
