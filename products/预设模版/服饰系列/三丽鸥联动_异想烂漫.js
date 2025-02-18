loadproject();

// 三丽鸥联动只有新服饰, 没有新角色, 联动的三丽鸥家族与服饰角色和装扮对应如下:
// 凯蒂猫: 福姬, 立直棒-童话绘梦
// 酷洛米: 泽尼娅, 桌布-小恶魔日记
// 大耳狗: 八木唯, 头像框-肉桂卷定位器
// 美乐蒂: 相原舞, 牌背-萌主驾到

editdata.player_datas[0].nickname = "相原舞";
editdata.player_datas[1].nickname = "八木唯";
editdata.player_datas[2].nickname = "泽尼娅";
editdata.player_datas[3].nickname = "福姬";
editdata.player_datas[0].avatar_id = 400507;
editdata.player_datas[1].avatar_id = 400708;
editdata.player_datas[2].avatar_id = 400906;
editdata.player_datas[3].avatar_id = 403806;

// 头像框-肉桂卷定位器
editdata.player_datas[0].avatar_frame = editdata.player_datas[1].avatar_frame = editdata.player_datas[2].avatar_frame = editdata.player_datas[3].avatar_frame = 30550014;
editdata.player_datas[0].views = editdata.player_datas[1].views = editdata.player_datas[2].views = editdata.player_datas[3].views = [
    {"slot": 0, "item_id": 30560004}, // 立直棒-童话绘梦
    {"slot": 5, "item_id": 30550014}, // 头像框-肉桂卷定位器
    {"slot": 6, "item_id": 30580008}, // 桌布-小恶魔日记
    {"slot": 7, "item_id": 30570005}, // 牌背-萌主驾到
];

editdata.config = {
    'category': 1,
    'meta': {'mode_id': 0},
    'mode': {
        'mode': 1,
        'detail_rule': {
            'init_point': 100000,
            'tablecloth_id': 30580008, // 桌布-小恶魔日记
            'mjp_id': 30570005, // 牌背-萌主驾到
        }
    }
};

// 示例对局
demogame();
