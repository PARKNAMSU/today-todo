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
    input, select,textarea{
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
        text-decoration: none;

    }
    h1 {
        font-size:24px;
        color:#74513e ;
    }
    h2 {
        font-size:20px;
        color: #74513e;
    }
    h3 {
        font-size:18px;
        color: #74513e;
    }
    h4 {
        font-size:16px;
        color: #74513e;
    }
    p {
        font-size:12px;
    }
    tr, td, th{
        border: thin solid #b2876f;
        font-size:12px;
    }
    td, th{
        padding:0.5em 1em;
    }
    blockquote{
        border: 1px solid #b2876f;
        padding:1.5em 2em;
        border-left: 10px solid #b2876f;
        width:80%;
        color: #9c4316;
    }
    ol , ul{
        list-style:auto;
    }
`;
export default GlobalStyle;
