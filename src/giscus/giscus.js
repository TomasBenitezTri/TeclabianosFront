import Giscus from 'react-giscus';

import React from "react";

export function Commentario(){
    return( <Giscus className="giscus"
        repo="TomasBenitezTri/TeclabianosFront"
        repoId="R_kgDOHj0JCA"
        category="General"
        categoryId="DIC_kwDOHj0JCM4CP_dU"
        mapping="pathname"
        theme="light"
        reactionsEnabled="0" />
    );
}