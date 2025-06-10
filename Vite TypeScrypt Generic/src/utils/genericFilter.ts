import { IFilter } from './../interfaces/Filter';
/**
 * 
 * @param object 
 * @param filterProperties 
 * @returns
 * False
 * object => undefined, null, NaN
 * string => ""
 * number => 0
 * boolean => false
 */
export const genericFilter = <T>(object: T, filterProperties: Array<IFilter<T>>): boolean => {

  return filterProperties.every(filterProperty => {
    const { property, isTruthySelected } = filterProperty
    return isTruthySelected ? object[property] : !object[property]
  })
}