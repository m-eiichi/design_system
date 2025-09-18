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

  describe("レイアウトプロパティ", () => {
    it("displayプロパティが正しく適用される", () => {
      render(
        <CoreComponent display="flex" data-testid="display-test">
          テスト
        </CoreComponent>,
      );

      const component = screen.getByTestId("display-test");
      expect(component).toHaveStyle({ display: "flex" });
    });

    it("positionプロパティが正しく適用される", () => {
      render(
        <CoreComponent position="relative" data-testid="position-test">
          テスト
        </CoreComponent>,
      );

      const component = screen.getByTestId("position-test");
      expect(hasClass(component, "position_relative")).toBe(true);
    });

    it("overflowプロパティが正しく適用される", () => {
      render(
        <CoreComponent overflow="hidden" data-testid="overflow-test">
          テスト
        </CoreComponent>,
      );

      const component = screen.getByTestId("overflow-test");
      expect(hasClass(component, "overflow_hidden")).toBe(true);
    });
  });

  describe("Flexboxプロパティ", () => {
    it("flexDirectionプロパティが正しく適用される", () => {
      render(
        <CoreComponent flexDirection="row" data-testid="flex-direction-test">
          テスト
        </CoreComponent>,
      );

      const component = screen.getByTestId("flex-direction-test");
      expect(hasClass(component, "flex_direction_row")).toBe(true);
    });

    it("alignItemsプロパティが正しく適用される", () => {
      render(
        <CoreComponent alignItems="center" data-testid="align-items-test">
          テスト
        </CoreComponent>,
      );

      const component = screen.getByTestId("align-items-test");
      expect(hasClass(component, "align_items_center")).toBe(true);
    });

    it("justifyContentプロパティが正しく適用される", () => {
      render(
        <CoreComponent
          justifyContent="between"
          data-testid="justify-content-test"
        >
          テスト
        </CoreComponent>,
      );

      const component = screen.getByTestId("justify-content-test");
      expect(hasClass(component, "justify_content_between")).toBe(true);
    });

    it("flexプロパティが正しく適用される", () => {
      render(
        <CoreComponent flex="1" data-testid="flex-test">
          テスト
        </CoreComponent>,
      );

      const component = screen.getByTestId("flex-test");
      expect(hasClass(component, "flex_1")).toBe(true);
    });

    it("flexWrapプロパティが正しく適用される", () => {
      render(
        <CoreComponent flexWrap="wrap" data-testid="flex-wrap-test">
          テスト
        </CoreComponent>,
      );

      const component = screen.getByTestId("flex-wrap-test");
      expect(hasClass(component, "flex_wrap")).toBe(true);
    });

    it("gapプロパティが正しく適用される", () => {
      render(
        <CoreComponent gap="8" data-testid="gap-test">
          テスト
        </CoreComponent>,
      );

      const component = screen.getByTestId("gap-test");
      expect(hasClass(component, "gap_8")).toBe(true);
    });

    it("shrinkプロパティが正しく適用される", () => {
      render(
        <CoreComponent shrink="0" data-testid="shrink-test">
          テスト
        </CoreComponent>,
      );

      const component = screen.getByTestId("shrink-test");
      expect(hasClass(component, "shrink_0")).toBe(true);
    });
  });

  describe("スペーシングプロパティ", () => {
    it("paddingプロパティが正しく適用される", () => {
      render(
        <CoreComponent p="4" data-testid="padding-test">
          テスト
        </CoreComponent>,
      );

      const component = screen.getByTestId("padding-test");
      expect(hasClass(component, "p_4")).toBe(true);
    });

    it("marginプロパティが正しく適用される", () => {
      render(
        <CoreComponent m="2" data-testid="margin-test">
          テスト
        </CoreComponent>,
      );

      const component = screen.getByTestId("margin-test");
      expect(hasClass(component, "m_2")).toBe(true);
    });

    it("個別のpaddingプロパティが正しく適用される", () => {
      render(
        <CoreComponent
          pt="4"
          pr="2"
          pb="8"
          pl="8"
          data-testid="padding-individual-test"
        >
          テスト
        </CoreComponent>,
      );

      const component = screen.getByTestId("padding-individual-test");
      expect(hasClass(component, "pt_4")).toBe(true);
      expect(hasClass(component, "pr_2")).toBe(true);
      expect(hasClass(component, "pb_8")).toBe(true);
      expect(hasClass(component, "pl_8")).toBe(true);
    });

    it("個別のmarginプロパティが正しく適用される", () => {
      render(
        <CoreComponent
          mt="4"
          mr="2"
          mb="8"
          ml="8"
          data-testid="margin-individual-test"
        >
          テスト
        </CoreComponent>,
      );

      const component = screen.getByTestId("margin-individual-test");
      expect(hasClass(component, "mt_4")).toBe(true);
      expect(hasClass(component, "mr_2")).toBe(true);
      expect(hasClass(component, "mb_8")).toBe(true);
      expect(hasClass(component, "ml_8")).toBe(true);
    });
  });

  describe("サイジングプロパティ", () => {
    it("widthプロパティが正しく適用される（トークン値）", () => {
      render(
        <CoreComponent w="16" data-testid="width-token-test">
          テスト
        </CoreComponent>,
      );

      const component = screen.getByTestId("width-token-test");
      expect(hasClass(component, "w_16")).toBe(true);
    });

    it("widthプロパティが正しく適用される（カスタム値）", () => {
      render(
        <CoreComponent w="100px" data-testid="width-custom-test">
          テスト
        </CoreComponent>,
      );

      const component = screen.getByTestId("width-custom-test");
      expect(component).toHaveStyle({ width: "100px" });
    });

    it("heightプロパティが正しく適用される（トークン値）", () => {
      render(
        <CoreComponent h="32" data-testid="height-token-test">
          テスト
        </CoreComponent>,
      );

      const component = screen.getByTestId("height-token-test");
      expect(hasClass(component, "h_32")).toBe(true);
    });

    it("heightプロパティが正しく適用される（カスタム値）", () => {
      render(
        <CoreComponent h="200px" data-testid="height-custom-test">
          テスト
        </CoreComponent>,
      );

      const component = screen.getByTestId("height-custom-test");
      expect(component).toHaveStyle({ height: "200px" });
    });

    it("minWidthプロパティが正しく適用される（トークン値）", () => {
      render(
        <CoreComponent minW="8" data-testid="min-width-token-test">
          テスト
        </CoreComponent>,
      );

      const component = screen.getByTestId("min-width-token-test");
      expect(hasClass(component, "min_w_8")).toBe(true);
    });

    it("minWidthプロパティが正しく適用される（カスタム値）", () => {
      render(
        <CoreComponent minW="50px" data-testid="min-width-custom-test">
          テスト
        </CoreComponent>,
      );

      const component = screen.getByTestId("min-width-custom-test");
      expect(component).toHaveStyle({ minWidth: "50px" });
    });

    it("maxWidthプロパティが正しく適用される（トークン値）", () => {
      render(
        <CoreComponent maxW="104" data-testid="max-width-token-test">
          テスト
        </CoreComponent>,
      );

      const component = screen.getByTestId("max-width-token-test");
      expect(hasClass(component, "max_w_104")).toBe(true);
    });

    it("maxWidthプロパティが正しく適用される（カスタム値）", () => {
      render(
        <CoreComponent maxW="300px" data-testid="max-width-custom-test">
          テスト
        </CoreComponent>,
      );

      const component = screen.getByTestId("max-width-custom-test");
      expect(component).toHaveStyle({ maxWidth: "300px" });
    });

    it("minHeightプロパティが正しく適用される（トークン値）", () => {
      render(
        <CoreComponent minH="16" data-testid="min-height-token-test">
          テスト
        </CoreComponent>,
      );

      const component = screen.getByTestId("min-height-token-test");
      expect(hasClass(component, "min_h_16")).toBe(true);
    });

    it("minHeightプロパティが正しく適用される（カスタム値）", () => {
      render(
        <CoreComponent minH="100px" data-testid="min-height-custom-test">
          テスト
        </CoreComponent>,
      );

      const component = screen.getByTestId("min-height-custom-test");
      expect(component).toHaveStyle({ minHeight: "100px" });
    });

    it("maxHeightプロパティが正しく適用される（トークン値）", () => {
      render(
        <CoreComponent maxH="104" data-testid="max-height-token-test">
          テスト
        </CoreComponent>,
      );

      const component = screen.getByTestId("max-height-token-test");
      expect(hasClass(component, "max_h_104")).toBe(true);
    });

    it("maxHeightプロパティが正しく適用される（カスタム値）", () => {
      render(
        <CoreComponent maxH="500px" data-testid="max-height-custom-test">
          テスト
        </CoreComponent>,
      );

      const component = screen.getByTestId("max-height-custom-test");
      expect(component).toHaveStyle({ maxHeight: "500px" });
    });
  });

  describe("タイポグラフィプロパティ", () => {
    it("fontSizeプロパティが正しく適用される", () => {
      render(
        <CoreComponent fontSize="16" data-testid="font-size-test">
          テスト
        </CoreComponent>,
      );

      const component = screen.getByTestId("font-size-test");
      expect(hasClass(component, "font_size_16")).toBe(true);
    });

    it("fontWeightプロパティが正しく適用される", () => {
      render(
        <CoreComponent fontWeight="bold" data-testid="font-weight-test">
          テスト
        </CoreComponent>,
      );

      const component = screen.getByTestId("font-weight-test");
      expect(hasClass(component, "font_weight_bold")).toBe(true);
    });

    it("lineHeightプロパティが正しく適用される", () => {
      render(
        <CoreComponent lineHeight="150" data-testid="line-height-test">
          テスト
        </CoreComponent>,
      );

      const component = screen.getByTestId("line-height-test");
      expect(hasClass(component, "line_height_150")).toBe(true);
    });

    it("letterSpacingプロパティが正しく適用される", () => {
      render(
        <CoreComponent letterSpacing="wide" data-testid="letter-spacing-test">
          テスト
        </CoreComponent>,
      );

      const component = screen.getByTestId("letter-spacing-test");
      expect(hasClass(component, "letter_spacing_wide")).toBe(true);
    });

    it("textAlignプロパティが正しく適用される", () => {
      render(
        <CoreComponent textAlign="center" data-testid="text-align-test">
          テスト
        </CoreComponent>,
      );

      const component = screen.getByTestId("text-align-test");
      expect(hasClass(component, "text_align_center")).toBe(true);
    });
  });

  describe("その他のプロパティ", () => {
    it("cursorプロパティが正しく適用される", () => {
      render(
        <CoreComponent cursor="pointer" data-testid="cursor-test">
          テスト
        </CoreComponent>,
      );

      const component = screen.getByTestId("cursor-test");
      expect(hasClass(component, "cursor_pointer")).toBe(true);
    });

    it("elevationプロパティが正しく適用される", () => {
      render(
        <CoreComponent elevation="2" data-testid="elevation-test">
          テスト
        </CoreComponent>,
      );

      const component = screen.getByTestId("elevation-test");
      expect(hasClass(component, "elevation_2")).toBe(true);
    });
  });

  describe("レスポンシブプロパティ", () => {
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

    it("複数のレスポンシブプロパティが同時に適用される", () => {
      render(
        <CoreComponent
          fontSize={{ sp: "14", tb: "16", pc: "18" }}
          fontWeight={{ sp: "normal", tb: "medium", pc: "bold" }}
          data-testid="multi-responsive-component"
        >
          複数レスポンシブテスト
        </CoreComponent>,
      );

      const component = screen.getByTestId("multi-responsive-component");
      expect(hasClass(component, "font_size_sp_14")).toBe(true);
      expect(hasClass(component, "font_size_tb_16")).toBe(true);
      expect(hasClass(component, "font_size_pc_18")).toBe(true);
      expect(hasClass(component, "font_weight_sp_normal")).toBe(true);
      expect(hasClass(component, "font_weight_tb_medium")).toBe(true);
      expect(hasClass(component, "font_weight_pc_bold")).toBe(true);
    });
  });

  describe("複合プロパティ", () => {
    it("複数のプロパティが同時に適用される", () => {
      render(
        <CoreComponent
          lineHeight="160"
          fontWeight="bold"
          fontSize="16"
          p="4"
          m="2"
          data-testid="multi-props-component"
        >
          複数プロパティテスト
        </CoreComponent>,
      );

      const component = screen.getByTestId("multi-props-component");
      expect(hasClass(component, "line_height_160")).toBe(true);
      expect(hasClass(component, "font_weight_bold")).toBe(true);
      expect(hasClass(component, "font_size_16")).toBe(true);
      expect(hasClass(component, "p_4")).toBe(true);
      expect(hasClass(component, "m_2")).toBe(true);
    });
  });

  describe("HTML要素の変更", () => {
    it("asプロパティでHTML要素を変更できる", () => {
      render(
        <CoreComponent as="button" data-testid="button-element">
          ボタン
        </CoreComponent>,
      );

      const component = screen.getByTestId("button-element");
      expect(component.tagName).toBe("BUTTON");
    });

    it("asプロパティでspan要素に変更できる", () => {
      render(
        <CoreComponent as="span" data-testid="span-element">
          スパン
        </CoreComponent>,
      );

      const component = screen.getByTestId("span-element");
      expect(component.tagName).toBe("SPAN");
    });
  });
});
