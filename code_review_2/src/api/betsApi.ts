import { Bet } from "../types/Bet"

const API_BASE = "https://api.sportsbet.internal"

export async function submitBetSlip(bets: Bet[]): Promise<void> {
  await fetch(`${API_BASE}/api/bets`, {
    method: "POST",
    body: JSON.stringify({ bets }),
  })
}
