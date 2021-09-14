import React from "react";
import { NextPage } from "next";
import { CompanyMetaData, SchoolMetaData } from '../interface/History';

// Icon interface maust be OverridableComponent<SvgIconTypeMap<{}, "svg">>
export const HitoryItem: NextPage<{metadata: CompanyMetaData | SchoolMetaData}> = ({metadata}) =>{
    return(
        <div></div>
    )
}