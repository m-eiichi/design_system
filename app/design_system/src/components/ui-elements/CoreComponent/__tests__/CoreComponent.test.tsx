import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { CoreComponent } from "../index";

// CSS Modulesのクラス名をテストするためのヘルパー関数
const hasClass = (element: HTMLElement, className: string) => {
  return element.className.includes(className);
};

describe("CoreComponent", () => {
  it("基本的なレンダリングが正常に動作する", () => {
    render(<CoreComponent>テストコンテンツ</CoreComponent>);

    expect(screen.getByText("テストコンテンツ")).toBeInTheDocument();
  });

  it("lineHeightプロパティが正しく適用される", () => {
    render(
      <CoreComponent lineHeight="150" data-testid="test-component">
        行高テスト
      </CoreComponent>,
    );

    const component = screen.getByTestId("test-component");
    expect(hasClass(component, "line_height_150")).toBe(true);
  });

  it("レスポンシブプロパティが正しく適用される", () => {
    render(
      <CoreComponent
        lineHeight={{ sp: "120", tb: "130", pc: "140" }}
        data-testid="responsive-component"
      >
        レスポンシブテスト
      </CoreComponent>,
    );

    const component = screen.getByTestId("responsive-component");
    expect(hasClass(component, "line_height_sp_120")).toBe(true);
    expect(hasClass(component, "line_height_tb_130")).toBe(true);
    expect(hasClass(component, "line_height_pc_140")).toBe(true);
  });

  it("複数のプロパティが同時に適用される", () => {
    render(
      <CoreComponent
        lineHeight="160"
        fontWeight="bold"
        fontSize="16"
        data-testid="multi-props-component"
      >
        複数プロパティテスト
      </CoreComponent>,
    );

    const component = screen.getByTestId("multi-props-component");
    expect(hasClass(component, "line_height_160")).toBe(true);
    expect(hasClass(component, "font_weight_bold")).toBe(true);
    expect(hasClass(component, "font_size_16")).toBe(true);
  });
});
