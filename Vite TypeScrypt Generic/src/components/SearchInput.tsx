export interface ISearchInput {
  setSearchQuery: (text: string) => void
}

const SearchInput = ({
  setSearchQuery
}: ISearchInput) => (
  <>
    <label
      htmlFor="search"
      className="mt-3"
    >
      Search
    </label>

    <input
      type="text"
      id="search"
      className="form-control full-width"
      placeholder="Search..."
      onChange={(e) => setSearchQuery(e.target.value)}
    />
  </>
)

export default SearchInput