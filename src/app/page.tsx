'use client'

import Image from 'next/image'
import { Card, CardBody, Button, ButtonGroup, Divider } from '@nextui-org/react'
import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link } from "@nextui-org/react";
import picture from './images/bingbongimage2.png'
import starcraft from './images/starcraft-image.png'
import discord from './images/baseline-discord.svg'
import twitch from './images/twitch.svg'
import twitter from './images/twitter.svg'
import copyright from './images/baseline-copyright.svg'
import holden from './images/holdenpfplq.jpg'
import benja from './images/benja.jpg'
import acheron from './images/acheron.jpg'
import billy from './images/billy.jpg'
import spazy from './images/spazymazy.jpg'
import maru from './images/Maru.jpg'

export default function Home() {
  return (
    <main className="font-custom text-wheat">
      <Navbar position="sticky" className="top-0 bg-rblack border-solid border-saffron">
        <NavbarBrand className="w-full flex min-h-[80px]">
          <div className="font-bold text-3xl flex p-4">
            <p className="font-custom">BING BONG EXPORTS</p>
          </div>
          <div className="m-8 ml-auto flex space-x-4">
            <a href="https://discord.gg/zNvSAzDx2D" target="_blank" rel="noopener noreferrer">
              <Image className="self-end" src={discord} alt="discord-img"></Image>
            </a>
            <a href="https://twitter.com/BingBongExports" target="_blank" rel="noopener noreferrer">
              <Image className="self-end" src={twitter} alt="twitter-img"></Image>
            </a>
            <a href="https://www.twitch.tv/bingbongexports" target="_blank" rel="noopener noreferrer">
              <Image className="self-end" src={twitch} alt="twitch-img"></Image>
            </a>
          </div>
        </NavbarBrand>
      </Navbar>

      <div className="grid grid-cols-1 justify-items-center bg-gradient-to-b from-rgray via-wheat to-rgray ">
        <div className="rounded-lg bg-rblack mt-[90px] min-h-[15%] flex bg-rgray ">
          <Image width={300} height={300} src={picture} alt="test" className="rounded-lg" />
          <Card className="rounded-lg columns-3 min-h-[100px] min-w-[600px] text-wheat bg-gradient-to-b from-straw to-rblack">
            <CardBody>
              <div className="m-4 grid grid-cols-1 justify-items-center">
                <div className="font-black text-3xl text-black">THIS IS ALL ABOUT BINGUS SPORTUS</div>
                <div className="font-bold m-4">The team bing bong exports came about from very humble beginnings and now stands on top of the world.</div>
              </div>
            </CardBody>
          </Card>
        </div>

        <div className="grid grid-cols-3 items-center justify-between p-24">
          <Card className="rounded-lg bg-gradient-to-b from-straw to-rblack  m-8 h-[600px] w-[300px] xl:w-[400px] 2xl:w-[500px]">
            <CardBody>
              <div className="grid grid-cols-1 justify-items-center">
                <h1 className="m-2 font-black text-rblack text-4xl">HOLDEN</h1>
                <Image className="rounded-lg" width={150} height={150} src={holden} alt="holden-img"></Image>
                <p className="font-bold m-4">Holden is one of the absolute greatest of all time. Anyone who has access to any sort of records or match history of his will disagree. However, those with heart know that the aura that surrounds him is unstoppable and if he wanted to he could beat Serral, he just has never played at his full potential. Some say that we have never even seen 10% of his maximum skills on display.</p>
                <div className="grid grid-cols-2 items-center">
                  <a href="https://twitter.com/Holden_SC2" target="_blank" rel="noopener noreferrer">
                    <Image className="self-end m-2" src={twitter} alt="twitter-img"></Image>
                  </a>
                  <a href="https://www.twitch.tv/holdensc2" target="_blank" rel="noopener noreferrer">
                    <Image className="self-end m-2" src={twitch} alt="twitch-img"></Image>
                  </a>
                </div>
              </div>
            </CardBody>
          </Card>

          <Card className="rounded-lg bg-gradient-to-b from-straw to-rblack  m-8 h-[600px] w-[300px] xl:w-[400px] 2xl:w-[500px]">
            <CardBody>
            <div className="grid grid-cols-1 justify-items-center">
                <h1 className="m-2 font-black text-rblack text-4xl">ACHERON</h1>
                <Image className="rounded-lg" width={170} height={150} src={acheron} alt="acheron-img"></Image>
                <p className="mt-[40px] font-bold m-4">A renowned Starcraft 2 Protoss player is recognized for his unconventional and often surprising strategies, commonly referred to as 'cheesy' builds. This player's distinctive approach to the game has earned both admiration and critique from fans and fellow competitors alike.</p>
                <div className="grid grid-cols-2 items-center">
                  <a href="https://twitter.com/acheronii" target="_blank" rel="noopener noreferrer">
                    <Image className="self-end m-2" src={twitter} alt="twitter-img"></Image>
                  </a>
                  <a href="https://www.twitch.tv/" target="_blank" rel="noopener noreferrer">
                    <Image className="self-end m-2" src={twitch} alt="twitch-img"></Image>
                  </a>
                </div>
              </div>
            </CardBody>
          </Card>

          <Card className="rounded-lg bg-gradient-to-b from-straw to-rblack  m-8 h-[600px] w-[300px] xl:w-[400px] 2xl:w-[500px]">
            <CardBody>
            <div className="grid grid-cols-1 justify-items-center">
                <h1 className="m-2 font-black text-rblack text-4xl">BILLYUDDERS</h1>
                <Image className="rounded-lg" width={170} height={150} src={billy} alt="billy-img"></Image>
                <p className="font-bold m-4">A notable Starcraft 2 player has gained recognition for pioneering a unique strategy dubbed the "Billy Bomb". This innovative build has significantly influenced gameplay, drawing attention and commentary from the gaming community.</p>
                <div className="grid grid-cols-2 items-center">
                  <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                    <Image className="self-end m-2" src={twitter} alt="twitter-img"></Image>
                  </a>
                  <a href="https://www.twitch.tv/" target="_blank" rel="noopener noreferrer">
                    <Image className="self-end m-2" src={twitch} alt="twitch-img"></Image>
                  </a>
                </div>
              </div>
            </CardBody>
          </Card>

          <Card className="rounded-lg bg-gradient-to-b from-straw to-rblack  m-8 h-[600px] w-[300px] xl:w-[400px] 2xl:w-[500px]">
            <CardBody>
            <div className="grid grid-cols-1 justify-items-center">
                <h1 className="m-2 font-black text-rblack text-4xl">BENJADEATH</h1>
                <Image className="rounded-lg" width={170} height={150} src={benja} alt="benja-img"></Image>
                <p className="mt-8 font-bold m-4">A prominent Starcraft 2 Zerg player has earned a reputation for consistently outperforming Holden in tournaments. His mastery of the game and strategic prowess have led to numerous victories, making him a force to be reckoned with in the competitive landscape.</p>
                <div className="grid grid-cols-2 items-center">
                  <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                    <Image className="self-end m-2" src={twitter} alt="twitter-img"></Image>
                  </a>
                  <a href="https://www.twitch.tv/" target="_blank" rel="noopener noreferrer">
                    <Image className="self-end m-2" src={twitch} alt="twitch-img"></Image>
                  </a>
                </div>
              </div>
            </CardBody>
          </Card>

          <Card className="rounded-lg bg-gradient-to-b from-straw to-rblack  m-8 h-[600px] w-[300px] xl:w-[400px] 2xl:w-[500px]">
            <CardBody>
            <div className="grid grid-cols-1 justify-items-center">
                <h1 className="m-2 font-black text-rblack text-4xl">SPAZYMAZY</h1>
                <Image className="rounded-lg" width={170} height={150} src={spazy} alt="spazy-img"></Image>
                <p className="font-bold m-4">A distinguished Starcraft 2 Terran player is renowned in the gaming community for representing Denmark. His skills and strategies, combined with his national pride, have made him a notable figure in the competitive scene.</p>
                <div className="grid grid-cols-2 items-center">
                  <a href="https://twitter.com/Spazymazysc2" target="_blank" rel="noopener noreferrer">
                    <Image className="self-end m-2" src={twitter} alt="twitter-img"></Image>
                  </a>
                  <a href="https://www.twitch.tv/" target="_blank" rel="noopener noreferrer">
                    <Image className="self-end m-2" src={twitch} alt="twitch-img"></Image>
                  </a>
                </div>
              </div>
            </CardBody>
          </Card>

          <Card className="rounded-lg bg-gradient-to-b from-straw to-rblack  m-8 h-[600px] w-[300px] xl:w-[400px] 2xl:w-[500px]">
            <CardBody>
              <div className="grid grid-cols-1 justify-items-center">
                <h1 className="m-2 font-black text-rblack text-4xl">MARU</h1>
                <Image className="rounded-lg" width={170} height={150} src={maru} alt="holden-img"></Image>
                <p className="font-bold m-4">Maru isn't actually on the team this is just the first prototype of the website and I didn't have enough pictures of the players on the roster yet. He is cool though.</p>
                <div className="grid grid-cols-2 items-center">
                  <a href="https://liquipedia.net/starcraft2/Maru" target="_blank" rel="noopener noreferrer">
                    <Image className="self-end m-2" src={twitter} alt="twitter-img"></Image>
                  </a>
                  <a href="https://liquipedia.net/starcraft2/Maru" target="_blank" rel="noopener noreferrer">
                    <Image className="self-end m-2" src={twitch} alt="twitch-img"></Image>
                  </a>
                </div>
              </div>
            </CardBody>
          </Card>
        </div>

        <div className="rounded-lg bg-gradient-to-b from-straw to-rblack  mb-8 min-h-[500px] min-w-[500px] ">
          <Image src={starcraft} alt="test">

          </Image>
        </div>
        <div className="mt-[110px] bg-rblack w-full min-h-[100px] border-solid border-saffron">
          <Card>
            <CardBody className="ml-8 mt-8">
                <Image src={copyright} alt="copyright-image"></Image>
                <p className="ml-2  ">Copyright Bing Bong Exports 2023</p>
            </CardBody>
          </Card>
        </div>
      </div>
    </main>
  )
}
