import { computed } from 'vue'
import { useData } from 'vitepress'
import { createGitHubUrl } from '../utils'

import type { Ref } from 'vue'

export const useSourceCode = (path: Ref<string>) => {
    const { theme } = useData()
    const demoUrl = computed(() => {
        const { docsDir = 'docs', docsBranch = 'main', socialLinks } = theme.value

        const githubRepo = socialLinks.find((item) => item.icon === 'github')?.link

        return createGitHubUrl(githubRepo, docsDir, docsBranch, path.value)
    })

    return demoUrl
}
