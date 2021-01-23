# first_javascript
## 概要
「初めてのJavaScript 第3版」を読んで勉強した内容をメモしたり実行したりするためのリポジトリです。 

## コーディング規約
[Google JavaScript Style Guide](https://google.github.io/styleguide/jsguide.html) を参考にします。  
eslintで [eslint-config-google](https://github.com/google/eslint-config-google) を使用しています。  
また、[husky](https://github.com/typicode/husky) と [lint-staged](https://github.com/okonet/lint-staged) を使用して、  
commit前に eslint-config-google でcheckするようにしています。  
が、動作を確認し切れていないので誤っている可能性があります。

### terminalで実行した処理
``` 
$ npm install eslint --save-dev
$ npm install eslint eslint-config-google --save-dev 
$ npm install husky --save-dev
$ npm install husky lint-staged  --save-dev
$ eslint --init
```
### package.jsonに追加した内容
```
{
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  },
  "lint-staged": {
    "*.js": [
      "eslint"
    ]
  },
}
```
### .eslintrc.jsで修正した内容
```
'extends': 'google',
```

### こんな感じでエラーが出る
```
/dev/first_javascript/code/00_test/script.js
2:9  error  Strings must use singlequote  quotes
```

## 各リンク
[管理方法](memo/management.md)
