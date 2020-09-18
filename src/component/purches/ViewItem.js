import React from 'react'
import { http } from '../../axios'

function ViewItem() {
    const [viewdata,setviewData] = useState([])
    useEffect(() => {
        http.get("purches/tempItems")
            .then(res=>{
                console.log(res.data)
                setviewData(res.data)
            })
            .catch(err=>{
                console.log(err)
            })
    }, [])
    return (
        <div>
            {
                viewdata.map(data=><p>{data.product}</p>)
            }
        </div>
    )
}

export default ViewItem
