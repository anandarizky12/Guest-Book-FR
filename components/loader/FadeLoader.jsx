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
        <div className="inset-2/4  translate-x-2/4 translate-y-2/4 absolute ">
            <ClipLoader color={'#555'} loading={true} css={override} size={150} />
        </div>
    )
}

export default Loader
