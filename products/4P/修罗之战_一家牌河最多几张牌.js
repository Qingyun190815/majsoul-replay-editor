loadproject();

// 编辑方便不考虑换三张的情况

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
    'meta': {'mode_id': 40},
    'mode': {
        'mode': 1,
        'detail_rule': {
            'xuezhandaodi': 1,
        }
    }
};

// 要让一家牌河最多, 那该家最好是亲
// 且 亲家前两次出的牌分别铳了北家和西家
// 然后碰了南家四次
// 38张
tiles0 = "9999s1122334457z";
tiles1 = "4578m135778s555z";
tiles2 = "2345699m123456p";
tiles3 = "223344m234678p7z";
paishan = randompaishan("1m1s1234z");
roundbegin();
qiepai();
hupai();

mopai();
qiepai();
hupai();

mopai();
qiepai();
for (let i = 0; i < 4; i++) {
    mopai();
    qiepai();
    mingpai();
    qiepai("9s");
}
for (let i = 0; i < 63; i++) {
    mopai();
    qiepai();
}
notileliuju();

gameend();
