import { mount } from 'svelte'
import './app.css'
import App from './App.svelte'

import { writable } from "svelte/store";
export const matches = writable([]);
export const selectedMatchId = writable(null);

const app = mount(App, {
  target: document.getElementById('app'),
})

const dummyMatches = [
  {
    id: crypto.randomUUID(),
    matchName: "Dayne PR vs KG",
    score: { team: 5, opponent: 2 },
    matchResult: "Victory",
    matchDate: "2025-09-20",
    yourTeam: "Dayne",
    opponentTeam: "Kingsguard",
    matchType: "Practice Raid",
    kda: { kills: 8, deaths: 2, assists: 5 },
    matchNotes: "Yay!!"
  },
  {
    id: crypto.randomUUID(),
    matchName: "RL3 PD vs Ironborn",
    score: { team: 7, opponent: 12 },
    matchResult: "Defeat",
    matchDate: "2025-09-19",
    yourTeam: "Tully",
    opponentTeam: "Ironborn Raiders",
    matchType: "Official Siege",
    kda: { kills: 0, deaths: 1, assists: 2 },
    matchNotes: "Why are there 30 fully armored Ironborns...?"
  },
  {
    id: crypto.randomUUID(),
    matchName: "Martell vs Bandits",
    score: { team: 2, opponent: 10 },
    matchResult: "Defeat",
    matchDate: "2025-09-18",
    yourTeam: "Martell",
    opponentTeam: "Bandits",
    matchType: "Official Siege",
    kda: { kills: 5, deaths: 1, assists: 3 },
    matchNotes: "How did Martell get wiped out so fast...?"
  },
  {
    id: crypto.randomUUID(),
    matchName: "Sparring with mad_monkey233",
    score: { team: 20, opponent: 18 },
    matchResult: "Victory",
    matchDate: "2025-09-16",
    yourTeam: "ravnyx",
    opponentTeam: "mad_monkey233",
    matchType: "Spar",
    kda: { kills: 12, deaths: 4, assists: 0 },
    matchNotes: "Close rounds."
  },
  {
    id: crypto.randomUUID(),
    matchName: "Tournament at Oldtown",
    score: { team: 9, opponent: 3 },
    matchResult: "Victory",
    matchDate: "2025-09-13",
    yourTeam: "ravnyx",
    opponentTeam: "All other champions",
    matchType: "Duel",
    kda: { kills: 5, deaths: 6, assists: 2 },
    matchNotes: "Need to practice more."
  },
  {
    id: crypto.randomUUID(),
    matchName: "Raid against IDK",
    score: { team: 14, opponent: 14 },
    matchResult: "Draw",
    matchDate: "2025-09-12",
    yourTeam: "My team",
    opponentTeam: "Not my team",
    matchType: "Practice Raid",
    kda: { kills: 7, deaths: 7, assists: 4 },
    matchNotes: "GGs?"
  },
  {
    id: crypto.randomUUID(),
    matchName: "Practice siege with moderators",
    score: { team: 1, opponent: 9 },
    matchResult: "Defeat",
    matchDate: "2025-09-11",
    yourTeam: "All players",
    opponentTeam: "Moderators",
    matchType: "Practice Siege",
    kda: { kills: 9, deaths: 2, assists: 3 },
    matchNotes: "They're admin abusing... :("
  }
];

matches.set(dummyMatches);

export default app
