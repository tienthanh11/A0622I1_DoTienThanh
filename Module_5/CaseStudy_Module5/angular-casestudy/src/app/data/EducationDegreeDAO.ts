import {IEducationDegree} from "../model/ieducation-degree";

export class EducationDegreeDAO {
  static educationDegrees: IEducationDegree[] = [
    {
      id: 1,
      name: 'Trung cấp'
    },
    {
      id: 2,
      name: 'Cao đẳng'
    },
    {
      id: 3,
      name: 'Đại Học'
    },
    {
      id: 4,
      name: 'Sau đại học'
    }
  ];
}
