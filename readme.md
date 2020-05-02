# Tabletop Simulator Scripted Yahtzee
Subscribe to the [workshop item](https://steamcommunity.com/sharedfiles/filedetails/?id=2071922761) in steam

## How it works
This mod uses the atom tabletop simulator `require()` bundling to pack these
different files into a single global script.

In order to make that work, configure your Atom tabletop simulator extension to
load in files from the directory **above** the yahtzee directory. Then add a
global script with the only contents being: `require("yahtzee/main")`. Atom
should manage bundling the main.ttslua file in when you save from Atom.

## Custom assets
We use storybook to facilitate building and rendering these custom assets. You
can start it by running:

```
npm i
npm run storybook
```
A browser tab with storybook should open up and you should see the different
stories available with buttons to render.

We use Vue to render our custom assets first in HTML then to high fidelity PNGs.
This rendering layer isn't perfect and sometimes needs a little finesse to get
rendering right. A couple things I ran into so far:

1. 1px borders can sometimes disappear if the overall height is odd or prime,
add 1px padding or more to something and it should reappear
2. Webfonts need to be referenced in local css and not in linked webfont css. So
to add a font, copy out the fontfamily declarations from the font provided by
the font cdn
