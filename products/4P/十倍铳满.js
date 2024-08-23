loadproject();

// 南起 铳三家共 2 (十三面) + 3 (绿四单) + 5 (字骑喜) = 10 倍役满

editdata.player_datas[0].nickname = "一姬-契约";
editdata.player_datas[1].nickname = "新年初诣";
editdata.player_datas[2].nickname = "一姬当千";
editdata.player_datas[3].nickname = "绮春歌";
editdata.player_datas[0].avatar_id = 400102;
editdata.player_datas[1].avatar_id = 400104;
editdata.player_datas[2].avatar_id = 400105;
editdata.player_datas[3].avatar_id = 400106;

settings.chuanma_points_method = 0;
editdata.config = {
    'category': 2,
    'meta': {'mode_id': 3},
    'mode': {
        'mode': 1,
        'detail_rule': {
            'begin_open_mode': 0,
            'chuanma': 0,
            'dora3_mode': 0,
            'dora_count': 3,
            'fanfu': 1,
            'guyi_mode': 0,
            'have_zimosun': true,
            'huansanzhang': 0,
            'open_hand': 0,
            'init_point': 400000,
            'muyu_mode': 0,
            'shiduan': 1,
            'xuezhandaodi': 0,
            'xueliu': 0
        }
    }
};

tiles0 = "0p1112223334446z";
tiles1 = "1112340678999m";
tiles2 = "19m19p19s1234567z";
tiles3 = "222444666888s6z";
paishan = randompaishan("6z");
roundbegin();
qiepai("0p");
mopai();
qiepai("6z", true);
hupai();
