import { useState } from "react";
import { Component } from "react";

class HeadingComponent extends Component {
    state = {
        loginBtn: "Login"
    }
    handleLogin = () => {
        this.setState(
            {
                loginBtn: this.state.loginBtn==="Login"?"Logout":"Login"
            }
        );
    }
    render() {
        console.log("call coming here ")
        
        return (
            <div className="flex justify-around shadow-lg">
                <div className="flex justify-center">
                    <img src="https://img.freepik.com/premium-vector/restaurant-logo-design-template_79169-56.jpg?w=2000" height={"30px"} width="120px"></img>
                </div>
                <div >
                    <ul className="grid grid-cols-6 gap-8 py-15 font-semibold text-xl font-sans">
                        <li className="hover:text-orange-400 hover:cursor-pointer">Home</li>
                        <li className="hover:text-orange-400 hover:cursor-pointer">About</li>
                        <li className="hover:text-orange-400 hover:cursor-pointer">Contact</li>
                        <li className="hover:text-orange-400 hover:cursor-pointer">Services</li>
                        <li className="hover:text-orange-400 hover:cursor-pointer">Blog</li>
                        <li className="hover:text-orange-400 hover:cursor-pointer -ms-8">Portfolio</li>
                    </ul>
                    <div className="grid grid-cols-subgrid col-span-6 gap-8">
                        <button className="bg-orange-400 text-white font-semibold hover:bg-orange-500 rounded-xl col-start-6 -mt-10 mb-2" onClick={this.handleLogin}>{this.state.loginBtn}</button>
                    </div>
                </div>
            </div>
        )
    }
}


// const HeadingComponent = function() {
//     const [loginBtn, setLoginBtn]=useState("Login");
//     // function setLoginBtn(){
//     //     loginBtn=loginBtn=="Login"? "Logout" : "Login";
//     // }
//     return ( 
//         <div className="flex justify-around shadow-lg">
//             <div className="flex justify-center">
//                 <img src="https://img.freepik.com/premium-vector/restaurant-logo-design-template_79169-56.jpg?w=2000" height={"30px"}width="120px"></img>
//             </div>
//             <div >
//                 <ul className="grid grid-cols-6 gap-8 py-15 font-semibold text-xl font-sans">
//                     <li className="hover:text-orange-400 hover:cursor-pointer">Home</li>
//                     <li className="hover:text-orange-400 hover:cursor-pointer">About</li>
//                     <li className="hover:text-orange-400 hover:cursor-pointer">Contact</li> 
//                     <li className="hover:text-orange-400 hover:cursor-pointer">Services</li>
//                     <li className="hover:text-orange-400 hover:cursor-pointer">Blog</li>
//                     <li className="hover:text-orange-400 hover:cursor-pointer -ms-8">Portfolio</li>
//                 </ul>
//                 <div className="grid grid-cols-subgrid col-span-6 gap-8">
//                     <button className="bg-orange-400 text-white font-semibold hover:bg-orange-500 rounded-xl col-start-6 -mt-10 mb-2" onClick={()=>{
//                         setLoginBtn(loginBtn=="Login"? "Logout" : "Login");
//                         console.log(loginBtn);

//                         }}>{loginBtn}</button>
//                 </div>
//             </div>   
//         </div>
//     );

// }

export default HeadingComponent;