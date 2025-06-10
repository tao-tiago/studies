import React from "react"
import Likes from "../components/Likes"
import LikesConnect from "../connected/Likes"
import CommentsConnect from "../connected/Comments"
import Comments from "../components/Comments"

export default function Layout() {

  return (
    <div>
      <div className="flex h-screen bg-green-300">
        <div className="flex-1 flex flex-col overflow-hidden">
          <div className="flex h-full">
            <main className="flex flex-row w-full bg-white overflow-x-hidden overflow-y-auto ">
              <div className="flex-1 border-2 border-red-900 border-dashed bg-blue-400">
                <h1 className="text-7xl text-center text-gray-900 font-extrabold mb-4">
                  Context
                </h1>
                <Likes />
                <Comments />
              </div>
              <div className="flex-1 border-2 border-blue-900 border-dashed bg-yellow-400">
                <h1 className="text-7xl text-center text-gray-900 font-extrabold mb-4">
                  Redux
                </h1>
                <LikesConnect />
                <CommentsConnect />
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  )
}
