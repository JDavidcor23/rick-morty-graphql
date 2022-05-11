import styled from 'styled-components'

export const ListLi = styled.li`
    display: flex;
    width: 90%;
    justify-content: space-between;
    background: black;
    margin: 0 auto;
    margin-top: 10px;
    margin-bottom: 10px;
    align-items: center;
    border-radius: 10px;
`
export const ImgList = styled.img`
    width: 100px;
    margin: 10px 10px;
    border-radius: 10px;
`
export const ButtonView = styled.button`
    width: 100px;
    padding: 10px;
    border-radius: 10px;
    background: ${({theme}) => theme.colors.white};
    margin: 0 15px 0 0;
    color: ${({theme}) => theme.colors.purple};
    font-size: 1rem;
    border: 1px solid ${({theme}) => theme.colors.blue};
    cursor: pointer;
    &:hover{
        background: ${({theme}) => theme.colors.purple};
        color:${({theme}) => theme.colors.white};
    }
    `
export const H4 = styled.h4`
    font-size: 1.2rem;
    color: white;
`
export const DivOne = styled.div`
    display:flex;
    align-items: center;
`
export const Contain = styled.div`
    width: 100%;
    margin-top:10px ;
    text-align: center;
`
export const Input = styled.input`
    margin: 20px 0 ;
    padding: 10px;
    border-radius: 10px;
    border: none;
    font-size:1.4rem ;
`