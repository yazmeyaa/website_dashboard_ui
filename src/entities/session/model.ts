import { combine, createEffect, createEvent, createStore } from "effector";
import { AuthCredentails } from "../../shared/api/types";
import { backendApi } from "../../shared/api";
import { LocalStorageKey, getTokenFromLocalStorage } from "./helpers";

export type TokenType = string | null;

export const $token = createStore<TokenType>(getTokenFromLocalStorage());

export const loginFx = createEffect((credentails: AuthCredentails) => {
  return backendApi.login(credentails);
});

$token.on(loginFx.doneData, (_store, res) => {
  console.log("Done data", { res });
  return res;
});

$token.watch((state) => {
  console.log("Store change:", state);
});

$token.on(loginFx.doneData, (_store, token) => {
  if (token) localStorage.setItem(LocalStorageKey, token);
  backendApi.setToken(token);
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
export { getTokenFromLocalStorage };
