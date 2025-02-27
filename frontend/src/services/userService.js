const API_URL = "http://localhost:5000";

// 모든 사용자 가져오기(GET)
export const fetchUser = async() => {
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

// 사용자 등록하기(POST
export const UpdateUser = async() => {
  try{}
  catch(){
    
  }
};
