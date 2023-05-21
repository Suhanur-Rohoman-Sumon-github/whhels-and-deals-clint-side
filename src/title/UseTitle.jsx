

import { useEffect } from "react"

const UseTitle = (titale)=>{
    useEffect(()=>{
        document.title=titale
    },[titale])
}
export default UseTitle