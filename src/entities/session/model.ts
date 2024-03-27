import { combine, createEffect, createEvent, createStore } from "effector";
import { AuthCredentails } from "../../shared/api/types";
import { backendApi } from "../../shared/api";

export const LocalStorageKey = "auth";

export type TokenType = string | null;

export const $token = createStore<TokenType>(null);

export const loginFx = createEffect((credentails: AuthCredentails) => {
  return backendApi.login(credentails);
});

$token.on(loginFx.doneData, (_store, res) => {
  return res;
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
