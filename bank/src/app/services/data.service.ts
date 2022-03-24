import { transition } from '@angular/animations';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  currentAcno:any={
  }
  currentUname:any

  database: any = {
    1000: { acno: 1000, uname: "viz", password: 1234, balance: 5000,transaction:[]},
    1001: { acno: 1001, uname: "amal", password: 1234, balance: 8000,transaction:[] },
    1002: { acno: 1002, uname: "navin", password: 1234, balance: 6000,transaction:[] },

  }

  constructor() { 
    this.getData()
  }

  //to store data in localstorage

  storeData(){
    localStorage.setItem("database",JSON.stringify(this.database))
    if(this.currentAcno){
      localStorage.setItem("currentAcno",JSON.stringify(this.currentAcno))
    }
    if(this.currentUname){
      localStorage.setItem("currentUname",JSON.stringify(this.currentUname))

    }
  }
  //to get data from localstorage

  getData(){

    if(localStorage.getItem("database")){
      this.database = JSON.parse(localStorage.getItem("database") || '')
    }
    if(localStorage.getItem("currentAcno")){
      this.currentAcno = JSON.parse(localStorage.getItem("currentAcno") || '')

    }
    if(localStorage.getItem("currentUname")){
      this.currentUname = JSON.parse(localStorage.getItem("currentUname") || '')
    }

  }

  register(acno: any, password: any, uname: any) {

    let database = this.database
    if (acno in database) {
      return false
    }
    else {
      database[acno] = {
        acno,
        uname,
        password,
        balance: 0,
        transaction:[]

      }
      console.log(database);
      this.storeData()
      
      return true
    }
  }

  //login
  login(acno: any, password: any) {

    let database = this.database

    if (acno in database) {
      if (password == database[acno]["password"]) {
        this.currentAcno = acno
      this.currentUname =  database[acno]["uname"]
      this.storeData()
        return true
      }
      else {
        alert("incorrect password")
        return false
      }
    }
    else {
      alert("user doesn't exist")
      return false
    }

  }

  //deposit

  deposit(acno:any,password:any,amnt:any){

    var amount = parseInt (amnt)

    let database = this.database

    if(acno in database){

      if(password == database[acno]['password']){

        database[acno]['balance']+=amount

        database[acno]["transaction"].push({
          amount:amount,
          type:"CREDIT"
        })
        console.log(database);
        this.storeData()
        return  database[acno]['balance']
      }
      else
      {
        alert("Incorrect password")
        return false
      }
    }
    else{
      alert("User doesn't exist..!!!")
      return false
    }
  }

  //withdraw

  withdraw(acno:any,password:any,amnt:any){

    var amount = parseInt (amnt)

    let database = this.database

    if(acno in database){

      if(password == database[acno]['password']){
        if(database[acno]['balance']>amount){

          database[acno]['balance']-=amount

          database[acno]["transaction"].push({
            amount:amount,
            type:"DEBIT"
          })
          console.log(database);
          this.storeData()
          
          return  database[acno]['balance']
        }
        else{
          alert("insufficient balance")
          return false
        }
      }
      else
      {
        alert("Incorrect password")
        return false
      }
    }
    else{
      alert("User doesn't exist..!!!")
      return false
    }
  }

  //transaction

  getTransaction(acno:any){
    return this.database[acno]["transaction"]
  }
}