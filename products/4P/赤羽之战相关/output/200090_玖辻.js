loadproject();

// 为了方便编辑不考虑换三张的过程

editdata.player_datas[0].nickname = "玖辻-契约";
editdata.player_datas[1].nickname = "玖辻";
editdata.player_datas[2].nickname = "玖辻-契约";
editdata.player_datas[3].nickname = "玖辻";
editdata.player_datas[0].avatar_id = 409002;
editdata.player_datas[1].avatar_id = 409001;
editdata.player_datas[2].avatar_id = 409002;
editdata.player_datas[3].avatar_id = 409001;
editdata.config = {
    'category': 2,
    'meta': {'mode_id': 41},
    'mode': {
        'mode': 1,
        'detail_rule': {
            'begin_open_mode': 0,
            'chuanma': 1,
            'dora3_mode': 0,
            'dora_count': 0,
            'fanfu': 1,
            'guyi_mode': 0,
            'huansanzhang': 0,
            'init_point': 500000,
            'muyu_mode': 0,
            'shiduan': 0,
            'xuezhandaodi': 1
        }
    }
};

// 第1局: 天和, 根;  清十八罗汉, 杠上花; 清金钩钓, 杠上炮
tiles0 = "11112222333344m";
tiles1 = "1112223334446p";
tiles2 = "66778999m99p689s";
tiles3 = "1122334457777s";
paishan = randompaishan("12346p2134s9m5s");
roundbegin();
dingque("pspm")
hupai();

mopai();
for (let i = 0; i < 4; i++) {
    leimingpai();
    mopai();
}
hupai();

for (let i = 0; i < 4; i++) {
    mopai();
    qiepai();
    mingpai();
    qiepai("7s");
}
mopai();
leimingpai();
mopai();
qiepai();
hupai(true);



// 第2局: 地和;         清龙七对;           十八罗汉
tiles0 = "4455667788999m9p";
tiles1 = "1112223334m789p";
tiles2 = "3344455p568999s";
tiles3 = "111222p1112224s";
paishan = randompaishan("49m12p1234s");
roundbegin();
dingque("pspm")
qiepai();
mopai();
hupai();

mopai();
qiepai();
hupai();

mopai();
qiepai();
mingpai();
mopai();
for (let i = 0; i < 3; i++) {
    leimingpai();
    mopai();
}
qiepai();
mopai();
qiepai();
hupai(true);



// 第3局: 清七对;    清幺九, 枪杠;        龙七对
tiles1 = "7788999m445566p7s"; // s
tiles2 = "2m123445677889s"; // p
tiles3 = "1112223338999s"; // m
tiles0 = "2334455667788m"; // p
paishan = randompaishan("2m7s9m");
roundbegin();
dingque("pspm")
qiepai();
mingpai();
qiepai("2m");
hupai();

mopai();
qiepai();
mopai();
leimingpai();
hupai();

mopai();
hupai(true);



// 第4局: 将对;         清对;             金钩钓
tiles0 = "222555888m22258s";
tiles1 = "12366m66788899p";
tiles2 = "113344m1139999s";
tiles3 = "1112223334445p";
paishan = randompaishan("5s5p134m13s");
roundbegin();
dingque("pspm")
qiepai();
mopai();
qiepai();
hupai();

mopai();
qiepai();
hupai();

for (let i = 0; i < 4; i++) {
    mopai();
    qiepai();
    mingpai();
    qiepai("9s")
}
mopai();
qiepai();
hupai(true);



// 第5局: 带幺九;        七对子;            清一色
tiles0 = "123778899m23999s";
tiles1 = "2233445566778m";
tiles2 = "1112345678999p";
tiles3 = "223344p2233445s";
paishan = randompaishan("15s5p");
roundbegin();
dingque("pssm")
qiepai();
mopai();
qiepai();
hupai();

mopai();
qiepai();
hupai();

mopai();
qiepai();
hupai(true);



// 第6局: 对对;         底和, 海底捞月
tiles0 = "222333444m22235s";
tiles1 = "8m333466788999p";
tiles2 = "1112467999m112p";
tiles3 = "1555678p123456s";
paishan = randompaishan("3s", "1p");
roundbegin();
dingque("pssm")
qiepai();
mopai();
qiepai();
hupai();

mopai();
for (let i = 0; i < 53; i++) {
    qiepai();
    mopai();
}
hupai();
notileliuju();



gameend();

GameMgr.Inst.checkPaiPu("210926-5f5adaf3-0413-4489-95c2-98c212e521c3", 0)
