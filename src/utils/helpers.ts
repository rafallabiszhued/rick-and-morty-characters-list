export const ScrollToTop = () => window.scrollTo(0, 0);

export function getKeyNameEnumByValue<T>(enumCollection: T, value: string) {
  return Object.entries(enumCollection).find(([key, val]) => val === value)?.[0];
}

export const capitalizeFirstLetter = (value: string) => {
  return value.charAt(0).toUpperCase() + value.slice(1);
};
