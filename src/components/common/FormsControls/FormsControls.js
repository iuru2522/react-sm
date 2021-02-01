import React from "react";
import "./FormsControls.css"

export const Textarea = ({ input, meta, ...props }) => {
    return (
        <div className={"formControl" + " " + "error"}>
            <div>
                <textarea {...input} {...props} />
            </div>
            <span>"some error"</span>

        </div>
    )
} 