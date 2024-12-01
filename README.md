# 雀魂回放编辑器Replay_Editor

Forked from [GrandDawn/majsoul-replay-editor](https://github.com/GrandDawn/majsoul-replay-editor), 版权归原作者所有

自定义雀魂牌谱回放的注入脚本和一些自制牌谱回放文件, 支持国际中文服, 日服, 美服

[中文服官网](https://www.maj-soul.com), [日服官网](https://mahjongsoul.com), [美服官网](https://mahjongsoul.yo-star.com)

## 免责声明: 由于这属于第三方脚本, 猫粮可能发威封号, 使用时请用小号登录实验, 个人对任何因封号等导致的损失概不负责

## 使用方法

### 查看样例

打开 [main.js](main.js) 和 [examples](examples) 文件夹或 [products](products) 文件夹下的任一牌谱回放js文件(
如 [demo.js](examples/demo.js))

电脑登录网页版雀魂(注意用小号), F12 打开控制台, 把 main.js 里面的内容全选复制输入到控制台中,
然后将牌谱回放js文件内容也输入到控制台中

在网页版雀魂里随便选择一个牌谱打开, 就可以看到自制的牌谱了

**注意: 当前 main.js 正在进行改进优化, 所以可能有bug**, 如果存在不符合预期的情况,
可以使用老版本 [main_old.js](main_old.js), 也可以提 issue,
或在B站联系我: [肥pig崔的B站空间](https://space.bilibili.com/372365985)

### 自制教程

上面是简单的使用教程, 具体的修改教程要看下面的文档

原repo用wiki的方式当做文档([majsoul-replay-editor.wiki](https://github.com/GrandDawn/majsoul-replay-editor/wiki)),
我这里为了维护方便就把文档放到 [doc](doc) 文件夹下面了

建议阅读顺序:

1. [编辑每一场游戏的方法](doc/编辑每一场游戏的方法.md)
2. [编辑每一局的方法](doc/编辑每一局的方法.md)
3. [每一局所使用的函数(段位场部分)](doc/每一局所使用的函数（段位场部分）.md)
4. [(可选)每一局所使用的函数(活动场部分)](doc/每一局所使用的函数（活动场部分）.md)
5. [examples文件的解释](doc/examples文件解释.md)
6. [注意事项](doc/注意事项.md)

[字典](doc/字典.md) 是用来查阅的, 建议放到最后或者在制作牌谱时使用

至于 [code.js](code.js) , 这是初步解混淆后的雀魂核心js文件, 与本仓库关系不大, 放在这里仅方便查阅(文件很大, 2024/09/25 版本
不要轻易打开),
解混淆的方法见另一个仓库: [misc-code](https://github.com/Fat-pig-Cui/misc-code)

## 注意事项

1. 规则目前支持截止2021.7.10之前雀魂的所有规则, 包括:
    - 段位场三四麻规则
    - 宝牌狂热
    - 配牌明牌(明镜之战)
    - 龙之目玉
    - 修罗之战
    - 赤羽之战(川麻)
    - 友人房的自定义规则: 是否开启古役, 赤宝牌数量, 有无食断, 番缚, 三麻有无自摸损

2. 在 [add_function.js](add_function.js) 文件中还提供了以下两种雀魂没有的模式, 但性能原因载入这个文件后放映牌谱会很卡,
   目前不建议使用
    - 血流成河,
      有仓库原作者的视频参考: [【雀魂】（自制回放）假设雀魂有了血流成河（快速版）](https://www.bilibili.com/video/BV1dB4y1F78x)
    - 二人麻将

3. 对于不符合要求的填写, 可能出现页面崩溃的问题(一般页面会卡住, 控制台会报错)

TODO(欢迎contribute):

- 实现2021.7.10以后的特殊活动场的规则
    - 暗夜之战
    - 幻境传说
    - 占星之战
    - 天命之战
    - 咏唱之战
    - 魂之一击
    - 万象修罗
- 包杠的实现(即大明杠后岭上开花算被杠家放铳, 比如天麻中比赛的规则)
- 振听的判断
- 真实牌谱的json文件与自制牌谱的js文件相互转化
- 实现比赛场的其他规则
    - 切上满贯
    - 头跳
    - 四杠子包牌
    - 杠表宝牌即开
    - 三家和了流局
    - 有无流局满贯
    - 有无双倍役满(天凤)
    - 有无国士无双枪暗杠

## 已知BUG

1. 龙之目玉模式需要先开一个龙之目玉回放并退出, 否则目玉上的数字会消失

2. 关于振听荣和的诈和判断(已列入 TODO)

欢迎反馈更多BUG

## 版权声明

1. md5加密源自[百度百科](https://baike.baidu.com/item/MD5)

2. 更改回放的方法参考了B站 [一般通过彳亍人](https://space.bilibili.com/23019265)
   的 [BV1HE411Q7JM](https://www.bilibili.com/video/BV1HE411Q7JM)

3. 血流成河的实现方式中的使牌颜色变淡参考了greasyfork [2938137849](https://greasyfork.org/zh-CN/users/749724-2938137849)
   的 [雀魂麻将脚本](https://greasyfork.org/zh-CN/scripts/423689-%E9%9B%80%E9%AD%82%E9%BA%BB%E5%B0%86%E8%84%9A%E6%9C%AC)

4. 有少部分代码来自于雀魂源码

5. 其他部分均由本人编写, 版权归原作者[GrandDawn](https://github.com/GrandDawn)所有, 未经原作者允许不得转载本文内容,
   否则将视为侵权, 对于不遵守此声明或者其他违法使用本文内容者, 本人依法保留追究权等

6. 请不要在任何第三方网站下载该源代码, 否则后果自负

7. 允许用途: 可以用于个人使用, 请勿用于商业用途, 谢谢配合, 请不要将 examples 文件夹下面的代码进行录制并宣传, 谢谢

## 示例代码的部分截图

![](doc/pic/preview1.JPG)
![](doc/pic/preview2.JPG)
![](doc/pic/preview3.JPG)
