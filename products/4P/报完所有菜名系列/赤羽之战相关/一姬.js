try {
    MRE.open();
} catch (e) {
}

loadproject();

// 由于 examples 文件夹下的 3.js 文件模板有点问题, 故对应的赤羽报菜名暂缓, 欢迎 commit

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
    'category': 2, // 1表示友人房, 2表示匹配房
    'meta': {'mode_id': 41}, //2表示铜四东, 3表示铜四南, 详见 字典.md
    'mode': {
        'mode': 1, // 1表示4人, 11表示3人
        'detail_rule': {
            'begin_open_mode': 0,
            'chuanma': 1,
            'dora3_mode': 0, //是否是宝牌狂热模式
            'dora_count': 3, //红宝牌数量
            'fanfu': 1,
            'guyi_mode': 0,
            'have_zimosun': true,
            'huansanzhang': 1,
            'open_hand': 0,
            'init_point': 200000,
            'muyu_mode': 0, //是否是龙之目玉模式
            'shiduan': 1,
            'xuezhandaodi': 1,
            'xueliu': 1 //是否是血流成河
        }
    }
}


try {
    MRE.close();
} catch (e) {
}

