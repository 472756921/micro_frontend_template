export default {
    namespace: 'app',
    state: {},
    subscriptions: {},
    effects: {},
    reducers: {
        save(state, { payload }) {
            return {
                ...state,
                ...payload,
            };
        },
    },
};
