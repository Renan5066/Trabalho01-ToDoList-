import { useState } from "react";
import "./App.css";
import ToDo from "./components/ToDo";
import ToDoForm from "./components/ToDoForm";
import Search from "./components/Search";
import Filter from "./components/Filter";
import NavBar from "./components/NavBar";
import Welcome from "./components/Welcome";
import Footer from "./components/Footer";

function App() {
    const [todos, setTodos] = useState([
        {
            id: 1,
            text: "Estudar React",
            category: "Estudo",
            isCompleted: false,
        },

        { 
            id: 2, 
            text: "Ler um livro", 
            category: "Lazer", 
            isCompleted: false },

        { 
            id: 3, 
            text: "Fazer exercícios", 
            category: "Saúde", 
            isCompleted: false },
    ]);

    const [search, setSearch] = useState("");

    const [filter, setFilter] = useState("All");
    

    const addTodo = (text, category) => {

        const newTodo = [
            ...todos, { id: Math.floor(Math.random() * 1000),
            text,
            category,
            isCompleted: false
        },
    ];
        setTodos(newTodo);
};

const completeTodo = (id) => {
    const newTodos = [...todos]
    newTodos.map((todo) =>  todo.id === id ? todo.isCompleted = !todo.isCompleted : todo);
    setTodos(newTodos);
};

const removeTodo = (id) => {
    const newTodos = [...todos]
    const  filteredTodos = newTodos.filter((todo) => todo.id !== id ? todo : null);
    setTodos(filteredTodos);
};

    return (
        <div className="nav">
        <NavBar />
        <Welcome />
        <div className="app">
            
            <h1>ToDo List</h1>
            <Search search={search} setSearch={setSearch}/>
            <Filter filter={filter} setFilter={setFilter}/>
            <div className="todo-list">
                {todos
                .filter ((todo) => 
                    filter === "All" 
                ? true 
                : filter === "Completed" 
                ? todo.isCompleted 
                : !todo.isCompleted)
                .filter((todo) => todo.text.toLowerCase().includes(search.toLowerCase()))
                .map((todo) => (
                    <ToDo key={todo.id} todo={todo} removeTodo={removeTodo} completeTodo={completeTodo} />
                ))}
            </div>
            <ToDoForm addTodo={addTodo} />
        </div>
        <div className="foot">
            <Footer />
            </div>
        </div>
    );
}

export default App;
