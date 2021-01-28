import React from "react";
import Preloader from "../../common/Preloader/Preloader";
// import "./ProfileInfo.css";


class ProfileStatus extends React.Component {
    // statusInputRef = React.createRef();

    state = {
        editMode: false,
        status: this.props.status
    }
    activateEdiMode() {
        this.setState({
            editMode: true
        })
    }
    deactivateEdiMode = () => {
        this.setState({
            editMode: false
        })

        this.props.updateStatus(
            // this.statusInputRef.current.value
            this.state.status
        );

    }

    onStatusChange = (e) => {
        if (prevProps.status !== this.props.status) {


            this.setState({
                status: e.currentTarget.value
            });
        }


    }

    componentDidUpdate(prevProps, prevState) {
        this.setState({ status: this.props.status });

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
                        <input
                            onChange={this.onStatusChange}
                            // ref={this.statusInputRef}
                            autoFocus={true}
                            onBlur={this.deactivateEdiMode}
                            value={this.state.status} />
                    </div>
                }
            </div>
        );
    };
}
export default ProfileStatus;
