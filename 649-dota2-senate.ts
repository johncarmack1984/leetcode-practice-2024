function vote(
  queueSenate: string[],
  banR: number,
  banD: number
): {
  queue: string[];
  banR: number;
  banD: number;
  isEnded: boolean;
} {
  let queue = [];

  for (let i = 0; i < queueSenate.length; i++) {
    const s = queueSenate[i];

    if (s === "R") {
      if (banR === 0) {
        banD++;
        queue.push(s);
      } else {
        banR--;
      }
    } else {
      if (banD === 0) {
        banR++;
        queue.push(s);
      } else {
        banD--;
      }
    }
  }
  const isEnded =
    queue.every((e) => e === "R") || queue.every((e) => e === "D");
  return { queue, banR, banD, isEnded };
}

export function predictPartyVictory(senate: string): string {
  let voted = vote(senate.split(""), 0, 0);

  while (!voted.isEnded) {
    voted = vote(voted.queue, voted.banR, voted.banD);
  }

  return voted.queue.every((e) => e === "R") ? "Radiant" : "Dire";
}

// console.log(predictPartyVictory("RD")); // Radiant
// console.log(predictPartyVictory("RDD")); // Dire
