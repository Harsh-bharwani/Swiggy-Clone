


import { Component } from "react";


class FooterComponent extends Component{
    render(){
        return (
            <div style={{padding: "10px", textAlign: "center", color: "blac", background: "lightcoral", marginTop: "20px"}}>   
            <p><span style={{fontWeight:"bold", fontFamily: "Algerian"}}> © 2025 Swiggy LTD. </span> All rights reserved.</p>
            <p>Follow us on social media!</p>
            <ul style={{listStyleType: "none", display: "flex", justifyContent: "center", gap: "20px"}}>    
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
            <li>LinkedIn</li>
            <li>YouTube</li>
            </ul>
            </div>
        )
    }
}
// const FooterComponent = function() {
//     return (
//         <div style={{padding: "10px", textAlign: "center", color: "blac", background: "lightcoral", marginTop: "20px"}}>   
//             <p><span style={{fontWeight:"bold", fontFamily: "Algerian"}}> © 2025 Swiggy LTD. </span> All rights reserved.</p>
//             <p>Follow us on social media!</p>
//             <ul style={{listStyleType: "none", display: "flex", justifyContent: "center", gap: "20px"}}>    
//                 <li>Facebook</li>
//                 <li>Twitter</li>
//                 <li>Instagram</li>
//                 <li>LinkedIn</li>
//                 <li>YouTube</li>
//             </ul>
//         </div>
//     );
// }  

export default FooterComponent;