import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class TodoService {
    jsonDummy = {
        "todo": {
            "priority": [
                {
                    "name": "Intermediate"
                },
                {
                    "name": "High"
                },
                {
                    "name": "Medium"
                },
                {
                    "name": "Low"
                }
            ],
            "tags": [
                {
                    "name": "Home"
                },
                {
                    "name": "Personal"
                },
                {
                    "name": "Friends"
                },
                {
                    "name": "NeighbourHood"
                },
                {
                    "name": "Church"
                },
                {
                    "name": "KCYM"
                },
                {
                    "name": "Relatives"
                }
            ],
            "status": [
                {
                    "name": "open"
                },
                {
                    "name": "progres"
                },
                {
                    "name": "done"
                },
                {
                    "name": "cantdo"
                },
                {
                    "name": "reopened"
                }
            ],
            "tasks": []
        }
    }

    constructor() {

    }

    public getJSON() {
        var data = localStorage.getItem("jsonData");
        if (!data){
            localStorage.setItem("jsonData",JSON.stringify(this.jsonDummy));
            return this.jsonDummy
        }
        return JSON.parse(data)
    }

    public putJSON(data) {
        return localStorage.setItem("jsonData", JSON.stringify(data));
    }

    
}