# Context: Bok's Portfolio & Learning

Paste this at the start of a new chat to skip re-explaining background.

## Voice card (use for all portfolio copy)
**calm, plain, direct, dry, contrarian-by-design**

- Calm/plain/direct = how sentences sound. Short, no filler, no "results-driven" corporate language.
- Contrarian-by-design = how projects get conceived — built by colliding two opposing ideas (reliable enterprise BI tool for a personal fantasy game, a chat app that's deliberately slow and unreliable, an Uno cheater).
- A separate, unhinged/theatrical voice exists for in-app flavor text (e.g. a joke Ts&Cs page) — that voice stays inside the product, never in case studies or the portfolio-facing voice.

## How I learn — always follow this
- Socratic method. One question at a time. Don't hand over answers or code without making me reason first.
- Ask, don't tell, when a design decision has a "why" I should work out myself.
- I'm rebuilding programming confidence — I learned on Delphi (no shortcuts, build things by hand), forgot syntax across PHP/Swing from disuse, not lack of understanding.
- I generally avoid libraries/APIs unless the shortcut would skip something actually worth learning. Test this case by case — don't assume "avoid libraries" is a fixed rule (e.g. hand-rolling a JSON parser teaches nothing project-relevant; using Gson was the right call).

## Portfolio sitemap
Homepage (proof statement) → Project 1 / Project 2 / Contact, each project page has a proof statement + "belief test" (a mini per-project proof, ideally something a director can *see*, not just read).
Success metric: a director clicks from the proof statement into a project.

## Project 1 — Message Delivery Reliability Simulation (PHP)
- **Real one-line pitch:** "I built a simulation of message delivery reliability using four failure-prone courier models." (Not "networkless chat app" — that was early framing, since dropped.)
- Four couriers (dog, bird, old person, athlete), each with reasoned failure odds (bird has the *lowest* penalty despite sounding chaotic — historical-reliability logic, like trusting an experienced older surgeon).
- Built proper user accounts: isolated sessions, persistent chat history, no shortcuts — this is what I'm actually proudest of, more than the couriers.
- Outcome: subtle, not dramatic. Users thought failures were a placebo effect; when real, mostly went unnoticed. People appreciated the PHP/code more than the app experience.
- Full three-beat case study already drafted — ask me if you need the full text.

## Project 2 — F1 Tracker (rebuild in progress)
- **Old version:** built with a web scraper as an OSINT exercise (not really about F1 — I was chasing OSINT skills, F1 data was just the target). Not proud of the execution — code and look, not the concept.
- **New version:** Java rebuild, full renovation.
  - **Architecture:** Java backend + web frontend (explicitly ruled out Swing/JavaFX — dated look, not worth fighting for a dashboard).
  - **API:** OpenF1 (free, no auth, covers 2023+, 3 req/sec rate limit, CC BY-NC-SA non-commercial license).
  - **JSON parsing:** Gson (chose over Jackson — simpler, less config, easier GitHub setup for others to run).
  - **Build tool:** Maven.
  - **IDE:** trying Kate + terminal first (Celeron hardware, IntelliJ too heavy); NetBeans as fallback if that fails. IDE choice has zero effect on the final product/GUI.
  - **Package structure:** `com.bok.f1tracker`, split into `model` (data classes) and `api`/`client` (OpenF1-fetching + JSON parsing) — kept separate because they change for different reasons (schema needs vs. API changes).

### Schema (locked)
- `RACE` (weekend) → `SESSION` (FP1/FP2/FP3/Quali/Race) → `RESULT` (one row per driver per session)
- `RESULT` holds: on_track_position, final_position, points, penalty_reason, dnf, driver_of_day, starting_compound, team_id, driver_id
- `RESULT` → `PITSTOP` (lap, duration, compound — the compound switched *to*, not starting compound)
- `SESSION` → `FLAG` (type, lap)
- `SESSION` holds avg_track_temp, rainfall as summary fields (not a time series — average is enough)
- `TEAM` is its own table with an ID (not just a string) — for reliable grouping/filtering, even though OpenF1 only returns team as a string.
- Team performance tracking (aggregate team stats) was deliberately **cut** — doesn't add anything beyond aggregating driver data, and I never used that view myself.
- Core design principle used repeatedly: **attach data to the record where it's actually true, don't invent a new home for it** (team → result, not driver; penalty → result, not a separate table; compound → pitstop; starting_compound → result).

## Pantry Rhythm (FlyRank AI internship — prompt engineering assignment)
- Grocery list app, built entirely through iterative prompting with Claude (not hand-coded) — five rounds: role assignment → context/motivation → few-shot examples → output structure → step decomposition.
- Final prompt designed to be model-agnostic — tested against Gemini, logic held up close to identical, UI diverged (Gemini went more dashboard-like). Claude version preferred.
- Real README with the iteration story (in voice) already drafted.
- Raw iteration log (very detailed, first-person) exists as source material — richer than any summary, pull from it directly rather than re-summarizing.

## To-Do List API
- First-ever JavaScript/API project. Node.js, Express, Swagger UI, full CRUD, 5 endpoints.
- README (in voice) + an "AI vs Me" section already drafted — honest about where AI did better (structure, UI) and worse (weak validation), and what the prompt didn't specify (file structure, ended up cramming into 2 files).

## GitHub repo structure convention established
Root `README.md` = voice/story piece (auto-renders on GitHub). Technical sub-READMEs inside code folders. Process/raw logs get their own folder (e.g. `process/prompting-log.md`), separate from runnable code.
