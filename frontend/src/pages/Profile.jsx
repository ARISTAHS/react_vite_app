import styled from "styled-components";
import { useEffect, useState } from "react";
import { auth } from "../config/firebase";
import { updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { userState } from "../recoil/userAtom";

const ProfileWrap = styled.div`
  width: 100%;
  height: 100vh;
  position:  relative;
  background: #fff;

  .profile_box{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 560px;
    height: 600px;

    h2{
      text-align: center;
      margin-bottom: 40px;
    }
    .form_inner{
      position: relative;
      padding: 0px 50px 0 20px;
      border: 1px solid #ccc;
      border-radius: 5px;

      dl{
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 20px;
        margin: 20px 0;

        dt{
          width: 85px;
        }
        dd{
          width: 100%;
          height: 35px;

          input{
            width: 100%;
            height: 100%;
            }
          }
          &:nth-child(1){
            input{
              &:nth-child(1){
                background: #999;
            }
          }
          
        }
      }
    }
    .buttons{
      margin-top: 40px;
      display: flex;
      align-items: center;
      gap: 20px;
      width: 100%;
      justify-content: center;
      button{
        height: 60px;
        color: #fff;

        &.agreeBtn{
          width: 50%;
          background: cornflowerblue;
        }
        &.cancelBtn{
          width: 50%;
          background: #666;
        }
      }
    }
  }
 
`;

export default function ProfilePage(){
  const formData = [
    {
      id: "name",
      label : "이름",
      type : "text",
      placeholder : "name",
    },
    {
      id: "email",
      label : "이메일",
      type : "email",
      placeholder : "이메일을 입력하세요",
    },
    {
      id: "password",
      label : "비밀번호",
      type : "text",
      placeholder : "비밀번호를 입력하세요",
    },
  ];
  
  const user = useRecoilValue(userState);

  // "이름"은 변경 불가, 나머지는 상태에서 관리
  const [userForm, setUserForm] = useState({
    email: user?.email || "",
    password: "",
  });

  const navigate = useNavigate();

  // 입력 값 변경
  const DataChange = (e) => {
    setUserForm({...userForm, [e.target.id] : e.target.value});
  };

  // 수정하기 버튼 클릭 시 실행
  const UpdateClick = async() => {
    try{
      if(auth.currentUser){
        await updateProfile(auth.currentUser, {
          email: userForm.email,
          password: userForm.password,
        });
        console.log('업데이트 완료');
        alert('회원 정보가 수정되었습니다');
        navigate("/login");
      }
    }catch(error){
      console.error("회원 정보 수정 오류:", error);
      alert("수정 중 오류가 발생했습니다.");
    }
  };

  // 로그인 체크가 되었는지 확인 코드 -> 안되면 랜더링 X
  useEffect(()=>{
    if(!user){
      navigate('/login');
    }
  },[ user, navigate ]);

  if (!user) return null;

  return(
    <ProfileWrap>
      <div className="profile_box">
        <h2 className="inner_tit">개인정보 수정</h2>
        
          <form name="profile_form" method="post" className="form_inner">
            {formData.map(({id, label, type, placeholder})=>(
              <dl key={id}>
                <dt>
                  <label htmlFor={id}>{label}</label>
                </dt>
                <dd>
                {id !== "name" ? (
                    <input
                      type={type}
                      id={id}
                      placeholder={placeholder}
                      value={userForm[id] || ""}
                      onChange={DataChange}
                    />
                  ) : (
                    <input
                      type={type}
                      id={id}
                      placeholder={placeholder}
                      readOnly={id === "name"}
                    />
                  )}
                </dd>
              </dl>
            ))}
          </form>
        
        <div className="buttons">
          <button type="button" className="agreeBtn" onClick={UpdateClick}>수정하기</button>
          <button type="button" className="cancelBtn" onClick={() => navigate("/main")}>취소하기</button>
        </div>
      </div>
    </ProfileWrap>
  );
  
}


