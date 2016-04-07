このリポジトリでは<a  href="http://www.amazon.co.jp/gp/product/4839956758/ref=as_li_qf_sp_asin_tl?ie=UTF8&camp=247&creative=1211&creativeASIN=4839956758&linkCode=as2&tag=hatennejpuky0-22">フロントエンドエンジニアのための現在とこれからの必須知識</a><img src="http://ir-jp.amazon-adsystem.com/e/ir?t=hatennejpuky0-22&l=as2&o=9&a=4839956758" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />
の`Chapter1 / 07 / タスク自動化ツール / gulp`に沿った学習を行いました。詳細は<a  href="http://www.amazon.co.jp/gp/product/4839956758/ref=as_li_qf_sp_asin_tl?ie=UTF8&camp=247&creative=1211&creativeASIN=4839956758&linkCode=as2&tag=hatennejpuky0-22">フロントエンドエンジニアのための現在とこれからの必須知識</a><img src="http://ir-jp.amazon-adsystem.com/e/ir?t=hatennejpuky0-22&l=as2&o=9&a=4839956758" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />
を購入して確認してください。

## この内容の公開が不適切な場合について
自己学習の結果を公開しているのですが、不適切な場合についてはご一報ください。非公開に致します。

# gulpを利用するための準備
gulpを利用するための準備は以下の手順で実施します。

1. プロジェクトのディレクトリを作成する。
1. `npm init`によりディレクトリの初期化を行う。
1. `npm install gulp --save-dev`によりgulpのインストールを行う。
1. `gulpfile.js`を作成する。
1. タスクを設定する。

## プロジェクトのディレクトリを作成する。
プロジェクトのディレクトリ作成します。今回は`gulp_example2`とします。

```shell
╭─ymanabe@Yoichiro-no-MacBook-Pro  ~/projects ‹2.2.4›
╰─$ cd gulp_example2
```
## npm init`によりディレクトリの初期化を行う
npm init`を実行してディレクトリの初期化を行います。
```shell

╭─ymanabe@Yoichiro-no-MacBook-Pro  ~/projects/gulp_example2 ‹2.2.4›
╰─$ npm init
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help json` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg> --save` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
name: (gulp_example2)
version: (1.0.0)
description:
entry point: (index.js)
test command:
git repository:
keywords:
author:
license: (ISC)
About to write to /Users/ymanabe/projects/gulp_example2/package.json:

{
  "name": "gulp_example2",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}


Is this ok? (yes)
```
`npm init`では幾つかの応答が表示されますが、基本的にすべてEnterで未設定としました。

ここまででディレクトリは以下のとおりとなります。

```shell
╭─ymanabe@Yoichiro-no-MacBook-Pro  ~/projects/gulp_example2 ‹2.2.4›
╰─$ ll
total 8
-rw-r--r--  1 ymanabe  staff   209B  4  6 16:45 package.json
```

また、作成されている`package.json`ファイルの内容は以下のとおりとなります。

```json:package.json
{
  "name": "gulp_example2",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}
```

##  `npm install gulp --save-dev`によりgulpのインストールを行う
 `npm install gulp --save-dev`によりgulpのインストールを行います。

```shell
╭─ymanabe@Yoichiro-no-MacBook-Pro  ~/projects/gulp_example2 ‹2.2.4›
╰─$ npm install gulp --save-dev
npm WARN deprecated graceful-fs@3.0.8: graceful-fs version 3 and before will fail on newer node releases. Please update to graceful-fs@^4.0.0 as soon as possible.
npm WARN deprecated lodash@1.0.2: lodash@<3.0.0 is no longer maintained. Upgrade to lodash@^4.0.0.
npm WARN deprecated graceful-fs@1.2.3: graceful-fs version 3 and before will fail on newer node releases. Please update to graceful-fs@^4.0.0 as soon as possible.
gulp_example2@1.0.0 /Users/ymanabe/projects/gulp_example2
└─┬ gulp@3.9.1
  ├── archy@1.0.0
  ├─┬ chalk@1.1.3
  │ ├── ansi-styles@2.2.1
  │ ├── escape-string-regexp@1.0.5
  │ ├─┬ has-ansi@2.0.0
  │ │ └── ansi-regex@2.0.0
  │ ├── strip-ansi@3.0.1
  │ └── supports-color@2.0.0
  ├── deprecated@0.0.1
  ├─┬ gulp-util@3.0.7
  │ ├── array-differ@1.0.0
  │ ├── array-uniq@1.0.2
  │ ├── beeper@1.1.0
  │ ├─┬ dateformat@1.0.12
  │ │ ├── get-stdin@4.0.1
  │ │ └─┬ meow@3.7.0
  │ │   ├─┬ camelcase-keys@2.1.0
  │ │   │ └── camelcase@2.1.1
  │ │   ├── decamelize@1.2.0
  │ │   ├─┬ loud-rejection@1.3.0
  │ │   │ ├── array-find-index@1.0.1
  │ │   │ └── signal-exit@2.1.2
  │ │   ├── map-obj@1.0.1
  │ │   ├─┬ normalize-package-data@2.3.5
  │ │   │ ├── hosted-git-info@2.1.4
  │ │   │ ├─┬ is-builtin-module@1.0.0
  │ │   │ │ └── builtin-modules@1.1.1
  │ │   │ └─┬ validate-npm-package-license@3.0.1
  │ │   │   ├─┬ spdx-correct@1.0.2
  │ │   │   │ └── spdx-license-ids@1.2.0
  │ │   │   └─┬ spdx-expression-parse@1.0.2
  │ │   │     └── spdx-exceptions@1.0.4
  │ │   ├── object-assign@4.0.1
  │ │   ├─┬ read-pkg-up@1.0.1
  │ │   │ ├─┬ find-up@1.1.2
  │ │   │ │ ├── path-exists@2.1.0
  │ │   │ │ └─┬ pinkie-promise@2.0.0
  │ │   │ │   └── pinkie@2.0.4
  │ │   │ └─┬ read-pkg@1.1.0
  │ │   │   ├─┬ load-json-file@1.1.0
  │ │   │   │ ├── graceful-fs@4.1.3
  │ │   │   │ ├─┬ parse-json@2.2.0
  │ │   │   │ │ └─┬ error-ex@1.3.0
  │ │   │   │ │   └── is-arrayish@0.2.1
  │ │   │   │ ├── pify@2.3.0
  │ │   │   │ └── strip-bom@2.0.0
  │ │   │   └── path-type@1.1.0
  │ │   ├─┬ redent@1.0.0
  │ │   │ ├─┬ indent-string@2.1.0
  │ │   │ │ └─┬ repeating@2.0.0
  │ │   │ │   └─┬ is-finite@1.0.1
  │ │   │ │     └── number-is-nan@1.0.0
  │ │   │ └── strip-indent@1.0.1
  │ │   └── trim-newlines@1.0.0
  │ ├─┬ fancy-log@1.2.0
  │ │ └── time-stamp@1.0.0
  │ ├─┬ gulplog@1.0.0
  │ │ └── glogg@1.0.0
  │ ├─┬ has-gulplog@0.1.0
  │ │ └── sparkles@1.0.0
  │ ├── lodash._reescape@3.0.0
  │ ├── lodash._reevaluate@3.0.0
  │ ├── lodash._reinterpolate@3.0.0
  │ ├─┬ lodash.template@3.6.2
  │ │ ├── lodash._basecopy@3.0.1
  │ │ ├── lodash._basetostring@3.0.1
  │ │ ├── lodash._basevalues@3.0.0
  │ │ ├── lodash._isiterateecall@3.0.9
  │ │ ├─┬ lodash.escape@3.2.0
  │ │ │ └── lodash._root@3.0.1
  │ │ ├─┬ lodash.keys@3.1.2
  │ │ │ ├── lodash._getnative@3.9.1
  │ │ │ ├── lodash.isarguments@3.0.8
  │ │ │ └── lodash.isarray@3.0.4
  │ │ ├── lodash.restparam@3.6.1
  │ │ └── lodash.templatesettings@3.1.1
  │ ├─┬ multipipe@0.1.2
  │ │ └─┬ duplexer2@0.0.2
  │ │   └── readable-stream@1.1.13
  │ ├── object-assign@3.0.0
  │ ├── replace-ext@0.0.1
  │ ├─┬ through2@2.0.1
  │ │ ├─┬ readable-stream@2.0.6
  │ │ │ ├── core-util-is@1.0.2
  │ │ │ ├── inherits@2.0.1
  │ │ │ ├── isarray@1.0.0
  │ │ │ ├── process-nextick-args@1.0.6
  │ │ │ ├── string_decoder@0.10.31
  │ │ │ └── util-deprecate@1.0.2
  │ │ └── xtend@4.0.1
  │ └─┬ vinyl@0.5.3
  │   ├── clone@1.0.2
  │   └── clone-stats@0.0.1
  ├── interpret@1.0.0
  ├─┬ liftoff@2.2.1
  │ ├── extend@2.0.1
  │ ├─┬ findup-sync@0.3.0
  │ │ └─┬ glob@5.0.15
  │ │   ├── inflight@1.0.4
  │ │   ├── minimatch@3.0.0
  │ │   └── path-is-absolute@1.0.0
  │ ├── flagged-respawn@0.3.2
  │ ├── rechoir@0.6.2
  │ └── resolve@1.1.7
  ├── minimist@1.2.0
  ├─┬ orchestrator@0.3.7
  │ ├─┬ end-of-stream@0.1.5
  │ │ └─┬ once@1.3.3
  │ │   └── wrappy@1.0.1
  │ ├── sequencify@0.0.7
  │ └── stream-consume@0.1.0
  ├── pretty-hrtime@1.0.2
  ├── semver@4.3.6
  ├─┬ tildify@1.1.2
  │ └── os-homedir@1.0.1
  ├─┬ v8flags@2.0.11
  │ └── user-home@1.1.1
  └─┬ vinyl-fs@0.3.14
    ├── defaults@1.0.3
    ├─┬ glob-stream@3.1.18
    │ ├── glob@4.5.3
    │ ├─┬ glob2base@0.0.12
    │ │ └── find-index@0.1.1
    │ ├─┬ minimatch@2.0.10
    │ │ └─┬ brace-expansion@1.1.3
    │ │   ├── balanced-match@0.3.0
    │ │   └── concat-map@0.0.1
    │ ├── ordered-read-streams@0.1.0
    │ ├─┬ through2@0.6.5
    │ │ └── readable-stream@1.0.33
    │ └── unique-stream@1.0.0
    ├─┬ glob-watcher@0.0.6
    │ └─┬ gaze@0.5.2
    │   └─┬ globule@0.1.0
    │     ├─┬ glob@3.1.21
    │     │ ├── graceful-fs@1.2.3
    │     │ └── inherits@1.0.2
    │     ├── lodash@1.0.2
    │     └─┬ minimatch@0.2.14
    │       ├── lru-cache@2.7.3
    │       └── sigmund@1.0.1
    ├── graceful-fs@3.0.8
    ├─┬ mkdirp@0.5.1
    │ └── minimist@0.0.8
    ├─┬ strip-bom@1.0.0
    │ ├── first-chunk-stream@1.0.0
    │ └── is-utf8@0.2.1
    ├─┬ through2@0.6.5
    │ └─┬ readable-stream@1.0.33
    │   └── isarray@0.0.1
    └─┬ vinyl@0.4.6
      └── clone@0.2.0

npm WARN gulp_example2@1.0.0 No description
npm WARN gulp_example2@1.0.0 No repository field.
```

実行後のディレクトリ構成は以下のとおり`node_modules`が作成されています。

```shell
╭─ymanabe@Yoichiro-no-MacBook-Pro  ~/projects/gulp_example2 ‹2.2.4›
╰─$ ll
total 8
drwxr-xr-x  138 ymanabe  staff   4.6K  4  6 16:47 node_modules
-rw-r--r--    1 ymanabe  staff   258B  4  6 16:47 package.json
```

## `gulpfile.js`を作成する
gulpで実行するビルドを定義するため`gulpfile.js`を作成します。

```shell
$ touch gulpfile.js

╭─ymanabe@Yoichiro-no-MacBook-Pro  ~/projects/gulp_example2 ‹2.2.4›
╰─$ ll
total 8
-rw-r--r--    1 ymanabe  staff     0B  4  6 16:50 gulpfile.js
drwxr-xr-x  138 ymanabe  staff   4.6K  4  6 16:47 node_modules
-rw-r--r--    1 ymanabe  staff   258B  4  6 16:47 package.json
```

`gulpfile.js`には以下の内容を記述します。

```js
var gulp = require('gulp');
gulp.task('default', function(){
    console.log('Hello, World!');
});
```

次に作成した`gulpfile.js`を実行します。

```shell
╭─ymanabe@Yoichiro-no-MacBook-Pro  ~/projects/gulp_example2 ‹2.2.4›
╰─$ gulp default
[16:53:26] Using gulpfile ~/projects/gulp_example2/gulpfile.js
[16:53:26] Starting 'default'...
Hello, World!
[16:53:26] Finished 'default' after 147 μs
```

確かに`Hello, World!`が出力されていることが確認できます。

## タスクを設定する
Gulpでは処理したい内容をタスクとして記述しますが、その前にタスクの処理対象とするJavaScriptファイルを作成します。

```js:sum
/**
 * Created by ymanabe on 2016/04/06.
 */

function sum(param1, param2){
    var result = param1 + param2;
    return result;
}
```

```js:product
/**
 * Created by ymanabe on 2016/04/06.
 */

function product(param1, param2){
    var result = param1 * param2;
    return result;
}
```

今回は結合と圧縮の2つのタスクを実行するため必要なgulpプラグインをインストールします。

```shell:gulp-concatのインストール
╭─ymanabe@Yoichiro-no-MacBook-Pro  ~/projects/gulp_example2 ‹2.2.4›
╰─$ npm i gulp-concat --save-dev                                                                                 1 ↵
gulp_example2@1.0.0 /Users/ymanabe/projects/gulp_example2
└─┬ gulp-concat@2.6.0
  ├─┬ concat-with-sourcemaps@1.0.4
  │ └── source-map@0.5.3
  └─┬ through2@0.6.5
    └── readable-stream@1.0.33

npm WARN gulp_example2@1.0.0 No description
npm WARN gulp_example2@1.0.0 No repository field.
```

```shell:gulp-uglifyのインストール
╭─ymanabe@Yoichiro-no-MacBook-Pro  ~/projects/gulp_example2 ‹2.2.4›
╰─$ npm i gulp-uglify --save-dev
gulp_example2@1.0.0 /Users/ymanabe/projects/gulp_example2
└─┬ gulp-uglify@1.5.3
  ├── deap@1.0.0
  ├── isobject@2.0.0
  ├─┬ uglify-js@2.6.2
  │ ├── async@0.2.10
  │ ├── uglify-to-browserify@1.0.2
  │ └─┬ yargs@3.10.0
  │   ├── camelcase@1.2.1
  │   ├─┬ cliui@2.1.0
  │   │ ├─┬ center-align@0.1.3
  │   │ │ ├─┬ align-text@0.1.4
  │   │ │ │ ├─┬ kind-of@3.0.2
  │   │ │ │ │ └── is-buffer@1.1.3
  │   │ │ │ ├── longest@1.0.1
  │   │ │ │ └── repeat-string@1.5.4
  │   │ │ └── lazy-cache@1.0.3
  │   │ ├── right-align@0.1.3
  │   │ └── wordwrap@0.0.2
  │   └── window-size@0.1.0
  ├── uglify-save-license@0.4.1
  └── vinyl-sourcemaps-apply@0.2.1

npm WARN gulp_example2@1.0.0 No description
npm WARN gulp_example2@1.0.0 No repository field.
```

最後に`gulpfile.js`を修正します。

```js:gulpfile.js
var gulp = require('gulp');
var concate = require('gulp-concat');
var uglify = require('gulp-uglify');

gulp.task('js', function(){
    return gulp.src('src/*.js')
        .pipe(concate('bundle.js')) // 結合後のファイル名はbundle.js
        .pipe(uglify()) // uglifyの実行
        .pipe(gulp.dest('dist'))    // distディレクトリに出力
});
```

ビルドを実行します。今回はタスク名として`js`を指定しているのでタスクランナーの実行は`gulp js`となります。

```shell
╭─ymanabe@Yoichiro-no-MacBook-Pro  ~/projects/gulp_example2 ‹2.2.4›
╰─$ gulp js
[09:02:26] Using gulpfile ~/projects/gulp_example2/gulpfile.js
[09:02:26] Starting 'js'...
[09:02:26] Finished 'js' after 53 ms
```

この結果、以下のとおり`dist`ディレクトリが作成され結合した`bundle.js`ファイルが作成されます。

```shell
╭─ymanabe@Yoichiro-no-MacBook-Pro  ~/projects/gulp_example2 ‹2.2.4›
╰─$ ls -al
total 16
drwxr-xr-x    8 ymanabe  staff   272  4  7 08:57 .
drwxr-xr-x   45 ymanabe  staff  1530  4  6 16:40 ..
drwxr-xr-x    9 ymanabe  staff   306  4  7 08:57 .idea
drwxr-xr-x    3 ymanabe  staff   102  4  7 08:57 dist
-rw-r--r--    1 ymanabe  staff   360  4  7 08:56 gulpfile.js
drwxr-xr-x  161 ymanabe  staff  5474  4  7 08:52 node_modules
-rw-r--r--    1 ymanabe  staff   316  4  7 08:52 package.json
drwxr-xr-x    4 ymanabe  staff   136  4  6 17:04 src
╭─ymanabe@Yoichiro-no-MacBook-Pro  ~/projects/gulp_example2 ‹2.2.4›
╰─$ ls -al dist
total 8
drwxr-xr-x  3 ymanabe  staff  102  4  7 08:57 .
drwxr-xr-x  8 ymanabe  staff  272  4  7 08:57 ..
-rw-r--r--  1 ymanabe  staff   70  4  7 08:57 bundle.js
```

確かに生成された`bundle.js`はuglifyされていることが確認できます。

```js:bundle.js
function product(r,n){var u=r*n;return u}function sum(r,n){var u=r+n;return u}
```
