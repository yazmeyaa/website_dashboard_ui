import { combine, createEffect, createEvent, createStore } from "effector";
import { AuthCredentails } from "../../shared/api/types";
import { backendApi } from "../../shared/api";

export const LocalStorageKey = "auth";

export type TokenType = string | null;

function getTokenFromLocalStorage(): string | null {
  return localStorage.getItem(LocalStorageKey);
}

export const $token = createStore<TokenType>(getTokenFromLocalStorage());

export const loginFx = createEffect((credentails: AuthCredentails) => {
  return backendApi.login(credentails);
});

$token.on(loginFx.doneData, (_store, res) => {
  return res;
});

$token.on(loginFx.doneData, (_store, token) => {
  if (!token) return token;
  localStorage.setItem(LocalStorageKey, token);
  return token;
});

export const eventLogin = createEvent("login");
export const eventLogout = createEvent("logout");
export const $submitDisabled = combine(loginFx.pending, (pending) => pending);

$token.on(eventLogout, () => null);
$token.on(eventLogin, (token) => token);

export const $session = combine(
  $token,
  $submitDisabled,
  (token, submitDisabled) => {
    return {
      token,
      submitDisabled,
    };
  }
);
