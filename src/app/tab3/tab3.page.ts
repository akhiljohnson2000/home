import { Component } from '@angular/core';
import { DataService } from './tab3.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  now: number;
  pincode : number;
  slotFinderStatus: boolean = true;
  setIntervalForApiCall;
  vaccineSlotsArray: Array<object> = [];
  sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

  constructor(private dataService: DataService) {
    this.slotFinderStatusChange("wcv");
    setInterval(() => {
      this.now = Date.now();
    }, 1);
  }

  slotFinderStatusChange(event) {
    if (this.slotFinderStatus) {
      this.setIntervalForApiCall = setInterval(() => {
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1;
        var yyyy = today.getFullYear();
        var liveDate = dd+'-'+mm+'-'+yyyy;

        
        var apiparam = {
          date: liveDate,
          pincode : this.pincode
        }
        this.dataService.sendGetRequest(apiparam).subscribe((data: any[]) => {
          data['centers'][0].time = this.now;
          this.vaccineSlotsArray.push(data)
          console.log(data);

          if (data['centers'][0].sessions[0].available_capacity > 0 || data['centers'][0].sessions[0].available_capacity > 0) {
            var audio = new Audio();
            audio.src = "../../../assets/beep.mp3";
            audio.load();
            setTimeout(() => {
              audio.play();
              setTimeout(() => {
                audio.play();
                setTimeout(() => {
                  audio.play();
                }, 1000);
              }, 1000);
            }, 1000);
          }
        })
      }, 5000)
    } else {
      clearInterval(this.setIntervalForApiCall)
    }
  }
}
