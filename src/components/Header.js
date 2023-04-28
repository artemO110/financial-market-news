import { useNavigate } from "react-router-dom";

const style = {
    header: 'bg-header h-20',
    headerLogo: 'text-left p-5 cursor-pointer',
    headerSiteName: 'font-sans font-bold text-white text-4xl uppercase align-middle',
    headerDotCom: 'font-sans font-bold text-white text-4xl lowercase align-middle'
}

export const Header = () => {
    const navigate = useNavigate()
    return (
        <>
            <div className={style.header}>
                <div onClick={() => navigate('/', { replace: true })} className={style.headerLogo}>

                    <span className={style.headerSiteName}>sharetrade</span>
                    <span className={style.headerDotCom}>.com</span>
                </div>
            </div>


        </>
    )
}