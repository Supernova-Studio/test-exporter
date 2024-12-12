![TEst Exporter](https://raw.githubusercontent.com/Supernova-Studio/exporters/main/exporters/css/resources/header.png)

# Test Exporter

The test exporter for Supernova. This allows us to test various configuration inputs to ensure our exporters are working properly.

## Configuration Options

Here is a list of all the configuration options this exporter provides:

- **boolean1:** Boolean option to toggle Boolean 1. Default: `true`.

- **disclaimer:** Set the text of the disclaimer. Only shown when `boolean1` is `true`. Default: `"Some default text"`.

- **anotherBoolean:** A boolean option with no valid dependency (depends on `xy` which does not exist). This option will not be shown in the UI.

- **boolean2:** Boolean option for Boolean 2. Default: `true`.

- **noCategoryBoolean:** Boolean option with no category. Default: `true`.

- **deprecatedEnumOption:** Select from a deprecated set of cases (uses an array of options). Default: `"camelCase"`. Options:

  - `camelCase`: Example: `myVariableName`
  - `capitalCase`: Example: `My Variable Name`
  - `constantCase`: Example: `MY_VARIABLE_NAME`
  - `dotCase`: Example: `my.variable.name`
  - `headerCase`: Example: `My-Variable-Name`
  - `noCase`: Example: `my variable name`
  - `paramCase`: Example: `my-variable-name`
  - `pascalCase`: Example: `MyVariableName`
  - `pathCase`: Example: `my/variable/name`
  - `sentenceCase`: Example: `My variable name`
  - `snakeCase`: Example: `my_variable_name`

- **enumOption:** Select from a set of cases. Default: `"camelCase"`. Options:

  - `camelCase`: Example: `myVariableName`
  - `capitalCase`: Example: `My Variable Name`
  - `constantCase`: Example: `MY_VARIABLE_NAME`
  - `dotCase`: Example: `my.variable.name`
  - `headerCase`: Example: `My-Variable-Name`
  - `noCase`: Example: `my variable name`
  - `paramCase`: Example: `my-variable-name`
  - `pascalCase`: Example: `MyVariableName`
  - `pathCase`: Example: `my/variable/name`
  - `sentenceCase`: Example: `My variable name`
  - `snakeCase`: Example: `my_variable_name`

- **uncategorizedEnum:** An enum option without a category. Default: `"option1"`. Options:

  - `option1`: First uncategorized option
  - `option2`: Second uncategorized option

- **emptyEnum:** An enum with no available options. This option will not be shown in the UI.

- **enumDependingOnBoolean1:** Enum option dependent on `boolean1`. Only shown when `boolean1` is `true`. Default: `"option1"`. Options:

  - `option1`: First option
  - `option2`: Second option

- **number1:** Numeric value for Number 1. Default: `3`.

- **number2:** Numeric value for Number 2. Default: `2`.

- **number3:** Numeric value with decimals. Default: `3.14`.

- **simpleString:** A simple text string. Default: `"Hello world"`.

- **multilineString:** A text string with multiple lines. Default:

- **specialCharString:** A text string containing special characters. Default: `"Hello @ world! #$%"`.

- **urlString:** A text string containing a URL with parameters. Default: `"https://example.com/path?param=value"`.

- **styleFileNames:** Object defining the names of style files to be generated. Default:
  - `Color`: `colors.css`
  - `Typography`: `typography.css`
  - `Dimension`: `dimensions.css`
  - `Size`: `sizes.css`
  - `Space`: `spaces.css`
  - `Opacity`: `opacities.css`
  - `FontSize`: `font-sizes.css`
  - `LineHeight`: `line-heights.css`
  - `LetterSpacing`: `letter-spacings.css`
  - `ParagraphSpacing`: `paragraph-spacings.css`
  - `BorderWidth`: `border-widths.css`
  - `BorderRadius`: `radii.css`
  - `Duration`: `durations.css`
  - `ZIndex`: `z-indices.css`
  - `Shadow`: `shadows.css`
  - `Border`: `borders.css`
  - `Gradient`: `gradients.css`
  - `String`: `strings.css`
  - `ProductCopy`: `product-copy.css`
  - `FontFamily`: `font-families.css`
  - `FontWeight`: `font-weights.css`
  - `TextCase`: `text-cases.css`
  - `TextDecoration`: `text-decorations.css`
  - `Visibility`: `visibility.css`
  - `Blur`: `blurs.css`
