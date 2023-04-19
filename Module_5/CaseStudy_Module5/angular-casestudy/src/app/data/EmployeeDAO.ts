import {IEmployee} from "../model/iemployee";

export class EmployeeDAO {
  static employees: IEmployee[] = [
    {
      id: 1,
      name: 'Nguyễn Văn An',
      birthday: '1970-11-07',
      idCard: '456231786',
      salary: 10000000,
      phone: '0901234121',
      email: 'annguyen@gmail.com',
      address: '295 Nguyễn Tất Thành, Đà Nẵng',
      position: {
        id: 1,
        name: 'Lễ tân'
      },
      educationDegree: {
        id: 3,
        name: 'Đại Học'
      },
      division: {
        id: 1,
        name: 'Sale–Marketing'
      }
    },
    {
      id: 2,
      name: 'Lê Văn Bình',
      birthday: '1997-04-09',
      idCard: '654231234',
      salary: 7000000,
      phone: '0934212314',
      email: 'binhlv@gmail.com',
      address: '22 Yên Bái, Đà Nẵng',
      position: {
        id: 1,
        name: 'Lễ tân'
      },
      educationDegree: {
        id: 2,
        name: 'Cao đẳng'
      },
      division: {
        id: 2,
        name: 'Hành chính'
      }
    },
    {
      id: 3,
      name: 'Hồ Thị Yến',
      birthday: '1995-12-12',
      idCard: '999231723',
      salary: 14000000,
      phone: '0412352315',
      email: 'thiyen@gmail.com',
      address: 'K234/11 Điện Biên Phủ, Gia Lai',
      position: {
        id: 1,
        name: 'Lễ tân'
      },
      educationDegree: {
        id: 3,
        name: 'Đại Học'
      },
      division: {
        id: 2,
        name: 'Hành chính'
      }
    },
    {
      id: 4,
      name: 'Võ Công Toản',
      birthday: '1980-04-04',
      idCard: '123231365',
      salary: 17000000,
      phone: '0374443232',
      email: 'toan0404@gmail.com',
      address: '77 Hoàng Diệu, Quảng Trị',
      position: {
        id: 1,
        name: 'Lễ tân'
      },
      educationDegree: {
        id: 4,
        name: 'Sau đại học'
      },
      division: {
        id: 4,
        name: 'Quản lý'
      }
    },
    {
      id: 5,
      name: 'Nguyễn Bỉnh Phát',
      birthday: '1999-12-09',
      idCard: '454363232',
      salary: 6000000,
      phone: '0902341231',
      email: 'phatphat@gmail.com',
      address: '43 Yên Bái, Đà Nẵng',
      position: {
        id: 2,
        name: 'Phục vụ'
      },
      educationDegree: {
        id: 1,
        name: 'Trung cấp'
      },
      division: {
        id: 1,
        name: 'Sale–Marketing'
      }
    },
    {
      id: 6,
      name: 'Khúc Nguyễn An Nghi',
      birthday: '2000-11-08',
      idCard: '964542311',
      salary: 7000000,
      phone: '0978653213',
      email: 'annghi20@gmail.com',
      address: '294 Nguyễn Tất Thành, Đà Nẵng',
      position: {
        id: 2,
        name: 'Phục vụ'
      },
      educationDegree: {
        id: 2,
        name: 'Cao đẳng'
      },
      division: {
        id: 3,
        name: 'Phục vụ'
      }
    },
    {
      id: 7,
      name: 'Nguyễn Hữu Hà',
      birthday: '1993-01-01',
      idCard: '534323231',
      salary: 8000000,
      phone: '0941234553',
      email: 'nhh0101@gmail.com',
      address: '4 Nguyễn Chí Thanh, Huế',
      position: {
        id: 2,
        name: 'Phục vụ'
      },
      educationDegree: {
        id: 3,
        name: 'Đại Học'
      },
      division: {
        id: 2,
        name: 'Hành chính'
      }
    },
    {
      id: 8,
      name: 'Nguyễn Hà Đông',
      birthday: '1989-09-03',
      idCard: '234414123',
      salary: 9000000,
      phone: '0642123111',
      email: 'donghanguyen@gmail.com',
      address: '111 Hùng Vương, Hà Nội',
      position: {
        id: 2,
        name: 'Phục vụ'
      },
      educationDegree: {
        id: 4,
        name: 'Sau đại học'
      },
      division: {
        id: 4,
        name: 'Quản lý'
      }
    },
    {
      id: 9,
      name: 'Tòng Hoang',
      birthday: '1982-09-03',
      idCard: '256781231',
      salary: 6000000,
      phone: '0245144444',
      email: 'hoangtong@gmail.com',
      address: '213 Hàm Nghi, Đà Nẵng',
      position: {
        id: 2,
        name: 'Phục vụ'
      },
      educationDegree: {
        id: 4,
        name: 'Sau đại học'
      },
      division: {
        id: 4,
        name: 'Quản lý'
      }
    },
    {
      id: 10,
      name: 'Nguyễn Công Đạo',
      birthday: '1994-01-08',
      idCard: '755434343',
      salary: 8000000,
      phone: '0988767111',
      email: 'nguyencongdao12@gmail.com',
      address: '6 Hoà Khánh, Đồng Nai',
      position: {
        id: 2,
        name: 'Phục vụ'
      },
      educationDegree: {
        id: 3,
        name: 'Đại Học'
      },
      division: {
        id: 2,
        name: 'Hành chính'
      }
    }
  ];
}
