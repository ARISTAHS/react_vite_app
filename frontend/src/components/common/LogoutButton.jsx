import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../config/firebase";
import { useSetRecoilState } from "recoil";     
import { userState } from "../../recoil/userAtom";
// recoil에 로그인 정보가 남아있을 가능성. 

export default function LogoutButton(){
  const navigate = useNavigate();
  const setUser = useSetRecoilState(userState);

  const handleLogout = async () =>{
    try{
      await signOut(auth);  // firebase 로그아웃
      setUser(null);        // recoil 상태 초기화
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