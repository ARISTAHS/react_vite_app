// 사용자 목록 가져오기 
import { useEffect, useState } from "react";
import {fetchUsers} from "../services/userService";

export default function UserList(){

  const [users, setUsers] = useState([]);
  
  useEffect(()=>{
    async function loadUser() {
      const data = await fetchUsers();
      if(data){
        setUsers(data);
      }
    }
    loadUser();
  }, []);

  return(
    <div>
      <h2>사용자 목록</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name} ({user.email})</li>
        ))}
      </ul>
    </div>
  );
}