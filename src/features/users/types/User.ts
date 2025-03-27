export interface User {
    id: number;
    fullName: string;
    email: string;
    phone: string;
    birthDate: string;
  }
  
  export interface CreateUserDto {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    birthDate: string;
  }
  
  export interface UpdateUserDto extends CreateUserDto {
    id: number;
  }
  