'use client'

import Image from 'next/image'
import { Card, CardBody, Button, ButtonGroup, Divider } from '@nextui-org/react'
import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link } from "@nextui-org/react";
import PlayerCard from './playercard';
import picture from './images/bingbongimage2.png'
import starcraft from './images/starcraft-image.png'
import discord from './images/baseline-discord.svg'
import twitch from './images/twitch.svg'
import twitch_gold from './images/twitch_gold.svg'
import twitter from './images/twitter.svg'
import twitter_gold from './images/twittergold.svg'
import copyright from './images/baseline-copyright.svg'
import holden from './images/holdenpfplq.jpg'
import benja from './images/benja.jpeg'
import acheron from './images/acheron.jpg'
import billy from './images/billy.jpg'
import spazy from './images/spazymazy.jpg'
import anticore from './images/anticore_pfp.png'
import josh from './images/josh.jpg'
import usa from './images/flag-united-states.svg'
import denmark from './images/flag-denmark.svg'
import italy from './images/flag-italy.svg'
import canada from './images/flag-canada.svg'
import southkorea from './images/flag-south-korea.svg'
import protoss from './images/protoss_img.png'
import terran from './images/terran_img.png'
import zerg from './images/zerg_img.png'
import tl from './images/liquipedia.png'
import bingbong from './images/bingbongexports.png'
import placeholder from './images/PlayerImagePlaceholder.png'

export default function Home() {
  return (
    <main className="font-custom text-wheat">
      <Navbar position="sticky" className="top-0 bg-black">
        <NavbarBrand className="w-full flex min-h-[80px]">
          <div className="font-bold text-3xl flex p-4">
            <p className="text-saffron font-custom">BING BONG EXPORTS</p>
          </div>
          <div className="m-8 ml-auto flex space-x-4">
            {/* <a href="https://discord.gg/zNvSAzDx2D" target="_blank" rel="noopener noreferrer">
              <Image className="self-end" src={discord} alt="discord-img"></Image>
            </a> */}
            <a href="https://twitter.com/BingBongExports" target="_blank" rel="noopener noreferrer">
              <Image className="self-end" src={twitter_gold} alt="twitter-img"></Image>
            </a>
            <a href="https://www.twitch.tv/bingbongexports" target="_blank" rel="noopener noreferrer">
              <Image className="self-end" src={twitch_gold} alt="twitch-img"></Image>
            </a>
            <a href="https://liquipedia.net/starcraft2/Bing_Bong_Exports" target="_blank" rel="noopener noreferrer">
              <Image width={20} className="self-end" src={tl} alt="tl-img"></Image>
            </a>
          </div>
        </NavbarBrand>
      </Navbar>

      <div className="grid grid-cols-1 justify-items-center bg-gradient-to-b from-rgray via-wheat to-rgray ">
        <div className="grid grid-cols-1 justify-items-center mt-[48px] m-8">
          <Image width={800} height={350} src={bingbong} alt="test" className="rounded-tl-lg rounded-tr-lg" />
          <Card className="rounded-bl-lg rounded-br-lg columns-3 min-h-[100px] w-[310px] md:min-h-[150px] md:min-w-[800px] bg-black">
            <CardBody>
              <div className="m-4 grid grid-cols-1 justify-items-center">
                <div className="font-bold text-saffron m-4">In the time before even modern computers were conceived, Bing Bong Exports was founded to bring gamers together the world over. Whether youre a casual player, a hardcore competitor, or somewhere in between, were all united by our passion for this incredible world of pixels, strategy, and epic battles.</div>
              </div>
            </CardBody>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center md:p-30">
          <PlayerCard
            imageRace={protoss}
            imageCountry={usa}
            imagePlayer={holden}
            playerName="HOLDEN"
            playerStats={{
              overallRating: 78,
              offence: 81,
              defence: 83,
              versatility: 71,
              multitasking: 79,
              mechanics: 84,
              speed: 76,
              creativity: 74
            }}
            playerTwitterLink="https://twitter.com/Holden_SC2"
            playerTwitchLink="https://www.twitch.tv/holdensc2"
          />

          <PlayerCard
            imageRace={protoss}
            imageCountry={usa}
            imagePlayer={acheron}
            playerName="ACHERON"
            playerStats={{
              overallRating: 72,
              offence: 78,
              defence: 68,
              versatility: 70,
              multitasking: 69,
              mechanics: 77,
              speed: 70,
              creativity: 70
            }}
            playerTwitterLink="https://twitter.com/acheronii"
            playerTwitchLink="https://www.twitch.tv/acheronii"
          />

          <PlayerCard
            imageRace={terran}
            imageCountry={usa}
            imagePlayer={billy}
            playerName="BILLYUDDERS"
            playerStats={{
              overallRating: 30,
              offence: 23,
              defence: 36,
              versatility: 33,
              multitasking: 23,
              mechanics: 14,
              speed: 14,
              creativity: 70
            }}
            playerTwitterLink="https://twitter.com/BingBongExports"
            playerTwitchLink="https://www.twitch.tv/bingbongexports"
          />

          <PlayerCard
            imageRace={zerg}
            imageCountry={usa}
            imagePlayer={benja}
            playerName="BENJADEATH"
            playerStats={{
              overallRating: 63,
              offence: 83,
              defence: 57,
              versatility: 60,
              multitasking: 53,
              mechanics: 61,
              speed: 60,
              creativity: 64
            }}
            playerTwitterLink="https://twitter.com/BingBongExports"
            playerTwitchLink="https://www.twitch.tv/benjamarydeathdeath"
          />

          <PlayerCard
            imageRace={zerg}
            imageCountry={denmark}
            imagePlayer={spazy}
            playerName="SPAZYMAZY"
            playerStats={{
              overallRating: 86,
              offence: 93,
              defence: 82,
              versatility: 78,
              multitasking: 87,
              mechanics: 92,
              speed: 90,
              creativity: 83
            }}
            playerTwitterLink="https://twitter.com/BingBongExports"
            playerTwitchLink="https://www.twitch.tv/bingbongexports"
          />

          <PlayerCard
            imageRace={zerg}
            imageCountry={denmark}
            imagePlayer={anticore}
            playerName="ANTICORE"
            playerStats={{
              overallRating: 64,
              offence: 76,
              defence: 60,
              versatility: 57,
              multitasking: 56,
              mechanics: 63,
              speed: 57,
              creativity: 79
            }}
            playerTwitterLink="https://twitter.com/BingBongExports"
            playerTwitchLink="https://www.twitch.tv/bingbongexports"
          />

          <PlayerCard
            imageRace={protoss}
            imageCountry={italy}
            imagePlayer={placeholder}
            playerName="AZURA"
            playerStats={{
              overallRating: 72,
              offence: 77,
              defence: 73,
              versatility: 72,
              multitasking: 67,
              mechanics: 72,
              speed: 68,
              creativity: 78
            }}
            playerTwitterLink="https://twitter.com/BingBongExports"
            playerTwitchLink="https://www.twitch.tv/bingbongexports"
          />

          <PlayerCard
            imageRace={terran}
            imageCountry={denmark}
            imagePlayer={placeholder}
            playerName="MAG"
            playerStats={{
              overallRating: 58,
              offence: 72,
              defence: 52,
              versatility: 48,
              multitasking: 60,
              mechanics: 60,
              speed: 64,
              creativity: 48
            }}
            playerTwitterLink="https://twitter.com/Mag_sc2"
            playerTwitchLink="https://www.twitch.tv/bbex_mag"
          />

          <PlayerCard
            imageRace={terran}
            imageCountry={usa}
            imagePlayer={placeholder}
            playerName="SLIPJIP"
            playerStats={{
              overallRating: 71,
              offence: 80,
              defence: 66,
              versatility: 73,
              multitasking: 73,
              mechanics: 66,
              speed: 69,
              creativity: 74
            }}
            playerTwitterLink="https://twitter.com/Slip_sc2"
            playerTwitchLink="https://www.twitch.tv/bingbongexports"
          />

          <PlayerCard
            imageRace={zerg}
            imageCountry={canada}
            imagePlayer={placeholder}
            playerName="SHINY"
            playerStats={{
              overallRating: 57,
              offence: 54,
              defence: 57,
              versatility: 52,
              multitasking: 57,
              mechanics: 62,
              speed: 66,
              creativity: 51
            }}
            playerTwitterLink="https://twitter.com/BingBongExports"
            playerTwitchLink="https://www.twitch.tv/bingbongexports"
          />

          <PlayerCard
            imageRace={terran}
            imageCountry={canada}
            imagePlayer={josh}
            playerName="OMNISKEPTIC"
            playerStats={{
              overallRating: 59,
              offence: 60,
              defence: 64,
              versatility: 51,
              multitasking: 64,
              mechanics: 67,
              speed: 60,
              creativity: 47
            }}
            playerTwitterLink="https://twitter.com/Omni_Skeptic"
            playerTwitchLink="https://www.twitch.tv/omniskepticsc"
          />

          <PlayerCard
            imageRace={terran}
            imageCountry={southkorea}
            imagePlayer={placeholder}
            playerName="UNIVERSE"
            playerStats={{
              overallRating: 68,
              offence: 80,
              defence: 64,
              versatility: 60,
              multitasking: 71,
              mechanics: 76,
              speed: 71,
              creativity: 55
            }}
            playerTwitterLink="https://twitter.com/BingBongExports"
            playerTwitchLink="https://www.twitch.tv/bingbongexports"
          />
        </div>

        <div className="rounded-lg bg-black mt-[70px] min-h-[300px] min-w-[300px] lg:min-h-[500px] lg:min-w-[500px] ">
          <Image src={starcraft} alt="test"></Image>
        </div>
        <div className="mt-[110px] bg-black w-full min-h-[100px] border-solid border-saffron">
          <Card>
            <CardBody className="ml-8 mt-8">
              <Image src={copyright} alt="copyright-image"></Image>
              <p className="ml-2 text-saffron">Copyright Bing Bong Exports 2023</p>
            </CardBody>
          </Card>
        </div>
      </div>
    </main >
  )
}
