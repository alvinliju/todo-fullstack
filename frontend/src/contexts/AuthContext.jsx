import { atom } from "recoil"

export const authState = atom({
    key:'authState',
    default:localStorage.getItem("token") ? true : false,
})

export const regState = atom({
    key:'regStatus',
    default:''
})

export const regStateName = atom({
    key:'Regname',
    default:''
})


export const emailState = atom({
    key:'emailState',
    default:''
})

export const passwordState = atom({
    key:'passwordState',
    default:''
})

export const errorState = atom({
    key: 'errorState',
    default: '',
  });
