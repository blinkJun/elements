export default {
    title: 'Blink Elements',
    description: 'Blink 的组件库',
    base: '/docs/',
    head: [['link', { rel: 'icon', href: '/doc/images/logo.png' }]],
    themeConfig: {
        logo: '/images/logo.png',
        logoSmall: '/images/logo.png',
        editLink: {
            pattern: 'https://github.com/blinkJun/doc/edit/master/src/:path',
            text: 'Edit this page on GitHub'
        },
        docsBranch: 'master',
        nav: [{ text: '通用组件', link: '' }],
        socialLinks: [{ icon: 'github', link: 'https://github.com/blinkJun/elements' }],
        footer: {
            copyright: 'Copyright © 2023-present Blink'
        }
    }
}
