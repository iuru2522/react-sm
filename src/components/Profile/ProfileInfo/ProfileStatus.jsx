import React from "react";
import Preloader from "../../common/Preloader/Preloader";
// import "./ProfileInfo.css";


class ProfileStatus extends React.Component {

    state = {
        editMode: true
    }



    activateEdiMode() {
        // console.log(this.state.editMode);
        this.setState({
            editMode: true
        })
        // console.log(this.state.editMode);
    }


    deactivateEdiMode() {
        // console.log(this.state.editMode);
        this.setState({
            editMode: false
        })
        // console.log(this.state.editMode);
    }




    render() {
        return (

            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEdiMode.bind(this)}>{this.props.status}</span>

                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input autoFocus={true} onBlur={ this.deactivateEdiMode.bind(this)} value={this.props.status} />

                    </div>
                }
            </div>


        );
    };
}
export default ProfileStatus;
