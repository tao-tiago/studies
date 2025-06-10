export interface IFilter<T> {
  property: keyof T
  isTruthySelected: boolean
}