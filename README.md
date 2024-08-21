# 雀魂回放编辑器Replay_Editor

Forked from [GrandDawn/majsoul-replay-editor](https://github.com/GrandDawn/majsoul-replay-editor), 版权归原作者所有

(话说作者和我是校友? 贴贴)

## 免责声明: 由于这属于第三方脚本, 猫粮可能发威封号, 使用时请用小号登录实验, 个人对任何因封号等导致的损失概不负责

## 功能: 自定义雀魂牌谱回放

## 使用方法 (体验)

(原repo提供了油猴脚本使用方法, 我对这方面不是很熟就删掉了)

`git clone` 该仓库或直接下载 `main.js` 和 example 文件夹下的任一js文件

电脑登录网页版雀魂(注意用小号), F12 打开控制台, 把 `main.js` 里面的内容全选复制到控制台中,
然后将 [examples](examples) 文件夹下的js文件内容也复制到控制台中

在网页版雀魂里随便选择一个牌谱打开, 就可以看到自制的牌谱了

严格的说所选择的谱不是随便的: 必须和要自制回放的谱资源对应(尤其是手的样式和立直棒这种), 但如果不是自制的回放要求特别高一般不会出问题, 详细内容要看下面提到的文档了

---

上面是简单的使用教程, 具体的修改教程要看下面的文档

原repo用wiki的方式当做文档, 我这里为了维护方便就把文档放到 [doc](doc) 文件夹下面了

想看原wiki的请阅读 [majsoul-replay-editor.wiki](https://github.com/GrandDawn/majsoul-replay-editor/wiki)

TODO:
- 简要做一个英文版文档
- 实现一个能报完所有菜名的简洁的牌谱模版(分为多小局)
- 理解 `main.js` 文件的逻辑

(下面内容基本没有改动)

## 注意事项

1.规则目前支持截止2021.7.10之前雀魂的所有规则和血流成河模式及二人麻将。

2.对于不符合要求的填写，可能出现页面崩溃的问题。(一般页面会卡住, 控制台会报错)

3.除了变量名变动以外，大部分情况下会向下兼容。

## 已知BUG

1.龙之目玉模式需要先开一个龙之目玉回放并退出，否则目玉上的数字会消失。

2.关于振听荣和的诈和判断。

欢迎反馈更多BUG。

## 版权声明

1.md5加密源自[百度百科](https://baike.baidu.com/item/MD5)。

2.更改回放的方法参考了B站[一般通过彳亍人](https://space.bilibili.com/23019265)的[BV1HE411Q7JM](https://www.bilibili.com/video/BV1HE411Q7JM)。

3.血流成河的实现方式中的使牌颜色变淡参考了greasyfork [2938137849](https://greasyfork.org/zh-CN/users/749724-2938137849)的[雀魂麻将脚本](https://greasyfork.org/zh-CN/scripts/423689-%E9%9B%80%E9%AD%82%E9%BA%BB%E5%B0%86%E8%84%9A%E6%9C%AC)。

4.有少部分代码来自于雀魂源码。

5.其他部分均由本人编写。版权归原作者[GrandDawn](https://github.com/GrandDawn)所有；未经原作者允许不得转载本文内容，否则将视为侵权；对于不遵守此声明或者其他违法使用本文内容者，本人依法保留追究权等。

6.请不要在任何第三方网站下载该源代码，否则后果自负。

7.允许用途：可以用于个人使用，请勿用于商业用途，谢谢配合。请不要将 example 文件夹下面的代码进行录制并宣传，谢谢。

## 示例代码的部分截图

![](./preview1.JPG)
![](./preview2.JPG)
![](./preview3.JPG)
