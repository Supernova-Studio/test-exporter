import { FileHelper } from "@supernovaio/export-helpers";
import { ExporterConfiguration } from "config";

export function createExporterConfigurationFile(
  data: ExporterConfiguration,
) {
  return FileHelper.createTextFile({
    relativePath: "../../out",
    content: JSON.stringify(data, null, 2),
    fileName: "exporter-configuration.json",
  });
}
