

export interface FeatureType {
    title: string;
    description: string;
    icon: React.ReactNode;
    color?: string;
    gradient: {
        from: string;
        to: string;
        text?: string;
        hover?: string;
    };
    features?: string[];
}
