export async function downloadFile(file: Blob | Response | string, fileName?: string): Promise<Blob> {
    if (file instanceof Blob) {
        const link = document.createElement('a');
        const url = window.URL.createObjectURL(file);
        link.href = url;
        if (fileName) {
            link.download = decodeURIComponent(fileName);
        }
        link.click();
        link.remove();
        // Revoke the object URL after the download has been initiated to avoid leaking it.
        setTimeout(() => window.URL.revokeObjectURL(url), 1000);
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
