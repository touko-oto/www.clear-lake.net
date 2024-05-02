import { createClient } from 'microcms-js-sdk';

export type Icon = {
    id: string;
    image: string;
}

export type Profile = {
    id: string;
    profile_image: string;
    profile_text: string;
    email: string;
}

export type SNS = {
    id: string;
    title: string;
    text: string;
    url: string;
}

if (!process.env.SERVICE_DOMAIN) {
    throw new Error("MICROCMS_SERVICE_DOMAIN is required");
}

if (!process.env.API_KEY) {
    throw new Error("API_KEY is required");
}

export const client = createClient({
    serviceDomain: process.env.SERVICE_DOMAIN,
    apiKey: process.env.API_KEY,
});

// アイコンを取得
export const getIcon = async () => {
    const icon = await client.get<Icon>({
        endpoint: "icon",
    })
    return icon;
}

// プロフィールを取得
export const getProfile = async () => {
    const profile = await client.get<Profile>({
        endpoint: "profile",
    });
    return profile;
};

// SNS一覧を取得
export const getSNS = async () => {
    const sns = await client.getList<SNS>({
    endpoint: "snslist"
    });
    return sns;
}


