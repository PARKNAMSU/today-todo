import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset};
    body{
        padding: 0;
        margin: 0;
        width: 100%;
        height: 100%;
        background-color:#f5f3ef;
    };
    html{
        width: 100%;
        height: 100%;
    }
    button{
        cursor:pointer;
    }
    div{
        box-sizing:border-box;
        font-weight: bold;
        letter-spacing: 1px;
        text-transform: uppercase;
        text-decoration: none;
    }
    a{
        text-decoration: none;
    }
    input{
        line-height: normal;
        padding: 0.8em 0.5em;
        font-family: inherit;
        border: 1px solid #999;
        border-radius: 0;
        outline-style: none;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        background-color: #f5f3ef;
        font-weight: bold;
        letter-spacing: 1px;
        text-transform: uppercase;
        text-decoration: none;

    }
`;
export default GlobalStyle;
