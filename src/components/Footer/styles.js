import styled from 'styled-components';

export const Container = styled.div`
  background: #4b4b4b;
  display: flex;
  align-self: flex-end;
  align-items: center;
  flex-direction: row;
  height: 250px;
  width: 100%;
  padding: 0 8% 0 8%;
`;

export const Box = styled.div`
  height: 80%;
  width: 25%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  p {
    font-family: Poppins, sans-serif;
    font-weight: 600;
    font-size: 18px;
    padding-bottom: 5px;
    color: #fff;
  }

  a {
    color: #fff;
    font-size: 14px;
    font-weight: 600;
    padding: 7px 0 7px 0;
  }
`;

export const BoxImage = styled.div`
  height: 80%;
  width: 25%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Card = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  background: #242323;
  padding: 3% 8% 3% 8%;
  margin-bottom: 50px;
  align-items: center;
`;

export const Carta = styled.div`
  width: 65%;
  display: flex;
  flex-direction: row;
  align-items: center;

  div {
    padding-left: 3%;
    display: flex;
    flex-direction: column;

    h1 {
      font-family: Poppins, sans-serif;
      font-weight: 500;
      font-size: 20px;
      color: #fff;
    }

    p {
      font-family: Poppins, sans-serif;
      font-weight: 200;
      font-size: 20px;
      color: #f7a230;
    }
  }
`;

export const Email = styled.div`
  width: 35%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;

  input {
    width: 80%;
    border-radius: 50px 0 0 50px;
    height: 40px;
    border: 1px solid #acacac;
    padding-left: 20px;
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
`;
