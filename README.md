# Clacton-on-Sea visitor guide

A Tendring-coast visitor guide for **Clacton-on-Sea**, Little Clacton, Holland-on-Sea, Jaywick and St Osyth.

**Live site:** https://clacton.cybush.uk

The app is a TanStack Start + Vite + React guide (hotspots, year-round events, itineraries, practical tips, saved list) deployed as a Cloudflare Worker.

## Local development

```bash
npm ci
npm run dev
```

Dev server: `http://localhost:8080`

```bash
npm run build
```

## Deploy to clacton.cybush.uk

Cloudflare account `f027194dcc0be7e3812e673468bab58d`, zone `cybush.uk`.

```bash
npm run deploy
```

That runs `vite build` then `wrangler deploy --config dist/server/wrangler.json`.

`wrangler.jsonc` (source of truth before the build copies it):

| Field | Value |
| --- | --- |
| Worker name | `clacton` |
| Account | `f027194dcc0be7e3812e673468bab58d` |
| Route | `clacton.cybush.uk/*` |
| Zone | `cybush.uk` |

This Worker does **not** bind Eastbourne’s `games-db` D1 database. Leftover auth/D1 helper code from the shared template is unused by the guide UI.

After the first deploy, confirm the custom hostname in the Cloudflare dashboard if DNS is not already pointed at the Worker.

## Photos

Attraction photos are the verified Wikimedia / Geograph URLs listed in `src/data/attractions.ts`. Each card stores `imageCredit`, `imageLicense` and `imageSourceUrl`. Credits appear on photos, in the footer, and (where required by the licence) as links.

No Unsplash placeholders.

## Content notes

- **Trains:** Greater Anglia, London Liverpool Street → Clacton-on-Sea, typically about 1 hour 26–32 minutes, direct.
- **Airshow 2026:** Thursday 27 & Friday 28 August, seafront; twilight display on the Thursday. Confirm at [clactonairshow.com](https://clactonairshow.com/).
- **Carnival 2026:** Week from 7 August; street procession Saturday 8 August; Sunday show 9 August; run events 17 August. Confirm at [clactoncarnival.org](http://www.clactoncarnival.org/eventscw.htm).
- **Shopping:** Use **Clacton Shopping Village** (Stephenson Road West), not “Factory Outlet”, in visitor-facing copy.
- Clacton Pavilion is not given its own hotspot card (no modern CC photo).
