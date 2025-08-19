import React from "react";
// import { type ReactElement } from "@/components/";
import { CoreComponent } from "@/components/ui-elements/CoreComponent";

export const Home: React.FC = () => {
  return (
    <div>
      <h1>ホームページへようこそ</h1>
      <p>こちらはホームコンポーネントのベースです。</p>
      <CoreComponent
        display="flex"
        flexDirection={{ sp: "row", tb: "col", pc: "colReverse" }}
        alignItems={{ sp: "start", tb: "center", pc: "end" }}
        justifyContent={{ sp: "between", tb: "center", pc: "end" }}
        flex={{ sp: "1", tb: "auto", pc: "initial" }}
        shrink={{ sp: true, tb: "0", pc: false }}
        font={{ sp: "buttonM", tb: "buttonM", pc: "h1L" }}
        onClick={() => {
          console.log("CoreComponent clicked");
        }}
        onChange={(e: any) => {
          console.log("CoreComponent changed", e.target.value);
        }}
        className="custom-class"
        // bg={{ sp: "black", tb: "information", pc: "success" }}
        // overflowX={{ sp: "auto", tb: "hidden", pc: "scroll" }}
        p="1"
        m="2"
      >
        <CoreComponent
          bg="#000000"
          border={"disabled"}
          elevation={{ sp: "3", tb: "2", pc: "1" }}
          grow={"0"}
          textAlign={{ sp: "left", tb: "center", pc: "right" }}
          color={{ sp: "base", tb: "warning", pc: "alert" }}
          borderRadius={{ sp: "xs", tb: "xs", pc: "xl" }}
          onClick={() => {
            console.log("CoreComponent clicked");
          }}
          onChange={(e: any) => {
            console.log("CoreComponent changed", e.target.value);
          }}
        >
          aaa
        </CoreComponent>
        <CoreComponent bg="information">bbb</CoreComponent>
        <CoreComponent
          bg="success"
          cursor={{ sp: "pointer", tb: "default", pc: "notAllowed" }}
        >
          ccc
        </CoreComponent>
      </CoreComponent>
    </div>
  );
};
