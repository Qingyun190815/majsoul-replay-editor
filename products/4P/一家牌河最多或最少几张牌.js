try {
    MRE.open();
} catch (e) {
}

loadproject();

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
    'category': 1,
    'meta': {'mode_id': 2},
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
            'init_point': 100000,
            'muyu_mode': 0,
            'shiduan': 1,
            'xuezhandaodi': 0,
            'xueliu': 0
        }
    }
}

// 要让一家牌河最多, 那该家最好是亲
// 且 南家出的牌
// 被亲家碰四次
// 被北家碰四次
// 被西家碰/吃四次
// 24张
tiles0 = "9999s1122334457z";
tiles1 = "1111222266667p";
tiles2 = "333355509999p5z";
tiles3 = "112233449999m5z";
paishan = randompaishan("1234z1m1s2m1s3m1s4m1s4p2s3s4p2s3s4p2s3s4p", "5z");
roundbegin();
for (let i = 0; i < 4; i++) {
    qiepai("9s");
    mopai();
    qiepai();
    mingpai();
}
qiepai("7z"); // 亲目前只有 5z
mopai();
for (let i = 0; i < 4; i++) {
    qiepai();
    mingpai();
    qiepai("9m");
    mopai();
    qiepai();
    mopai();
}
for (let i = 0; i < 4; i++) {
    qiepai();
    mingpai();
    qiepai("9p");
    mopai();
    qiepai();
    mopai();
    qiepai();
    mopai();
}
qiepai();
for (let i = 0; i < 44; i++) {
    mopai();
    qiepai();
}
notileliuju();

// 要让一家牌河最少, 那该家最好是北家,
// 且 北家出的牌
// 被亲家杠四次
// 被南家碰四次
// 被西家碰四次
// 10张
tiles0 = "11122233344457z";
tiles1 = "112233449999m5z";
tiles2 = "112233449999p5z";
tiles3 = "1111222266667s";
paishan = randompaishan("33s1z33s2z44s3z44s4z55s1m5s2m0s3m7p4m7p1p2p3p4p", "5z8888p");
roundbegin();
qiepai();
for (let i = 0; i < 4; i++) {
    mopai();
    qiepai();
    mopai();
    qiepai();
    mopai();
    qiepai();
    mingpai();
    mopai();
    qiepai();
}
mopai();
qiepai();
for (let i = 0; i < 4; i++) {
    mopai();
    qiepai();
    mopai();
    qiepai();
    mingpai();
    qiepai("9m");
}
mopai();
qiepai();
for (let i = 0; i < 4; i++) {
    mopai();
    qiepai();
    mingpai();
    qiepai("9p");
}
for (let i = 0; i < 39; i++) {
    mopai();
    qiepai();
}
notileliuju();

try {
    MRE.close();
} catch (e) {
}

