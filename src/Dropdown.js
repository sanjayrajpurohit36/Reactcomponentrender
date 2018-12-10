import React from  'react'

export default class Dropdown extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            position : this.props.position !== undefined ? this.props.position : "absolute",
			margin: this.props.margin !== undefined ? this.props.margin : 'auto',
			backgroundColor : this.props.backgroundColor !== undefined ? this.props.backgroundColor : "grey",
			zIndex : this.props.zIndex !== undefined ? this.props.zIndex : "2",
			display : this.props.display !== undefined ? this.props.display : false,
			id : this.props.id !== undefined ? this.props.id : ""
		}	
	}

	componentWillReceiveProps(nextProps){
		if(this.props.position !== nextProps.position){     
            this.setState({
                position : nextProps.position
            })
		}

		if(this.props.margin !== nextProps.margin){     
            this.setState({
                margin : nextProps.margin
            })
		}

		if(this.props.backgroundColor !== nextProps.backgroundColor){     
            this.setState({
                backgroundColor : nextProps.backgroundColor
            })
		}

		if(this.props.zIndex !== nextProps.zIndex){     
            this.setState({
                zIndex : nextProps.zIndex
            })
		}
	}
	
    render() {
		var style = {
			position: this.state.position,
			margin: this.state.margin,
			backgroundColor: this.state.backgroundColor,
			zIndex: this.state.zIndex,
			...this.props.style
		}

		if(this.state.display)
			return(
				<React.Fragment>
					<div style = {style}>
						{this.props.children}
					</div>
				</React.Fragment>
			)
		else return null;
    }
}

