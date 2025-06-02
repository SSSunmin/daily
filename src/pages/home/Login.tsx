import {useState} from "react";
import Modal from "../../components/Modal.tsx";
import SignUp from "./SignUp.tsx";
import {login} from "../../service/auth.ts";

const Login = ({handleLogin}:{handleLogin:()=>void}) => {
    const [showSignUp, setShowSignUp] = useState<boolean>(false);
    const [id, setId] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const onClickLogin =async ()=>{
        const data = {
            "loginId":id,
            "password": password,
        }
        await login(data)
        handleLogin()
    }

    return (
        <>
            <div className={`w-[280px] py-[32px] flex flex-col justify-center align-center rounded-[24px] bg-white border border-[#E6E6E6]`}>
                <div className={`flex justify-center flex-col gap-[10px] px-[15px] py-[20px]`}>
                    <div className={'border border-[#A9A9B2] h-[40px] flex items-center justify-center px-[10px] rounded-[6px]'}>
                        <input className={'w-full outline-0 '} placeholder={"아이디 입력"} value={id} onChange={(e)=>setId(e.target.value)}/>
                    </div>
                    <div className={'border border-[#A9A9B2] h-[40px] flex items-center justify-center px-[10px] rounded-[6px]'}>
                        <input type={'password'} className={'w-full outline-0 '} placeholder={"비밀번호 입력"} value={password} onChange={(e)=>setPassword(e.target.value)}/>
                    </div>
                    <button className={'flex justify-center items-center w-full h-[50px] bg-[#2BC09D] text-white font-bold rounded-[50px]'} onClick={onClickLogin} >
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                            <path d="M12.5 11.5V4M7.20835 6C5.54751 7.46589 4.5 9.61061 4.5 12C4.5 16.4183 8.08172 20 12.5 20C16.9183 20 20.5 16.4183 20.5 12C20.5 9.61061 19.4525 7.46589 17.7916 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <p className={'text-[20px] font-bold ml-[10px] leading-[-0.6px]'}>로그인하기</p>
                    </button>
                    <p className={'text-center text-[#A9A9B2] text-[16px] font-semibold cursor-pointer'} onClick={()=>setShowSignUp(true)}>회원가입</p>
                </div>
            </div>
            {showSignUp && <Modal>
                <SignUp closeModal={() => setShowSignUp(false)}/>
            </Modal>}
        </>
    );
};

export default Login;
