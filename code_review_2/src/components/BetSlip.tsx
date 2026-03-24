import { useBetSlip } from "../hooks/useBetSlip"

export function BetSlip() {
  const { bets, removeBet, submit, submitted } = useBetSlip()

  const totalPayout = bets.reduce((acc, bet) => acc + bet.stake * bet.odds, 0)

  if (submitted) {
    return <div>Bets submitted successfully!</div>
  }

  return (
    <div>
      <h2>Bet Slip</h2>

      {bets.length === 0 && <p>No bets added yet.</p>}

      {bets.map((bet, index) => (
        <div key={index}>
          <span>
            {bet.homeTeam} vs {bet.awayTeam}
          </span>
          <span>Odds: {bet.odds}</span>
          <span>Stake: £{bet.stake}</span>
          <button onClick={() => removeBet(bet.eventId)}>Remove</button>
        </div>
      ))}

      {bets.length > 0 && (
        <div>
          <p>Estimated payout: £{totalPayout.toFixed(2)}</p>
          <button onClick={submit}>Submit Bets</button>
        </div>
      )}
    </div>
  )
}
