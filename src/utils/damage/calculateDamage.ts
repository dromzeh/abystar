import {
    AbilityScaling,
    Bonus,
    FormulaType,
    NewBaseStat,
    Character,
} from '@/types/Character'
import { calculateDamageFormula } from '@/utils'

function calculateDamage(
    baseStats: NewBaseStat,
    abilityScaling: AbilityScaling,
    character: Character,
    skillLevels: string[],
    enemyResistances: NewBaseStat,
    activeBonuses: Bonus[]
) {
    const characterAbilityScaling = abilityScaling[character.name]
    if (!characterAbilityScaling) return []

    // Calculates damage for Normal Attack, Elemental Skill, and Elemental Burst
    const damageResults = character.activeSkills.flatMap((skill, index) => {
        // Checks if the skill's abilityScalings have been implemented
        const skillAbilityScaling = characterAbilityScaling[skill.name]
        if (!skillAbilityScaling) return []

        // Makes deep copy of ability scaling
        const originalAbilityScaling = JSON.parse(
            JSON.stringify(abilityScaling)
        )

        // Calculates damage for each aspect of the skill
        const skillDamageResults = Object.keys(skill.data).flatMap((key) => {
            // Restore original ability scaling prematurely (since disabled bonuses don't exist in activeBonuses)
            abilityScaling = JSON.parse(JSON.stringify(originalAbilityScaling))

            // Apply any changes activeBonuses make to ability scaling
            activeBonuses.forEach((bonus) => {
                if (
                    bonus.affectsAbilityIndex === index &&
                    bonus.applyToAbilityScaling
                ) {
                    bonus.applyToAbilityScaling(abilityScaling)
                }
            })

            // Checks if the aspect's abilityScalings have been implemented
            const aspectAbilityScalings =
                abilityScaling[character.name][skill.name][key]
            if (!aspectAbilityScalings) return []

            const {
                formulaType,
                baseStat,
                additiveBonusStat = '',
                multiplicativeBonusStat = '',
                damageType,
            } = aspectAbilityScalings

            let damage
            switch (formulaType) {
                case FormulaType.DamageFormula:
                    if (!baseStat || !damageType) return []
                    damage = calculateDamageFormula(
                        baseStats,
                        skill,
                        key,
                        skillLevels[index],
                        baseStat,
                        Array.isArray(additiveBonusStat)
                            ? additiveBonusStat
                            : [additiveBonusStat],
                        Array.isArray(multiplicativeBonusStat)
                            ? multiplicativeBonusStat
                            : [multiplicativeBonusStat],
                        enemyResistances,
                        damageType
                    )
                    break
                case FormulaType.GenericFormulaWithScaling:
                    // Apply generic formula with scaling
                    break
                case FormulaType.GenericFormulaWithoutScaling:
                    // Apply generic formula without scaling
                    break
                case FormulaType.ElementalReactionFormula:
                    // Apply elemental reaction formula
                    break
                default:
                    break
            }

            return [{ aspectName: key, damage }]
        })

        return [{ skillName: skill.name, aspects: skillDamageResults }]
    })

    return damageResults
}

export default calculateDamage