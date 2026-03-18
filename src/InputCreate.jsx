import { useState } from "react";
import { useNavigate } from "react-router-dom";

const InputCreate = ({fetchData}) => {
    const [title, setTitle] = useState('');
    const navigate = useNavigate();
    const urlApiCreate = "http://localhost:3000/create"

    const handleSubmit = async (e) => {
        e.preventDefault();
        const start = {title: title};

        try {
            const response = await fetch(urlApiCreate, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(start),
            });

            if (response.ok) {
                await fetchData();
                alert("Task sent");
                setTitle('')
                navigate("/")
            } else {
                console.error("Nope");
            }
        } catch (error) {
            console.error('Connection error:', error);
        }
    };
return (
    <div style={{padding: "20px", border: "1px solid #ccc", marginTop: "20px"}}>
        <h2>New task here</h2>
        <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Put the task here squire"
              value={title}
              onChange={(e) => setTitle(e.target.value)} required
              />
              <button type="submit">Add to the task list</button>
        </form>

    </div>
   );
};

export default InputCreate