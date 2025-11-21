import { Component } from "react";

class UserClass extends Component{
    constructor(){
        super(); // so that Component class methods make params as the  instances of UserClass
        // this.params=params [If we want to give our customize name to the passed object]
        console.log("Constructor called");    
        this.state={
            userInfo: {
                name: "DummyData",
                location: "DummyData",
                company: "DummyData",
                avatar_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/1200px-GitHub_Invertocat_Logo.svg.png"
            }
        }    
    }
    async componentDidMount(){
        console.log("componentDidMount() is called");
        const URL="https://api.github.com/users/harsh-bharwani";
        const response=await fetch(URL);
        const data=await response.json();
        this.setState({
            userInfo: data
        })
    }    
    render(){
        console.log("Render() is called")
        const {name, location, company, avatar_url}=this.state.userInfo;
        return (
            <div className="border p-3">
                <img src={avatar_url} alt="" height={100} width={100} />
               <h1 className="text-2xl">UserName: {name}</h1>
               <h2>Location: {location}</h2>
               <h2>Company: {company}</h2>
               <button onClick={()=> this.setState({count:this.state.count+1})}>{this.state.count}</button>
            </div>
        )
    }
}

export default UserClass;