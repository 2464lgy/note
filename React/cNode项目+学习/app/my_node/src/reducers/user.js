function user(state={
    data:{
        avatar_url:'',
        create_at:'',
        loginname:'',
        recent_replies:[],
        recent_topics:[],
        score:0,
    },   
    loading:true
},action){
    switch (action.type){
        case "USER_UPDATA":
            return {
                data:state.data,
                loading:true
            }
        case "USER_UPDATA_SUCC":
            return {
                data:action.data.data,
                loading:false
            }
        case "USER_UPDATA_ERR":
            return {
                data:{
                    avatar_url:'',
                    create_at:'',
                    loginname:'',
                    recent_replies:[],
                    recent_topics:[],
                    score:0,
                },   
                loading:false
            }
        default:
            return state;
    }
}
export default user; 