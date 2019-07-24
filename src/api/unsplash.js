import axios from 'axios';


 export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers:{
        Authorization:'Client-ID 3e17ffcc61e623407870f5181bfeb99b087c637e4c3b9425c9581369e3e34e3a'
        
    }
});

