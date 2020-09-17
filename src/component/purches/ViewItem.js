import React from 'react'
import { http } from '../../axios'

function ViewItem() {
    useEffect(() => {
        http.get("purches/tempItems")
            .then(res=>{
                console.log(res.data)
            })
            .catch(err=>{
                console.log(err)
            })
    }, [])
    return (
        <div>
            
        </div>
    )
}

export default ViewItem
