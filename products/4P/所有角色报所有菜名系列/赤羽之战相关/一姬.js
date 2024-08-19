try {
    MRE.open();
} catch (e) {
}

loadproject();

// 由于 examples 文件夹下的 3.js 文件模板有点问题,
// 或者 main.js 血战到底的部分还不完善, bug很严重, 故对应的赤羽报菜名暂缓, 欢迎 commit
// 又或者使用非血战到底的只用和一次的情况, 同时为了方面编辑不考虑换三张的情况

editdata.player_datas[0].nickname = "一姬-契约";
editdata.player_datas[1].nickname = "新年初诣";
editdata.player_datas[2].nickname = "一姬当千";
editdata.player_datas[3].nickname = "绮春歌";
editdata.player_datas[0].avatar_id = 400102;
editdata.player_datas[1].avatar_id = 400104;
editdata.player_datas[2].avatar_id = 400105;
editdata.player_datas[3].avatar_id = 400106;
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
            'xuezhandaodi': 0
        }
    }
}

// 第1局, 天和, 清龙七对; 清十八罗汉; 清金钩钓, 杠上花, 根
tiles0 = "11112222333344m";
tiles1 = "1112223334445p";
tiles2 = "66778899m99p689s";
tiles3 = "1112223334467s";
paishan = randompaishan("1p4s", "5p4p3p2p");
roundbegin();
dingque("pspm")
hupai();
roundend();


// 以下是如果血流成河能够实现的情况下的比较少局数的实现方法

// 第1局, 天和, 清龙七对; 清十八罗汉; 清金钩钓, 杠上花, 根
// 第2局, 地和; 十八罗汉; 清幺九, 根
// 第3局, 清七对, 海底捞月; 龙七对; 将对, 杠上炮
// 第4局, 清对; 金钩钓; 带幺九, 抢杠
// 第5局, 七对子; 清一色; 对对和
/*
杠上花         1111
杠上炮         3333
抢杠          4444
海底捞月        3333
根           1111
对对和         5555
清一色         5555
七对子         5555
带幺九         4444
金钩钓         4444
清对          4444
将对          3333
龙七对         3333
清七对         3333
清幺九         2222
清金钩钓        1111

天和          1111
地和          2222
清龙七对        1111
十八罗汉        2222
清十八罗汉       1111
220411-cf000364-116c-4493-9cca-32156af4e130
*/

try {
    MRE.close();
} catch (e) {
}

