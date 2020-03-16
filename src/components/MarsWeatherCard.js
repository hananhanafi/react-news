import React from 'react';
import * as moment from 'moment';
import { getMarsWeather } from '../data/insightapi';

class MarsWeatherCard extends React.Component{
    state = {
        dataWeatherMars: [],
        sol_key:"",
    }

    componentDidMount(){
        this.fetchMarsWeather();
        
    }

    
    fetchMarsWeather(){
        getMarsWeather()
        .then(data=>{
            
            const key = data.sol_keys[data.sol_keys.length - 1];            
            let marsWeatherHandle = data;
            this.setState({
                sol_key : key,
                dataWeatherMars:data,

            })
        })
        .catch(error=>{
            console.log(error);
        })
    }

    render(){
        const {dataWeatherMars,sol_key} = this.state;
        
        if(dataWeatherMars[sol_key] != undefined){
            console.log('weather',dataWeatherMars[sol_key].AT);
            let date = moment(dataWeatherMars[sol_key].Last_UTC).format('DD MMM, YYYY');
            console.log(date);
            return(
                <div className="card sticky-top shadow mt-5 " style={{width: "100%"}}>
                <img src="https://mars.nasa.gov/system/feature_items/images/5721_Mars-InSight-Lander-320x240.jpg" alt=""/>
                <div className="card-body text-center">
                    <h5 className="card-title">SOL {sol_key}</h5>
                    <p className="card-text mb-0 "> {date}</p>
                    <p className="card-text mb-0 ">High : {dataWeatherMars[sol_key].AT.mx}&#8457;</p>
                    <p className="card-text mb-0 ">Average : {dataWeatherMars[sol_key].AT.av}&#8457;</p>
                    <p className="card-text mb-0 ">Low : {dataWeatherMars[sol_key].AT.mn}&#8457;</p>
                </div>
            </div>
            )
        }
        return (
            <div>
                <h1>Tidak ada</h1>
            </div>
        )

    }


}

export default MarsWeatherCard;