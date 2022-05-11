import styled from "styled-components";

export const Img = styled.img`
    width: 100%;
    @media screen and (min-width: 700px) {
        width: 300px;
        margin-left: 20px;
    }
`
export const MainSection = styled.section`
    @media screen and (min-width: 700px) {
    display: flex;
    width: 100%;
    margin-top: 20px;
    justify-content: center;
    } 
`
export const Section = styled.section`
    width: 100%;
    background: black;
    padding: 10px;
    margin: 10px 0;
    border-radius: 10px;
    max-width: 600px;
    @media screen and (min-width: 700px) {
        margin: 0 20px;
    } 
    `
export const Ul = styled.ul`
    display: flex;
    border-top: ${(props)=> props.border};
    border-bottom: "1px solid gray";
    justify-content: space-between;
`
export const Li = styled.li`
    font-size: ${(props)=> props.size};
    margin:10px 0;
    color:white;
    list-style:none ;
`
export const ButtonGet = styled.button`
    width: 200px;
    padding: 10px 0;
    margin: 20px;
    cursor:pointer;
    border-radius: 10px;
    border: none;
    display: ${(props) => props.display};
    justify-content: ${(props) => props.center};
    font-size: 1.2rem;
    background: linear-gradient(to right, #4776E6 0%, #8E54E9 51%, #4776E6 100%);
    color: white;
    font-weight: bold;
`