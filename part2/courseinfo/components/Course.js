const Header = ({ name }) => {
    return (
      <>
        <h1>{name}</h1>
      </>
    )
  }
  
  const Content = ({ parts }) => {
    return (
      <>
        {parts.map(part => 
            <Part key={part.id} part={part} />
        )}
      </>
    )
  }

  const Part = ({ part }) => {
    return (
      <>
        <p>
          {part.name} {part.exercises}
        </p>
      </>
    )
  }

  const Total = ({ parts }) => {
    const sum = parts.reduce((sum, part) => {
        return sum + part.exercises
    }, 0)

    return <b>total of {sum} exercises</b>
  }

  const Course = (props) => {
    return (
        <>
        <Header name={props.course.name}/>
        <Content parts={props.course.parts} />
        <Total parts={props.course.parts} />
        </>
    )
  }

  export default Course
