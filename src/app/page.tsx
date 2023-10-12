'use client'

import Image from 'next/image'
import { Card, CardBody, Button, ButtonGroup, Divider } from '@nextui-org/react'
import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link } from "@nextui-org/react";
import picture from './images/bingbongimage2.png'
import starcraft from './images/starcraft-ii.png'
import discord from './images/baseline-discord.svg'
import twitch from './images/twitch.svg'
import twitter from './images/twitter.svg'

export default function Home() {
  return (
    <main className="font-custom">
      <Navbar position="sticky" className="top-0 bg-rblack border-solid border-2 border-saffron">
        <NavbarBrand className="w-full flex min-h-[80px]">
          <div className="flex">
            <p className="font-custom">BING BONG EXPORTS</p>
            <Image className="self-end" src={discord} alt="discord-img"></Image>
            <Image className="self-end" src={twitter} alt="twitter-img"></Image>
            <Image className="self-end" src={twitch} alt="twitch-img"></Image>
          </div>
        </NavbarBrand>
      </Navbar>

      <div className="grid grid-cols-1 justify-items-center border-solid border-saffron border-2 bg-wheat">
        <div className="bg-rblack mt-16 min-h-[150px] min-w-[1200px] grid grid-cols-2 border-solid border-saffron border-2">
          <Image width={300} height={300} src={picture} alt="test" />
          <Card className="min-h-[100px]">
            <CardBody>
              THIS IS ALL ABOUT BINGUS SPORTUS
            </CardBody>
          </Card>
        </div>

        <Divider></Divider>

        <div className="grid grid-cols-3 items-center justify-between p-24">
          <Card className="bg-rblack m-8 min-h-[300px] border-solid border-saffron border-2">
            <CardBody>
              <p>Hey this is the first thing ever typed on bing bong exports pro website</p>
            </CardBody>
          </Card>

          <Card className="bg-rblack m-8 min-h-[300px] border-solid border-saffron border-2">
            <CardBody>
              <p>Hey this is the first thing ever typed on bing bong exports pro website</p>
            </CardBody>
          </Card>

          <Card className="bg-rblack m-8 min-h-[300px] border-solid border-saffron border-2">
            <CardBody>
              <p>Hey this is the first thing ever typed on bing bong exports pro website</p>
            </CardBody>
          </Card>

          <Card className="bg-rblack m-8 min-h-[300px] border-solid border-saffron border-2">
            <CardBody>
              <p>Hey this is the first thing ever typed on bing bong exports pro website</p>
            </CardBody>
          </Card>

          <Card className="bg-rblack m-8 min-h-[300px] border-solid border-saffron border-2">
            <CardBody>
              <p>Hey this is the first thing ever typed on bing bong exports pro website</p>
            </CardBody>
          </Card>

          <Card className="bg-rblack m-8 min-h-[300px] border-solid border-saffron border-2">
            <CardBody>
              <p>Hey this is the first thing ever typed on bing bong exports pro website</p>
            </CardBody>
          </Card>
        </div>

        <Divider></Divider>

        <div className="bg-rblack mb-16 min-h-[300px] min-w-[300px] border-solid border-saffron border-2">
          <Image src={starcraft} alt="test">

          </Image>
        </div>
        <div className="bg-rblack w-full flex flex-row min-h-[150px] border-solid border-saffron border-2">
          <Card>
            <CardBody>
              copyright bing bong exports 2023
            </CardBody>
          </Card>
        </div>
      </div>
    </main>
  )
}
