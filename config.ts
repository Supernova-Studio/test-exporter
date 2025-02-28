import { StringCase } from "@supernovaio/export-helpers"
import { TokenType } from "@supernovaio/sdk-exporters"

/**
 * Main configuration of the exporter - type interface. Default values for it can be set through `config.json` and users can override the behavior when creating the pipelines.
 */
export type ExporterConfiguration = {
  /** Boolean option */
  boolean1: boolean
  /** This should display only when boolean1 is true */
  disclaimer: string
  /** This boolean show false as default */
  anotherBoolean: boolean
  /** Some description for boolean 2 */
  boolean2: boolean
  /** Some description for boolean 2 */
  noCategoryBoolean: boolean
  /** This option uses options array that was later replaced by an object */
  deprecatedEnumOption: StringCase
  /** This option uses options array that was later replaced by an object */
  enumOption: StringCase
  /** This enum is only shown when boolean1 is true */
  enumDependingOnBoolean1: "option1" | "option2"
  /** A number */
  number1: number
  /** A number */
  number2: number
  /** A number with decimals */
  number3: number
  /** A basic text string without any special characters */
  simpleString: string
  /** A text string that contains multiple lines */
  multilineString: string
  /** A text string containing special characters */
  specialCharString: string
  /** A string containing a URL with parameters */
  urlString: string
  /** Name of each file that will be generated. Tokens are grouped by the type and will land in each of those files */
  styleFileNames: Record<TokenType, string>

  /** A code block */
  codeblock: string


}
