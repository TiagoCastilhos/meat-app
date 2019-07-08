import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Restaurant } from "./restaurant/restaurant.model";
import { MEAT_API } from '../app.api'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { ErrorHandler } from 'app/app.errorHandler';
import { MenuItem } from 'app/restaurant-detail/menu-item/menuItem.model';

@Injectable()
export class RestaurantsService {
    constructor(private http: Http) {
    }   

    getRestaurants() : Observable<Restaurant[]> {
        return this.http.get(`${MEAT_API}/restaurants`)
            .map(r => r.json())
            .catch(ErrorHandler.handleError)
    }

    getRestaurant(id: string) : Observable<Restaurant> {
        return this.http.get(`${MEAT_API}/restaurants/${id}`)
            .map(r => r.json())
            .catch(ErrorHandler.handleError)
    }

    getReviews(restaurantId: string) : Observable<any> {
        return this.http.get(`${MEAT_API}/restaurants/${restaurantId}/reviews`)
            .map(r => r.json())
            .catch(ErrorHandler.handleError)
    }

    getMenuItems(restaurantId: string) : Observable<MenuItem[]> {
        return this.http.get(`${MEAT_API}/restaurants/${restaurantId}/menu`)
            .map(r => r.json())
            .catch(ErrorHandler.handleError)
    }
}