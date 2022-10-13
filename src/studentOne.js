import React, { useContext, useState } from "react";
const StudentContext = React.createContext();
export function StudentContextProvider({children}){
    const [StudentList, newStudent]=useState([]);
 return(
      <StudentContext.Provider value={[StudentList, newStudent]}>
        {children}
      </StudentContext.Provider>
    )
}
export function useStudentConsumer(){
    return useContext(StudentContext);
}