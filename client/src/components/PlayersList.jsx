import { useState } from "react";
import { deletePlayer, editPlayer } from "../api/playersApi";

export default function PlayersList({ players, onEdit, onDelete }) {
    const [editingId, setEditingId] = useState(null);
    const [tempName, setTempName] = useState("");

    const startEdit = (player) => {
        setEditingId(player.id);
        setTempName(player.name);
    };

    const saveEdit = async (id) => {
        const updated = await editPlayer(id, { name: tempName });
        onEdit(updated.data);
        setEditingId(null);
    };

    const handleDelete = async (id) => {
        await deletePlayer(id);
        onDelete(id);
    };

    return (
        <ul className="my-6">
            {players.map((p) => (
                <li key={p.id} className="flex justify-between gap-12 mb-4">

                    {editingId === p.id ? (
                        <input
                            className="border px-2"
                            value={tempName}
                            onChange={(e) => setTempName(e.target.value)}
                        />
                    ) : (
                        <span>{p.name}</span>
                    )}

                    <div className="flex gap-4">
                        {editingId === p.id ? (
                            <button className="text-green-600" onClick={() => saveEdit(p.id)}>
                                save
                            </button>
                        ) : (
                            <button className="text-blue-600" onClick={() => startEdit(p)}>
                                edit
                            </button>
                        )}

                        <button
                            className="text-amber-600"
                            onClick={() => handleDelete(p.id)}
                        >
                            delete
                        </button>
                    </div>
                </li>
            ))}
        </ul>
    );
}
