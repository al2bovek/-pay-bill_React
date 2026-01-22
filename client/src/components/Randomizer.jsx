import { useState } from "react";

export default function Randomizer({ players, onReset }) {
  const [loser, setLoser] = useState(null);

  const pickRandom = () => {
    const random = players[Math.floor(Math.random() * players.length)];
    setLoser(random.name);
  };

  return (
    <div className="w-90% flex flex-col gap-6 [&>button]:border [&>button]:bg-pink-500
    [&>button]:rounded [&>button]:py-2 [&>button]:text-white">
      <h2 className="text-center">Who pays the bill?</h2>

      {loser && 
      <div className="text-center">
      <h3 className="">The looser is: </h3>
      <h2 className="font-mono text-8xl text-amber-600">{loser}</h2>
      </div>
      }

      <button onClick={pickRandom}>Get New Looser</button>
      <button onClick={onReset}>Start Over</button>
    </div>
  );
}
