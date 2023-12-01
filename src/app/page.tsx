'use client'

import {
    AttributesTable,
    CharacterBonuses,
    CharacterImage,
    CharacterModal,
    CustomSelect,
    TalentSelect,
} from '@/components'
import {
    Character,
    CharacterAttributes,
    CharacterState,
    DamageResult,
} from '@/interfaces/Character'
import {
    applySpecialBonuses,
    calculateDamage,
    defaultCharacterAttributes,
    displayStats,
    getConstellationOptions,
    getLevelOptions,
    getUpdatedBonuses,
    kebabCase,
    recalculateStateAndAttributes,
} from '@/lib'
import { useEffect, useState } from 'react'

export default function Home() {
    const [characterState, setCharacterState] = useState<CharacterState | null>(null)
    const [characterAttributes, setCharacterAttributes] =
        useState<CharacterAttributes | null>(null)
    const [isCharacterModalOpen, setCharacterModalOpen] = useState(false)
    const [damageResults, setDamageResults] = useState<DamageResult[] | null>(null)

    const handleCharacterSelect = (selectedCharacter: Character) => {
        const initialState: CharacterState = {
            character: selectedCharacter,
            characterLevel: '90/90',
            characterConstellation: 0,
            characterActiveBonuses: selectedCharacter.characterBonuses.filter(
                (bonus) => bonus.enabled ?? false
            ),
            // User-selected talent levels (capped at 1-10)
            characterTalentLevels: [10, 10, 10],
            // Talent levels post-bonus (e.g. C3, C5, Childe passive)
            effectiveTalentLevels: [10, 10, 10],
        }

        const [updatedState, updatedAttributes] =
            recalculateStateAndAttributes(initialState)

        setCharacterState(updatedState)
        setCharacterAttributes(updatedAttributes)
        setCharacterModalOpen(false)
    }

    const updateCharacterState = <K extends keyof CharacterState>(
        key: K,
        newValue: CharacterState[K]
    ) => {
        setCharacterState((prevState) => {
            if (prevState === null) return null

            const modifiedState = { ...prevState, [key]: newValue }
            const updatedBonuses = getUpdatedBonuses(modifiedState)
            modifiedState.characterActiveBonuses = updatedBonuses

            const [updatedState, newAttributes] =
                recalculateStateAndAttributes(modifiedState)
            setCharacterAttributes(newAttributes)

            return updatedState
        })
    }

    useEffect(() => {
        if (characterState && characterAttributes) {
            const newDamageResults = calculateDamage(
                characterState,
                characterAttributes,
                ENEMY_RESISTANCES
            )
            setDamageResults(newDamageResults)
            console.log('Damage Results: ', newDamageResults)
        }
    }, [characterState, characterAttributes])

    // useEffect(() => {
    //     console.log('Character State has been updated: ', characterState)
    // }, [characterState])

    // useEffect(() => {
    //     console.log('Character Attributes have been updated: ', characterAttributes)
    // }, [characterAttributes])

    return (
        <>
            <main className="flex h-screen flex-col p-2 lg:flex-row lg:overflow-y-hidden">
                {characterState && (
                    <>
                        <div className="m-2 flex-1 rounded-lg border lg:min-w-max lg:max-w-max lg:overflow-auto">
                            <div className="flex flex-col rounded-lg">
                                <h2 className="rounded-t-lg border-b bg-secondary/25 px-4 py-3 text-lg font-bold">
                                    Character
                                </h2>
                                <div className="p-4">
                                    <div className="flex flex-col justify-between md:flex-row">
                                        <div className="flex flex-col justify-center gap-4 md:flex-row md:justify-normal">
                                            <form className="flex justify-center md:justify-normal">
                                                <CharacterImage
                                                    icon={
                                                        characterState.character.icon
                                                    }
                                                    rarity={
                                                        characterState.character
                                                            .rarity
                                                    }
                                                    element={
                                                        characterState.character
                                                            .vision
                                                    }
                                                    onClick={() =>
                                                        setCharacterModalOpen(true)
                                                    }
                                                />
                                            </form>
                                            <div className="flex flex-col gap-2">
                                                <div className="flex flex-col">
                                                    <span className="flex justify-center text-xl font-bold md:justify-normal">
                                                        {
                                                            characterState.character
                                                                .name
                                                        }
                                                    </span>
                                                    <span className="text-md flex justify-center text-muted-foreground md:justify-normal">
                                                        {'★'.repeat(
                                                            characterState.character
                                                                .rarity
                                                        )}
                                                    </span>
                                                </div>
                                                <div className="ml-auto mr-auto flex max-w-max flex-col items-center gap-2 md:items-start">
                                                    <div className="flex items-center gap-2">
                                                        Ascension:
                                                        <CustomSelect
                                                            // Changing keys forces re-render
                                                            key={`level-select-${kebabCase(
                                                                characterState
                                                                    .character.name
                                                            )}`}
                                                            options={getLevelOptions(
                                                                characterState.character
                                                            )}
                                                            value={
                                                                characterState.characterLevel
                                                            }
                                                            onChange={(newLevel) =>
                                                                updateCharacterState(
                                                                    'characterLevel',
                                                                    newLevel
                                                                )
                                                            }
                                                        />
                                                    </div>
                                                    <div className="flex items-center gap-2 md:hidden">
                                                        Constellation:
                                                        <CustomSelect
                                                            key={`constellation-select-${kebabCase(
                                                                characterState
                                                                    .character.name
                                                            )}`}
                                                            options={getConstellationOptions(
                                                                characterState.character
                                                            )}
                                                            value={characterState.characterConstellation.toString()}
                                                            onChange={(
                                                                newConstellation
                                                            ) =>
                                                                updateCharacterState(
                                                                    'characterConstellation',
                                                                    parseInt(
                                                                        newConstellation,
                                                                        10
                                                                    )
                                                                )
                                                            }
                                                        />
                                                    </div>
                                                    <div className="hidden md:flex md:w-full md:items-center">
                                                        {/* TODO: CONSTELLATION POPOVER */}
                                                        Constellation:
                                                        <CustomSelect
                                                            key={`constellation-select-${kebabCase(
                                                                characterState
                                                                    .character.name
                                                            )}`}
                                                            options={getConstellationOptions(
                                                                characterState.character
                                                            )}
                                                            value={characterState.characterConstellation.toString()}
                                                            onChange={(
                                                                newConstellation
                                                            ) =>
                                                                updateCharacterState(
                                                                    'characterConstellation',
                                                                    parseInt(
                                                                        newConstellation,
                                                                        10
                                                                    )
                                                                )
                                                            }
                                                        />
                                                        {/* <ConstellationPopover
                                                            characterName={character.name}
                                                            constellation={constellation}
                                                            setConstellation={setConstellation}
                                                        /> */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <TalentSelect
                                            character={characterState.character}
                                            talentLevels={
                                                characterState.characterTalentLevels
                                            }
                                            effectiveTalentLevels={
                                                characterState.effectiveTalentLevels
                                            }
                                            setTalentLevels={(newTalentLevels) =>
                                                updateCharacterState(
                                                    'characterTalentLevels',
                                                    newTalentLevels
                                                )
                                            }
                                        />
                                    </div>
                                    <CharacterBonuses
                                        character={characterState.character}
                                        activeBonuses={
                                            characterState.characterActiveBonuses
                                        }
                                        setActiveBonuses={(newActiveBonuses) =>
                                            updateCharacterState(
                                                'characterActiveBonuses',
                                                newActiveBonuses
                                            )
                                        }
                                        constellation={
                                            characterState.characterConstellation
                                        }
                                    />
                                </div>

                                <h2 className="border-y bg-secondary/25 px-4 py-3 text-lg font-bold">
                                    Attributes
                                </h2>
                                <AttributesTable
                                    attributes={characterAttributes}
                                    initialAttributes={applySpecialBonuses({
                                        ...defaultCharacterAttributes,
                                        ...characterState.character.baseStats[
                                            characterState.characterLevel
                                        ],
                                    })}
                                    displayStats={displayStats}
                                />
                            </div>
                        </div>

                        <div className="m-2 flex-1 rounded-lg border">
                            <h2 className="rounded-t-lg border-b bg-secondary/25 px-4 py-3 text-lg font-bold">
                                Weapon
                            </h2>
                            <div className="p-4">Weapon</div>

                            <h2 className="border-y bg-secondary/25 px-4 py-3 text-lg font-bold">
                                Artifacts
                            </h2>

                            <div className="p-4">Artifacts</div>

                            <h2 className="border-y bg-secondary/25 px-4 py-3 text-lg font-bold">
                                Party Buffs
                            </h2>
                            <div className="p-4">Party Buffs</div>
                        </div>

                        <div className="m-2 flex-1 rounded-lg">
                            <div className="flex h-full flex-col rounded-lg border">
                                <h2 className="rounded-t-lg border-b bg-secondary/25 px-4 py-3 text-lg font-bold">
                                    Results
                                </h2>
                                <div className="overflow-auto">
                                    {/* <ResultsTable damageResults={damageResults} /> */}
                                    asd
                                </div>
                            </div>
                        </div>
                    </>
                )}
                <CharacterModal
                    open={isCharacterModalOpen}
                    onOpenChange={setCharacterModalOpen}
                    setCharacter={handleCharacterSelect}
                />
            </main>
        </>
    )
}

//TODO: Add form for enemy resistances
const ENEMY_RESISTANCES = {
    defenseMultiplier: 0.5,
    resistance: 0.9,
}
