import { createGlobalStyle } from "styled-components";

const GlobalFont = createGlobalStyle`
    @font-face{
        font-family:'bitbit';
        src:url('//cdn.df.nexon.com/img/common/font/DNFBitBit-Regular.woff'),url('//cdn.df.nexon.com/img/common/font/DNFBitBit-Regular.woff2') ;
    }

    body {font-family: bitbit;}
    button{font-family: bitbit;}
`
export default GlobalFont;