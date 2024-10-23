loadproject();

editdata.player_datas[0].nickname = "一姬";
editdata.player_datas[1].nickname = "二阶堂美树";
editdata.player_datas[2].nickname = "莎拉";
editdata.player_datas[3].nickname = "二之宫花";
editdata.player_datas[0].avatar_id = 400104;
editdata.player_datas[1].avatar_id = 400206;
editdata.player_datas[2].avatar_id = 401603;
editdata.player_datas[3].avatar_id = 401706;

editdata.player_datas[0].views = editdata.player_datas[1].views = editdata.player_datas[2].views = editdata.player_datas[3].views = [
    {"slot": 1, "item_id": 305201}, // 和牌-歌剧魅影 (还有一个和牌是 305202 和牌-魔法少女)
    {"slot": 2, "item_id": 305301}, // 立直-非常事态 (还有一个立直是 305302 立直-魔法少女)
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

