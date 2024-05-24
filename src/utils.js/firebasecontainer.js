import { GoogleAuthProvider, signInWithRedirect} from 'firebase/auth';
import { auth } from '../firebase/firebase';
// import { useNavigate } from 'react-router-dom';
// import { useHistory } from 'react-router-dom'; 

// const history = useHistory()


const googleprovider = new GoogleAuthProvider();

// const navigate = useNavigate();

export const signInWithGoogle = async () => {
    await signInWithRedirect(auth, googleprovider).then((userinfo)=>{
        window.location.reload();
       
    })
    // navigate('/home')
}


export const signoutfn = async() => {
  await auth.signOut().then(()=>{
    window.location.reload();
  })
}
