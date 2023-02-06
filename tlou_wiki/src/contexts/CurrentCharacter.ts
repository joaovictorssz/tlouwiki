import { createContext } from "react";

import { Character } from "../types/Character";

type CurrentType = {
    data: any,
    currentCharacter: any,
    setCurrentCharacter: (a: any) => void
}

export const CurrentCharacter = createContext<CurrentType>({
} as CurrentType)