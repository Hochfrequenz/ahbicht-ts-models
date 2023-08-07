/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type FormatConstraintKeys1 = string;
export type FormatConstraintKeys = FormatConstraintKeys1[];
export type HintKeys1 = string;
export type HintKeys = HintKeys1[];
export type PackageKeys1 = string;
export type PackageKeys = PackageKeys1[];
export type RequirementConstraintKeys1 = string;
export type RequirementConstraintKeys = RequirementConstraintKeys1[];
export type TimeConditionKeys1 = string;
export type TimeConditionKeys = TimeConditionKeys1[];

export interface CategorizedKeyExtractSchema {
  format_constraint_keys?: FormatConstraintKeys;
  hint_keys?: HintKeys;
  package_keys?: PackageKeys;
  requirement_constraint_keys?: RequirementConstraintKeys;
  time_condition_keys?: TimeConditionKeys;
  [k: string]: unknown;
}
