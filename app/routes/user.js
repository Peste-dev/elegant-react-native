import profile from 'view/user/profile'
import security from 'view/user/setting/security'
import paymentUpdate from 'view/user/setting/payment-update'
import billingDetails from 'view/user/setting/billing-details'
import changePlan from 'view/user/setting/change-plan'
import changePlanAfterSignup from 'view/user/setting/change-plan-after-signup'
import language from 'view/user/setting/language'
import adjustSubtitles from 'view/user/setting/adjust-subtitles'
import viewHistory from 'view/user/setting/viewing-history'
import callbackZarinpal from 'view/user/payment/zarinpal-callback'
import callbackPayir from 'view/user/payment/payir-callback'
import callbackPaypal from 'view/user/payment/paypal-callback'


export default {
  profile: { screen: profile },
  security: { screen: security },
  paymentUpdate: { screen: paymentUpdate },
  billingDetails: { screen: billingDetails },
  changePlan: { screen: changePlan },
  changePlanAfterSignup: { screen: changePlanAfterSignup },
  language: { screen: language },
  adjustSubtitles: { screen: adjustSubtitles },
  viewHistory: { screen: viewHistory },
  callbackZarinpal: { screen: callbackZarinpal },
  callbackPayir: { screen: callbackPayir },
  callbackPaypal: { screen: callbackPaypal }
}
