import React, { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blod tests when dianosing patients'
  ]
   
  const [selected, setSelected] = useState(0)
  const [mostVoted, setMostVoted] = useState(0)
  const [votes, setVotes] = useState([0, 0, 0, 0, 0, 0, 0])

  const getRandomInt = (max) => Math.floor(Math.random() * (max + 1));

  const addVote = (id) => {
  const copy = [...votes]
  copy[id] += 1     
  setVotes(copy)

  if (copy[mostVoted] < copy[id]) {
    setMostVoted(id)
  }
}
  
  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]} <br/>
      <span>has {votes[selected]} votes</span><br/>
      <input type="button" onClick={() => addVote(selected)} value="vote"/>
      <input type="button" onClick={() => setSelected(getRandomInt(7))} value="next anecdote"/>
      
      <h1>Anecdote with most votes</h1>
      {anecdotes[mostVoted]} <br/>
      <span>has {votes[mostVoted]} votes</span><br/>
    
    
    </div>
    

  )
}

export default App