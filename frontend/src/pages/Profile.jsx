import styled from "styled-components";

const ProfileWrap = styled.div`
  width: 100%;
  height: 100vh;
`;

export default function ProfilePage(){

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
      type : "text",
      placeholder : "이메일을 입력하세요",
    },
    {
      id: "password",
      label : "비밀번호",
      type : "number",
      placeholder : "비밀번호를 입력하세요",
    },
  ]

  return(
    <ProfileWrap>
      <h2 className="inner_tit">개인정보 수정</h2>
      <div className="form_wrap">
        <form name="profile_form" method="post">
          {formData.map(({id, label, type, placeholder})=>(
            <dl key={id}>
              <dt>
                <label htmlFor={id}>{label}</label>
              </dt>
              <dd>
                <input type={type} id={id} placeholder={placeholder} />
              </dd>
            </dl>
          ))}
        </form>
      </div>
    </ProfileWrap>
  );
}