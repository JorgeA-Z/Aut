<script>
</script>


<template>
<div class="header">
  <h2>Uncharted: a Gallery of the legacy</h2>
</div>

<div class="row">
    <div class="card">
        <h2>Uncharted 1 drake's fortune</h2>
        <h5>Indiana Jones of the Video Games, launched on November 19, 2007</h5>
        <img src="../assets/U1.png" alt="Italian Trulli" class="fakeimg">
    </div>
    <div class="card">
        <h2>Uncharted 2: Among Thieves</h2>
        <h5>The best adventure never lived, launched on October 13, 2009</h5>
        <img src="../assets/U2.jpg" alt="Italian Trulli" class="fakeimg">
    </div>
    <div class="card">
        <h2>Uncharted 3: Drake's Deception</h2>
        <h5>The legacy of a thief's, launched on November 1, 2011</h5>
        <img src="../assets/U3.jpg" alt="Italian Trulli" class="fakeimg">
    </div>
    <div class="card">
        <h2>Uncharted 4: A Thief's End</h2>
        <h5>The final chapter, launched on March 18, 2016</h5>
        <img src="../assets/U4.jpg" alt="Italian Trulli" class="fakeimg">
    </div>
</div>

<div class="footer">
  <h2>Register or Sing to see more!!! </h2>
</div>
</template>


<style scoped>
* {
  box-sizing: border-box;
}

body {
  padding: 20px;
  background: #f1f1f1;
}

/* Header/Blog Title */
.header {
  padding: 30px;
  font-size: 40px;
  text-align: center;
  background: white;
}

/* Create two unequal columns that floats next to each other */
/* Left column */
.leftcolumn { 
  float: left;
  width: 75%;
}

/* Right column */
.rightcolumn {
  float: left;
  width: 25%;
  padding-left: 20px;
}

/* Fake image */
.fakeimg {
  background-color: wheat;
  width: 100%;
  padding: 20px;
}

/* Add a card effect for articles */
.card {
  background-color: white;
  padding: 20px;
  margin-top: 20px;
}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}

/* Footer */
.footer {
  padding: 20px;
  text-align: center;
  background: #ddd;
  margin-top: 20px;
}

/* Responsive layout - when the screen is less than 800px wide, make the two columns stack on top of each other instead of next to each other */
@media screen and (max-width: 800px) {
  .leftcolumn, .rightcolumn { 
    width: 100%;
    padding: 0;
  }
}
</style>