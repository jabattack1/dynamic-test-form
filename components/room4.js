import React from 'react';
import styled from 'styled-components';

const Checkbox = styled.input`
	position: absolute;
	top: -18px;
	left: 0;
`; 

const GridItem = styled.div`
	position: relative;
	display: inline-block;
  	}
`;

const Item = styled.div`	
	position: relative;
	display: flex;
	flex-basis: calc(15% - 4rem);
	flex-grow: 1;
	flex-shrink: 0;
	margin: 0 auto;
	background: white;
	padding-bottom: 11px;
	padding-left: 11px;
	padding-right: 11px;
	padding-top: 11px
`;


const ItemWrap = styled.div`	
	margin-left: 7px;
	padding-top: 3px;
	padding-bottom: 3px;
	padding-left: 3px;
	padding-right: 3px;
	background: #EAEAEA;
	max-width: 180px;
	max-height: 200px
	border-radius: 5px;
`;

const ItemNay = styled.div`	
	position: relative;
	display: flex;
	flex-basis: calc(15% - 4rem);
	flex-grow: 1;
	flex-shrink: 0;
	margin: 0 auto;
	background: #DADDE8;
	padding-bottom: 11px;
	padding-left: 11px;
	padding-right: 11px;
	padding-top: 11px
`;

const ItemWrapNay = styled.div`	
	margin-left: 7px;
	padding-top: 3px;
	padding-bottom: 3px;
	padding-left: 3px;
	padding-right: 3px;
	background: #C3CAE2;
	max-width: 180px;
	max-height: 200px
	border-radius: 5px;
`;

const Box = styled.div`
	position: relative;
	display: inline-block;
`;

const Slot = styled.div`
	margin: 7px
`;
const Heading2 = styled.span`
	font-weight: bold;
	font-size: 15px;
	margin-left: 20px;
`;

const Heading2Nay = styled.span`
	font-weight: bold;
	font-size: 15px;
	padding-left: 20px;
	background: #DADDE8;
	display: flex;
	flex-basis: calc(15% - 4rem);
	flex-grow: 1;
	flex-shrink: 0;
	border-radius-left: 5px;
	border-radius-right: 5px;
`;

const P = styled.p`
	margin: 1px 0;
	font-size: 12px;
`;

class Room4 extends React.Component{

	constructor(props) {

	  	super(props);

	  	if(this.props.data !== undefined){
		  	this.state = {
				room: 4,
		    	adults: this.props.data.adults4,
				children: this.props.data.children4
		  	};
		}
		else{	
		console.log('tot4');		
			this.state = {
				room: 4,
			    adults: 1,
				children: 0
			};
		}
	}

	state = {}

	render() {

		let select = '';
		let optionsAdults = '';
		let optionsChildren = '';

		if(this.props.data !== undefined){
			if(this.props.data.adults4 === 2){
				optionsAdults=
					<React.Fragment>
					<option>{1}</option>
					<option selected>{2}</option>
					</React.Fragment>
			}
			else{
				optionsAdults=
					<React.Fragment>
					<option selected>{1}</option>
					<option>{2}</option>
					</React.Fragment>
			}

			if(this.props.data.children4 === 0){
				optionsChildren =
					<React.Fragment>
					<option selected>{0}</option>
					<option>{1}</option>
					<option>{2}</option>
					</React.Fragment>
			}
			else if(this.props.data.children4 === 1){
				optionsChildren =
					<React.Fragment>
					<option>{0}</option>
					<option selected>{1}</option>
					<option>{2}</option>
					</React.Fragment>
			}
			else if(this.props.data.children4 === 2){
				optionsChildren =
					<React.Fragment>
					<option>{0}</option>
					<option>{1}</option>
					<option selected>{2}</option>
					</React.Fragment>
			}
			else{
				optionsChildren =
					<React.Fragment>
					<option>{0}</option>
					<option>{1}</option>
					<option>{2}</option>
					</React.Fragment>
			}
		}	
		else{
			optionsAdults =
				<React.Fragment>
				<option>{1}</option>
				<option>{2}</option>
				</React.Fragment>

			optionsChildren =
				<React.Fragment>
				<option>{0}</option>
				<option>{1}</option>
				<option>{2}</option>
				</React.Fragment>
		}

		if(this.state.check===true){
			select = 
				<ItemWrap>
					<Heading2>Room {this.state.room}</Heading2>
						<Item>
							<Checkbox type='checkbox' onClick={() => this.getStuff()} checked/>
							<Slot>
								<P>Adults</P>
								<P>(18+)</P>
								<div>
								<select id='selection' onChange={e=>this.setState({adults: parseInt(e.target.value)}, function () {this.props.fromChildToParentCallback([this.state.check, this.state.room, this.state.adults, this.state.children]);
								})}>
								{optionsAdults}
								</select>
								</div>
							</Slot>
							<Slot>
								<P>Children</P>
								<P>(0-17)</P>
								<select onChange={e=>this.setState({children: parseInt(e.target.value)}, function () {
										this.props.fromChildToParentCallback([this.state.check, this.state.room, this.state.adults, this.state.children]);
				        		})}>
								{optionsChildren}
								</select>
							</Slot>
						</Item>
				</ItemWrap>
		}
		else{
			select = 
				<ItemWrapNay>
					<Heading2Nay>Room {this.state.room}</Heading2Nay>
						<ItemNay>
							<Checkbox type='checkbox' onClick={() => this.getStuff()} />
							<Slot>
								<P>Adults</P>
								<P>(18+)</P>
								<select disabled>
									<option>{1}</option>
									<option>{2}</option>
								</select>
							</Slot>
							<Slot>	
								<P>Children</P>
								<P>(0-17)</P>
								<select disabled>
									<option>{0}</option>
									<option>{1}</option>
									<option>{2}</option>
								</select>
							</Slot>	
						</ItemNay>
				</ItemWrapNay>
		}
		
		return (
			<GridItem>
				<Box>
					{select}
				</Box>
			</GridItem>
		);
	}

	componentWillReceiveProps(nextProps) {
  		if(this.props != nextProps) {
    		if(this.props.data!==undefined){
    			this.setState({check: nextProps.check, adults: this.props.data.adults4, children: this.props.data.children4});
    		}
    		else{
    			this.setState({check: nextProps.check, adults: this.state.adults, children: this.state.children});
    		}
  		}
	}

	getStuff(){
		this.setState({check: !this.state.check, adults: this.state.adults || 1, children:this.state.children}, function () {
			if(this.props.data!==undefined){
				this.props.fromChildToParentCallback([this.state.check, this.state.room, this.props.data.adults4, this.props.data.children4]);
			}
			else{
				this.props.fromChildToParentCallback([this.state.check, this.state.room, this.state.adults, this.state.children]);
			}
        });
	}

}


export default Room4;