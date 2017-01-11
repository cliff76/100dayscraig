/**
* 100dayscraig
* Created by Clifton Craig on 1/5/17.
*/
import React from 'react'
import ReactDOM from 'react-dom'

console.clear();

const Title = () => {
    return (
        <div>
            <div>
                <h1>to-do</h1>
            </div>
        </div>
    );
};

const TodoForm = ({addTodo}) => {
    // Input Tracker
    let input;
    // Return JSX
    return (
        <div>
            <input ref={node => {
                input = node;
            }} />
            <button onClick={() => {
                addTodo(input.value);
                input.value = '';
            }}>
                +
            </button>
        </div>
    );
};

const Todo = ({todo, remove}) => {
    // Each Todo
    return (<li onClick={() =>
    {remove(todo.id)}}>
        {todo.text}</li>);
};

const TodoList = ({todos, remove}) => {
    // Map through the todos
    const todoNode = todos.map((todo) => {
        return (<Todo todo={todo} key={todo.id} remove={remove}/>)
    });
    return (<ul>{todoNode}</ul>);
};

// Contaner Component
// Todo Id
window.id = 0;
class TodoApp extends React.Component{
    constructor(props){
        // Pass props to parent class
        super(props);
        // Set initial state
        this.state = {
            data: []
        }
    }
    // Lifecycle method
    componentDidMount(){
        // Make HTTP reques with Axios
        axios.get('/data')
            .catch((error) =>{
                console.log("Error: ", error);
            })
            .then((res) => {
                console.log("Data retrieved: ", res);
                // Set state with result
                this.setState({data:res.data});
            });
    }
    // Add todo handler
    addTodo(val){
        // Assemble data
        const todo = {text: val, id: window.id++};
        // Update data
        this.state.data.push(todo);
        // Update state
        this.setState({data: this.state.data});
        axios.put('/data/',todo, {headers: {"Content-Type":"application/json"}});
    }
    // Handle remove
    handleRemove(id){
        // Filter all todos except the one to be removed
        const remainder = this.state.data.filter((todo) => {
            if(todo.id !== id) return todo;
        });
        axios.delete('/data/' + id);
        // Update state with filter
        this.setState({data: remainder});
    }

    render(){
        // Render JSX
        return (
            <div>
                <Title />
                <TodoForm addTodo={this.addTodo.bind(this)}/>
                <TodoList
                    todos={this.state.data}
                    remove={this.handleRemove.bind(this)}
                />
            </div>
        );
    }
}

ReactDOM.render(<TodoApp />, document.getElementById('container'));