loadproject();

// 这个其实在"所有角色报所有菜名系列"中已经有了, 在最后一局

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
    }
};

tiles0 = "22223444666888s";
tiles1 = "2228m333557777s";
tiles2 = "233344447777m0s";
tiles3 = "55506666888m08p";
paishan = randompaishan("1m9m1p3p1m9m1p3p1m9m1p3p1m9m1p3p9p1s9s4p9p1s9s4p9p1s9s4p9p1s9s4p1z2z3z5p1z2z3z5p1z2z3z5p1z2z3z7p4z5z6z6p4z5z6z6p4z5z6z6p4z5z6z6p7z", "5864s");
roundbegin();
for (let i = 0; i < 4; i++) {
    leimingpai();
    mopai();
}
qiepai(true);
for (let i = 65; i >= 1; i--) {
    mopai();
    qiepai();
}
notileliuju();
