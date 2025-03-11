import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../config/firebase";

export default function LogoutButton(){
  const navigate = useNavigate();

  const handleLogout = async () =>{
    try{
      await signOut(auth);
      navigate('/main');
    } catch(error){
      console.error("로그아웃 실패:",error);
    }
  };

  return(
    <button onClick={handleLogout}>
      로그아웃
    </button>
  );
};