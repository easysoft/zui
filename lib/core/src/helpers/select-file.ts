export function selectFile(options?: string | {accept?: string; multiple?: false | undefined}): Promise<File | null>;

export function selectFile(options: {accept?: string; multiple?: true}): Promise<FileList | null>;

/**
 * Select file from file system.
 * @param options
 */
export function selectFile(options?: string | {accept?: string; multiple?: boolean}): Promise<File | FileList | null> {
    return new Promise((resolve) => {
        if (typeof options === 'string') {
            options = {accept: options};
        }
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = options?.accept || '*/*';
        input.multiple = options?.multiple || false;
        input.onchange = () => {
            if (input.files) {
                resolve(input.multiple ? input.files : input.files[0]);
            } else {
                resolve(null);
            }
            input.remove();
        };
        input.click();
    });
}
