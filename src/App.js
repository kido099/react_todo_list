import React, { useState } from 'react'; // useState a hook
//import logo from './logo.svg';
import './App.css';

const removeIcon = <svg t="1598149816930" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1161" width="200" height="200"><path d="M972.657609 209.348408C987.158609 209.36839 998.930114 197.571202 998.949999 182.99865 998.969882 168.426097 987.230618 156.59651 972.729617 156.576528L32.457975 155.280806C17.956974 155.260823 6.18547 167.058012 6.165585 181.630564 6.1457 196.203116 17.884965 208.032703 32.385966 208.052686L972.657609 209.348408ZM180.466902 992.356169 180.466902 1019.014859 206.993296 1018.74074 833.361858 1012.267947 859.348284 1011.999407 859.348284 985.883377 859.348284 289.397297C859.348284 274.824732 847.59289 263.011332 833.091874 263.011332 818.590859 263.011332 806.835465 274.824732 806.835465 289.397297L806.835465 985.883377 832.82189 959.498805 206.453329 965.971599 232.979723 992.356169 232.979723 282.67005C232.979723 268.097483 221.224329 256.284085 206.723313 256.284085 192.222298 256.284085 180.466902 268.097483 180.466902 282.67005L180.466902 992.356169ZM656.410257 847.079027C656.410257 861.651593 668.165651 873.464992 682.666667 873.464992 697.167682 873.464992 708.923076 861.651593 708.923076 847.079027L708.923076 372.131659C708.923076 357.559091 697.167682 345.745694 682.666667 345.745694 668.165651 345.745694 656.410257 357.559091 656.410257 372.131659L656.410257 847.079027ZM341.333333 847.079027C341.333333 861.651593 353.08873 873.464992 367.589743 873.464992 382.090758 873.464992 393.846155 861.651593 393.846155 847.079027L393.846155 372.131659C393.846155 357.559091 382.090758 345.745694 367.589743 345.745694 353.08873 345.745694 341.333333 357.559091 341.333333 372.131659L341.333333 847.079027ZM498.871795 847.079027C498.871795 861.651593 510.627189 873.464992 525.128205 873.464992 539.62922 873.464992 551.384614 861.651593 551.384614 847.079027L551.384614 372.131659C551.384614 357.559091 539.62922 345.745694 525.128205 345.745694 510.627189 345.745694 498.871795 357.559091 498.871795 372.131659L498.871795 847.079027ZM392.147755 116.721777C392.147755 102.063669 403.758665 90.363507 418.40134 90.363507L622.925796 90.363507C637.408947 90.363507 649.179381 102.1619 649.179381 116.549585L649.179381 171.644875 701.692203 171.644875 701.692203 116.549585C701.692203 72.986607 666.38105 37.591577 622.925796 37.591577L418.40134 37.591577C374.724427 37.591577 339.634933 72.950804 339.634933 116.721777L339.634933 165.310801 392.147755 165.310801 392.147755 116.721777Z" p-id="1162" fill="#ffffff"></path></svg>;
const completeIcon = <svg t="1598161337699" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3384" width="200" height="200"><path d="M939.388444 629.900889a34.287561 34.287561 0 1 1 66.095153 18.271766c-53.903309 195.069501-218.413202 342.107617-422.314589 370.77925C303.236595 1058.295401 44.391911 863.2259 5.048415 583.245487-34.29508 303.249075 160.75842 44.388391 440.706834 5.044895a510.329461 510.329461 0 0 1 199.949438 11.343855 34.287561 34.287561 0 0 1-17.279779 66.36715c-55.967283-14.559813-114.526533-18.031769-173.117782-9.791875C207.781818 107.043589 38.887982 331.232716 72.967545 573.69361 107.047109 816.170503 331.204237 985.112338 573.63313 951.032775a443.386319 443.386319 0 0 0 365.755314-321.131886z m25.119678-469.113989a34.287561 34.287561 0 1 1 50.399355 46.527404L574.065125 684.956184c-13.29583 14.399816-35.93554 14.751811-49.663364 0.76799l-229.597058-233.805004a34.287561 34.287561 0 0 1 48.911373-48.063384l204.381382 208.109333L964.508122 160.8029z" p-id="3385" fill="#ffffff"></path></svg>;
const uncompleteIcon = <svg t="1598161317381" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2734" width="200" height="200"><path d="M512 16C238 16 16 238 16 512s222 496 496 496 496-222 496-496S786 16 512 16z m0 896c-221 0-400-179-400-400S291 112 512 112s400 179 400 400-179 400-400 400z" p-id="2735" fill="#ffffff"></path></svg>;

const INIT_TODOS = [
  {
    text: 'Learn about React',
    isComplete: false,
  },
  {
    text: 'Meet friend for lunch',
    isComplete: false,
  },
  {
    text: 'Build todo app',
    isComplete: false,
  },
];

function Todo({ todo, removeTodo, index, completeTodo }) { // destructing
  // https://stackoverflow.com/questions/41460886/functional-react-component-with-an-argument-in-curly-braces
  return (
    <div
      className="todo"
      onClick={() => completeTodo(index)}
    >
      <div className="task">
        {todo.isComplete ? completeIcon : uncompleteIcon}
        {todo.text}
      </div>
      <a className="remove" href="#!" onClick={(e) => removeTodo(e, index)}>
        {removeIcon}
      </a>
    </div>
  );
}

function TodoForm({ addTodo }) {
  const [value, setValue] = useState('');
  const handleSubmit = (e) => {
    //console.log(e);
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    //console.log(value);
    setValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={value}
        className="input"
        onChange={(e) => {setValue(e.target.value)}} />
    </form>
  );
}

function App() {
  /*return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );*/
  const [todos, setTodos] = useState(INIT_TODOS);
  const addTodo = (text) => {
    const newTodos = [{ text }, ...todos];
    setTodos(newTodos);
  };

  const removeTodo = (e, index) => { // e, event, 事件
    e.preventDefault(); // 在此禁掉一些默认时间，比如说这里会默认跳转
    //console.log(index);
    e.stopPropagation();
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  const completeTodo = (index) => {
    const newTodos = [...todos]; // get a copy
    newTodos[index].isComplete = true;
    setTodos(newTodos);
  }

  return (
    <div className="app">
      <div className="todo-list">
        <TodoForm addTodo={addTodo}/>
        { // JSX element
          todos.map((todo, index) => (
            <Todo
              index={index}
              key={todo.text}
              todo={todo}
              removeTodo={removeTodo}
              completeTodo={completeTodo} />
          ))
        }
      </div>
    </div>
  ); 
}

export default App;
