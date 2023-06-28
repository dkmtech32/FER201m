import { useEffect } from 'react';
import { useState } from 'react';
import jwt_decode from "jwt-decode";
function App() {
  const [user, setUser] = useState({})
  const handleCredentialResponse = (response)=> {
    console.log("Encoded JWT ID token: " + response.credential);
    var decoded = jwt_decode(response.credential);
     setUser(decoded);
     document.getElementById('buttonDiv').hidden =true;
  }
  const handleLogOut =(e)=>{
    setUser({});
    document.getElementById('buttonDiv').hidden =false;
  }
  useEffect(() => {
    /* global google*/ 
    window.onload = function () {
      google.accounts.id.initialize({
        client_id: "1059357680128-4ut88oadrg7psv0lf78e6grj5m554n59.apps.googleusercontent.com",
        callback: handleCredentialResponse
      });
      google.accounts.id.renderButton(
        document.getElementById("buttonDiv"),
        { theme: "outline", size: "large" }  // customization attributes
      );
      google.accounts.id.prompt(); // also display the One Tap dialog
    }
  }, []);
  return (
   <>
   <div id='buttonDiv'></div>
   {Object.keys(user).length!=0 &&
    <button onClick={handleLogOut}>logout</button>
   }
   {user && 
   <div>
   <h5>{user.name}</h5>
   </div>
   }
   </>
  );
}
export default App;
