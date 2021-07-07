export default function ({ app, res, query }) {
   if (query.lang) {
     app.$cookiz.set('lang', query.lang)
   }
 }