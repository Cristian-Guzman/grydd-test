import { collection, doc, getDocs, updateDoc } from "@firebase/firestore";
import { db } from "../../firebase";

const collectionRef = collection(db, 'usuarios');

const updateUser = async(id, log) => {
    const userDoc = doc(db, "usuarios", id)
    const newFields = {log: log}
    await updateDoc(userDoc, newFields)
}

export const LogAuth = async (cargo) => {
    const data = await getDocs(collectionRef);
    const validateUser = data.docs.find((doc) => doc.data().cargo.toLowerCase() === cargo.toLowerCase() && doc.data().log === true)
    if (validateUser) {
        console.log(validateUser.data())
        return true
    } else{
        return false
    }
}

export const Authenticate = async (usuario) => {
    const data = await getDocs(collectionRef);
    const validateUser = data.docs.find((doc) => doc.data().usuario.toLowerCase() === usuario.toLowerCase() )
    if (validateUser) {
        updateUser(validateUser.id, true)
    }
}

//verificar si existe el usuario

//si existe, authenticar
//sino existe, rechazar la authenticacion
