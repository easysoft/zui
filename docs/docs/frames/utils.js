export function trackColorScheme() {
    let prevTheme = null

    window.addEventListener('storage', () => {
        let theme = localStorage.getItem('vitepress-theme-appearance')
        if (theme === prevTheme) return
        prevTheme = theme

        if (theme === 'auto') {
            theme = window.matchMedia('(prefers-color-scheme: dark)').matches
            ? 'dark'
            : 'light'
        }

        if (theme === 'light') {
            document.documentElement.classList.remove('dark')
        } else if (theme === 'dark') {
            document.documentElement.classList.add('dark')
        }
    })
}
