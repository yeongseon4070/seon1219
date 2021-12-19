import React, { useEffect, useState } from 'react';
import "./App.css"
//useState를 선언해준다. {}안에는 함수 값들이 들어간다. 1단계 시작.
//그런다음에 useEffect 를 선언해준다. / 어떠한 효과를 줄것인 지에 대한 함수 선언.

const App = () => {
    const [weus, setWeus] = useState([])
    //안에 콘스트를 선언을 하고 해당 데이터 값들이 담길 그릇을 만들어준다.
    //임의로 지정해서 A 와 A-1 을 지정해서 만들어준다. 데이터가 담기는 그릇이 A-1 이라고 생각하면 된다.

    useEffect(() => {
        console. log("hi")
    },[])

    return (
        <div>
            <h1>
            {weus.length}
            {/*데이터를 뿌려주기 위해서 함수를 선언해준다.*/}
            </h1>
        </div>
    );
};

export default App;
