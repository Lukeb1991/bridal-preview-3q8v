/* ============================================================
   CONTENT — everything a customer's order changes lives here.
   Edit the text/answers below; colours + fonts are in theme.css.
   (Also update the <title>/<meta> lines at the top of index.html.)
   ============================================================ */
window.GAME_CONFIG = {

  /* true = shows a red "PREVIEW" band on every page (use for the draft link).
     false = clean final version. */
  preview: true,

  site: {
    name:           "Deema’s Bridal Shower",
    backLabel:      "Games",
    eyebrow:        "Dearly beloved, come play",
    mastheadTop:    "Deema’s",
    mastheadAccent: "Bridal Shower",
    subhead:        "The Bridal Shower Games\nSaturday, November 7, 2026",
    footer:         "made with love for Deema"
  },

  games: {
    wordle:      { title: "Wordle",      sub: "Six tries to say “I do.”",           tag: "5 letters" },
    connections: { title: "Connections", sub: "Sixteen words. Four secrets.",       tag: "4 groups"  },
    mini:        { title: "The Mini",    tileTitle: "Mini",
                   sub: "A little crossword, all about Deema.",                      tag: "5 × 5"     }
  },

  /* ---------- WORDLE ----------
     First game is always firstWord. "New word" then draws at random
     from altWords. All words must be exactly 5 letters. */
  wordle: {
    firstWord: "VOWED",
    altWords:  ["SUSHI","BRIDE","ROSES","RAVEN","TOAST","WALTZ","CRYPT","ANGST","TIARA","GUEST"],
    shareLine: "I said ‘I do’ at Deema’s Bridal Shower and all I got was this lousy Wordle",
    winTitle:  "Wickedly good! 🖤",
    loseTitle: "So close!"
  },

  /* ---------- CONNECTIONS ----------
     key = colour: y (yellow, easiest) g (green) b (blue) p (purple, hardest).
     Four words per group. */
  connections: {
    groups: [
      { key: "y", name: "Bride",                 words: ["VEIL","RING","PERFUME","GOWN"] },
      { key: "g", name: "German Cities",         words: ["BONN","COLOGNE","ESSEN","BAVARIA"] },
      { key: "b", name: "Things That Last",      words: ["SCARS","SCENTS","MEMORIES","LOVE"] },
      { key: "p", name: "Gothic Musical Artists",words: ["CURE","PIERCE","EVANESCENCE","BAUHAUS"] }
    ],
    shareLine: "I made all the right connections at Deema’s Bridal Shower!",
    winTitle:  "Wickedly good! 🖤"
  },

  /* ---------- MINI CROSSWORD ----------
     layout: "." = open square, "#" = black square.
     answers/clues are keyed "row,col,A|D" = where the word STARTS
     (row 0 / col 0 = top-left) and whether it runs Across or Down.
     Numbering is automatic. */
  mini: {
    layout: [
      ".....",
      ".#.#.",
      ".....",
      ".#.#.",
      "....."
    ],
    answers: {
      "0,0,A": "ROLLS", "2,0,A": "PIANO", "4,0,A": "DANKE",
      "0,0,D": "RAPID", "0,2,D": "LEARN", "0,4,D": "SCORE"
    },
    clues: {
      "0,0,A": "Sushi staples, like California and spicy tuna",
      "2,0,A": "Black-and-white keys Deema plays",
      "4,0,A": "“Thanks!” in German — her new home",
      "0,0,D": "Fast and furious, like a punk rock tempo",
      "0,2,D": "What Deema’s students do in her Arizona classroom",
      "0,4,D": "Sheet music for her guitar or ukulele"
    },
    winTitle: "Perfectly puzzled!",
    winSub:   "You solved the Mini. 🥀"
  }
};
