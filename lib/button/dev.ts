import 'zui-dev';
import {defineButton} from './src/main';

function updateWebComponentExamples(): void {
    if (!customElements.get('zui-button')) {
        defineButton();
    }
}

onPageUpdate(updateWebComponentExamples);

if (import.meta.hot) {
    import.meta.hot.dispose(() => {
        document.removeEventListener('dev-page-load', updateWebComponentExamples);
        document.removeEventListener('dev-page-update', updateWebComponentExamples);
    });
    import.meta.hot.accept(() => window.location.reload());
}
