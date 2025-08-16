import { RouterConfig } from "./routes/RouterConfig"; // ルーティング設定を管理するコンポーネント
import { type ReactElement } from "react";
/**
 * <App /> コンポーネント
 *
 * @description
 * - アプリケーション全体のエントリーポイントとなるコンポーネント
 * - ルーティング設定 (`RouterConfig`) を適用
 * - グローバルに使用するアラートダイアログ (`AlertContent`) を配置
 *
 * @returns {ReactElement} JSXコンポーネント
 */

function App(): ReactElement {
  // ダイアログ管理用のカスタムフックを呼び出し

  return <RouterConfig />;
}

export default App;
