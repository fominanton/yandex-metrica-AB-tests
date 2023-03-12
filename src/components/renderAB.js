import React from "react";
import ym from "react-yandex-metrika";

class RenderAB extends React.Component {
    constructor(props) {
        super(props);
        this.state = {content: false, count: false};
    }

    componentDidMount() {
        let param = {};
        param["a_b"] = {};
        param["a_b"][this.props.name] = sessionStorage[this.props.name];

        ym("params", param);
    }

    componentWillMount() {
        if (!sessionStorage[this.props.name]) {
            const count = this.getCount(0, this.props.group.length - 1);
            this.setState({
                content: this.props.group[count].content,
            });

            sessionStorage[this.props.name] = this.props.group[count].name;
        }

        this.content();
    }

    getCount(min, max) {
        return Math.round(Math.random() * (max - min) + min);
    }

    content() {
        this.props.group.map(item => {

            if (item.name == sessionStorage[this.props.name]) {

                this.setState({content: item.content});
            }
        });
    }

    render() {
        return (
            <>
                {this.state.content}
            </>
        );
    }
}

export default RenderAB;