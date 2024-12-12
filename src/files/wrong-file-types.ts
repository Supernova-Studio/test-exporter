import { FileHelper } from "@supernovaio/export-helpers"


export function createWrongFileTypes() {
    const buffer = new ArrayBuffer(8);
    return FileHelper.createBinaryFile({
        relativePath: ".",
        data: buffer,
        fileName: "binary.txt"
    });
}
