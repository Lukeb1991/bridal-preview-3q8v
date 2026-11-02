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
    footer:         "made with love for Deema",
    /* small line at the bottom of every page. Delete this block (or leave "text" empty) to hide it. */
    credit: {
      text:     "Made by DreamDay Studio",
      linkText: "Visit our Etsy shop",
      url:      "https://dreamdaystudiostores.etsy.com"
    }
  },

  /* title = game name · sub = tagline · tag = small description line on the home tile */
  games: {
    wordle:      { title: "Love Letters",      sub: "Six tries to say “I do.”",
                   tag: "A Wordle Inspired Game" },
    connections: { title: "The Perfect Match", sub: "16 words, can you tie the knots?",
                   tag: "A Connections Inspired Game" },
    mini:        { title: "Deema’s Crossword", tileTitle: "Deema’s Crossword",
                   sub: "It’s all about the Bride",
                   tag: "A mini crossword celebrating Deema" }
  },

  /* ---------- LOVE LETTERS (Wordle-style) ----------
     First game is always firstWord. "New word" then draws from altWords
     (shuffled, so every word comes up before any repeats).
     All words must be exactly 5 letters. Guesses must be real English words;
     the answers below are always accepted as guesses too. */
  wordle: {
    firstWord: "VOWED",
    altWords:  ["DEEMA","BRIDE","GROOM","ALTAR","AISLE","TOAST","DANCE","HEART","PEARL","TULLE",
                "SUSHI","CHORD","RIFFS","RAVEN","ROSES","CACTI","TEACH","WALTZ","BLISS","MARRY"],
    /* shared message = "<shareTitle> 3/6 <shareEmoji>" + emoji grid + shareLine */
    shareTitle: "Deema’s Bridal Love Letter",
    shareEmoji: "💍",
    shareLine:  "Can you beat that?",
    winTitle:  "Wickedly good! 🖤",
    loseTitle: "So close!"
  },

  /* ---------- THE PERFECT MATCH (Connections-style) ----------
     key = colour: y (yellow, easiest) g (green) b (blue) p (purple, hardest).
     Four words per group. */
  connections: {
    groups: [
      { key: "y", name: "Bride Essentials",        words: ["VEIL","RING","PERFUME","GOWN"] },
      { key: "g", name: "German Cities",           words: ["BONN","COLOGNE","ESSEN","MUNICH"] },
      { key: "b", name: "Things That Last",        words: ["SCARS","SCENTS","MEMORIES","LOVE"] },
      { key: "p", name: "Alternative Rock Artists",words: ["EVANESCENCE","BAUHAUS","CURE","MUSE"] }
    ],
    shareLine: "I made all the right connections at Deema’s Bridal Shower!",
    winTitle:  "Wickedly good! 🖤"
  },

  /* ---------- DEEMA'S CROSSWORD (mini crossword) ----------
     layout: "." = open square, "#" = black square.
     answers/clues are keyed "row,col,A|D" = where the word STARTS
     (row 0 / col 0 = top-left) and whether it runs Across or Down.
     Numbering is automatic. */
  mini: {
    /* layout: "." = open square, "#" = black square (7 x 7).
       (To offer several puzzles side by side, wrap them as mini.options = [ {label, layout, answers, clues}, ... ]
        and a row of tabs appears above the board.) */
    layout: [
      "#......",
      ".##.###",
      ".....#.",
      ".#.#.#.",
      ".#.#.#.",
      ".#.#.#.",
      "##....."
    ],
    answers: {
      "0,1,A": "STRING", "2,0,A": "PIANO", "6,2,A": "DANKE",
      "0,3,D": "RUN", "1,0,D": "SPICY", "2,2,D": "AHMED", "2,4,D": "OCEAN", "2,6,D": "BRIDE"
    },
    clues: {
      "0,1,A": "Pluck one on Deema’s guitar or ukulele",
      "2,0,A": "Instrument Deema plays, with multiple keys",
      "6,2,A": "How to say “thank you” in German – Deema’s new home",
      "0,3,D": "Don’t ___ down the aisle – take your time!",
      "1,0,D": "___ salmon roll – one of Deema’s favourite sushi rolls",
      "2,2,D": "The lucky man marrying Deema!",
      "2,4,D": "What Deema will cross to begin her new life in Germany",
      "2,6,D": "Deema is the beautiful ___!"
    },
    /* shared message = "<shareTitle> <time> <shareEmoji>" + shareLine. {time} = e.g. 1:23 */
    shareTitle: "Deema’s Bridal Crossword",
    shareEmoji: "⏱️",
    shareLine:  "Can you beat that?",
    winTitle: "Perfectly puzzled!",
    winSub:   "You solved it in {time}. 🥀"
  }
};
