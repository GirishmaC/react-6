//import { NavLink } from 'react-router-dom';

// export function studentOne(props){
import { useState } from "react";
import { useStudentConsumer } from "./studentOne";
import { StudentCard } from "./studentTwo";
export function Students(){
    let [StudentList ,newStudent] = useStudentConsumer();
    let [StuPage, setPage] = useState(true);
    let [AddButton, setBtn] = useState('ADD');
    const [StuName, setStuName] = useState('');
    const [StuAge, setStuAge] = useState('');
    const [StuCourse, setStuCourse] = useState('');
    const [StuBatch, setStuBatch] = useState('');
    const [edit,setEdit] = useState(false);
    let [Student, PassStudent] = useState(null);

    function Submitt(){
        if(!edit){
            let StudentObj = {
                name:StuName,
                age:StuAge,
                course:StuCourse,
                batch:StuBatch
            }
            newStudent([...StudentList,StudentObj]);
            setStuName('');
            setStuAge('');
            setStuBatch('');
            setStuCourse('');
            setPage(true);
        }else{

           StudentList.map( (st) => {

               if(st.name === Student.name){
                   st.name = StuName;
                   st.age = StuAge;
                   st.course = StuCourse;
                   st.batch = StuBatch;
               }
           } );
           setPage(true);
           setEdit(false);
           setStuAge('');
           setStuName('');
           setStuBatch('');
           setStuCourse('');
           setBtn("ADD");
          
        }
    }

    function Cancel(){
        setPage(true);
        setStuAge('');
        setStuName('');
        setStuBatch('');
        setStuCourse('');
    }
    
    function EditStudent(item){
       setPage(false);
       setEdit(true);
       console.log(item);
       PassStudent(item);
       setStuName(item.name);
       setStuAge(item.age);
       setStuCourse(item.course);
       setStuBatch(item.batch);
       setBtn("UPDATE");
    }
  
return(
        <div className="Students">
            <div className="student-cls">
                <h3>Student-Details</h3>
                <button onClick={() => setPage(false) } >Add Student</button>
            </div>
            <div>
            {
            StuPage? <section className="lists">  
            <div className="head">
                <h4>Name</h4>
                <h4>Age</h4>
                <h4>Course</h4>
                <h4>Batch</h4>
                <h4>Change</h4>
            </div>
            <div className="list">
            { StudentList?.map( (item, index) => (
                <StudentCard key={index}
                 name={item.name} 
                 age={item.age}
                 course={item.course}
                 batch={item.batch}
                 EditStudent={ () => EditStudent(item) }
                  />
            ) ) }
            </div>
            </section> :
      <section className="listed">
                 <form>
                    <h3>NAME:-</h3>
                  <input type={'text'} placeholder={'Name'} onChange={(a) => setStuName(a.target.value)} value={StuName}></input>
                    <h3>AGE:-</h3>
                   <input type={'text'} placeholder={'Age'} onChange={(a) => setStuAge(a.target.value)}  value={StuAge}></input>
                    <h3>COURSE:-</h3>
                   <input type={'text'} placeholder={'Course'} onChange={(a) => setStuCourse(a.target.value)} value={StuCourse}></input>
                    <h3>BATCH:-</h3>
                   <input type={'text'} placeholder={'Batch'} onChange={(a)=> setStuBatch(a.target.value)} value={StuBatch}></input>
                   <br>
                   </br></form>
            <div className="ones">
            <button onClick={() => Cancel()}>CANCEL</button>
            <button  onClick={ () => Submitt()}>{AddButton}</button>
            </div>
              </section>
           }
            </div>
      </div>
    )
}