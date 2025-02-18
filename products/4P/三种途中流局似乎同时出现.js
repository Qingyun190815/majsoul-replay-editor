loadproject();

// 四风连打, 四杠散了, 四家立直同时出现,
// 优先级最高的是四风连打, 但四风连打需要无人鸣牌, 故这里不会显示
// 四杠散了和四家立直, 通常认为四杠散了的优先级更高, 因为杠在立直前
// 同理对于四风连打和四家立直, 四风连打优先级更高,
// 因为通常的逻辑是先打出牌, 之后再判断牌是否通过,
// 四风连打只要牌打出就算, 而立直成功需要牌通过

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

tiles0 = "11112224445556z";
tiles1 = "111999m111999p6z";
tiles2 = "222444666888s6z";
tiles3 = "111333777999s6z";
paishan = randompaishan("1m2s1s", "23333z");
roundbegin();
combomopai();
qiepai(true);
for (let i = 0; i < 3; i++) {
    mopai();
    combomopai();
    qiepai(true);
}
liuju();
