import { mdPlugin } from './plugins/markdown'
export default {
    title: 'Blink Elements',
    description: 'Blink 的组件库',
    markdown: {
        config: mdPlugin
    },
    base: '/elements/',
    head: [['link', { rel: 'icon', href: '/elements/images/logo.png' }]],
    themeConfig: {
        logo: '/images/logo.png',
        logoSmall: '/images/logo.png',
        editLink: {
            pattern: 'https://github.com/blinkJun/elements/edit/main/docs/:path',
            text: 'Edit this page on GitHub'
        },
        docsBranch: 'main',
        nav: [
            { text: '通用组件', link: '/src/elements/echart' },
            { text: '组合式函数', link: '/src/composition/count-to' }
        ],
        socialLinks: [{ icon: 'github', link: 'https://github.com/blinkJun/elements' }],
        footer: {
            copyright: 'Copyright © 2023-present Blink'
        },
        sidebar: {
            '/src/elements': [
                {
                    text: 'echart',
                    link: '/src/elements/echart'
                }
            ],
            '/src/composition': [
                {
                    text: 'useCountTo',
                    link: '/src/composition/count-to'
                }
            ]
        }
    }
}
