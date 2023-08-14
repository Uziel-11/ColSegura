import React from "react";
import "../assets/stylesheets/cardHome.css"
import alarma from "../assets/img/alarma.png"
import bd from "../utils/invokeBackend"

class card extends React.Component{

    activeAlarm(){
        let information = {
            asset: localStorage.getItem("username"),
            activate: true
        }

        bd.activeAlarm(`/alarm/activate`, information, data => {
            console.log(data)
        },
            error => {
            alert(error.message)
            })
    }

    render() {
        return(

            <div className="row justify-content-center" style={{marginTop:"100px",margin:"4%",padding:"12%",background:"#0076F4"}}>

                <div className="container  d-flex justify-content-center" >
                    <div >
                        <button onClick={this.activeAlarm.bind(this)} className="btn btn-danger" type="button" style={{ backgroundColor: "#E04F5F", borderRadius: "30px" }}> <img src={alarma} width="120" height="120"/> </button>

                    </div>
                </div>
            </div>


        )
    }
}

export default card;