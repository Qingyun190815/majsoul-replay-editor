try {
    MRE.open();
} catch (e) {
}

// 第1局: 东起 天和, 字一色, 四暗刻单骑, 大四喜
// 第2局: 南起 地和, 字一色, 四暗刻单骑, 大四喜
// 第3局: 西起 字一色, 四杠子, 四暗刻单骑, 大四喜
// 第4局: 北起 铳三家共 2 (十三面) + 3 (绿四单) + 5 (字大骑) = 10 倍役满

loadproject();

var flag = 5;
// 0 表示使用天麻一期联动的四个角色, 1 表示天麻二期联动的四个角色,
// 2 表示碧蓝档案联动的四个角色, 3 表示辉夜大小姐联动的三个女角色和轻库娘凑一桌的四个角色
// 4 表示鲁路修联动的两个女角色和伊莉雅联动的除掉小黑剩下的两个女角色凑一桌的四个角色
// 5 表示四个贵人(南贵人暂定用福姬)
// 角色使用的都是契约皮肤
if (flag === 0)
{
    editdata.player_datas[0].nickname = "宫永咲";
    editdata.player_datas[1].nickname = "原村和";
    editdata.player_datas[2].nickname = "天江衣";
    editdata.player_datas[3].nickname = "宫永照";
    editdata.player_datas[0].avatar_id = 403402;
    editdata.player_datas[1].avatar_id = 403502;
    editdata.player_datas[2].avatar_id = 403602;
    editdata.player_datas[3].avatar_id = 403702;
}
else if (flag === 1)
{
    editdata.player_datas[0].nickname = "竹井久";
    editdata.player_datas[1].nickname = "福路美穗子";
    editdata.player_datas[2].nickname = "新子憧";
    editdata.player_datas[3].nickname = "园城寺怜";
    editdata.player_datas[0].avatar_id = 406202;
    editdata.player_datas[1].avatar_id = 406302;
    editdata.player_datas[2].avatar_id = 406402;
    editdata.player_datas[3].avatar_id = 406502;
}
else if (flag === 2)
{
    editdata.player_datas[0].nickname = "砂狼白子";
    editdata.player_datas[1].nickname = "小鸟游星野";
    editdata.player_datas[2].nickname = "陆八魔爱露";
    editdata.player_datas[3].nickname = "浅黄睦月";
    editdata.player_datas[0].avatar_id = 408602;
    editdata.player_datas[1].avatar_id = 408702;
    editdata.player_datas[2].avatar_id = 408802;
    editdata.player_datas[3].avatar_id = 408902;
}
else if (flag === 3)
{
    editdata.player_datas[0].nickname = "四宫辉夜";
    editdata.player_datas[1].nickname = "早坂爱";
    editdata.player_datas[2].nickname = "白银圭";
    editdata.player_datas[3].nickname = "轻库娘";
    editdata.player_datas[0].avatar_id = 405502;
    editdata.player_datas[1].avatar_id = 405702;
    editdata.player_datas[2].avatar_id = 405802;
    editdata.player_datas[3].avatar_id = 401502;
}
else if (flag === 4)
{
    editdata.player_datas[0].nickname = "C.C.";
    editdata.player_datas[1].nickname = "红月卡莲";
    editdata.player_datas[2].nickname = "伊莉雅";
    editdata.player_datas[3].nickname = "美游";
    editdata.player_datas[0].avatar_id = 407102;
    editdata.player_datas[1].avatar_id = 407302;
    editdata.player_datas[2].avatar_id = 407902;
    editdata.player_datas[3].avatar_id = 408002;
}
else if (flag === 5)
{
    editdata.player_datas[0].nickname = "西园寺一羽";
    editdata.player_datas[1].nickname = "北原莉莉";
    editdata.player_datas[2].nickname = "东城玄音";
    editdata.player_datas[3].nickname = "南枫花";
    editdata.player_datas[0].avatar_id = 405202;
    editdata.player_datas[1].avatar_id = 406102;
    editdata.player_datas[2].avatar_id = 407602;
    editdata.player_datas[3].avatar_id = 403805;
}
settings.chuanma_points_method = 0;
editdata.config = {
    'category': 2, // 1表示友人房, 2表示匹配房
    'meta': {'mode_id': 3}, //2表示铜四东, 3表示铜四南, 详见 字典.md
    'mode': {
        'mode': 1, // 1表示4人, 11表示3人
        'detail_rule': {
            'begin_open_mode': 0,
            'chuanma': 0,
            'dora3_mode': 0, //是否是宝牌狂热模式
            'dora_count': 3, //红宝牌数量
            'fanfu': 1,
            'guyi_mode': 0,
            'have_zimosun': true,
            'huansanzhang': 0,
            'open_hand': 0,
            'init_point': 200000,
            'muyu_mode': 0, //是否是龙之目玉模式
            'shiduan': 1,
            'xuezhandaodi': 0,
            'xueliu': 0 //是否是血流成河
        }
    }
}
// 第1局: 东起 天和, 字一色, 四暗刻单骑, 大四喜
tiles0 = "11122233344477z";
tiles1 = "1112340678999m";
tiles2 = "1112340678999p";
tiles3 = "1112340678999s";
paishan = randompaishan("");
roundbegin();
hupai();
// 第2局: 南起 地和, 字一色, 四暗刻单骑, 大四喜
tiles0 = "1112340678999s5z";
tiles1 = "1112223334447z";
tiles2 = "1112340678999m";
tiles3 = "1112340678999p";
paishan = randompaishan("7z");
roundbegin();
qiepai();
mopai();
hupai();

// 第3局: 西起 字一色, 四杠子, 四暗刻单骑, 大四喜
tiles1 = "1112340678999m5z";
tiles2 = "1112223334447z";
tiles3 = "1112340678999p";
tiles0 = "1112340678999s";
paishan = randompaishan("1z", "7z4z3z2z");
roundbegin();
qiepai();
mopai();
leimingpai();
mopai();
leimingpai();
mopai();
leimingpai();
mopai();
leimingpai();
mopai();
hupai();

// 第4局: 北起 铳三家共 2 (十三面) + 3 (绿四单) + 5 (字大骑) = 10 倍役满
tiles2 = "3s1112223334446z";
tiles3 = "1112340678999m";
tiles0 = "19m19p19s1234567z";
tiles1 = "222444666888s6z";
paishan = randompaishan("6z");
roundbegin();
qiepai("0p");
mopai();
qiepai("6z", true);
hupai();

try {
    MRE.close();
} catch (e) {
}

