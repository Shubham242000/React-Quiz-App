import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './Pages/Home/Home'
import Quiz from './Pages/Quiz/Quiz'
import Result from './Pages/Result/Result'
import React, { useState } from 'react';

function App() {
  const [name, setName] = useState("");
  const [questions, setQuestions] = useState([]);
  const [score, setScore] = useState(0);

  
  
  const fetchQuestions = async (category, difficulty) => {
    try {
      const res = await fetch(`
        https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}&type=multiple`)
      const data = await res.json();
      setQuestions(data.results)
      
    }
    catch (e) {
      console.log(e)
    }
  }

  return (
    <Router>
      <div className="app" style={{ backgroundImage: "url(./bg.jpg)" }}>
        <Header />

        <Switch>
          <Route path='/' exact>
            <Home
              name={name}
              setName={setName}
              fetchQuestions={fetchQuestions}
            />
          </Route>
          <Route path='/quiz' exact>
            <Quiz
              name={name}
              questions={questions}
              score={score}
              setScore={setScore}
              setQuestions={setQuestions}
            />
          </Route>
          <Route path='/result' exact>
            <Result 
               score = {score}
               setScore = {setScore}
            />
          </Route>
        </Switch>

      </div>
      <Footer />
    </Router>
  );
}

export default App;
