// 사용자 관련 API
const API_URL = "http://localhost:5000";

// 모든 사용자 가져오기(GET)
export const fetchUser = async () => {
  try{
    const response = await fetch(`${API_URL}/api/users`);
    if(!response.ok) throw new Error('사용자 불러오기 실패');
    return response.json();
  }
  catch(error){
    console.error(error);
    return null;
  }
};

// 사용자 등록하기(POST)
export const UpdateUser = async (userDate) => {
  try{
    const response = await fetch(`${API_URL}/api/users`,{
      method : "POST",
      headers : {"Content-Type" : "application/json"},
      body:JSON.stringify(userDate),
    });

    // fetch 자체는 오류 안보냄. if문으로 400, 500(서버 응답 에러) 오류 처리
    if(!response.ok){ 
      throw new Error("회원가입 실패");
    };
    
    return response.json();
  }
  catch(error){
    // catch문에서는 네트워크 오류 나타내는 용도
    console.log(error);
    return null;
  }
};
