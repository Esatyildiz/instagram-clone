import { setUser } from "./Store/auth";
import store from "./Store/store";

export const userHandle = data => {
    store.dispatch(setUser(data))
}