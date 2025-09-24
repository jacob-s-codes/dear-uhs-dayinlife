import React from "react";
import { JacobTubeLogo } from "../components/Jacobtube";
import Bell from "../components/Bell";

const Page = () => {
  return (
    <div className="bg-black min-h-screen text-white">
      {/* Navbar */}
      <div className="flex flex-row items-center justify-between px-12 py-4 bg-black sticky top-0 z-50">
        <a href="/jacobtube">
          <JacobTubeLogo size="lg" />
        </a>
        <div className="flex flex-row items-center gap-12">
          <Bell />
          <img
            src="/ishanlogo.webp"
            alt="Ishan logo"
            className="rounded-full w-10 h-10"
          />
        </div>
      </div>

      {/* Video Section */}
      <div className="px-12 py-6">
        {/* Video Player */}
        <div className="w-full aspect-video">
          <iframe
            className="w-full h-full rounded-lg"
            src="https://youtube.com/embed/sXvf-6wYjAA"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>

        </div>


        {/* Video Info */}
        <div className="mt-4 flex flex-col gap-3">
          {/* Title */}
          <h1 className="text-xl font-bold">
            Dear Ishan - A Day in the Life Letter
          </h1>

          {/* Channel Row */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img
                src="/jacobimg.png"
                alt="Channel Logo"
                className="w-10 h-10 rounded-full"
              />
              <div>
                <p className="font-semibold">From: Jacob Shaul</p>
                <p className="text-sm text-gray-400">100K subscribers</p>
              </div>
            </div>

            {/* Subscribe Button */}
            <button className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-md font-semibold">
              Subscribe
            </button>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-lg font-bold mb-2">Comments</h2>

          {/* Pinned Comment */}
          <div className="flex gap-4 p-4 bg-gray-900 rounded-lg">
            <img
              src="/jacobimg.png"
              alt="Pinned User"
              className="w-10 h-10 rounded-full"
            />
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <p className="font-semibold">Jacob Shaul</p>
                <span className="text-xs text-gray-400 bg-gray-700 px-2 py-0.5 rounded">
                  Pinned
                </span>
              </div>
              <p className="text-gray-300 mt-1">
                Dear Ishan,

                Good morning! First of all, I really enjoyed your letter, and think you might have a future in rapping.

                Second, I want to mention that this is my first time doing anything like this, so I hope you’ll excuse my shaky videotaping and also large gaps of time where I forgot to record (sorry!).

                I was blown away by the creativity in your letter and hope to emulate it in mine. Though I handed my first letter to you on paper, I hope to utilize technology to convey more of myself, from my ideas to my daily routines.

                Part of that is waking up early on Mondays for office hours. Today was beautiful – the sun engulfed every part of the coast up to the city skyline.

                I spent too much time admiring the sunrise, though, and had to run to catch the bus :(

                This would probably be a good time to answer the question you posed to me in your letter.

                I would say limiting technology, especially for teens, is beneficial. I think a lot of teens have lost the powerful skill of communication because of their phones.

                I know that might seem strange given the context of this letter. I hope to show you that technology can be a powerful communication tool (if used correctly).

                Last week, we read “Likes” by Sarah Shun-Lien Bynum, where a girl and her father feel disconnected from each other, separated by their ages.

                I found it interesting that the mode of epistolary communication was through the Instagram posts that the daughter created.

                In that way, technology is somewhat redefining how we transfer communication – how do my words, stories, and feelings reach you?

                I love this assignment because of the creativity that we are given in how we exchange this information – that we are able to utilize the different mediums that exist in writing and aren’t bound to one form of communication.

                In that way, even in the silent car rides between the father and daughter, there is still conversation. The dad is still listening and trying to understand his daughter’s message through her posts.

                This idea is directly transferable to writing regular letters – that this exchange of information is in complete silence, where only one person is allowed to share at a time.

                Even now, it is only me speaking to you, and in a week it will only be you speaking to me. And yet, everything is silent.

                Technology is powerful because of its ability to amplify – that in a comments section, you can hear the letters of thousands of people all at once.

                This, I believe, can allow us to lose sight of the voices that really matter to us – that when the daughter is able to read the dozens of comments, she loses sight of her father’s.

                That isn’t to say that the disconnect between the two is the daughter’s fault. Rather, it is the division in the medium that separates the two, which doesn’t allow ideas, thoughts and conversation to flow between them.

                Bynum writes: “New post: a hand holding a clear plastic Starbucks cup filled with a liquid the color Pepto-Bismol. In it floated small chunks of something red.”

                This quote highlights that it might not simply be the medium or language that separates individuals in a correspondence, but the culture.

                It is evident that the father doesn’t understand or see the world in the same way that his daughter does; that popular drinks for her are unknown items to him.

                Not only that, but in his mind and based on his culture, he doesn’t see her work as having merit, noting that “he’d seen practically the same image posted a hundred times before.”

                I wonder, as technology feeds us new information 24/7, what that means in terms of creativity and idiosyncrasy.

                Maybe that’s why the epistolary form is more important now than ever – every letter unique to the recipient, context-specific, and personalized.

                But does it need to be this way?

                Isn’t it enticing to be able to share our ideas and experiences with as many people as possible?

                I wonder what your thoughts are on this. I apologize for such a broad check-in, but I’m excited to see what you do with it.

                Thanks for spending the day with me,
                Jacob

              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
