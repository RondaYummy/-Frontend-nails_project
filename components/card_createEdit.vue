<template>
  <div class="item" :class="{ resizeBlock: isEdit }">
    <template v-if="isEdit">
      <h3>Name:</h3>
      <input type="number" class="price" v-model="form.name" />
      <h3>Price:</h3>
      <input type="number" class="price" v-model="form.price" />
      <h3>Description:</h3>
      <input class="description" v-model="form.description" />
      <h3>Image Card</h3>
      <input class="image" v-model="form.image" />
{{ this.cardStyle.height}}
      <div class="slidecontainer">
        <h3>Border Radius {{ cardStyle.borderRadius }}</h3>
        <input
          type="range"
          min="1"
          max="20"
          value="1"
          class="slider"
          v-model="cardStyle.borderRadius"
        />
      </div>
    </template>

    <template v-else class="product-list">
      <div class="product-wrap">
        <div class="product-image">
          <a href="">
            <img
              src="https://html5book.ru/wp-content/uploads/2015/10/black-dress.jpg"
            />
            <div class="shadow"></div>
          </a>
          <a class="detail-link" href="" title="Быстрый просмотр"></a>
          <div class="actions">
            <div class="actions-btn">
              <a class="add-to-cart" href="" title="Добавить в корзину"></a>
              <a
                class="add-to-wishlist"
                href=""
                title="Добавить в мои желания"
              ></a>
              <a
                class="add-to-compare"
                href=""
                title="Добавить для сравнения"
              ></a>
            </div>
          </div>
        </div>
        <div class="product-lists">
          <h3>Маленькое черное платье</h3>
          <div class="price">&#8381; 1999</div>
        </div>
      </div>
    </template>

    <div class="button__block">
      <button v-if="!isEdit" class="button buttonHover" @click="changeEdit">
        Edit
      </button>
      <button v-if="isEdit" class="button buttonHover" @click="changeEdit">
        Save
      </button>
      <button disabled class="button buttonHover">Delete</button>
    </div>
  </div>
</template>

<script>
import pick from "lodash/pick";

export default {
  name: "Item",
  props: {
    price: String,
    image: String,
    description: String,
    name: String,
    width: Number,
    height: Number,
    borderRadius: Number,
  },
  data() {
    return {
      isEdit: false,
      form: {
        price: 0,
        image: "",
        description: "",
        name: "",
      },
      cardStyle: {
        borderRadius: "",
        width: '',
        height: '',
      },
    };
  },
  methods: {
    changeEdit() {
      this.isEdit = !this.isEdit;

      if (!this.isEdit) {
        this.$emit("edit", this.form);
      } else {
        const toEdit = pick(this, [
          "price",
          "image",
          "description",
          "width",
          "height",
          "borderRadius",
        ]);

        this.form = toEdit;
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.product-wrap {
  width: 100%;
  text-align: center;
  margin: 0 auto;
  background: white;
}
.product-image {
  position: relative;
  overflow: hidden;
}
.product-image a {
  display: block;
}
.product-image img {
  display: block;
  width: 100%;
}
.shadow {
  background: rgba(0, 0, 0, 0.3);
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: 0.3s ease-in-out;
}
.product-wrap:hover .shadow {
  opacity: 1;
}
.detail-link {
  text-decoration: none;
  width: 16%;
  height: 16%;
  background: #ff7659;
  border-radius: 3px;
  opacity: 0;
  position: absolute;
  left: 50%;
  top: 50px;
  transform: translate(-50%, -50%) rotate(45deg);
  transition: 0.3s ease-in-out;
}
.detail-link:before {
  content: "5";
  font-family: FontAwesome;
  color: white;
  font-size: 20px;
  display: block;
  height: 99%;
  line-height: 50px;
  width: 99%;
  transform: rotate(-45deg);
  transition: 0.3s ease-in-out;
}
.product-wrap:hover .detail-link {
  opacity: 1;
  top: 50%;
}
.actions {
  width: 100%;
  position: absolute;
  right: 0.5%;
  opacity: 0;
  transition: 0.5s ease-in-out;
}
.product-wrap:hover .actions {
  bottom: 0;
  opacity: 1;
}
.actions-btn {
  float: right;
}
.actions-btn a {
  display: inline-block;
  background: white;
  color: #555;
  width: 47px;
  height: 47px;
  line-height: 47px;
  text-decoration: none;
  transition: 0.3s ease-in-out;
}
.actions-btn a:hover {
  background: #ff7659;
  color: white;
}
.actions-btn a:after {
  font-family: FontAwesome;
  font-size: 14px;
}
.add-to-cart:after {
  content: "1";
}
.add-to-wishlist:after {
  content: "2";
}
.add-to-compare:after {
  content: "3";
}
.product-list {
  margin: 20px 0;
  font-family: "Open Sans", serif;
}
.product-list h3 {
  color: #555;
  font-size: 15px;
}

.price {
  font-size: 16px;
  color: #fc5a5a;
  display: block;
  margin-bottom: 12px;
}
.button {
  margin: 10px;
  border: 1px solid lightblue;
  border-radius: 10px;
  padding: 5px;
}
.button__block {
  display: flex;
  border-top: 1px solid lightgrey;
}
.resizeBlock {
  resize: both;
  /* display: inline-block; */
  overflow: auto;
  min-width: 270px;
  min-height: 350px;
  background-size: cover;
}
.item {
  overflow: auto;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 40px;
  border: 2px solid lightgrey;
  /* Для хороших браузеров */
  -moz-border-radius: 2px; /* Firefox */
  -webkit-border-radius: 2px; /* Safari, Chrome */
  -khtml-border-radius: 2px; /* KHTML */
  border-radius: 2px; /* CSS3 */
  /* Для плохих IE */
  width: 300px;
  text-align: center;
  border-bottom: 2px solid #f5f5f5;
  background: white;
  font-family: "Open Sans";
  transition: 0.3s ease-in;
  border-radius: 5px;
}
.product-list {
  background: #fafafa;
  padding: 15px 0;
}
.slidecontainer {
  width: 100%;
}
.item:hover {
  border-bottom: 2px solid #fc5a5a;
}
.image {
  display: block;
  width: 100%;
}
/* The slider itself */
.slider {
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  height: 25px;
  background: #d3d3d3;
  outline: none;
  opacity: 0.7;
  -webkit-transition: 0.2s; /* 0.2 seconds transition on hover */
  transition: opacity 0.2s;
}

/* Mouse-over effects */
.slider:hover {
  opacity: 1;
}
.product-list h3 {
  font-size: 18px;
  font-weight: 400;
  color: #444444;
  margin: 0 0 10px 0;
}
.button {
  text-decoration: none;
  display: inline-block;
  padding: 0 12px;
  background: #cccccc;
  color: white;
  text-transform: uppercase;
  font-size: 12px;
  line-height: 28px;
  transition: 0.3s ease-in;
}
.buttonHover:hover {
  background: #fc5a5a;
}
</style>