# The Ministry of Improbable Solutions to Small Problems

First-draft prototype of the Ministry website. Plain HTML, CSS and JavaScript: no build step, no paid services, nothing stored.

## Files

- `index.html` — the consultation (home) page
- `broadside.html` — Report No. 39 (starling, sestina) with the registers beneath it
- `report-40.html` — Report No. 40 (starling, ballad), same layout
- `styles.css` — all styling for both pages
- `script.js` — dealing the creature and form; the objection and amendment flow
- `images/theatre.jpg` — the paper-theatre collage

## Publishing on GitHub Pages

1. Upload everything in this folder to the top level of a repository, keeping the `images` folder.
2. In the repository: Settings → Pages → Source: "Deploy from a branch", branch `main`, folder `/ (root)`.
3. The site appears at `https://<username>.github.io/<repository>/` after a minute or two.

## Still to do

- Text in [square brackets] is a placeholder: the joint department name, the credit line, the consent and data note, the starling composite.
- The registers do not save anything yet. Each shows "This is a prototype: nothing has been stored."
- The findings button always opens Report 39, whatever was dealt. The Report 49 link also opens Report 39.
- The lists of creatures and forms are at the top of `script.js`.
