import { GoogleAuthProvider, signInWithRedirect} from 'firebase/auth';
import { auth } from '../firebase/firebase';

const googleprovider = new GoogleAuthProvider();


export const signInWithGoogle = async () => {
    await signInWithRedirect(auth, googleprovider).then((userinfo)=>{
        window.location.reload()
    })
}


export const signoutfn = async() => {
  await auth.signOut().then(()=>{
    window.location.reload();
  })
}
