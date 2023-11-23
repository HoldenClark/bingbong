'use client'

import Image from 'next/image'
import { Card, CardBody, Button, ButtonGroup, Divider } from '@nextui-org/react'
import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link } from "@nextui-org/react";
import picture from './images/bingbongimage2.png'
import starcraft from './images/starcraft-image.png'
import discord from './images/baseline-discord.svg'
import twitch from './images/twitch.svg'
import twitch_gold from './images/twitch_gold.svg'
import twitter from './images/twitter.svg'
import twitter_gold from './images/twittergold.svg'
import copyright from './images/baseline-copyright.svg'
import holden from './images/holdenpfplq.jpg'
import benja from './images/benja.jpg'
import acheron from './images/acheron.jpg'
import billy from './images/billy.jpg'
import spazy from './images/spazymazy.jpg'
import maru from './images/Maru.jpg'
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
        <div className="grid grid-cols-1 justify-items-center m-8">
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
          <Card className="grid grid-place-items-center rounded-lg bg-gradient-to-b from-black from-70% to-saffron m-4 lg:m-8 h-[400px] w-[350px] xl:w-[800px] 2xl:w-[500px]">
            <CardBody className="grid grid-place-items-center text-saffron">

              <div className="grid grid-cols-3 justify-items-center">
                <Image className="mt-4" src={protoss} alt="protoss-img" width={60} height={40}></Image>
                <h1 className="font-black text-saffron text-2xl mt-8">HOLDEN</h1>
                <Image className="mt-[28px]" width={45} height={40} src={usa} alt='usa-img'></Image>
              </div>

              <div className="grid grid-cols-2 justify-items-center">
                <Image className="rounded-lg ml-4" width={200} height={300} src={holden} alt="holden-img"></Image>

                <div className="ml-8">
                  <div className="grid grid-cols-1 justify-items-center mr-[26px]">
                    <p className="font-black text-xl">OVR</p>
                    <p className="text-bold text-3xl">78</p>
                  </div>

                  <div className="grid grid-cols-2 justify-items-center">
                    <div>
                      <p>Offence</p>
                      <p>Defence</p>
                      <p>Versatiltiy</p>
                      <p>Multitasking</p>
                      <p>Mechanics</p>
                      <p>Speed</p>
                      <p>Creativity</p>
                    </div>
                    <div>
                      <p className="text-right text-md">81</p>
                      <p className="text-right text-md">83</p>
                      <p className="text-right text-md">71</p>
                      <p className="text-right text-md">79</p>
                      <p className="text-right text-md">84</p>
                      <p className="text-right text-md">76</p>
                      <p className="text-right text-md">74</p>
                    </div>
                    <div className="grid grid-cols-2 justify-items-center">
                      <a href="https://twitter.com/Holden_SC2" target="_blank" rel="noopener noreferrer">
                        <Image className="ml-[35px] mt-[7px] self-end" src={twitter} alt="twitter-img"></Image>
                      </a>
                      <a href="https://www.twitch.tv/holdensc2" target="_blank" rel="noopener noreferrer">
                        <Image className="ml-[30px] mt-[7.5px] self-end" src={twitch} alt="twitch-img"></Image>
                      </a>
                    </div>
                  </div>

                </div>
              </div>
            </CardBody>
          </Card>

          <Card className="grid grid-place-items-center rounded-lg bg-gradient-to-b from-black from-70% to-saffron m-4 lg:m-8 h-[400px] w-[350px] xl:w-[800px] 2xl:w-[500px]">
            <CardBody className="grid grid-place-items-center text-black">

              <div className="grid grid-cols-3 justify-items-center">
                <Image className="mt-4" src={protoss} alt="protoss-img" width={60} height={40}></Image>
                <h1 className="font-black text-saffron text-2xl mt-8">ACHERON</h1>
                <Image className="mt-[28px]" width={45} height={40} src={usa} alt='usa-img'></Image>
              </div>

              <div className="grid grid-cols-2 justify-items-center">
                <Image className="rounded-lg ml-4" width={200} height={300} src={acheron} alt="acheron-img"></Image>

                <div className="ml-8 text-saffron">
                  <div className="grid grid-cols-1 justify-items-center mr-[26px]">
                    <p className="font-black text-xl">OVR</p>
                    <p className="text-bold text-3xl">72</p>
                  </div>

                  <div className="grid grid-cols-2 justify-items-center">
                    <div>
                      <p>Offence</p>
                      <p>Defence</p>
                      <p>Versatiltiy</p>
                      <p>Multitasking</p>
                      <p>Mechanics</p>
                      <p>Speed</p>
                      <p>Creativity</p>
                    </div>
                    <div>
                      <p className="text-right text-md">78</p>
                      <p className="text-right text-md">68</p>
                      <p className="text-right text-md">70</p>
                      <p className="text-right text-md">69</p>
                      <p className="text-right text-md">77</p>
                      <p className="text-right text-md">70</p>
                      <p className="text-right text-md">70</p>
                    </div>
                    <div className="grid grid-cols-2 justify-items-center">
                      <a href="https://twitter.com/acheronii" target="_blank" rel="noopener noreferrer">
                        <Image className="ml-[35px] mt-[7px] self-end" src={twitter} alt="twitter-img"></Image>
                      </a>
                      <a href="https://www.twitch.tv/acheronii" target="_blank" rel="noopener noreferrer">
                        <Image className="ml-[30px] mt-[7.5px] self-end" src={twitch} alt="twitch-img"></Image>
                      </a>
                    </div>
                  </div>

                </div>
              </div>
            </CardBody>
          </Card>

          <Card className="grid grid-place-items-center rounded-lg bg-gradient-to-b from-black from-70% to-saffron m-4 lg:m-8 h-[400px] w-[350px] xl:w-[800px] 2xl:w-[500px]">
            <CardBody className="grid grid-place-items-center text-saffron">

              <div className="grid grid-cols-3 justify-items-center">
                <Image className="mt-4" src={terran} alt="protoss-img" width={60} height={40}></Image>
                <h1 className="font-black text-saffron text-2xl mt-[35px]">BILLYUDDERS</h1>
                <Image className="mt-[28px]" width={45} height={40} src={usa} alt='usa-img'></Image>
              </div>

              <div className="grid grid-cols-2 justify-items-center">
                <Image className="rounded-lg ml-4" width={200} height={300} src={billy} alt="billy-img"></Image>

                <div className="ml-8">
                  <div className="grid grid-cols-1 justify-items-center mr-[26px]">
                    <p className="font-black text-xl">OVR</p>
                    <p className="text-bold text-3xl">30</p>
                  </div>

                  <div className="grid grid-cols-2 justify-items-center">
                    <div>
                      <p>Offence</p>
                      <p>Defence</p>
                      <p>Versatiltiy</p>
                      <p>Multitasking</p>
                      <p>Mechanics</p>
                      <p>Speed</p>
                      <p>Creativity</p>
                    </div>
                    <div>
                      <p className="text-right text-md">23</p>
                      <p className="text-right text-md">36</p>
                      <p className="text-right text-md">33</p>
                      <p className="text-right text-md">23</p>
                      <p className="text-right text-md">14</p>
                      <p className="text-right text-md">14</p>
                      <p className="text-right text-md">70</p>
                    </div>
                    <div className="grid grid-cols-2 justify-items-center">
                      <a href="https://twitter.com/BingBongExports" target="_blank" rel="noopener noreferrer">
                        <Image className="ml-[35px] mt-[7px] self-end" src={twitter} alt="twitter-img"></Image>
                      </a>
                      <a href="https://www.twitch.tv/bingbongexports" target="_blank" rel="noopener noreferrer">
                        <Image className="ml-[30px] mt-[7.5px] self-end" src={twitch} alt="twitch-img"></Image>
                      </a>
                    </div>
                  </div>

                </div>
              </div>
            </CardBody>
          </Card>

          <Card className="grid grid-place-items-center rounded-lg bg-gradient-to-b from-black from-70% to-saffron m-4 lg:m-8 h-[400px] w-[350px] xl:w-[800px] 2xl:w-[500px]">
            <CardBody className="grid grid-place-items-center text-saffron">

              <div className="grid grid-cols-3 justify-items-center">
                <Image className="mt-4" src={zerg} alt="protoss-img" width={60} height={40}></Image>
                <h1 className="font-black text-saffron text-2xl mt-[35px]">BENJADEATH</h1>
                <Image className="mt-[28px]" width={45} height={40} src={usa} alt='usa-img'></Image>
              </div>

              <div className="grid grid-cols-2 justify-items-center">
                <Image className="rounded-lg ml-4" width={200} height={300} src={benja} alt="benja-img"></Image>

                <div className="ml-8">
                  <div className="grid grid-cols-1 justify-items-center mr-[26px]">
                    <p className="font-black text-xl">OVR</p>
                    <p className="text-bold text-3xl">63</p>
                  </div>

                  <div className="grid grid-cols-2 justify-items-center">
                    <div>
                      <p>Offence</p>
                      <p>Defence</p>
                      <p>Versatiltiy</p>
                      <p>Multitasking</p>
                      <p>Mechanics</p>
                      <p>Speed</p>
                      <p>Creativity</p>
                    </div>
                    <div>
                      <p className="text-right text-md">83</p>
                      <p className="text-right text-md">57</p>
                      <p className="text-right text-md">60</p>
                      <p className="text-right text-md">53</p>
                      <p className="text-right text-md">61</p>
                      <p className="text-right text-md">60</p>
                      <p className="text-right text-md">64</p>
                    </div>
                    <div className="grid grid-cols-2 justify-items-center">
                      <a href="https://twitter.com/BingBongExports" target="_blank" rel="noopener noreferrer">
                        <Image className="ml-[35px] mt-[7px] self-end" src={twitter} alt="twitter-img"></Image>
                      </a>
                      <a href="https://www.twitch.tv/benjamarydeathdeath" target="_blank" rel="noopener noreferrer">
                        <Image className="ml-[30px] mt-[7.5px] self-end" src={twitch} alt="twitch-img"></Image>
                      </a>
                    </div>
                  </div>

                </div>
              </div>
            </CardBody>
          </Card>

          <Card className="grid grid-place-items-center rounded-lg bg-gradient-to-b from-black from-70% to-saffron m-4 lg:m-8 h-[400px] w-[350px] xl:w-[800px] 2xl:w-[500px]">
            <CardBody className="grid grid-place-items-center text-saffron">

              <div className="grid grid-cols-3 justify-items-center">
                <Image className="mt-4" src={zerg} alt="protoss-img" width={60} height={40}></Image>
                <h1 className="font-black text-saffron text-2xl mt-[35px]">SPAZYMAZY</h1>
                <Image className="mt-[28px]" width={45} height={40} src={denmark} alt='denmark-img'></Image>
              </div>

              <div className="grid grid-cols-2 justify-items-center">
                <Image className="rounded-lg ml-4" width={200} height={300} src={spazy} alt="spazy-img"></Image>

                <div className="ml-8">
                  <div className="grid grid-cols-1 justify-items-center mr-[26px]">
                    <p className="font-black text-xl">OVR</p>
                    <p className="text-bold text-3xl">86</p>
                  </div>

                  <div className="grid grid-cols-2 justify-items-center">
                    <div>
                      <p>Offence</p>
                      <p>Defence</p>
                      <p>Versatiltiy</p>
                      <p>Multitasking</p>
                      <p>Mechanics</p>
                      <p>Speed</p>
                      <p>Creativity</p>
                    </div>
                    <div>
                      <p className="text-right text-md">93</p>
                      <p className="text-right text-md">82</p>
                      <p className="text-right text-md">78</p>
                      <p className="text-right text-md">87</p>
                      <p className="text-right text-md">92</p>
                      <p className="text-right text-md">90</p>
                      <p className="text-right text-md">83</p>
                    </div>
                    <div className="grid grid-cols-2 justify-items-center">
                      <a href="https://twitter.com/Spazymazysc2" target="_blank" rel="noopener noreferrer">
                        <Image className="ml-[35px] mt-[7px] self-end" src={twitter} alt="twitter-img"></Image>
                      </a>
                      <a href="https://www.twitch.tv/spazymazysc2" target="_blank" rel="noopener noreferrer">
                        <Image className="ml-[30px] mt-[7.5px] self-end" src={twitch} alt="twitch-img"></Image>
                      </a>
                    </div>
                  </div>

                </div>
              </div>
            </CardBody>
          </Card>

          <Card className="grid grid-place-items-center rounded-lg bg-gradient-to-b from-black from-70% to-saffron m-4 lg:m-8 h-[400px] w-[350px] xl:w-[800px] 2xl:w-[500px]">
            <CardBody className="grid grid-place-items-center text-saffron">

              <div className="grid grid-cols-3 justify-items-center">
                <Image className="mt-4" src={zerg} alt="protoss-img" width={60} height={40}></Image>
                <h1 className="font-black text-saffron text-2xl mt-[35px]">ANTICORE</h1>
                <Image className="mt-[28px]" width={45} height={40} src={denmark} alt='denmark-img'></Image>
              </div>

              <div className="grid grid-cols-2 justify-items-center">
                <Image className="rounded-lg ml-4" width={200} height={300} src={placeholder} alt="spazy-img"></Image>

                <div className="ml-8">
                  <div className="grid grid-cols-1 justify-items-center mr-[26px]">
                    <p className="font-black text-xl">OVR</p>
                    <p className="text-bold text-3xl">64</p>
                  </div>

                  <div className="grid grid-cols-2 justify-items-center">
                    <div>
                      <p>Offence</p>
                      <p>Defence</p>
                      <p>Versatiltiy</p>
                      <p>Multitasking</p>
                      <p>Mechanics</p>
                      <p>Speed</p>
                      <p>Creativity</p>
                    </div>
                    <div>
                      <p className="text-right text-md">76</p>
                      <p className="text-right text-md">60</p>
                      <p className="text-right text-md">57</p>
                      <p className="text-right text-md">56</p>
                      <p className="text-right text-md">63</p>
                      <p className="text-right text-md">57</p>
                      <p className="text-right text-md">79</p>
                    </div>
                    <div className="grid grid-cols-2 justify-items-center">
                      <a href="https://twitter.com/BingBongExports" target="_blank" rel="noopener noreferrer">
                        <Image className="ml-[35px] mt-[7px] self-end" src={twitter} alt="twitter-img"></Image>
                      </a>
                      <a href="https://www.twitch.tv/bingbongexports" target="_blank" rel="noopener noreferrer">
                        <Image className="ml-[30px] mt-[7.5px] self-end" src={twitch} alt="twitch-img"></Image>
                      </a>
                    </div>
                  </div>

                </div>
              </div>
            </CardBody>
          </Card>

          <Card className="grid grid-place-items-center rounded-lg bg-gradient-to-b from-black from-70% to-saffron m-4 lg:m-8 h-[400px] w-[350px] xl:w-[800px] 2xl:w-[500px]">
            <CardBody className="grid grid-place-items-center text-saffron">

              <div className="grid grid-cols-3 justify-items-center">
                <Image className="mt-4" src={protoss} alt="protoss-img" width={60} height={40}></Image>
                <h1 className="font-black text-saffron text-2xl mt-[35px]">AZURA</h1>
                <Image className="mt-[28px]" width={45} height={40} src={italy} alt='usa-img'></Image>
              </div>

              <div className="grid grid-cols-2 justify-items-center">
                <Image className="rounded-lg ml-4" width={200} height={300} src={placeholder} alt="benja-img"></Image>

                <div className="ml-8">
                  <div className="grid grid-cols-1 justify-items-center mr-[26px]">
                    <p className="font-black text-xl">OVR</p>
                    <p className="text-bold text-3xl">72</p>
                  </div>

                  <div className="grid grid-cols-2 justify-items-center">
                    <div>
                      <p>Offence</p>
                      <p>Defence</p>
                      <p>Versatiltiy</p>
                      <p>Multitasking</p>
                      <p>Mechanics</p>
                      <p>Speed</p>
                      <p>Creativity</p>
                    </div>
                    <div>
                      <p className="text-right text-md">77</p>
                      <p className="text-right text-md">73</p>
                      <p className="text-right text-md">72</p>
                      <p className="text-right text-md">67</p>
                      <p className="text-right text-md">72</p>
                      <p className="text-right text-md">68</p>
                      <p className="text-right text-md">78</p>
                    </div>
                    <div className="grid grid-cols-2 justify-items-center">
                      <a href="https://twitter.com/BingBongExports" target="_blank" rel="noopener noreferrer">
                        <Image className="ml-[35px] mt-[7px] self-end" src={twitter} alt="twitter-img"></Image>
                      </a>
                      <a href="https://www.twitch.tv/bingbongexports" target="_blank" rel="noopener noreferrer">
                        <Image className="ml-[30px] mt-[7.5px] self-end" src={twitch} alt="twitch-img"></Image>
                      </a>
                    </div>
                  </div>

                </div>
              </div>
            </CardBody>
          </Card>

          <Card className="grid grid-place-items-center rounded-lg bg-gradient-to-b from-black from-70% to-saffron m-4 lg:m-8 h-[400px] w-[350px] xl:w-[800px] 2xl:w-[500px]">
            <CardBody className="grid grid-place-items-center text-saffron">

              <div className="grid grid-cols-3 justify-items-center">
                <Image className="mt-4" src={terran} alt="protoss-img" width={60} height={40}></Image>
                <h1 className="font-black text-saffron text-2xl mt-[35px]">MAG</h1>
                <Image className="mt-[28px]" width={45} height={40} src={denmark} alt='usa-img'></Image>
              </div>

              <div className="grid grid-cols-2 justify-items-center">
                <Image className="rounded-lg ml-4" width={200} height={300} src={placeholder} alt="benja-img"></Image>

                <div className="ml-8">
                  <div className="grid grid-cols-1 justify-items-center mr-[26px]">
                    <p className="font-black text-xl">OVR</p>
                    <p className="text-bold text-3xl">58</p>
                  </div>

                  <div className="grid grid-cols-2 justify-items-center">
                    <div>
                      <p>Offence</p>
                      <p>Defence</p>
                      <p>Versatiltiy</p>
                      <p>Multitasking</p>
                      <p>Mechanics</p>
                      <p>Speed</p>
                      <p>Creativity</p>
                    </div>
                    <div>
                      <p className="text-right text-md">72</p>
                      <p className="text-right text-md">52</p>
                      <p className="text-right text-md">48</p>
                      <p className="text-right text-md">60</p>
                      <p className="text-right text-md">60</p>
                      <p className="text-right text-md">64</p>
                      <p className="text-right text-md">48</p>
                    </div>
                    <div className="grid grid-cols-2 justify-items-center">
                      <a href="https://twitter.com/Mag_sc2" target="_blank" rel="noopener noreferrer">
                        <Image className="ml-[35px] mt-[7px] self-end" src={twitter} alt="twitter-img"></Image>
                      </a>
                      <a href="https://www.twitch.tv/bingbongexports" target="_blank" rel="noopener noreferrer">
                        <Image className="ml-[30px] mt-[7.5px] self-end" src={twitch} alt="twitch-img"></Image>
                      </a>
                    </div>
                  </div>

                </div>
              </div>
            </CardBody>
          </Card>

          <Card className="grid grid-place-items-center rounded-lg bg-gradient-to-b from-black from-70% to-saffron m-4 lg:m-8 h-[400px] w-[350px] xl:w-[800px] 2xl:w-[500px]">
            <CardBody className="grid grid-place-items-center text-saffron">

              <div className="grid grid-cols-3 justify-items-center">
                <Image className="mt-4" src={terran} alt="protoss-img" width={60} height={40}></Image>
                <h1 className="font-black text-saffron text-2xl mt-[35px]">SLIPJIP</h1>
                <Image className="mt-[28px]" width={45} height={40} src={usa} alt='usa-img'></Image>
              </div>

              <div className="grid grid-cols-2 justify-items-center">
                <Image className="rounded-lg ml-4" width={200} height={300} src={placeholder} alt="benja-img"></Image>

                <div className="ml-8">
                  <div className="grid grid-cols-1 justify-items-center mr-[26px]">
                    <p className="font-black text-xl">OVR</p>
                    <p className="text-bold text-3xl">71</p>
                  </div>

                  <div className="grid grid-cols-2 justify-items-center">
                    <div>
                      <p>Offence</p>
                      <p>Defence</p>
                      <p>Versatiltiy</p>
                      <p>Multitasking</p>
                      <p>Mechanics</p>
                      <p>Speed</p>
                      <p>Creativity</p>
                    </div>
                    <div>
                      <p className="text-right text-md">80</p>
                      <p className="text-right text-md">66</p>
                      <p className="text-right text-md">73</p>
                      <p className="text-right text-md">73</p>
                      <p className="text-right text-md">66</p>
                      <p className="text-right text-md">69</p>
                      <p className="text-right text-md">74</p>
                    </div>
                    <div className="grid grid-cols-2 justify-items-center">
                      <a href="https://twitter.com/Slip_sc2" target="_blank" rel="noopener noreferrer">
                        <Image className="ml-[35px] mt-[7px] self-end" src={twitter} alt="twitter-img"></Image>
                      </a>
                      <a href="https://www.twitch.tv/bingbongexports" target="_blank" rel="noopener noreferrer">
                        <Image className="ml-[30px] mt-[7.5px] self-end" src={twitch} alt="twitch-img"></Image>
                      </a>
                    </div>
                  </div>

                </div>
              </div>
            </CardBody>
          </Card>

          <Card className="grid grid-place-items-center rounded-lg bg-gradient-to-b from-black from-70% to-saffron m-4 lg:m-8 h-[400px] w-[350px] xl:w-[800px] 2xl:w-[500px]">
            <CardBody className="grid grid-place-items-center text-saffron">

              <div className="grid grid-cols-3 justify-items-center">
                <Image className="mt-4" src={zerg} alt="protoss-img" width={60} height={40}></Image>
                <h1 className="font-black text-saffron text-2xl mt-[35px]">SHINY</h1>
                <Image className="mt-[28px]" width={45} height={40} src={canada} alt='usa-img'></Image>
              </div>

              <div className="grid grid-cols-2 justify-items-center">
                <Image className="rounded-lg ml-4" width={200} height={300} src={placeholder} alt="benja-img"></Image>

                <div className="ml-8">
                  <div className="grid grid-cols-1 justify-items-center mr-[26px]">
                    <p className="font-black text-xl">OVR</p>
                    <p className="text-bold text-3xl">57</p>
                  </div>

                  <div className="grid grid-cols-2 justify-items-center">
                    <div>
                      <p>Offence</p>
                      <p>Defence</p>
                      <p>Versatiltiy</p>
                      <p>Multitasking</p>
                      <p>Mechanics</p>
                      <p>Speed</p>
                      <p>Creativity</p>
                    </div>
                    <div>
                      <p className="text-right text-md">54</p>
                      <p className="text-right text-md">57</p>
                      <p className="text-right text-md">52</p>
                      <p className="text-right text-md">57</p>
                      <p className="text-right text-md">62</p>
                      <p className="text-right text-md">66</p>
                      <p className="text-right text-md">51</p>
                    </div>
                    <div className="grid grid-cols-2 justify-items-center">
                      <a href="https://twitter.com/BingBongExports" target="_blank" rel="noopener noreferrer">
                        <Image className="ml-[35px] mt-[7px] self-end" src={twitter} alt="twitter-img"></Image>
                      </a>
                      <a href="https://www.twitch.tv/bingbongexports" target="_blank" rel="noopener noreferrer">
                        <Image className="ml-[30px] mt-[7.5px] self-end" src={twitch} alt="twitch-img"></Image>
                      </a>
                    </div>
                  </div>

                </div>
              </div>
            </CardBody>
          </Card>

          <Card className="grid grid-place-items-center rounded-lg bg-gradient-to-b from-black from-70% to-saffron m-4 lg:m-8 h-[400px] w-[350px] xl:w-[800px] 2xl:w-[500px]">
            <CardBody className="grid grid-place-items-center text-saffron">

              <div className="grid grid-cols-3 justify-items-center">
                <Image className="mt-4" src={terran} alt="protoss-img" width={60} height={40}></Image>
                <h1 className="font-black text-saffron text-2xl mt-[35px]">OMNISKEPTIC</h1>
                <Image className="mt-[28px]" width={45} height={40} src={canada} alt='usa-img'></Image>
              </div>

              <div className="grid grid-cols-2 justify-items-center">
                <Image className="rounded-lg ml-4" width={200} height={300} src={placeholder} alt="benja-img"></Image>

                <div className="ml-8">
                  <div className="grid grid-cols-1 justify-items-center mr-[26px]">
                    <p className="font-black text-xl">OVR</p>
                    <p className="text-bold text-3xl">59</p>
                  </div>

                  <div className="grid grid-cols-2 justify-items-center">
                    <div>
                      <p>Offence</p>
                      <p>Defence</p>
                      <p>Versatiltiy</p>
                      <p>Multitasking</p>
                      <p>Mechanics</p>
                      <p>Speed</p>
                      <p>Creativity</p>
                    </div>
                    <div>
                      <p className="text-right text-md">60</p>
                      <p className="text-right text-md">64</p>
                      <p className="text-right text-md">51</p>
                      <p className="text-right text-md">64</p>
                      <p className="text-right text-md">67</p>
                      <p className="text-right text-md">60</p>
                      <p className="text-right text-md">47</p>
                    </div>
                    <div className="grid grid-cols-2 justify-items-center">
                      <a href="https://twitter.com/BingBongExports" target="_blank" rel="noopener noreferrer">
                        <Image className="ml-[35px] mt-[7px] self-end" src={twitter} alt="twitter-img"></Image>
                      </a>
                      <a href="https://www.twitch.tv/bingbongexports" target="_blank" rel="noopener noreferrer">
                        <Image className="ml-[30px] mt-[7.5px] self-end" src={twitch} alt="twitch-img"></Image>
                      </a>
                    </div>
                  </div>

                </div>
              </div>
            </CardBody>
          </Card>


          <Card className="grid grid-place-items-center rounded-lg bg-gradient-to-b from-black from-70% to-saffron m-4 lg:m-8 h-[400px] w-[350px] xl:w-[800px] 2xl:w-[500px]">
            <CardBody className="grid grid-place-items-center text-saffron">

              <div className="grid grid-cols-3 justify-items-center">
                <Image className="mt-4" src={terran} alt="protoss-img" width={60} height={40}></Image>
                <h1 className="font-black text-saffron text-2xl mt-[35px]">UNIVERSE</h1>
                <Image className="mt-[28px]" width={45} height={40} src={southkorea} alt='usa-img'></Image>
              </div>

              <div className="grid grid-cols-2 justify-items-center">
                <Image className="rounded-lg ml-4" width={200} height={300} src={placeholder} alt="benja-img"></Image>

                <div className="ml-8">
                  <div className="grid grid-cols-1 justify-items-center mr-[26px]">
                    <p className="font-black text-xl">OVR</p>
                    <p className="text-bold text-3xl">68</p>
                  </div>

                  <div className="grid grid-cols-2 justify-items-center">
                    <div>
                      <p>Offence</p>
                      <p>Defence</p>
                      <p>Versatiltiy</p>
                      <p>Multitasking</p>
                      <p>Mechanics</p>
                      <p>Speed</p>
                      <p>Creativity</p>
                    </div>
                    <div>
                      <p className="text-right text-md">80</p>
                      <p className="text-right text-md">64</p>
                      <p className="text-right text-md">60</p>
                      <p className="text-right text-md">71</p>
                      <p className="text-right text-md">76</p>
                      <p className="text-right text-md">71</p>
                      <p className="text-right text-md">55</p>
                    </div>
                    <div className="grid grid-cols-2 justify-items-center">
                      <a href="https://twitter.com/BingBongExports" target="_blank" rel="noopener noreferrer">
                        <Image className="ml-[35px] mt-[7px] self-end" src={twitter} alt="twitter-img"></Image>
                      </a>
                      <a href="https://www.twitch.tv/bingbongexports" target="_blank" rel="noopener noreferrer">
                        <Image className="ml-[30px] mt-[7.5px] self-end" src={twitch} alt="twitch-img"></Image>
                      </a>
                    </div>
                  </div>

                </div>
              </div>
            </CardBody>
          </Card>

        </div>

        <div className="rounded-lg bg-black mt-[50px] min-h-[300px] min-w-[300px] lg:min-h-[500px] lg:min-w-[500px] ">
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
