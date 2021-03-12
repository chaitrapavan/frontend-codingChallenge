<template>
  <section>
    <div class="banner-image">
      <div class="banner-text">
        <h1>Wi-Fi Access</h1>
        <h3>
          Premium best in class Wi-Fi - Here in the Hotel. Offered by m3connect
        </h3>
      </div>
    </div>
    <router-view />
  </section>
</template>

<script></script>
<style>
* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
  font-family: Arial, Helvetica, sans-serif;
}
.banner-image {
  background-image: url("./assets/backgroundimage.jpeg");
  height: 200px;
  color: white;
  text-align: center;
}
.banner-text {
  position: relative;
  top: 40px;
  font-size: 10vw;
}

header {
  background-color: #ef7c00;
  padding: 5px;
}
nav {
  margin: 10px 60px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
h1 {
  list-style: none;
}
li a {
  color: white;
  text-decoration: none;
}
li a.router-link-active {
  border: 1px solid white;
  padding: 10px;
  text-decoration: none;
}
li {
  display: inline-block;
  margin-left: 30px;
  font-size: 20px;
  padding: 10px;
}
li a:hover {
  text-decoration: none;
}
@media only screen and (max-width: 320px) {
  body {
    font-size: 1em;
  }
}
</style>
