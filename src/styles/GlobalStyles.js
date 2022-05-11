import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Ubuntu', sans-serif;
    }
    body{
        background-image: linear-gradient(to right, #4facfe 0%, #00f2fe 100%);
    }
    main{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    h2{
        font-size: 1.8rem;
        text-align: center;
        margin: 150px 0;
        color:white;
    }
    p{
        font-size: 0.8rem;
        color:white;
        border-bottom: 1px solid;
        margin: 5px 0;
        
    }
    h3{
        color:white;
        text-align: center;
        font-size: 2rem;
    }
`
