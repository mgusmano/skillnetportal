import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import axios from 'axios';
//import logoImg from "../img/logo.jpg";
import logoImg from "../../images/logo.png";
import { Card, Logo, Form, Input, Button, Error } from "../../components/AuthForms";
import { useAuth } from "../../context/auth";

function Login(props) {
  const [referer, setReferer] = useState('/'); //var referer = '/cardcnasme';
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [userName, setUserName] = useState("skillnet");
  const [password, setPassword] = useState("");
  const { setAuthTokens } = useAuth();
  //const referer = props.location.state.referer || '/';

  function postLogin() {
    setIsLoading(true);
    axios.get("https://skillnetusersapi.azurewebsites.net/api/users?partnerid=434", {
      //auth: {username: 'skillnet',password: 'demo'},
      auth: {username: userName, password: 'demo'},
      //userName,
      //password
    }).then(result => {
      var where
      switch (password) {
        case 'cnasme':
          where = '/card' + password
          setReferer(where)
          break;
        case 'cnaadmin':
          where = '/cardcnasme'
          setReferer(where)
          break;
        case 'cna':
          where = '/card' + password
          setReferer(where)
          break;
        case 'cnacovid':
          where = '/cnacovid'
          setReferer(where)
          break;
        case 'cnacovidadmin':
          where = '/covidcnaprevisit'
          setReferer(where)
          break;
        case 'gmi':
          where = '/card' + password
          setReferer(where)
          break;
        default:
          console.log('bad password')
          setIsError(true);
          break;
      }

      //console.log('referer',referer)
      setIsLoading(false);
      if (result.status === 200) {
        setAuthTokens(password);
        setLoggedIn(true);
      } else {
        setIsError(true);
      }
    }).catch(e => {
      console.log(e)
      setIsError(true);
    });
  }

  if (isLoggedIn) {
    return <Redirect to={referer} />;
  }

  return (
    <Card>
      <Logo src={logoImg} />
      <Form>
        <Input
          type="username"
          value={userName}
          onChange={e => {
            setUserName(e.target.value);
          }}
          placeholder="ID"
        />
        <Input
          type="password"
          value={password}
          onChange={e => {
            setPassword(e.target.value);
          }}
          placeholder="password"
        />
        <Button onClick={postLogin}>Sign In</Button>
      </Form>
      {/* <Link to="/signup">Don't have an account?</Link> */}
        { isError &&<Error>The username or password provided were incorrect!</Error> }

        { isLoading &&<div>Loading...</div> }
    </Card>
  );
}

export default Login;