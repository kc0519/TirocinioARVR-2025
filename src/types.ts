export interface Character {
    name: string;
    image: string;
    specialWeapon: string;
}

export interface Weapons {
    primary: string;
    secondary: string;
}

export interface PlayerStats {
    currentHealth: number;
    maxHealth: number;
    currentExperience: number;
    experienceToNextLevel: number;
}

export interface Ability {
    image: string;
    name: string;
    description: string;
}