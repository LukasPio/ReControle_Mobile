import { db } from "@/config/firebaseConfig"
import { showMessage, showErrorMessage } from "@/utils/alertMaker"
import isValidEmail from "@/utils/emailValidator"
import { router } from "expo-router"
import { collection, addDoc, deleteDoc, doc, getDoc, updateDoc, query, where, getDocs } from "firebase/firestore"

export const createAccount = async (data: UserCreateRequestDTO) => {
    if (data.name == "" || data.password == "" || data.password == "" ||data.passwordConfirm == "") {
        showErrorMessage("Todos os campos devem ser preenchidos");
        return;
    }
    if (!isValidEmail(data.email)) {
        showErrorMessage("O E-mail inserido não é válido");
        return;
    }
    if (data.password !== data.passwordConfirm) {
        showErrorMessage("As senhas devem ser iguais");
        return;
    }
    if (data.password.length < 8) {
        showErrorMessage("A senha devem conter no mínimo 8 caracteres");
        return;
    }
    
    const users = collection(db, "users");
    const q = query(users, where("email", "==", data.email));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
        showErrorMessage("Já existe uma conta com o E-mail inserido");
        return;
    } 

    try {
        await addDoc(collection(db, "users"), {
            name: data.name, 
            email: data.email,
            password: data.password
        });
        showMessage("Sucesso!", "Sua conta foi criada com sucesso")
        
        router.push("/login")
    }
    catch (e) {
        showErrorMessage("Tente novamente mais tarde: " + e);
    }
}

export const login = async (data: UserLoginRequestDTO) => {
    if (data.email == "" || data.password == "") {
        showErrorMessage("Todos os campos devem ser preenchidos");
    }
    if (!isValidEmail(data.email)) {
        showErrorMessage("O E-mail inserido não é válido");
        return;
    }
    if (data.password.length < 8) {
        showErrorMessage("A senha deve conter no mínimo 8 caracteres");
        return;
    }

    try {
        const users = collection(db, "users");
        const q = query(users, where("email", "==", data.email), where("password", "==", data.password))
        const querySnapshot = await getDocs(q);
    
        if (querySnapshot.empty) {
            showErrorMessage("Email ou senha inválidos");
            return;
        }

        router.replace("/home")
    } catch(e) {
        showErrorMessage("Tente novamente mais tarde: " + e)
    }
}