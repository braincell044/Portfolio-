import React from 'react'

const Login = () => {
    fetch('http://localhost:3400/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: 'testuser',
          password: 'testpassword'
        })
      })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error('Error:', error));
  return (
    <div>
        
    </div>
  )
}

export default Login