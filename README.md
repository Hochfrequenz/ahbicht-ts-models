# ahbicht-ts-models

This repository contains the NPM package [`ahbicht-ts-models`](https://www.npmjs.com/package/ahbicht-ts-models). The package contains the [AHBicht](https://github.com/Hochfrequenz/ahbicht) data model as TypeScript interfaces.

<img src="https://raw.githubusercontent.com/Hochfrequenz/ahbicht/main/docs/_static/ahbicht-logo.png" alt="AHBicht Logo" style="width:200px;" />

This repository contains no logic, just types for ease of use in any frontend project.

The files in [src](src/) are **completly autogenerated** from [JSON Schemas](https://github.com/Hochfrequenz/ahbicht/tree/main/json_schemas), so they're inherently consistent with the AHBicht Python code. Any push to the Python repos `json_schemas` directory will create a commit in this repository.

### Installation

```bash
npm install ahbicht-ts-models
```

### Example

```ts
import axios from "axios";
import {
  CategorizedKeyExtract,
  ContentEvaluationResult,
} from "ahbicht-ts-models";
axios
  .get("https://ahbicht.azurewebsites.net/api/CategorizedKeyExtract", {
    params: {
      expression: "Muss ([2]O[3])[902][501]",
    },
  })
  .then(function (ckeResponse) {
    let categorizedKeyExtract: CategorizedKeyExtract = ckeResponse.data;
    console.log(
      "Retrieved categorized keys from AHBicht: ",
      categorizedKeyExtract
    );
    // You can now extract the key of the packages, RCs, FCs and hints from the categorized key extract.
    // Then you could build a content evaluation result from it; here we hard code it for simplicity:
    let contentEvaluationResult: ContentEvaluationResult = {
      requirement_constraints: { "2": "FULFILLED", "3": "UNFULFILLED" },
      format_constraints: { "902": { format_constraint_fulfilled: true } },
      hints: { "501": "muss 42 nachkommastellen haben" },
    };
    axios
      .post(
        "https://ahbicht.azurewebsites.net/api/ParseExpression",
        contentEvaluationResult,
        {
          params: {
            expression: "Muss ([2]O[3])[902][501]",
          },
        }
      )
      .then(function (cerResponse) {
        let contentEvaluationResult: ContentEvaluationResult = cerResponse.data;
        console.log(contentEvaluationResult);
      });
  });
```

## Release Workflow (CI/CD)

- Update the source code (automatically for [`/src`](/src), manually for at least the version bump in [`index.d.ts`](index.d.ts))
- click on "[Draft a new Release](https://github.com/Hochfrequenz/ahbicht-ts-models/releases/new)" in the right sidebar on Github
- Choose a tag that will be pushed to the selected branch (should be main in most cases)
- Autogenerate Release Notes

## Detailed Information on the AHBicht Types

Please refer to the official [AHBicht docs](https://ahbicht.readthedocs.io/en/latest/api/ahbicht.html).

### Mappings

- [`ConditionKeyConditionTextMapping`](https://ahbicht.readthedocs.io/en/latest/api/ahbicht.html?highlight=ConditionKeyConditionTextMapping#ahbicht.mapping_results.ConditionKeyConditionTextMapping)
- [`PackageKeyConditionExpressionMapping`](https://ahbicht.readthedocs.io/en/latest/api/ahbicht.html?highlight=PackageKeyConditionExpressionMapping#ahbicht.mapping_results.PackageKeyConditionExpressionMapping)

### Parsing Results & Helper

- [`CategorizedKeyExtract`](https://ahbicht.readthedocs.io/en/latest/api/ahbicht.content_evaluation.html#module-ahbicht.content_evaluation.categorized_key_extract)

### Evaluation Results

- [`AhbExpressionEvaluationResult`](https://ahbicht.readthedocs.io/en/latest/api/ahbicht.html?highlight=AhbExpressionEvaluationResult#ahbicht.evaluation_results.AhbExpressionEvaluationResult)
- [`ContentEvaluationResult`](https://ahbicht.readthedocs.io/en/latest/api/ahbicht.content_evaluation.html?highlight=ContentEvaluationResult#ahbicht.content_evaluation.content_evaluation_result.ContentEvaluationResult)
