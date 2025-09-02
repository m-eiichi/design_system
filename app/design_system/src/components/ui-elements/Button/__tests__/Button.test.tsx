import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Button } from "../index";

// CSS Modulesのクラス名をテストするためのヘルパー関数
const hasClass = (element: HTMLElement, className: string) => {
  return element.className.includes(className);
};

describe("Button", () => {
  describe("基本的な機能", () => {
    it("基本的なレンダリングが正常に動作する", () => {
      render(<Button>テストコンテンツ</Button>);
      expect(screen.getByText("テストコンテンツ")).toBeInTheDocument();
    });

    it("classNameプロパティが正しく適用される", () => {
      const customClass = "custom-class";
      render(<Button className={customClass}>テスト</Button>);
      const component = screen.getByText("テスト");
      expect(component.className).toContain(customClass);
    });

    it("data-testidプロパティが正しく適用される", () => {
      render(<Button data-testid="test-component">テスト</Button>);
      expect(screen.getByTestId("test-component")).toBeInTheDocument();
    });
  });

  describe("プロパティの適用", () => {
    // ここにコンポーネント固有のプロパティのテストを追加してください
    // 例：
    // it("variantプロパティが正しく適用される", () => {
    //   render(<Button variant="primary">テスト</Button>);
    //   const component = screen.getByText("テスト");
    //   expect(hasClass(component, "variant_primary")).toBe(true);
    // });

    // it("sizeプロパティが正しく適用される", () => {
    //   render(<Button size="large">テスト</Button>);
    //   const component = screen.getByText("テスト");
    //   expect(hasClass(component, "size_large")).toBe(true);
    // });
  });

  describe("イベントハンドリング", () => {
    // ここにイベントハンドリングのテストを追加してください
    // 例：
    // it("onClickイベントが正しく発火する", () => {
    //   const handleClick = vi.fn();
    //   render(<Button onClick={handleClick}>テスト</Button>);
    //   const component = screen.getByText("テスト");
    //   fireEvent.click(component);
    //   expect(handleClick).toHaveBeenCalledTimes(1);
    // });

    // it("disabled状態でクリックイベントが発火しない", () => {
    //   const handleClick = vi.fn();
    //   render(<Button disabled onClick={handleClick}>テスト</Button>);
    //   const component = screen.getByText("テスト");
    //   fireEvent.click(component);
    //   expect(handleClick).not.toHaveBeenCalled();
    // });
  });

  describe("アクセシビリティ", () => {
    // ここにアクセシビリティのテストを追加してください
    // 例：
    // it("aria-labelが正しく設定される", () => {
    //   render(<Button aria-label="アクセシビリティテスト">テスト</Button>);
    //   const component = screen.getByLabelText("アクセシビリティテスト");
    //   expect(component).toBeInTheDocument();
    // });

    // it("role属性が正しく設定される", () => {
    //   render(<Button role="button">テスト</Button>);
    //   const component = screen.getByRole("button");
    //   expect(component).toBeInTheDocument();
    // });
  });

  describe("エッジケース", () => {
    it("空のchildrenでも正常に動作する", () => {
      render(<Button></Button>);
      const component = screen.getByTestId("test-component");
      expect(component).toBeInTheDocument();
    });

    it("undefinedのプロパティでも正常に動作する", () => {
      render(<Button prop={undefined}>テスト</Button>);
      expect(screen.getByText("テスト")).toBeInTheDocument();
    });

    it("極端な値でもクラッシュしない", () => {
      render(<Button className="very-long-class-name-that-might-cause-issues">テスト</Button>);
      expect(screen.getByText("テスト")).toBeInTheDocument();
    });
  });

  describe("レスポンシブ対応", () => {
    // ここにレスポンシブ対応のテストを追加してください
    // 例：
    // it("レスポンシブプロパティが正しく適用される", () => {
    //   render(<Button size={{ sp: "small", tb: "medium", pc: "large" }}>テスト</Button>);
    //   const component = screen.getByText("テスト");
    //   expect(hasClass(component, "size_sp_small")).toBe(true);
    //   expect(hasClass(component, "size_tb_medium")).toBe(true);
    //   expect(hasClass(component, "size_pc_large")).toBe(true);
    // });
  });

  describe("状態管理", () => {
    // ここに状態管理のテストを追加してください
    // 例：
    // it("loading状態が正しく表示される", () => {
    //   render(<Button loading>テスト</Button>);
    //   const component = screen.getByText("テスト");
    //   expect(hasClass(component, "loading")).toBe(true);
    // });

    // it("error状態が正しく表示される", () => {
    //   render(<Button error>テスト</Button>);
    //   const component = screen.getByText("テスト");
    //   expect(hasClass(component, "error")).toBe(true);
    // });
  });
});

