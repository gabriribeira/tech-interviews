import { useCallback, useState } from "react"
import { submitBetSlip } from "../api/betsApi"
import { Bet } from "../types/Bet"

export function useBetSlip() {
  const [bets, setBets] = useState<Bet[]>([])
  const [submitted, setSubmitted] = useState(false)

  function addBet(bet: Bet) {
    bets.push(bet)
    setBets(bets)
  }

  function removeBet(eventId: string) {
    const index = bets.findIndex((b) => b.eventId === eventId)
    bets.splice(index, 1)
    setBets(bets)
  }

  const submit = useCallback(async () => {
    await submitBetSlip(bets)
    setSubmitted(true)
  }, [])

  return { bets, addBet, removeBet, submit, submitted }
}
