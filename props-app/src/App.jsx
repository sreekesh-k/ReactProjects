import Card from './Card.jsx'

function App() {
  return (
    <>
      <Card id={1} name="Sreekesh" desc="Voluptate, omnis incidunt. Quidem fugit deserunt enim libero quae! Pariatur, dolorem corrupt" isStudent={true}/> 
      <Card id={2} name="Tactinton" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit." isStudent={false}/>
      <Card id={3} name="FreakSreek" desc="Cumque totam tenetur incidunt eligendi quaerat iure pariatur distinctio quasi, nam mollitia dolor est aut sequi culpa assumenda error accusamus, commodi tempora!" isStudent={false}/>
      <Card></Card>
      <Card></Card>
    </>
  )
}

export default App
