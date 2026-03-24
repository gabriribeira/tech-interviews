# Pull Request: Add Bet Slip feature

## What does this PR do?

Implements the Bet Slip panel requested in ticket **BETS-589**.

Users can now review all bets they have added to their slip, see an estimated payout, remove individual bets, and submit the full slip with a single click.

## How to test

1. Run the app locally.
2. Add one or more bets from the events list.
3. Open the Bet Slip panel.
4. Verify bets are listed with odds and stake.
5. Click **Remove** on any bet — it should disappear from the list.
6. Click **Submit Bets** — you should see the success confirmation message.
