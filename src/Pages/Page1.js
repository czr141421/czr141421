import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Input, Button, Select } from "antd";
import { useReactive } from "ahooks";
export default function Page1() {
    const [obj, setObj] = useState({ num: 0, arr: [] });
    let [num, setNum] = useState(0);
    const [arr, setArr] = useState([]);
    const state = useReactive({
        num: 0,
        arrTime: [],
    });

    useEffect(() => {
        const timer = setInterval(() => {
            // setObj({ ...obj, num: (obj.num += 1) });
            // setNum(num++);
            // console.log("--==", num);
        }, 1000);
        // state.arrTime.push(timer);
        // setArr({ arr: arr.push(timer) });
        arr.push(timer);
        console.log("---arr", arr);
        return () => {
            clearInterval(timer);
        };
    }, []);
    return <div>page1===:{state.num}</div>;
}
