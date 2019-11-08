import { stringify, parse } from "query-string";
import api from "../services/api";

class UserController {
    async store(req, res) {
        const { code } = req.body;

        const body = {
            redirect_uri: process.env.WAKATIME_REDIRECT_URL,
            grant_type: "authorization_code",
            code,
            client_id: process.env.WAKATIME_CLIENT_ID,
            client_secret: process.env.WAKATIME_APP_SECRET
        };

        try {
            const response = await api.post("/token", stringify(body), {
                headers: {
                    Accept: "application/x-www-form-urlencoded"
                }
            });
            const { access_token: token } = parse(response.data);
            console.log(token);
            return res.send({ token });
        } catch (err) {
            console.log(err.response.data);
            return res.status(400).send({ error: err.response.data });
        }
    }
}

export default new UserController();
