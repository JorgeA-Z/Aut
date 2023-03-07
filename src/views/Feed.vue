<template>

<!-- The App Section -->
<div class="container">
  <div class="row">
    <div class="column-66">
      <h1 class="xlarge-font"><b>Nathan Drake</b></h1>
      <h1 class="large-font"><b>Who is this Indiana Jones?</b></h1>
      <p><span style="font-size:36px">The protagonist of the franchise.</span> 
        Nathan Drake (né  Morgan) is a fictional character and the protagonist of the Uncharted franchise, most notably in the video game series, developed by Naughty Dog. A charismatic and good-natured yet rebellious treasure hunter, the player controls Drake as he journeys across the world to uncover various historical mysteries. </p>
    </div>
    <div class="column-33">
        <img src="../assets/ND.webp" width="335" height="471">
    </div>
  </div>
</div>

<!-- Clarity Section -->
<div class="container" style="background-color:#f1f1f1">
  <div class="row">
    <div class="column-33">
      <img src="../assets/Elena.webp" alt="App" width="335" height="471">
    </div>
    <div class="column-66">
      <h1 class="xlarge-font"><b>Elena Drake</b></h1>
      <h1 class="large-font"><b>The "female version of Drake"</b></h1>
      <p><span style="font-size:24px">As creator Amy Hennig describes;</span> 
         She is just as charming, intelligent, and tenacious as him, and can hold her own when climbing or under fire. This is pointed out by Nate himself in Drake's Fortune as he is impressed by her ability during the attack on their boat. The two have the same sense of humor and cavalier attitude toward their opponents, but she tends to be more naive and compassionate (such as when Harry Flynn is dying).
    </p>
    </div>
  </div>
</div>

<!-- The App Section -->
<div class="container">
  <div class="row">
    <div class="column-66">
      <h1 class="xlarge-font"><b>Victor "Sully" Sullivan</b></h1>
      <h1 class="large-font"><b>He is the overall deuteragonist </b></h1>
      <p><span style="font-size:36px">Of the Uncharted franchise.</span> 
        He is an American treasure hunter, fortune seeker, and businessman, as well as a friend, one-time mentor and father figure of fellow treasure hunter Nathan Drake.
    </p>
    </div>
    <div class="column-33">
        <img src="../assets/Victor.webp" width="335" height="471" >
    </div>
  </div>
</div>

</template>

<style scoped>
* {
  box-sizing: border-box;
}

.container {
  padding: 64px;
}

/* Clear floats */
.row:after {
  content: "";
  display: table;
  clear: both
}

/* 2/3 column */
.column-66 {
  float: left;
  width: 66.66666%;
  padding: 20px;
}

/* 1/3 column */
.column-33 {
  float: left;
  width: 33.33333%;
  padding: 20px;
}

/* Add responsiveness - make the columns appear on top of each other instead of next to each other on small screens */
@media screen and (max-width: 1000px) {
  .column-66,
  .column-33 {
    width: 100%;
    text-align: center;
  }
}
</style>