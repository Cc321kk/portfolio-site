export const skills = [
    {
        name: 'Vue 3',
        icon: new URL('../assets/vue.svg', import.meta.url).href,
        desc: '擅长使用组合式 API 构建高效组件。'
    },
    {
        name: 'JavaScript',
        icon: new URL('../assets/js.png', import.meta.url).href,
        desc: '熟悉 ES6+ 语法，可以独立实现交互逻辑。'
    },
    {
        name: 'HTML & CSS',
        icon: [
            new URL('../assets/html.png', import.meta.url).href,
            new URL('../assets/css.png', import.meta.url).href
        ],
        desc: '能够实现响应式页面布局和动画效果。'
    },
    {
        name: 'Node.js',
        icon: new URL('../assets/node.png', import.meta.url).href,
        desc: '理解前后端分离结构，可以编写简单接口。'
    },
    {
        name: 'MySQL',
        icon: new URL('../assets/mysql.png', import.meta.url).href,
        desc: '掌握基本的数据库操作与查询语句，能设计数据表结构。',
    }
];
