import widgets from "./mocks/widgets"
import people from "./mocks/people"
import SearchInput from "./components/SearchInput"
import { useState } from "react"
import { genericSearch } from "./utils/genericSearch"
import { genericSort } from "./utils/genericSort"
import IWidget from "./interfaces/Widget"
import { IFilter } from "./interfaces/Filter"
// import IPerson from "./interfaces/Person"
import { ISorter } from "./interfaces/Sorter"
import { Sort } from "./components/Sort"
import Widget from "./components/Widget"
import { genericFilter } from "./utils/genericFilter"
import { Filters } from "./components/Filters"

function App() {
  const [searchQuery, setSearchQuery] = useState<string>("")
  const [widgetFilterProperties, setWidgetFilterProperties] = useState<Array<IFilter<IWidget>>>([])

  const [sortProp, setSortProp] = useState<ISorter<IWidget>>({
    property: "title", isDescending: false
  })

  return (
    <>
      <SearchInput setSearchQuery={setSearchQuery} />

      <h2>Widgets:</h2>
      <Sort
        object={widgets[0]}
        setProperty={(propertyType) => {
          setSortProp(propertyType)
        }}
      />

      <br />

      <Filters
        object={widgets[0]}
        properties={widgetFilterProperties}
        handleCheckbox={(property) => {
          const propertyMatch = widgetFilterProperties.some(
            widgetFilterProperty =>
              widgetFilterProperty.property === property.property
          )

          const fullMatch = widgetFilterProperties.some(
            widgetFilterProperty =>
              widgetFilterProperty.property === property.property &&
              widgetFilterProperty.isTruthySelected === property.isTruthySelected
          )

          if (fullMatch) {

            setWidgetFilterProperties(
              widgetFilterProperties.filter(widgetFilterProperty =>
                widgetFilterProperty.property !== property.property
              ),
            )

          } else if (propertyMatch) {

            setWidgetFilterProperties([
              ...widgetFilterProperties.filter(widgetFilterProperty =>
                widgetFilterProperty.property !== property.property
              ),
              property
            ])

          } else {

            setWidgetFilterProperties([
              ...widgetFilterProperties,
              property
            ])

          }
        }}
      />

      {widgets
        .filter((widget) => genericSearch(widget, ["title", "description"], searchQuery))
        .filter((widget) => genericFilter(widget, widgetFilterProperties))
        .sort((a, b) => genericSort(a, b, sortProp))
        .map(widget => {
          return (
            <Widget {...widget} />
          )
        })}


      <h2>People:</h2>

      {people
        .filter((person) => genericSearch(person, ["firstName", "lastName"], ""))
        .map(widget => {
          return (
            <h3>{widget.firstName}</h3>
          )
        })}
    </>
  )
}

export default App
