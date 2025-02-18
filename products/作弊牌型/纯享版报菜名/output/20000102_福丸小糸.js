loadproject();

editdata.player_datas[0].nickname = "福丸小糸-契约";
editdata.player_datas[1].nickname = "福丸小糸";
editdata.player_datas[2].nickname = "福丸小糸-契约";
editdata.player_datas[3].nickname = "悠然格调";
editdata.player_datas[0].avatar_id = 40010202;
editdata.player_datas[1].avatar_id = 40010201;
editdata.player_datas[2].avatar_id = 40010202;
editdata.player_datas[3].avatar_id = 40010203;

editdata.player_datas[0].views = editdata.player_datas[1].views = editdata.player_datas[2].views = editdata.player_datas[3].views = [
    {"slot": 0, "item_id": 30560005}, // 立直棒-动听之源
    {"slot": 1, "item_id": 30520007}, // 和牌-涟漪之空
    {"slot": 2, "item_id": 30530007}, // 立直-水漾星光
    {"slot": 6, "item_id": 30580011}, // 桌布-闪耀吧！
    {"slot": 7, "item_id": 30570007}, // 牌背-静谧夜光
];

editdata.config = {
    'category': 1,
    'meta': {'mode_id': 0},
    'mode': {
        'mode': 1,
        'detail_rule': {
            'init_point': 300000,
        }
    }
};

origin_hupaioneplayer = hupaioneplayer;

// 第1局
hupaioneplayer = function (seat) {
    let fans = [
        {'val': 1, 'id': 2},
        {'val': 2, 'id': 18},
        {'val': 1, 'id': 30},
        {'val': 1, 'id': 3},
        {'val': 1, 'id': 4},
        {'val': 1, 'id': 5},
        {'val': 1, 'id': 6},
        {'val': 1, 'id': 1},
        {'val': 1, 'id': 14},
        {'val': 1, 'id': 13},
        {'val': 3, 'id': 28},
        {'val': 2, 'id': 25},
        {'val': 1, 'id': 7},
        {'val': 1, 'id': 8},
        {'val': 1, 'id': 9},
    ];
    playertiles[seat].length--;
    delta_scores = [48000, -16000, -16000, -16000];
    return {
        'count': 64,
        'doras': [doras[0]],
        'li_doras': li_doras,
        'fans': fans,
        'fu': 170,
        'hand': [].concat(playertiles[seat]),
        'hu_tile': playertiles[seat][playertiles[seat].length - 1],
        'liqi': false,
        'ming': [],
        'point_rong': 48000,
        'point_sum': 48000,
        'point_zimo_qin': 16000,
        'point_zimo_xian': 16000,
        'qinjia': true,
        'seat': seat,
        'title_id': 11,
        'yiman': false,
        'zimo': true,
    };
}
tiles0 = "55555555555555z";
tiles1 = "1112340678999m";
tiles2 = "1112340678999p";
tiles3 = "1112340678999s";
paishan = randompaishan("", "7z....");
roundbegin();
hupai();

// 第2局
hupaioneplayer = function (seat) {
    let fans = [
        {'val': 1, 'id': 10},
        {'val': 1, 'id': 11},
        {'val': 1, 'id': 12},
        {'val': 2, 'id': 15},
        {'val': 2, 'id': 16},
        {'val': 2, 'id': 17},
        {'val': 2, 'id': 19},
        {'val': 2, 'id': 20},
        {'val': 2, 'id': 21},
        {'val': 2, 'id': 22},
        {'val': 2, 'id': 23},
        {'val': 2, 'id': 24},
        {'val': 3, 'id': 26},
        {'val': 3, 'id': 27},
        {'val': 6, 'id': 29},
    ];
    playertiles[seat].length--;
    delta_scores = [48000, -16000, -16000, -16000];
    return {
        'count': 64,
        'doras': [doras[0]],
        'li_doras': li_doras,
        'fans': fans,
        'fu': 170,
        'hand': [].concat(playertiles[seat]),
        'hu_tile': playertiles[seat][playertiles[seat].length - 1],
        'liqi': false,
        'ming': [],
        'point_rong': 48000,
        'point_sum': 48000,
        'point_zimo_qin': 16000,
        'point_zimo_xian': 16000,
        'qinjia': true,
        'seat': seat,
        'title_id': 11,
        'yiman': false,
        'zimo': true,
    };
}
tiles0 = "55555555555555z";
tiles1 = "1112340678999m";
tiles2 = "1112340678999p";
tiles3 = "1112340678999s";
paishan = randompaishan("", "7z....");
roundbegin();
hupai();

// 第3局
hupaioneplayer = function (seat) {
    let fans = [
            {'val': 1, 'id': 31},
            {'val': 2, 'id': 31},
            {'val': 3, 'id': 31},
            {'val': 4, 'id': 31},
            {'val': 5, 'id': 32},
            {'val': 6, 'id': 32},
            {'val': 7, 'id': 32},
            {'val': 8, 'id': 32},
            {'val': 9, 'id': 34},
            {'val': 10, 'id': 34},
            {'val': 11, 'id': 34},
            {'val': 12, 'id': 34},
            {'val': 13, 'id': 33},
            {'val': 14, 'id': 33},
            {'val': 15, 'id': 33},
        ];
    playertiles[seat].length--;
    delta_scores = [48000, -16000, -16000, -16000];
    return {
        'count': 64,
        'doras': [doras[0]],
        'li_doras': li_doras,
        'fans': fans,
        'fu': 170,
        'hand': [].concat(playertiles[seat]),
        'hu_tile': playertiles[seat][playertiles[seat].length - 1],
        'liqi': false,
        'ming': [],
        'point_rong': 48000,
        'point_sum': 48000,
        'point_zimo_qin': 16000,
        'point_zimo_xian': 16000,
        'qinjia': true,
        'seat': seat,
        'title_id': 11,
        'yiman': false,
        'zimo': true,
    };
}
tiles0 = "55555555555555z";
tiles1 = "1112340678999m";
tiles2 = "1112340678999p";
tiles3 = "1112340678999s";
paishan = randompaishan("", "7z....");
roundbegin();
hupai();

// 第4局
hupaioneplayer = function (seat) {
    let fans = [
        {'val': 1, 'id': 35},
        {'val': 1, 'id': 36},
        {'val': 1, 'id': 37},
        {'val': 1, 'id': 38},
        {'val': 1, 'id': 39},
        {'val': 1, 'id': 40},
        {'val': 1, 'id': 41},
        {'val': 1, 'id': 42},
    ];
    playertiles[seat].length--;
    delta_scores = [288000, -96000, -96000, -96000];
    return {
        'count': 6,
        'doras': [doras[0]],
        'li_doras': li_doras,
        'fans': fans,
        'fu': 170,
        'hand': [].concat(playertiles[seat]),
        'hu_tile': playertiles[seat][playertiles[seat].length - 1],
        'liqi': false,
        'ming': [],
        'point_rong': 288000,
        'point_sum': 288000,
        'point_zimo_qin': 144000,
        'point_zimo_xian': 96000,
        'qinjia': true,
        'seat': seat,
        'title_id': 10,
        'yiman': true,
        'zimo': true,
    };
}
tiles0 = "55555555555555z";
tiles1 = "1112340678999m";
tiles2 = "1112340678999p";
tiles3 = "1112340678999s";
paishan = randompaishan("", "7z....");
roundbegin();
hupai();

// 第5局
hupaioneplayer = function (seat) {
    let fans = [
        {'val': 1, 'id': 42},
        {'val': 1, 'id': 43},
        {'val': 1, 'id': 44},
        {'val': 1, 'id': 45},
        {'val': 2, 'id': 47},
        {'val': 2, 'id': 48},
        {'val': 2, 'id': 49},
        {'val': 2, 'id': 50},
    ];
    playertiles[seat].length--;
    delta_scores = [288000, -96000, -96000, -96000];
    return {
        'count': 6,
        'doras': [doras[0]],
        'li_doras': li_doras,
        'fans': fans,
        'fu': 170,
        'hand': [].concat(playertiles[seat]),
        'hu_tile': playertiles[seat][playertiles[seat].length - 1],
        'liqi': false,
        'ming': [],
        'point_rong': 288000,
        'point_sum': 288000,
        'point_zimo_qin': 96000,
        'point_zimo_xian': 96000,
        'qinjia': true,
        'seat': seat,
        'title_id': 10,
        'yiman': true,
        'zimo': true,
    };
}
tiles0 = "55555555555555z";
tiles1 = "1112340678999m";
tiles2 = "1112340678999p";
tiles3 = "1112340678999s";
paishan = randompaishan("", "7z....");
roundbegin();
hupai();

// 第6局
hupaioneplayer = function (seat) {
    let fans = [
        {'val': 6, 'id': 1018},
        {'val': 6, 'id': 1019},
        {'val': 6, 'id': 1015},
        {'val': 6, 'id': 1016},
        {'val': 6, 'id': 1017},
        {'val': 4, 'id': 1010},
        {'val': 4, 'id': 1011},
        {'val': 4, 'id': 1012},
        {'val': 5, 'id': 1013},
        {'val': 5, 'id': 1020},
        {'val': 1, 'id': 1021},
    ];
    playertiles[seat].length--;
    delta_scores = [48000, -16000, -16000, -16000];
    return {
        'count': 64,
        'doras': [doras[0]],
        'li_doras': li_doras,
        'fans': fans,
        'fu': 170,
        'hand': [].concat(playertiles[seat]),
        'hu_tile': playertiles[seat][playertiles[seat].length - 1],
        'liqi': false,
        'ming': [],
        'point_rong': 48000,
        'point_sum': 48000,
        'point_zimo_qin': 16000,
        'point_zimo_xian': 16000,
        'qinjia': true,
        'seat': seat,
        'title_id': 11,
        'yiman': false,
        'zimo': true,
    };
}
tiles0 = "55555555555555z";
tiles1 = "1112340678999m";
tiles2 = "1112340678999p";
tiles3 = "1112340678999s";
paishan = randompaishan("", "7z....");
roundbegin();
hupai();

// 第7局
hupaioneplayer = function (seat) {
    let fans = [
        {'val': 5, 'id': 1014},
        {'val': 2, 'id': 1005},
        {'val': 3, 'id': 1006},
        {'val': 3, 'id': 1007},
        {'val': 3, 'id': 1008},
        {'val': 3, 'id': 1009},
        {'val': 1, 'id': 1001},
        {'val': 1, 'id': 1004},
        {'val': 1, 'id': 1000},
        {'val': 1, 'id': 1002},
        {'val': 5, 'id': 9100}, // 流局满贯
    ];
    playertiles[seat].length--;
    delta_scores = [48000, -16000, -16000, -16000];
    return {
        'count': 64,
        'doras': [doras[0]],
        'li_doras': li_doras,
        'fans': fans,
        'fu': 170,
        'hand': [].concat(playertiles[seat]),
        'hu_tile': playertiles[seat][playertiles[seat].length - 1],
        'liqi': false,
        'ming': [],
        'point_rong': 48000,
        'point_sum': 48000,
        'point_zimo_qin': 16000,
        'point_zimo_xian': 16000,
        'qinjia': true,
        'seat': seat,
        'title_id': 11,
        'yiman': false,
        'zimo': true,
    };
}
tiles0 = "55555555555555z";
tiles1 = "1112340678999m";
tiles2 = "1112340678999p";
tiles3 = "1112340678999s";
paishan = randompaishan("", "7z....");
roundbegin();
hupai();

hupaioneplayer = origin_hupaioneplayer;
