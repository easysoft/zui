import {onUnmounted, ref} from 'vue';

export function useCopyFeedback() {
    const copied = ref(false);
    const copying = ref(false);
    const message = ref('');
    let timer = 0;
    let disposed = false;

    async function copy(text: string, successMessage = '已复制') {
        if (copying.value || disposed) {
            return;
        }
        window.clearTimeout(timer);
        copied.value = false;
        copying.value = true;
        message.value = '正在复制…';
        try {
            if (!navigator.clipboard) {
                message.value = '无法复制，请手动复制';
                return;
            }
            await navigator.clipboard.writeText(text);
            if (disposed) {
                return;
            }
            copied.value = true;
            message.value = successMessage;
            timer = window.setTimeout(() => {
                copied.value = false;
                message.value = '';
            }, 2000);
        } catch {
            if (!disposed) {
                message.value = '复制失败，请重试';
            }
        } finally {
            if (!disposed) {
                copying.value = false;
            }
        }
    }

    onUnmounted(() => {
        disposed = true;
        window.clearTimeout(timer);
    });

    return {copied, copying, message, copy};
}
