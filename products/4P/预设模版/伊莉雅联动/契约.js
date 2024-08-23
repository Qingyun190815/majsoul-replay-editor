loadproject();

editdata.player_datas[0].nickname = "伊莉雅-契约";
editdata.player_datas[1].nickname = "美游-契约";
editdata.player_datas[2].nickname = "小黑-契约";
editdata.player_datas[3].nickname = "吉尔-契约";
editdata.player_datas[0].avatar_id = 407902;
editdata.player_datas[1].avatar_id = 408002;
editdata.player_datas[2].avatar_id = 408102;
editdata.player_datas[3].avatar_id = 408202;

settings.chuanma_points_method = 0;
editdata.config = {
    'category': 2,
    'meta': {'mode_id': 3},
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
};

// Insert your code below

/*
tiles0 = "11112223334446z";
tiles1 = "1112340678999m";
tiles2 = "111333777999s6z";
tiles3 = "222444666888s6z";
paishan = randompaishan("6z", "0p432z");
roundbegin();
for (let i = 0; i < 4; i++) {
    leimingpai();
    mopai();
}
qiepai();
mopai();
qiepai("6z", true);
hupai();
*/

// Insert your code above

GameMgr.Inst.checkPaiPu("231127-e18887d1-d8eb-4e13-9ac0-5fb4f1a17426", 0)
