<script setup>
import {onMounted, ref} from "vue";
import {getAuth, onAuthStateChanged, signOut} from "firebase/auth";
import { useRouter } from "vue-router";

const router = useRouter();
const isLoggedIn = ref(false);

let auth;
onMounted(() =>  {
  auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if(user)
    {
      isLoggedIn.value = true;

    }else
    {
      isLoggedIn.value = false;
    }
  });

});

const handleSingOut = () =>
{
  signOut(auth).then(()=>{
    router.push("/");
  });


};

</script>

<template>
  <header>

    <div>
      <nav>
        <span>|</span>
        <router-link to="/" class="Link">Home</router-link>
        <span>|</span>
        <router-link to="/register" class="Link" v-if="isLoggedIn==false">Register</router-link>
        <span v-if="isLoggedIn==false">|</span>
        <router-link to="/sign-in" class="Link" v-if="isLoggedIn==false">SigIn</router-link>
        <span v-if="isLoggedIn==false">|</span>
        <router-link to="/feed" class="Link">About it</router-link>
        <span>|</span>
      </nav>
      <div>
        <button @click="handleSingOut" v-if="isLoggedIn">Sing Out</button>
      </div>
    </div>

    </header>
  <router-view></router-view>
</template>

<style>
body {
    height: 125vh;
    background-color: wheat;
    background-size: cover;
    font-family: sans-serif;
    margin-top: 80px;
    padding: 30px;
}
p
{
  margin: auto;
  width:250px;
  height: 30px;
  padding: 10px;
  align-items: center;

}
button
{
  width:250px;
  height: 30px;
  background-color:black;
  color: white;
  border-bottom:1px solid #757575;
  border: none;
}

div
{
  margin: auto;
  padding: 10px;
  align-items: center;
}
main {
    color: white;
}
input{
  text-align: center;
  font-size:18px;
  width:250px;
  height: 30px;
  border:none;
  border-bottom:1px solid #757575;
  display: block;
}
h1
{
  display: block;
  margin: auto;
  width: 50%;
  padding: 10px;
  text-align: center;
  align-items: center;
}
header {
    background-color: white;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 80px;
    display: flex;
    align-items: center;
    box-shadow: 0 0 25px 0 black;
    text-align: center;
    width: 100%;
}
nav
{
  width: 700px;
	margin: auto;

}
.Link {
    margin: 20px;
    color: black;
    text-decoration: none;
    text-align: center;
    width: 100%;
}
</style>
