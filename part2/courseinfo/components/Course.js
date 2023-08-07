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

  const Course = (props) => {
    return (
        <>
        <Header name={props.course.name}/>
        <Content parts={props.course.parts} />
        </>
    )
  }

  export default Course