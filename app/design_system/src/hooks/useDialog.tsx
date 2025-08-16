import { useCallback, useEffect, type ReactElement, type FC } from "react";
import { useAtom } from "jotai";
import { dialogAtom } from "@/atoms";
import { Dialog as Component } from "@/components/ui_parts/dialog";

// DialogProps 型定義: Dialog コンポーネントに渡す props から isOpen を除外
type DialogProps = Omit<Parameters<typeof Component>[0], "isOpen">;

type Result = {
  openDialog: (id: string) => void; // ダイアログを開く関数
  closeDialog: (id: string) => void; // ダイアログを閉じる関数
  Dialog: FC<DialogProps & { id: string }>; // ダイアログ用コンポーネント
};

export const useDialog = (): Result => {
  // Jotai の状態管理: 現在開いているダイアログの ID を管理
  const [openDialogs, setOpenDialogs] = useAtom(dialogAtom);

  // ダイアログを開く関数
  const openDialog = useCallback(
    (id: string): void => {
      setOpenDialogs(id); // ダイアログの ID を状態に設定
    },
    [setOpenDialogs],
  );

  // ダイアログを閉じる関数
  const closeDialog = useCallback(
    (id: string): void => {
      setOpenDialogs((prevDialogs) => (prevDialogs === id ? "" : prevDialogs)); // ID が一致する場合は閉じる
    },
    [setOpenDialogs],
  );

  // ダイアログの開閉に応じて body のスクロールを制御
  useEffect(() => {
    document.body.style.overflowY = openDialogs !== "" ? "hidden" : "auto"; // ダイアログが開いているときはスクロールを無効化
    return () => {
      document.body.style.overflowY = "auto"; // クリーンアップでスクロールを有効化
    };
  }, [openDialogs]);

  // ダイアログ用のコンポーネント: 指定された ID が開いているかを判定
  const Dialog: FC<DialogProps & { id: string }> = useCallback(
    ({ id, ...props }: DialogProps & { id: string }): ReactElement | null => {
      const isOpen = openDialogs === id; // 現在開いている ID と一致するかチェック
      return <Component isOpen={isOpen} {...props} />; // isOpen をコンポーネントに渡す
    },
    [openDialogs],
  );

  // フックの戻り値として関数とコンポーネントを返す
  return { openDialog, closeDialog, Dialog };
};
