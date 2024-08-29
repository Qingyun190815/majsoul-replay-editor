# products 目录

## 牌谱回放文件

无特殊说明, 牌谱回放中的规则与段位或者活动的规则一致, 房间都选择友人场的四/三人东, 或者活动对应房间

- 3P
  - [最长菜名与最高番数](3P/最长菜名与最高番数)
  - [一家牌河最多或最少几张牌](3P/一家牌河最多或最少几张牌.js)
  - [三家流满](3P/三家流满.js)
  - [零本场一二三位最高分最低分](3P/零本场一二三位最高分最低分.js)
- 4P
  - [所有役满合集](4P/所有役满合集)
  - [所有角色报所有菜名系列](4P/所有角色报所有菜名系列)
  - [最长菜名与最高番数](4P/最长菜名与最高番数/template.js)
  - [赤羽之战相关](4P/赤羽之战相关)
    - [赤羽之战报菜名](4P/赤羽之战相关/template.js)
    - [一家牌河最多或最少几张牌](4P/赤羽之战相关/一家牌河最多或最少几张牌.js)
  - [预设模版](4P/预设模版)
    - [伊莉雅联动](4P/预设模版/伊莉雅联动)
    - [四贵人](4P/预设模版/四贵人)
    - [天麻一期联动](4P/预设模版/天麻一期联动)
    - [天麻二期联动](4P/预设模版/天麻二期联动)
    - [斗牌传说联动](4P/预设模版/斗牌传说联动)
    - [服饰系列](4P/预设模版/服饰系列)
    - [狂赌之渊联动](4P/预设模版/狂赌之渊联动)
    - [碧蓝档案联动](4P/预设模版/碧蓝档案联动)
    - [辉夜大小姐联动](4P/预设模版/辉夜大小姐联动)
    - [鲁鲁修联动](4P/预设模版/鲁鲁修联动)
    - [小清水亚美配音](4P/预设模版/小清水亚美配音.js)
  - [一家牌河最多或最少几张牌](4P/一家牌河最多或最少几张牌.js)
  - [三家流满](4P/三家流满.js)
  - [修罗之战_一家牌河最多几张牌](4P/修罗之战_一家牌河最多几张牌.js)
  - [十倍铳满](4P/十倍铳满.js)
  - [十一倍铳满_零本场一位最高分四位最低分](4P/十一倍铳满_零本场一位最高分四位最低分.js)
  - [和牌却被飞](4P/和牌却被飞.js)
  - [打点计算](4P/打点计算.js)
  - [立直后开杠打点反而可能变小](4P/立直后开杠打点反而可能变小.js)
  - [零本场二三位最高分最低分](4P/零本场二三位最高分最低分.js)

## python 脚本文件

下面所有 Generate_All_Avatar.py 的内容都是一样的, 和 Generate_All_Avatar_3P.py 也差不多,
核心都在 [Database.py](Database.py) 和 [Functions.py](Functions.py) 中

- 3P
  - 最长菜名与最高番数
    - [Generate_All_Avatar_3P.py](3P/最长菜名与最高番数/Generate_All_Avatar_3P.py)
- 4P
  - 所有役满合集
    - [Generate_Avatar.py](4P/所有役满合集/Generate_Avatar.py)
  - 所有角色报所有菜名系列
    - [Generate_All_Avatar.py](4P/所有角色报所有菜名系列/Generate_All_Avatar.py)
  - 最长菜名与最高番数
    - [Generate_All_Avatar.py](4P/最长菜名与最高番数/Generate_All_Avatar.py)
  - 赤羽之战相关
    - [Generate_All_Avatar.py](4P/赤羽之战相关/Generate_All_Avatar.py)
- [Database.py](Database.py)
- [Functions.py](Functions.py)
- [Refresh_All.py](Refresh_All.py)

## 牌谱信息文件 [paipu_record.json](paipu_record.json)

这个文件是在仓库 [misc-code](https://github.com/Fat-pig-Cui/misc-code/tree/main/paipu) 中的示例牌谱信息文件, 这里用于查看对局所包含的玩家信息

比如 `views` 的格式, 详情可阅读那个仓库里面的 doc: [牌谱里面到底记载了什么](https://github.com/Fat-pig-Cui/misc-code/tree/main/doc/%E7%89%8C%E8%B0%B1%E9%87%8C%E9%9D%A2%E5%88%B0%E5%BA%95%E8%AE%B0%E8%BD%BD%E4%BA%86%E4%BB%80%E4%B9%88)

牌谱相关人: 雀魂吧小吧主 [甜甜cbstt](https://space.bilibili.com/437346309)
