import axios from 'axios'
import qs from 'qs'

axios.defaults.baseURL=('http://129.211.169.131:33833')  //服务器地址


//登录
export const login=(acc,pwd)=>axios.post('/login.php',qs.stringify({acc,pwd}))


//注册
export const reg=(acc,pwd)=>axios.post('/reg.php',qs.stringify({acc,pwd}))
