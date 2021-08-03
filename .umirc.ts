import { defineConfig } from 'umi';

export default defineConfig({
    antd: false,
    nodeModulesTransform: {
        type: 'none',
    },
    routes: [{ path: '/', component: '@/pages/index' }],
    fastRefresh: {},
    qiankun: {
        slave: {},
    },
});
