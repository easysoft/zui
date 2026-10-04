import 'zui-dev';
import './src/main';
import {defineButton} from './src/web-component';

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
