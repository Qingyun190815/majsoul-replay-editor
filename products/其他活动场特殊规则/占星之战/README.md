# 占星之战模式(未实现)

活动场对应 `mode_id` 是 47, 关键词是 `zhanxing`

## 规则说明

新增容量为3的对所有人可见的牌候选池, 玩家摸牌时, 可以在牌候选池中任选一张作为摸牌, 立直的"一发"正常计算,
如果牌山还有足够的余牌, 那么玩家摸牌之后会及时填充(使得玩家摸牌时候选牌一直有3张, 除非剩余牌数量不足3张)

## 实现思路

占星之战的牌谱信息文件中, 有一个新"函数", 下面作为例子

```json
{
  "passed": 40349,
  "type": 1,
  "result": {
    "name": ".lq.RecordFillAwaitingTiles",
    "data": {
      "awaiting_tiles": [
        "2s",
        "1m",
        "6s"
      ],
      "left_tile_count": 68,
      "operation": {
        "seat": 2,
        "operation_list": [
          {
            "type": 18
          }
        ],
        "time_add": 0,
        "time_fixed": 10000
      }
    }
  }
}
```

`RecordFillAwaitingTiles` 就是新内容, 要在 main.js 中实现该模式的前提就是要实现这个函数, 
而这个函数的核心是 `awaiting_tiles`, 即牌候选池
