import axios from "axios";

export const apiMercadoLibre = axios.create({
    baseURL: "https://api.mercadolibre.com"
})