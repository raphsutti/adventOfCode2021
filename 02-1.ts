// --- Day 2: Dive! ---

// Now, you need to figure out how to pilot this thing.

// It seems like the submarine can take a series of commands like forward 1, down 2, or up 3:

//     forward X increases the horizontal position by X units.
//     down X increases the depth by X units.
//     up X decreases the depth by X units.

// Note that since you're on a submarine, down and up affect your depth, and so they have the opposite result of what you might expect.

// The submarine seems to already have a planned course (your puzzle input). You should probably figure out where it's going. For example:

// forward 5
// down 5
// forward 8
// up 3
// down 8
// forward 2

// Your horizontal position and depth both start at 0. The steps above would then modify them as follows:

//     forward 5 adds 5 to your horizontal position, a total of 5.
//     down 5 adds 5 to your depth, resulting in a value of 5.
//     forward 8 adds 8 to your horizontal position, a total of 13.
//     up 3 decreases your depth by 3, resulting in a value of 2.
//     down 8 adds 8 to your depth, resulting in a value of 10.
//     forward 2 adds 2 to your horizontal position, a total of 15.

// After following these instructions, you would have a horizontal position of 15 and a depth of 10. (Multiplying these together produces 150.)

// Calculate the horizontal position and depth you would have after following the planned course. What do you get if you multiply your final horizontal position by your final depth?

import * as fs from "fs";
import * as path from "path";

interface Position {
  horizontal: number;
  depth: number; // positive number lower depth, negative number higher depth
}

const main = async () => {
  const raw = await fs.promises.readFile(
    path.join(__dirname, "./02-01input"),
    "utf8"
  );
  const lines = raw.split("\n").slice(0, -1);

  const result: Position = lines.reduce(
    (acc, curr) => {
      const [direction, amount] = curr.split(" ");
      switch (direction) {
        case "forward":
          acc.horizontal = acc.horizontal + Number(amount);
          break;
        case "down":
          acc.depth = acc.depth + Number(amount);
          break;
        case "up":
          acc.depth = acc.depth - Number(amount);
          break;
      }
      // console.log(acc);
      return acc;
    },
    { horizontal: 0, depth: 0 }
  );

  console.log("position", result); // position { horizontal: 1962, depth: 987 }
  console.log("h * d = ", result.horizontal * result.depth); // h * d =  1936494
};
main();
