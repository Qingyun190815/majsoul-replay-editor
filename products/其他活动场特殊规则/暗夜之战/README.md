# 暗夜之战模式(未实现)

活动场对应 `mode_id` 是 45, 关键词是 `reveal_discard`

## 规则说明

玩家切牌时可以选择支付1000点作为场供进行"暗牌"操作, 暗牌不会显示牌内容, 不会被鸣

其他玩家可以选择支付2000点作为场供对"暗牌"进行"开牌"操作, 查看牌内容, 若开牌成功, 则会对所有玩家显示牌内容, 可以被鸣

此时"暗牌家"仍可以显示再支付4000点作为场供"否决"其他玩家的"开牌"操作, 强制暗牌

此外, 对第一张"立直宣言牌"进行"暗牌"操作时, 需要额外支付1000点作为场供

## 实现思路

需要实现很多函数, 比如

```json
{
  "passed": 728674,
  "type": 1,
  "result": {
    "name": ".lq.RecordRevealTile",
    "data": {
      "seat": 0,
      "is_liqi": false,
      "is_wliqi": false,
      "moqie": true,
      "scores": [
        22000,
        22000,
        30300,
        24700
      ],
      "liqibang": 1,
      "operations": [
        {
          "seat": 1,
          "operation_list": [
            {
              "type": 15
            }
          ],
          "time_add": 0,
          "time_fixed": 5000
        },
        {
          "seat": 2,
          "operation_list": [
            {
              "type": 15
            }
          ],
          "time_add": 0,
          "time_fixed": 5000
        },
        {
          "seat": 3,
          "operation_list": [
            {
              "type": 15
            }
          ],
          "time_add": 0,
          "time_fixed": 5000
        }
      ],
      "tile": "7m",
      "zhenting": [
        false,
        false,
        false,
        false
      ]
    }
  }
}
```

`RecordRevealTile` 就是一个比较棘手的函数, 因为设计的操作变化太多

