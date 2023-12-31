import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: ${(props) => props.theme.bgColor};
  height: 100vh;
  width: 100vw;
`;
const H1 = styled.h1`
  color: ${(props) => props.theme.textColor};
`;

function App() {
  const [value, setValue] = useState("");

  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setValue(value);
  };
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("hello", value);
  };
  return (
    <Container>
      <div>
        <form onSubmit={onSubmit}>
          <input
            value={value}
            onChange={onChange}
            type="text"
            placeholder="username"
          ></input>
          <button>Log in</button>
        </form>
      </div>
      <H1>protected</H1>
    </Container>
  );
}

export default App;
