"use client"


import { ToastContainer, toast } from 'react-toastify';

export default function () {


  const login = async() => {
    toast.success("Github Auth started......")
    window.location.href =  "http://localhost:9000/auth/github"
  };


    return (
        <>
            <div className="w-full h-screen  flex items-center justify-center">

                <div className="w-[300px] h-[300px] cursor-pointer flex items-center justify-center">
                    <div className="p-2 flex items-center border-2 border-black cursor-pointer justify-center space-x-5">
                        <div>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="50"
                                height="50"
                                viewBox="0 0 24 24"
                                fill="black"
                            >
                                <path d="M12 0C5.372 0 0 5.372 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 
                                0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 
                                1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.304.762-1.604-2.665-.3-5.467-1.332-5.467-5.932 
                                0-1.31.468-2.38 1.236-3.22-.124-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.48 11.48 0 013.003-.404 
                                11.5 11.5 0 013.003.404c2.29-1.552 3.296-1.23 3.296-1.23.655 1.653.243 2.873.12 3.176.77.84 1.236 1.91 1.236 3.22 
                                0 4.61-2.807 5.628-5.479 5.922.43.37.823 1.096.823 2.21 
                                0 1.595-.015 2.877-.015 3.266 0 .32.216.694.825.576C20.565 21.796 24 17.3 24 12c0-6.628-5.372-12-12-12z"/>
                            </svg>
                        </div>
                        <div className="text-[20px]"><button onClick={login}>Login with Github</button></div>
                    </div>
                </div>

            </div>
            <ToastContainer></ToastContainer>
        </>
    )
}
