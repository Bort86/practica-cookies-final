/*
  @name= Model for patient rol
  @authors=Marc Codina & Pablo Rodriguez
  @version= 1.0
  @description= properties, setters 'n getters' for a class used to define a patient
  @date= 25/02/2019
*/

export class PatientRol {
  id: number;
  rol: string;

  constructor (id?: number, rol?: string){
    this.setId(id);
    this.setRol(rol);
  }

  getId():number{
    return this.id;
  }

  getRol(): string {
    return this.rol;
  }
  setId(id:number):void{
    this.id=id;
  }

  setRol(rol:string):void{
    this.rol = rol;
  }
}
