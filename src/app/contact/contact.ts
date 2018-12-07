export class Contact {
  id: number;
  firstName: string;
  lastName: string;
  city: string;
  address: string;
  postalCode: string;
  telephone: string;
  email: string;


  constructor(id?: number, firstName?: string, lastName?: string, city?: string, address?: string, postalCode?: string, telephone?: string, email?: string) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.city = city;
    this.address = address;
    this.postalCode = postalCode;
    this.telephone = telephone;
    this.email = email;
  }
}
