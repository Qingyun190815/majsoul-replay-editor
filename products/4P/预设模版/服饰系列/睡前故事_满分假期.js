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

// 示例对局
tiles0 = "11223344556777z";
tiles1 = "1112340678999m";
tiles2 = "1112340678999p";
tiles3 = "1112340678999s";
paishan = randompaishan("6z", "5z....");
roundbegin();
qiepai(true);
normalmoqie();
hupai();
