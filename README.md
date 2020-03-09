# MyAppAngular

このプロジェクトは、[Angular CLI]（https://github.com/angular/angular-cli）バージョン8.3.20で生成されました。

## 開発サーバー

devサーバーに対して `ng serve`を実行します。 `http：// localhost：4200 /`に移動します。ソースファイルを変更すると、アプリは自動的にリロードされます。

## コードの足場

`ng generate component component-name`を実行して、新しいコンポーネントを生成します。 `ng generate directive | pipe | service | class | guard | interface | enum | module`を使用することもできます。

## ビルド

`ng build`を実行してプロジェクトをビルドします。ビルドアーティファクトは `dist /`ディレクトリに保存されます。実動ビルドには `--prod`フラグを使用します。

## 単体テストの実行

[ng test]を実行して、[Karma]（https://karma-runner.github.io）を介してユニットテストを実行します。

## エンドツーエンドテストの実行

[ng e2e]を実行して、[Protractor]（http://www.protractortest.org/）を介してエンドツーエンドのテストを実行します。

## さらにヘルプ

Angular CLIの詳細なヘルプを取得するには、「ng help」を使用するか、[Angular CLI README]（https://github.com/angular/angular-cli/blob/master/README.md）をご覧ください。

## 概要
Angularで作成した、ポートフォリオサイト

## 実行手順
1. fortawesomeをパッケージに追加しているので、実行する場合は、
<pre>npm i -D @fortawesome/fontawesome-free</pre>
でfortawesomeをインストールしてください。

2. Angular の CLI (Command Line Interface) をインストール
<pre>$ npm install -g @angular/cli</pre>

3. ローカルサーバーを起動してwebブラウザで表示する。
<pre>$ ng serve --open</pre>

## netlifyにデプロイ手順
1. SiteIDの設定、Tokensの設定（netlifyに書いてある）
Tokens：https://app.netlify.com/user/applications
<pre>ng add @netlify-builder/deploy</pre>

1. デプロイする
※ (GitHub連携している場合Pushした際にデプロイされるが、現状なぜかnot Pageなるのでプッシュ後はデプロイコマンドを打つ)
<pre>$ ng deploy</pre>