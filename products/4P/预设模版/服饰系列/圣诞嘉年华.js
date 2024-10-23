loadproject();

editdata.player_datas[0].nickname = "藤田佳奈";
editdata.player_datas[1].nickname = "三上千织";
editdata.player_datas[2].nickname = "八木唯";
editdata.player_datas[3].nickname = "一之濑空";
editdata.player_datas[0].avatar_id = 400303;
editdata.player_datas[1].avatar_id = 400403;
editdata.player_datas[2].avatar_id = 400703;
editdata.player_datas[3].avatar_id = 401303;

editdata.config = {
    'category': 1,
    'meta': {'mode_id': 0},
    'mode': {
        'mode': 1,
        'detail_rule': {
            'init_point': 100000,
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

GameMgr.Inst.checkPaiPu("240824-6cc115df-e972-4d7a-9f16-32a1c52e92b8", 0)
