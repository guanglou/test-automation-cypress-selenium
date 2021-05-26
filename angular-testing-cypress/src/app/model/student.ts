export class Student {

  constructor(
    public studentName: string,
    public studentID: string,
    public gender: string,
    public registeredUnits: {
      unit1: boolean,
      unit2: boolean,
      unit3: boolean
    },
    public dob: string,
    public email: string,
    password: string,
    public studentAddress: {
      city: string,
      state: string,
      postalCode: string
    }
  ){ }


}

