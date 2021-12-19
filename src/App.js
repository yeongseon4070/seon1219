import React, { useEffect, useState } from 'react';
import axios from "axios";
// npm i axios 를 터미널에서 선언해주고 임폴트 시켜준다.
//useState를 선언해준다. {}안에는 함수 값들이 들어간다. 1단계 시작.
//그런다음에 useEffect 를 선언해준다. / 어떠한 효과를 줄것인 지에 대한 함수 선언.

const App = () => {
    const [weus, setWeus] = useState([])
    //안에 콘스트를 선언을 하고 해당 데이터 값들이 담길 그릇을 만들어준다.
    //임의로 지정해서 A 와 A-1 을 지정해서 만들어준다. 데이터가 담기는 그릇이 A-1 이라고 생각하면 된다.

    const getWeus = async () =>{
        await axios.get("https://api.themoviedb.org/3/tv/airing_today?api_key=8597e491ed6e80f0de12e349eb60ea6e&language=en-US&page=1")
            .then(hihi =>{
                console.log(hihi.data.results)
                //내가 해당 데이터를 통 틀어서 이름을 hihi 라고 정하였고.
                //해당 이름을 앞에 넣어주고 테스트 페이지에서 데이터의 이름과 값들을 입력하고, 데이터의 형태를
                //유저 데이터 부분에서 매칭되도록 변경/적용해준다.
                setWeus(hihi.data.results)
                //그리고 데이터가 담기는 그릇에 대해서도 해당 데이터를 담겠다는 함수를 선언해준다.
            })
            .catch(err => console.log(err.message))
    }

    useEffect(() => {
        getWeus()
    },[])

    return (
        <div>
            <h1>
            {weus.length}
            {/*데이터를 뿌려주기 위해서 함수를 선언해준다.*/}
            {/*lengh 선언은 몇번이 사용되었는가에 대한 함수 추가이다.*/}
            </h1>
            {weus.map(yeong =>(
                <h1>
                    {yeong.id}
                    {yeong.name}
                </h1>
            ))}
            {/*명칭을 임의로 정해서 위의 링크의 데이터 값들을 보고 데이터 이름을 입력해 함수를 선언해준다.*/}
        </div>
    );
};

export default App;
