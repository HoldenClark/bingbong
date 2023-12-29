'use client'

import Image, { StaticImageData } from 'next/image'
import { Card, CardBody } from '@nextui-org/react'
import React from "react";
import twitch from './images/twitch.svg'
import twitter from './images/twitter.svg'

interface PlayerCardProps {
    imageRace: StaticImageData; // Assuming you're using static imports for images
    imageCountry: StaticImageData;
    imagePlayer: StaticImageData;
    playerName: string;
    playerStats: {
        overallRating: number;
        offence: number;
        defence: number;
        versatility: number;
        multitasking: number;
        mechanics: number;
        speed: number;
        creativity: number;
    };
    playerTwitterLink: string;
    playerTwitchLink: string;
}

const PlayerCard: React.FC<PlayerCardProps> = ({
    imageRace,
    imageCountry,
    imagePlayer,
    playerName,
    playerStats,
    playerTwitterLink,
    playerTwitchLink
}) => {
    return (
        <Card className="grid grid-place-items-center rounded-lg bg-gradient-to-b from-black from-70% to-saffron m-4 lg:m-8 h-[400px] w-[350px] xl:w-[800px] 2xl:w-[500px]">
            <CardBody className="grid grid-place-items-center text-saffron">

                <div className="grid grid-cols-3 justify-items-center">
                    <Image className="mt-4" src={imageRace} alt="faction-img" width={60} height={40}></Image>
                    <h1 className="font-black text-saffron text-2xl mt-8">{playerName}</h1>
                    <Image className="mt-[28px]" width={45} height={40} src={imageCountry} alt='country-img'></Image>
                </div>

                <div className="grid grid-cols-2 justify-items-center">
                    <Image className="rounded-lg ml-4" width={200} height={300} src={imagePlayer} alt="player-img"></Image>

                    <div className="ml-8">
                        <div className="grid grid-cols-1 justify-items-center mr-[26px]">
                            <p className="font-black text-xl">OVR</p>
                            <p className="text-bold text-3xl">{playerStats.overallRating}</p>
                        </div>

                        <div className="grid grid-cols-2 justify-items-center">
                            <div>
                                <p>Offence</p>
                                <p>Defence</p>
                                <p>Versatility</p>
                                <p>Multitasking</p>
                                <p>Mechanics</p>
                                <p>Speed</p>
                                <p>Creativity</p>
                            </div>
                            <div>
                                <p className="text-right text-md">{playerStats.offence}</p>
                                <p className="text-right text-md">{playerStats.defence}</p>
                                <p className="text-right text-md">{playerStats.versatility}</p>
                                <p className="text-right text-md">{playerStats.multitasking}</p>
                                <p className="text-right text-md">{playerStats.mechanics}</p>
                                <p className="text-right text-md">{playerStats.speed}</p>
                                <p className="text-right text-md">{playerStats.creativity}</p>
                            </div>

                        </div>
                        <div className="grid grid-cols-2 justify-items-center m-8">
                            <a href={playerTwitterLink} target="_blank" rel="noopener noreferrer">
                                <Image className="self-end" src={twitter} alt="twitter-img"></Image>
                            </a>
                            <a href={playerTwitchLink} target="_blank" rel="noopener noreferrer">
                                <Image className="self-end" src={twitch} alt="twitch-img"></Image>
                            </a>
                        </div>
                    </div>
                </div>
            </CardBody>
        </Card>
    )
}

export default PlayerCard;