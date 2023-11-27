import { Bonus, CharacterState } from '@/interfaces/Character'

function applyConstellationBonuses(state: CharacterState): Bonus[] {
    return state.character.constellationBonuses.slice(
        0,
        state.characterConstellation
    )
}

function getUpdatedBonuses(state: CharacterState): Bonus[] {
    const constellationBonuses = applyConstellationBonuses(state)
    // Additional bonus types can be added here

    return [
        ...state.characterActiveBonuses,
        ...constellationBonuses,
        // ... more!
    ]
}

export default getUpdatedBonuses
