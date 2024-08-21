try {
    MRE.open();
} catch (e) {
}

loadproject();

editdata.player_datas[0].nickname = "早坂爱-契约";
editdata.player_datas[1].nickname = "早坂爱";
editdata.player_datas[2].nickname = "早坂爱-契约";
editdata.player_datas[3].nickname = "偷心怪盗";
editdata.player_datas[0].avatar_id = 405702;
editdata.player_datas[1].avatar_id = 405701;
editdata.player_datas[2].avatar_id = 405702;
editdata.player_datas[3].avatar_id = 405703;

settings.chuanma_points_method = 0;
editdata.config = {
    'category': 1,
    'meta': {'mode_id': 2},
    'mode': {
        'mode': 1,
        'detail_rule': {
            'begin_open_mode': 0,
            'chuanma': 0,
            'dora3_mode': 0,
            'dora_count': 3,
            'fanfu': 1,
            'guyi_mode': 0,
            'have_zimosun': true,
            'huansanzhang': 0,
            'open_hand': 0,
            'init_point': 200000,
            'muyu_mode': 0,
            'shiduan': 1,
            'xuezhandaodi': 0,
            'xueliu': 0
        }
    }
}

// 第1局: 东亲, 东起 天和, 字一色, 四暗刻单骑, 大四喜      六倍役满
tiles0 = "11122233344477z";
tiles1 = "1112340678999m";
tiles2 = "1112340678999p";
tiles3 = "1112340678999s";
paishan = randompaishan("");
roundbegin();
hupai();

// 第2局: 东亲, 南起 地和, 清老头, 四暗刻     三倍役满
tiles0 = "2223455567888s1z";
tiles1 = "11999m999p11999s";
tiles2 = "2223455567888m";
tiles3 = "2223455567888p";
paishan = randompaishan("1m");
roundbegin();
qiepai();
mopai();
hupai();
{
    var old = 0
    if (old === 0) {
// 第3局: 南亲, 东起 铳两家: 绿一色, 纯正九莲宝灯 (3s)    役满, 两倍役满
        tiles1 = "2233344666888s6z";
        tiles2 = "2223455567888p";
        tiles3 = "1112340678999s";
        tiles0 = "1112340678999m";
        paishan = randompaishan("11z2s");
        roundbegin();
        for (let i = 0; i < 3; i++) {
            qiepai();
            mopai();
        }
        qiepai(true);
        hupai();

// 第4局: 南亲, 东起 铳三家: 大三元, 国士无双十三面, 小四喜,  (1p)
        tiles1 = "23p355s555666777z";
        tiles2 = "19m19p19s1234567z";
        tiles3 = "23p11122233344z";
        tiles0 = "1112340678999m";
        paishan = randompaishan("33s1p");
        roundbegin();
        qiepai("3s");
        mopai();
        qiepai();
        mopai();
        qiepai();
        mopai();
        qiepai(true);
        hupai();

// 第5局: 南亲, 东起 铳三家: 国士无双, 九莲宝灯, 四杠子 (1p, 四杠子家要副露)
        tiles1 = "19m9p1129s1234567z";
        tiles2 = "1123450678999p";
        tiles3 = "1p222444666888s";
        tiles0 = "1112340678999m";
        paishan = randompaishan("1p", "2p864s");
        roundbegin();
        qiepai("2s");
        mingpai();
        mopai();
        for (let i = 0; i < 3; i++) {
            leimingpai();
            mopai();
        }
        qiepai();
        mopai();
        qiepai(true);
        hupai();
    } else if (old === 1) {
// 第3局: 南亲, 东起 铳三家: 绿一色, 国士无双十三面, 国士无双 (6z)    役满, 两倍役满
        tiles1 = "2m223344666888s6z";
        tiles2 = "19m19p19s1234567z";
        tiles3 = "19m19p19s1234557z";
        tiles0 = "234m22234p22344s";
        paishan = randompaishan("22m6z");
        roundbegin();
        qiepai("2m");
        mopai();
        qiepai();
        mopai();
        qiepai();
        mopai();
        qiepai(true);
        hupai();

// 第4局: 南亲, 东起 铳三家: 大三元, 九莲宝灯, 小四喜 (1p)
        tiles1 = "23p355s555666777z";
        tiles2 = "1123406789999p";
        tiles3 = "23p11122233344z";
        tiles0 = "1112340678999m";
        paishan = randompaishan("33s1p");
        roundbegin();
        qiepai("3s");
        mopai();
        qiepai();
        mopai();
        qiepai();
        mopai();
        qiepai(true);
        hupai();

// 第5局: 南亲, 东起 铳两家: 四杠子, 纯正九莲宝灯 (0m, 四杠子家要副露)
        tiles1 = "1112345678999m2s";
        tiles2 = "2223455567888p";
        tiles3 = "5m222444666888s";
        tiles0 = "1112340678999p";
        paishan = randompaishan("0m", "5864s");
        roundbegin();
        qiepai("2s");
        mingpai();
        mopai();
        for (let i = 0; i < 3; i++) {
            leimingpai();
            mopai();
        }
        qiepai();
        mopai();
        qiepai(true);
        hupai();
    }
}
// 第6局: 南亲, 南起 铳 东起 字一色, 四暗刻单骑, 大四喜        五倍役满
tiles1 = "1112340678999m7z";
tiles2 = "1112340678999p";
tiles3 = "1112340678999s";
tiles0 = "1112223334447z";
paishan = randompaishan("");
roundbegin();
qiepai();
hupai();

// 第7局: 西亲, 南起 铳 东起 字一色, 四暗刻单骑, 小四喜        四倍役满
tiles2 = "1112340678999p7z";
tiles3 = "1112340678999s";
tiles0 = "1112223334555z";
tiles1 = "1112340678999m";
paishan = randompaishan("774z");
roundbegin();
for (let i = 0; i < 3; i++) {
    qiepai();
    mopai();
}
qiepai();
hupai();

// 第8局: 北亲, 北起 荣 东起, 报菜名 (60番)        累计役满
// 两立直, 河底捞鱼, 白, 中, 东, 连东, 三杠子, 对对和,
// 三暗刻, 小三元, 混老头, 混一色, 宝牌一大堆(20), 宝牌一大堆(20)
tiles3 = "1999p1115556677z";
tiles0 = "222255508888m6z";
tiles1 = "222255508888s3z";
tiles2 = "3333444467777s";
paishan = randompaishan("1119p", "4444z8888p776251z");
roundbegin();
qiepai("1p", true);
for (let i = 0; i < 3; i++) {
    mopai();
    qiepai();
}
mopai();
for (let i = 0; i < 3; i++) {
    leimingpai();
    mopai();
}
qiepai();
for (let i = 62; i >= 3; i--) {
    mopai();
    qiepai();
}
mopai();
leimingpai();
mopai();
qiepai();
hupai();

// 第9局: 北亲, 南起 荣 东起, 报菜名 (27番)
// 立直, 一发, 枪杠, 平和, 一杯口, 断幺九, 三色同顺, 宝牌7, 宝牌3, 宝牌9
// 340m34p33334450s, 枪 0p, dora 3s5s3m(2s4s2m), 3s3s3m(2s2s2m)
tiles3 = "11122233344457z";
tiles0 = "111666m22556p88s";
tiles1 = "340m34p23334450s";
tiles2 = "1111589p688s555z";
paishan = randompaishan("399s0p", "22m2422s6666z");
roundbegin();
qiepai("5z");
mingpai();
mopai();
leimingpai();
mopai();
qiepai("5p");
mingpai();
qiepai("6p");
mopai();
qiepai("2s", true);
mopai();
qiepai();
mopai();
qiepai();
mopai();
leimingpai("0p");
hupai();

// 第10局: (南场) 东亲, 南起 自摸, 报菜名 (33番)
// 双立直, 门前清自摸和, 二杯口, 纯全带幺九, 清一色, 宝牌8, 宝牌10
// 1111223378899p, 摸7p, dora 3p3p7p7p(2p2p6p6p), 6p8p1p1p(5p7p9p9p)
tiles0 = "11122233344457z";
tiles1 = "1111223378899p";
tiles2 = "1112340678999m";
tiles3 = "1112340678999s";
paishan = randompaishan("6661z7p", "96967252p5632z");
roundbegin();
qiepai();
mopai();
qiepai(true);
mopai();
qiepai();
mopai();
qiepai();
mopai();
for (let i = 0; i < 3; i++) {
    leimingpai();
    mopai();
}
qiepai();
mopai();
hupai();

// 第11局: (南场) 南亲, 西起 自摸, 报菜名 (16番)
// 双立直, 海底摸月, 门前清自摸和, 七对子, 宝牌4, 宝牌6
// 11m22p344556677s 摸3s,  dora 1m1m2m(9m9m1m), 2p2p2p(1p1p1p)
tiles1 = "22225550888899m";
tiles2 = "11m22p344556677s";
tiles3 = "3333555088889p";
tiles0 = "2222338889999s";
paishan = randompaishan("1111z", "3s2222z1111s9m1p9m1p1m1p5z999p");
roundbegin();
qiepai();
mopai();
qiepai(true);
mopai();
for (let i = 0; i < 3; i++) {
    leimingpai();
    mopai();
}
qiepai("1z");
for (let j = 64; j >= 6; j--) {
    mopai();
    qiepai();
}
mopai();
leimingpai();
for (let i = 0; i < 3; i++) {
    mopai();
    qiepai();
}
mopai();
hupai();

// 第12局: (南场) 西亲 北起 自摸, 报菜名 (32番)
// 双立直, 岭上开花, 门前清自摸和, 三色同刻, 三暗刻, 宝牌11, 红宝牌, 宝牌12
// 12333m33350p 33333s 暗杠3s岭上摸3m, dora 3s3s3p(2s2s2p) 3s3s3m(2s2s2m)
tiles2 = "11122233344457z";
tiles3 = "12333m33350p333s";
tiles0 = "1111448889999s";
tiles1 = "1111666677779p";
paishan = randompaishan("1666z3s", "2m2p2222s99p3m6z");
roundbegin();
qiepai();
mopai();
qiepai(true);
mopai();
leimingpai();
for (let i = 0; i < 3; i++) {
    mopai();
    qiepai();
}
mopai();
leimingpai();
mopai();
hupai();

// 第13局: (南场) 北亲, 东起 荣和 北起        三倍满
// 南, 连南, 三色同顺, 混全带幺九, 宝牌5
// 123m12399p12s222z, 荣和3s dora 9p2z(8p1z)
tiles3 = "11133344445557z";
tiles0 = "123m12399p12s222z";
tiles1 = "1112340678999m";
tiles2 = "1112345067899p";
paishan = randompaishan("", "12z8p3333s");
roundbegin();
leimingpai();
mopai();
qiepai("3s");
hupai();

// 第14局: (西场) 东亲, 东起 铳三家     满贯, 跳满, 倍满 (西1局) (1p)
// 西, 连西, 一气;   中, 混全带幺九, 混一色;  清一色, dora 2
// 123456789m1p333z  2367788889999p  1222333455667p, dora 5p
tiles0 = "1p1112224445557z";
tiles1 = "1222333455667p";
tiles2 = "123456789m1p333z";
tiles3 = "23789999p66777z";
paishan = randompaishan("", "4p1266z");
roundbegin();
qiepai("1p");
hupai();

// 从西场过渡到北场 (南亲, 西起和牌)
tiles1 = "11123406789999m";
tiles2 = "123m23p23488s444z";
tiles3 = "1112340678999s";
tiles0 = "1112223335557z";
paishan = randompaishan("1p");
roundbegin();
leimingpai();
mopai();
qiepai();
mopai();
hupai();
// (西亲, 南起和牌)
tiles2 = "11123406789999m";
tiles3 = "1112340678999s";
tiles0 = "1112223335557z";
tiles1 = "123m23p23488s444z";
paishan = randompaishan("991p");
roundbegin();
leimingpai();
for (let i = 0; i < 3; i++) {
    mopai();
    qiepai();
}
mopai();
hupai();
// (北亲, 南起和牌)
tiles3 = "11123406789999s";
tiles0 = "1112223335557z";
tiles1 = "123m23p23488s444z";
tiles2 = "1112340678999m";
paishan = randompaishan("91p");
roundbegin();
leimingpai();
mopai();
qiepai();
mopai();
qiepai();
mopai();
hupai();

// 第15局: (北场) 东亲, 北起 荣 东起 (北1局)
// 北, 连北
// 123m23p23488s444z, 荣和1p, dora 1z
tiles0 = "1p1112223335557z";
tiles1 = "1112340678999m";
tiles2 = "1112340678999s";
tiles3 = "123m23p23488s444z";
paishan = randompaishan("", "5666z6p");
roundbegin();
qiepai("1p");
hupai();

// 第16局: (北场) 南亲
// 九种九牌
tiles1 = "19m19p19s12345677z";
tiles2 = "1112340678999m";
tiles3 = "1112340678999p";
tiles0 = "1112340678999s";
paishan = randompaishan("");
roundbegin();
liuju();

// 四杠流局
tiles1 = "11112223334447z";
tiles2 = "1112340678999m";
tiles3 = "1112340678999p";
tiles0 = "1112340678999s";
paishan = randompaishan("", "5z1p32z");
roundbegin();
for (let i = 0; i < 3; i++) {
    leimingpai();
    mopai();
}
qiepai();
mingpai();
mopai();
qiepai();
liuju();

// 四风连打
tiles1 = "2223444666888s1z";
tiles2 = "1112340678999m";
tiles3 = "1112340678999p";
tiles0 = "1112340678999s";
paishan = randompaishan("111z");
roundbegin();
qiepai(true);
for (let i = 0; i < 3; i++) {
    mopai();
    qiepai(true);
}
liuju();

// 四家立直
tiles1 = "2223444666888s5z";
tiles2 = "1112340678999m";
tiles3 = "1112340678999p";
tiles0 = "1112340678999s";
paishan = randompaishan("555z");
roundbegin();
qiepai(true);
for (let i = 0; i < 3; i++) {
    mopai();
    qiepai(true);
}
liuju();

// 流局满贯, 听牌, 未听牌
tiles1 = "22223444666888s";
tiles2 = "2228m333557777s";
tiles3 = "233344447777m0s";
tiles0 = "55506666888m08p";
// 所有幺九都留山里, 所有非幺九都给亲, 非幺九还有 2-8p*4(除了0p和8p)
paishan = randompaishan("1m9m1p3p1m9m1p3p1m9m1p3p1m9m1p3p9p1s9s4p9p1s9s4p9p1s9s4p9p1s9s4p1z2z3z5p1z2z3z5p1z2z3z5p1z2z3z7p4z5z6z6p4z5z6z6p4z5z6z6p4z5z6z6p7z", "5864s");
roundbegin();
for (let i = 0; i < 4; i++) {
    leimingpai();
    mopai();
}
qiepai(true);
for (let i = 65; i >= 1; i--) {
    mopai();
    qiepai();
}
notileliuju();

try {
    MRE.close();
} catch (e) {
}

