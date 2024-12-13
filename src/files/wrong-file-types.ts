import { FileHelper } from "@supernovaio/export-helpers"


export function generateBinaryFileWithTxtExtension() {
    const buffer = new ArrayBuffer(8);
    const view = new Uint8Array(buffer);
    for (let i = 0; i < view.length; i++) {
        view[i] = Math.floor(Math.random() * 256);
    }
    return FileHelper.createBinaryFile({
        relativePath: ".",
        data: buffer,
        fileName: "binary.txt"
    });
}
