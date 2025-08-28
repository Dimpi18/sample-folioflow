export type Theme = {
    id: string;
    name: string;
    light: {
        background: string;
        foreground: string;
        primary: string;
        'primary-foreground': string;
        secondary: string;
        'secondary-foreground': string;
        muted: string;
        'muted-foreground': string;
        accent: string;
        'accent-foreground': string;
        border: string;
        input: string;
        ring: string;
        card: string;
        'card-foreground': string;
    },
    dark: {
        background: string;
        foreground: string;
        primary: string;
        'primary-foreground': string;
        secondary: string;
        'secondary-foreground': string;
        muted: string;
        'muted-foreground': string;
        accent: string;
        'accent-foreground': string;
        border: string;
        input: string;
        ring: string;
        card: string;
        'card-foreground': string;
    }
}

export const themes: Theme[] = [
    {
        id: 'default',
        name: 'Default',
        light: {
            background: "240 67% 94%",
            foreground: "275 100% 10%",
            card: "240 60% 99%",
            "card-foreground": "275 100% 10%",
            primary: "275 100% 25%",
            "primary-foreground": "240 100% 98%",
            secondary: "240 20% 90%",
            "secondary-foreground": "275 100% 15%",
            muted: "240 20% 90%",
            "muted-foreground": "240 5% 45%",
            accent: "197 71% 73%",
            "accent-foreground": "197 100% 10%",
            border: "240 10% 85%",
            input: "240 10% 88%",
            ring: "275 100% 50%",
        },
        dark: {
            background: "275 10% 10%",
            foreground: "240 10% 95%",
            card: "275 10% 12%",
            "card-foreground": "240 10% 95%",
            primary: "275 80% 60%",
            "primary-foreground": "275 10% 10%",
            secondary: "240 5% 20%",
            "secondary-foreground": "240 10% 95%",
            muted: "240 5% 20%",
            "muted-foreground": "240 5% 65%",
            accent: "197 71% 73%",
            "accent-foreground": "197 100% 10%",
            border: "240 5% 25%",
            input: "240 5% 25%",
            ring: "275 80% 70%",
        }
    },
    {
        id: 'stone',
        name: 'Stone',
        light: {
            background: "25 100% 97%",
            foreground: "25 20% 10%",
            card: "25 100% 100%",
            "card-foreground": "25 20% 10%",
            primary: "25 80% 40%",
            "primary-foreground": "25 100% 98%",
            secondary: "25 20% 92%",
            "secondary-foreground": "25 20% 15%",
            muted: "25 20% 92%",
            "muted-foreground": "25 10% 45%",
            accent: "45 90% 60%",
            "accent-foreground": "45 100% 10%",
            border: "25 10% 85%",
            input: "25 10% 90%",
            ring: "25 80% 50%",
        },
        dark: {
            background: "25 10% 12%",
            foreground: "25 10% 95%",
            card: "25 10% 15%",
            "card-foreground": "25 10% 95%",
            primary: "25 75% 60%",
            "primary-foreground": "25 10% 10%",
            secondary: "25 5% 22%",
            "secondary-foreground": "25 10% 95%",
            muted: "25 5% 22%",
            "muted-foreground": "25 5% 65%",
            accent: "45 90% 60%",
            "accent-foreground": "45 100% 10%",
            border: "25 5% 30%",
            input: "25 5% 30%",
            ring: "25 75% 70%",
        },
    },
    {
        id: 'rose',
        name: 'Rose',
        light: {
            background: "350 100% 97%",
            foreground: "350 20% 10%",
            card: "350 100% 100%",
            "card-foreground": "350 20% 10%",
            primary: "340 80% 50%",
            "primary-foreground": "350 100% 98%",
            secondary: "350 20% 92%",
            "secondary-foreground": "350 20% 15%",
            muted: "350 20% 92%",
            "muted-foreground": "350 10% 45%",
            accent: "280 90% 70%",
            "accent-foreground": "280 100% 10%",
            border: "350 10% 85%",
            input: "350 10% 90%",
            ring: "340 80% 60%",
        },
        dark: {
            background: "350 10% 12%",
            foreground: "350 10% 95%",
            card: "350 10% 15%",
            "card-foreground": "350 10% 95%",
            primary: "340 75% 70%",
            "primary-foreground": "350 10% 10%",
            secondary: "350 5% 22%",
            "secondary-foreground": "350 10% 95%",
            muted: "350 5% 22%",
            "muted-foreground": "350 5% 65%",
            accent: "280 90% 70%",
            "accent-foreground": "280 100% 10%",
            border: "350 5% 30%",
            input: "350 5% 30%",
            ring: "340 75% 80%",
        },
    },
    {
        id: 'emerald',
        name: 'Emerald',
        light: {
            background: "140 50% 96%",
            foreground: "140 20% 10%",
            card: "140 50% 100%",
            "card-foreground": "140 20% 10%",
            primary: "145 60% 40%",
            "primary-foreground": "140 100% 98%",
            secondary: "140 20% 92%",
            "secondary-foreground": "140 20% 15%",
            muted: "140 20% 92%",
            "muted-foreground": "140 10% 45%",
            accent: "160 80% 65%",
            "accent-foreground": "160 100% 10%",
            border: "140 10% 85%",
            input: "140 10% 90%",
            ring: "145 60% 50%",
        },
        dark: {
            background: "140 10% 12%",
            foreground: "140 10% 95%",
            card: "140 10% 15%",
            "card-foreground": "140 10% 95%",
            primary: "145 65% 65%",
            "primary-foreground": "140 10% 10%",
            secondary: "140 5% 22%",
            "secondary-foreground": "140 10% 95%",
            muted: "140 5% 22%",
            "muted-foreground": "140 5% 65%",
            accent: "160 80% 65%",
            "accent-foreground": "160 100% 10%",
            border: "140 5% 30%",
            input: "140 5% 30%",
            ring: "145 65% 75%",
        }
    }
];
