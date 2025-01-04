loadproject();

editdata.player_datas[0].nickname = "一姬-契约";
editdata.player_datas[1].nickname = "绮春歌";
editdata.player_datas[0].avatar_id = 400102;
editdata.player_datas[1].avatar_id = 400106;

editdata.config = {
    'category': 1,
    'meta': {'mode_id': 0},
    'mode': {
        'mode': 21,
    }
};

tiles0 = "11112223334445z";
tiles1 = "1112340678999s";
paishan = randompaishan("", "5s432z");
roundbegin();
leimingpai("1z");
mopai();
leimingpai("2z");
mopai();
leimingpai("3z", "angang");
mopai();
leimingpai("4z", "angang");
mopai();
qiepai();
hupai();
