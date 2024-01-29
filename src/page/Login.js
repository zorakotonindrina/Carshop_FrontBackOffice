import {useNavigate} from 'react-router-dom'
import '../assets/scss/login.css'
import carImage from '../assets/image/car.png';
import React, { useState } from 'react';

export function Login() {

	const navigate = useNavigate();
  const apiUrl = 'https://carshopbackend-production-477a.up.railway.app/auth/login';
  
  const [email, setEmail] = useState('admin@gmail.com');
  const [password, setPassword] = useState('000');

  const handleSubmit = async (e) => {
    e.preventDefault();
	

    const requestOptions = {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ` ,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    };
	
    try {
      const response = await fetch(apiUrl, requestOptions);
		
      if (!response.ok) {
        throw new Error('La requête a échoué.');
      }

      const data = await response.json();
      console.log(data)
	  localStorage.removeItem('token');
	  localStorage.setItem('token' , data.token);
	  navigate('/firstpage')
    } catch (error) {
      console.error('Erreur lors de la requête à l\'API:', error);
    }
  };

    return (
        <div className="login">
            <img src={carImage} alt="Car" />
            <form  className="login" onSubmit={handleSubmit}>
                <span>Login Backoffice : CarShop</span>
                <div>
                    <label htmlFor="">Email : </label>
                    <input type="email" 
                    name="" className="login__input"
                    placeholder="admin@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <label> Password  : </label>
                    <input type="password"
                        className="login__input"
                        placeholder="000"
                         value={password}
                        onChange={(e) => setPassword(e.target.value)} />
                        </div>
                <div>
                    <input type="submit" value="Connexion" />
                </div>
            </form>
        </div>
    )
}
export default Login