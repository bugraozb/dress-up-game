# QA / Smoke Test Log

Date: 2025-11-24  
Build: Pilot budget + history release

| # | Scenario | Steps | Expected Result | Status |
|---|----------|-------|-----------------|--------|
| 1 | Desktop Chrome – EN flow | Select EN → Start Game → pick valid outfit within budget → Finish | Budget counters update, selection blocked when exceeding coins, score + impact screen appear | ✅ Pass |
| 2 | Desktop Chrome – Budget guard | Attempt to select new item that would exceed budget | Selection prevented with localized alert, previous choice remains | ✅ Pass |
| 3 | Undo / Reset | Select items, use Undo then Reset | Undo restores prior selection, Reset clears choices and budget spend resets | ✅ Pass |
| 4 | Score + History | Finish outfit → view "Did You Know?" + recent outfits list → export CSV | Contextual tip references saved resources, latest combo added to history, CSV downloads | ✅ Pass |
| 5 | Mobile Safari (Responsive) | Use device toolbar to simulate 390px width → full flow | Layout stacks vertically, budget widget and buttons remain usable, scrolling enabled | ✅ Pass |

Notes:
- Tests executed manually in Chrome DevTools device emulator for mobile coverage.
- No blocking issues observed; minor cosmetic tweaks can be handled post-pilot if discovered.

