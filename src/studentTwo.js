export function StudentCard(props){
    const {name,age, course, batch, EditStudent } = props;
   return(
       <div className="StudentCard">
          <h2 style={{fontSize:'0.8em'}}>{name}</h2>
          <h2 style={{fontSize:'0.8em'}}>{age}</h2>
          <h2 style={{fontSize:'0.8em'}}>{course}</h2>
          <h2 style={{fontSize:'0.8em'}}>{batch}</h2>
          <button onClick={EditStudent}>Edit</button>
       </div>  
   )
}