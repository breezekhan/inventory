import Toast from 'react-native-simple-toast';

const orEmptyString = (str) => {
    if (str === '' || str === undefined || str === null) {
        return true
    } else {
        return false
    }
}

const andEmptyString = (str) => {
    if(str === '' && str === undefined && str === null){
        return true
    }else {
        return false
    }
}

const validateNumber = (value) => {
    let NumberRgx = /^[0-9]{1,10}$/
    return NumberRgx.test(value)
}

const validateName = (name) => {
    let characterRgx = /^[a-zA-Z ]+$/
    return characterRgx.test(name)
}

const validateEmail = (email) => {
    let re = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i ;
    return re.test(email);
}

const trimString = (str) => {
   return str.trim()
}
const showToast = (msg) => {
    return Toast.show(msg,Toast.LONG)
}



export {
    orEmptyString,
    andEmptyString,
    validateNumber,
    validateName,
    validateEmail,
    trimString,
    showToast,
    
 }