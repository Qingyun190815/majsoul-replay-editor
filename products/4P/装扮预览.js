loadproject();

// 客户端的装扮预览界面的虚假的对局(虚假是因为有些地方不符合规则逻辑)

editdata.player_datas[1].nickname = editdata.player_datas[2].nickname = editdata.player_datas[3].nickname = "电脑(简单)";
editdata.player_datas[0] = {
    'nickname': "$nickname$",
    'avatar_id': 400102, // 一姬-契约
    'title': 600045, // 称号也可以看, 不过称号不属于严格意义上的装扮, 这里用 一姬当千 举例
    'avatar_frame': 305552, // 头像框, 用 大小姐发带 举例
    'views':[
        // {"slot": 0, "item_id": 0}, // 立直棒, 这里目前改不了(改了就报错), 用默认立直棒举例
        {"slot": 1, "item_id": 308026}, // 和牌特效, 这里用 绝对的命令 举例
        {"slot": 2, "item_id": 308027}, // 立直特效, 这里用 王者的决意 举例
        // {"slot": 3, "item_id": 309997}, // 手的样式, 这里可以改但很麻烦, 根据 doc 文件夹下的 "注意事项.md"
        // {"slot": 4, "item_id": 305025}, // 立直音乐, 这里回放显示不了, 用 真剑胜负 举例
        {"slot": 5, "item_id": 305552}, // 头像框, 用 大小姐发带 举例
        // {"slot": 6, "item_id": 308029}, // 桌布, 这里回放显示不了, 用 魔女的契约 举例
        // {"slot": 7, "item_id": 308030}, // 牌背, 这里回放显示不了, 用 假面的裁决 举例
        // {"slot": 8, "item_id": 308030}, // 大厅背景, 与对局无关, 用 林间流水 举例
        // {"slot": 10, "item_id": 305901}, // 鸣牌指示, 这里回放显示不了, 用 雷驰电掣 举例
        // {"slot": 13, "item_id": 305718}, // 牌面, 这里回放显示不了, 用 猫咪雀圣 举例
    ]
};

editdata.config = {
    'category': 1,
    'meta': {'mode_id': 0},
    'mode': {
        'mode': 1,
    }
};

// 东1局0本场, 和牌特效
tiles0 = "123456789m11223z";
tiles1 = "1234056789p122z";
tiles2 = "1234056789s566z";
tiles3 = "1234056789m566z";
paishan = randompaishan("1m1p1s3z2m2p2s3z3m3p3s4z4m4p4s4z5m5p5s4z6m6p6s7z7m7p7s7z8m8p8s7z9m9p9s1z", "5z....");
discardtiles = ["333444777z", "123456789m", "123456789p", "123456789s"];
roundbegin();
qiepai();
normalmoqie(35);
zimohu();

// 东1局1本场, 立直特效
tiles0 = "123456789m11223z";
tiles1 = "1234056789p122z";
tiles2 = "1234056789s566z";
tiles3 = "1234056789m566z";
paishan = randompaishan("1m1p1s3z2m2p2s3z3m3p3s4z4m4p4s4z5m5p5s4z6m6p6s7z7m7p7s7z8m8p8s7z9m9p9s5z", "15z....");
discardtiles = ["333444777z", "123456789m", "123456789p", "123456789s"];
roundbegin();
qiepai();
normalmoqie(35);
moqieliqi();
normalmoqie(33);
notileliuju();
