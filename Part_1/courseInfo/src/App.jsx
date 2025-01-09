const Header = (props) => {
  console.log(props)
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Part = (props) => {
  console.log(props)
  return (
    <div>
      <p>{props.part.name} {props.part.exercise}</p>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part part={props.part[0]} />
      <Part part={props.part[1]} />
      <Part part={props.part[2]} />
    </div>
  )
}

const Total = (props) => {
  let total = 0
  const exercise = props.exercise

  for (let i = 0; i <exercise.length; i++) {
    total += exercise[i].exercise;
  }

  return (
    <div>
      <p>
        Number of exercises {total}</p>
    </div>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development', 
    part: [
      {name: "Fundamentals of React", 
        exercise: 10
      },
      {name: "Using props to pass data", 
        exercise: 7
      },
      {name: "State of a component", 
        exercise: 14
      }
    ], 
    totalExercises: function() {
      let total = 0;
      for (let i = 0; i < this.part.length; i++) {
        total += this.part[i].exercise;
        
      }
      return total
    }
  }
  

  return (
    <div>
    <Header course = {course.name} />
    <Content part = {course.part} />
    <Total exercise = {course.part} />
    </div>
  )
}

export default App