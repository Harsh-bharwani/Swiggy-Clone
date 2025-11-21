import { Component } from "react";
import UserClass from "./User";

class AboutUs extends Component {
    render() {
        return (
            <div className="p-2">
                <h1>Hello User</h1>
                <p>Learn react from PW-IOI</p>
                <UserClass name="Harsh Bharwani" location="Bengaluru" Company="Physics Wallah" />
            </div>
        )
    }
}

export default AboutUs;