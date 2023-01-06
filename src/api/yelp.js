import axios from "axios";

export default axios.create({
    baseURL: "https://api.yelp.com/v3/businesses",
    headers: {
        Authorization:
            "Bearer Y_baJYtqKlMSc7kcT1vo1EkbitwVvha777waYSEUJmxbXYJCfKEvll6BEpJV_r42YUWCXaV4RzSNRj-2vOgTxYpyqauFDYDF_y9hd3tSma9yd2nwbEVAwj681OevY3Yx",
    },
});