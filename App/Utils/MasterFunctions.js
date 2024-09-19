import AsyncStorage from "@react-native-async-storage/async-storage"

export async function setUserId(id) {
    if (id) {
        await AsyncStorage.setItem('userID', id.toString())
    }
}

export async function getUserId() {
    let id = await AsyncStorage.getItem('userID')
    return id
}
//

export async function setUserName(name) {
    if (name) {
        await AsyncStorage.setItem('userName', name.toString())
    }
}

export async function getUserName() {
    let name = await AsyncStorage.getItem('userName')
    return name
}



//

export async function setUserEmail(email) {
    if (email) {
        await AsyncStorage.setItem('userEmail', email.toString())
    }
}

export async function getUserEmail() {
    let email = await AsyncStorage.getItem('userEmail')
    return email
}

//
export async function setUserPass(pass) {
    await AsyncStorage.setItem('userPass', pass)
}
export async function getUserPass() {
    let userPass = await AsyncStorage.getItem('userPass')
    return userPass
}

//

//
export async function setUserPhone(phone) {
    await AsyncStorage.setItem('userPhone', phone)
}
export async function getUserPhone() {
    let userPhone = await AsyncStorage.getItem('userPhone')
    return userPhone
}





//
export async function setUserAdd(add) {
    await AsyncStorage.setItem('userAdd', add)
}
export async function getUserAdd() {
    let userAdd = await AsyncStorage.getItem('userAdd')
    return userAdd
}




//

//
export async function clearUserId() {
    await AsyncStorage.removeItem('userID');
    await AsyncStorage.removeItem('userName');
    await AsyncStorage.removeItem('userEmail');
    await AsyncStorage.removeItem('userPass');
    await AsyncStorage.removeItem('userPhone');

}