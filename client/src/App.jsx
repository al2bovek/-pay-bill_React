import { useEffect, useState } from "react";
import { getPlayers } from "./api/playersApi";
import PlayerForm from "./components/PlayerForm";
import PlayersList from "./components/PlayersList";
import Randomizer from "./components/Randomizer";

export default function App() {
  const [players, setPlayers] = useState([]);
  const [stage, setStage] = useState("form");

  useEffect(() => {
    getPlayers().then((res) => setPlayers(res.data));
  }, []);

  const handleAdd = (player) => setPlayers([...players, player]);
  const handleEdit = (updatedPlayer) => {setPlayers((prev) =>
      prev.map((p) => (p.id === updatedPlayer.id ? updatedPlayer : p))
    );
  };
  const handleDelete = (id) => setPlayers(players.filter((p) => p.id !== id));

  return (
    
    <div className="flex flex-col justify-evenly py-6 text-6xl">
      {stage === "form" && (
        <div className="flex flex-col justify-evenly items-center">
          <PlayerForm onAdd={handleAdd} />
          <PlayersList players={players} onEdit={handleEdit} onDelete={handleDelete} />
          <button onClick={() => setStage("random")}>Next</button>
        </div>
      )}

      {stage === "random" && (
        <div className="m-auto">
          <Randomizer players={players} onReset={() => setStage("form")} />
        </div>
      )}
    </div>
  );
}

