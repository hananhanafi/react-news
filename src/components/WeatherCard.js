import React from 'react';

import { getWeather } from '../data/weatherapi';
import moment from 'moment';


class WeatherCard extends React.Component{
    state = {
        city: 1,
        dataLocation: [],
        dataWeather: [],
        dataCondition: [],
        error: false,
        
    };

    componentDidMount(){
        this.fetchWeather();
        
    }

    fetchWeather(city="Yogyakarta"){
        getWeather(city)
        .then(data=>{
            const {dataLocation,dataWeather} = this.state;
            let locationHandle = data.location;
            let weatherHandle = data.current;
            let conditionHandle = weatherHandle.condition;
            this.setState({
                dataLocation: locationHandle,
                dataWeather: weatherHandle,
                dataCondition: conditionHandle
            })
        })
        .catch(error=>{
            console.log(error);
        })
    }


    render(){
        const {dataLocation,dataWeather,error,dataCondition} = this.state;
        if (error) return;
        let date = moment(dataLocation.localtime).format('DD MMM, YYYY')
        return(
            
            <div className="card sticky-top shadow mt-5 " style={{width: "100%"}}>
                <img src="https://rmol.id/images/berita/normal/2015/06/250576_12235007062015_Tugu_Jogja.jpg" alt=""/>
                <div className="card-body text-center">
                    <h5 className="card-title">{dataLocation.name}</h5>
                    <p className="card-text mb-0 "> {date}</p>
                    <img className="" style={{display:"inline-block"}} src={dataCondition.icon} alt="Card image cap"/>
                    <p style={{display:"inline-block"}} className="card-text ">{dataWeather.temp_c}&#8451;</p>
                </div>
            </div>
        )
    }
}

export default WeatherCard;