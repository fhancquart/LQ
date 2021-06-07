import { FieldError } from "../generated/graphql";

//Va servir à récupérer le texte que l'on a défini dans le back pour les cas d'erreurs
export const toErrorMap = (errors: FieldError[]) => { //on récupère FieldError du resolver user.ts depuis le généré de code-generator
    const errorMap: Record<string, string> = {}; //Type deux réponse
    errors.forEach(({field, message}) => { //pour chaque erreur on renvoi les type et message selon les cas des champs de FieldError
        errorMap[field] = message;
    });

    return errorMap;
}