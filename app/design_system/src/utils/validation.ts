import { z } from "zod";

export const setReqMessage = (name = ""): string => {
  return !name ? "こちらの項目を入力して下さい。" : `${name}を入力して下さい。`;
};

export const setReqSelectedMessage = (name = ""): string => {
  return !name
    ? "こちらの項目をを選択して下さい。"
    : `${name}を選択して下さい。`;
};

const nameMessage = (name: string | undefined): string =>
  !name ? "" : `${name}は`;

const setMinLengthMessage = (name: string, min_length: number): string => {
  if (min_length === 1) {
    return setReqMessage(name);
  } else {
    return `${nameMessage(name)}${min_length}以上入力してください。`;
  }
};

const setMaxLengthMessage = (name: string, max_length: number): string =>
  `${nameMessage(name)}${max_length}文字以上は入力できません。`;
const setMinMessage = (name: string, min: number): string =>
  `${nameMessage(name)}${min}以上入力してください。`;
const setMaxMessage = (name: string, max: number): string =>
  `${nameMessage(name)}${max}以上は入力できません。`;
const setReqChoiceMessage = (name: string): string => {
  return !name
    ? "こちらの項目を選択してください。"
    : `${name}を選択して下さい。`;
};

const setMinChoiceMessage = (name: string, min: number): string => {
  if (min === 1) {
    return setReqChoiceMessage(name);
  } else {
    return !name
      ? `${min}個以上選択してください。`
      : `${name}を${min}個以上選択してください。`;
  }
};
const setMaxChoiceMessage = (name: string, max: number): string => {
  return !name
    ? `${max}個以上選択できません。`
    : `${name}は${max}個以上選択できません。`;
};

/**
 * any validation
 * @returns validation
 */
export const createAnyValidate = () => {
  return z.any();
};

/**
 * text validation
 * @param name 項目名
 * @param min_length 最小文字数(0で制御なし) 初期値=1
 * @param max_length 最大文字数(0で制御なし)
 * @param input_type フォームの型
 * @returns validation
 */
export const createTextValidate = (params: {
  name?: string;
  min_length?: number;
  max_length?: number;
  input_type?: "text" | "tel";
}) => {
  // 型リテラルプロパティを宣言内で初期化できないため、ここで処理を行う
  if (typeof params.name === "undefined") params.name = "";
  if (typeof params.min_length === "undefined") params.min_length = 1;
  if (typeof params.max_length === "undefined") params.max_length = 0;
  if (typeof params.input_type === "undefined") params.input_type = "text";

  let zodobj = z.string({ required_error: setReqMessage(params.name) });

  if (params.min_length > 0)
    zodobj = zodobj.min(params.min_length, {
      message: setMinLengthMessage(params.name, params.min_length),
    });
  if (params.max_length > 0)
    zodobj = zodobj.max(params.max_length, {
      message: setMaxLengthMessage(params.name, params.max_length),
    });

  if (params.input_type === "tel")
    zodobj = zodobj.regex(/^[0-9]*$/, { message: "不正な値です。" });

  return zodobj;
};

/**
 * email validation
 * @param name 項目名
 * @param min_length 最小文字数(0で制御なし) 初期値=1
 * @param max_length 最大文字数(0で制御なし)
 * @returns validation
 */
export const createEmailValidate = ({
  name = "",
  min_length = 1,
  max_length = 0,
}) => {
  let zodobj = z.string({ required_error: setReqMessage(name) });

  // optional validation
  if (min_length > 0)
    zodobj = zodobj.min(min_length, {
      message: setMinLengthMessage(name, min_length),
    });
  if (max_length > 0)
    zodobj = zodobj.max(max_length, {
      message: setMaxLengthMessage(name, max_length),
    });

  // require validation
  zodobj = zodobj.email({ message: "不正なメールアドレスです。" });

  return zodobj;
};

/**
 * number validation
 * @param name 項目名
 * @param min 最小値(0で制御なし) 初期値=0
 * @param max 最大値(0で制御なし)
 * @returns validation
 */
export const createNumberValidate = ({ name = "", min = 0, max = 0 }) => {
  const zodobj = z
    .string({ required_error: setReqMessage(name) })
    .min(1, { message: setReqMessage(name) })
    .regex(/^\d+$/, { message: "不正な値です。" });

  let eff = zodobj.refine(
    (val) => {
      return min > 0 && min < parseFloat(val);
    },
    setMinMessage(name, min),
  );
  eff = zodobj.refine(
    (val) => {
      return max > 0 && max >= parseFloat(val);
    },
    setMaxMessage(name, max),
  );

  return eff;
};

/**
 * integer validation
 * @param name 項目名
 * @param min 最小値(0で制御なし) 初期値=0
 * @returns validation
 */

export const validateIntegerEdit = ({ name = "", min = 0 }) => {
  const zodobj = z.preprocess(
    (val) => Number(val),
    z
      .number({ required_error: setReqMessage(name) })
      .int({ message: `${name}は半角数字で入力して下さい。` })
      .min(min, { message: `${name}は${min}以上の半角数字で入力して下さい。` }),
  );
  return zodobj;
};

/**
 * password validation
 * @param name 項目名
 * @param min_length 最小文字数(0で制御なし) 初期値=1
 * @param max_length 最大文字数(0で制御なし)
 * @param req_number true=数字必須
 * @param req_char true=英文字必須
 * @param req_symbol true=記号必須
 * @returns validation
 */
export const createPasswordValidate = ({
  name = "",
  min_length = 1,
  max_length = 0,
  req_number = false,
  req_char = false,
  req_symbol = false,
}) => {
  let zodobj = z.string({ required_error: setReqMessage(name) });

  if (min_length > 0)
    zodobj = zodobj.min(min_length, {
      message: setMinMessage(name, min_length),
    });
  if (max_length > 0)
    zodobj = zodobj.max(max_length, {
      message: setMaxLengthMessage(name, max_length),
    });

  if (req_number)
    zodobj = zodobj.regex(/[0-9]+/, {
      message: "パスワードが基準に適合していません。",
    });
  if (req_char)
    zodobj = zodobj.regex(/[a-z|A-Z]+/, {
      message: "パスワードが基準に適合していません。",
    });
  if (req_symbol)
    zodobj = zodobj.regex(
      /[_|?|.|<|>|,|{|}|!|"|#|$|%|&|'|(|)|\-|=|^|~|||@|`|;|+|:|*|[|\]|\\|/]+/,
      { message: "パスワードが基準に適合していません。" },
    );
  return zodobj;
};

/**
 * url validate
 * @param name 項目名
 * @param max_length 最大文字数(0で制御なし)
 * @returns validation
 */
export const createUrlValidate = ({ name = "", max_length = 0 }) => {
  let zodobj = z
    .string({ required_error: setReqMessage(name) })
    .url({ message: "不正なURLです。" });

  zodobj = zodobj.min(1, { message: setMinLengthMessage(name, 1) });
  if (max_length > 0)
    zodobj = zodobj.max(max_length, {
      message: setMaxLengthMessage(name, max_length),
    });

  return zodobj;
};

/**
 * select validate
 * @param name 項目名
 * @param min 最小値(0で制御なし) 初期値=1
 * @returns validation
 */
export const createSelectValidate = ({ name = "", min = 1 }) => {
  let zodobj = z.string({ required_error: setReqChoiceMessage(name) });
  if (min > 0)
    zodobj = z.string({ required_error: setReqChoiceMessage(name) }).min(min, {
      message: setReqChoiceMessage(name),
    });

  return zodobj;
};

/**
 * integer validation
 * @param name 項目名
 * @param min 最小値(0で制御なし) 初期値=0
 * @returns validation
 */
export const validateIntegerSelect = ({ name = "", min = 0 }) => {
  let zodobj = z
    .number({ required_error: setReqSelectedMessage(name) })
    .int({ message: "正しい項目を選択して下さい。" });

  if (typeof min === "number") {
    zodobj = zodobj.min(min, { message: `${name}を正しく選択して下さい。` });
  }

  return zodobj;
};
/**
 * checkbox validate
 * @param name 項目名
 * @param min 最小選択数(0で制御なし) 初期値=1
 * @param max 最大選択数(0で制御なし)
 * @returns validation
 */
export const createCheckBoxValidate = ({ name = "", min = 1, max = 0 }) => {
  let zodobj = z.array(z.string());
  if (min > 0)
    zodobj = zodobj.min(min, { message: setMinChoiceMessage(name, min) });
  if (max > 0)
    zodobj = zodobj.max(max, { message: setMaxChoiceMessage(name, max) });

  // 最小選択数を設定しない場合、ここで終了
  if (min <= 0) return zodobj;

  const zodobj2 = z
    .boolean()
    .refine((val) => val === true, { message: setReqChoiceMessage(name) });
  const zodobj3 = z
    .string({ required_error: setReqChoiceMessage(name) })
    .min(1, { message: setReqChoiceMessage(name) });

  return z.union([zodobj, zodobj2, zodobj3]);
};

/**
 * datetime validate
 * @param name 項目名
 * @returns validation
 */
export const createDateTimeValidate = ({ name = "" }) => {
  const zodobj = z
    .string({ required_error: setReqMessage(name) })
    .refine((val) => val !== "", setReqMessage(name));

  return zodobj.refine((val) => {
    return new Date(val).toString() !== "Invalid Date";
  }, "不正な日付です。");
};

/**
 * radio validate
 * @param name 項目名
 * @returns validation
 */
export const createRadioValidate = ({ name = "" }) => {
  const zodobj = z
    .string({ required_error: setReqChoiceMessage(name) })
    .nullish()
    .refine((val) => val, { message: setReqChoiceMessage(name) });

  return zodobj;
};
