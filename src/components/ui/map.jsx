import { useEffect } from "react";
import KaKaMapAPI from '../../config/config';

export default function MapApi(){

  useEffect(()=> {
  
    if (!KaKaMapAPI) {
      console.error("카카오 API 키가 설정되지 않았습니다.");
      return;
    }

    //카카오 api가 존재하는지 확인 
    if(!window.kakao || !window.kakao.maps){
      //script를 html에 동적으로 생성 추가 
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${KaKaMapAPI}&autoload=false`;
      //head 마지막에 script 추가
      document.head.appendChild(script);

      script.onload = () =>{
        window.kakao.maps.load(()=>{
          console.log("카카오 맵 API 로드 완료");
          initMap();
        });
      };  
    }else{
      initMap();
    }

  },[]);

  const initMap = () =>{
    //카카오 api가 아직 로드 안됬을때 실행
    if(!window.kakao || !window.kakao.maps) return;

    let container = document.getElementById("map");
    let options = {
      center : new window.kakao.maps.LatLng(37.524731, 127.133032),
      level : 4
    };

    let map = new window.kakao.maps.Map(container, options);
    
    let markerPoint = new window.kakao.maps.LatLng(37.524731, 127.133032);

    let marker = new window.kakao.maps.Marker({
      position : markerPoint
    });

    marker.setMap(map);
  };

  return null;
};