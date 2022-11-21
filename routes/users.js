var express = require('express');
// 「express.Router」を使うことで、意味のある単位でルーティング処理を別ファイルに分けることが出来る
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.json([
    {
      id: 1,
      name: 'test1',
    },
    {
      id: 2,
      name: 'test2',
    },
  ]);
});

module.exports = router;
