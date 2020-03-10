import styled from 'styled-components';

export const Container = styled.div``;
export const Start = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 35px;
  width: 100%;
  background: #00516f;
  padding: 0 8% 0 8%;

  a {
    font-size: 13px;
    color: #fff;
    padding-left: 10px;
  }
`;
export const Finish = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 130px;
  width: 100%;
  background: #fff;
  padding: 0 8% 0 8%;

  a {
    font-size: 15px;
    color: #4d4d4d;
    padding-left: 10px;
  }

  nav {
    margin-right: -170px;
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
      width: 50px;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      background: #f7a230;
      border: 1px solid #f7a230;
      border-radius: 0 50px 50px 0;
    }
  }
`;
