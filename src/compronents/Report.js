import DataContext from "../data/DataContext";
import {useContext} from "react"
import "./Report.css"

const Report=()=>{

    const {income, expense} = useContext(DataContext)

    return(
    <div>
        <h4>ยอดคงเหลือ (บาท)</h4>
        <h1>{income+expense}</h1>
        <div className="report-container">
            <div>
                <h4>ยอดรายรับ</h4>
                <p className="report plus">{income}</p>
            </div>
            <div>
                <h4>ยอดรายจ่าย</h4>
                <p className="report minus">{expense}</p>
            </div>
        </div>
    </div>
    );
}

export default Report