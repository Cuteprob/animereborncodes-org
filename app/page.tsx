"use client";
import Image from "next/image";
import YouTubeVideo from "@/components/YouTubeVideo";
import SubscribeForm from "@/components/SubscribeForm";
import { useState, useEffect } from "react";
import { codes } from "@/config/codes";

export default function Home() {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    // Update date every minute
    const timer = setInterval(() => {
      setCurrentDate(new Date());
    }, 60000); // 60000 milliseconds = 1 minute

    // Cleanup interval on component unmount
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="relative min-h-screen text-white">
      {/* Fixed Background Image */}
      <div className="fixed inset-0">
        <Image
          src="/roblox-anime-reborn-header-image.webp"
          alt="Anime Reborn Game Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Content Container */}
      <div className="relative">
        {/* Hero Section */}
        <section className="relative min-h-screen">
          <div className="absolute inset-0 bg-black bg-opacity-70" />
          <div className="relative z-10">
            <div className="container mx-auto px-4 py-32">
              <div className="text-center">
                <h1 className="mb-4 font-lilita-one text-6xl font-bold text-yellow-400">
                  Anime Reborn Codes
                </h1>
                <p className="mb-8 text-2xl text-gray-100">
                  Get the Latest Working Codes for Free Gems, Trait Crystals & Keys!
                </p>
                <div className="mt-8 flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                  <a
                    href="#latest-codes"
                    className="inline-flex items-center rounded-lg bg-yellow-400 px-8 py-3 text-lg font-semibold text-black transition duration-300 hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-gray-900"
                  >
                    View Latest Codes
                  </a>
                  <p className="text-sm italic text-yellow-400">
                    Last checked: {currentDate.toLocaleDateString('en-US', { 
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric'
                    })}
                  </p>
                </div>

                {/* YouTube Video */}
                <YouTubeVideo />
              </div>
            </div>
          </div>
        </section>

        {/* Latest Codes Section with Enhanced Content */}
        <section id="latest-codes" className="relative">
          <div className="absolute inset-0 bg-black bg-opacity-70" />
          <div className="relative z-10">
            <div className="container mx-auto px-4 py-16">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                  <h2 className="font-lilita-one text-4xl font-bold text-yellow-400 sm:text-5xl">
                    Latest Anime Reborn Codes
                  </h2>
                </div>
              </div>

              <div className="mt-8 flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                <p className="text-sm italic text-yellow-400">
                  Last checked: {currentDate.toLocaleDateString('en-US', { 
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric'
                  })}
                </p>
              </div>

              <p className="mb-8 text-center text-lg text-gray-100">
                Our team constantly monitors and updates the Anime Reborn codes list to ensure you never miss out on free rewards. These Anime Reborn codes can give you a significant advantage in the game, providing valuable resources like gems, trait crystals, and special keys.
              </p>
              <div className="overflow-x-auto rounded-lg">
                <table className="w-full table-auto">
                  <thead className="bg-gray-800">
                    <tr>
                      <th className="px-4 py-3 text-left font-lilita-one text-lg text-yellow-400">Code</th>
                      <th className="px-4 py-3 text-left font-lilita-one text-lg text-yellow-400">Rewards</th>
                      <th className="px-4 py-3 text-left font-lilita-one text-lg text-yellow-400">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700">
                    {codes.filter(code => code.status !== 'Expired').map((code, index) => (
                      <tr key={code.code} className={index % 2 === 0 ? "bg-gray-900 bg-opacity-50" : "bg-gray-800 bg-opacity-50"}>
                        <td className="px-4 py-3 font-mono text-gray-100">{code.code}</td>
                        <td className="px-4 py-3 text-gray-100">{code.rewards}</td>
                        <td className="px-4 py-3">
                          <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-sm font-medium text-white ${
                            code.status === 'NEW' ? 'bg-purple-500' : 
                            code.status === 'Working' ? 'bg-green-500' : 
                            'bg-red-500'
                          }`}>
                            {code.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Expired Codes Section */}
              <div className="mt-12">
                <h3 className="mb-6 text-center font-lilita-one text-3xl font-bold text-yellow-400">
                  Expired Anime Reborn Codes
                </h3>
                <div className="overflow-x-auto rounded-lg">
                  <table className="w-full table-auto">
                    <thead className="bg-gray-800">
                      <tr>
                        <th className="px-4 py-3 text-left font-semibold text-gray-100">Code</th>
                        <th className="px-4 py-3 text-left font-semibold text-gray-100">Rewards</th>
                        <th className="px-4 py-3 text-left font-semibold text-gray-100">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-700">
                      {codes.filter(code => code.status === 'Expired').map((code, index) => (
                        <tr key={code.code} className={index % 2 === 0 ? "bg-gray-900 bg-opacity-50" : "bg-gray-800 bg-opacity-50"}>
                          <td className="px-4 py-3 font-mono text-gray-400 line-through">{code.code}</td>
                          <td className="px-4 py-3 text-gray-400">{code.rewards}</td>
                          <td className="px-4 py-3 text-red-500">{code.status}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="mt-4 text-center text-sm text-gray-400">
                  These codes have expired and can no longer be redeemed. Check back regularly for new codes!
                </p>
              </div>

              <div className="mt-12">
                <p className="mb-8 text-center text-lg text-gray-100">
                  Our team constantly monitors and updates the Anime Reborn codes list to ensure you never miss out on free rewards. These Anime Reborn codes can give you a significant advantage in the game, providing valuable resources like gems, trait crystals, and special keys.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Game Introduction */}
        <section className="relative">
          <div className="absolute inset-0 bg-black bg-opacity-70" />
          <div className="relative z-10">
            <div className="container mx-auto px-4 py-16">
              <h2 className="mb-12 text-center font-lilita-one text-4xl font-bold text-yellow-400">
                What is Anime Reborn?
              </h2>
              <div className="mx-auto max-w-5xl">
                <div className="grid gap-12 md:grid-cols-2">
                  {/* Left Column - Game Overview */}
                  <div className="space-y-6">
                    <div>
                      <h3 className="mb-4 font-lilita-one text-2xl font-bold text-yellow-400">
                        Game Overview
                      </h3>
                      <div className="space-y-4">
                        <p className="text-lg leading-relaxed text-gray-100">
                          Anime Reborn is a strategic Roblox game where players summon anime-inspired units to defend their base. Each unit possesses unique abilities that can be upgraded during battles, enabling devastating attacks. The game offers an engaging experience for anime fans with its diverse gameplay modes.
                        </p>
                      </div>
                    </div>

                    <div>
                      <h3 className="mb-4 font-lilita-one text-2xl font-bold text-yellow-400">
                        Game Modes
                      </h3>
                      <div className="space-y-4">
                        <p className="text-lg leading-relaxed text-gray-100">
                          <span className="font-bold text-yellow-400">Story Mode:</span> Progress through different maps (West City, Leaf Village, Land of the Sky, Fujishima) by completing acts.
                        </p>
                        <p className="text-lg leading-relaxed text-gray-100">
                          <span className="font-bold text-yellow-400">Infinite Mode:</span> An endless wave mode that becomes progressively harder, rewarding players based on survival time.
                        </p>
                        <p className="text-lg leading-relaxed text-gray-100">
                          <span className="font-bold text-yellow-400">Legend Stages:</span> Similar to Story Mode but with tougher enemies and better rewards.
                        </p>
                        <p className="text-lg leading-relaxed text-gray-100">
                          <span className="font-bold text-yellow-400">Challenges:</span> A more difficult version of regular gameplay offering unique rewards.
                        </p>
                      </div>
                    </div>

                    
                  </div>

                  {/* Right Column - Benefits */}
                  <div className="space-y-6">
                    <h3 className="mb-4 font-lilita-one text-2xl font-bold text-yellow-400">
                      The Anime Reborn codes System
                    </h3>
                    <div className="mb-2">
                      <p className="text-lg leading-relaxed text-gray-100">
                        The Anime Reborn codes system is a crucial part of the game's economy, offering players free resources that can significantly boost their progress. These codes are regularly released by the game developers to celebrate milestones, special events, and updates.
                      </p>
                    </div>
                    <p className="text-sm italic text-yellow-400"></p>

                    <h3 className="mb-4 font-lilita-one text-2xl font-bold text-yellow-400">
                      Why Anime Reborn Codes Matter
                    </h3>
                    <p className="mb-6 text-lg leading-relaxed text-gray-100">
                      Anime Reborn codes are essential tools for both new and experienced players. These codes provide various in-game resources that can help accelerate your progress and enhance your gaming experience. When you redeem Anime Reborn codes, you can receive:
                    </p>
                    <ul className="grid gap-3 text-gray-100 md:grid-cols-1">
                      <li className="flex items-center space-x-3">
                        <span className="text-xl text-yellow-400">•</span>
                        <span className="text-lg">Gems for purchasing premium items and upgrades</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <span className="text-xl text-yellow-400">•</span>
                        <span className="text-lg">Trait Crystals for character enhancement</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <span className="text-xl text-yellow-400">•</span>
                        <span className="text-lg">Frost Keys for accessing special content</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <span className="text-xl text-yellow-400">•</span>
                        <span className="text-lg">Potential Keys for unlocking abilities</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <span className="text-xl text-yellow-400">•</span>
                        <span className="text-lg">Luck Potions for better item drop rates</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <span className="text-xl text-yellow-400">•</span>
                        <span className="text-lg">Special event items and limited-time rewards</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Code Redemption Guide */}
        <section className="relative">
          <div className="absolute inset-0 bg-black bg-opacity-70" />
          <div className="relative z-10">
            <div className="container mx-auto px-4 py-16">
              <h2 className="mb-8 text-center font-lilita-one text-4xl font-bold text-yellow-400">
                How to Redeem Anime Reborn Codes
              </h2>
              <div className="mx-auto max-w-3xl">
                <p className="mb-8 text-center text-lg text-gray-100">
                  Redeeming Anime Reborn codes is a straightforward process that can be completed in just a few steps. Follow this guide to ensure you don't miss out on any valuable rewards from the latest Anime Reborn codes.
                </p>
                <ol className="space-y-4 text-gray-100">
                  <li className="flex items-center space-x-4">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-yellow-400 text-black font-bold">1</span>
                    <span>Launch Anime Reborn on Roblox and wait for the game to fully load</span>
                  </li>
                  <li className="flex items-center space-x-4">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-yellow-400 text-black font-bold">2</span>
                    <span>In the lobby area, locate Luffy sitting on the blue treasure chest</span>
                  </li>
                  <li className="flex items-center space-x-4">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-yellow-400 text-black font-bold">3</span>
                    <span>Click on Luffy to open the Anime Reborn codes redemption menu</span>
                  </li>
                  <li className="flex items-center space-x-4">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-yellow-400 text-black font-bold">4</span>
                    <span>Copy and paste the Anime Reborn code exactly as shown (codes are case-sensitive)</span>
                  </li>
                  <li className="flex items-center space-x-4">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-yellow-400 text-black font-bold">5</span>
                    <span>Click the green "Redeem" button to claim your rewards from the Anime Reborn code</span>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced FAQ Section */}
        <section className="relative">
          <div className="absolute inset-0 bg-black bg-opacity-70" />
          <div className="relative z-10">
            <div className="container mx-auto px-4 py-16">
              <h2 className="mb-8 text-center font-lilita-one text-4xl font-bold text-yellow-400">
                Frequently Asked Questions About Anime Reborn Codes
              </h2>
              <div className="mx-auto max-w-3xl space-y-6">
                <div className="rounded-lg bg-gray-800/50 p-6">
                  <h3 className="mb-2 font-lilita-one text-xl font-bold text-yellow-400">How often are new Anime Reborn codes released?</h3>
                  <p className="text-gray-100">New Anime Reborn codes are typically released during game updates, special events, and when the game reaches certain milestones. The developers regularly release codes to celebrate achievements like visitor counts or likes. We recommend checking our page daily for the latest Anime Reborn codes. Major updates usually bring multiple new codes with better rewards!</p>
                </div>

                <div className="rounded-lg bg-gray-800/50 p-6">
                  <h3 className="mb-2 font-lilita-one text-xl font-bold text-yellow-400">Why isn't my Anime Reborn code working?</h3>
                  <p className="text-gray-100">Anime Reborn codes may expire without notice. To ensure you get the most out of the Anime Reborn codes, redeem them as soon as possible. Double-check that you've entered the code exactly as shown, including any special characters. Some Anime Reborn codes are case-sensitive. If a code still doesn't work, it might have been replaced with a newer version or reached its maximum redemption limit.</p>
                </div>

                <div className="rounded-lg bg-gray-800/50 p-6">
                  <h3 className="mb-2 font-lilita-one text-xl font-bold text-yellow-400">Where can I find new Anime Reborn codes?</h3>
                  <p className="text-gray-100">We update this page daily with new Anime Reborn codes. You can also follow the official Anime Reborn social media channels and join their Discord server for immediate updates. Our team constantly monitors these sources to bring you the latest working Anime Reborn codes. We verify each code before adding it to our list to ensure reliability.</p>
                </div>

                <div className="rounded-lg bg-gray-800/50 p-6">
                  <h3 className="mb-2 font-lilita-one text-xl font-bold text-yellow-400">What should I do with my Anime Reborn rewards?</h3>
                  <p className="text-gray-100">When you receive rewards from Anime Reborn codes, it's essential to use them strategically. Save your gems for limited-time items and special events. Use Trait Crystals to enhance your strongest characters first. Frost Keys and Potential Keys should be saved for characters you plan to main. Luck Potions are best used during grinding sessions or special events to maximize their value.</p>
                </div>

                <div className="rounded-lg bg-gray-800/50 p-6">
                  <h3 className="mb-2 font-lilita-one text-xl font-bold text-yellow-400">Can I use the same Anime Reborn codes multiple times?</h3>
                  <p className="text-gray-100">No, Anime Reborn codes are designed for one-time use per account. Once you've redeemed a code successfully, you won't be able to use it again on the same account. However, some special event Anime Reborn codes might have multiple versions (like CODE1, CODE2, etc.) that you can use sequentially. Always check our list for similar Anime Reborn codes that might be part of a series.</p>
                </div>

                <div className="rounded-lg bg-gray-800/50 p-6">
                  <h3 className="mb-2 font-lilita-one text-xl font-bold text-yellow-400">Are there any special event codes in Anime Reborn?</h3>
                  <p className="text-gray-100">Yes, Anime Reborn frequently releases special event Anime Reborn codes during holidays, game anniversaries, and seasonal events. These codes often provide unique rewards or larger quantities of standard items. Holiday events like Christmas, Halloween, and New Year typically feature exclusive codes with themed rewards. Major game updates and collaborations also bring special limited-time Anime Reborn codes.</p>
                </div>

                <div className="rounded-lg bg-gray-800/50 p-6">
                  <h3 className="mb-2 font-lilita-one text-xl font-bold text-yellow-400">How do I maximize my rewards from Anime Reborn codes?</h3>
                  <p className="text-gray-100">To get the most value from Anime Reborn codes, time your redemptions strategically. Use Luck Potions during double XP events or when farming rare items. Save your gems for limited-time shop items rather than regular purchases. Consider using Trait Crystals and Potential Keys during character boost events. Join a strong clan to share resources and strategies for using code rewards effectively.</p>
                </div>

                <div className="rounded-lg bg-gray-800/50 p-6">
                  <h3 className="mb-2 font-lilita-one text-xl font-bold text-yellow-400">What happens if I miss an Anime Reborn code?</h3>
                  <p className="text-gray-100">If you miss your Anime Reborn codes, don't worry too much! While some exclusive event codes might not return, many popular codes are often replaced with similar or even better versions. The developers frequently release new Anime Reborn codes with comparable rewards. Subscribe to our newsletter to ensure you never miss future codes, and check our page regularly for any Anime Reborn code revivals or replacements.</p>
                </div>

                <div className="rounded-lg bg-gray-800/50 p-6">
                  <h3 className="mb-2 font-lilita-one text-xl font-bold text-yellow-400">Do Anime Reborn codes work on all platforms?</h3>
                  <p className="text-gray-100">Yes, Anime Reborn codes work across all platforms where the game is available. Whether you're playing on PC, mobile, or tablet, as long as you're using the same Roblox account, you can redeem these codes. The redemption process remains the same regardless of your device. Just make sure you're connected to a stable internet connection when redeeming Anime Reborn codes to avoid any issues.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="relative">
          <div className="absolute inset-0 bg-black bg-opacity-70" />
          <div className="relative z-10">
            <div className="container mx-auto px-4 py-16">
              <div className="mx-auto max-w-2xl text-center">
                <h2 className="mb-4 font-lilita-one text-3xl font-bold text-yellow-400">
                  Never Miss New Anime Reborn Codes!
                </h2>
                <p className="mb-8 text-gray-100">
                  Subscribe to our newsletter and get instant notifications when new Anime Reborn codes are released. Stay ahead of the game and never miss out on free rewards!
                </p>
                <SubscribeForm />
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="relative">
          <div className="absolute inset-0 bg-black bg-opacity-90" />
          <div className="relative z-10">
            <div className="container mx-auto px-4 py-8 text-center text-gray-300">
              <p> 2024 AnimeRebornCodes.org - Not affiliated with Roblox or Anime Reborn</p>
              <p className="mt-2">All game assets and trademarks belong to their respective owners</p>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
