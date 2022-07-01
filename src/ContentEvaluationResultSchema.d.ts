/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type ErrorMessage = string | null;
export type FormatConstraintFulfilled = boolean;
export type Hints1 = string | null;
export type Id = string | null;
export type Packages = {
  [k: string]: Packages1;
} | null;
export type Packages1 = string;
export type RequirementConstraints1 = string;

export interface ContentEvaluationResultSchema {
  format_constraints?: FormatConstraints;
  hints?: Hints;
  id?: Id;
  packages?: Packages;
  requirement_constraints?: RequirementConstraints;
  [k: string]: unknown;
}
export interface FormatConstraints {
  [k: string]: EvaluatedFormatConstraintSchema;
}
export interface EvaluatedFormatConstraintSchema {
  error_message?: ErrorMessage;
  format_constraint_fulfilled: FormatConstraintFulfilled;
}
export interface Hints {
  [k: string]: Hints1;
}
export interface RequirementConstraints {
  [k: string]: RequirementConstraints1;
}
