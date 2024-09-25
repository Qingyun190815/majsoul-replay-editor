loadproject();

// 三丽鸥联动只有新服饰, 没有新角色, 联动的三丽鸥家族与服饰角色对应如下:
// 凯蒂猫: 福姬
// 酷洛米: 泽尼娅
// 大耳狗: 八木唯
// 美乐蒂: 相原舞

editdata.player_datas[0].avatar_frame = editdata.player_datas[1].avatar_frame = editdata.player_datas[2].avatar_frame = editdata.player_datas[3].avatar_frame = 30550014; // 头像框-肉桂卷定位器

editdata.player_datas[0].nickname = "相原舞";
editdata.player_datas[1].nickname = "八木唯";
editdata.player_datas[2].nickname = "泽尼娅";
editdata.player_datas[3].nickname = "福姬";
editdata.player_datas[0].avatar_id = 400507;
editdata.player_datas[1].avatar_id = 400708;
editdata.player_datas[2].avatar_id = 400906;
editdata.player_datas[3].avatar_id = 403806;

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

