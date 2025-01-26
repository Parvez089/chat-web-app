export const signup = async(req,res)=>{
    try{
        const {fullName, userName, password, confirmPassword, gender}= req.body;
    }catch(error){

    }
};

export const login = async(req,res)=>{
    console.log("login User");
};

export const logout = async(req,res)=>{
    console.log("logout User");
};