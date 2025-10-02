import { useState } from "react";   

const ToDoForm = ({ addTodo }) => {

    const [value, setValue] = useState("");
    const [category, setCategory] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!value || !category) return;
        addTodo(value, category);
        setValue("");
        setCategory("");
        console.log(value, category);
    }
    
    return (
        <div className="todo-form">
            <h2>Nova Tarefa:</h2>
            <form onSubmit={handleSubmit}>
                <input 
                type="text" 
                placeholder="Digite o Título" 
                value={value}
                onChange={(e) => setValue(e.target.value)} />
                    <select value={category} onChange={(e) => setCategory(e.target.value)}>
                    <option value="">Selecione uma categoria</option>
                    <option value="Estudo">Estudo</option>
                    <option value="Lazer">Lazer</option>
                    <option value="Saúde">Saúde</option>
                </select>
                <button type="submit">Criar Tarefa</button>
            </form>
        </div>
    );
};


export default ToDoForm;    