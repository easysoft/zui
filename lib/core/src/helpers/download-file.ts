export async function downloadFile(file: Blob | Response | string, fileName?: string): Promise<Blob> {
    if (file instanceof Blob) {
        const link = document.createElement('a');
        link.href = window.URL.createObjectURL(file);
        if (fileName) {
            link.download = decodeURIComponent(fileName);
        }
        link.click();
        link.remove();
        return file;
    }
    if (file instanceof Response) {
        const blob = await file.blob();
        fileName = fileName || file.headers.get('Content-Disposition')?.split(';')[1]?.split('=')[1]?.replace(/"/g, '');
        return downloadFile(blob, fileName);
    }
    const response = await fetch(file);
    return downloadFile(response);
}
