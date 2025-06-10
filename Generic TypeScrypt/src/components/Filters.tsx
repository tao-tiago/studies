import { IFilter } from "../interfaces/Filter";

interface IFiltersProps<T> {
  object: T extends {} ? T : never;
  properties: Array<IFilter<T>>
  handleCheckbox: (property: IFilter<T>) => void
}

export const Filters = <T,>({
  object,
  properties,
  handleCheckbox
}: IFiltersProps<T>) => {

  return (
    <div className="p-1 my-2">
      <label className="mt-3">Filter</label>
      <br />

      {Object.keys(object).map((key) => {
        return (
          <>
            <input
              className="m-1 ml-3"
              type="checkbox"
              id={`${key}-true`}
              value={key}
              checked={properties.some(property => property.property === key && property.isTruthySelected)}
              onChange={() => handleCheckbox({ property: key as any, isTruthySelected: true })}
            />
            <label htmlFor={`${key}-true`}>{key} is truthy</label>

            <input
              className="m-1 ml-3"
              type="checkbox"
              id={`${key}-false`}
              value={key}
              checked={properties.some(property => property.property === key && !property.isTruthySelected)}
              onChange={() => handleCheckbox({ property: key as any, isTruthySelected: false })}
            />
            <label htmlFor={`${key}-false`}>{key} is falsy</label>

            <br />
          </>
        )
      })}
    </div>
  )
}