import React, { useState } from "react";
import { Form, Input, Button } from "antd";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "./Capp.scss";
const FormItem = Form.Item;

export default function App() {
    const [name, setName] = useState("");
    const [pwd, setPwd] = useState("");
    const history = useHistory();
    return (
        <Form>
            <FormItem>
                <Input
                    placeholder="请输入用户名"
                    maxLength={5}
                    onChange={(event) => {
                        setName(event.target.value);
                    }}
                ></Input>
            </FormItem>
            <FormItem>
                <Input
                    placeholder="请输入密码"
                    type="password"
                    maxLength={5}
                    onChange={(event) => {
                        setPwd(event.target.value);
                    }}
                ></Input>
            </FormItem>
            <label>
                {name}---{pwd}
            </label>
            <FormItem>
                <Button
                    type="primary"
                    onClick={() => {
                        history.push("/home");
                    }}
                >
                    登录
                </Button>
            </FormItem>
        </Form>
    );
}

function login(name, pwd) {
    return axios.get("../src/data/login.json", {
        params: {
            name,
            pwd,
        },
    });
}
