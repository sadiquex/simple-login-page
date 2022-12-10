import styled from "styled-components";

// the whole thing
export const page = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
// container
export const container = styled.div`
  background: rgb(252, 186, 2);
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 30rem;
  height: 40rem;
  padding: 2rem;
  box-shadow: 0.5rem 0.7rem 50px rgba(0, 0, 0, 0.5);

  @media screen and (max-width: 400px) {
    background-color: #eee;
  }
  @media screen and (max-width: 600px) {
    background-color: rgb(183, 183, 255);
  }
`;

// container h1
export const containerHeader = styled.h1`
  color: #fff;
  margin: 1rem auto;
  text-transform: uppercase;
`;

// container input
export const containerInput = styled.input`
  margin: 0.5rem;
  padding: 0.8rem 1rem;
  background-color: rgb(255, 123, 0);
  font-family: inherit;
  border: 2px solid #fff;
  color: #fff;
  border-radius: 10px;

  &:focus {
    outline: none;
  }
`;
// btn
export const Button = styled.button`
  padding: 0.5rem 1rem;
  background-color: #000;
  color: #fff;
  border: 0;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  font-size: 1.6rem;

  &:hover {
    transform: scale(1.09);
    box-shadow: 4px 5px 20px rgba(0, 0, 0, 0.3);
  }
  &:active {
    transform: scale(0.98);
    box-shadow: 4px 5px 5px rgba(0, 0, 0, 0.6);
  }
`;
// or
export const LoginUsing = styled.a`
  text-decoration: none;
`;
// use-accounts
export const UseAccounts = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2rem 1rem;
  /* border: 2px solid green; */
`;
// google button
export const google = styled.button``;
// icons
export const icons = styled.i`
  padding: 15px;
  border: none;
  gap: 20px;
`;
// click me
export const clickMe = styled.div`
  font-size: 20px;
  margin: 0.5rem 0;
  cursor: pointer;
  color: ${(props) => (props.clicked ? "red" : "blue")};
  /* display: ${(props) => (props.clicked ? "none" : "block")}; */
`;

// popup message
export const thankyou = styled.p`
  color: #fff;
  font-size: 20px;
  margin: 0.5rem 0;
  background: rgba(0, 0, 0, 0.85);
  height: 100%;
  width: 100%;
  z-index: 200;
  position: absolute;
  top: 0;
  left: 0;
  text-align: center;
  /* display */
  display: ${(props) => (props.clicked ? "flex" : "none")};
  justify-content: center;
  align-items: center;
`;
