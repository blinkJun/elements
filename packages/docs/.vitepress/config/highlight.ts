import Prism from 'prismjs'
import loadLanguages from 'prismjs/components/'
import chalk from 'chalk'
import escapeHtml from 'escape-html'

function formatLang(lang) {
    if (!lang) {
        return 'text'
    }

    lang = lang.toLowerCase()

    if (lang === 'vue' || lang === 'html') {
        lang = 'markup'
    }
    if (lang === 'md') {
        lang = 'markdown'
    }
    if (lang === 'ts') {
        lang = 'typescript'
    }
    if (lang === 'py') {
        lang = 'python'
    }

    return lang
}

function tryLoadLanguages(lang) {
    // 尝试加载
    if (!Prism.languages[lang]) {
        try {
            loadLanguages([lang])
        } catch (e) {
            console.warn(chalk.yellow(`Syntax highlight for language "${lang}" is not supported.`))
        }
    }
}

function wrap(code, lang) {
    if (lang === 'text') {
        code = escapeHtml(code)
    }
    // 若是vue项目，加上v-pre可以跳过该元素的解析
    return `<pre v-pre><code>${code}</code></pre>`
}

export default function highlight(code, lang: string | any) {
    lang = formatLang(lang)

    tryLoadLanguages(lang)

    if (Prism.languages[lang]) {
        const highlightCode = Prism.highlight(code, Prism.languages[lang], lang)
        return wrap(highlightCode, lang)
    }

    return wrap(code, lang)
}
