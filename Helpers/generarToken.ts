import jwt from "jwt-simple";

export const generarToken = (properties: any, key: string, minutes: number) => {
    const payload = {
        exp: Math.floor(Date.now() / 1000) + (minutes * 60),
        data: properties
    }
    return jwt.encode(payload, key);
}
