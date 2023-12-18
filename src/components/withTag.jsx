import React from "react";
import Popular from "./Popular";
import New from "./New";

export const withTag = (Component) => {
    return class extends React.Component {
        state = {}

        checkTag() {
            if (this.props.views > 1000) {
                this.setState({ popular: true })
            } else if (this.props.views < 100) {
                this.setState({ new: true })
            }
        }

        componentDidMount() {
            this.checkTag()
        }

        componentDidUpdate () {

        }

        render() {
            return this.state.popular ?
                <Popular>
                    <Component {...this.props} />
                </Popular> :
                this.state.new ?
                    <New>
                        <Component {...this.props} />
                    </New> :
                    <Component {...this.props} />
        }
    }
}