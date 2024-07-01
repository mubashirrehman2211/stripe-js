// plugins/stripe.js
import { loadStripe } from '@stripe/stripe-js'

export default defineNuxtPlugin(async (nuxtApp) => {
     const config = useRuntimeConfig()
     const stripe = await loadStripe(config.public.stripePublicKey)

     if (!stripe) {
          console.error('Failed to initialize Stripe')
     }

     nuxtApp.provide('stripe', stripe)
})
