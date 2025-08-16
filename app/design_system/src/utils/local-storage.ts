/**
 * localStorage の機能検出
 * https://developer.mozilla.org/ja/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API
 * @return T:localStorage使用可
 */
export const com_storageAvailable = (
  type: "localStorage" | "sessionStorage",
): boolean => {
  const storage = window[type];
  try {
    const x = "__storage_test__";
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return (
      e instanceof DOMException &&
      // everything except Firefox
      (e.code === 22 ||
        // Firefox
        e.code === 1014 ||
        // test name field too, because code might not be present
        // everything except Firefox
        e.name === "QuotaExceededError" ||
        // Firefox
        e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
      // acknowledge QuotaExceededError only if there's something already stored
      storage.length !== 0
    );
  }
};

/**
 * localSessionStorage取得
 * @param key
 * @returns Value
 */
export const getSessionStorageValue = (key: string): string | null => {
  if (com_storageAvailable("sessionStorage")) {
    return window.sessionStorage.getItem(key);
  }
  return null;
};

/**
 * localSessionStorage保存
 * @param key
 * @param value
 * @returns true:success
 */
export const setSessionStorageValue = (key: string, value: string): boolean => {
  if (com_storageAvailable("sessionStorage")) {
    window.sessionStorage.setItem(key, value);
    return true;
  }
  return false;
};
