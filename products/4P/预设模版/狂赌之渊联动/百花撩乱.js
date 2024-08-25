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

// Insert your code above

GameMgr.Inst.checkPaiPu("210429-9171010b-679d-4ee6-af18-44ade99be7e1", 0)
