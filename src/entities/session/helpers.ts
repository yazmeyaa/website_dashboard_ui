export const LocalStorageKey = "auth";

export function getTokenFromLocalStorage(): string | null {
  return localStorage.getItem(LocalStorageKey);
}
