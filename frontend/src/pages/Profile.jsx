import styled from "styled-components";

const ProfileWrap = styled.div`
  width: 100%;
  height: 100vh;
`;

export default function ProfilePage(){
  return(
    <ProfileWrap>
      <h2 className="inner_tit">개인정보 수정</h2>
      <div className="form_wrap">
        <form name="profile_form" method="post" action="">
          <dl>
            <dt>
              <label htmlFor="name">이름</label>
            </dt>
            <dd>
              <input type="text" placeholder="이름"/>
            </dd>
          </dl>
        </form>
      </div>
    </ProfileWrap>
  );
}