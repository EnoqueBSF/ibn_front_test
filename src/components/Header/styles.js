import styled from 'styled-components';

export const Start = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 35px;
  width: 100%;
  background: #00516f;
  padding: 0 8% 0 8%;

  p {
    font-family: Poppins, sans-serif;
    font-weight: 500;
    font-size: 13px;
    color: #fff;
    padding-left: 10px;
  }
`;
export const Finish = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100px;
  width: 100%;
  background: #101010;
  padding: 0 8% 0 8%;

  a {
    font-size: 15px;
    color: #f5f5f5;
    padding: 0 15px;
  }

  nav {
  }

  div {
    display: flex;
    flex-direction: row;
    align-items: center;

    input {
      width: 130px;
      border-radius: 50px 0 0 50px;
      height: 40px;
      border: 1px solid #acacac;
      padding-left: 15px;
    }

    button {
      border: 0;
      padding: 10px 25px 10px 25px;
      display: flex;
      justify-content: center;
      align-items: center;
      background: none;
      border: 2px solid #0c93c5;
      border-radius: 50px;

      p {
        color: #f5f5f5;
      }
    }
  }
`;
