// 사용자 목록 가져오기 
import { useEffect, useState } from "react";
import { fetchUser } from "../api/usersAPI";

export default function UserList(){

  const [users, setUsers] = useState([]);
  
  useEffect(()=>{
    async function loadUser() {
      const data = await fetchUser();
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
        {users.length > 0 ? (
          users.map((user) => (
            <li key={user.id}>{user.name} ({user.email})</li>
          ))
        ) : (
          <p>가입된 사용자가 없습니다.</p>
        )}
      </ul>
    </div>
  );
}