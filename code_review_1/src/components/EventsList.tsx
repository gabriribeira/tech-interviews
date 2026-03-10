import { useState } from "react"
import { useEvents } from "../hooks/useEvents"
import { SearchBar } from "./SearchBar"

export function EventsList() {

  const [search, setSearch] = useState("")
  const [searchHistory, setSearchHistory] = useState<string[]>([])

  const { events, loading } = useEvents(search)

  function handleSearch(value: string) {
    searchHistory.push(value)
    setSearchHistory(searchHistory)
    setSearch(value)
  }

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <div>

      <SearchBar onSearch={handleSearch} />

      {[...events].sort((a, b) => a.homeTeam.localeCompare(b.homeTeam)).map((event, index) => (

        <div key={index}>

          <span>
            {event.homeTeam} vs {event.awayTeam}
          </span>

          <button onClick={() => placeBet(event)}>
            Bet ({event.odds})
          </button>

        </div>

      ))}

    </div>
  )
}

function placeBet(event: any) {
  console.log("bet placed", event)
}
