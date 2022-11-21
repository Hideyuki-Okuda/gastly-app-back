# gastly-app-back

## API概要
|No.|種別|エンドポイント|機能概要|
|----|----|----|----|
|1|GET|/hoge|条件を指定してお店候補を取得する|
|2|POST|/fuga|利用したお店の評価などを登録する|
|3|POST|/piyo|良かったお店を新たに登録する|

***

## API各機能説明

### 1. 条件を指定してお店候補を取得する
エンドポイント：
`/gastly/search`

リクエスト
- クエリパラメータ
```
area: お店の場所（新橋、品川、横浜、...）
partySize: 人数（小規模(~4)、中規模(~10)、大規模(それ以上)、など　閾値要相談）
```

レスポンス
- ボディ
```json
[
  {
    "name": "店名",
    "rating": "評価(平均)",
    "reference": "(食べログとかの)URL",
    "comments": [
      "comment1",
      "comment2",
      "...",
    ],
  },
  {
    "ここに2軒目のデータ"
  },
  {
    "ここに3軒目のデータ"
  }
]
```

### 2. 利用したお店の評価などを登録する

### 3. 良かったお店を新たに登録する
