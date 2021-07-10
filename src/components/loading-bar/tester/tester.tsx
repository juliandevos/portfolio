import React, { useEffect, useState} from "react";
import Loader from "../loader/loader";

const Tester = () => {
    const [progress, setProgress] = useState(5)

    useEffect(() => {
        let timer = window.setTimeout(function() {
            if (progress < 100) {
                const newProgress = progress + 5;
                setProgress(newProgress)
            } else {
                window.clearTimeout(timer)
                setProgress(5)
            }
        }, 500)
        return () => { window.clearTimeout(timer) }
    }, [progress])

    return (
        <Loader progress={progress}/>
    )
}

export default Tester;