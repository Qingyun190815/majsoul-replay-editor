loadproject();

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
        'detail_rule': {
            'jiuchao_mode': true,
        }
    }
};

tiles0 = "11122233344457zt";
tiles1 = "111666mt225pt5p6pt8st8s";
tiles2 = "345mt34pt23334455st";
tiles3 = "1p1112pt88st55zt5z77zt7z";
paishan = randompaishan("3s..5pt", "44pt242st2s..5pt2p");
roundbegin();
qiepai();
mingpai();
mopai();
combomopai();
qiepai();
mingqiepai("6pt");
moqieliqi("2st");
normalmoqie(2);
mopai();
leimingpai();
hupai();
