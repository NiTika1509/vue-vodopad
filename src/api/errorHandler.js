import store from "@/store";

export const errorHandler = {
    getErrorCode(e) {
        if (e.code === "ERR_NETWORK") {
            this.setErrorView("ERR_NETWORK");
        } else {
            this.setErrorView(e);
        }
    },
    setErrorView(e) {
        store.commit('setError', e);
    },
}