import React, { useState } from 'react'

const Button = (props) => (
    <button onClick={props.handleClick}>{props.text} </button>

)

const SingleStatistic = (props) => (

    <tr>
      <td>{props.text}</td><td> {props.result}</td>
    </tr>  

)


const Statistic = ({goodCounter,neutralCounter, badCounter}) => {

    let totalFeedback = goodCounter + badCounter + neutralCounter
    let averageFeedback = (goodCounter - badCounter) / totalFeedback
    let positiveFeedback = ( goodCounter / totalFeedback) * 100
    
    if (totalFeedback === 0) {
      return(
        <div>
          No feedback given
        </div>
      )
    }
    else{
      return(
    <div>
      <table>
        <thead>
          <tr>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <SingleStatistic text="good" result={goodCounter} />
          <SingleStatistic text="neutral" result={neutralCounter} />
          <SingleStatistic text="bad" result={badCounter} />
          <SingleStatistic text="all" result={totalFeedback}/>
          <SingleStatistic text="average" result={averageFeedback} />
          <SingleStatistic text="positive" result={positiveFeedback + "%"} />
        </tbody>
      </table>
    
    </div>
      )
    }
  }



const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  return (
    <div>
      <h1>give feedback</h1>

      <Button handleClick={() => setGood(good+ 1)} text="Good" />
      <Button handleClick={() => setNeutral(neutral+ 1)} text="Neutral" />
      <Button handleClick={() => setBad(bad+ 1)} text="Bad" />

      <h1>statistics</h1>
      <Statistic goodCounter={good}
                 neutralCounter={neutral}
                 badCounter={bad} />      
    </div>
  )
}

export default App