import { FileHelper } from "@supernovaio/export-helpers"


export function createWrongFileTypes() {
    const data = Buffer.from("wrong-file-types");
    return FileHelper.createBinaryFile({
        relativePath: "out",
        data,
        fileName: "binary.txt"
    });
}
