try {
    MRE.open();
} catch (e) {
}

loadproject();

editdata.player_datas[0].nickname = "一姬-契约";
editdata.player_datas[1].nickname = "一姬当千";
editdata.player_datas[2].nickname = "绮春歌";
editdata.player_datas[0].avatar_id = 400102;
editdata.player_datas[1].avatar_id = 400105;
editdata.player_datas[2].avatar_id = 400106;

settings.chuanma_points_method = 0;
editdata.config = {
    'category': 1,
    'meta': {'mode_id': 17},
    'mode': {
        'mode': 11,
        'detail_rule': {
            'begin_open_mode': 0,
            'chuanma': 0,
            'dora3_mode': 0,
            'dora_count': 2,
            'fanfu': 1,
            'guyi_mode': 0,
            'have_zimosun': true,
            'huansanzhang': 0,
            'open_hand': 0,
            'init_point': 35000,
            'muyu_mode': 0,
            'shiduan': 1,
            'xuezhandaodi': 0,
            'xueliu': 0
        }
    }
}

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

try {
    MRE.close();
} catch (e) {
}

