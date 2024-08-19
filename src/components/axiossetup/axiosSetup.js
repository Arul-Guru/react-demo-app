import axios from 'axios'


const axiosInstance = axios.create({
    baseURL:"http://universities.hipolabs.com",
    timeout:500
})


axiosInstance.interceptors.request.use(
    (config)=>{
        // config.headers["Authorozation"]="Bearer <>";
        console.log("Intercepting requets");
        return config;

    },(error)=>{
        return Promise.reject(error);
    }
)

axiosInstance.interceptors.response.use(
    (response)=>{
        console.log(response);
        return response;
    },
    (error)=>{
        console.log("error:::",error);
        return Promise.reject(error);
    }
)


export default axiosInstance;