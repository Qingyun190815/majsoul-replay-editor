loadproject();

editdata.player_datas[0].nickname = "蛇喰梦子-百花";
editdata.player_datas[1].nickname = "早乙女-百花";
editdata.player_datas[2].nickname = "生志摩妄-百花";
editdata.player_datas[3].nickname = "桃喰绮罗莉-百花";
editdata.player_datas[0].avatar_id = 404003;
editdata.player_datas[1].avatar_id = 404103;
editdata.player_datas[2].avatar_id = 404203;
editdata.player_datas[3].avatar_id = 404303;

editdata.player_datas[0].views = editdata.player_datas[1].views = editdata.player_datas[2].views = editdata.player_datas[3].views = [{"slot": 1, "item_id": 308006}, {"slot": 2, "item_id": 308007}];

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

GameMgr.Inst.checkPaiPu("220131-8698c15e-8a1b-4a94-a5c9-06d0e83da6ec", 0)
