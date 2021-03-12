<template>
  
  <dialog open>
    <slot>
      <div class="title">
        <h5>Terms and Conditions</h5>
        <button @click="closeBtn">X</button>
      </div>
      <h6>Terms and Conditions m3connect GmbH</h6>
      <h6>§ 1</h6>
      <h6>Scope</h6>
      <p>
        These General Terms and Conditions govern services-against-payment
        provided by M3-Connect GmbH, namely the supply and operation of
        broadband internet access via the user’s wireless LAN (WLAN) technology
        These General Terms and Conditions and all revisions thereto are
        accessible at all times on the portal pages at each M3 hotspot.
        M3-Connect GmbH reserves the right to modify these General Terms and
        Conditions. This shall apply in particular to revisions on account of
        regulatory provisions and take immediate effect, the modification of
        Internet-related framework conditions, and changes to M3-Connect GmbH’s
        business procedures and/or business areas.
      </p>
      <br />
      <h6>§ 2</h6>
      <h6>Technical Specifications</h6>
      <p>
        Within the framework of the provision of services ordered, the user
        shall recieve broadband Internet access via M3-Connect’s wireless LAN
        infrastructure. M3-Connect shall disclose the locations to which such
        services can be accessed at
        <a href="http://www.m3-connect.com">www.m3-connect.com</a> and
        <a href="www.m3-hotspots.de">www.m3-hotspots.de.</a>
      </p>
      <p>
        Requirements for the use of the M3-Connect infrastructure are:
      </p>

      <p>
        The user must have a WLAN-compatible device in accordance with
        IEEE802.11b
      </p>
      <p>
        The user must establish a connection with the M3-Connect wireless LAN
        (the required network names (SSIDs) shall likewise be disclosed at
        <a href="http://www.m3-connect.com">www.m3-connect.com</a> and
        <a href="www.m3-hotspots.de">www.m3-hotspots.de.</a>
      </p>
      <p>
        The user’s web browser must be configured to accept cookies. The
        connection must not be established via a proxy server. The web browser
        must allow automatic redirecting.
      </p>

      <p>
        Depending upon the distance to the access point and the specifications
        of the customer’s antenna, the data transmission speed will vary. After
        the processing of the order or upon purchase of a prepaid card, the user
        shall recieve a combination user name/password. After launching the
        internet browser, the user must enter this information into the fields
        on the Internet site. The contract duration, validity, and volume
        restrictions derive from the services the customer has orderd. In the
        event that legal or regulatory revisions to the framework terms and
        conditions are made, M3-Connect is authorized to engage third parties
        either temporarily or permanently for the delivery of such provision of
        services or partial services.
      </p>
      <h6>§ 3</h6>
      <h6>Payment</h6>
      <p>
        Payment is made when the customer places the order. Prices do not
        include abblicable value-added tax.
      </p>

      <h6>§ 4</h6>
      <p>Locations/Hotspots</p>
      <p>
        Internet access is available at all M3-Connect hotspots (see
        <a href="www.m3-hotspots.de">www.m3-hotspots.de.</a>. M3-Connect
        reserves the right to restrict use at certain hotspots.
      </p>
    </slot>
  </dialog>
</template>

<script>
export default {
  emits: ["close-dialog"],
  methods: {
    closeBtn() {
      this.$emit("close-dialog");
    },
  },
};
</script>

<style scoped>
.title {
  background-color: #ef7c00;
  display: flex;
  justify-content: space-between;
  text-align: center;
  color: white;
}
dialog {
  margin: auto;
  width: 500px;
  height: 600px;
  position: fixed;
  top: 10vh;
  bottom: 10vh;
  overflow: auto;
  z-index: 9999;
  border-radius: 12px;
  padding: 5px;
}

.overlay {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: transparent;
  opacity: 0;
  width: 100%;
  height: 100%;
  z-index: -1000;
}
button {
  text-decoration: none;
  padding: 5px;
  font: inherit;
  background-color: #3a0061;
  border: 1px solid #3a0061;
  color: white;
  cursor: pointer;
  border-radius: 30px;
}

button:hover,
button:active {
  background-color: #270041;
  border-color: #270041;
  text-decoration: none;
}
@media only screen and (max-width: 767px) {
dialog{
   width: 300px;
  height: 400px;
}
}
</style>
