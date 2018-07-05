export const GET_CRYPTOCCY_DATA =
   "https://api.coinmarketcap.com/v1/ticker/?limit=5&convert=";
export function getCryptoData(displayCcy) {
   return fetch(`${GET_CRYPTOCCY_DATA}${displayCcy}`, {
      method: "GET"
   }).then(
      res => {
         if (res.status === 200) {
            return res.json();
         } else {
            throw new Error(res);
         }
      }
   );
}