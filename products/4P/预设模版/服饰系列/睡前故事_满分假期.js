loadproject();

editdata.player_datas[0].nickname = "凉宫杏树";
editdata.player_datas[1].nickname = "藤本绮罗";
editdata.player_datas[2].nickname = "艾丽莎";
editdata.player_datas[3].nickname = "森川绫子";
editdata.player_datas[0].avatar_id = 402103;
editdata.player_datas[1].avatar_id = 402804;
editdata.player_datas[2].avatar_id = 403203;
editdata.player_datas[3].avatar_id = 404803;

editdata.player_datas[0].views = editdata.player_datas[1].views = editdata.player_datas[2].views = editdata.player_datas[3].views = [
    {"slot": 1, "item_id": 305202}, // 和牌-魔法少女 (还有一个和牌是 305201 和牌-歌剧魅影)
    {"slot": 2, "item_id": 305302}, // 立直-魔法少女 (还有一个立直是 305301 立直-非常事态)
];

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

GameMgr.Inst.checkPaiPu("240822-4b832cf6-1310-41e8-9379-ee3179a3dedd", 0)
