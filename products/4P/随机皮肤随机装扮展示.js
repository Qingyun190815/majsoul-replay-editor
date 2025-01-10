loadproject();

// 皮肤随机范围为所有实装皮肤
// 装扮随机范围包括立直棒, 和牌特效, 立直特效, 头像框, 桌布, 称号
// 由于包含桌布, 根据回放显示的桌布算法, 没有在 detail_rule 中设置桌布的话, 最终会显示为东起玩家的桌布
// 其中部分头像框和称号在国际中文服没有, 在 main.js 中注释掉了

editdata.player_datas[0].nickname = "东邪黄药师";
editdata.player_datas[1].nickname = "南帝段智兴";
editdata.player_datas[2].nickname = "西毒欧阳锋";
editdata.player_datas[3].nickname = "北丐洪七公";

editdata.config = {
    'category': 1,
    'meta': {'mode_id': 0},
    'mode': {
        'mode': 1,
        'detail_rule': {
            'random_views': true,
            'random_skin': true,
        }
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
