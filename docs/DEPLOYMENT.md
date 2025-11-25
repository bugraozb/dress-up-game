# Deployment Playbook (Pilot)

Target host: **GitHub Pages** (static)  
Branch strategy: `main` → `gh-pages` (build-free)

## Pre-flight Checklist
1. `npm install -g serve` (once)  
2. `serve .` locally → verify:
   - Language toggle, budget widget, undo/reset
   - Finish flow + history export
3. `npm run lint` *(not required yet but recommended once tooling is added)*  
4. Update `docs/QA.md` + `docs/RELEASE_NOTES.md` if new changes landed.

## Publish Steps
1. Build artifacts are already in repo (`index.html`, `src`, `assets`, `docs`). No bundling needed.
2. From `main`, run:
   ```bash
   git checkout --orphan gh-pages
   git rm -rf .
   git checkout main -- index.html src assets docs README.md
   git commit -m "Deploy pilot build"
   git push -f origin gh-pages
   git checkout main
   ```
   (Or configure GitHub Pages → *Deploy from branch* → `main` + `/` root.)
3. Tag release:
   ```bash
   git tag v0.1.0-pilot
   git push origin v0.1.0-pilot
   ```
4. Validate https://<user>.github.io/<repo>/ in desktop + mobile.

## Rollback
- Revert to previous tag: `git checkout v0.0.x && git push origin gh-pages --force`.

## Monitoring
- Gather qualitative feedback + export CSV from in-game history after play sessions.
- Capture issues in tracker referencing the pilot tag.

