/**
 * Created by ssalim on 9/27/2019.
 */

import * as request from 'request';

export class WeatherFunc {

    static printBestOutreachMethodWithDate() {
        let i;
        const baseUrl = 'http://api.openweathermap.org/';
        const targetCity = 'minneapolis';
        const apiKey = '09110e603c1d5c272f94f64305c09436';
        request(baseUrl + '/data/2.5/forecast?q=' + targetCity + ',us&units=imperial&APPID=' + apiKey, (error, response, body) => {
            console.log('error:', error);
            console.log('statusCode:', response && response.statusCode);
            // console.log('body:', body);
            if (!error) {
                const info = JSON.parse(body);
                console.log('Info: length ' + info.list.length);
                console.log('Info: number of lines: ' + info.cnt);

                for (i = 0; i < info.list.length; i++) {
                    if (info.list[i].main.temp > 75 && info.list[i].weather[0].main === 'Sun') {
                        console.log('\n' + 'date: ' + info.list[i].dt_txt + '\n' +
                            'best outreach method is text message');
                    } else if (info.list[i].main.temp >= 55 && info.list[i].main.temp <= 75) {
                        console.log('\n' + 'date: ' + info.list[i].dt_txt + '\n' +
                            'best outreach method is email');
                    } else if (info.list[i].main.temp < 55 || info.list[i].weather[0].main === 'Rain' ) {
                        console.log('\n' + 'date: ' + info.list[i].dt_txt + '\n' +
                            'best outreach method is phone call');
                    }
                }
            }
        });
    }
}
