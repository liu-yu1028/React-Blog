import { Link } from "react-router-dom"

export default function NotFound(){
    return (
        <div>
            <h2>找不到頁面</h2>
            <p>回到<Link to ="/">首頁</Link></p>
        </div>
    )
}