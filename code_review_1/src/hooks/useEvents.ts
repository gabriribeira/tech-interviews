import { useEffect, useRef, useState } from "react"
import { fetchEvents } from "../api/eventsApi"
import { Event } from "../types/Event"

export function useEvents(search: string) {

  const [events, setEvents] = useState<Event[]>([])
  const [filteredEvents, setFilteredEvents] = useState<Event[]>([])
  const [loading, setLoading] = useState(false)
  const lastSearch = useRef(search)

  useEffect(() => {

    if (lastSearch.current === search) return

    setLoading(true)

    fetchEvents().then((data) => {

      const filtered = data.filter((event) =>
        event.homeTeam.toLowerCase().includes(search.toLowerCase()) ||
        event.awayTeam.toLowerCase().includes(search.toLowerCase())
      )

      setEvents(data)
      setFilteredEvents(filtered)
      setLoading(false)
      lastSearch.current = search

    })

  }, [search])

  return { events: filteredEvents, loading }
}
