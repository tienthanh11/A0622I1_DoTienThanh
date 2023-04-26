import {Injectable} from '@angular/core';
import {IFacility} from "../model/ifacility";
import {FacilityDAO} from "../data/FacilityDAO";

@Injectable({
  providedIn: 'root'
})
export class FacilityService {


  constructor() {
  }

  getAllFacility() {
    return FacilityDAO.facilities;
  }

  createFacility(facility: IFacility) {
    FacilityDAO.facilities.push(facility);
  }

  findByIdFacility(id: string) {
    return FacilityDAO.facilities.find(facility => facility.id === id);
  }

  updateFacility(id: string, facility: IFacility) {
    for (let i = 0; i < FacilityDAO.facilities.length; i++) {
      if (FacilityDAO.facilities[i].id === id) {
        FacilityDAO.facilities[i] = facility;
      }
    }
  }

  deleteFacility(id: string) {
    FacilityDAO.facilities = FacilityDAO.facilities.filter(facility => {
      return facility.id !== id;
    })
  }
}
