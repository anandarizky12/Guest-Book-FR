import React from 'react'
import ClipLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/react";
function ButtonLoader() {
    const override = css`
    display: flex;
    margin: 0 auto;
    color: red;
    `;

    return (
             <ClipLoader color={'#ffff'} loading={true} css={override} size={20} />
    )
}

export default ButtonLoader
