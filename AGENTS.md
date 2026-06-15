# AGENTS.md

このファイルは、このリポジトリで作業するコーディングエージェント向けのガイドです。

## プロジェクト概要

このリポジトリは「Golf Swing Checker」の Docusaurus ドキュメントサイトです。

- パッケージマネージャー: `pnpm`
- Node.js バージョン: `>=24 <25`
- ドキュメント本文: `lessons/`
- Docusaurus 設定: `docusaurus.config.ts`
- サイドバー設定: `sidebars.ts`
- 静的アセット: `static/`
- カスタム CSS: `src/css/custom.css`

## 参照ドキュメント

実装やドキュメント編集の前に、必要に応じて `docs/` 配下の設計メモを確認する。

- `docs/overview.md`: プロジェクトの目的、背景、対象ユーザー、スコープを確認する。
- `docs/app-concept.md`: アプリの役割、ユーザー体験、主要画面、主要機能を確認する。
- `docs/tech-stack.md`: 採用技術、初期段階で使うもの・使わないもの、技術選定の方針を確認する。

判断に迷う場合は、まず `docs/overview.md` で目的とスコープを確認し、UI や機能に関わる作業では `docs/app-concept.md`、技術選定や依存関係に関わる作業では `docs/tech-stack.md` を参照する。

## よく使うコマンド

依存関係のインストール:

```bash
pnpm install
```

開発サーバーの起動:

```bash
pnpm start
```

静的サイトのビルド:

```bash
pnpm build
```

ビルド済みサイトのローカル確認:

```bash
pnpm serve
```

Docusaurus のキャッシュ削除:

```bash
pnpm clear
```

### Windows PowerShell での注意

Windows PowerShell では、実行ポリシーにより `pnpm` の PowerShell shim が止まることがある。
その場合は同じコマンドを `pnpm.cmd` 経由で実行する。

例:

```powershell
pnpm.cmd build
```

## 編集方針

- ドキュメント本文は、サイト構成を変更する必要がない限り `lessons/` に追加・編集する。
- レッスンの表示順は、必要に応じて Docusaurus の front matter である `sidebar_position` を使う。
- サイドバーは `lessons/` から自動生成されるため、ファイル追加・リネーム時は表示順や URL への影響を確認する。
- `.docusaurus/` や `build/` のような生成物は直接編集しない。
- `node_modules/`、`.pnpm-store/`、`.corepack/` などの依存関係ディレクトリやキャッシュはコミットしない。
- 既存のパッケージマネージャーとロックファイルを維持する。`npm` や `yarn` ではなく `pnpm` を使う。
- ルーティングやデプロイ設定を変更する前に、`docusaurus.config.ts` の `url`、`baseUrl`、`organizationName`、`projectName` を確認する。

## 文字化けしている日本語ファイルの扱い

このリポジトリには、既存の日本語文字列が文字化けして見えるファイルがある。文字化けしているファイルを編集する場合は、次の手順を守る。

- まず `Get-Content` だけで判断せず、必要なら `Format-Hex` やバイト列検索で対象箇所を確認する。
- 文字化け本文を修正する作業が明示されていない限り、既存の文字化け文字列は書き換えない。
- 文字化け行を含むファイルでは、行番号ベースの削除や正規表現による広範囲置換を避ける。制御文字や見えない文字が混ざっていると、想定外の行が変更されることがある。
- リンクや front matter など ASCII で特定できる箇所を変更する場合は、`rg` で対象文字列を確認し、`apply_patch` で最小差分にする。
- `apply_patch` が文字列一致できない場合は、作業を急がず、対象ファイルのバックアップ差分を確認してから進める。未追跡ファイルは `git show HEAD:path` で復元できないため特に注意する。
- 既存ファイル全体を UTF-8 で書き直すのは、ユーザーが文字化け修正を明示した場合だけにする。
- 新規作成または明示的に修正する Markdown は UTF-8 で保存する。

## 検証

本文や設定を変更した場合は、基本的に次を実行する。

```bash
pnpm build
```

Windows PowerShell で `pnpm` が実行ポリシーにより止まる場合は、次を使う。

```powershell
pnpm.cmd build
```

レイアウト、スタイル、ナビゲーション、画像などのアセットを変更した場合は、開発サーバーを起動してブラウザでも表示を確認する。

## 注意事項

- このリポジトリは現在、日本語のドキュメントを対象にしている。
- 既存の日本語文字列に文字化けして見える箇所がある。文字コードや本文修正が明示された作業でない限り、該当文字列は不用意に書き換えない。
