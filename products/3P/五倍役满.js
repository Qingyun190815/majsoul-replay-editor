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
tiles0 = ["1z", "1z", "1z", "2z", "2z", "2z", "3z", "3z", "3z", "4z", "4z", "4z", "7z", "7z"];
tiles1 = ["1p", "1p", "1p", "2p", "3p", "4p", "0p", "6p", "7p", "8p", "9p", "9p", "9p"];
tiles2 = ["1s", "1s", "1s", "2s", "3s", "4s", "0s", "6s", "7s", "8s", "9s", "9s", "9s"];
tiles3 = ["1m", "1m", "1m", "2m", "3m", "4m", "0m", "6m", "7m", "8m", "9m", "9m", "9m"];
paishan = randompaishan("");
roundbegin();
hupai();
// 第2局: 南起 地和, 字一色, 四暗刻单骑, 大四喜
tiles0 = ["1m", "1m", "1m", "2m", "3m", "4m", "0m", "6m", "7m", "8m", "9m", "9m", "9m", "5z"];
tiles1 = ["1z", "1z", "1z", "2z", "2z", "2z", "3z", "3z", "3z", "4z", "4z", "4z", "7z"];
tiles2 = ["1p", "1p", "1p", "2p", "3p", "4p", "0p", "6p", "7p", "8p", "9p", "9p", "9p"];
tiles3 = ["1s", "1s", "1s", "2s", "3s", "4s", "0s", "6s", "7s", "8s", "9s", "9s", "9s"];
paishan = randompaishan("7z");
roundbegin();
qiepai();
mopai();
hupai();

// 第3局: 西起 字一色, 四杠子, 四暗刻单骑, 大四喜
tiles1 = ["1m", "1m", "1m", "2m", "3m", "4m", "0m", "6m", "7m", "8m", "9m", "9m", "9m", "5z"];
tiles2 = ["1z", "1z", "1z", "2z", "2z", "2z", "3z", "3z", "3z", "4z", "4z", "4z", "7z"];
tiles3 = ["1p", "1p", "1p", "2p", "3p", "4p", "0p", "6p", "7p", "8p", "9p", "9p", "9p"];
tiles0 = ["1s", "1s", "1s", "2s", "3s", "4s", "0s", "6s", "7s", "8s", "9s", "9s", "9s"];
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
tiles2 = ["1z", "1z", "1z", "2z", "2z", "2z", "3z", "3z", "3z", "4z", "4z", "4z", "0p", "6z"];
tiles3 = ["1m", "1m", "1m", "2m", "3m", "4m", "0m", "6m", "7m", "8m", "9m", "9m", "9m"];
tiles0 = ["1m", "9m", "1p", "9p", "1s", "9s", "1z", "2z", "3z", "4z", "5z", "6z", "7z"];
tiles1 = ["2s", "2s", "2s", "4s", "4s", "4s", "6s", "6s", "6s", "8s", "8s", "8s", "6z"];
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

