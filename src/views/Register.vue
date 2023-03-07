<script setup>
import {ref} from "vue"
import {getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup} from "firebase/auth"
import { useRouter } from "vue-router";
const email = ref("");
const password = ref("");
const router = useRouter()
const register = () => {
    createUserWithEmailAndPassword(getAuth(), email.value, password.value)
        .then((data) =>{
            console.log("Registered Success!!");
            router.push('/feed')
        })
        .catch((error)=> {
            console.log(error.code);
            alert(error.message);
        })

};
const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(getAuth(), provider)
    .then((result)=>
    {
        console.log(result.user);
        router.push("/feed")

    })
    .catch((error)=>
    {
        console.log(error.code);
        alert(error.message);
    })

};
</script>
<template>
    <div>
        <div>
            <h1>Create Account</h1>
        </div>
        <div>
                <p><input type="text" placeholder="Email" v-model="email"> </p>
                <p><input type="password" placeholder="Password" v-model="password"> </p>
                <p><button @click="register">Submit</button></p>
                <p><button @click="signInWithGoogle">Sign In With Google</button></p>
        </div>
    </div>
</template>