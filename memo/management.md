# 管理方法
## ディレクトリ構造
コードを記載するためのディレクトリ[code](code)と、メモを残すためのディレクトリ[memo](memo)があります。

## 勉強方法
まず、章ごとにdirectoryとmdファイルを作成します。  
GUIで追加するか、Terminalで下記のように実行します。
```
$ mkdir code/02_first_app
$ mkdir code/02_first_app/01_1
$ touch code/02_first_app/01_1/index.html
$ touch code/02_first_app/01_1/main.js
$ touch code/02_first_app/01_1/main.css

$ touch memo/02_first_app.md
```
ファイル名は「章番号_章タイトル」全て小文字でスネークケースを使用します。  
章番号は2桁の数字で1桁の場合は0から記載します。（例：01）  
章タイトルは本の各章のタイトルを適宜英語にします。

## 実行コマンド
```
$ node code/02_first_app/main.js
```