# 雀魂回放编辑器Replay_Editor

Forked from [GrandDawn/majsoul-replay-editor](https://github.com/GrandDawn/majsoul-replay-editor), 版权归原作者所有

自定义雀魂牌谱回放的注入脚本和一些自制牌谱回放文件, 支持国际中文服, 日服, 美服

[中文服官网](https://www.maj-soul.com), [日服官网](https://mahjongsoul.com), [美服官网](https://mahjongsoul.yo-star.com)

## 免责声明: 由于这属于第三方脚本, 猫粮可能发威封号, 使用时请用小号登录实验, 个人对任何因封号等导致的损失概不负责

账号被封的话可以用账号邮箱发邮件给猫粮(中文服是 **cs@maj-soul.com**), 申请注销账号, 对面发了确认通知后回复一下,
15天之后就可以重新使用该邮箱注册了

## 使用方法

### 查看样例

打开 [main.js](../main.js) 和 [examples](../examples) 文件夹或 [products](../products) 文件夹下的任一牌谱回放js文件(
如 [demo.js](../examples/demo.js))

电脑登录网页版雀魂(注意用小号), F12 打开控制台, 把 main.js 里面的内容全选复制输入到控制台中,
然后将牌谱回放js文件内容也输入到控制台中

在网页版雀魂里随便选择一个牌谱打开, 就可以看到自制的牌谱了

**注意: 当前 main.js 正在添加大量新功能, 很多没有经过充分测试, 所以可能有bug**, 如果存在不符合预期的情况,
可以在 [commit](https://github.com/Fat-pig-Cui/majsoul-replay-editor/commits/main/) 记录中使用老版本,
也可以提 issue, 或在B站联系我: [肥pig崔的B站空间](https://space.bilibili.com/372365985),
内容比较多的话还可以发邮件到我的邮箱说明: **chubbypig@qq.com**

### 自制教程

上面是简单的使用教程, 具体的修改教程要看下面的文档

原repo用wiki的方式当做文档([majsoul-replay-editor.wiki](https://github.com/GrandDawn/majsoul-replay-editor/wiki)),
我这里为了维护方便就把文档放到该文件夹下面了

建议阅读顺序:

1. [编辑游戏信息](编辑游戏信息.md)
2. [编辑每个小局](编辑每个小局.md)
3. [对局操作相关函数](对局操作相关函数.md)
4. [(可选)对局操作相关函数(活动场)](对局操作相关函数（活动场）.md)
5. [(可选)examples文件夹下的示例牌谱](examples文件夹下的示例牌谱.md)

[字典](字典.md) 是用来查阅的, 建议编辑牌谱时使用, [字典_template](字典_template.md) 是生成字典的模版, 无需阅读

至于 code.js , 这是初步解混淆后的雀魂核心js文件, 与本仓库关系不大, 放在这里仅方便查阅(文件很大, 2025/1/21
版本, 不要轻易打开),
解混淆的方法见另一个仓库: [misc-code](https://github.com/Fat-pig-Cui/misc-code)

## 功能概述

1. 目前支持以下规则: (雀魂中的常见规则都有实现)
    - 段位场三四麻规则
    - 常驻活动场规则
        - 修罗之战
        - 赤羽之战(川麻)
    - 其他活动场规则
        - 宝牌狂热
        - 配牌明牌
        - 龙之目玉
        - 明镜之战
        - 暗夜之战
        - 幻境传说
        - 占星之战
        - 天命之战
        - 咏唱之战
        - 魂之一击
        - 万象修罗
    - 友人房规则:
        - 古役(包括一番街的, 详见 products 文件夹下的 [古役专题](../products/古役专题))
        - 赤宝牌数量(四麻除了3/4赤以外, 还支持6/9/12赤, 后者的几种情况暗杠可能会显示异常,
          这种情况需要导入 [override.js](../override.js))
        - 食断
        - 番缚
        - 有无自摸损(三麻)
        - 是否公开手牌
    - 比赛场规则:
        - 切上满贯
        - 头跳
        - 无大三元大四喜包牌
        - 四杠子包牌
        - 有无流局满贯
        - 有无一发
        - 是否连风4符
        - 杠表宝牌即翻
        - 三家和了流局
        - 有无累计役满(即最高三倍满)
        - 有无双倍役满(天凤规则: 大四喜, 四单, 纯九, 十三面算单倍役满, 但复合役满仍有效)
        - 有无国士无双枪暗杠
    - 其他规则
        - 包杠
        - 青天井模式(谨慎使用, 高打点时很容易崩溃)
        - 有无振听
        - 无役诈和

2. 在 [add_function.js](../add_function.js) 中提供了以下几种雀魂没有的模式, 详见 products
   文件夹下的 [自制模式](../products/自制模式), 但该文件维护很困难, bug可能比较多
    - 二人麻将
    - 开立直
    - 血流成河

3. 在 [guobiao.js](../guobiao.js) 中提供了国标模式, 但本人对国标不是很熟, 可能有很多bug, 详见 products
   文件夹下的 [国标麻将](../products/国标麻将)

4. 对于不符合要求的填写, 可能出现页面崩溃的问题(一般页面会卡住, 控制台会报错)

## TODO(欢迎contribute)

- 研究"装扮预览"功能
- 通过重写函数的方式自制真实牌谱的观战

## 版权声明

1. md5算法源自 [百度百科](https://baike.baidu.com/item/MD5)

2. 更改回放的方法参考了B站 [一般通过彳亍人](https://space.bilibili.com/23019265)
   的 [BV1HE411Q7JM](https://www.bilibili.com/video/BV1HE411Q7JM)

3. 血流成河的实现方式中的使牌颜色变淡参考了greasyfork [2938137849](https://greasyfork.org/zh-CN/users/749724-2938137849)
   的 [雀魂麻将脚本](https://greasyfork.org/zh-CN/scripts/423689-%E9%9B%80%E9%AD%82%E9%BA%BB%E5%B0%86%E8%84%9A%E6%9C%AC)

4. 有少部分代码来自于雀魂源码

5. 其他部分均由本人编写, 版权归原作者 [GrandDawn](https://github.com/GrandDawn) 所有, 未经原作者允许不得转载本文内容,
   否则将视为侵权, 对于不遵守此声明或者其他违法使用本文内容者, 本人依法保留追究权等

6. 请不要在任何第三方网站下载该源代码, 否则后果自负

7. 允许用途: 可以用于个人使用, 请勿用于商业用途, 谢谢配合, 请不要将 examples 文件夹下面的示例牌谱进行录制并宣传, 谢谢

## 示例代码的部分截图

![](pic/preview1.JPG)
![](pic/preview2.JPG)
![](pic/preview3.JPG)
