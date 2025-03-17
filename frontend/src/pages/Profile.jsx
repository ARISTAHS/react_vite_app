import styled from "styled-components";
import { useState } from "react";
import { auth } from "../config/firebase";
import { updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

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

    h2{
      text-align: center;
      margin-bottom: 40px;
    }
 
      
    .form_inner{
      position: relative;
      padding: 0px 50px 0 20px;
      border: 1px solid #ccc;
      border-radius: 5px;
      margin-bottom: 25px;

      dl{

        dt{

          &:nth-child(2){
          
          }
          &:nth-child(3){

          }
        }
        dd{

          &:nth-child(2){
          
          }
          &:nth-child(3){

          }
        }
        &:nth-child(2){
          
        }
        &:nth-child(3){

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
        height: 100px;
        .agreeBtn{
          width: 50%;
          background: cornflowerblue;
        }
        .cancelBtn{
          width: 50%;
          background: #666;
        }
      }
    }
  }
 
`;

export default function ProfilePage({userData}){

  const formData = [
    {
      id: "name",
      label : "이름",
      type : "text",
      placeholder : "이름을 입력하세요",
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

  // "이름"은 변경 불가, 나머지는 상태에서 관리
  const [userForm, setUserForm] = useState({
    email: userData.email || "",
    password: userData.password || "",
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
          <button type="button" className="cancelBtn" onClick={() => navigate("/login")}>취소하기</button>
        </div>
      </div>
    </ProfileWrap>
  );
  
}

// userData를 props로 받고 있으나 타입 겁증이 안되어 경고 발생. userData구조 정의
ProfilePage.propTypes = {
  userData: PropTypes.shape({
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
  }).isRequired,
};
