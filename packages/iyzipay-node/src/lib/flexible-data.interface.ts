export type FlexibleValue =
  | string
  | number
  | boolean
  | FlexibleData
  | null
  | undefined;
export interface FlexibleData {
  [key: string]: FlexibleValue | FlexibleValue[];
}
