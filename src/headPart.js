import { Contact } from "./contact";
import { Home } from "./home";
import { Students } from "./student";
import { NavLink } from 'react-router-dom';
export function Header(){
   return(
    <nav>
    <NavLink  to={'/'} element={<Home/>}  className={({ isActive }) => 
                      (isActive ? "active-class" : "not-active-class")}>HOME</NavLink>
    <NavLink to={'/Pages/Students'} element={<Students/>}  className={({ isActive }) => 
                      (isActive ? "active-class" : "not-active-class")}>STUDENTS</NavLink>
    <NavLink to={'/Pages/Contact'} element={<Contact/>}  className={({ isActive }) => 
                      (isActive ? "active-class" : "not-active-class")} >CONTACT_US</NavLink>
  </nav>
   )
}