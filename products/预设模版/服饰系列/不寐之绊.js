loadproject();

// 同期UP装扮:
// 立直音乐-终结之战 (没加入views)
// 头像框-一汪打尽
// 桌布-禁锢之武
// 牌背-封印术

editdata.player_datas[0].nickname = "一之濑空";
editdata.player_datas[1].nickname = "A-37";
editdata.player_datas[2].nickname = "森川绫子";
editdata.player_datas[3].nickname = "岚星";
editdata.player_datas[0].avatar_id = 401306;
editdata.player_datas[1].avatar_id = 404505;
editdata.player_datas[2].avatar_id = 404805;
editdata.player_datas[3].avatar_id = 407403;

// 头像框-一汪打尽
editdata.player_datas[0].avatar_frame = editdata.player_datas[1].avatar_frame = editdata.player_datas[2].avatar_frame = editdata.player_datas[3].avatar_frame = 30550017;
editdata.player_datas[0].views = editdata.player_datas[1].views = editdata.player_datas[2].views = editdata.player_datas[3].views = [
    {"slot": 5, "item_id": 30550017}, // 头像框-一汪打尽
    {"slot": 6, "item_id": 30580009}, // 桌布-禁锢之武
    {"slot": 7, "item_id": 30570006}, // 牌背-封印术
];

editdata.config = {
    'category': 1,
    'meta': {'mode_id': 0},
    'mode': {
        'mode': 1,
        'detail_rule': {
            'init_point': 100000,
            'tablecloth_id': 30580009, // 桌布-禁锢之武
            'mjp_id': 30570006, // 牌背-封印术
        }
    }
};

// 示例对局
demogame();
