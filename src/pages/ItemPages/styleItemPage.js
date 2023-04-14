import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const Header = styled.div`
    width: 100%;
    height: 35px;
    background-color: #ef9ea3;
    display: flex;
    align-items: center;
    font-size: 18px;
    border: 1px solid #8b8b8b;
    justify-content: center;
    font-weight: bold;
    img{
        width: 22px;
        height: 22px;
        margin-left: 15px;
        margin-right: 10px;
    }

`
export const Body = styled.div`
    width: 100%;
    height: 100%;
    background-color: #ffffff;
    display: flex;
    justify-content: center;
`
export const FormContainer = styled.form`
    width: 100%;
    height: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const InputArea = styled.div`
    width: 95%;
    height: 250px;
    border: 1px solid #cccccc;
    border-radius: 25px;
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    
`
export const Top = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    margin-top: 10px ;
`
export const Codigo = styled.div`
    width: 30%;
    height: 45px;
    display: flex;
    flex-direction: column;
    margin-left: 30px;
    margin-top: 30px;
    position: relative;
    left: 60px;
    input{
        margin-top: 10px;
        width: 90%;
        height: 18px;
    }
`
export const Preco = styled.div`
    width: 30%;
    height: 45px;
    display: flex;
    flex-direction: column;
    margin-left: 15px;
    margin-top: 30px;
    position: relative;
    left: 100px;
    input{
        margin-top: 10px;
        width: 90%;
        height: 18px;
    }
`
export const Bottom = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    margin-top: 30px;
    justify-content: center;
`

export const Descricao = styled.div`
    width: 80%;
    height: 45px;
    display: flex;
    flex-direction: column;
    margin-left: 30px;
    margin-top: 30px;
    input{
        margin-top: 10px;
        width: 90%;
        height: 18px;
    }
`
export const ButtonArea = styled.div`
    position: absolute;
    width: 100%;
    height: 35px;
    display: flex;
    justify-content: right;
    bottom: 130px;
    right: 440px;
    button{
        width: 160px;
        height: 40px;
        background-color: #9389bd;
        border: none;
        margin-left: 20px;
    }
`
export const RegisterTable = styled.div`
    width: 700px;
    height: 430px;
    margin-top: 70px ;
    
    
`