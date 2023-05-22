export function executeScripts(element: HTMLElement) {
    const scripts = element.querySelectorAll('script');
    if (!scripts) {
        return;
    }
    scripts.forEach(script => {
        const s = document.createElement('script');
        s.type = script.type || 'text/javascript';
        s.async = false;
        s.innerHTML = script.innerHTML;
        element.appendChild(s);
        script.remove();
    });
}
