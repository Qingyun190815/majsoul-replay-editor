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
            'reveal_discard': true,
        }
    }
};


tiles0 = "22223444666888s";
tiles1 = "2228m333557777s";
tiles2 = "233344447777m0s";
tiles3 = "05556666888m08p";
paishan = randompaishan("YYYYYYYDYYYDYYYDYYYDYYYDYYYDYYYDYYYDYYYDYYYDYYYDYYYDYYYDYYYDYYYDY", "Y864s");
roundbegin();
combomopai(4);
qiepai(true);
normalmoqie(4);
for (let i = 0; i < 15; i++) {
    normalmoqie(3);
    mopai();
    qiepai("anpai");
}
normalmoqie();
notileliuju();
