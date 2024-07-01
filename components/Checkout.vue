<!-- components/Checkout.vue -->
<template>
  <div class="my-2">
    <button
      @click="handleCheckout"
      class="border-2 border-[#3bc195] text-white py-2 px-4 rounded font-semibold bg-[#3bc195] hover:bg-[#4acea2]"
    >
      Checkout
    </button>
  </div>
</template>

<script setup>
import { useNuxtApp } from "#app";

const { $stripe } = useNuxtApp();

const handleCheckout = async () => {
  const { error } = await $stripe.redirectToCheckout({
    lineItems: [{ price: "price_1PVrfFLytjnUSMZDBAiNdjqO", quantity: 1 }],
    mode: "subscription",
    successUrl: "http://localhost:3000/success",
    cancelUrl: "http://localhost:3000/cancel",
  });

  if (error) {
    console.error("Stripe checkout error:", error);
  }
};
</script>
