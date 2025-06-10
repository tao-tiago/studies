export interface ISorter<T> {
  property: keyof T
  isDescending: boolean
}