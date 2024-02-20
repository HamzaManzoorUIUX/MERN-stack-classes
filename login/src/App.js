import axios from 'axios';
import React, { useEffect, useState } from 'react';

const App = () => {
  const [data, setData] = useState({
    email: '',
    password: ''
  })
  const [userInfo, setUserInfo] = useState({})
  const [login, setlogin] = useState(localStorage.getItem('token'))
  const loginFunction = async () => {
    try {
      const res = await axios.post('http://localhost:8000/auth', data)
      if (res.status === 200) {
        localStorage.setItem('token', res.data.token);
        setlogin(res.data.token)
      }
    } catch (error) {
      console.log(error);
    }
  }
  // console.log(userInfo);
  const getUserInfo = async () => {
    try {
      const response = await axios.get("http://localhost:8000/auth", {
        headers: {
          Authorization: `Bearer ${login}`
        }
      })
      if (response.status === 200) {
        setUserInfo(response.data.data)
      }
    } catch (error) {
      console.log('error', error);
    }
  }
  useEffect(() => {
    if (login) {
      getUserInfo()
    }
  }, [login])
  return login ? (
    <div>
      <div>
        <h1>
          {userInfo?.name}
        </h1>
        <h1>
          {userInfo?.email}
        </h1>
      </div>
      <button onClick={() => {
        setlogin("")
        localStorage.removeItem('token')
        setUserInfo({})

      }}>
        Logout
      </button>
    </div>
  ) : (
    <div>
      <h1>
        Login
      </h1>
      <div>
        <input type='email' value={data.email} onChange={e => {
          setData({ ...data, email: e.target.value })
        }} />
        <input type='password' value={data.password} onChange={e => {
          setData({ ...data, password: e.target.value })
        }} />
        <button type='button' onClick={loginFunction}>Login</button>
      </div>
    </div>
  );
};

export default App;