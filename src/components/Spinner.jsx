import { FaSpinner } from "react-icons/fa";
import SpinnerStyles from "./Spinner.module.css"


export function Spinner() {
    return (
        <div className={SpinnerStyles.spinner}>
            <FaSpinner className={SpinnerStyles.spinning} size={60} />
        </div>
    )
}
