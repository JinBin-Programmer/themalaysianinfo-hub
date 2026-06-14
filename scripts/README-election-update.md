# Updating the `/pilihanraya` page for the 2026 state elections

Key dates (SPR, announced 12 Jun 2026):

| Election            | Nomination | Early vote | **Polling day**   | Seats |
|---------------------|-----------|-----------|-------------------|-------|
| PRN Johor (16th)    | 27 Jun    | 7 Jul     | **11 Jul 2026**   | 56    |
| PRN N. Sembilan(16) | 18 Jul    | 28 Jul    | **1 Aug 2026**    | 36    |

The page already shows a live countdown + key dates (top of `/pilihanraya`).
Until results are in, each state's seat list shows the **previous** election as a
baseline. Here is the checklist to flip a state to its 2026 result after polling.

## On / after polling night

1. **Get the data.** Wait for official results, then check the TindakMalaysia repo
   folder (`2026-JOHOR-STATE-ELECTIONS` / `2026-NEGERI-SEMBILAN-STATE-ELECTIONS`)
   for the published CSVs, or use SPR / data.gov.my. Confirm the exact filenames.

2. **Edit `scripts/etl-seats.cjs`** (election-night block is pre-written, commented):
   - **Johor:** comment out the "Johor 2022" `dunWinners(...)` call, uncomment the
     "Johor PRN16 (2026)" call. Fix filenames if they differ.
   - **Negeri Sembilan:** add `"negeri"` to the `SUPERSEDED` set near the top
     (its 2023 result comes from `prn15`), then uncomment the "N. Sembilan 2026" call.

3. **Regenerate** the seat data and verify the per-state counts print correctly
   (Johor `N:56`, Negeri `N:36`, totals 222 / 600):
   ```
   node scripts/etl-seats.cjs
   ```

4. **Update `_lib/elections.ts`** for that state (the summary panel):
   `electionBm`/`electionEn` → the 2026 date, `results[]` → the new coalition
   tally, and `gov` / `leaderName` / `leaderSinceBm`/`En` once a new MB is sworn in.

5. **Update `_lib/upcoming.ts`:** set `resultsReady: true` for that state. (When
   both are done you can also remove the entry so it drops off the "Upcoming" list.)

6. **Build & deploy:**
   ```
   npm run build
   git add -A && git commit -m "PRN <state> 2026 results" && git push
   ```

## Data sources
- Parliament (GE15) + 2023 DUN: https://github.com/Thevesh/analysis-election-msia
- Other state elections: https://github.com/TindakMalaysia/HISTORICAL-ELECTION-RESULTS
- Official: https://www.spr.gov.my · voter check: https://mysprsemak.spr.gov.my
