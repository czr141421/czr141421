import React, { useState, useMemo, useEffect } from "react";
import { Button, Checkbox } from "antd";
import { useReactive } from "ahooks";
import axios from "axios";
import Message from "../utils/Message.js";
import Comp from "../Components/Comp/index";
import "./home.css";

let textnum = 0;

export default function Home() {
    const state = useReactive({
        list: [],
        inputVal: "",
    });

    useEffect(() => {
        console.log("变化=======", textnum);
    }, [textnum]);

    useEffect(() => {
        const scrolHeight = document.querySelector(".rightCont").scrollHeight;

        const scrollTop = document.querySelector(".rightCont").scrollTop;

        const cliHeight = document.querySelector(".rightCont").clientHeight;
        console.log(
            "scrolHeight",
            scrolHeight,
            "scrollTop",
            scrollTop,
            "cliHeight",
            cliHeight
        );
        getData();
    }, []);

    const getData = async () => {
        let res = await axios.get("http://localhost:8000/bars");
        state.list.push(...res.data);
        return res;
    };

    return (
        <div>
            <Button onClick={getData}>请求</Button>
            <Button
                onClick={() => {
                    Message.success({ msg: "9999" });
                }}
            >
                success
            </Button>
            <Button
                onClick={() => {
                    Message.error({ msg: state.inputVal });
                }}
            >
                error
            </Button>
            <Button
                onClick={() => {
                    Message.warn({ msg: state.inputVal });
                }}
            >
                warn
            </Button>
            <input
                type="text"
                value={state.inputVal}
                onChange={(e) => (state.inputVal = e.target.value)}
            />
            <div
                style={{
                    // display: "inline-block",
                    display: "inline",
                    // zoom: 1,
                    border: "solid 1px red",
                }}
            >
                pppp----------
            </div>
            <div className="all">
                <div className="rightCont">
                    {state.list.map((i, ind) => (
                        <p
                            key={ind}
                            style={{
                                border: "solid 1px red",
                                background: "blue",
                            }}
                        >
                            {i.name + i.barStyle}
                        </p>
                    ))}
                </div>
            </div>
        </div>
    );
}
