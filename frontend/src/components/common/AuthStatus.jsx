import { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../config/firebase";
import { useNavigate } from "react-router-dom";

export default function AuthStatus() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // 🔥 Firebase에서 로그인 상태 감지
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe(); // 컴포넌트 언마운트 시 구독 해제
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    setUser(null);
    navigate("/login"); // 로그아웃 후 로그인 페이지로 이동
  };

  return (
    <div className="auth_status">
      {user ? (
        <div>
          <p>현재 로그인 사용자: {user.email}</p>
          <button onClick={handleLogout}>로그아웃</button>
        </div>
      ) : (
        <p>로그인하지 않았습니다.</p>
      )}
    </div>
  );
}