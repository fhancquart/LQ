import { useGameMutation, useIsGameExistMutation, useUpdateGameMutation } from '../../generated/graphql';



const useInsertCardGame = async (family:number, group:number, idcard:number, settings: any, game:any, isGameExist:any, updateGame:any) => {

    const exist = await isGameExist({variables: {cg_category: idcard}})

    for (let i = 0; i < group; i++) {
        for (let j = 0; j < family; j++) {
            if(exist.data?.isGameExist?.message == "inexistant"){
                await game({
                    variables: {
                        input: {
                            cg_category: idcard,
                            cg_family: settings.cards[i][0]["family"],
                            cg_number: j+1,
                            cg_question: settings.cards[i][j+1]["question-" + (j+1)],
                            cg_reponse: settings.cards[i][j+1]["reponse-" + (j+1)]
                        }
                    }
                })   
            } else{
                await updateGame({
                    variables: {
                        cg_category: idcard,
                        cg_family: settings.cards[i][0]["family"],
                        cg_number: j+1,
                        cg_question: settings.cards[i][j+1]["question-" + (j+1)],
                        cg_reponse: settings.cards[i][j+1]["reponse-" + (j+1)]
                    }
                })
            }                                                                         
        }                                   
    }
};

export default useInsertCardGame;