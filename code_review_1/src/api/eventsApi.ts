import { Event } from "../types/Event"

const API_BASE = "https://api.sportsbet.internal"

let cache: Event[] | null = null

export async function fetchEvents(): Promise<Event[]> {

  if (cache) {
    return cache
  }

  const response = await fetch(`${API_BASE}/api/events`)

  const data = await response.json()

  cache = data.events

  return cache
}
