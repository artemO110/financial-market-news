import { useNavigate } from "react-router-dom";

export const Header = () => {
    const navigate = useNavigate()
    return (
        <>
            <div className="header">
                <div onClick={() => navigate('/', { replace: true })} className="header-logo">

                    <span className="header-site-name">sharetrade</span>
                    <span className="header-dot-com">.com</span>
                </div>
            </div>


        </>
    )
}