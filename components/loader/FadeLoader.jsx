import React from 'react'
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";
function Loader() {
    const override = css`
        display: flex;
        margin: 0 auto;
        color: red;
        `;

    return (
            <ClipLoader color={'#555'} loading={true} css={override} size={150} />
    )
}

export default Loader
