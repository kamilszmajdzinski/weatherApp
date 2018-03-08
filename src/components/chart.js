import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';
import _ from 'lodash';

function average(data){
	return _.round(_.sum(data)/data.length);
}

export default (props) =>{
	return (
			<div>
				<Sparklines data={props.data} height={120} width={180} >
					<SparklinesLine style={{ stroke: "Black", fill: props.color,  fillOpacity: "0.3" }} />
					<SparklinesReferenceLine type = 'avg'/>
				</Sparklines>
				<div> Średnia: {average(props.data)} {props.units} </div>
			 </div>
		)
}