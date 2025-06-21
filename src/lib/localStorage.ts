export const getLocalStorage = (key: string): any => {
  if (typeof window === "undefined") return null;
  const value = localStorage.getItem(key);
  return value ? JSON.parse(value) : null;
};

export const setLocalStorage = (key: string, value: any): void => {
  if (typeof window !== "undefined") {
    localStorage.setItem(key, JSON.stringify(value));
  }
};

export const clearLocalStorage = (): void => {
  if (typeof window !== "undefined") {
    localStorage.clear();
  }
};
