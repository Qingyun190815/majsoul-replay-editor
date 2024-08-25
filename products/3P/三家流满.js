loadproject();

editdata.player_datas[0].nickname = "一姬-契约";
editdata.player_datas[1].nickname = "一姬当千";
editdata.player_datas[2].nickname = "绮春歌";
editdata.player_datas[0].avatar_id = 400102;
editdata.player_datas[1].avatar_id = 400105;
editdata.player_datas[2].avatar_id = 400106;

editdata.config = {
    'category': 1,
    'meta': {'mode_id': 0},
    'mode': {
        'mode': 11,
    }
};

tiles0 = "2222333444555p8s";
tiles1 = "5566667777888s";
tiles2 = "2223333444450s";
paishan = randompaishan("111m9999m11119999p11119999s111122223333444455556666777z", "1m043p");
roundbegin();
leimingpai();
mopai();
leimingpai();
mopai();
leimingpai();
mopai();
leimingpai();
mopai();
qiepai();
for (let i = 0; i < 50; i++) {
    mopai();
    qiepai();
}
notileliuju();
