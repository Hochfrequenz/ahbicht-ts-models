/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type ConditionKey = string;
export type ConditionText = string | null;
export type EdifactFormat =
  | "APERAK"
  | "COMDIS"
  | "IFTSTA"
  | "INSRPT"
  | "INVOIC"
  | "MSCONS"
  | "ORDCHG"
  | "ORDERS"
  | "ORDRSP"
  | "PRICAT"
  | "QUOTES"
  | "REMADV"
  | "REQOTE"
  | "PARTIN"
  | "UTILMD"
  | "UTILTS";

export interface ConditionKeyConditionTextMappingSchema {
  condition_key?: ConditionKey;
  condition_text?: ConditionText;
  edifact_format?: EdifactFormat;
  [k: string]: unknown;
}
