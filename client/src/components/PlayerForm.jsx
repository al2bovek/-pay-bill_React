import { useState } from "react";
import { addPlayer } from "../api/playersApi";

export default function PlayerForm({ onAdd }) {
    const [name, setName] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!name.trim()) return;
        const res = await addPlayer({ name });
        onAdd(res.data);
        setName("");
    };

    return (
        <form className="text-center" onSubmit={handleSubmit}>
            <input className="border py-1 pl-6 rounded-l mb-6 w-[80%]"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="player name..."
            />
            <button type="submit">Add Player</button>
        </form>
    );
}
