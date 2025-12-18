import { API_ROUTES } from "../api/apiConfig";
import axios from 'axios';
import type { Resultat } from "../Interfaces/Resultat";

//Ajouter une note (résultat)
export const addResultat = async (resultat: Resultat, code: string) => {
    try {
        const url = API_ROUTES.resultats.create.replace('{code}',code);
        const response = await axios.post(url, resultat)
        return  { success: true, data: response.data };
    } catch (error : any) {
        if (error.response) {
            //Erreur venant de l'api
            return { success :false, errors: error.response.data.errors || error.response.data }
        }
        return { success: false, errors: [error.message || 'Erreur serveur'] }
    }
} 