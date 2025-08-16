export const formatDate = (
  date: Date,
  format = "yyyy/MM/dd",
  not_blank = false,
): string => {
  // 引数ない場合 = 1899/12/30の場合は空白
  if (!not_blank) {
    if (
      date.getFullYear() === 1899 &&
      date.getMonth() == 11 &&
      date.getDate() == 30
    ) {
      return "";
    }
  }
  if (format.indexOf("GGGG") > -1) {
    // ** [明治元年]1868年09月08日～1868年1月1日
    if (
      new Date("1868/9/8").getTime() <= date.getTime() &&
      date.getTime() <= new Date("1968/12/31").getTime()
    ) {
      format = format.replace(/GGGG/, "明治元");
      // **[明治] 1868年09月08日～1912年07月29日
    } else if (date.getTime() <= new Date("1912/7/29").getTime()) {
      format = format.replace(/GGGG/, "明治" + (date.getFullYear() - 1868 + 1));

      // ** [大正] 1912年07月30日～1926年12月24日
    } else if (date.getTime() <= new Date("1912/12/31").getTime()) {
      format = format.replace(/GGGG/, "大正元");
      // ** [大正] 1912年07月30日～1926年12月24日
    } else if (date.getTime() <= new Date("1926/12/24").getTime()) {
      format = format.replace(/GGGG/, "大正" + (date.getFullYear() - 1912 + 1));

      // ** [昭和] 1926年12月25日～1989年01月07日
    } else if (date.getTime() <= new Date("1926/12/31").getTime()) {
      format = format.replace(/GGGG/, "昭和元");
    } else if (date.getTime() <= new Date("1989/1/7").getTime()) {
      format = format.replace(/GGGG/, "昭和" + (date.getFullYear() - 1926 + 1));

      // ** [平成] 1989年01月08日～2019年04月30日
    } else if (date.getTime() <= new Date("1989/12/31").getTime()) {
      format = format.replace(/GGGG/, "平成元");
    } else if (date.getTime() <= new Date("2019/4/30").getTime()) {
      format = format.replace(/GGGG/, "平成" + (date.getFullYear() - 1989 + 1));

      // ** [令和] 2019年05月01日～
    } else if (date.getTime() <= new Date("2019/12/31").getTime()) {
      format = format.replace(/GGGG/, "令和元");
    } else if (new Date("2020/1/1").getTime() <= date.getTime()) {
      format = format.replace(/GGGG/, "令和" + (date.getFullYear() - 2019 + 1));

      // ** [それ以外の年]
    } else {
      format = "";
    }
  }
  format = format.replace(/yyyy/, date.getFullYear().toString());
  format = format.replace(/MM/, ("0" + (date.getMonth() + 1)).slice(-2));
  format = format.replace(/dd/, ("0" + date.getDate()).slice(-2));
  format = format.replace(/HH/, ("0" + date.getHours()).slice(-2));
  format = format.replace(/mm/, ("0" + date.getMinutes()).slice(-2));
  format = format.replace(/ss/, ("0" + date.getSeconds()).slice(-2));

  if (format.match(/S/) !== null) {
    const milliSeconds = ("00" + date.getMilliseconds()).slice(-3);
    const length = format.match(/S/g)?.length;
    if (length !== undefined) {
      for (let i = 0; i < length; i++)
        format = format.replace(/S/, milliSeconds.substring(i, i + 1));
    }
  }

  format = format.replace(
    /W/,
    ["日", "月", "火", "水", "木", "金", "土"][date.getDay()],
  );
  return format;
};
