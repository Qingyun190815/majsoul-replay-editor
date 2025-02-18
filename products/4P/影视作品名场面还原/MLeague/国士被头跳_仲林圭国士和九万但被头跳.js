loadproject();

// 参考视频: https://www.bilibili.com/video/BV1jo4y1k729?p=2
// 对局四人: 仲林圭, 泷泽和典, 东城莉奥, 村上淳
// 角色分别使用: 如月莲, 月见山, 七海礼奈, 石原碓海

editdata.player_datas[0].nickname = "仲林圭";
editdata.player_datas[1].nickname = "泷泽和典";
editdata.player_datas[2].nickname = "东城莉奥";
editdata.player_datas[3].nickname = "村上淳";
editdata.player_datas[0].avatar_id = 403001;
editdata.player_datas[1].avatar_id = 402701;
editdata.player_datas[2].avatar_id = 404401;
editdata.player_datas[3].avatar_id = 403101;
editdata.player_datas[0].verified = editdata.player_datas[1].verified = editdata.player_datas[2].verified = editdata.player_datas[3].verified = 2;

editdata.config = {
    'category': 4,
    'meta': {'mode_id': 0},
    'mode': {
        'mode': 2,
        'detail_rule': {
            'qieshangmanguan': true,
            'toutiao': true,
            'sigangbaopai': true,
            'no_liujumanguan': true,
            'no_lianfengsifu': true,
            'dora_jifan': true,
            'no_leijiyiman': true,
            'no_wyakuman': true,
            'no_guoshiangang': true,
        }
    }
};

// 南2局5本场
transition(1, 1, 5);

scores = [35500, 35100, 17000, 12400];
tiles1 = "33477m48p13358s12z";
tiles2 = "1122407m1669p34z";
tiles3 = "18m4569p7888s566z";
tiles0 = "156m139p0s134567z";
paishan = randompaishan("9s3m2z1s5z1p7z3z2s7m1s6s6p5s3s9m6m3m9s2s4s9p3p5z5m6z9s8p", "72p....");
discardtiles = ["0s3p5m6m3s3p7z", "2z8s3z1z8p3m5z9m", "9p9s4z3z1p5z1m", "9p1p5z1m7s9p5s"];
roundbegin();
qiepai();
normalmoqie(25);
moqieliqi();
normalmoqie(2);
hupai();
