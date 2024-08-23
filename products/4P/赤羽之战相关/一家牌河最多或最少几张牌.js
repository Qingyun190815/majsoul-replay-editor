loadproject()

// 这里不考虑换三张的情况, 没有什么必要

// 这里分为是否有人和牌跑路的情况, 如果允许有人跑路, 那他的牌河可能就没有牌
// 所以这里只有3局:
// 1. 有人跑路, 最多几张牌
// 2. 无人跑路, 最多几张牌
// 3. 无人跑路, 最少几张牌

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
    'meta': {'mode_id': 41},
    'mode': {
        'mode': 1,
        'detail_rule': {
            'begin_open_mode': 0,
            'chuanma': 1,
            'dora3_mode': 0,
            'dora_count': 0,
            'fanfu': 1,
            'guyi_mode': 0,
            'huansanzhang': 0,
            'init_point': 100000,
            'muyu_mode': 0,
            'shiduan': 0,
            'xuezhandaodi': 1
        }
    }
}

// 有人跑路, 最多几张
// 要让一家牌河最多, 那该家最好是亲家,
// 且一上来就点北家, 然后又点西家
// 之后碰南家的牌四次
// 31张
tiles0 = "1122334469999m4p";
tiles1 = "66688m46788p677s";
tiles2 = "1111222233334s";
tiles3 = "1111222233334p";
paishan = randompaishan("4s81234m");
roundbegin();
dingque("pspm")
qiepai();
hupai();

mopai();
qiepai();
hupai();

mopai();
qiepai();
for (let i = 0; i < 4; i++) {
    mopai();
    qiepai();
    mingpai();
    qiepai("9m");
}
for (let i = 0; i < 49; i++) {
    mopai();
    qiepai();
}
notileliuju();

// 无人跑路, 最多几张
// 要让一家牌河最多, 那该家最好是亲
// 且 南家出的牌
// 被亲家碰四次
// 被北家碰四次
// 被西家碰/吃四次
// 20张
tiles3 = "1122334469999m8s";
tiles0 = "6667m6667p46667s";
tiles1 = "1122334469999p";
tiles2 = "1122334469999s";
paishan = randompaishan("1234m1s5m2s5m3s5m4s5m1p5p5s2p5p5s3p5p5s4p");
roundbegin();
dingque("mspp");
qiepai();
for (let i = 0; i < 4; i++) {
    mopai();
    qiepai();
    mingpai();
    qiepai("9m");
}
for (let i = 0; i < 4; i++) {
    mopai();
    qiepai();
    mingpai();
    qiepai("9s");
    mopai();
    qiepai();
}
for (let i = 0; i < 4; i++) {
    mopai();
    qiepai();
    mingpai();
    qiepai("9p");
    mopai();
    qiepai();
    mopai();
    qiepai();
}
for (let i = 0; i < 31; i++) {
    mopai();
    qiepai();
}
notileliuju();

// 无人跑路, 最少几张
// 要让一家牌河最少, 那该家最好是北家
// 且 北家出的牌
// 被亲家杠四次
// 被北家杠四次
// 被西家杠四次
// 赤羽不限制玩家开杠次数
// 张
tiles3 = "11122233344469m";
tiles0 = "1112223334446p";
tiles1 = "1112223334446s";
tiles2 = "666779m6669p6669s";
paishan = randompaishan("");
roundbegin();
dingque("psmp");
qiepai();


gameend();



