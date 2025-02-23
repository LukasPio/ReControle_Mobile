import { auth } from "@/config/firebaseConfig";
import { UserCreateRequestDTO, UserCreateSchema } from "@/DTOs/UserCreateRequestDTO";
import { UserLoginRequestDTO, UserLoginSchema } from "@/DTOs/UserLoginRequestDTO";
import { showErrorMessage, showMessage } from "@/utils/alertMaker";
import { Redirect, router } from "expo-router";
import { createUserWithEmailAndPassword, sendEmailVerification, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";

export const registerUser = async ({ name, email, password, passwordConfirm }: UserCreateRequestDTO) => {

  const userData = { name, email, password, passwordConfirm }
  const dataValidation = UserCreateSchema.safeParse(userData)

  if (!dataValidation.success) {
    showErrorMessage(dataValidation.error.errors[0].message);
    return;
  }

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    await updateProfile(user, { displayName: name })

    const userFirstName = user.displayName?.split(" ")[0];

    await sendEmailVerification(user);
    showMessage("Quase lá " + userFirstName + "!", "Enviamos um link para verificação no seu e-mail.")

    router.replace("/login");

  } catch (error: any) {
    switch (error.code) {
      case "auth/email-already-in-use":
        showErrorMessage("Este e-mail já está cadastrado. Tente outro.");
        break;
      case "auth/invalid-email":
        showErrorMessage("E-mail inválido. Digite um e-mail válido.");
        break;
      case "auth/weak-password":
        showErrorMessage("Senha muito fraca. Use pelo menos 6 caracteres.");
        break;
      case "auth/operation-not-allowed":
        showErrorMessage("Erro no servidor. Tente novamente mais tarde.");
        break;
      default:
        showErrorMessage("Erro ao criar conta. Tente novamente.");
        console.error(error);
    }
  }
};

export const loginUser = async ({ email, password }: UserLoginRequestDTO) => {

  const userData = { email, password }
  const dataValidation = UserLoginSchema.safeParse(userData);

  if (!dataValidation.success) {
    showErrorMessage(dataValidation.error.errors[0].message);
    return;
  }

  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    if (!user.emailVerified) {
      showErrorMessage("Verifique seu E-mail antes de fazer login.")
      return;
    }

    router.replace("/home");

  } catch (error: any) {
    switch (error.code) {
      case "auth/invalid-email":
        showErrorMessage("E-mail inválido. Tente novamente.")
        break;
      case "auth/invalid-credential":
        showErrorMessage("E-mail e/ou senha incorretos.");
        break;
      case "auth/user-disabled":
        showErrorMessage("Conta desativada. Entre em contato com o suporte.");
        break;
      case "auth/too-many-requests":
        showErrorMessage("Muitas tentativas falhas. Tente novamente mais tarde.");
        break;
      default:
        showErrorMessage("Erro ao fazer login. Tente novamente.");
        console.error(error);
    }
  }
};

// Logout do usuário
export const logoutUser = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    showErrorMessage("Tente novamente mais tarde: " + error)
  }
};