import React from "react";

const Comp = (props) => {
    console.log("props", props, "----", Math.random());
    return (
        <div>
            {Math.random()}
            {/* <p>{props.data.test}</p> */}
        </div>
    );
};
export default React.memo(Comp);
