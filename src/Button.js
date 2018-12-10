import React from 'react';

export default class Button extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
			style: this.props.style !== undefined ? this.props.style : {},
			label: this.props.label !== undefined ? this.props.label : ""
        }
    }

    componentWillReceiveProps(nextProps) {
        //nextProps for style
        if (this.props.style !== nextProps.style) {
            this.setState({
                style: nextProps.style
            })
        }
        if(this.props.label !== nextProps.label){
            this.setState({
                label : nextProps.label
            })
        }
    }

    render() {
		const label = this.state.label
		const clickHandler = this.props.onClick !== undefined ? this.props.onClick : null
        return (
            <React.Fragment>
                 <button
                    className={this.props.className} 
				    style={this.state.style}
				    onClick = {clickHandler}>
				 	{label}
                 </button>
            </React.Fragment>
        );
    }
}