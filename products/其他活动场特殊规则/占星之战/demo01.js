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
            'zhanxing': true,
        }
    }
};

tiles0 = "129m19p19s1234567z";
tiles1 = "19m19p19s1234567z";
tiles2 = "19m19p19s1234567z";
tiles3 = "19m19p19s1234567z";
paishan = randompaishan();
roundbegin();
qiepai("2m");
normalmoqie(69);
notileliuju();
