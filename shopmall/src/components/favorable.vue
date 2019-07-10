<template>
  <div>
    <div class="left">
      <router-link  tag="span" to="/moveislist/bottom">
      <img
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAA2CAYAAACm9ZtyAAAAAXNSR0IArs4c6QAABApJREFUWAnlWUlPFEEUruoeyLgwoCYmTPewROTgeJQrW0KCkOBFExNioheNetfoD8DoWUj0ZFQS8cgBNIqG6InoTT1hhNk4uByYg8jMdPne0I/0TO/LyEESqKWr3vfVq9f9vSoY+x9+hBBcUZRxVVXHsP7P15xUlOn2pCLwF4kYCUjGRiPqipKaEoJdI9ucc0F1LBtKIKmqNzSh3doF5PxpNptd3G1DJWZsRFlvV9XLQhN3ySbnbL73eM+leg80JCCSydR5wbRZAK96GEDf7N8XH1tdXf1DhKiMfAuqQcbFYwJnnK8cams9YwWOJCL1ALxmA5pgL+BVi1dXyPknmbOBXC73q9q2+CNb9AXqSqVSpyqaeAmTD6ABcPvX5pg8DEH33clgJAQ6OjpOVDRtCYDadPB8U0weWl9fzzqB47PQMdDZ2dldrmiv4F0/UgVn7AeAjwD4NzdwfbyXYdZjALy9VK68gz0/tjOCb7KYNLyRyXy0nmHuDRyEEHCHK4ItMyFOolnY898SZ6ch4JbNMPY9gbYgnU4fBPBFA3iJM3HOL3iVuD036yddXV3x7VJ5Adw+pI/QOJMmC4XsM+sZzr2+PDA4OBjbLpXmDOAQxvxqUHCk5lkLABQ0PfUIpGyC1sQlfrOQyz2kdpDSswcUVb0vmJgkEIlLUwB+j9pBS09vAWq6UVZB2WYK+fz1oKDGea4EUNNrZJXx2Xw+e6FeVo1G/dQdY8BG0y9GBY5EbT1goelvm5tiY2tra1t+Vug21jIIbTR9ImpwSw8E0XS3VTo9r5HjoJruBOD2rGYLKhXtAUxowUkQaAVdVjfcjIR5XkMgjKGgc2sIyLJ0BQwV0Rh8epPb5cpr1Pygxr3MM72GpiBk/LMssX6nxNILkN2YGg/gINR00PazEAOlnUkijdqPOYCdkTD9Jg+QsT39ECEJ1HhIsXYPlZgDQC7wHHMCIhlFaesBMt5oMTLFAAFTiZoP2n+H2pgTQG4wTe2wZc2X0M5Ysbi5lEgkjsLzPn1MX6KlNY79dnO89rtuARnSU7InxqxIT8lCZUWuW0AEMAfo7e2BXIDNUx8mKqCc+PEK/OPZA4Swp2k5ksCcAM77E6BWKzopicF9QP3lExF2K317gAxaHM224Lsx6vd0FJgAEjEfTlkxJkt4J/CBiLqVoQjoJLrhhPwe1RPbEKQ/Y7Lcn8lkvriB43PPb4GdMbwHgFWPIDCOwXsCvC/AewO7Ocb+0ATQGK5WlqRRqPrOJUJvgXE1plzCwyVVJB4gEqZcAi4v3HKJSD1ARPzkEpF6gAjY5BJzVrlEQzxARLzkEg0lgETqj/ayxMchVhaIZEO2gIxjCUf52/CNmKE+lHWq/7NyJ5fYw3/ZOK30L7lS0JLnwwCCAAAAAElFTkSuQmCC"
        alt
      /></router-link>
    </div>
    <div class="m-content-box">
      <ul>
        <li>
          <img src="https://mall.s.maizuo.com/70a1296a6a755c1a90c651d97c1a3a50.jpg" alt />
        </li>
        <li>
          <img src="https://mall.s.maizuo.com/79d4658c2cc108d9305b0325c59aaeb5.jpg" alt />
        </li>
        <li>
          <img src="https://mall.s.maizuo.com/3be2f58c7f10146c7ba69bae43c005ac.jpg" alt />
        </li>
        <li>
          <img src="https://mall.s.maizuo.com/aa105aab86d1f2898c6b61283bd06cb3.jpg" alt />
        </li>
        <li>
          <img src="https://mall.s.maizuo.com/770479e6b17bc9fb6d55f27bb6944f53.jpg" alt />
        </li>
        <li>
          <img src="https://mall.s.maizuo.com/38564bce4b4bdf0fee102e5a4a93814a.jpg" alt />
        </li>
        <li>
          <img src="https://mall.s.maizuo.com/c7e2475cb7b60aa5ae33e7f333a33943.jpg" alt />
        </li>
        <li>
          <img src="https://mall.s.maizuo.com/99b72b042091e7934dbc291ecee51773.jpg" alt />
        </li>
        <li>
          <img src="https://mall.s.maizuo.com/ba189ac6a64004db8de3c2b64d92090e.jpg" alt />
        </li>
      </ul>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import $ from "jquery";
export default {
  name: "",

  data() {
    return {};
  }
};
</script>

<style lang='stylus' rel='stylesheet/stylus'>
.left {
  width: 11%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.left img {
  margin-left: 8px;
  margin-top: 10px;
  width: 0.75rem;
  height: 0.8125rem;
  vertical-align: middle;
  margin-bottom: 0.6rem;
}

.m-content-box {
  width: 100%;
  overflow: hidden;
}

.m-content-box img {
  max-width: 100%;
}
</style>
