loadproject();

// 要做到和牌却被飞, 那就只能是役满的包牌导致的, 下面用大三元作例子

editdata.player_datas[0].nickname = "一姬-契约";
editdata.player_datas[1].nickname = "新年初诣";
editdata.player_datas[2].nickname = "一姬当千";
editdata.player_datas[3].nickname = "绮春歌";
editdata.player_datas[0].avatar_id = 400102;
editdata.player_datas[1].avatar_id = 400104;
editdata.player_datas[2].avatar_id = 400105;
editdata.player_datas[3].avatar_id = 400106;

editdata.config = {
    'category': 1,
    'meta': {'mode_id': 0},
    'mode': {
        'mode': 1,
    }
};

// 过渡
transition();

scores = [55000, 21000, 24000, 0];
tiles0 = "238999p11z556677z";
tiles1 = "11345678m23456p";
tiles2 = "2223405567888m";
tiles3 = "2223405567888s";
paishan = randompaishan("5677z1p", "1z....");
roundbegin();
qiepai("8p");
for (let i = 0; i < 3; i++) {
    normalmoqie();
    mingqiepai("9p");
}
normalmoqie(2);
hupai();
