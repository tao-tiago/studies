import { ISorter } from "../interfaces/Sorter";

export interface ISort<T> {
  object: T extends {} ? T : never;
  setProperty: (propertyType: ISorter<T>) => void;
}

export const Sort = <T,>({ object, setProperty }: ISort<T>) => {

  const handleSelect = (e: any) => {
    const arrContent = e.target.value.split("-")

    setProperty({
      property: arrContent[0] as any,
      isDescending: arrContent[1] === "desc"
    })
  }

  return (
    <>
      <label
        htmlFor="sort"
        className="mt-3"
      >
        Sort
      </label>

      <select name="sort" id="sort" className="custom-select" onChange={handleSelect}>
        {Object.keys(object).map(key => {
          return (
            <>
              <option key={`${key}-asc`} value={`${key}-asc`}>
                Sort by {key} ascending
              </option>

              <option key={`${key}-desc`} value={`${key}-desc`}>
                Sort by {key} descending
              </option>
            </>
          )
        })}
      </select>
    </>
  )
}