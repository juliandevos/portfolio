import React, { useEffect, useState} from "react";
import TextLoop from "react-text-loop";

const Loop = () => (
        <div>
            <TextLoop
                springConfig={{ stiffness: 70, damping: 31 }}
                adjustingSpeed={500}
            >
                <span>Indexing node-modules</span>
                <span>Installing dependencies</span>
                <span>Starting localhost:3000</span>
                <span>Finished in 15.1 seconds</span>
            </TextLoop>{" "}
        </div>
);

export default Loop;